import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Services from './components/Services';
import About from './components/About';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <Process />
      <Technologies />
      <Services />
      <Testimonials />
      <Contact />
    </Layout>
  );
}

export default App;
