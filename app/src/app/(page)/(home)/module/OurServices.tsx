'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Keyboard } from 'swiper/modules';
import 'swiper/css';
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
  eyebrow: string;
  title: string;
  footnote: string;
}

export function OurServices({
  services,
  eyebrow,
  title,
  footnote,
}: OurServicesProps) {
  return (
    <section className={styles.ourServices} aria-labelledby="services-title" data-motion-section>
      <div className={styles.sectionHeader}>
        {eyebrow?.trim() ? <p className={styles.sectionEyebrow}>{eyebrow}</p> : null}
        <h2 id="services-title" className={styles.sectionTitle}>{title}</h2>
        {footnote?.trim() ? <p className={styles.sectionLead}>{footnote}</p> : null}
      </div>

      <Swiper
        modules={[A11y, Keyboard]}
        slidesPerView="auto"
        spaceBetween={16}
        watchOverflow
        keyboard={{ enabled: true, onlyInViewport: false }}
        className={styles.servicesSwiper}
      >
        {services.map((service) => (
          <SwiperSlide key={`OurServices__${service.id}`} className={styles.serviceSlide}>
            <article className={styles.service} data-motion-card>
              <div className={styles.serviceIcon}>
                <CmsIcon name={service.icon} size={32} />
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
