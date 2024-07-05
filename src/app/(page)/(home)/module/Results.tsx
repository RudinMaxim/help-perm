"use client"
import { BeforeAfterStory } from "@/constants/stories";
import { useMediaQuery } from "@/hook/useMediaQuery";
import Image from "next/image";
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from '../Home.module.scss';

SwiperCore.use([Autoplay, Keyboard]);

interface ResultsProps {
    stories: BeforeAfterStory[];
}

export const Results: React.FC<ResultsProps> = ({ stories }) => {
    const isSmallScreen = useMediaQuery("(max-width: 767px)");

    return (
        <section className={styles.beforeAfter}>
            <h1 className={styles.title}>Наши результаты</h1>
            <Swiper
                spaceBetween={30}
                slidesPerView={isSmallScreen ? 1 : 2}
                keyboard={{
                    enabled: true,
                }}
                loop={true}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
            >
                {stories?.map((story, index) => (
                    <SwiperSlide key={`Results__${index}__${story.description}`}>
                        <div className={styles.beforeAfter__imageContainer}>
                            <Image
                                src={story.image}
                                alt={`История__${index + 1}`}
                                width={isSmallScreen ? 300 : 500}
                                height={isSmallScreen ? 300 : 500}
                                className={styles.beforeAfter__image}
                            />
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