import { MAIN_PHONE_NUMBER, SECOND_PHONE_NUMBER } from '@/constants/phone';
import Link from 'next/link';
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
          <Link href={`https://wa.me/${SECOND_PHONE_NUMBER.replace(
            '+',
            ''
          )}`} className={style.hero__button} rel="noopener noreferrer" target='_blank'>
            <FaWhatsapp />

            Написать в WhatsApp
          </Link>
          <Link
            href={`https://t.me/Max_Rudin`}
            target="_blank"
            rel="noopener noreferrer"
            className={style.hero__button_second}
          >
            <FaTelegram /> Написать в Telegram
          </Link>
        </div>
        <div >
          <Link
            href={`tel:${MAIN_PHONE_NUMBER}`}
            className={style.hero__button_second}
          >
            Заказать звонок
          </Link>
        </div>
      </div>
    </section >
  );
}
