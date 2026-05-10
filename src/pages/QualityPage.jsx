import { motion } from 'framer-motion';
import { FiShield, FiCheckCircle, FiAward, FiArrowRight } from 'react-icons/fi';
import { companyInfo } from '../data/siteData';

const HERO_BG = '#0A1628';
const ORANGE  = '#F97316';

const standards = [
  { code: 'ASTM', full: 'American Society for Testing and Materials', desc: 'American standard specifying material grades, mechanical properties, and dimensional tolerances for industrial fasteners.' },
  { code: 'DIN',  full: 'Deutsches Institut für Normung',             desc: 'German standard widely used across Europe for specifying metric fastener dimensions and material properties.' },
  { code: 'BS',   full: 'British Standards',                          desc: 'British standards covering fastener specifications, including imperial and metric sizes for UK and international markets.' },
  { code: 'GB',   full: 'Guobiao (Chinese National Standard)',        desc: 'Chinese national standard for fasteners, specifying dimensions, grades, and performance characteristics for industrial use.' },
  { code: 'IS',   full: 'Indian Standard',                            desc: 'Bureau of Indian Standards specifications for fasteners manufactured and supplied within India for domestic industrial applications.' },
];

const materials = [
  { name: 'Carbon Steel',    grade: 'Grade 4.6, 8.8, 10.9, 12.9', use: 'General construction & heavy machinery' },
  { name: 'Alloy Steel',     grade: 'Grade 10.9, 12.9',            use: 'High-strength structural and aerospace applications' },
  { name: 'Stainless Steel', grade: 'SS 304, 316, 316L',           use: 'Marine, food processing & corrosive environments' },
  { name: 'Brass',           grade: 'CuZn40',                      use: 'Electrical, plumbing & decorative applications' },
  { name: 'Copper',          grade: 'C11000',                      use: 'Electrical conductivity and heat transfer applications' },
  { name: 'Aluminium',       grade: 'A2-70, A4-80',                use: 'Lightweight structures and aerospace components' },
];

const qualitySteps = [
  { step: '01', title: 'Raw Material Inspection',    desc: 'All incoming materials are tested for chemical composition, hardness, and dimensional accuracy before use.' },
  { step: '02', title: 'In-Process Checks',          desc: 'Continuous monitoring of dimensions, thread pitch, head height, and surface finish during production.' },
  { step: '03', title: 'Heat Treatment Verification', desc: 'Mechanical property testing post heat treatment: tensile strength, yield, elongation, and hardness.' },
  { step: '04', title: 'Final Inspection',           desc: '100% visual inspection plus sampling to international AQL standards before packing and dispatch.' },
];

const QualityPage = () => (
  <div className="min-h-screen bg-white">

    {/* HERO — dark banner */}
    <section className="relative overflow-hidden py-24" style={{ backgroundColor: HERO_BG }}>
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${HERO_BG} 40%, transparent)` }} />
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: `linear-gradient(90deg, transparent, ${ORANGE} 40%, ${ORANGE} 60%, transparent)` }} />
      <div className="relative z-10 container-main">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="section-label">Quality Assurance</span>
          <h1 className="mt-2 max-w-2xl text-4xl font-extrabold text-white lg:text-5xl">
            International Standards. Uncompromising Quality.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
            Every Mehej Fasteners product is manufactured and inspected to meet the most rigorous international
            standards across all grades and materials.
          </p>
        </motion.div>
      </div>
    </section>

    {/* STANDARDS — light gray */}
    <section className="section-space" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container-main">
        <div className="mb-12 text-center">
          <span className="section-label">Supported Standards</span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Products aligned to global standards.</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-600">We manufacture to whichever standard your application requires, fully traceable and documented.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {standards.map((std, i) => (
            <motion.div
              key={std.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="overflow-hidden rounded-2xl bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-md"
              style={{ border: '1px solid #E2E8F0' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(249,115,22,0.35)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#E2E8F0'}
            >
              <p className="text-3xl font-extrabold" style={{ color: ORANGE }}>{std.code}</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-slate-400">{std.full}</p>
              <p className="mt-3 text-xs leading-5 text-slate-600">{std.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* QUALITY PROCESS — white */}
    <section className="section-space bg-white">
      <div className="container-main">
        <div className="mb-12 text-center">
          <span className="section-label">Quality Process</span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Four-stage quality assurance.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {qualitySteps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-md"
              style={{ border: '1px solid #E2E8F0' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(249,115,22,0.35)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#E2E8F0'}
            >
              <span className="absolute right-5 top-4 text-5xl font-black" style={{ color: 'rgba(249,115,22,0.08)' }}>{s.step}</span>
              <FiShield size={28} style={{ color: ORANGE }} />
              <h3 className="mt-4 font-extrabold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* MATERIALS TABLE — light gray */}
    <section className="section-space" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container-main">
        <div className="mb-12 text-center">
          <span className="section-label">Materials</span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Material grades for every environment.</h2>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-sm" style={{ border: '1px solid #E2E8F0' }}>
          <table className="w-full">
            <thead>
              <tr style={{ backgroundColor: ORANGE }}>
                <th className="p-4 text-left text-sm font-bold text-white">Material</th>
                <th className="p-4 text-left text-sm font-bold text-white">Grade</th>
                <th className="p-4 text-left text-sm font-bold text-white">Typical Use</th>
              </tr>
            </thead>
            <tbody>
              {materials.map((mat, i) => (
                <tr key={mat.name} style={{ backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#F8FAFC' }}>
                  <td className="p-4 text-sm font-semibold text-slate-900">{mat.name}</td>
                  <td className="p-4 text-sm text-slate-600">{mat.grade}</td>
                  <td className="p-4 text-sm text-slate-600">{mat.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* CTA — orange */}
    <section className="py-20" style={{ backgroundColor: ORANGE }}>
      <div className="container-main text-center">
        <FiAward className="mx-auto mb-4 text-white" size={48} />
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Need certified products?</h2>
        <p className="mt-3 text-lg text-white/85">Contact us for test certificates, material traceability, and compliance documentation.</p>
        <a
          href={`https://wa.me/91${companyInfo.phone}`}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2.5 rounded-lg px-8 py-4 text-sm font-bold uppercase tracking-wide"
          style={{ backgroundColor: '#0A1628', color: '#ffffff' }}
        >
          Request Certificates <FiArrowRight />
        </a>
      </div>
    </section>
  </div>
);

export default QualityPage;
