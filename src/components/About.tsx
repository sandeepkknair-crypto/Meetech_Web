import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-dark-grey">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
              Who We Are
            </h2>
            <p className="text-lg text-soft-grey leading-relaxed mb-6">
              MeeTech Education & Consulting Services is a forward-thinking technology company
              specializing in AI-driven solutions, intelligent automation, and cutting-edge software development.
            </p>
            <p className="text-lg text-soft-grey leading-relaxed">
              We engineer the future by combining artificial intelligence, robotics, and smart systems
              to deliver transformative solutions for education, healthcare, industry, and beyond.
            </p>
          </div>

          <div className="space-y-6">
            <div className="glass-effect p-6 rounded-lg hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-2">Innovation First</h3>
              <p className="text-soft-grey">
                Pioneering AI and automation technologies that shape tomorrow's intelligent ecosystems.
              </p>
            </div>

            <div className="glass-effect p-6 rounded-lg hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-2">Future-Ready</h3>
              <p className="text-soft-grey">
                Building scalable, intelligent infrastructure designed for long-term growth and adaptation.
              </p>
            </div>

            <div className="glass-effect p-6 rounded-lg hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-2">End-to-End Solutions</h3>
              <p className="text-soft-grey">
                From concept to deployment, we deliver comprehensive technology solutions with ongoing support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
