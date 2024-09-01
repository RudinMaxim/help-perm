import styles from '../Home.module.scss';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface OurServicesProps {
  services: Service[];
  title: string;
}
export function OurServices({ services, title }: OurServicesProps) {
  return (
    <section className={styles.ourServices}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={`${styles.subtitle} ${styles.serviceSubtitle}`}>
        Помощь предоставляется во время реабилитации и адаптации
      </h3>
      <div className={styles.services}>
        {services.map((service, index) => (
          <div key={`OurServices__${index}`} className={styles.service}>
            <div className={styles.serviceIcon}>{service.icon}</div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
