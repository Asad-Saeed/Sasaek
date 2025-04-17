"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";
import logo from "../../../public/assests/svg/logo.svg";
import Container from "../layout/container";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: "/", label: "소개" },
    { href: "/app", label: "소소담당 APP" },
    { href: "/activity", label: "활동" },
  ];

  return (
    <header className="w-full border-b border-[#E5E7EB]">
      <Container>
        <nav className="flex items-center justify-between h-[64px] px-4 lg:px-6">
          {/* Logo with Text */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="사색의향기"
              className="h-6 w-auto"
              priority
            />
            <div className="flex flex-col">
              <span className="text-[15px] font-medium text-[#4D342C]">
                사색의향기
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-[15px] font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-[#8C5947]"
                        : "text-[#111111] hover:text-[#111827]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Language Selector */}
            <Dropdown className="bg-[#4C4C4C] text-[#FFFFFF]">
              <DropdownTrigger>
                <button className="bg-[#4C4C4C] flex items-center gap-1.5 px-2 py-1 text-[14px] font-medium text-[#FFFFFF] outline-none rounded-full">
                  <span>KOR</span>
                  <IoIosArrowDown className="w-3 h-3 ml-0.5" />
                </button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Language selection" className="w-full">
                <DropdownItem key="kor" className="text-sm hover:bg-black/10">
                  KOR
                </DropdownItem>
                <DropdownItem key="eng" className="text-sm hover:bg-black/10">
                  ENG
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[#4B5563]"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FiX className="w-5 h-5" />
            ) : (
              <FiMenu className="w-5 h-5" />
            )}
          </button>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="absolute top-[64px] left-0 right-0 bg-white border-b border-[#E5E7EB] md:hidden">
              <div className="px-4 py-3">
                <ul className="space-y-4">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`block text-[15px] font-medium ${
                          isActive(link.href)
                            ? "text-[#111827]"
                            : "text-[#4B5563] hover:text-[#111827]"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    {/* Language Selector */}
                    <Dropdown className="bg-[#4C4C4C] text-[#FFFFFF]">
                      <DropdownTrigger>
                        <button className="bg-[#4C4C4C] flex items-center gap-1.5 px-2 py-1 text-[14px] font-medium text-[#FFFFFF] outline-none rounded-full">
                          <span>KOR</span>
                          <IoIosArrowDown className="w-3 h-3 ml-0.5" />
                        </button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Language selection"
                        className="w-full"
                      >
                        <DropdownItem
                          key="kor"
                          className="text-sm hover:bg-black/10"
                        >
                          KOR
                        </DropdownItem>
                        <DropdownItem
                          key="eng"
                          className="text-sm hover:bg-black/10"
                        >
                          ENG
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
}
