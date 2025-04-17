"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";

interface ImageCarouselProps {
  images: { src: string; alt: string }[];
  slidesPerView?: number;
  spaceBetween?: number;
  showNavigation?: boolean;
  className?: string;
  speed?: number;
  autoplay?: {
    delay: number;
    disableOnInteraction: boolean;
    pauseOnMouseEnter?: boolean;
    stopOnLastSlide?: boolean;
    reverseDirection?: boolean;
    pauseOnFocus?: boolean;
    pauseOnHover?: boolean;
    pauseOnClick?: boolean;
    pauseOnScroll?: boolean;
    pauseOnScrollStart?: boolean;
  };
}

const ImageCarousel = ({
  images = [],
  slidesPerView = 2,
  spaceBetween = 20,
  showNavigation = false,
  className = "",
  speed = 1000,
  autoplay = {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    stopOnLastSlide: true,
    reverseDirection: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnClick: true,
    pauseOnScroll: true,
    pauseOnScrollStart: true,
  },
}: ImageCarouselProps) => {
  return (
    <div className={`w-full mx-auto ${className}`}>
      <Swiper
        effect={"fade"}
        grabCursor={true}
        centeredSlides={true}
        speed={speed}
        loop={true}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        autoplay={autoplay}
        navigation={showNavigation}
        modules={[EffectCoverflow, Autoplay, Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[150px] md:h-[300px] rounded-lg lg:rounded-3xl overflow-hidden shadow-lg">
              {/* Image */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />

              {/* Fade Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
