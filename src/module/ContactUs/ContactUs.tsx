'use client';
import { useWhatsAppMessage } from '@/hook/useWhatsAppMessage';
import Link from 'next/link';
import styles from './ContactUs.module.scss';

interface ContactUsProps {
  title: string;
  phone: string;
  isMainPage?: boolean;
  mainEmail: string;
  mainPhoneNumber: string;
  secondPhoneNumber: string;
}

export function ContactUs({
  title,
  phone,
  isMainPage,
  mainEmail,
  mainPhoneNumber,
  secondPhoneNumber,
}: ContactUsProps) {
  const { messageData, handleChange, handleSubmit, isLoading } =
    useWhatsAppMessage(phone);

  const MainTitle = isMainPage ? (
    <h1 className={styles.title}>
      Запишитесь <br /> на <b>бесплатную</b> <br /> консультацию
    </h1>
  ) : (
    <h2 className={styles.title}>
      Запишитесь <br /> на <b>бесплатную</b> <br /> консультацию
    </h2>
  );

  return (
    <section id="contactUs" className={`${styles.contact__us} container`}>
      <div className={styles.contact__us__info}>
        {MainTitle}

        <div className={styles.contact__us__info__list}>
          <ul>
            <li>
              <Link
                href={`tel:${mainPhoneNumber}`}
                target="_blank"
                rel="noreferrer"
              >
                {mainPhoneNumber}
              </Link>
            </li>
            <li>
              <Link
                href={`tel:${secondPhoneNumber}`}
                target="_blank"
                rel="noreferrer"
              >
                {secondPhoneNumber}
              </Link>
            </li>

            <li>
              <Link href={`mailto:${mainEmail}`} style={{ fontSize: '1rem' }}>
                {mainEmail}
              </Link>
            </li>
          </ul>
          <ul className={styles.contact__us__info__social}>
            <li>
              Время работы: <b>круглосуточно</b>
            </li>
            <li>
              Адрес:{' '}
              <b>
                <Link
                  href={'https://yandex.ru/maps/-/CDGVvO~I'}
                  target="_blank"
                >
                  Фиалковая улица, 13, Пермь, 614023
                </Link>
              </b>
            </li>
            <li>
              ИИН: <b>6330044310</b>
            </li>
          </ul>
        </div>
      </div>

      <form className={styles.contact__us__form} onSubmit={handleSubmit}>
        <div className={styles.contact__us__form__inputs}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Как к вам обращаться?"
            value={messageData.name}
            onChange={handleChange}
            className={styles.input}
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
            value={messageData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isLoading}
        >
          {isLoading ? 'Отправка...' : 'Сделать первый шаг'}
        </button>
      </form>
    </section>
  );
}
