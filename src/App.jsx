import React from 'react';
import Background from './components/Background'; // ✅ Add this import
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import TechStack from './components/TechStack';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="antialiased selection:bg-brand-primary selection:text-white relative">
      {/* ✅ Animated Background */}
      <Background />

      {/* Content Wrapper - above background */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Industries />
          <Process />
          <Portfolio />
          <TechStack />
          <WhyUs />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;