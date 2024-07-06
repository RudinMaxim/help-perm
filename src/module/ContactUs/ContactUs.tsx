'use client';
import { MAIN_EMAIL, MAIN_PHONE_NUMBER, SECOND_PHONE_NUMBER } from '@/constants/phone';
import { useWhatsAppMessage } from '@/hook/useWhatsAppMessage';
import Link from 'next/link';
import styles from './ContactUs.module.scss';

interface ContactUsProps {
  title: string;
  phone: string;
  isMainPage?: boolean;
}

export function ContactUs({ title, phone, isMainPage }: ContactUsProps) {
  const { messageData, handleChange, sendMessage } = useWhatsAppMessage(phone);

  const MainTitle = isMainPage ? <h1 className={styles.title}>Запишитесь <br /> на <b>бесплатную</b>  <br /> консультацию</h1> : <h2 className={styles.title}>Запишитесь <br /> на <b>бесплатную</b>  <br /> консультацию</h2>

  return (
    <section id="contactUs" className={`${styles.contact__us} container`}>
      <div className={styles.contact__us__info}>
        {MainTitle}

        <div className={styles.contact__us__info__list}>
          <ul>
            <li>
              <Link href={`tel:${MAIN_PHONE_NUMBER}`} target="_blank" rel="noreferrer">
                +7 922 922 80 04
              </Link>
            </li>
            <li>
              <Link href={`tel:${SECOND_PHONE_NUMBER}`} target="_blank" rel="noreferrer">
                +7 923 523 11 51
              </Link>
            </li>

            <li>
              <Link href={`mailto:${MAIN_EMAIL}`}>
                {MAIN_EMAIL}
              </Link>
            </li>
          </ul>
          <ul className={styles.contact__us__info__social}>
            <li>Время работы: <b>круглосуточно</b></li>
          </ul>
        </div>
      </div>

      <form className={styles.contact__us__form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.contact__us__form__inputs}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Как к вам общаться?"
            value={messageData.name}
            className={styles.input}
            onChange={handleChange}
          />
          <label htmlFor="phone" className={styles.label}>
            <span>+7</span>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={messageData.phone}
              onChange={handleChange}
              maxLength={10}
              placeholder="9XXXXXXXXX"
            />
          </label>

          <textarea
            id="message"
            name="message"
            placeholder='Опишите свою проблему'
            value={messageData.message}
            onChange={handleChange}
            required
          />
        </div>


        <button
          type="button"
          className={styles.submitButton}
          onClick={sendMessage}
        >
          Сделать первый шаг
        </button>
      </form>
    </section>
  );
}