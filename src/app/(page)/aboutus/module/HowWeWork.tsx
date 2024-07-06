import { Step } from '@/constants/steps';
import styles from '../AboutUs.module.scss';

interface HowWeWorkProps {
  title: string;
  steps: Step[];
}

export function HowWeWork({ title, steps }: HowWeWorkProps) {
  return (
    <section className={styles['how-we-work']}>
      <h2 className={styles['how-we-work__title']}>{title}</h2>
      <div className={styles['how-we-work__steps']}>
        {steps.map((step, index) => (
          <div key={`HowWeWork__${index}`} className={styles['how-we-work__step']}>
            <h3 className={styles['how-we-work__step-title']}>
              <span className={styles['how-we-work__step-icon']}>
                {index + 1}
              </span>
              {step.title}
            </h3>
            <p className={styles['how-we-work__step-description']}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
