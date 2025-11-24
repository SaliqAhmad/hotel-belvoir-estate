import { Sparkles, Heart, Award, Shield } from 'lucide-react';

const values = [
  {
    icon: Sparkles,
    title: 'Excellence',
    description: 'We pursue perfection in every detail, ensuring each guest experience exceeds expectations through meticulous attention and refined service.'
  },
  {
    icon: Heart,
    title: 'Hospitality',
    description: 'Our genuine warmth and personalized care create meaningful connections, making every guest feel valued and at home.'
  },
  {
    icon: Award,
    title: 'Luxury',
    description: 'From premium amenities to exquisite design, we deliver uncompromising quality that defines true luxury living.'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We uphold the highest standards of honesty and transparency, building lasting trust with our guests and partners.'
  }
];

const AboutValuesSection = () => {
  return (
    <section className="bg-[#0F1926] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
        <div className="text-center mb-16">
          <p className="font-body text-sm font-medium uppercase tracking-[0.1em] text-[#D4AF37] mb-6">
            (OUR VALUES)
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white leading-[1.2]">
            The Pillars of Our Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-[#1A2834] rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-[#D4A574]" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-white mb-4">
                  {value.title}
                </h3>
                <p className="font-body text-base text-[#B8B8B8] leading-[1.6]">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutValuesSection;