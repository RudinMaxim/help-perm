import { useState } from 'react';

interface MessageData {
  name: string;
  email: string;
  message: string;
}

export const useWhatsAppMessage = (phoneNumber: string) => {
  const [messageData, setMessageData] = useState<MessageData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setMessageData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendMessage = () => {
    const { name, email, message } = messageData;
    const messageText = `Имя: ${name}\nЭлектронная почта: ${email}\n\n${message}`;
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');
    setMessageData({ name: '', email: '', message: '' });
  };

  return { messageData, handleChange, sendMessage };
};
