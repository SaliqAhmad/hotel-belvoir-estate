const stats = [
  {
    number: '150+',
    label: 'Luxury Suites'
  },
  {
    number: '25+',
    label: 'Years of Excellence'
  },
  {
    number: '50K+',
    label: 'Happy Guests'
  },
  {
    number: '15+',
    label: 'Awards Won'
  }
];

const AboutStatsSection = () => {
  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
        <div className="text-center mb-16">
          <p className="font-body text-sm font-medium uppercase tracking-[0.1em] text-[#D4AF37] mb-6">
            (OUR ACHIEVEMENTS)
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1A1A1A] leading-[1.2]">
            Numbers That Speak for Themselves
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-5xl md:text-6xl font-bold text-[#D4AF37] mb-4">
                {stat.number}
              </div>
              <div className="font-body text-lg text-[#4A4A4A] uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStatsSection;
