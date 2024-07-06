import { ButtonLink } from '@/ui';
import styles from '../AboutUs.module.scss';


interface HeroProps {
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
}

export function AboutHero({ title, subtitle, description, buttonText }: HeroProps) {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>{title}</h1>
                <h2 className={styles.heroSubtitle}>{subtitle}</h2>
                <p className={styles.heroDescription}>{description}</p>
                <div className={styles.heroButtonContainer}>
                    <ButtonLink href="aboutus/#contactUs" >
                        {buttonText}
                    </ButtonLink>
                </div>
            </div>
        </section>
    );
}