"use client";
import Image from "next/image";

export default function ContactHeroSection() {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[#0F1A24]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/678649573d6fcc1f3d7191f9_About_20Image-3.jpg"
          alt="Contact Luxorefi"
          fill
          className="w-full h-full object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>


      {/* Content */}
      <div className="container relative z-10 text-center">
        <p className="text-sm text-[#D4A574] mb-6 tracking-[0.2em] uppercase">
          (GET IN TOUCH)
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-6 max-w-4xl mx-auto">
          Contact Us
        </h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Have questions? We're here to help make your stay extraordinary. Reach out to our team anytime.
        </p>
      </div>
    </section>
  );
}
