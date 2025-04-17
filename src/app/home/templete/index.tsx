"use client";
import React from "react";
import AboutIntro from "@/component/home/about";
import GreetingSection from "@/component/home/greeting";
import Hero from "@/component/home/hero";
import AppIntroSection from "@/component/home/appIntro";

export default function HomeTemplete() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <GreetingSection />
      <AppIntroSection />
    </>
  );
}
