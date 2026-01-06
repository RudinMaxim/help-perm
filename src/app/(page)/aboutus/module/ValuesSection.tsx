import { Value } from '@/constants/values';
import styles from '../AboutUs.module.scss';

interface ValuesSectionProps {
    title: string;
    values: Value[];
}

export function ValuesSection({ title, values }: ValuesSectionProps) {
    return (
        <section className={styles.valuesSection} aria-labelledby="values-section-title">
            <div className={styles.valuesContent}>
                <h2 id="values-section-title" className={styles.valuesTitle}>{title}</h2>
                <ul className={styles.valuesList}>
                    {values.map((value, index) => (
                        <li key={`ValuesSection__${index}`} className={styles.valuesItem}>
                            <div className={styles.valuesIcon} >
                                {value.icon}</div>
                            <h3 className={styles.valuesItemTitle}>{value.title}</h3>
                            <p className={styles.valuesItemDescription}>{value.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
