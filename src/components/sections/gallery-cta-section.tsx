"use client";

import { ArrowUpRight, Phone, Mail } from "lucide-react";

export default function GalleryCtaSection() {
  return (
    <section className="py-24 bg-[#0F1A24]">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-[#D4A574] mb-4 tracking-[0.2em] uppercase">
            (READY TO EXPERIENCE?)
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
            Book Your Luxury Stay Today
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Experience the elegance and comfort shown in our gallery. Reserve your room now and immerse yourself in luxury.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-[#D4A574] text-white px-8 py-4 rounded-lg hover:bg-[#C99760] transition-all duration-300 flex items-center justify-center gap-2 group">
              <span className="font-medium">Book a Room</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            <button className="border-2 border-[#D4A574] text-[#D4A574] px-8 py-4 rounded-lg hover:bg-[#D4A574] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
              <span className="font-medium">View Rooms</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-white/80">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#D4A574]" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#D4A574]" />
              <span>info@luxorefi.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
