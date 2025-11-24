"use client";

import Link from "next/link";

const ArrowIcon = () =>
<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 17L17.5 7" stroke="#0F1419" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M8.5 7H17.5V16" stroke="#0F1419" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>;


const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden !text-slate-50">
            <div className="absolute inset-0 z-[-2]">
                <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/6784f8a1cbbb1f7bbe6ce52a_2F6786272a8ed4c6db179f84-17.jpg">

                    <source src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a%2F6786272a8ed4c6db179f842b_Header-transcode.mp4" type="video/mp4" />
                    <source src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a%2F6786272a8ed4c6db179f842b_Header-transcode.webm" type="video/webm" />
                </video>
            </div>
            <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.6)]"></div>

            <div className="relative z-10 container h-full">
                <div className="flex flex-col justify-center items-center h-full text-white text-center">
                    <h1 className="font-display text-5xl md:text-[70px] leading-none font-medium tracking-[-0.02em] mb-10 md:!text-white !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">
                          Luxury Living Redefined
          </h1>
                    <Link
            href="/about-us"
            className="bg-primary text-[#0F1419] px-10 py-4 rounded-lg flex items-center gap-2 font-body font-medium transition-transform duration-300 ease-in-out hover:scale-105">

                        <span className="!whitespace-pre-line">Book Now</span>
                        <div className="w-6 h-6">
                            <ArrowIcon />
                        </div>
                    </Link>
                </div>
            </div>
        </section>);

};

export default HeroSection;
