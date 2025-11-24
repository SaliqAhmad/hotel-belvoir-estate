import Image from "next/image";
import Link from "next/link";

const roomsData = [
  {
    title: "Royal Sapphire Suite",
    price: "$300",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/678743d2572cb060faff37a1_Rooms_20Thumbnail-4.jpg",
    sqFt: "90 Sq Ft",
    beds: "1 Bed",
    sleeps: "3 Sleeps",
    link: "/rooms/royal-sapphire-suite",
  },
  {
    title: "Golden Horizon Room",
    price: "$200",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/6787439cc6f7d1f53641ff07_Rooms_20Thumbnail_20_7_-5.jpg",
    sqFt: "60 Sq Ft",
    beds: "2 Beds",
    sleeps: "4 Sleeps",
    link: "/rooms/golden-horizon-room",
  },
];

const iconPaths = {
  sqFt: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/svgs/678621269defbf311ba2e386_3-d-view-2.svg",
  bed: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/svgs/678621267307ee329be2ddb1_bed-double-3.svg",
  sleeps: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/svgs/678621263a24186c93c7321b_user-circle-4.svg",
};

export default function AccommodationTypes() {
  return (
    <section className="overflow-hidden bg-[#0F1926] py-20 lg:py-[120px]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-10 xl:px-20">
        <div className="mx-auto mb-[60px] max-w-3xl text-center">
          <p className="font-body text-sm font-medium uppercase tracking-[0.1em] text-primary">
            (ROOMS & SUITES)
          </p>
          <h2 className="mt-2.5 font-display text-[48px] font-semibold leading-[1.2] text-white md:text-[56px] !whitespace-pre-line">
            Explore Rooms and Suites
          </h2>
        </div>
      </div>
      
      <div className="mt-[60px]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-[24px] px-5 sm:px-10 xl:grid xl:grid-cols-2 xl:gap-[32px] xl:px-20">
          {roomsData.map((item, index) =>
          <Link
            key={index}
            href={item.link}
            className="group relative flex h-[400px] w-full cursor-pointer flex-col items-center justify-end overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 hover:border-primary/20"
            style={{
              background: 'linear-gradient(180deg, rgba(15,25,38,0.2) 0%, rgba(15,25,38,0.95) 100%)'
            }}>

              <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover transition-all duration-300 group-hover:scale-105" />

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
              
              {/* Price badge */}
              <div className="absolute left-6 top-6 flex items-baseline gap-1 rounded-xl bg-gradient-to-br from-primary via-[#D4A574] to-[#C99760] p-[2px] shadow-lg shadow-primary/20">
                <div className="rounded-[10px] bg-[#0F1926]/80 backdrop-blur-md px-5 py-3">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-3xl font-bold text-primary">{item.price}</span>
                    <span className="text-sm font-medium text-white/90">/Night</span>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10 mb-8 w-full px-6 text-center">
                <h3 className="mb-5 font-display text-[28px] font-semibold leading-[1.2] text-white">
                  {item.title}
                </h3>
                
                <div className="flex items-center justify-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <Image 
                      src={iconPaths.sqFt} 
                      alt="Area" 
                      width={18} 
                      height={18} 
                      style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(47%) saturate(405%) hue-rotate(359deg) brightness(98%) contrast(89%)' }}
                    />
                    <span className="text-sm font-medium text-white">{item.sqFt}</span>
                  </div>
                  <div className="h-4 w-[1px] bg-primary/30" />
                  <div className="flex items-center gap-2">
                    <Image 
                      src={iconPaths.bed} 
                      alt="Beds" 
                      width={18} 
                      height={18} 
                      style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(47%) saturate(405%) hue-rotate(359deg) brightness(98%) contrast(89%)' }}
                    />
                    <span className="text-sm font-medium text-white">{item.beds}</span>
                  </div>
                  <div className="h-4 w-[1px] bg-primary/30" />
                  <div className="flex items-center gap-2">
                    <Image 
                      src={iconPaths.sleeps} 
                      alt="Sleeps" 
                      width={18} 
                      height={18} 
                      style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(47%) saturate(405%) hue-rotate(359deg) brightness(98%) contrast(89%)' }}
                    />
                    <span className="text-sm font-medium text-white">{item.sleeps}</span>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>);
}