import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const AboutUsSection = () => {
  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-4 flex flex-col items-start space-y-6">
            <p className="font-body text-sm font-medium uppercase tracking-[0.1em] text-[#D4AF37]">
              (WELCOME TO Hotel Belvoir Estate)
            </p>
            <h2 className="font-display text-[48px] font-semibold leading-[1.2] text-[#1A1A1A]">
              Your Luxurious Retreat in the Heart of Srinagar
            </h2>
            <p className="font-body text-lg text-[#4A4A4A] leading-[1.7]">
              Strategically located just minutes from iconic landmarks like Dal Lake and the Shankaracharya Temple, Hotel Belvoir Estate offers unparalleled convenience for both leisure and business travelers. Whether you're here to explore the stunning natural beauty of Srinagar or seeking a peaceful oasis to unwind, our hotel is perfectly positioned to give you a memorable experience.

Our elegant property blends contemporary design with classic Kashmiri charm, ensuring your stay is nothing short of exceptional. With luxurious amenities and a serene atmosphere, we promise a stay that caters to both relaxation and productivity.
            </p>
            <Link
              href="/about-us"
              className="group mt-4 inline-flex items-center gap-3 rounded-[4px] border border-[#D4AF37] bg-transparent px-8 py-4 text-base font-medium text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-white"
            >
              <span>More About</span>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="lg:col-span-6">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/678649573d6fcc1f3d7191f9_About_20Image-3.jpg"
              alt="Outdoor luxury dining setup with an ocean view at sunset"
              width={932}
              height={880}
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
