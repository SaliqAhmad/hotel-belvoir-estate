import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import RoomsHeroSection from "@/components/sections/rooms-hero-section";
import RoomsFilterSection from "@/components/sections/rooms-filter-section";
import RoomsGridFull from "@/components/sections/rooms-grid-full";
import RoomsCtaSection from "@/components/sections/rooms-cta-section";

export default function RoomsPage() {
  return (
    <main className="min-h-screen">
      <HeaderNavigation />
      <RoomsHeroSection />
      <RoomsFilterSection />
      <RoomsGridFull />
      <RoomsCtaSection />
      <Footer />
    </main>
  );
}
