"use client";

import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/67877f7ef6fba6015d1abe73_Gallery_20Thumbnail-13.jpg",
    alt: "Luxury Suite",
    span: "col-span-1 row-span-2"
  },
  {
    id: 2,
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/67877f7e9926209543a8de57_Gallery_20Thumbnail_20_1_-12.jpg",
    alt: "Hotel Lobby",
    span: "col-span-1 row-span-1"
  },
  {
    id: 3,
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/67877f7d07595fa2a0a4e793_Gallery_20Thumbnail_20_2_-11.jpg",
    alt: "Dining Area",
    span: "col-span-1 row-span-1"
  },
  {
    id: 4,
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/67877f7e1f62f865dea0329d_Gallery_20Thumbnail_20_3_-10.jpg",
    alt: "Pool Area",
    span: "col-span-1 row-span-1"
  },
  {
    id: 5,
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/678743d2572cb060faff37a1_Rooms_20Thumbnail-4.jpg",
    alt: "Executive Suite",
    span: "col-span-1 row-span-2"
  },
  {
    id: 6,
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/6787439cc6f7d1f53641ff07_Rooms_20Thumbnail_20_7_-5.jpg",
    alt: "Deluxe Room",
    span: "col-span-1 row-span-1"
  },
  {
    id: 7,
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/678649573d6fcc1f3d7191f9_About_20Image-3.jpg",
    alt: "Outdoor Dining",
    span: "col-span-1 row-span-1"
  },
  {
    id: 8,
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/6787436b0e15d3bc251dc11b_Rooms_20Thumbnail_20_6_-6.jpg",
    alt: "Presidential Suite",
    span: "col-span-1 row-span-2"
  },
  {
    id: 9,
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/67874337a963d7af733ee9a8_Rooms_20Thumbnail_20_5_-7.jpg",
    alt: "Spa Suite",
    span: "col-span-1 row-span-1"
  },
  {
    id: 10,
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/6787887b634290ac292cf869_Blog_20Thumbnail_20Image_-14.jpg",
    alt: "Wellness Center",
    span: "col-span-1 row-span-1"
  },
  {
    id: 11,
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/6787885c6e66d5a79a6a10bf_Blog_20Thumbnail_20Image_-15.jpg",
    alt: "Hotel Exterior",
    span: "col-span-1 row-span-1"
  },
];

export default function GalleryGridFull() {
  return (
    <section className="py-20 bg-[#F5F1EA]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-display text-xl">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

