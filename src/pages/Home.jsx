import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Products from '../components/Products';
import Industries from '../components/Industries';
import WhyChooseUs from '../components/WhyChooseUs';
import CTA from '../components/CTA';
import Contact from '../components/Contact';

const Home = () => {
  const { pathname, hash } = useLocation();

  /** Scroll to hash after route load (fixes mobile anchor nav + SPA navigation lag). */
  useEffect(() => {
    if (pathname !== '/' || !hash) return;
    const id = hash.replace(/^#/, '').trim();
    if (!id) return;
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 520);
    return () => window.clearTimeout(t);
  }, [pathname, hash]);

  return (
    <>
      <Hero />
      <About />
      <Products />
      <Industries />
      <WhyChooseUs />
      <Stats />
      <CTA />
      <Contact />
    </>
  );
};

export default Home;
