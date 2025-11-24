import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import AboutHeroSection from "@/components/sections/about-hero-section";
import AboutStorySection from "@/components/sections/about-story-section";
import AboutValuesSection from "@/components/sections/about-values-section";
import AboutStatsSection from "@/components/sections/about-stats-section";
import AboutTeamSection from "@/components/sections/about-team-section";
import AboutCtaSection from "@/components/sections/about-cta-section";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <HeaderNavigation />
      <AboutHeroSection />
      <AboutStorySection />
      <AboutValuesSection />
      <AboutStatsSection />
      <AboutTeamSection />
      <AboutCtaSection />
      <Footer />
    </main>
  );
}
