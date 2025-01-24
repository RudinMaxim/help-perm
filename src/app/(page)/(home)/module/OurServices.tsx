'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../Home.module.scss';
import { A11y, Keyboard, Pagination } from 'swiper/modules';

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
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
        }}
        breakpoints={{
          480: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
          1440: { slidesPerView: 5, spaceBetween: 40 },
        }}
        className={styles.servicesSwiper}
      >
        {services.map((service, index) => (
          <SwiperSlide key={`OurServices__${index}`}>
            <div className={styles.service}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <p className={`${styles.description} ${styles.serviceSubtitle}`}>
        * Помощь предоставляется во время восстановления и адаптации
      </p>
    </section>
  );
}
