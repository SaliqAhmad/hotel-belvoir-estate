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
    <section className="py-16 bg-[--color-light-cream]">
      <div className="container">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-[--color-gold-accent] text-white"
                  : "bg-white text-[--color-text-dark] hover:bg-[--color-gold-accent] hover:text-white border border-[--color-border]"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
