'use client';

import Image from 'next/image';

const AboutHeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/678649573d6fcc1f3d7191f9_About_20Image-3.jpg"
          alt="Luxury hotel dining experience"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container text-center">
          <p className="font-body text-sm font-medium uppercase tracking-[0.1em] text-[#D4AF37] mb-6">
            (ABOUT US)
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] mb-6">
            Where Luxury Meets
            <br />
            Timeless Elegance
          </h1>
          <p className="font-body text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Discover the story behind America's most distinguished luxury hotel experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
