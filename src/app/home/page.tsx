"use client";
import { ServicesSection } from "@/components/home/ServicesSection";
import  AboutSection  from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import HeroSection from "@/components/home/HeroSection";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
