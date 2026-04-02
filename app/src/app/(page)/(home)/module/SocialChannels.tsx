import Image from 'next/image';
import { FaTelegram } from 'react-icons/fa';
import styles from '../Home.module.scss';

interface SocialChannelsProps {
  eyebrow: string;
  title: string;
  mainPhone: string;
  callButtonText: string;
  callButtonDescription: string;
  formButtonText: string;
  formButtonDescription: string;
  maxMessengerLink: string;
  secondTelegramLink: string;
  maxButtonText: string;
  maxButtonDescription: string;
  telegramButtonText: string;
  telegramButtonDescription: string;
}

export function SocialChannels({
  eyebrow,
  title,
  mainPhone,
  callButtonText,
  callButtonDescription,
  formButtonText,
  formButtonDescription,
  maxMessengerLink,
  secondTelegramLink,
  maxButtonText,
  maxButtonDescription,
  telegramButtonText,
  telegramButtonDescription,
}: SocialChannelsProps) {
  if (!mainPhone && !maxMessengerLink && !secondTelegramLink) {
    return null;
  }

  return (
    <section className={styles.socialChannels} aria-labelledby="social-channels-title" data-motion-section>
      <div className={styles.socialChannels__header}>
        {eyebrow?.trim() ? <p className={styles.sectionEyebrow}>{eyebrow}</p> : null}
        {title?.trim() ? (
          <h2 id="social-channels-title" className={styles.socialChannels__title}>
            {title}
          </h2>
        ) : null}
      </div>

      <div className={styles.socialChannels__list} data-motion-stagger>
        {mainPhone ? (
          <a
            href={`tel:${mainPhone}`}
            className={`${styles.socialChannels__badge} ${styles.socialChannels__badgePrimary}`}
            data-motion-card
          >
            <span className={styles.socialChannels__media}>
              <span className={styles.socialChannels__phoneIcon} aria-hidden="true">+</span>
            </span>
            <span className={styles.socialChannels__content}>
              <strong>{callButtonText}</strong>
              <span>{callButtonDescription}</span>
            </span>
          </a>
        ) : null}

        <a
          href="#contactUs"
          className={styles.socialChannels__badge}
          data-motion-card
        >
          <span className={styles.socialChannels__media}>
            <span className={styles.socialChannels__formIcon} aria-hidden="true">•••</span>
          </span>
          <span className={styles.socialChannels__content}>
            <strong>{formButtonText}</strong>
            <span>{formButtonDescription}</span>
          </span>
        </a>

        {maxMessengerLink ? (
          <a
            href={maxMessengerLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialChannels__badge}
            data-motion-card
          >
            <span className={styles.socialChannels__media}>
              <Image
                src="/logo-max.png"
                alt=""
                aria-hidden="true"
                width={28}
                height={28}
              />
            </span>
            <span className={styles.socialChannels__content}>
              <strong>{maxButtonText}</strong>
              <span>{maxButtonDescription}</span>
            </span>
          </a>
        ) : null}

        {secondTelegramLink ? (
          <a
            href={secondTelegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialChannels__badge}
            data-motion-card
          >
            <span className={styles.socialChannels__media}>
              <FaTelegram size={24} aria-hidden="true" />
            </span>
            <span className={styles.socialChannels__content}>
              <strong>{telegramButtonText}</strong>
              <span>{telegramButtonDescription}</span>
            </span>
          </a>
        ) : null}
      </div>
    </section>
  );
}
