'use client';
import React from 'react';
import Image from 'next/image';
import styles from '../Requisites.module.scss';
import type { LicenseInfo } from '@/lib/cms';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

interface LicenseDisplayProps {
  data: LicenseInfo | null;
  imageAltPrefix: string;
}

export function LicenseDisplay({ data, imageAltPrefix }: LicenseDisplayProps) {
  const images = data?.imageUrls ?? [];

  if (!data?.title && images.length === 0) {
    return null;
  }

  return (
    <div className={styles.container} data-motion-section>
      <div className={styles.header}>
        <h2>{data?.title ?? ''}</h2>
        <div className={styles.details}>
          {data?.number ? <span>{data.number}</span> : null}
          {data?.date ? <span>{data.date}</span> : null}
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Zoom]}
        spaceBetween={10}
        slidesPerView={1}
        watchOverflow
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
        {images.map((src, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={`swiper-zoom-container ${styles.zoomFrame}`}>
              <Image
                src={src}
                alt={`${imageAltPrefix} ${index + 1}`}
                width={540}
                height={810}
                className={styles.image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
