"use client";

import { ArrowUpRight, Maximize2, Bed, Users } from "lucide-react";

const rooms = [
  {
    id: 1,
    title: "Royal Sapphire Suite",
    price: 300,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/678743d2572cb060faff37a1_Rooms_20Thumbnail-4.jpg",
    sqft: 450,
    beds: 2,
    sleeps: 4,
  },
  {
    id: 2,
    title: "Imperial Gold Suite",
    price: 350,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/6787439cc6f7d1f53641ff07_Rooms_20Thumbnail_20_7_-5.jpg",
    sqft: 500,
    beds: 2,
    sleeps: 4,
  },
  {
    id: 3,
    title: "Diamond Elegance Suite",
    price: 400,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/6787436b0e15d3bc251dc11b_Rooms_20Thumbnail_20_6_-6.jpg",
    sqft: 550,
    beds: 3,
    sleeps: 6,
  },
  {
    id: 4,
    title: "Platinum Heritage Suite",
    price: 450,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/67874337a963d7af733ee9a8_Rooms_20Thumbnail_20_5_-7.jpg",
    sqft: 600,
    beds: 3,
    sleeps: 6,
  },
  {
    id: 5,
    title: "Emerald Celestial Suite",
    price: 380,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/678743d2572cb060faff37a1_Rooms_20Thumbnail-4.jpg",
    sqft: 480,
    beds: 2,
    sleeps: 4,
  },
  {
    id: 6,
    title: "Ruby Presidential Suite",
    price: 500,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/6787439cc6f7d1f53641ff07_Rooms_20Thumbnail_20_7_-5.jpg",
    sqft: 700,
    beds: 4,
    sleeps: 8,
  },
  {
    id: 7,
    title: "Pearl Luxury Room",
    price: 280,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/6787436b0e15d3bc251dc11b_Rooms_20Thumbnail_20_6_-6.jpg",
    sqft: 400,
    beds: 2,
    sleeps: 3,
  },
  {
    id: 8,
    title: "Topaz Duplex House",
    price: 550,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/67874337a963d7af733ee9a8_Rooms_20Thumbnail_20_5_-7.jpg",
    sqft: 800,
    beds: 4,
    sleeps: 8,
  },
];

export default function RoomsGridFull() {
  return (
    <section className="py-24 bg-[--color-light-cream]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-64 lg:h-72 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Price Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <div className="relative w-20 h-20 lg:w-24 lg:h-24">
                    <img
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/678748f9262cf9b29131097f_Price_20BG-24.png"
                      alt=""
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-white text-lg lg:text-xl font-display font-bold tracking-tight">
                        ${room.price}
                      </span>
                      <span className="text-white/95 text-[10px] lg:text-xs font-medium mt-0.5">/Night</span>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border-2 border-white/90 flex items-center justify-center mx-auto mb-2 backdrop-blur-sm bg-white/10">
                      <ArrowUpRight className="w-6 h-6 lg:w-7 lg:h-7" />
                    </div>
                    <span className="text-sm lg:text-base font-medium tracking-wide">View Details</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 lg:p-6">
                <h3 className="font-display text-lg lg:text-xl text-[--color-text-dark] mb-4 leading-tight group-hover:text-[--color-gold-accent] transition-colors duration-300 min-h-[3rem]">
                  {room.title}
                </h3>

                {/* Features with Dark Background */}
                <div className="bg-[--color-secondary-dark] rounded-lg px-4 py-3.5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 flex-1 justify-center">
                    <Maximize2 className="w-4 h-4 text-[--color-gold-accent] flex-shrink-0" />
                    <span className="text-white text-xs font-medium whitespace-nowrap">{room.sqft} sq ft</span>
                  </div>
                  <div className="w-px h-5 bg-white/20 flex-shrink-0" />
                  <div className="flex items-center gap-2 flex-1 justify-center">
                    <Bed className="w-4 h-4 text-[--color-gold-accent] flex-shrink-0" />
                    <span className="text-white text-xs font-medium whitespace-nowrap">{room.beds} Beds</span>
                  </div>
                  <div className="w-px h-5 bg-white/20 flex-shrink-0" />
                  <div className="flex items-center gap-2 flex-1 justify-center">
                    <Users className="w-4 h-4 text-[--color-gold-accent] flex-shrink-0" />
                    <span className="text-white text-xs font-medium whitespace-nowrap">{room.sleeps} Sleeps</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}