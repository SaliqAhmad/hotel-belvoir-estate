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
    <section className="py-16 bg-white border-b border-[--color-border]">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-sm text-[--color-gold-accent] mb-3 uppercase tracking-[0.25em] font-medium">
              (Find Your Stay)
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-[--color-text-dark] mb-4">
              Browse Our Collection
            </h2>
            <p className="text-base text-[--color-text-muted] max-w-2xl mx-auto">
              Filter by room type to find your ideal accommodation
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 text-sm uppercase tracking-wider ${
                  activeCategory === category.id
                    ? "bg-[--color-gold-accent] text-white shadow-lg scale-105"
                    : "bg-[--color-light-cream] text-[--color-text-dark] hover:bg-[--color-gold-accent] hover:text-white border border-transparent hover:border-[--color-gold-accent] shadow-sm hover:shadow-md hover:scale-105"
                }`}
              >
                {category.label}
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