import React from 'react';
import styles from '../Home.module.scss';

interface SocialGoalProps {
  title: string;
  text: string;
}

export function SocialGoal({ title, text }: SocialGoalProps) {
  return (
    <section
      className={styles.socialGoal}
      aria-labelledby="social-goal-heading"
    >
      <h2 id="social-goal-heading">{title}</h2>
      <p>{text}</p>
    </section>
  );
}
