import { motion } from 'framer-motion';
import { FiArrowRight, FiMessageCircle } from 'react-icons/fi';
import { companyInfo } from '../data/siteData';

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-24">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.6) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Top glow */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-black/10 blur-3xl pointer-events-none" />

      <div className="container-main relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/70">Ready to Order?</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Need Custom Fasteners?
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/85">
            Get precision-engineered washers and fasteners manufactured to your specifications.
            Bulk orders welcome.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-lg px-8 py-4 text-sm font-bold uppercase tracking-wide shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{ backgroundColor: '#0A1628', color: '#ffffff' }}
            >
              Request a Quote Today <FiArrowRight size={16} />
            </a>
            <a
              href={`https://wa.me/91${companyInfo.phone}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg border-2 border-white/50 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all hover:-translate-y-1 hover:border-white hover:bg-white/10"
            >
              <FiMessageCircle size={16} /> WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
