import styles from '../AboutUs.module.scss';
import { Value } from '../page';

interface ValuesSectionProps {
    title: string;
    values: Value[];
}

export function ValuesSection({ title, values }: ValuesSectionProps) {
    return (
        <section className={styles.valuesSection}>
            <div className={styles.valuesContent}>
                <h2 className={styles.valuesTitle}>{title}</h2>
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
