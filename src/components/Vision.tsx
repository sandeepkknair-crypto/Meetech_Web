import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Vision() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-pure-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-off-white/20 rounded-full blur-3xl animate-neural-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-off-white/20 rounded-full blur-3xl animate-neural-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div
        ref={ref}
        className={`max-w-5xl mx-auto text-center relative z-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <span className="block mb-4 glow-text">
            We don't just build software.
          </span>
          <span className="block bg-gradient-to-r from-off-white via-white to-off-white bg-clip-text text-transparent animate-glow-pulse">
            We build intelligent ecosystems.
          </span>
        </h2>
      </div>
    </section>
  );
}
