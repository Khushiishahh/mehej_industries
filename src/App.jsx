import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Catalogue from './pages/Catalogue';
import AboutPage from './pages/AboutPage';
import QualityPage from './pages/QualityPage';
import IndustriesPage from './pages/IndustriesPage';
import WasherDetail from './pages/WasherDetail';
import ResourcesPage from './pages/ResourcesPage';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 rounded-full p-3 text-white transition"
          style={{ backgroundColor: '#060E1A', boxShadow: '0 4px 20px rgba(6,14,26,0.35)' }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#0F2847'; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#060E1A'; }}
          aria-label="Scroll to top"
        >
          <FiArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/washers/:slug" element={<WasherDetail />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/quality" element={<QualityPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
