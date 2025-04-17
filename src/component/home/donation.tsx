import React from "react";
import Container from "../layout/container";
import { TbHeartHandshake } from "react-icons/tb";

const DonationBanner = () => {
  return (
    <section className="w-full py-12 md:py-16 bg-[#F8F4F3] rounded-3xl">
      <Container className="px-5 md:px-16 lg:px-32">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          {/* Main Title */}
          <h2 className="text-2xl md:text-3xl lg:text-[32px] font-medium text-[#111111] leading-relaxed">
            기부를 통해 따뜻한 마음을 보내고 싶다면,
          </h2>

          {/* Organization Info */}
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm md:text-base text-[#111111]">
              후원계좌 안내
            </span>
            <span className="text-sm md:text-base text-[#111111]">
              국민 924501-01-351204 / 사단법인 사색의향기
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2">
            <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white transition-colors">
              <TbHeartHandshake className="w-4 h-4" />
              <span className="text-sm font-medium">정기 후원</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white transition-colors">
              <span className="text-sm font-medium">일시 후원</span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DonationBanner;
