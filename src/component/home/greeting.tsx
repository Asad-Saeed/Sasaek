import Image from "next/image";
import Link from "next/link";
import Container from "../layout/container";
import image1 from "../../../public/assests/svg/test1.svg";
import image2 from "../../../public/assests/svg/test2.svg";
import image3 from "../../../public/assests/svg/test3.svg";
import chairman from "../../../public/assests/svg/chairman.svg";
import signature from "../../../public/assests/svg/signature.svg";
import { FaAngleRight } from "react-icons/fa6";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "오덕균 이사장",
    role: "이사장",
    image: image1,
  },
  {
    name: "정준호 이사",
    role: "이사",
    image: image3,
  },
  {
    name: "권혁준 고문",
    role: "고문",
    image: image2,
  },
];

const GreetingSection = () => {
  return (
    <Container className="px-5 md:px-16 lg:px-32">
      <section className="w-full py-12 md:py-20">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h1 className="text-[32px] md:text-[40px] font-bold text-[#111111] leading-tight">
              이사장 인사말.
            </h1>

            <div className="space-y-4 text-[#4C4C4C]">
              <p className="text-lg">
                안녕하세요, 사색의향기 이사장 오덕균 입니다.
              </p>

              <p className="text-base leading-relaxed">
                사색의향기는 '행복한 문화 나눔'을 통해 더 나은 사회를
                만들어가고자 노력해왔습니다. 앞으로도 문학과 인문학의 가치를
                공유하며, 멋진 커뮤니티로서 함께 성장하겠습니다.
              </p>

              <p className="text-base">
                많은 관심과 응원 부탁드립니다. 감사합니다.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-[#111111] font-medium">
                  사단법인 사색의향기 이사장 오덕균
                </span>
                <Image
                  src={signature}
                  alt="Signature"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>

              <Link
                href="/about"
                className="inline-flex items-center text-sm text-[#111111] transition-colors"
              >
                인터뷰 더 보기
                <span className="ml-2">
                  <FaAngleRight />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full md:w-[480px] h-[320px]">
            <Image src={chairman} alt="Chairman" fill className="object-fit" />
          </div>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-[160px] md:w-[200px] h-[160px] md:h-[200px] rounded-full overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-[#111111]">
                {member.name}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default GreetingSection;
