import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import ACSSection from "@/components/ACSSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import IndustryTicker from "@/components/IndustryTicker";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <IndustryTicker />
        <ServicesSection />
        <StatsSection />
        <ACSSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
