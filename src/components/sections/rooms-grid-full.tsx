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
    <section className="py-20 bg-[--color-light-cream]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <div className="relative">
                    <img
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/678748f9262cf9b29131097f_Price_20BG-24.png"
                      alt=""
                      className="w-24 h-24"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-white text-xl font-display font-semibold">
                        ${room.price}
                      </span>
                      <span className="text-white/90 text-xs">/Night</span>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-2">
                      <ArrowUpRight className="w-8 h-8" />
                    </div>
                    <span className="text-lg font-medium">View Details</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl text-[--color-text-dark] mb-4 group-hover:text-[--color-gold-accent] transition-colors">
                  {room.title}
                </h3>

                {/* Features */}
                <div className="flex items-center justify-between text-sm text-[--color-text-muted]">
                  <div className="flex items-center gap-2">
                    <Maximize2 className="w-4 h-4" />
                    <span>{room.sqft} sq ft</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed className="w-4 h-4" />
                    <span>{room.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{room.sleeps} Sleeps</span>
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
