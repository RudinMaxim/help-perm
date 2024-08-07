import { MAIN_PHONE_NUMBER } from '@/constants/phone';
import { ButtonLink } from '@/ui';
import styles from './MotivationalBanner.module.scss';

export function MotivationalBanner() {
  return (
    <article className={styles.banner}>
      <div className={styles.content}>
        <h2 className={styles.title}>Не откладывай помощь&nbsp;на потом – свяжись с нами прямо сейчас!</h2>
        <p className={styles.description}>
          Жизненные трудности могут сделать нас уязвимыми и заставить
          чувствовать себя одинокими. Но помните, что вы не одиноки в своих
          проблемах. Наша команда специалистов готова поддержать вас и помочь
          справиться с любыми трудностями.
        </p>
        <ButtonLink href={`tel:${MAIN_PHONE_NUMBER}`} >
          Позвонить сейчас
        </ButtonLink>
      </div>
    </article>
  );
}
