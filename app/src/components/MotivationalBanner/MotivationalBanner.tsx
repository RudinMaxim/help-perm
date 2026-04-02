import { ButtonLink } from '@/ui';
import styles from './MotivationalBanner.module.scss';

interface MotivationalBannerProps {
  title: string;
  description: string;
  mainPhone: string;
  buttonText: string;
}

export function MotivationalBanner({
  title,
  description,
  mainPhone,
  buttonText,
}: MotivationalBannerProps) {
  return (
    <article className={styles.banner} data-motion-section>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <ButtonLink href={`tel:${mainPhone}`} data-motion-cta>
          {buttonText}
        </ButtonLink>
      </div>
    </article>
  );
}
