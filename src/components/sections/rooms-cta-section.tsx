"use client";

import { ArrowUpRight, Phone, Mail } from "lucide-react";

export default function RoomsCtaSection() {
  return (
    <section className="py-24 bg-[--color-primary-dark]">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-[--color-gold-accent] mb-5 uppercase tracking-[0.2em] font-medium">
            (Book Your Stay)
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-6 leading-tight">
            Ready to Experience Luxury?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Contact our reservations team to book your perfect room or suite. 
            We're here to make your stay unforgettable.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="group bg-[--color-gold-accent] text-white px-10 py-4 rounded-md font-medium hover:bg-[--color-gold-hover] transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1 shadow-xl">
              Book Now
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <button className="group bg-transparent border-2 border-[--color-gold-accent] text-[--color-gold-accent] px-10 py-4 rounded-md font-medium hover:bg-[--color-gold-accent] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1">
              View All Amenities
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto pt-12 border-t border-white/10">
            <div className="flex items-center gap-4 text-white justify-center md:justify-start">
              <div className="w-14 h-14 rounded-full bg-[--color-gold-accent] flex items-center justify-center flex-shrink-0 shadow-lg">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-white/60 mb-1">Call Us</p>
                <p className="text-lg font-medium">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white justify-center md:justify-start">
              <div className="w-14 h-14 rounded-full bg-[--color-gold-accent] flex items-center justify-center flex-shrink-0 shadow-lg">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-white/60 mb-1">Email Us</p>
                <p className="text-lg font-medium">reservations@luxorefi.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}