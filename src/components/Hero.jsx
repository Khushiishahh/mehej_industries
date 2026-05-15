import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiChevronDown, FiShield, FiPackage, FiGlobe, FiTruck } from 'react-icons/fi';
import DarkMeshBackground from './DarkMeshBackground';
import { companyInfo } from '../data/siteData';

const badges = ['Washer Specialists', 'ASTM • DIN • BS • IS', 'Custom Sizes', '50+ Years'];

const trustBadges = [
  { icon: FiShield, label: 'ISO 9001:2015' },
  { icon: FiPackage, label: '500+ Products' },
  { icon: FiTruck, label: 'Pan-India Supply' },
  { icon: FiGlobe, label: 'Worldwide Delivery' },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{ backgroundColor: '#060E1A' }}
    >
      {/* Same mesh + navy as Knowledge Base (Resources) */}
      <DarkMeshBackground />

      {/* Top border accent line */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 z-[1] h-[3px]"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 45%, rgba(255,255,255,0.35) 55%, transparent 100%)' }}
      />

      {/* ── CONTENT ── */}
      <div className="container-main relative z-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Eyebrow label */}
          <motion.span
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="section-label !border-primary/35 !bg-primary/15 !text-primary"
          >
            India's Washer Specialists &bull; Since {companyInfo.founded}
          </motion.span>

          {/* Main headline — brand first (helps search snippets + "MEHEJ INDUSTRIES" queries) */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3 }}
            className="mt-3"
          >
            <span className="block text-lg font-extrabold tracking-wide text-primary sm:text-xl lg:text-2xl">
              {companyInfo.name}
            </span>
            <span className="mt-3 block text-5xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Washers &amp; Industrial Fasteners
            </span>
          </motion.h1>

          {/* Sub-description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-6 text-lg leading-8 text-slate-300"
          >
            <span className="font-semibold text-white">{companyInfo.name}</span>, India's trusted manufacturer
            and supplier of precision washers, screws, nuts, bolts and all industrial fasteners.
            Built to international standards, delivered Pan-India and worldwide.
          </motion.p>

          {/* Spec badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 flex flex-wrap justify-center gap-2.5"
          >
            {badges.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold text-slate-300"
                style={{ border: '1px solid rgba(30,58,95,0.9)', backgroundColor: 'rgba(17,34,64,0.80)' }}
              >
                <FiCheckCircle className="shrink-0 text-slate-400" size={12} />
                {item}
              </span>
            ))}
          </motion.div>

          {/* Make in India — official mark only */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-5 flex justify-center"
          >
            <img
              src="/make-in-india-logo.jpg"
              alt="Make in India"
              className="h-9 max-h-10 w-auto max-w-[min(128px,48vw)] object-contain opacity-95 sm:h-11 sm:max-h-14 sm:max-w-[min(164px,40vw)]"
            />
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <a
              href="#products"
              className="btn-primary bg-primary shadow-lg shadow-orange-500/25 hover:bg-primary-dark"
            >
              Explore Products <FiArrowRight />
            </a>
            <a href="#contact" className="btn-outline-white">
              Get a Quote
            </a>
          </motion.div>

          {/* Trust badges row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-4"
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={15} className="text-slate-500" />
                <span className="text-xs font-semibold text-slate-400">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ color: 'rgba(148,163,184,0.5)' }}
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <FiChevronDown size={18} />
      </motion.div>
    </section>
  );
};

export default Hero;
