import Image from "next/image";
import img from "../../../../public/assests/svg/imagesmall.svg";
interface Testimonial {
  content: string;
  message: string;
  author: {
    image: string;
    name: string;
    role: string;
  };
}

export default function TestimonialsCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  console.log("lastttt", testimonial);
  return (
    <div className="bg-gradient-to-b from-[#EBFCFF] to-blue-50 md:rounded-xl rounded-none p-6  shadow-lg">
      <blockquote className="text-center mb-6">
        <p className="text-gray-700  leading-relaxed">{testimonial?.message}</p>
      </blockquote>
      <div className="flex flex-col items-center">
        <div className="relative w-12 h-12">
          <Image
            src={
              testimonial?.user?.image?.url
                ? testimonial?.user?.image?.url
                : img
            }
            alt={testimonial?.user?.name}
            width={100}
            height={100}
            className="mx-auto rounded-full"
          />
        </div>
        <div className="text-center mt-2">
          <cite className="font-bold text-[#202020] not-italic">
            {testimonial?.user?.userName}
          </cite>
          <span className="text-gray-500"> • </span>
          <span className="text-[#667085]">user</span>
        </div>
      </div>
    </div>
  );
}
