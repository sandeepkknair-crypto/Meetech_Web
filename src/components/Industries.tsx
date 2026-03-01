import { GraduationCap, Heart, Home, Factory as FactoryIcon, Store } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const industries = [
  {
    icon: GraduationCap,
    label: 'Education',
  },
  {
    icon: Heart,
    label: 'Healthcare',
  },
  {
    icon: Home,
    label: 'Residential Smart Safety',
  },
  {
    icon: FactoryIcon,
    label: 'Industrial Automation',
  },
  {
    icon: Store,
    label: 'Retail & Smart Infrastructure',
  },
];

export default function Industries() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="industries" className="section-padding bg-pure-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Industries We Serve
          </h2>
          <p className="text-xl text-soft-grey max-w-2xl mx-auto">
            Delivering intelligent solutions across diverse sectors
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className={`glass-effect p-8 rounded-lg hover:bg-white/10 hover:scale-105 transition-all duration-300 group flex flex-col items-center justify-center text-center ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                }}
              >
                <Icon
                  size={48}
                  className="text-off-white group-hover:text-white transition-colors mb-4"
                />
                <h3 className="font-semibold text-lg">{industry.label}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
