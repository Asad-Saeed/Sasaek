import React from "react";
import Image from "next/image";
import imgText from "../../../public/assests/svg/textImg.svg";
import imgComment from "../../../public/assests/svg/commentnewimage.svg";
import imgGroup from "../../../public/assests/svg/homeherogroup.svg";
import imgBar from "../../../public/assests/svg/barImage.svg";
import { FaCircleChevronRight } from "react-icons/fa6";
import { Button } from "@heroui/react";
import Container from "../layout/container";
import bg from "../../../public/assests/svg/bg.svg";

interface HeroProps {
  homeData: any;
}

const Hero: React.FC<HeroProps> = ({ homeData }) => {
  return (
    <div
      className="w-full flex flex-col px-6 md:px-8 bg-cover rounded-xl bg-no-repeat"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Container>
        {/* Main Content Section */}
        <div className=" mx-auto w-full font-pilat  flex flex-col md:flex-row items-stretch">
          {/* Left - Text Content */}
          <div className="w-full md:w-1/2 text-left items-start pt-12 md:pt-20">
            <div className=" pt-9 flex flex-row  text-sm gap-5 text-[#523FFF]">
              <p>🔥 The Next Big Thing</p>
              <p>#1 Fitness Social Media App</p>
            </div>
            <h2 className="text-4xl text-black font-bold mb-4">
              {homeData?.features[0]?.title || "Fitness Enthusiasts"}
              {/* <span className="inline-block w-[50px] px-2 h-auto align-middle">
                <Image src={imgText} alt="App Preview" width={50} height={50} />
              </span> */}
              {/* Fitness Enthusiasts */}
            </h2>
            <p className="text-sm mb-8 max-w-xl">
              {homeData?.features[0]?.description}
            </p>
            <div className="relative">
              <div className="absolute left-0 transform -translate-y-full bg-black text-[#5FDAF5] text-xs ml-5 px-1 py-1 rounded-md">
                LIMITED
              </div>
              <Button className="relative inline-flex items-center px-3 font-extrabold py-2 text-white bg-[#523FFF] rounded-2xl text-sm transition-all">
                JOIN OUR BETA TESTING
                <FaCircleChevronRight className="ml-2 rounded-full text-[#5FDAF5] bg-black h-7 w-7" />
              </Button>
            </div>
          </div>

          {/* Middle - Comment Image */}
          <div className="w-full md:w-1/3 flex justify-center items-center">
            <Image
              src={imgComment}
              alt="Comment Section"
              width={350}
              height={350}
            />
          </div>

          {/* Right - Group Image */}
          <div className="w-full md:w-1/3 flex justify-center items-center">
            <Image
              src={
                homeData?.features[0]?.images[0]?.url
                  ? homeData?.features[0]?.images[0]?.url
                  : imgGroup
              }
              alt="Group Section"
              width={400}
              height={600}
            />
          </div>
        </div>
      </Container>

      {/* Bottom Bar Image */}
      <Image
        src={imgBar}
        width={100}
        height={100}
        alt="Bottom Bar"
        className="w-full md:-mt-40 -mt-20 h-full object-cover"
      />
    </div>
  );
};
export default Hero;
