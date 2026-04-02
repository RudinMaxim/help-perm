import Image from 'next/image';
import { FaTelegram } from 'react-icons/fa';
import styles from '../Home.module.scss';

interface SocialChannelsProps {
  mainPhone: string;
  maxMessengerLink: string;
  secondTelegramLink: string;
  maxButtonText: string;
  telegramButtonText: string;
}

export function SocialChannels({
  mainPhone,
  maxMessengerLink,
  secondTelegramLink,
  maxButtonText,
  telegramButtonText,
}: SocialChannelsProps) {
  if (!mainPhone && !maxMessengerLink && !secondTelegramLink) {
    return null;
  }

  return (
    <section className={styles.socialChannels} aria-labelledby="social-channels-title" data-motion-section>
      <div className={styles.socialChannels__header}>
        <p className={styles.sectionEyebrow}>На связи</p>
        <h2 id="social-channels-title" className={styles.socialChannels__title}>
          Выберите удобный способ связаться с нами
        </h2>
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
              <strong>Позвонить</strong>
              <span>Связь сразу по телефону</span>
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
            <strong>Оставить заявку</strong>
            <span>Заполнить короткую форму</span>
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
              <span>Быстрый ответ в Max</span>
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
              <span>Написать в Telegram</span>
            </span>
          </a>
        ) : null}
      </div>
    </section>
  );
}
