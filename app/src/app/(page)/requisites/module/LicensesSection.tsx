'use client';
import Image from 'next/image';
import styles from '../Requisites.module.scss';
import { cmsMediaUrl, type LicenseInfo } from '@/lib/cms';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface LicenseDisplayProps {
  data: LicenseInfo | null;
  imageAltPrefix: string;
}

export function LicenseDisplay({ data, imageAltPrefix }: LicenseDisplayProps) {
  const images =
    data?.images?.length
      ? data.images
          .map((image) => ({
            src: cmsMediaUrl(image),
            width: image.width ?? 540,
            height: image.height ?? 810,
          }))
          .filter((image): image is { src: string; width: number; height: number } => Boolean(image.src))
      : (data?.imageUrls ?? []).map((src) => ({
          src,
          width: 540,
          height: 810,
        }));

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
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView="auto"
        watchOverflow
        navigation
        pagination={{ clickable: true }}
        className={styles.swiper}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.zoomFrame}>
              <Image
                src={image.src}
                alt={`${imageAltPrefix} ${index + 1}`}
                width={image.width}
                height={image.height}
                className={styles.image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
