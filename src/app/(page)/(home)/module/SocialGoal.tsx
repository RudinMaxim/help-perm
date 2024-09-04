import React from 'react';
import styles from '../Home.module.scss';

export function SocialGoal() {
  return (
    <section
      className={styles.socialGoal}
      aria-labelledby="social-goal-heading"
    >
      <h2 id="social-goal-heading">Наша цель</h2>
      <p>
        Наша цель — создать позитивные изменения в обществе, поддерживая
        уязвимые группы населения и способствуя устойчивому развитию нашего
        сообщества
      </p>
    </section>
  );
}
