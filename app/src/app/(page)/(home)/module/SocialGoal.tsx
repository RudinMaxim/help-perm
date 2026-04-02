import React from 'react';
import styles from '../Home.module.scss';

interface SocialGoalProps {
  eyebrow: string;
  title: string;
  description: string;
  missionTitle: string;
  missionText: string;
  teamTitle: string;
  teamDescription: string;
}

export function SocialGoal({
  eyebrow,
  title,
  description,
  missionTitle,
  missionText,
  teamTitle,
  teamDescription,
}: SocialGoalProps) {
  return (
    <section
      className={styles.aboutSection}
      aria-labelledby="about-section-heading"
      data-motion-section
    >
      <div className={styles.aboutIntro}>
        {eyebrow?.trim() ? <p className={styles.sectionEyebrow}>{eyebrow}</p> : null}
        <h2 id="about-section-heading" className={styles.sectionTitle}>{title}</h2>
        <p className={styles.sectionLead}>{description}</p>
      </div>

      <div className={styles.aboutGrid} data-motion-stagger>
        <article className={styles.missionCard} data-motion-card>
          <p className={styles.cardKicker}>О нас</p>
          <h3>{missionTitle}</h3>
          <p>{missionText}</p>
        </article>

        <article className={styles.teamCard} data-motion-card>
          <p className={styles.cardKicker}>Команда</p>
          <h3>{teamTitle}</h3>
          <p>{teamDescription}</p>
        </article>
      </div>
    </section>
  );
}
