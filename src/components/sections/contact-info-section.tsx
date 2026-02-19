"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 80821 11549", "+91 60062 48474"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@belviorestate.com", "reservations@belviorestate.com"],
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Opposite Dal Lake", "Srinagar, Kashmir 190001"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["24/7 Front Desk", "Always at your service"],
  },
];


export default function ContactInfoSection() {
  return (
    <section className="py-20 bg-[#0F1A24]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-[#1A2834] hover:bg-[#1F2F3F] transition-colors duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white flex items-center justify-center">
                  <Icon className="w-8 h-8 text-[#D4A574]" />
                </div>
                <h3 className="text-xl font-display text-white mb-4">
                  {item.title}
                </h3>
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-white/70">
                    {detail}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}