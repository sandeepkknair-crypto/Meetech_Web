import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Robotics from './components/Robotics';
import Solutions from './components/Solutions';
import Vision from './components/Vision';
import WhyChoose from './components/WhyChoose';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-pure-black text-off-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Robotics />
      <Solutions />
      <Vision />
      <WhyChoose />
      <Industries />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
