'use client';
import { useId } from 'react';
import { useContactForm } from '@/hook/useContactForm';
import Link from 'next/link';
import { PATH_URL } from '@/constants/path';
import type { UiContent } from '@/lib/cms';
import styles from './ContactUs.module.scss';

interface ContactUsProps {
  isMainPage?: boolean;
  mainEmail: string;
  mainPhoneNumber: string;
  secondPhoneNumber: string;
  uiText: UiContent | null;
}

export function ContactUs({
  isMainPage,
  mainEmail,
  mainPhoneNumber,
  secondPhoneNumber,
  uiText,
}: ContactUsProps) {
  const { messageData, handleChange, handleSubmit, isLoading, validationErrors, serverError } =
    useContactForm({
      nameRequiredError: uiText?.contactFormNameRequiredError ?? '',
      phoneFormatError: uiText?.contactFormPhoneFormatError ?? '',
      messageRequiredError: uiText?.contactFormMessageRequiredError ?? '',
      consentRequiredError: uiText?.contactFormConsentRequiredError ?? '',
      sendSuccessText: uiText?.contactFormSendSuccessText ?? '',
      sendFailureText: uiText?.contactFormSendFailureText ?? '',
    });
  const headingId = useId();
  const TitleTag = isMainPage ? 'h1' : 'h2';

  return (
    <section
      id="contactUs"
      className={`${styles.contactSection} container`}
      aria-labelledby={headingId}
      data-motion-section
    >
      <div className={styles.contactFrame}>
        <div className={styles.contactInfo}>
          <p className={styles.contactEyebrow}>Связаться с нами</p>
          <TitleTag id={headingId} className={styles.title}>
            {uiText?.contactFormTitlePrefix ?? ''} {uiText?.contactFormTitleMiddle ?? ''}{' '}
            <b>{uiText?.contactFormTitleHighlight ?? ''}</b>{' '}
            {uiText?.contactFormTitleSuffix ?? ''}
          </TitleTag>
          <p className={styles.contactLead}>
            Расскажите коротко о ситуации, и мы подскажем понятный следующий шаг без давления и
            лишних формальностей.
          </p>

          <div className={styles.contactCards} data-motion-stagger>
            <article className={styles.contactCard} data-motion-card>
              <p className={styles.contactCardLabel}>Телефон</p>
              {mainPhoneNumber ? (
                <Link href={`tel:${mainPhoneNumber}`}>
                  {mainPhoneNumber}
                </Link>
              ) : null}
              {secondPhoneNumber ? (
                <Link href={`tel:${secondPhoneNumber}`}>
                  {secondPhoneNumber}
                </Link>
              ) : null}
            </article>

            <article className={styles.contactCard} data-motion-card>
              <p className={styles.contactCardLabel}>Электронная почта</p>
              {mainEmail ? (
                <Link href={`mailto:${mainEmail}`}>
                  {mainEmail}
                </Link>
              ) : null}
            </article>

            <article className={styles.contactCard} data-motion-card>
              <p className={styles.contactCardLabel}>Режим связи</p>
              <p>{uiText?.contactFormWorkingHoursText ?? ''}</p>
            </article>
          </div>
        </div>

        <form
          className={styles.contactForm}
          onSubmit={handleSubmit}
          aria-busy={isLoading}
          noValidate
          data-motion-card
        >
          <div className={styles.formHeader}>
            <h3 className={styles.formTitle}>Форма обращения</h3>
            <p className={styles.formCaption}>
              Ответим конфиденциально и подберём удобный формат дальнейшего общения.
            </p>
          </div>

          {serverError ? (
            <div className={styles.serverError} role="alert">
              {serverError}
            </div>
          ) : null}

          <div className={styles.formGrid}>
            <div className={styles.field}>
              <label htmlFor="name" className={styles.fieldLabel}>
                {uiText?.contactFormNameLabel ?? ''}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={uiText?.contactFormNamePlaceholder ?? ''}
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
            </div>

            <div className={styles.field}>
              <label htmlFor="phone" className={styles.fieldLabel}>
                {uiText?.contactFormPhoneLabel ?? ''}
              </label>
              <label htmlFor="phone" className={styles.label}>
                <span>+7</span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={messageData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  placeholder={uiText?.contactFormPhonePlaceholder ?? ''}
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
            </div>

            <div className={`${styles.field} ${styles.fieldFull}`}>
              <label htmlFor="message" className={styles.fieldLabel}>
                {uiText?.contactFormMessageLabel ?? ''}
              </label>
              <textarea
                id="message"
                name="message"
                value={messageData.message}
                onChange={handleChange}
                className={styles.textArea}
                placeholder={uiText?.contactFormMessagePlaceholder ?? ''}
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

            <label className={`${styles.consent} ${styles.fieldFull}`}>
              <input
                type="checkbox"
                name="consentGiven"
                checked={messageData.consentGiven}
                onChange={handleChange}
                required
                aria-required="true"
              />
              <span>
                {uiText?.contactFormConsentPrefix ?? ''}{' '}
                <Link href={PATH_URL.privacyPolicy.url} target="_blank" rel="noopener noreferrer">
                  {uiText?.contactFormConsentLinkText ?? ''}
                </Link>
                {uiText?.contactFormConsentSuffix ?? ''}
              </span>
            </label>
            {validationErrors?.consent ? (
              <div role="alert" className={`${styles.error} ${styles.fieldFull}`}>
                {validationErrors.consent}
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isLoading}
            aria-disabled={isLoading}
            data-motion-cta
          >
            {isLoading ? (
              <>
                <span className={styles.spinner} aria-hidden="true" />
                <span className="visually-hidden">
                  {uiText?.contactFormSubmittingSrText ?? ''}
                </span>
                {uiText?.contactFormSubmittingButtonText ?? ''}
              </>
            ) : (
              uiText?.contactFormSubmitButtonText ?? ''
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
