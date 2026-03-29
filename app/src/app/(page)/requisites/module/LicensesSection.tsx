'use client';
import React from 'react';
import Image from 'next/image';
import styles from '../Requisites.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

export function LicenseDisplay() {
  const licenseData = {
    title: 'Лицензия на медицинскую деятельность',
    number: '№ ЛО-18-01-002479',
    date: '03.07.2018',
    images: [
      '/license/1.jpeg',
      '/license/2.jpeg',
      '/license/3.jpeg',
      '/license/4.jpeg',
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{licenseData.title}</h2>
        <div className={styles.details}>
          <span>{licenseData.number}</span>
          <span>{licenseData.date}</span>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Zoom]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        zoom
        className={styles.swiper}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        {licenseData.images.map((src, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className="swiper-zoom-container">
              <Image
                src={src}
                alt={`Страница лицензии ${index + 1}`}
                width={540}
                height={810}
                objectFit="contain"
                className={styles.image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
