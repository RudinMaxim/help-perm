import type { CSSProperties } from 'react';
import style from '../Home.module.scss';

interface HeroProps {
  eyebrow: string;
  title: string;
  description: string;
  imageUrl: string | null;
  howWeWorkTitle: string;
  steps: Array<{
    id: number;
    title: string;
    description: string;
  }>;
}

export function Hero({
  eyebrow,
  title,
  description,
  imageUrl,
  howWeWorkTitle,
  steps,
}: HeroProps) {
  const heroSteps = steps.slice(0, 3);

  return (
    <section
      className={style.hero}
      aria-labelledby="home-hero-title"
      data-motion-section
      style={
        imageUrl
          ? ({ '--hero-background-image': `url("${imageUrl}")` } as CSSProperties)
          : undefined
      }
    >
      <div className={style.hero__grid} data-motion-hero>
        <div className={style.hero__content}>
          {eyebrow?.trim() ? (
            <p className={style.hero__eyebrow} data-motion-item>
              {eyebrow}
            </p>
          ) : null}
          <h1 id="home-hero-title" className={style.hero__title} data-motion-item>{title}</h1>
          <p className={style.hero__description} data-motion-item>{description}</p>
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
