import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Container from "../layout/container";
import { useState } from "react";

// Import the image
import slider1 from "../../../public/assests/svg/slider1.svg";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container className="px-5">
      <section className="w-full h-[600px] border-[#E5E7EB] my-2">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            renderBullet: function (index, className) {
              return `<span class="${className} w-16 h-[2px] bg-white/30 hover:bg-white/50 transition-all duration-300"></span>`;
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="h-full w-full rounded-[32px] overflow-hidden"
        >
          <SwiperSlide>
            <div className="relative h-full w-full">
              <Image
                src={slider1}
                alt="Beach Reading"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-transparent">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center w-full px-4 space-y-8">
                  <span className="text-sm md:text-lg mb-2 md:mb-4 opacity-90 tracking-wider inline-block">
                    특별한 나눔
                  </span>
                  <h1 className="text-3xl md:text-5xl font-medium mb-1 md:mb-2 leading-tight">
                    함께하는 마음이 만드는 소중한 변화
                  </h1>
                  <p className="text-base md:text-lg opacity-90">
                    즐거움과 나눔이 있는 감동의 순간
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Second Slide - Duplicate */}
          <SwiperSlide>
            <div className="relative h-full w-full">
              <Image
                src={slider1}
                alt="Beach Reading"
                fill
                className="object-cover"
              />
              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-transparent">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center w-full px-4 space-y-8">
                  <span className="text-sm md:text-lg mb-2 md:mb-4 opacity-90 tracking-wider inline-block">
                    특별한 나눔
                  </span>
                  <h1 className="text-3xl md:text-5xl font-medium mb-1 md:mb-2 leading-tight">
                    함께하는 마음이 만드는 소중한 변화
                  </h1>
                  <p className="text-base md:text-lg opacity-90">
                    즐거움과 나눔이 있는 감동의 순간
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Navigation, Pagination, and Slide Numbers */}
          <div className="absolute bottom-8 md:bottom-3 left-1/2 -translate-x-1/2 md:left-auto md:right-5 md:translate-x-0 z-10 flex items-center gap-8">
            <div className="flex items-center">
              <div className="text-black text-sm font-medium">
                <span className="opacity-100 pr-5">{activeIndex + 1}</span>
                {/* <span className="opacity-50">/</span> */}
                {/* <span className="opacity-50">2</span> */}
              </div>
              <div className="custom-pagination flex gap-2"></div>
            </div>
            <div className="flex gap-2">
              <button className="swiper-button-prev w-12 h-12 flex items-center justify-center bg-black rounded-full hover:bg-black/80 transition-all duration-300">
                <MdArrowBack className="w-6 h-6 text-white" />
              </button>
              <button className="swiper-button-next w-12 h-12 flex items-center justify-center bg-black rounded-full hover:bg-black/80 transition-all duration-300">
                <MdArrowForward className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </Swiper>
      </section>
    </Container>
  );
};

export default Hero;
