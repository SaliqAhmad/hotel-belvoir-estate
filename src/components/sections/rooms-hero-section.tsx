"use client";

export default function RoomsHeroSection() {
  return (
    <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/678743d2572cb060faff37a1_Rooms_20Thumbnail-4.jpg"
          alt="Luxury Hotel Room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        <p className="text-sm text-[--color-gold-accent] mb-6 uppercase tracking-[0.2em] font-medium">
          (Rooms & Suites)
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-8 leading-tight">
          Explore Our Rooms
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          Discover elegance in every detail with our luxurious rooms and suites, where comfort meets sophistication
        </p>
      </div>
    </section>
  );
}