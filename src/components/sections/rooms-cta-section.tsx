"use client";

import { ArrowUpRight, Phone, Mail } from "lucide-react";

export default function RoomsCtaSection() {
  return (
    <section className="py-20 bg-[--color-primary-dark]">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-[--color-gold-accent] mb-4 uppercase tracking-wider">
            (Book Your Stay)
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Contact our reservations team to book your perfect room or suite. 
            We're here to make your stay unforgettable.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-6 justify-center mb-12">
            <button className="group bg-[--color-gold-accent] text-white px-8 py-4 rounded-lg font-medium hover:bg-[--color-gold-hover] transition-all duration-300 flex items-center gap-2 hover:-translate-y-1 shadow-lg">
              Book Now
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <button className="group bg-transparent border-2 border-[--color-gold-accent] text-[--color-gold-accent] px-8 py-4 rounded-lg font-medium hover:bg-[--color-gold-accent] hover:text-white transition-all duration-300 flex items-center gap-2">
              View All Amenities
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-8 justify-center pt-8 border-t border-white/10">
            <div className="flex items-center gap-3 text-white">
              <div className="w-12 h-12 rounded-full bg-[--color-gold-accent] flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-sm text-white/60">Call Us</p>
                <p className="text-lg font-medium">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white">
              <div className="w-12 h-12 rounded-full bg-[--color-gold-accent] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-sm text-white/60">Email Us</p>
                <p className="text-lg font-medium">reservations@luxorefi.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
