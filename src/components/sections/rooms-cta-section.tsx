"use client";

import { ArrowRight, Phone, Mail, Clock, MapPin } from "lucide-react";

export default function RoomsCtaSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 bg-[--color-primary-dark]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsIDE2NSwgMTE2LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[--color-gold-accent] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[--color-gold-accent] rounded-full blur-3xl opacity-10"></div>

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-16">
            <p className="text-sm text-[--color-gold-accent] mb-6 uppercase tracking-[0.3em] font-medium">
              (Ready to Book?)
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-8 leading-tight">
              Begin Your Journey to
              <br />
              <span className="text-[--color-gold-accent]">Luxury & Comfort</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Our dedicated reservations team is ready to help you find the perfect accommodation
              and make your stay truly unforgettable.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <button className="group bg-[--color-gold-accent] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[--color-gold-hover] transition-all duration-300 flex items-center justify-center gap-3 hover:-translate-y-1 shadow-2xl text-base">
                Reserve Your Room
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-[--color-text-dark] transition-all duration-300 flex items-center justify-center gap-3 hover:-translate-y-1 text-base">
                Explore Amenities
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-16 border-t border-white/10">
            {/* Phone */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-[--color-gold-accent]/50 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-[--color-gold-accent] flex items-center justify-center mb-4 shadow-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Call Us</h3>
              <p className="text-white/60 text-sm mb-2">24/7 Support</p>
              <p className="text-white font-medium">+1 (555) 123-4567</p>
            </div>

            {/* Email */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-[--color-gold-accent]/50 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-[--color-gold-accent] flex items-center justify-center mb-4 shadow-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Email Us</h3>
              <p className="text-white/60 text-sm mb-2">Quick Response</p>
              <p className="text-white font-medium text-sm">reservations@luxorefi.com</p>
            </div>

            {/* Hours */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-[--color-gold-accent]/50 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-[--color-gold-accent] flex items-center justify-center mb-4 shadow-lg">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Open Hours</h3>
              <p className="text-white/60 text-sm mb-2">Front Desk</p>
              <p className="text-white font-medium">24 Hours Daily</p>
            </div>

            {/* Location */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-[--color-gold-accent]/50 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-[--color-gold-accent] flex items-center justify-center mb-4 shadow-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Visit Us</h3>
              <p className="text-white/60 text-sm mb-2">Downtown</p>
              <p className="text-white font-medium text-sm">123 Luxury Ave, NY</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}