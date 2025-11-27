"use client";

export default function RoomsHeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/678743d2572cb060faff37a1_Rooms_20Thumbnail-4.jpg"
          alt="Luxury Hotel Room"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-[--color-gold-accent]/20 rounded-full blur-sm"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 border border-[--color-gold-accent]/20 rounded-full blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-[--color-gold-accent] mb-8 uppercase tracking-[0.3em] font-medium animate-fade-in">
            (Rooms & Suites)
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display text-white mb-10 leading-[1.1] tracking-tight">
            Discover Your
            <br />
            <span className="text-[--color-gold-accent]">Perfect Sanctuary</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            Experience unparalleled luxury in our meticulously designed rooms and suites,
            where every detail reflects our commitment to excellence
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[--color-gold-accent] rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}