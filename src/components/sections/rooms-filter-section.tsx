"use client";

import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

const categories = [
  { id: "all", label: "All Rooms" },
  { id: "luxury", label: "Luxury Room" },
  { id: "heritage", label: "Heritage Suite" },
  { id: "celestial", label: "Celestial Suite" },
  { id: "duplex", label: "Duplex House" },
];

export default function RoomsFilterSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section className="py-24 bg-gradient-to-b from-white via-[--color-light-cream]/30 to-[--color-light-cream] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[--color-gold-accent]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[--color-gold-accent]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[--color-gold-accent]" />
              <p className="text-xs text-[--color-gold-accent] uppercase tracking-[0.3em] font-semibold">
                Find Your Sanctuary
              </p>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[--color-gold-accent]" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-[--color-text-dark] mb-6 leading-tight">
              Discover Your Perfect Stay
            </h2>
            <p className="text-lg text-[--color-text-muted] max-w-2xl mx-auto leading-relaxed">
              Explore our curated collection of luxury accommodations, each designed to provide an unforgettable experience
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-8 py-4 rounded-full font-medium transition-all duration-500 text-sm uppercase tracking-[0.15em] overflow-hidden group ${
                  activeCategory === category.id
                    ? "bg-[--color-gold-accent] text-white shadow-xl shadow-[--color-gold-accent]/30"
                    : "bg-white text-[--color-text-dark] hover:text-[--color-gold-accent] border-2 border-[--color-border] hover:border-[--color-gold-accent] shadow-md hover:shadow-xl"
                }`}
              >
                <span className="relative z-10">{category.label}</span>
                {activeCategory !== category.id && (
                  <div className="absolute inset-0 bg-[--color-gold-accent]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}
              </button>
            ))}
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[--color-text-muted]" />
              <input
                type="text"
                placeholder="Search rooms by name..."
                className="w-full pl-12 pr-4 py-3.5 border border-[--color-border] rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-gold-accent] focus:border-transparent bg-[--color-light-cream] text-[--color-text-dark] placeholder:text-[--color-text-muted]"
              />
            </div>
            <button className="sm:w-auto px-6 py-3.5 bg-[--color-secondary-dark] text-white rounded-lg hover:bg-[--color-gold-accent] transition-all duration-300 flex items-center justify-center gap-2 font-medium shadow-md hover:shadow-lg">
              <SlidersHorizontal className="w-5 h-5" />
              Advanced Filter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}