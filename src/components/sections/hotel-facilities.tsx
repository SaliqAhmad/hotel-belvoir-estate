import { Hotel, Wifi, Waves, Sparkles, Car, HeadphonesIcon } from 'lucide-react';

const facilitiesData = [
  {
    icon: Hotel,
    title: 'Exclusive Suites',
    description: 'Spacious rooms are a hallmark of a luxury hotels, designed to provide guests with ample space to relax.',
  },
  {
    icon: Wifi,
    title: 'Free Wi-Fi',
    description: 'Spacious rooms are a hallmark of a luxury hotels, designed to provide guests with ample space to relax.',
  },
  {
    icon: Waves,
    title: 'Infinity Pools',
    description: 'Spacious rooms are a hallmark of a luxury hotels, designed to provide guests with ample space to relax.',
  },
  {
    icon: Sparkles,
    title: 'Spa & Wellness',
    description: 'Spacious rooms are a hallmark of a luxury hotels, designed to provide guests with ample space to relax.',
  },
  {
    icon: Car,
    title: 'Luxury Transport',
    description: 'Spacious rooms are a hallmark of a luxury hotels, designed to provide guests with ample space to relax.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Hotel Staff',
    description: 'Spacious rooms are a hallmark of a luxury hotels, designed to provide guests with ample space to relax.',
  },
];

const HotelFacilities = () => {
  return (
    <section className="bg-[#0F1A24] py-20 md:py-[120px]">
      <div className="container">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-[0.1em] text-primary mb-4">(HOTEL FACILITIES)</p>
          <h2 className="font-display text-4xl md:text-[48px] leading-[1.2] font-medium text-white mb-6">Our Belvoir Estate Facilities</h2>
          <p className="max-w-xl mx-auto text-[#B8B8B8] leading-[1.6]">
            This luxury hotel services as the perfect retreat for both leisure and business guests.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesData.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div 
                key={index} 
                className="bg-[#1A2834] rounded-2xl p-10 flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(212,165,116,0.2)]"
              >
                <Icon 
                  className="w-12 h-12 mb-6 text-[#D4A574]"
                  strokeWidth={1.5}
                />
                <h3 className="font-display text-2xl text-white mb-4">{facility.title}</h3>
                <p className="text-[#B8B8B8] text-base leading-[1.6]">
                  {facility.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HotelFacilities;
