import { MAIN_PHONE_NUMBER, SECOND_TLEGRAMM_LINK } from '@/constants/phone';
import { ButtonLink } from '@/ui';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
import style from '../Home.module.scss';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

export function Hero({ title, subtitle, description, buttonText }: HeroProps) {
  return (
    <section className={style.hero}>
      <div className={style.hero__content}>
        <h1 className={style.hero__title}>{title}</h1>
        <h2 className={style.hero__subtitle}>{subtitle}</h2>
        <p className={style.hero__description}>{description}</p>
        <div className={style.hero__list__button}>
          <ButtonLink href={`https://wa.me/${MAIN_PHONE_NUMBER.replace(
            '+',
            ''
          )}`} variant='secondary' rel="noopener noreferrer" target='_blank'>
            <FaWhatsapp size={32} />

            Написать в WhatsApp
          </ButtonLink>
          <ButtonLink
            href={SECOND_TLEGRAMM_LINK}
            target="_blank"
            variant="secondary"
            rel="noopener noreferrer"
          >
            <FaTelegram size={32} /> Написать в Telegram
          </ButtonLink>
        </div>

        <ButtonLink
          href={`tel:${MAIN_PHONE_NUMBER}`}
          className={style.hero__button}
        >
          Заказать звонок
        </ButtonLink>
      </div>
    </section >
  );
}
