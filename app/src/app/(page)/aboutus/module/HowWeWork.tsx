import styles from '../AboutUs.module.scss';

export interface StepItem {
  id: number;
  title: string;
  description: string;
}

interface HowWeWorkProps {
  title: string;
  steps: StepItem[];
}

export function HowWeWork({ title, steps }: HowWeWorkProps) {
  return (
    <section className={styles['how-we-work']} aria-labelledby="how-we-work-title" data-motion-section>
      <h2 id="how-we-work-title" className={styles['how-we-work__title']}>{title}</h2>
      <ol className={styles['how-we-work__steps']} data-motion-stagger>
        {steps.map((step, index) => (
          <li key={`HowWeWork__${step.id}`} className={styles['how-we-work__step']} data-motion-card>
            <h3 className={styles['how-we-work__step-title']}>
              <span className={styles['how-we-work__step-icon']}>
                {index + 1}
              </span>
              {step.title}
            </h3>
            <p className={styles['how-we-work__step-description']}>
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
