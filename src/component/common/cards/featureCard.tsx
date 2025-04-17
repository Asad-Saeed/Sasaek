import Image from "next/image";
import { Button } from "@heroui/react";
import { FaChevronRight, FaGripfire } from "react-icons/fa";
import CustomButton from "../button/button";

interface FeatureCardProps {
  title: string;
  description: string;
  imgLeft: string;
  imgRight: string;
  featuretext?: string;
  imgvector1?: string;
  homefeaturebg?: string;
  showButton?: boolean;
}

export default function FeatureCard({
  title,
  description,
  imgLeft,
  imgRight,
  featuretext,
  imgvector1,
  showButton,
  homefeaturebg,
}: FeatureCardProps) {
  return (
    <div className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 p-6">
      {/* Background Vector Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={imgvector1}
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Left Image */}
      <div className="relative flex items-center justify-center">
        <Image
          src={imgLeft}
          alt="Left Image"
          className="rounded-lg"
          width={600}
          height={780}
        />
      </div>

      {/* Center Content */}
      <div className="relative flex flex-col items-center justify-center text-center space-y-4">
        {/* Background Blur Image - Positioned Lower */}
        {homefeaturebg && (
          <Image
            src={homefeaturebg}
            alt="Background"
            objectFit="cover"
            height={400}
            width={290}
            className="absolute -top-20 blur-sm"
          />
        )}
        {/* Feature Text Button */}{" "}
        <h3 className="text-lg font-semibold flex items-center space-x-2 relative z-10">
          <Button className="text-orange-500 bg-slate-200 rounded-sm flex items-center">
            <FaGripfire />
            <span className="text-blue-700 font-semibold ml-2">
              Feature #1{" "}
            </span>
          </Button>
        </h3>
        {/* Title & Description */}
        <h1 className="text-4xl md:text-3xl font-bold text-gray-900 mt-2 relative z-10">
          {title}
        </h1>
        <p className="text-gray-600 text-center max-w-lg mt-4 relative z-10">
          {description}
        </p>
        {/* Button */}
        {showButton && (
          <div className="relative z-10">
            <CustomButton
              type="button"
              endContent={
                <FaChevronRight className="rounded-full text-primary bg-white h-5 p-1 w-5" />
              }
              className="bg-primary text-white rounded-2xl w-auto capitalize"
            >
              Get the App
            </CustomButton>
          </div>
        )}
      </div>

      {/* Right Image */}
      <div className="relative flex items-center justify-center">
        <Image
          src={imgRight}
          alt="Right Image"
          className="rounded-lg"
          width={600}
          height={780}
        />
      </div>
    </div>
  );
}
