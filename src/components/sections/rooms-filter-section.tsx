"use client";

import { useState } from "react";

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
    <section className="py-20 bg-[--color-light-cream]">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-[--color-gold-accent] mb-3 uppercase tracking-[0.2em] font-medium">
              (Filter by Category)
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-[--color-text-dark]">
              Find Your Perfect Room
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-3.5 rounded-md font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-[--color-gold-accent] text-white shadow-lg"
                    : "bg-white text-[--color-text-dark] hover:bg-[--color-gold-accent] hover:text-white border border-[--color-border] shadow-sm hover:shadow-md"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}