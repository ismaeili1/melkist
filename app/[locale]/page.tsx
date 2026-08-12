import {
  HeroSection,
} from "@/components/home/HeroSection";

import {
  CoreServicesSection,
} from "@/components/home/CoreServicesSection";

import {
  FeaturedPropertiesSection,
} from "@/components/home/FeaturedPropertiesSection";

import {
  ConsultingSection,
} from "@/components/home/ConsultingSection";

import {
  ArchitectureSection,
} from "@/components/home/ArchitectureSection";

import {
  InvestmentSection,
} from "@/components/home/InvestmentSection";

import {
  FinalCTASection,
} from "@/components/home/FinalCTASection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <CoreServicesSection />

      <FeaturedPropertiesSection />

      <ConsultingSection />

      <ArchitectureSection />

      <InvestmentSection />

      <FinalCTASection />
    </main>
  );
}