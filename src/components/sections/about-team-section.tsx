import Image from 'next/image';

const team = [
  {
    name: 'Michael Anderson',
    role: 'General Manager',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/icons/678776f32148c912569d0246_Testimonial_20Avatar_20_1-2.png'
  },
  {
    name: 'Sarah Williams',
    role: 'Head of Guest Relations',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/icons/678776f329d6bd96a88a3a67_Testimonial_20Avatar_20_2-4.png'
  },
  {
    name: 'James Chen',
    role: 'Executive Chef',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/icons/678776f32c5c35b739aceec9_Testimonial_20Avatar_20_3-3.png'
  },
  {
    name: 'Emily Thompson',
    role: 'Spa & Wellness Director',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/icons/67877829cf380b4c3b4b8065_Testimonial_20Avatar_20_4-5.png'
  }
];

const AboutTeamSection = () => {
  return (
    <section className="bg-[#0F1926] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
        <div className="text-center mb-16">
          <p className="font-body text-sm font-medium uppercase tracking-[0.1em] text-[#D4AF37] mb-6">
            (OUR TEAM)
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white leading-[1.2] mb-6">
            Meet the People Behind the Magic
          </h2>
          <p className="font-body text-lg text-[#B8B8B8] max-w-3xl mx-auto leading-[1.7]">
            Our dedicated team of hospitality professionals is committed to making your stay extraordinary. With years of experience and passion for excellence, they ensure every moment of your visit is perfect.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-display text-2xl font-semibold text-white mb-2">
                {member.name}
              </h3>
              <p className="font-body text-base text-[#D4AF37]">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeamSection;
