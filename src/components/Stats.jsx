import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiPackage, FiClock } from 'react-icons/fi';
import { stats } from '../data/siteData';

const NAVY = '#060E1A';
const NAVY_BORDER = '#1E3A5F';

const certifications = [
  { label: 'ISO 9001:2015', icon: FiAward },
  { label: 'ASTM Standards', icon: FiAward },
  { label: 'DIN Compliant', icon: FiAward },
  { label: 'ANSI Certified', icon: FiAward },
];

const statIcons = [FiAward, FiUsers, FiPackage, FiClock];

const Stats = () => {
  return (
    <section className="relative overflow-hidden pb-16 pt-16 lg:pb-20 lg:pt-20" style={{ backgroundColor: NAVY }}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.06) 1.5px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="container-main relative z-10">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Trusted &amp; Certified</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Quality You Can Count On
          </h2>
        </div>

        <div className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.label}
                className="flex flex-col items-center gap-2 rounded-2xl border py-6 transition-colors"
                style={{
                  borderColor: NAVY_BORDER,
                  backgroundColor: 'rgba(255,255,255,0.04)',
                }}
              >
                <Icon size={26} className="text-white" />
                <p className="text-center text-sm font-bold leading-snug text-slate-200">{cert.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = statIcons[index] || FiAward;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.09 }}
                className="group rounded-2xl border p-6 transition-all duration-300"
                style={{
                  borderColor: NAVY_BORDER,
                  backgroundColor: 'rgba(255,255,255,0.04)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(148,163,184,0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = NAVY_BORDER;
                }}
              >
                <div
                  className="mb-3 inline-flex rounded-xl border p-2.5"
                  style={{ borderColor: NAVY_BORDER, backgroundColor: 'rgba(255,255,255,0.06)' }}
                >
                  <Icon size={24} className="text-slate-200" />
                </div>
                <p className="text-3xl font-extrabold text-white">{item.value}</p>
                <p className="mt-1.5 text-sm leading-6 text-slate-400">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
