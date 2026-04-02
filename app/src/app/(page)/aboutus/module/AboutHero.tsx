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
        <section className={styles.hero} aria-labelledby="about-hero-title">
            <div className={styles.heroContent} data-motion-hero>
                <h1 id="about-hero-title" className={styles.heroTitle} data-motion-item>{title}</h1>
                <h2 className={styles.heroSubtitle} data-motion-item>{subtitle}</h2>
                <p className={styles.heroDescription} data-motion-item>{description}</p>
                <div className={styles.heroButtonContainer}>
                    <ButtonLink href="#contactUs" data-motion-item>
                        {buttonText}
                    </ButtonLink>
                </div>
            </div>
        </section>
    );
}
