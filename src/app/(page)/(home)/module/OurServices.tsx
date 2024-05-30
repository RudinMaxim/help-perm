import styles from '../Home.module.scss';

export interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface OurServicesProps {
    services: Service[];
}
export function OurServices({ services }: OurServicesProps) {
    return (
        <div className={styles.ourServices}>
            <h2 className={styles.title}>Наши услуги</h2>
            <div className={styles.services}>
                {services.map((service, index) => (
                    <div key={index} className={styles.service}>
                        <div className={styles.serviceIcon}>{service.icon}</div>
                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                        <p className={styles.serviceDescription}>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
