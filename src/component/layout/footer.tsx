"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assests/svg/footerlogo.svg";
import Container from "./container";
import { FaArrowRight } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-[#222222]">
      <Container className="px-5 md:px-16 lg:px-32">
        <div className="flex flex-col lg:flex-row justify-between py-12">
          {/* Left Section */}
          <div className="flex flex-col space-y-4 max-w-[640px]">
            {/* Logo */}
            <span className="mb-3 md:mb-5">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src={logo}
                  alt="사색의향기"
                  className="h-6 w-auto text-[#7C7C7C]"
                  priority
                />
                <div className="flex flex-col">
                  <span className="text-xl font-medium text-[#7C7C7C]">
                    사색의향기
                  </span>
                </div>
              </Link>
            </span>

            {/* Business Info */}
            <div className="flex flex-col md:flex-row space-y-1 space-x-2 justify-start align-items-center">
              <div className="flex items-center space-x-6 text-[13px] text-[#999999]">
                <span className="hover:text-white cursor-pointer text-[#FFFFFF]">
                  계원정보 처리방침
                </span>
                <span className="hover:text-white cursor-pointer text-[#FFFFFF]">
                  이용약관
                </span>

                <span className="hover:text-white cursor-pointer text-[#7C7C7C]">
                  <span>고객센터 평일 08:00~19:00 (주말 및 공휴일 휴무)</span>
                </span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col space-y-1 text-[13px] text-[#999999]">
              <div className="flex flex-wrap items-center">
                <span className="text-[#FFFFFF] after:content-[''] after:mx-3 after:h-[12px] after:bg-[#999999] after:inline-block">
                  사업자명{" "}
                  <span className="text-[#FFFFFF] opacity-50">사색의향기</span>
                </span>
                <span className="text-[#FFFFFF] after:content-[''] after:mx-3 after:h-[12px] after:bg-[#999999] after:inline-block">
                  이사장{" "}
                  <span className="text-[#FFFFFF] opacity-50">정주호</span>
                </span>
                <span className="text-[#FFFFFF] after:content-[''] after:mx-3 after:h-[12px] after:bg-[#999999] after:inline-block">
                  고유번호{" "}
                  <span className="text-[#FFFFFF] opacity-50">
                    355-82-00129
                  </span>
                </span>
              </div>
              <div className="flex flex-wrap items-center">
                <span className="text-[#7C7C7C] after:content-[''] after:mx-3 after:h-[12px] after:bg-[#999999] after:inline-block">
                  주소{" "}
                  <span className="text-[#FFFFFF]">
                    서울시 강남구 테헤란로 152길 28 아마엘타워(역삼동)
                  </span>
                </span>
                <span className="text-[#7C7C7C] after:content-[''] after:mx-3 after:h-[12px] after:bg-[#999999] after:inline-block">
                  전화 <span className="text-[#FFFFFF]">02-539-5101</span>
                </span>
                <span className="text-[#7C7C7C] after:content-[''] after:mx-3 after:h-[12px] after:bg-[#999999] after:inline-block">
                  팩스 <span className="text-[#FFFFFF]">070-8668-5091</span>
                </span>
                <span className="text-[#7C7C7C] after:content-[''] after:mx-3 after:h-[12px] after:bg-[#999999] after:inline-block">
                  이메일{" "}
                  <span className="text-[#FFFFFF]">cspsy@csulpy.com</span>
                </span>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-[13px] text-[#FFFFFF] pt-2 md:pt-0">
              Copyright © 2023 사색의향기. All Rights Reserved
            </div>
          </div>

          {/* Right Section */}
          <div className="mt-12 lg:mt-0 lg:ml-8 max-w-[360px]">
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-medium text-[#FFFFFF] mb-2">
                뉴스레터 구독하기
              </h3>
              <p className="text-[13px] text-[#FFFFFF] mb-4">
                이메일 구독을 통해 사색의향기의 최신 소식과 교육 및 이벤트
                소식을 빠르게 받아보실 수 있습니다.
              </p>

              {/* Newsletter Input Group */}
              <div className="w-full flex flex-col space-y-3">
                <div className="relative w-full">
                  <input
                    type="email"
                    placeholder="이메일 주소를 입력해주세요"
                    className="w-full h-[46px] bg-[#222222] rounded-full px-4 text-[14px] border border-[#FFFFFF] text-white placeholder:text-[#999999] focus:outline-none focus:ring-1 focus:ring-white"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-[#FFFFFF] transition-colors">
                    <FaArrowRight className="w-4 h-4" />
                  </button>
                </div>
                {/* <Link
                  href="/newsletter"
                  className="inline-flex items-center text-[14px] text-white hover:text-[#999999] transition-colors"
                >
                  이메일 구독신청
                  <IoIosArrowForward className="ml-1 w-4 h-4" />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
