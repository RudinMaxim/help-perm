'use client';
import { useId } from 'react';
import { useContactForm } from '@/hook/useContactForm';
import Link from 'next/link';
import styles from './ContactUs.module.scss';

interface ContactUsProps {
  isMainPage?: boolean;
  mainEmail: string;
  mainPhoneNumber: string;
  secondPhoneNumber: string;
}

export function ContactUs({
  isMainPage,
  mainEmail,
  mainPhoneNumber,
  secondPhoneNumber,
}: ContactUsProps) {
  const { messageData, handleChange, handleSubmit, isLoading, validationErrors, serverError } =
    useContactForm();
  const headingId = useId();
  const TitleTag = isMainPage ? 'h1' : 'h2';

  return (
    <section
      id="contactUs"
      className={`${styles.contact__us} container`}
      aria-labelledby={headingId}
    >
      <div className={styles.contact__us__info}>
        <TitleTag id={headingId} className={styles.title}>
          Запишитесь <br /> на <b>бесплатную</b> <br /> консультацию
        </TitleTag>

        <div className={styles.contact__us__info__list}>
          <ul>
            <li>
              <Link
                href={`tel:${mainPhoneNumber}`}
              >
                {mainPhoneNumber}
              </Link>
            </li>
            <li>
              <Link
                href={`tel:${secondPhoneNumber}`}
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
          </ul>
        </div>
      </div>

      <form
        className={styles.contact__us__form}
        onSubmit={handleSubmit}
        aria-busy={isLoading}
        noValidate
      >
        {serverError ? (
          <div className={styles.serverError} role="alert">
            {serverError}
          </div>
        ) : null}
        <div className={styles.contact__us__form__inputs}>
          <label htmlFor="name" className="visually-hidden">
            Имя
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Как к вам обращаться?"
            value={messageData.name}
            onChange={handleChange}
            className={styles.input}
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={!!validationErrors?.name}
            aria-describedby={validationErrors?.name ? 'error-name' : undefined}
          />
          {validationErrors?.name ? (
            <div id="error-name" role="alert" className={styles.error}>
              {validationErrors.name}
            </div>
          ) : null}
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
              inputMode="numeric"
              autoComplete="tel"
              required
              aria-required="true"
              aria-invalid={!!validationErrors?.phone}
              aria-describedby={validationErrors?.phone ? 'error-phone' : undefined}
            />
          </label>
          {validationErrors?.phone ? (
            <div id="error-phone" role="alert" className={styles.error}>
              {validationErrors.phone}
            </div>
          ) : null}

          <label htmlFor="message" className="visually-hidden">
            Сообщение
          </label>
          <textarea
            id="message"
            name="message"
            value={messageData.message}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={!!validationErrors?.message}
            aria-describedby={validationErrors?.message ? 'error-message' : undefined}
          />
          {validationErrors?.message ? (
            <div id="error-message" role="alert" className={styles.error}>
              {validationErrors.message}
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isLoading}
          aria-disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className={styles.spinner} aria-hidden="true" />
              <span className="visually-hidden">Отправка</span>
              Отправка...
            </>
          ) : (
            'Сделать первый шаг'
          )}
        </button>
      </form>
    </section>
  );
}
