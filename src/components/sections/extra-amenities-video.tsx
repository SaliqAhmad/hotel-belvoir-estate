"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const amenities = [
  "Personalized Concierge Services for Every Guest.",
  "Free Welcome Drinks and Snacks for Everyone.",
  "Access to exclusive spa discounts during your stay.",
  "Free parking for the duration of your stay.",
];

const ExtraAmenitiesVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section>
      <div className="flex flex-col lg:flex-row">
        <div className="relative lg:w-1/2 w-full min-h-[450px] lg:min-h-[730px]">
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/6784f8a1cbbb1f7bbe6ce52a_2F6787594731408fd1e78071-25.jpg"
          >
            <source src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a%2F6787594731408fd1e7807133_Middel-transcode.mp4" type="video/mp4" />
            <source src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a%2F6787594731408fd1e7807133_Middel-transcode.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-black/30"></div>
          <button
            onClick={handleTogglePlay}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-20 h-20 rounded-full flex items-center justify-center transition-transform hover:scale-110"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            <Image
              src={isPlaying 
                ? "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/icons/678772f414306e0856ac88ac_Pause_20Circle-1.png" 
                : "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/678772f37e80f9eb3f99acd4_play-circle-8.png"
              }
              alt={isPlaying ? "Pause Icon" : "Play Icon"}
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </button>
        </div>
        <div className="lg:w-1/2 w-full bg-secondary flex flex-col justify-center py-[60px] px-5 lg:py-[80px] lg:px-10 xl:py-[120px] xl:pl-[90px] xl:pr-[80px]">
          <p className="text-sm font-medium uppercase tracking-[0.1em] text-primary mb-4">
            (EXTRA FACILITIES)
          </p>
          <h2 className="font-display text-white text-[40px] leading-[1.3] mb-6">
            Luxury Amenities Awaiting Your Stay
          </h2>
          <p className="text-white/70 mb-10 text-base leading-[1.6]">
            These facilities are designed to that provide extra comfort, convenience, and exclusivity ensuring every moment of the visit is exceptional.
          </p>
          <div className="space-y-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-start gap-4">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/6787566ade2529a7506d6e6e_Tick_20Icon-26.svg"
                  alt="Tick Icon"
                  width={24}
                  height={24}
                  className="mt-1 flex-shrink-0"
                />
                <p className="text-lg text-white leading-[1.7]">
                  {amenity}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraAmenitiesVideo;