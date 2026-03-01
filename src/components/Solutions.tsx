import { Building2, Users, Briefcase, Factory } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const solutions = [
  {
    icon: Building2,
    title: 'Hospital Management Systems',
    description: 'Comprehensive digital solutions for patient care, operations, and analytics.',
  },
  {
    icon: Users,
    title: 'HRMS & Payroll Systems',
    description: 'Intelligent human resource management with automated payroll processing.',
  },
  {
    icon: Briefcase,
    title: 'AI-Integrated Business Platforms',
    description: 'Smart business tools powered by machine learning and predictive analytics.',
  },
  {
    icon: Factory,
    title: 'Enterprise Automation',
    description: 'Full-scale workflow automation for manufacturing and operations excellence.',
  },
];

export default function Solutions() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="solutions" className="section-padding bg-pure-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Custom Software Solutions
          </h2>
          <p className="text-xl text-soft-grey max-w-2xl mx-auto">
            Tailored platforms designed to meet your unique business requirements
          </p>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-8"
        >
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className={`glass-effect p-8 rounded-lg hover:bg-white/10 hover:shadow-[0_0_40px_rgba(245,245,245,0.2)] transition-all duration-300 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
                }}
              >
                <div className="flex items-start gap-6">
                  <div className="glass-effect p-4 rounded-lg group-hover:bg-white/10 transition-all">
                    <Icon
                      size={40}
                      className="text-off-white group-hover:text-white transition-colors"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3">{solution.title}</h3>
                    <p className="text-soft-grey">{solution.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
