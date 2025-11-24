import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const AboutCtaSection = () => {
  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
        <div className="bg-[#0F1926] rounded-3xl p-12 md:p-16 lg:p-20 text-center">
          <p className="font-body text-sm font-medium uppercase tracking-[0.1em] text-[#D4AF37] mb-6">
            (EXPERIENCE LUXOREFI)
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.2] mb-6">
            Ready to Experience
            <br />
            True Luxury?
          </h2>
          <p className="font-body text-lg text-[#B8B8B8] max-w-2xl mx-auto leading-[1.7] mb-10">
            Join thousands of satisfied guests who have made Luxorefi their home away from home. Your extraordinary experience awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/rooms"
              className="inline-flex items-center gap-3 rounded-[4px] bg-[#D4AF37] px-8 py-4 text-base font-medium text-white transition-all hover:bg-[#C99760] hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <span>Explore Rooms</span>
              <ArrowUpRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-[4px] border border-white bg-transparent px-8 py-4 text-base font-medium text-white transition-all hover:bg-white hover:text-[#0F1926]"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCtaSection;
