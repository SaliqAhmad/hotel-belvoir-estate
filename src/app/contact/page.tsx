import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import ContactHeroSection from "@/components/sections/contact-hero-section";
import ContactInfoSection from "@/components/sections/contact-info-section";
import ContactFormSection from "@/components/sections/contact-form-section";
import ContactMapSection from "@/components/sections/contact-map-section";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <HeaderNavigation />
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormSection />
      <ContactMapSection />
      <Footer />
    </main>
  );
}
