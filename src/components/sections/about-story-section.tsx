import Image from 'next/image';

const AboutStorySection = () => {
  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/678743d2572cb060faff37a1_Rooms_20Thumbnail-4.jpg"
              alt="Luxorefi hotel interior"
              width={600}
              height={700}
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
          <div className="order-1 lg:order-2 flex flex-col items-start space-y-6">
            <p className="font-body text-sm font-medium uppercase tracking-[0.1em] text-[#D4AF37]">
              (OUR STORY)
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-[1.2] text-[#1A1A1A]">
              A Legacy of Exceptional Hospitality
            </h2>
            <p className="font-body text-lg text-[#4A4A4A] leading-[1.7]">
              Since our founding, Hotel Belvior Estate has been synonymous with unparalleled luxury and impeccable service. Our journey began with a singular vision: to create a sanctuary where every guest experiences the pinnacle of comfort and sophistication.
            </p>
            <p className="font-body text-lg text-[#4A4A4A] leading-[1.7]">
              Nestled in the heart of Srinagar, Kashmir, our hotel has become a landmark destination, welcoming distinguished travelers from around the globe. Every detail, from our meticulously designed suites to our world-class amenities, reflects our unwavering commitment to excellence.
            </p>
            <p className="font-body text-lg text-[#4A4A4A] leading-[1.7]">
              Today, we continue to set the standard for luxury hospitality, combining timeless elegance with modern innovation to create unforgettable experiences for each and every guest.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStorySection;
