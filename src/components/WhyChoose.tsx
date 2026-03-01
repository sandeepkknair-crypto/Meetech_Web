import { Network, Handshake, Blocks, TrendingUp, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const reasons = [
  {
    icon: Network,
    title: 'End-to-End AI Integration',
    description: 'Seamless AI implementation across all layers of your technology stack.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnership',
    description: 'We build lasting relationships with continuous support and evolution.',
  },
  {
    icon: Blocks,
    title: 'Hardware + Software Expertise',
    description: 'Unified solutions combining physical robotics with intelligent software.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Infrastructure',
    description: 'Systems designed to grow with your business needs and demands.',
  },
  {
    icon: Sparkles,
    title: 'Future-Ready Innovation',
    description: 'Cutting-edge technologies that keep you ahead of the curve.',
  },
];

export default function WhyChoose() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-dark-grey">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Why Choose MeeTech
          </h2>
          <p className="text-xl text-soft-grey max-w-2xl mx-auto">
            Partner with a technology leader committed to your success
          </p>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className={`text-center group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                }}
              >
                <div className="glass-effect p-6 rounded-lg hover:bg-white/10 transition-all duration-300 h-full flex flex-col items-center">
                  <div className="mb-4 p-4 glass-effect rounded-full group-hover:bg-white/10 transition-all">
                    <Icon
                      size={36}
                      className="text-off-white group-hover:text-white transition-colors"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                  <p className="text-sm text-soft-grey">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
