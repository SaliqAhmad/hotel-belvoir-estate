import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import GalleryHeroSection from "@/components/sections/gallery-hero-section";
import GalleryFilterSection from "@/components/sections/gallery-filter-section";
import GalleryGridFull from "@/components/sections/gallery-grid-full";
import GalleryCtaSection from "@/components/sections/gallery-cta-section";

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <HeaderNavigation />
      <GalleryHeroSection />
      <GalleryFilterSection />
      <GalleryGridFull />
      <GalleryCtaSection />
      <Footer />
    </main>
  );
}
