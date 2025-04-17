import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import Container from "../layout/container";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import partner1 from "../../../public/assests/svg/area1.svg";
import partner2 from "../../../public/assests/svg/area2.svg";
import partner3 from "../../../public/assests/svg/area3.svg";
import partner4 from "../../../public/assests/svg/area4.svg";
// Import all required Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

interface Partner {
  logo: StaticImageData;
  name: string;
  description: string;
}

const partners: Partner[] = [
  {
    logo: partner1,
    name: "(주)행복한사람들",
    description: "행복한 날, 행복한 사람들과 함께하는 특별한 날을 선사합니다.",
  },
  {
    logo: partner2,
    name: "바른댄글 실천연대",
    description: "바른댓글 정착으로 아름다운 사회를 만들어 갑니다.",
  },
  {
    logo: partner3,
    name: "아트리안",
    description:
      "생활미술시장의 뉴 패러다임을 제안하는 살롱 아트갤러리 프로젝트.",
  },
  {
    logo: partner4,
    name: "대한민국위멘위원회",
    description: "어린이를 위한 위대한 멘토, 위멘이 함께 합니다.",
  },
  {
    logo: partner1,
    name: "(주)행복한사람들",
    description: "행복한 날, 행복한 사람들과 함께하는 특별한 날을 선사합니다.",
  },
  {
    logo: partner2,
    name: "바른댄글 실천연대",
    description: "바른댓글 정착으로 아름다운 사회를 만들어 갑니다.",
  },
  {
    logo: partner3,
    name: "아트리안",
    description:
      "생활미술시장의 뉴 패러다임을 제안하는 살롱 아트갤러리 프로젝트.",
  },
  {
    logo: partner4,
    name: "대한민국위멘위원회",
    description: "어린이를 위한 위대한 멘토, 위멘이 함께 합니다.",
  },
];

const PartnersSlider = () => {
  return (
    <Container className="px-5 md:px-16 lg:px-32">
      <section className="w-full py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="lg:w-1/4">
            <div className="flex flex-col items-center md:items-start space-y-8">
              {/* Heading */}
              <div className="flex flex-col">
                <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-[#111111]">
                  함께하는
                </h2>
                <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-[#111111]">
                  이들
                </h2>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center gap-3">
                <button className="swiper-button-prev w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-black/80 transition-colors">
                  <MdArrowBack className="w-5 h-5 text-white" />
                </button>
                <button className="swiper-button-next w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-black/80 transition-colors">
                  <MdArrowForward className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Slider */}
          <div className="lg:w-3/4">
            <Swiper
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              //   speed={1000}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              breakpoints={{
                480: { slidesPerView: 1.5, spaceBetween: 20 },
                640: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 2.5, spaceBetween: 32 },
                1280: { slidesPerView: 3, spaceBetween: 40 },
              }}
              className="partners-swiper"
            >
              {[...partners, ...partners].map((partner, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center text-center space-y-2 md:space-y-6">
                    <div className="relative w-full h-[100px] sm:h-[110px] md:h-[120px]">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 480px) 100vw, (max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        priority={index < 2}
                      />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-base sm:text-lg font-medium text-[#111111]">
                        {partner.name}
                      </h3>
                      <p className="text-sm sm:text-base text-[#111111] leading-relaxed">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default PartnersSlider;
