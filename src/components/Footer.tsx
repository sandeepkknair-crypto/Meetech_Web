import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-pure-black border-t border-off-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 glow-text">MeeTech</h3>
            <p className="text-soft-grey text-sm">
              Engineering Intelligence. Building the Future.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('#about')}
                  className="text-soft-grey hover:text-off-white transition-colors text-sm"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#services')}
                  className="text-soft-grey hover:text-off-white transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#solutions')}
                  className="text-soft-grey hover:text-off-white transition-colors text-sm"
                >
                  Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#industries')}
                  className="text-soft-grey hover:text-off-white transition-colors text-sm"
                >
                  Industries
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-soft-grey">
              <li>AI Education</li>
              <li>Software Development</li>
              <li>Robotics</li>
              <li>Automation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="glass-effect p-3 rounded-lg hover:bg-white/10 transition-all"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="glass-effect p-3 rounded-lg hover:bg-white/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="glass-effect p-3 rounded-lg hover:bg-white/10 transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-off-white/10 text-center">
          <p className="text-soft-grey text-sm">
            &copy; {currentYear} MeeTech Education & Consulting Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
