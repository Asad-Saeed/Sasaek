"use client";
import AboutIntro from "@/component/home/about";
import GreetingSection from "@/component/home/greeting";
import Hero from "@/component/home/hero";
import React from "react";

export default function HomeTemplete() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <GreetingSection />
    </>
  );
}
