import { MAIN_PHONE_NUMBER } from '@/constants/phone';
import Link from 'next/link';
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
            <Link href="/#contactUs" className={style.hero__button}>
              {buttonText}
            </Link>
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
