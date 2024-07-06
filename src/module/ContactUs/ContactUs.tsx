'use client';
import { MAIN_EMAIL, MAIN_PHONE_NUMBER, MAIN_TLEGRAMM_LINK, SECOND_PHONE_NUMBER } from '@/constants/phone';
import { useWhatsAppMessage } from '@/hook/useWhatsAppMessage';
import Link from 'next/link';
import { FaEnvelope, FaPhone, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import styles from './ContactUs.module.scss';

interface ContactUsProps {
  title: string;
  phone: string;
  isMainPage?: boolean;
}

export function ContactUs({ title, phone, isMainPage }: ContactUsProps) {
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
      <ul className={styles.contactInfo}>
        <li>
          <Link href={`tel:${SECOND_PHONE_NUMBER}`} target="_blank" rel="noreferrer">
            <FaPhone size={'2rem'} />
            +7 923 523 11 51
          </Link>
        </li>
        <li>
          <Link href={`tel:${MAIN_PHONE_NUMBER}`} target="_blank" rel="noreferrer">
            <FaPhone size={'2rem'} />
            +7 922 922 80 04
          </Link>
        </li>
        <li>
          <Link href={`mailto:${MAIN_EMAIL}`}>
            <FaEnvelope size={'2rem'} />
            {MAIN_EMAIL}
          </Link>
        </li>
        <li>
          <Link href={MAIN_TLEGRAMM_LINK} target="_blank" rel="noreferrer">
            <FaTelegram size={'2rem'} />
            Telegram
          </Link>
        </li>
        <li>
          <Link href={`https://wa.me/${MAIN_PHONE_NUMBER}`} target="_blank" rel="noreferrer">
            <FaWhatsapp size={'2rem'} />
            WhatsApp
          </Link>
        </li>
      </ul>
    </section>
  );
}