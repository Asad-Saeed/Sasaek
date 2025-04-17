"use client";
import React from "react";
import AboutIntro from "@/component/home/about";
import GreetingSection from "@/component/home/greeting";
import Hero from "@/component/home/hero";
import ActivitiesSection from "@/component/home/activities";
import AppIntroSection from "@/component/home/appIntro";
import DonationBanner from "@/component/home/donation";
import PartnersSlider from "@/component/home/partners";

export default function HomeTemplete() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <GreetingSection />
      <ActivitiesSection />
      <DonationBanner />
      <AppIntroSection />
      <PartnersSlider />
    </>
  );
}
