'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../Home.module.scss';
import { A11y, Keyboard, Pagination } from 'swiper/modules';
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
  prevSlideMessage: string;
  nextSlideMessage: string;
}

export function OurServices({
  services,
  title,
  footnote,
  prevSlideMessage,
  nextSlideMessage,
}: OurServicesProps) {
  return (
    <section className={styles.ourServices}>
      <h2 className={styles.title}>{title}</h2>

      <Swiper
        modules={[Pagination, A11y, Keyboard]}
        slidesPerView={1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          el: '.custom-pagination',
          type: 'bullets',
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: false,
        }}
        a11y={{
          prevSlideMessage,
          nextSlideMessage,
        }}
        breakpoints={{
          480: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
          1440: { slidesPerView: 5, spaceBetween: 40 },
        }}
        className={styles.servicesSwiper}
      >
        {services.map((service) => (
          <SwiperSlide key={`OurServices__${service.id}`}>
            <div className={styles.service}>
              <div className={styles.serviceIcon}>
                <CmsIcon name={service.icon} size={32} />
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <p className={`${styles.description} ${styles.serviceSubtitle}`}>
        {footnote}
      </p>
    </section>
  );
}
