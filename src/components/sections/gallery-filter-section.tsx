"use client";

import { useState } from "react";

const categories = [
  "All Images",
  "Suites & Rooms",
  "Dining",
  "Spa & Wellness",
  "Facilities",
  "Exterior"
];

export default function GalleryFilterSection() {
  const [activeFilter, setActiveFilter] = useState("All Images");

  return (
    <section className="py-12 bg-[#F5F1EA]">
      <div className="container">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 text-sm font-medium uppercase tracking-wider ${
                activeFilter === category
                  ? "bg-[#D4A574] text-white shadow-lg"
                  : "bg-white text-[#0F1A24] hover:bg-[#D4A574] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
