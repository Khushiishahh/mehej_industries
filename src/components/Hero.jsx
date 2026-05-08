import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiChevronDown, FiShield, FiPackage, FiGlobe } from 'react-icons/fi';
import { companyInfo } from '../data/siteData';

const badges = ['Washer Specialists', 'ASTM • DIN • BS • IS', 'Custom Sizes', '50+ Years'];

const trustBadges = [
  { icon: FiShield,  label: 'ISO 9001:2015' },
  { icon: FiPackage, label: '500+ Products' },
  { icon: FiGlobe,   label: 'Pan-India Supply' },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{ backgroundColor: '#060E1A' }}
    >
      {/* ── BACKGROUND LAYERS ── */}

      {/* Dot-grid overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '38px 38px',
        }}
      />

      {/* Deep radial glow — centre top */}
      <div
        className="pointer-events-none absolute -top-60 left-1/2 -translate-x-1/2 h-[700px] w-[900px] rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(17,44,88,0.55)' }}
      />

      {/* Orange accent glow — top right */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(56,115,178,0.09)' }}
      />

      {/* Orange accent glow — bottom left */}
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-[320px] w-[320px] rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(30,58,138,0.06)' }}
      />

      {/* Thin diagonal lines — very subtle industrial feel */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0.12) 1px, transparent 1px, transparent 60px)',
        }}
      />

      {/* Top border accent line */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-[3px]"
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

          {/* Main headline — NO gradient text */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3 }}
            className="mt-3 text-5xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Washers &amp;
            <br />
            <span className="text-slate-200">Industrial</span>
            <br />
            Fasteners.
          </motion.h1>

          {/* Sub-description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-6 text-lg leading-8 text-slate-300"
          >
            <span className="font-semibold text-white">{companyInfo.name}</span> — India's trusted
            manufacturer and supplier of precision washers, screws, nuts, bolts and all industrial fasteners.
            Built to international standards, delivered pan-India.
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

          {/* Made in India badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-5 inline-flex items-center gap-2 rounded-full border px-4 py-2"
            style={{ borderColor: 'rgba(255,255,255,0.22)', backgroundColor: 'rgba(255,255,255,0.06)' }}
          >
            <span className="text-xl leading-none">🇮🇳</span>
            <span className="text-sm font-bold tracking-wide text-slate-200">Made in India</span>
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
            className="mt-14 flex flex-wrap justify-center gap-6"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ color: 'rgba(148,163,184,0.5)' }}
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <FiChevronDown size={18} />
      </motion.div>
    </section>
  );
};

export default Hero;
