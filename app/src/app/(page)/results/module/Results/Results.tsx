'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Keyboard, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Results.module.scss';

export interface StoryItem {
  id: number;
  description: string;
  imageUrl: string | null;
}

interface ResultsProps {
  stories: StoryItem[];
  title: string;
  storyAltPrefix: string;
}

export const Results = ({
  stories,
  title,
  storyAltPrefix,
}: ResultsProps) => {
  return (
    <section className={styles.beforeAfter} aria-labelledby="results-title" data-motion-section>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Истории и результаты</p>
        <h2 id="results-title" className={styles.title}>{title}</h2>
      </div>

      <Swiper
        modules={[Pagination, A11y, Keyboard]}
        slidesPerView={1}
        spaceBetween={20}
        keyboard={{ enabled: true, onlyInViewport: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 20 },
        }}
        className={styles.swiper}
      >
        {stories?.map((story) => (
          <SwiperSlide key={`Results__${story.id}`} className={styles.slide}>
            <article className={styles.storyCard} data-motion-card>
              <div className={styles.beforeAfter__imageContainer}>
                {story.imageUrl && (
                  <Image
                    src={story.imageUrl}
                    alt={`${storyAltPrefix} ${story.id}`}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 520px"
                    className={styles.beforeAfter__image}
                  />
                )}
              </div>
              <div className={styles.storyCardBody}>
                <p className={styles.beforeAfter__description}>
                  {story.description}
                </p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
