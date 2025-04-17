import Image from "next/image";
// import img1 from "../../../../public/assests/svg/iPhone.svg";
// import img2 from "../../../../public/assests/svg/iPhone.svg";
import img3 from "../../../../public/assests/svg/homebg.svg";
import img4 from "../../../../public/assests/svg/homesection2bg.svg";
import CustomButton from "../button/button";
import { FaChevronRight } from "react-icons/fa";
import { useCheckDevice } from "../hooks/mediaQuery";
interface HomeData {
  title: string;
  description: string;
  features: {
    title: string;
    description: string;
    images: { url: string; alternativeText: string; title: string }[];
  }[];
}

export default function ImageOverlaySection({
  homeData,
}: {
  homeData: HomeData;
}) {
  const { isMobile } = useCheckDevice();
  console.log("isMobile", isMobile);
  console.log("homeData=====", homeData);
  return (
    <div
      className="w-full bg-cover flex justify-center items-center min-h-[600px] overflow-hidden"
      style={{
        marginBlock: isMobile ? "0" : "100px",
        backgroundImage: `url(${
          isMobile
            ? img4.src
            : homeData?.features[1]?.images[0]?.url || img3.src
        })`,
        height: "600px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: isMobile ? "cover" : "100vw 100%",
        margin: "0 -1rem",
        width: "calc(100% + 1rem)",
      }}
    >
      {/* <Image
          src={img1}
          alt="Left"
          className="absolute left-4 top-1/2 hidden md:block transform -translate-y-1/2 w-1/4 "
          height={300}
        />

        <Image
          src={img2}
          alt="Right"
          className="absolute right-4 hidden md:block top-1/2 transform -translate-y-1/2 w-1/4  "
        /> */}

      <div className="relative w-full max-w-md md:mx-auto backdrop-blur-md md:backdrop-blur-none bg-white/30 md:bg-white/0 rounded-xl p-6 flex flex-col items-center justify-center text-center md:pt-48 pt-8">
        <h2 className="font-extrabold font-pilat text-2xl py-2">
          {homeData?.features[1]?.title || "Default Title"}
        </h2>
        <p className="text-sm cls-text-base font-medium max-w-lg mx-auto">
          {homeData?.features[1]?.description || "Default Description"}
        </p>
        <CustomButton
          className="mt-4 w-auto"
          endContent={
            <FaChevronRight className="rounded-full text-primary bg-white h-5 p-1 w-5" />
          }
        >
          Get the App{" "}
        </CustomButton>
      </div>
    </div>
  );
}
