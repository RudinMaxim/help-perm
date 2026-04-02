import { ButtonLink } from '@/ui';
import Image from 'next/image';
import { FaTelegram } from 'react-icons/fa';
import style from '../Home.module.scss';

interface HeroProps {
  title: string;
  description: string;
  howWeWorkTitle: string;
  steps: Array<{
    id: number;
    title: string;
    description: string;
  }>;
  mainPhone: string;
  secondTelegramLink: string;
  maxMessengerLink: string;
  maxButtonText: string;
  telegramButtonText: string;
  callButtonText: string;
}

export function Hero({
  title,
  description,
  howWeWorkTitle,
  steps,
  mainPhone,
  secondTelegramLink,
  maxMessengerLink,
  maxButtonText,
  telegramButtonText,
  callButtonText,
}: HeroProps) {
  const heroSteps = steps.slice(0, 3);

  return (
    <section className={style.hero} aria-labelledby="home-hero-title" data-motion-section>
      <div className={style.hero__grid} data-motion-hero>
        <div className={style.hero__content}>
          <p className={style.hero__eyebrow} data-motion-item>
            Бесплатная и конфиденциальная поддержка
          </p>
          <h1 id="home-hero-title" className={style.hero__title} data-motion-item>{title}</h1>
          <p className={style.hero__description} data-motion-item>{description}</p>

          <div className={style.hero__actions} data-motion-item>
            <ButtonLink href="#contactUs" className={style.hero__button}>
              Оставить заявку
            </ButtonLink>
            <p className={style.hero__actionsCaption}>
              Можно начать с формы, звонка или сообщения в мессенджере.
            </p>
            <div className={style.hero__secondaryActions}>
              {mainPhone ? (
                <ButtonLink
                  href={`tel:${mainPhone}`}
                  className={style.hero__secondaryButton}
                  variant="secondary"
                >
                  {callButtonText}
                </ButtonLink>
              ) : null}
              {maxMessengerLink && (
                <ButtonLink
                  href={maxMessengerLink}
                  variant="secondary"
                  className={style.hero__secondaryButton}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    src="/logo-max.png"
                    alt=""
                    aria-hidden="true"
                    width={24}
                    height={24}
                  />
                  {maxButtonText}
                </ButtonLink>
              )}
              {secondTelegramLink && (
                <ButtonLink
                  href={secondTelegramLink}
                  target="_blank"
                  variant="secondary"
                  className={style.hero__secondaryButton}
                  rel="noopener noreferrer"
                >
                  <FaTelegram size={24} aria-hidden="true" /> {telegramButtonText}
                </ButtonLink>
              )}
            </div>
          </div>
        </div>

        <aside className={style.hero__aside} data-motion-item aria-label={howWeWorkTitle}>
          <div className={style.hero__asideCard}>
            <p className={style.hero__asideLabel}>{howWeWorkTitle}</p>
            <ul className={style.hero__points}>
              {heroSteps.map((step, index) => (
                <li key={`hero-step-${step.id}`}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
