import Image from "next/image";
import bookImg from "../../../public/assests/svg/book.svg";
import Container from "../layout/container";

const AboutIntro = () => {
  return (
    <Container className="px-5 md:px-16 lg:px-32">
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto max-w-6xl text-[#111111]">
          <div className="flex flex-col items-center text-center">
            {/* Main Heading */}
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 leading-relaxed">
              새로운 문화 나눔을 만들어갑니다.
            </h2>

            {/* Book Image and Text Container */}
            <div className="flex flex-col items-center gap-4 mb-4 md:mb-8">
              <div className="text-2xl md:text-4xl font-bold flex items-center gap-4">
                <span>우리는</span>
                <div className="relative w-[120px] md:w-[230px] h-[56px] md:h-[64px] rounded-full overflow-hidden">
                  <Image
                    src={bookImg}
                    alt="Open book"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold">
                사색의향기입니다.
              </h3>
            </div>

            {/* Description */}
            <p className="text-[#111111] text-base md:text-lg max-w-3xl leading-relaxed">
              사색의향기는 문학인들의 커뮤니티로서 "행복한 문화 나눔"을 통한
              사회 공헌과 선진적이고 건전한 사회 문화를 만들어나가기 위해
              노력하는 비영리 단체입니다.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default AboutIntro;
