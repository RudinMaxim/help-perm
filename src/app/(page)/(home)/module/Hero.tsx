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
                <button className={style.hero__button}>{buttonText}</button>
            </div>
        </section>
    )
}
