"use client";

import * as React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  quote: string;
  avatar: string;
  name: string;
  title: string;
  rating: number;
  companyLogo?: string;
}

const testimonialsData: Testimonial[] = [
  {
    quote:
      "An unforgettable experience! The serene surroundings, spacious rooms with stunning mountain views, and warm hospitality made our stay exceptional. The proximity to Dal Lake was perfect for exploring Srinagar's attractions.",
    avatar:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/icons/678776f32148c912569d0246_Testimonial_20Avatar_20_1-2.png",
    name: "Nina K.",
    title: "New Delhi",
    rating: 5,
  },
  {
    quote:
      "Everything we hoped for and more! Elegant interiors, gorgeous landscape views, and personalized service made it magical. The staff's boat ride recommendation on Dal Lake was the highlight of our trip.",
    avatar:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/icons/678776f329d6bd96a88a3a67_Testimonial_20Avatar_20_2-4.png",
    name: "Sandeep R.",
    title: "Mumbai",
    rating: 5,
  },
  {
    quote:
      "An amazing family getaway! The spacious suite was perfect, the kids loved the scenic views, and the cozy rooms let us relax. The delicious Kashmiri cuisine and family-like treatment made us feel right at home.",
    avatar:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/icons/678776f32c5c35b739aceec9_Testimonial_20Avatar_20_3-3.png",
    name: "Riya & Prakash D.",
    title: "Bangalore",
    rating: 5,
  },
  {
    quote:
      "Perfect for business travel! Ideally located near the airport yet peaceful. The tranquil atmosphere helped me focus on work while modern amenities ensured comfort. Impeccable service throughout my stay.",
    avatar:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/icons/67877829cf380b4c3b4b8065_Testimonial_20Avatar_20_4-5.png",
    name: "Rajiv S.",
    title: "Hyderabad",
    rating: 5,
  },
  {
    quote:
      "The highlight of our Kashmir anniversary trip! Quiet elegance, beautifully appointed rooms, and exquisite Kashmiri cuisine. Peaceful walks by Dal Lake and attentive staff made every moment special. Can't wait to return!",
    avatar:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/icons/678776f32148c912569d0246_Testimonial_20Avatar_20_1-2.png",
    name: "Simran and Ayaan P.",
    title: "Chandigarh",
    rating: 5,
  },
];

const TestimonialsCarousel = () => {
  return (
    <section className="bg-background py-[120px] lg:py-[120px] md:py-[90px] sm:py-[80px] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full relative z-10"
      >
        <div className="container">
          <div className="flex justify-between items-center mb-[60px]">
            <div className="w-full">
              <p className="text-sm text-primary uppercase tracking-[0.1em] font-medium text-center mb-5">
                (TESTIMONIALS)
              </p>
              <h2 className="font-display text-[48px] md:text-[56px] leading-tight text-center text-[#1A1A1A] max-w-2xl mx-auto mb-4">
                What Our Guests Say
              </h2>
              <p className="text-center text-muted text-lg max-w-xl mx-auto">
                Discover why travelers from around the world choose Hotel Belvoir Estate for their Kashmir experience
              </p>
            </div>
            <div className="hidden md:flex items-center gap-4 absolute right-20 lg:right-40 top-0">
              <CarouselPrevious className="static -translate-x-0 -translate-y-0 w-[50px] h-[50px] bg-transparent border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110" />
              <CarouselNext className="static -translate-x-0 -translate-y-0 w-[50px] h-[50px] bg-transparent border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110" />
            </div>
          </div>

          <CarouselContent className="-ml-8">
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-8 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="relative bg-gradient-to-br from-[#0F1926] to-[#1A2834] rounded-[24px] p-8 md:p-10 flex flex-col gap-5 h-full border border-[rgba(212,165,116,0.15)] overflow-hidden group hover:border-[rgba(212,165,116,0.5)] transition-all duration-700 hover:shadow-[0_20px_60px_rgba(212,165,116,0.2)] hover:-translate-y-2">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-[40px] opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Decorative quote mark */}
                  <div className="absolute top-6 left-6 text-primary/10 font-display text-[100px] md:text-[120px] leading-none group-hover:text-primary/20 transition-colors duration-700 select-none">"</div>
                  
                  {/* Rating section with enhanced styling */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-3 bg-[rgba(212,165,116,0.1)] backdrop-blur-sm px-4 py-2.5 rounded-full border border-[rgba(212,165,116,0.25)]">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 transition-all duration-300 ${
                              i < testimonial.rating
                                ? "fill-primary text-primary"
                                : "fill-transparent text-primary/30"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-primary font-semibold text-sm">{testimonial.rating.toFixed(1)}</p>
                    </div>
                  </div>

                  {/* Quote text with better typography */}
                  <div className="relative z-10 flex-1">
                    <p className="text-[16px] md:text-[17px] text-white/90 leading-[1.8] font-light">
                      {testimonial.quote}
                    </p>
                  </div>

                  {/* Divider line */}
                  <div className="relative z-10 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent group-hover:via-primary/60 transition-all duration-700"></div>

                  {/* Author section with enhanced design */}
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:bg-primary/30 transition-all duration-700"></div>
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="relative rounded-full object-cover ring-2 ring-primary/30 group-hover:ring-primary/60 transition-all duration-700"
                      />
                    </div>
                    <div>
                      <p className="text-lg text-white font-semibold mb-0.5 group-hover:text-primary transition-colors duration-500">
                        {testimonial.name}
                      </p>
                      <p className="text-[#B8B8B8] text-sm font-light">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>

                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F1926]/50 to-transparent pointer-events-none"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex md:hidden items-center justify-center gap-4 mt-8">
            <CarouselPrevious className="static -translate-x-0 -translate-y-0 w-[50px] h-[50px] bg-transparent border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300" />
            <CarouselNext className="static -translate-x-0 -translate-y-0 w-[50px] h-[50px] bg-transparent border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300" />
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default TestimonialsCarousel;