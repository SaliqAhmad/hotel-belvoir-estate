"use client";

import Image from 'next/image';
import { ZoomIn } from 'lucide-react';
import { useState } from 'react';

const galleryImages = [
  {
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/67877f7e9926209543a8de57_Gallery_20Thumbnail_20_1_-12.jpg',
    alt: 'Tall view of a modern hotel suite with large windows',
    className: 'lg:row-span-2',
    width: 618,
    height: 940,
    category: 'Suites',
    title: 'Signature Suite'
  },
  {
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/67877f7ef6fba6015d1abe73_Gallery_20Thumbnail-13.jpg',
    alt: 'Wide view of a hotel lobby with chic furniture',
    className: 'lg:col-span-2',
    width: 618,
    height: 454,
    category: 'Lobby',
    title: 'Grand Entrance'
  },
  {
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/67877f7d07595fa2a0a4e793_Gallery_20Thumbnail_20_2_-11.jpg',
    alt: 'Cozy corner of a luxury hotel room interior detail',
    className: 'h-[250px] md:h-auto',
    width: 618,
    height: 454,
    category: 'Interiors',
    title: 'Elegant Details'
  },
  {
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/67877f7e1f62f865dea0329d_Gallery_20Thumbnail_20_3_-10.jpg',
    alt: 'Spacious and well-lit hotel amenity area',
    className: 'h-[250px] md:h-auto',
    width: 618,
    height: 454,
    category: 'Amenities',
    title: 'Wellness Center'
  },
  {
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/6787439cc6f7d1f53641ff07_Rooms_20Thumbnail_20_7_-5.jpg',
    alt: 'Luxurious hotel bedroom with panoramic city views',
    className: 'lg:col-span-2 h-[250px] md:h-auto',
    width: 618,
    height: 454,
    category: 'Views',
    title: 'City View Suite'
  },
];

const GalleryGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#0F1A24] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#D4A574]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#D4A574]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container py-20 lg:py-[120px] relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block relative mb-6">
            <p className="text-[#D4A574] text-sm font-medium uppercase tracking-[0.2em] relative z-10">
              (GALLERY)
            </p>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-gradient-to-r from-transparent via-[#D4A574] to-transparent" />
          </div>
          <h2 className="font-display text-4xl text-white md:text-[56px] md:leading-[1.1] mb-6 max-w-3xl mx-auto">
            Explore Your Dream Hotel
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Immerse yourself in our world of refined elegance and timeless beauty
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl ${image.className}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ maxHeight: index === 0 ? '500px' : '250px' }}
            >
              {/* Image Container */}
              <a
                href={image.src}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full relative"
                aria-label={`View image: ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-full object-cover transition-all duration-300 ease-out group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <div className="flex items-end justify-between">
                    <div className="flex-1">
                      <h3 className="font-display text-white text-xl md:text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;