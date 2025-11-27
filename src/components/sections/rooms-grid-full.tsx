"use client";

import { ArrowRight, Maximize2, Bed, Users, Star } from "lucide-react";
import Link from "next/link";

const rooms = [
  {
    id: 1,
    title: "Royal Sapphire Suite",
    price: 300,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/678743d2572cb060faff37a1_Rooms_20Thumbnail-4.jpg",
    sqft: 450,
    beds: 2,
    sleeps: 4,
    rating: 5.0,
    category: "Luxury Room"
  },
  {
    id: 2,
    title: "Imperial Gold Suite",
    price: 350,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/6787439cc6f7d1f53641ff07_Rooms_20Thumbnail_20_7_-5.jpg",
    sqft: 500,
    beds: 2,
    sleeps: 4,
    rating: 5.0,
    category: "Heritage Suite"
  },
  {
    id: 3,
    title: "Diamond Elegance Suite",
    price: 400,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/6787436b0e15d3bc251dc11b_Rooms_20Thumbnail_20_6_-6.jpg",
    sqft: 550,
    beds: 3,
    sleeps: 6,
    rating: 5.0,
    category: "Celestial Suite"
  },
  {
    id: 4,
    title: "Platinum Heritage Suite",
    price: 450,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/67874337a963d7af733ee9a8_Rooms_20Thumbnail_20_5_-7.jpg",
    sqft: 600,
    beds: 3,
    sleeps: 6,
    rating: 5.0,
    category: "Heritage Suite"
  },
  {
    id: 5,
    title: "Emerald Celestial Suite",
    price: 380,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/678743d2572cb060faff37a1_Rooms_20Thumbnail-4.jpg",
    sqft: 480,
    beds: 2,
    sleeps: 4,
    rating: 5.0,
    category: "Celestial Suite"
  },
  {
    id: 6,
    title: "Ruby Presidential Suite",
    price: 500,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/6787439cc6f7d1f53641ff07_Rooms_20Thumbnail_20_7_-5.jpg",
    sqft: 700,
    beds: 4,
    sleeps: 8,
    rating: 5.0,
    category: "Duplex House"
  },
  {
    id: 7,
    title: "Pearl Luxury Room",
    price: 280,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/6787436b0e15d3bc251dc11b_Rooms_20Thumbnail_20_6_-6.jpg",
    sqft: 400,
    beds: 2,
    sleeps: 3,
    rating: 5.0,
    category: "Luxury Room"
  },
  {
    id: 8,
    title: "Topaz Duplex House",
    price: 550,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/67874337a963d7af733ee9a8_Rooms_20Thumbnail_20_5_-7.jpg",
    sqft: 800,
    beds: 4,
    sleeps: 8,
    rating: 5.0,
    category: "Duplex House"
  },
];

export default function RoomsGridFull() {
  return (
    <section className="py-24 bg-[--color-light-cream] relative">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-[--color-gold-accent]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-[--color-gold-accent]/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 flex flex-col border border-[--color-border]/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Category Badge */}
                <div className="absolute top-5 left-5 bg-gradient-to-r from-[--color-gold-accent] to-[--color-gold-hover] text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider shadow-xl backdrop-blur-sm">
                  {room.category}
                </div>
                
                {/* Rating Badge */}
                <div className="absolute top-5 right-5 bg-white/98 backdrop-blur-md text-[--color-text-dark] px-3.5 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-xl border border-[--color-gold-accent]/20">
                  <Star className="w-4 h-4 fill-[--color-gold-accent] text-[--color-gold-accent]" />
                  <span>{room.rating}</span>
                </div>

                {/* View Details Button - Shows on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Link 
                    href={`/rooms/${room.id}`}
                    className="bg-white text-[--color-text-dark] px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:bg-[--color-gold-accent] hover:text-white transition-all duration-300 shadow-2xl transform translate-y-6 group-hover:translate-y-0 border-2 border-white hover:border-[--color-gold-accent]"
                  >
                    View Details
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col bg-gradient-to-b from-white to-[--color-light-cream]/30">
                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-display font-bold text-[--color-gold-accent] tracking-tight">
                      ${room.price}
                    </span>
                    <span className="text-sm text-[--color-text-muted] font-semibold uppercase tracking-wider">/ Night</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl lg:text-2xl text-[--color-text-dark] mb-5 leading-snug group-hover:text-[--color-gold-accent] transition-colors duration-300 flex-1 min-h-[3.5rem]">
                  {room.title}
                </h3>

                {/* Divider */}
                <div className="h-[2px] bg-gradient-to-r from-transparent via-[--color-gold-accent]/30 to-transparent mb-5" />

                {/* Features */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-[--color-light-cream] flex items-center justify-center mb-2.5 group-hover:bg-[--color-gold-accent] group-hover:scale-110 transition-all duration-500 shadow-sm">
                      <Maximize2 className="w-5 h-5 text-[--color-gold-accent] group-hover:text-white transition-colors duration-500" />
                    </div>
                    <span className="text-xs font-semibold text-[--color-text-dark] leading-tight">{room.sqft} sq ft</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-[--color-light-cream] flex items-center justify-center mb-2.5 group-hover:bg-[--color-gold-accent] group-hover:scale-110 transition-all duration-500 shadow-sm">
                      <Bed className="w-5 h-5 text-[--color-gold-accent] group-hover:text-white transition-colors duration-500" />
                    </div>
                    <span className="text-xs font-semibold text-[--color-text-dark] leading-tight">{room.beds} Beds</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-[--color-light-cream] flex items-center justify-center mb-2.5 group-hover:bg-[--color-gold-accent] group-hover:scale-110 transition-all duration-500 shadow-sm">
                      <Users className="w-5 h-5 text-[--color-gold-accent] group-hover:text-white transition-colors duration-500" />
                    </div>
                    <span className="text-xs font-semibold text-[--color-text-dark] leading-tight">{room.sleeps} Guests</span>
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