import React from 'react';
import styles from './MotivationalBanner.module.scss';

export function MotivationalBanner() {
  return (
    <article className={styles.banner}>
      <div className={styles.content}>
        <h2 className={styles.title}>Вы не одиноки в своих проблемах</h2>
        <p className={styles.description}>
          Жизненные трудности могут сделать нас уязвимыми и заставить
          чувствовать себя одинокими. Но помните, что вы не одиноки в своих
          проблемах. Наша команда специалистов готова поддержать вас и помочь
          справиться с любыми трудностями.
        </p>
        <a href="/#contactUs" className={styles.button}>
          Получить помощь
        </a>
      </div>
    </article>
  );
}