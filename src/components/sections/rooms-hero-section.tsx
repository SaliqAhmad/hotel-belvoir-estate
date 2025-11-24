"use client";

export default function RoomsHeroSection() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/678743d2572cb060faff37a1_Rooms_20Thumbnail-4.jpg"
          alt="Luxury Hotel Room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center">
        <p className="text-sm text-[--color-gold-accent] mb-4 uppercase tracking-wider">
          (Rooms & Suites)
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-6">
          Explore Our Rooms
        </h1>
        <p className="text-lg text-white/90 max-w-2xl mx-auto">
          Discover elegance in every detail with our luxurious rooms and suites
        </p>
      </div>
    </section>
  );
}
