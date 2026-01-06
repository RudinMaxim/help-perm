import styles from '../AboutUs.module.scss';


interface TeamSectionProps {
    title: string;
    description: string;
}


export function TeamSection({ title, description }: TeamSectionProps) {
    return (
        <section className={styles.teamSection} aria-labelledby="team-section-title">
            <div className={styles.teamContent}>
                <h2 id="team-section-title" className={styles.teamTitle}>{title}</h2>
                <p className={styles.teamDescription}>{description}</p>
            </div>
        </section>
    )
}
