import { Brain, Code, Cpu, Bot, Zap, Radio } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Brain,
    title: 'AI & STEAM Education Labs',
    description: 'Interactive learning environments powered by AI and robotics for next-gen education.',
  },
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Tailored enterprise applications built with cutting-edge technologies and frameworks.',
  },
  {
    icon: Cpu,
    title: 'AI-Powered Applications',
    description: 'Intelligent systems leveraging machine learning and neural networks for automation.',
  },
  {
    icon: Bot,
    title: 'Robotics & Intelligent Hardware',
    description: 'Advanced robotic solutions integrated with AI for industrial and educational use.',
  },
  {
    icon: Zap,
    title: 'Automation & Smart Systems',
    description: 'End-to-end automation platforms that optimize workflows and increase efficiency.',
  },
  {
    icon: Radio,
    title: 'IoT & Smart Infrastructure',
    description: 'Connected devices and sensor networks for intelligent monitoring and control.',
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="section-padding bg-pure-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Core Services
          </h2>
          <p className="text-xl text-soft-grey max-w-2xl mx-auto">
            Comprehensive technology solutions designed for the modern world
          </p>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`glass-effect p-8 rounded-lg hover:bg-white/10 hover:scale-105 transition-all duration-300 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                }}
              >
                <div className="mb-4">
                  <Icon
                    size={48}
                    className="text-off-white group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-soft-grey">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
