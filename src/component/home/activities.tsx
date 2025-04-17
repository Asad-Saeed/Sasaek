import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Container from "../layout/container";
import activity1 from "../../../public/assests/svg/activity1.svg";
import activity2 from "../../../public/assests/svg/activity2.svg";
import activity3 from "../../../public/assests/svg/activity3.svg";
import activity4 from "../../../public/assests/svg/activity4.svg";

interface ActivityCard {
  title: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
  imagePosition: "left" | "right";
}

const activities: ActivityCard[] = [
  {
    title: "지역 축제",
    subtitle: "지역의 숨결을 느끼며 함께 웃는 하루",
    description: "소박한 한남동에 커지는 온기",
    image: activity2,
    imagePosition: "left",
  },
  {
    title: "인문학 콘서트",
    subtitle: "깊은 사유와 따뜻한 대화가 이루어진 시간",
    description: "마음을 울리는 문학과 인문학의 이야기",
    image: activity1,
    imagePosition: "right",
  },
  {
    title: "나눔 바자회",
    subtitle: "행복이 전해지는 물건들,",
    description: "그 속의 이야기들",
    image: activity3,
    imagePosition: "left",
  },
  {
    title: "따뜻한 후원",
    subtitle: "작은 나눔이 모여 큰 꽃밭이 됩니다",
    description: "사색의향기와 함께 만들어가는 더 나은 내일",
    image: activity4,
    imagePosition: "right",
  },
];

const ActivitySection = () => {
  return (
    <Container className="px-5 md:px-16 lg:px-32">
      <section className="w-full py-16 md:py-24">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 md:gap-x-16 mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-[#111111] leading-tight">
            함께하는 일
          </h2>
          <span className="text-[28px] sm:text-[32px] md:text-[40px] text-[#BBBBBB] leading-tight">
            우리의 흔적
          </span>
        </div>

        <div className="space-y-8 md:space-y-12">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                activity.imagePosition === "right"
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              } items-center gap-6 md:gap-12`}
            >
              <div
                className={`w-full md:w-1/2 space-y-2 ${
                  activity.imagePosition === "right"
                    ? "text-right"
                    : "text-left"
                }`}
              >
                <div className="space-y-1">
                  <p className="text-sm md:text-base text-[#111111]">
                    {activity.subtitle}
                  </p>
                </div>
                <p className="text-sm md:text-base text-[#111111]">
                  {activity.description}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#111111]">
                  {activity.title}
                </h3>
              </div>

              <div className="w-full md:w-6/7 h-[120px] md:h-[140px]">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index < 2}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default ActivitySection;
