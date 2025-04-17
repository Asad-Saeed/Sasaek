import React from "react";
import Image from "next/image";
import { MdOutlineFitnessCenter } from "react-icons/md";
import Container from "@/component/layout/container";

interface FitnessStoryProps {
  imageSrc: string;
  imagePosition?: "left" | "right";
  textPosition?: "top" | "bottom";
  benchPress: string;
  deadlift: string;
  squat: string;
  titleIcon?: React.ReactNode;
  titleText: string;
  description: string;
  image: string;
}

const FitnessStory: React.FC<FitnessStoryProps> = ({
  imageSrc,
  imagePosition = "right",
  textPosition = "top",
  titleIcon = <MdOutlineFitnessCenter />,
  titleText,
  description,
  image,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-3 bg-white shadow-lg rounded-2xl  mx-auto gap-6">
      {imagePosition === "left" && (
        <div className="relative flex-1 flex justify-center">
          <Image
            src={imageSrc}
            alt="Fitness Post"
            width={900}
            height={900}
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>
      )}

      {/* Text Section */}
      <div
        className={`flex-1 font-pilat flex flex-col gap-2 ${
          textPosition === "top" ? "justify-start" : "justify-end"
        }`}
      >
        <Container className="p-4 md:p-8">
          <Image
            src={image}
            alt="Fitness Post"
            width={50}
            height={50}
            className="rounded-xl"
          />
          <h2 className="text-3xl font-bold text-gray-800">{titleText}</h2>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </Container>
      </div>

      {imagePosition === "right" && (
        <div className="relative flex-1 flex justify-center">
          <Image
            src={imageSrc}
            alt="Fitness Post"
            width={900}
            height={900}
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>
      )}
    </div>
  );
};

export default FitnessStory;
