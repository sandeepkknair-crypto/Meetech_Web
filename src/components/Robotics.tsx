import { CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  'Advanced Robot Development & Prototyping',
  'AI-Based Process Automation',
  'Sensor-Based Monitoring Systems',
  'Intelligent Safety & Security Solutions',
];

export default function Robotics() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-dark-grey">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
              Robotics & Innovation
            </h2>
            <p className="text-lg text-soft-grey leading-relaxed mb-8">
              We design and build intelligent robotic systems that integrate seamlessly with AI,
              sensors, and automation platforms to deliver unprecedented efficiency and safety.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle
                    className="text-off-white mt-1 flex-shrink-0 group-hover:text-white transition-colors"
                    size={24}
                  />
                  <span className="text-lg text-soft-grey group-hover:text-off-white transition-colors">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-effect p-12 rounded-2xl">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-off-white/10 to-transparent rounded-lg animate-neural-pulse"></div>
                <div className="relative aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4 animate-float">🤖</div>
                    <p className="text-soft-grey">Futuristic Robotics Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
