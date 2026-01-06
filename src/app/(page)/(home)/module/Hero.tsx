import { MAIN_PHONE_NUMBER, SECOND_TLEGRAMM_LINK } from '@/constants/phone';
import { ButtonLink } from '@/ui';
import Image from 'next/image';
import { FaTelegram } from 'react-icons/fa';
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
          <ButtonLink
            href="https://max.ru/u/f9LHodD0cOJr3BzFadTicPzzLvk8o0ZJ8qicmF3Kj3RJ3K28msr4F9vmytM"
            variant="secondary"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image src="/logo-max.png" alt="MAX" width={32} height={32} />

            Написать в MAX
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
