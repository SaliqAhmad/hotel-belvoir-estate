import HeaderNavigation from "@/components/sections/header-navigation";
import HeroSection from "@/components/sections/hero-section";
import AboutUsSection from "@/components/sections/about-us-section";
import AccommodationTypes from "@/components/sections/accommodation-types";
import HotelFacilities from "@/components/sections/hotel-facilities";
import ExtraAmenitiesVideo from "@/components/sections/extra-amenities-video";
import TestimonialsCarousel from "@/components/sections/testimonials-carousel";
import GalleryGrid from "@/components/sections/gallery-grid";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeaderNavigation />
      <HeroSection />
      <AboutUsSection />
      <AccommodationTypes />
      <HotelFacilities />
      <ExtraAmenitiesVideo />
      <TestimonialsCarousel />
      <GalleryGrid />
      <Footer />
    </main>
  );
}