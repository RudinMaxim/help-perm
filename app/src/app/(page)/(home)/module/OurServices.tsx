import styles from '../Home.module.scss';
import { CmsIcon } from '@/lib/icons';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface OurServicesProps {
  services: ServiceItem[];
  title: string;
  footnote: string;
}

export function OurServices({
  services,
  title,
  footnote,
}: OurServicesProps) {
  return (
    <section className={styles.ourServices} aria-labelledby="services-title" data-motion-section>
      <div className={styles.sectionHeader}>
        <p className={styles.sectionEyebrow}>Направления помощи</p>
        <h2 id="services-title" className={styles.sectionTitle}>{title}</h2>
        {footnote?.trim() ? <p className={styles.sectionLead}>{footnote}</p> : null}
      </div>

      <div className={styles.servicesGrid} data-motion-stagger>
        {services.map((service) => (
          <article key={`OurServices__${service.id}`} className={styles.service} data-motion-card>
            <div className={styles.serviceIcon}>
              <CmsIcon name={service.icon} size={32} />
            </div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
