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
    <section className="py-20 bg-[--color-light-cream]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-[--color-gold-accent] text-white px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider shadow-lg">
                  {room.category}
                </div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-[--color-text-dark] px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                  <Star className="w-3.5 h-3.5 fill-[--color-gold-accent] text-[--color-gold-accent]" />
                  {room.rating}
                </div>

                {/* View Details Button - Shows on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link 
                    href={`/rooms/${room.id}`}
                    className="bg-[--color-gold-accent] text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-[--color-gold-hover] transition-colors shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                {/* Price */}
                <div className="mb-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-display font-semibold text-[--color-gold-accent]">
                      ${room.price}
                    </span>
                    <span className="text-sm text-[--color-text-muted] font-medium">/ Night</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl text-[--color-text-dark] mb-4 leading-tight group-hover:text-[--color-gold-accent] transition-colors duration-300 flex-1">
                  {room.title}
                </h3>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-[--color-border] to-transparent mb-4" />

                {/* Features */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-[--color-light-cream] flex items-center justify-center mb-2 group-hover:bg-[--color-gold-accent] transition-colors duration-300">
                      <Maximize2 className="w-4 h-4 text-[--color-text-dark] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-xs font-medium text-[--color-text-dark]">{room.sqft} sq ft</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-[--color-light-cream] flex items-center justify-center mb-2 group-hover:bg-[--color-gold-accent] transition-colors duration-300">
                      <Bed className="w-4 h-4 text-[--color-text-dark] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-xs font-medium text-[--color-text-dark]">{room.beds} Beds</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-[--color-light-cream] flex items-center justify-center mb-2 group-hover:bg-[--color-gold-accent] transition-colors duration-300">
                      <Users className="w-4 h-4 text-[--color-text-dark] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-xs font-medium text-[--color-text-dark]">{room.sleeps} Guests</span>
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