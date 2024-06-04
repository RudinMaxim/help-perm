'use client';
import { useWhatsAppMessage } from '@/hook/useWhatsAppMessage';
import styles from '../Home.module.scss';

interface ContactUsProps {
  title: string;
  phone: string;
}

export function ContactUs({ title, phone }: ContactUsProps) {
  const { messageData, handleChange, sendMessage } = useWhatsAppMessage(phone);

  return (
    <section id="contactUs" className={styles.contactUs}>
      <h2 className={styles.title}>{title}</h2>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Имя</label>
          <input
            type="text"
            id="name"
            name="name"
            value={messageData.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Электронная почта</label>
          <input
            type="email"
            id="email"
            name="email"
            value={messageData.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Сообщение</label>
          <textarea
            id="message"
            name="message"
            value={messageData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button
          type="button"
          className={styles.submitButton}
          onClick={sendMessage}
        >
          Отправить в WhatsApp
        </button>
      </form>
    </section>
  );
}
