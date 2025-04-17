"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assests/images/logofooter.png";
import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import Container from "./container";
import CustomButton from "../common/button/button";

export default function Footer() {
  return (
    <Container className="bg-gray-50">
      <footer className="bg-secondary font-pilat text-white py-8 md:mx-8 my-0 md:my-4 px-4 md:px-8 rounded-none md:rounded-3xl">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between text-start items-start md:items-center space-y-6 md:space-y-0 px-0 md:px-5">
            <div className="space-y-6 text-start md:text-left">
              <Link
                href="/"
                className="inline-flex items-start justify-center md:justify-start space-x-2"
              >
                <div className="relative w-24 h-8">
                  <div className="absolute inset-0 flex md:items-center">
                    <Image
                      src={logo}
                      alt="logo"
                      className="text-xl font-light text-white bg-clip-text text-transparent"
                    />
                  </div>
                </div>
              </Link>
              <div className="flex flex-col items-start md:items-start md:flex-row space-y-2 md:space-y-0 md:space-x-6  text-sm">
                <div className="flex flex-col text-secondary-light space-y-2">
                  <h2 className="cursor-pointer text-start hover:text-white">
                    Book a Demo
                  </h2>
                  <div className="flex gap-3 md:gap-0 flex-row space-y-2 md:space-y-0 md:space-x-6">
                    <Link
                      href="/"
                      className="cursor-pointer pt-2 md:pt-0 hover:text-white"
                    >
                      Home
                    </Link>
                    <Link href="/about" className="hover:text-white">
                      About & Contact
                    </Link>
                    <Link href="/privacy" className="hover:text-white">
                      Privacy Policy
                    </Link>
                  </div>
                </div>
              </div>
              <p className="text-sm text-start text-zinc-400">
                © 2025 Flinkit. All rights reserved
              </p>
            </div>

            <div className="md:space-y-4 space-y-8 text-left">
              <p className="text-sm text-secondary-light font-medium">
                Get the App
              </p>
              <div className="flex flex-col space-y-4 items-center md:items-start">
                <CustomButton
                  className="bg-black items-center h-12 border text-sm border-gray-300 rounded-xl w-full max-w-xs"
                  startContent={<BsApple className="text-3xl text-white" />}
                >
                  <Link
                    href="#"
                    className="transition-opacity hover:opacity-80"
                  >
                    <span className="font-light text-xs">Download on the</span>
                    <h3 className="font-bold text-start">App Store</h3>
                  </Link>
                </CustomButton>
                <CustomButton
                  className="bg-black items-center h-12 border text-sm border-gray-300 rounded-xl w-full max-w-xs"
                  startContent={
                    <FaGooglePlay className="text-3xl text-white" />
                  }
                >
                  <Link
                    href="#"
                    className="transition-opacity text-start hover:opacity-80"
                  >
                    <span className="font-light text-xs">Get It on</span>
                    <h3 className="font-bold text-start">Google Play</h3>
                  </Link>
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
}
