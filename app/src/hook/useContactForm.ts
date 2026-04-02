// app/hooks/useContactForm.ts
'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { toast } from 'sonner';

interface MessageData {
  name: string;
  phone: string;
  message: string;
  consentGiven: boolean;
}

interface ValidationErrors {
  name?: string;
  phone?: string;
  message?: string;
  consent?: string;
}

interface ContactFormMessages {
  nameRequiredError: string;
  phoneFormatError: string;
  messageRequiredError: string;
  consentRequiredError: string;
  sendSuccessText: string;
  sendFailureText: string;
}

interface SendMessageResult {
  success: boolean;
  errors?: ValidationErrors;
}

async function sendToContactApi(data: MessageData) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to send data to CMS');
    }

    return true;
  } catch (error) {
    console.error('Error sending data to CMS:', error);
    return false;
  }
}

export const useContactForm = (messages: ContactFormMessages) => {
  const [messageData, setMessageData] = useState<MessageData>({
    name: '',
    phone: '',
    message: '',
    consentGiven: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const router = useRouter();

  const validateForm = useCallback((): ValidationErrors => {
    const errors: ValidationErrors = {};
    if (!messageData.name.trim()) errors.name = messages.nameRequiredError;
    if (messageData.phone.length !== 10)
      errors.phone = messages.phoneFormatError;
    if (!messageData.message.trim()) errors.message = messages.messageRequiredError;
    if (!messageData.consentGiven) {
      errors.consent = messages.consentRequiredError;
    }
    setValidationErrors(errors);
    return errors;
  }, [messageData, messages]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      const isCheckbox = e.target instanceof HTMLInputElement && e.target.type === 'checkbox';

      if (name === 'phone') {
        let cleanedValue = value.replace(/\D/g, '');
        if (cleanedValue.startsWith('7') || cleanedValue.startsWith('8')) {
          cleanedValue = cleanedValue.slice(1);
        }
        cleanedValue = cleanedValue.slice(0, 10);
        if (cleanedValue.length > 0 && cleanedValue[0] !== '9') {
          cleanedValue = '9' + cleanedValue.slice(1);
        }
        setMessageData((prev) => ({ ...prev, [name]: cleanedValue }));
        setValidationErrors((prev) => ({ ...prev, phone: undefined }));
      } else if (isCheckbox) {
        const checked = (e.target as HTMLInputElement).checked;
        setMessageData((prev) => ({ ...prev, [name]: checked }));
        setValidationErrors((prev) => ({ ...prev, consent: undefined }));
      } else {
        setMessageData((prev) => ({ ...prev, [name]: value }));
        setValidationErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    []
  );

  const sendMessage = useCallback(async (): Promise<SendMessageResult> => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      return { success: false, errors };
    }
    setValidationErrors({});
    setServerError(null);
    setIsLoading(true);

    try {
      const sheetsSent = await sendToContactApi(messageData);
      if (!sheetsSent) {
        throw new Error('Failed to submit application');
      }

      router.push('/#message-sent');
      setMessageData({ name: '', phone: '', message: '', consentGiven: false });
      toast.success(messages.sendSuccessText);
      return { success: true };
    } catch (error) {
      console.error('Failed to send message:', error);
      const msg = error instanceof Error ? error.message : messages.sendFailureText;
      setServerError(msg);
      toast.error(messages.sendFailureText);
      return {
        success: false,
        errors: {
          message: msg,
        },
      };
    } finally {
      setIsLoading(false);
    }
  }, [messageData, messages, validateForm, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await sendMessage();
    if (!result.success && result.errors) {
      // show the first validation/server error inline; sonner already shows toast in sendMessage
      Object.values(result.errors).forEach((error) => {
        // keep toasts but also keep inline errors
        toast.error(error);
      });
    }
    return result;
  };

  return { messageData, handleChange, handleSubmit, isLoading, validationErrors, serverError };
};
