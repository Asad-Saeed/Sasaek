import Image from "next/image";
import appLogo from "../../../public/assests/svg/appicon.svg";
import appScreen from "../../../public/assests/svg/phone.svg";
import Container from "../layout/container";
import { MdOutlineFileDownload } from "react-icons/md";

const AppIntroSection = () => {
  return (
    <Container className="px-5 md:px-16 lg:px-32">
      <section className="w-full py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-2">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-4">
              <Image src={appLogo} alt="App Logo" width={48} height={48} />
            </div>

            <div className="space-y-4">
              <h2 className="text-[32px] md:text-[40px] font-normal text-[#111111] leading-[1.2]">
                더 나은 세상을
                <br />
                만들어 가기 위한 노력.
              </h2>

              <div className="space-y-6 text-[#4C4C4C] max-w-[580px]">
                <p className="text-sm md:text-base leading-[1.8]">
                  바른 인성과 성품을 고양하며 함께 나누는 활동을 통해 새대와
                  나라를 조절한 커뮤니티를 만들어나가려고 노력하고 있습니다.
                </p>
                <p className="text-sm md:text-base leading-[1.8]">
                  작은 당소와 삶의 지혜가 필요하신 모든 분들을 환영합니다.
                </p>
                <p className="text-sm md:text-base leading-[1.8]">
                  삶의 어려운 고충이 있으신 분들에게 작은 도움을 드립니다.
                  법률적이거나 개인적으로 해결하기 어려운 문제들이 있으시다면
                  소심 서포터즈에게 도움을 요청해주세요.
                </p>
              </div>

              <div>
                <p className="text-[#111111] font-medium my-6 md:my-12">
                  2025. 6. 출시 예정 커뮤니티 APP '소소담담'
                </p>
                <button className="px-4 py-3 border border-[#111111] rounded-full text-sm text-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-300 flex items-center gap-2">
                  <span>앱 다운로드</span>
                  <MdOutlineFileDownload className="w-4 h-4 ms-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full lg:w-[480px] h-[480px] md:h-[560px]">
            <Image
              src={appScreen}
              alt="App Screenshot"
              fill
              className="object-contain md:object-right"
              priority
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default AppIntroSection;
