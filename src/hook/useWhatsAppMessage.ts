import { MAIN_PHONE_NUMBER } from '@/constants/phone';
import { useState } from 'react';

interface MessageData {
  name: string;
  phone: string;
  message: string;
}

export const useWhatsAppMessage = (phoneNumber: string) => {
  const [messageData, setMessageData] = useState<MessageData>({
    name: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      // Удаляем все нецифровые символы
      let cleanedValue = value.replace(/\D/g, '');

      // Убираем первую цифру, если она 7 или 8
      if (cleanedValue.startsWith('7') || cleanedValue.startsWith('8')) {
        cleanedValue = cleanedValue.slice(1);
      }

      // Ограничиваем длину до 10 цифр
      cleanedValue = cleanedValue.slice(0, 10);

      // Если первая цифра не 9, заменяем ее на 9
      if (cleanedValue.length > 0 && cleanedValue[0] !== '9') {
        cleanedValue = '9' + cleanedValue.slice(1);
      }

      setMessageData((prev) => ({ ...prev, [name]: cleanedValue }));
    } else {
      setMessageData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const sendMessage = () => {
    const { name, phone, message } = messageData;
    const fullPhone = `7${phone}`;
    const whatsappMessage = `https://wa.me/${MAIN_PHONE_NUMBER}?text=Имя: ${name}%0AТелефон: +7${phone}%0AСообщение: ${message}`;
    window.open(whatsappMessage, '_blank');
  };

  return { messageData, handleChange, sendMessage };
};
