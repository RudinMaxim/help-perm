import styles from '../AboutUs.module.scss';
import { CmsIcon } from '@/lib/icons';

export interface ValueItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface ValuesSectionProps {
  title: string;
  values: ValueItem[];
}

export function ValuesSection({ title, values }: ValuesSectionProps) {
  return (
    <section className={styles.valuesSection} aria-labelledby="values-section-title">
      <div className={styles.valuesContent}>
        <h2 id="values-section-title" className={styles.valuesTitle}>{title}</h2>
        <ul className={styles.valuesList}>
          {values.map((value) => (
            <li key={`ValuesSection__${value.id}`} className={styles.valuesItem}>
              <div className={styles.valuesIcon}>
                <CmsIcon name={value.icon} size={48} />
              </div>
              <h3 className={styles.valuesItemTitle}>{value.title}</h3>
              <p className={styles.valuesItemDescription}>{value.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
