// app/hooks/useWhatsAppMessage.ts
'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { toast } from 'sonner';

interface MessageData {
  name: string;
  phone: string;
  message: string;
}

interface ValidationErrors {
  name?: string;
  phone?: string;
  message?: string;
}

interface SendMessageResult {
  success: boolean;
  errors?: ValidationErrors;
}

async function sendToGoogleSheets(data: MessageData) {
  try {
    const response = await fetch('/api/send-to-sheets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to send data to Google Sheets');
    }

    return true;
  } catch (error) {
    console.error('Error sending data to Google Sheets:', error);
    return false;
  }
}

// function sendToWhatsApp(data: MessageData) {
//   const { name, phone, message } = data;
//   const whatsappMessage = `https://wa.me/${MAIN_PHONE_NUMBER}?text=Имя: ${name}%0AТелефон: +7${phone}%0AСообщение: ${message}`;
//   window.open(whatsappMessage, '_blank');
// }

export const useWhatsAppMessage = () => {
  const [messageData, setMessageData] = useState<MessageData>({
    name: '',
    phone: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const validateForm = useCallback((): ValidationErrors => {
    const errors: ValidationErrors = {};
    if (!messageData.name.trim()) errors.name = 'Имя обязательно';
    if (messageData.phone.length !== 10)
      errors.phone = 'Неверный формат телефона';
    if (!messageData.message.trim()) errors.message = 'Сообщение обязательно';
    return errors;
  }, [messageData]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

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
      } else {
        setMessageData((prev) => ({ ...prev, [name]: value }));
      }
    },
    []
  );

  const sendMessage = useCallback(async (): Promise<SendMessageResult> => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      return { success: false, errors };
    }

    setIsLoading(true);

    try {
      const sheetsSent = await sendToGoogleSheets(messageData);
      if (!sheetsSent) {
        throw new Error('Failed to send data to Google Sheets');
      }

      router.push('/#message-sent');
      setMessageData({ name: '', phone: '', message: '' });
      return { success: true };
    } catch (error) {
      console.error('Failed to send message:', error);
      return {
        success: false,
        errors: {
          message: 'Не удалось отправить сообщение. Попробуйте еще раз.',
        },
      };
    } finally {
      setIsLoading(false);
    }
  }, [messageData, validateForm, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await sendMessage();
    if (result.success) {
      toast.success('Сообщение успешно отправлено!');
    } else if (result.errors) {
      Object.values(result.errors).forEach((error) => {
        toast.error(error);
      });
    } else {
      toast.error('Произошла ошибка при отправке сообщения.');
    }
  };

  return { messageData, handleChange, handleSubmit, isLoading };
};
