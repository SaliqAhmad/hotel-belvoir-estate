"use client";

export default function ContactMapSection() {
  return (
    <section className="py-20 bg-[#0F1A24]">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-sm text-[#D4A574] mb-4 tracking-[0.2em] uppercase">
            (VISIT US)
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-white mb-4">
            Find Us Here
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Located in the heart of Beverly Hills, our luxury hotel awaits your arrival.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px] bg-[#1A2834]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.5742587084896!2d-118.40157668478394!3d34.06976098060647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bbe05e47c58d%3A0x25b7f5b0c2b9e4ab!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale"
          />
        </div>
      </div>
    </section>
  );
}
