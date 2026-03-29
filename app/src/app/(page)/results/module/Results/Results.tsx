"use client"
import { useMediaQuery } from "@/hook/useMediaQuery";
import Image from "next/image";
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from './Results.module.scss';

SwiperCore.use([Autoplay, Keyboard]);

export interface StoryItem {
  id: number;
  description: string;
  imageUrl: string | null;
}

interface ResultsProps {
  stories: StoryItem[];
}

export const Results: React.FC<ResultsProps> = ({ stories }) => {
  const isSmallScreen = useMediaQuery("(max-width: 767px)");
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  return (
    <section className={styles.beforeAfter}>
      <h1 className={styles.title}>Наши результаты</h1>
      <Swiper
        spaceBetween={30}
        slidesPerView={isSmallScreen ? 1 : 2}
        keyboard={{ enabled: true }}
        loop={true}
        autoplay={prefersReducedMotion ? false : { delay: 3500, disableOnInteraction: false }}
      >
        {stories?.map((story) => (
          <SwiperSlide key={`Results__${story.id}`}>
            <div className={styles.beforeAfter__imageContainer}>
              {story.imageUrl && (
                <Image
                  src={story.imageUrl}
                  alt={`История ${story.id}`}
                  width={isSmallScreen ? 300 : 500}
                  height={isSmallScreen ? 300 : 500}
                  className={styles.beforeAfter__image}
                />
              )}
              <div className={styles.beforeAfter__overlay}>
                <p className={styles.beforeAfter__description}>
                  {story.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
