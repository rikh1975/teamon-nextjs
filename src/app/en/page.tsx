import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSectionEN from "@/components/en/HeroSectionEN";
import ServicesSectionEN from "@/components/en/ServicesSectionEN";
import StatsSection from "@/components/StatsSection";
import ACSSectionEN from "@/components/en/ACSSectionEN";
import TeamSection from "@/components/TeamSection";
import CTASectionEN from "@/components/en/CTASectionEN";
import IndustryTickerEN from "@/components/en/IndustryTickerEN";

export const metadata = {
  title: "teamOn | Corporate Finance & M&A Advisory in Spain",
  description:
    "Navigate corporate finance transactions with a specialized team. M&A advisory, investment capital, and real estate transactions.",
};

export default function HomeEN() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSectionEN />
        <IndustryTickerEN />
        <ServicesSectionEN />
        <StatsSection />
        <ACSSectionEN />
        <TeamSection />
        <CTASectionEN />
      </main>
      <Footer />
    </>
  );
}
