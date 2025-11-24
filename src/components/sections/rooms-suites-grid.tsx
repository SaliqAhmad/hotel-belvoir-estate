import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const roomData = [
  {
    title: "Royal Sapphire Suite",
    price: "$300",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/678743d2572cb060faff37a1_Rooms_20Thumbnail-4.jpg",
    sqFt: "90 Sq Ft",
    beds: "1 Bed",
    sleeps: "3 Sleeps",
    link: "/rooms/royal-sapphire-suite",
  },
  {
    title: "Golden Horizon Room",
    price: "$200",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/6787439cc6f7d1f53641ff07_Rooms_20Thumbnail_20_7_-5.jpg",
    sqFt: "60 Sq Ft",
    beds: "2 Beds",
    sleeps: "4 Sleeps",
    link: "/rooms/golden-horizon-room",
  },
  {
    title: "Pearl Orchid Suite",
    price: "$150",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/6787436b0e15d3bc251dc11b_Rooms_20Thumbnail_20_6_-6.jpg",
    sqFt: "70 Sq Ft",
    beds: "1 Bed",
    sleeps: "2 Sleeps",
    link: "/rooms/pearl-orchid-suite",
  },
  {
    title: "Eclipse Grand Suite",
    price: "$100",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/67874337a963d7af733ee9a8_Rooms_20Thumbnail_20_5_-7.jpg",
    sqFt: "50 Sq Ft",
    beds: "1 Bed",
    sleeps: "3 Sleeps",
    link: "/rooms/eclipse-grand-suite",
  },
];

const iconPaths = {
  sqFt: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/svgs/678621269defbf311ba2e386_3-d-view-2.svg",
  bed: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/svgs/678621267307ee329be2ddb1_bed-double-3.svg",
  sleeps: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/svgs/678621263a24186c93c7321b_user-circle-4.svg",
};

type Room = (typeof roomData)[0];

const RoomCard = ({ room }: { room: Room }) => {
  return (
    <div className="bg-card rounded-xl shadow-[0_4px_20px_0_rgba(0,0,0,0.05)] overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
      <Link href={room.link} className="block relative">
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
          <Image
            src={room.image}
            alt={room.title}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="absolute top-7 right-7 z-10 flex items-baseline gap-1"
            style={{
              backgroundImage: 'url("https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/678748f9262cf9b29131097f_Price_20_BG-24.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              padding: "12px 20px",
            }}
          >
            <p className="font-display text-2xl text-white font-medium">
              {room.price}
            </p>
            <p className="text-base text-white font-normal">/Night</p>
          </div>
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-[4px] border border-white/20 flex items-center justify-center">
              <span className="text-white font-display text-lg">View</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="p-6">
        <Link href={room.link}>
            <h3 className="font-display text-2xl text-foreground font-medium mb-4 hover:text-primary transition-colors">
              {room.title}
            </h3>
        </Link>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-muted">
          <div className="flex items-center gap-2">
            <Image src={iconPaths.sqFt} alt="Area" width={20} height={20} />
            <span className="text-base font-medium">{room.sqFt}</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src={iconPaths.bed} alt="Beds" width={20} height={20} />
            <span className="text-base font-medium">{room.beds}</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src={iconPaths.sleeps} alt="Sleeps" width={20} height={20} />
            <span className="text-base font-medium">{room.sleeps}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const RoomsSuitesGrid = () => {
  return (
    <section className="bg-background py-20 lg:py-[120px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-16 gap-6 lg:gap-0">
          <div className="max-w-xl">
            <p className="text-sm text-primary tracking-[0.1em] font-medium uppercase mb-4">
              (ROOMS & SUITES)
            </p>
            <h2 className="font-display text-[48px] leading-tight text-foreground font-medium">
              Explore Rooms and Suites
            </h2>
          </div>
          
          <Link
            href="/rooms"
            className="group shrink-0 inline-flex items-center justify-center gap-2 border border-primary text-primary py-4 px-8 rounded-[4px] hover:bg-primary hover:text-primary-foreground transition-all duration-300 self-start lg:self-auto"
          >
            <span className="font-medium text-base">View All Rooms</span>
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roomData.map((room) => (
            <RoomCard key={room.title} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSuitesGrid;