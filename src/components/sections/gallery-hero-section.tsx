"use client";

import { ArrowUpRight } from "lucide-react";

export default function GalleryHeroSection() {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#0F1A24]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/67877f7ef6fba6015d1abe73_Gallery_20Thumbnail-13.jpg"
          alt="Luxorefi Gallery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center">
        <p className="text-sm text-[#D4A574] mb-6 tracking-[0.2em] uppercase">
          (GALLERY)
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-6 max-w-4xl mx-auto">
          Visual Journey Through Luxury
        </h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
          Immerse yourself in the beauty and elegance of Luxorefi. Explore our curated collection of spaces, moments, and experiences.
        </p>
      </div>
    </section>
  );
}
