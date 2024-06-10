import { MAIN_PHONE_NUMBER } from '@/constants/phone';
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
          <a href="/#contactUs" className={style.hero__button}>
            {buttonText}
          </a>
          <a
            href={`tel:${MAIN_PHONE_NUMBER}`}
            className={style.hero__button_second}
          >
            Заказать звонок
          </a>
        </div>
      </div>
    </section>
  );
}
