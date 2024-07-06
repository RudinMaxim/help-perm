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
    setMessageData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendMessage = () => {
    const { name, phone, message } = messageData;
    const messageText = `Имя: ${name}\nНомер: ${phone}\n\n${message}`;
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');
    setMessageData({ name: '', phone: '', message: '' });
  };

  return { messageData, handleChange, sendMessage };
};
