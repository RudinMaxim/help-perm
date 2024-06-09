"use client"
import { BeforeAfterStory } from "@/constants/stories";
import Image from "next/image";
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import style from '../Home.module.scss';

SwiperCore.use([ Pagination, Autoplay, Keyboard]);

interface BeforeAfterProps {
    stories: BeforeAfterStory[];
}

export function Results({ stories }: BeforeAfterProps) {
    return (
        <section className={style.beforeAfter}>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                keyboard={{
                    enabled: true,
                }}
                loop={true}
                autoplay={{ delay: 4000 }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    }
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {stories.map((story, index) => (
                    <SwiperSlide key={`Results__${index}__${story.description}`}>
                        <div className={style.beforeAfter__content}>
                            <Image src={story.image} alt={`История ${index + 1}`} className={style.beforeAfter__image} width={400} height={400} />
                            <p className={style.beforeAfter__description}>{story.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}