import { ButtonLink } from '@/ui';
import Image from 'next/image';
import { FaTelegram } from 'react-icons/fa';
import style from '../Home.module.scss';

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  mainPhone: string;
  secondTelegramLink: string;
  maxMessengerLink: string;
}

export function Hero({ title, subtitle, description, mainPhone, secondTelegramLink, maxMessengerLink }: HeroProps) {
  return (
    <section className={style.hero} aria-labelledby="home-hero-title">
      <div className={style.hero__content}>
        <h1 id="home-hero-title" className={style.hero__title}>{title}</h1>
        {subtitle?.trim() ? (
          <h2 className={style.hero__subtitle}>{subtitle}</h2>
        ) : null}
        <p className={style.hero__description}>{description}</p>
        <div className={style.hero__list__button}>
          {maxMessengerLink && (
            <ButtonLink
              href={maxMessengerLink}
              variant="secondary"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src="/logo-max.png"
                alt=""
                aria-hidden="true"
                width={32}
                height={32}
              />
              Написать в MAX
            </ButtonLink>
          )}
          {secondTelegramLink && (
            <ButtonLink
              href={secondTelegramLink}
              target="_blank"
              variant="secondary"
              rel="noopener noreferrer"
            >
              <FaTelegram size={32} aria-hidden="true" /> Написать в Telegram
            </ButtonLink>
          )}
        </div>
        <ButtonLink
          href={`tel:${mainPhone}`}
          className={style.hero__button}
        >
          Заказать звонок
        </ButtonLink>
      </div>
    </section>
  );
}
