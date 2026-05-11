import { motion } from 'framer-motion';
import { FiShield, FiCheckCircle, FiAward, FiArrowRight } from 'react-icons/fi';
import { companyInfo } from '../data/siteData';
import DarkMeshBackground from '../components/DarkMeshBackground';

const HERO_BG_MESH = '#060E1A';
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
  { name: 'Stainless Steel', grade: '304, 316, 316L',             use: 'Marine, food processing & corrosive environments' },
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

    {/* HERO — mesh + compact band (Catalogue / Resources) */}
    <section className="relative overflow-hidden py-10 lg:py-14" style={{ backgroundColor: HERO_BG_MESH }}>
      <DarkMeshBackground />
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 z-[1] h-[3px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.35) 40%, rgba(255,255,255,0.35) 60%, transparent)' }}
      />
      <div className="relative z-10 container-main">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="section-label !mb-4 !inline-block !border-primary/35 !bg-primary/15 !text-primary">Quality Assurance</span>
          <h1 className="mt-2 max-w-2xl text-[1.65rem] font-extrabold leading-snug tracking-tight text-white min-[380px]:text-3xl sm:text-4xl lg:text-5xl">
            International Standards. Uncompromising Quality.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 min-[380px]:text-base min-[380px]:leading-8 lg:text-lg">
            Every Mehej Fasteners product is manufactured and inspected to meet the most rigorous international
            standards across all grades and materials.
          </p>
        </motion.div>
      </div>
    </section>

    {/* STANDARDS — light gray */}
    <section className="section-space" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container-main">
        <div className="mb-10 text-center px-0 sm:mb-12">
          <span className="section-label">Supported Standards</span>
          <h2 className="mx-auto max-w-4xl text-[1.5rem] font-extrabold leading-snug text-slate-900 min-[380px]:text-2xl sm:text-4xl">Products aligned to global standards.</h2>
          <p className="mx-auto mt-3 max-w-xl px-1 text-sm leading-relaxed text-slate-600 min-[380px]:mt-4 min-[380px]:text-base sm:px-0">We manufacture to whichever standard your application requires, fully traceable and documented.</p>
        </div>
        <div className="grid gap-4 min-[380px]:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {standards.map((std, i) => (
            <motion.div
              key={std.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="overflow-hidden rounded-2xl bg-white px-5 py-5 transition-all hover:-translate-y-1 hover:shadow-md min-[380px]:p-6"
              style={{ border: '1px solid #E2E8F0' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(249,115,22,0.35)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#E2E8F0'}
            >
              <p className="text-2xl font-extrabold min-[380px]:text-3xl" style={{ color: ORANGE }}>{std.code}</p>
              <p className="mt-1 break-words text-[10px] font-semibold uppercase leading-snug tracking-[0.06em] text-slate-500 min-[380px]:text-[11px] sm:text-xs">{std.full}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{std.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* QUALITY PROCESS — white */}
    <section className="section-space bg-white">
      <div className="container-main">
        <div className="mb-10 px-1 text-center sm:mb-12 sm:px-0">
          <span className="section-label">Quality Process</span>
          <h2 className="text-[1.5rem] font-extrabold leading-snug text-slate-900 min-[380px]:text-2xl sm:text-4xl">Four-stage quality assurance.</h2>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
          {qualitySteps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl bg-white px-5 py-5 transition-all hover:-translate-y-1 hover:shadow-md min-[380px]:p-6"
              style={{ border: '1px solid #E2E8F0' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(249,115,22,0.35)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#E2E8F0'}
            >
              <FiShield size={28} style={{ color: ORANGE }} className="max-sm:scale-[0.92]" />
              <h3 className="mt-3 text-base font-extrabold text-slate-900 min-[380px]:mt-4 min-[380px]:text-lg">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 min-[380px]:text-base">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* MATERIALS TABLE — light gray */}
    <section className="section-space" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container-main">
        <div className="mb-10 px-1 text-center sm:mb-12 sm:px-0">
          <span className="section-label">Materials</span>
          <h2 className="text-[1.5rem] font-extrabold leading-snug text-slate-900 min-[380px]:text-2xl sm:text-4xl">Material grades for every environment.</h2>
        </div>
        <div className="-mx-1 overflow-x-auto rounded-2xl shadow-sm pb-px min-[380px]:-mx-0 sm:overflow-visible">
          <div className="min-w-0 rounded-2xl ring-1 ring-slate-200" style={{ border: '1px solid #E2E8F0' }}>
            <table className="w-full min-w-[560px] text-left lg:min-w-0">
              <thead>
                <tr style={{ backgroundColor: ORANGE }}>
                  <th className="px-3 py-3 text-left text-xs font-bold text-white sm:px-4 sm:py-4 sm:text-sm">Material</th>
                  <th className="px-3 py-3 text-left text-xs font-bold text-white sm:px-4 sm:py-4 sm:text-sm">Grade</th>
                  <th className="px-3 py-3 text-left text-xs font-bold text-white sm:px-4 sm:py-4 sm:text-sm">Typical Use</th>
                </tr>
              </thead>
              <tbody>
                {materials.map((mat, i) => (
                  <tr key={mat.name} style={{ backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#F8FAFC' }}>
                    <td className="whitespace-normal break-words px-3 py-3 text-xs font-semibold text-slate-900 sm:px-4 sm:py-4 sm:text-sm">{mat.name}</td>
                    <td className="whitespace-normal break-words px-3 py-3 text-xs text-slate-600 sm:px-4 sm:py-4 sm:text-sm">{mat.grade}</td>
                    <td className="whitespace-normal break-words px-3 py-3 text-xs text-slate-600 sm:px-4 sm:py-4 sm:text-sm">{mat.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    {/* CTA — orange */}
    <section className="py-14 sm:py-20" style={{ backgroundColor: ORANGE }}>
      <div className="container-main px-1 text-center sm:px-0">
        <FiAward className="mx-auto mb-3 h-10 w-10 text-white sm:mb-4 sm:h-12 sm:w-12" strokeWidth={1.25} aria-hidden />
        <h2 className="text-xl font-extrabold leading-snug text-white min-[380px]:text-2xl sm:text-4xl">Need certified products?</h2>
        <p className="mx-auto mt-3 max-w-lg px-1 text-base leading-relaxed text-white/90 min-[380px]:text-lg sm:px-0">Contact us for test certificates, material traceability, and compliance documentation.</p>
        <a
          href={`https://wa.me/91${companyInfo.phone}`}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex max-w-[calc(100%-0.25rem)] items-center justify-center gap-2.5 rounded-lg px-6 py-4 text-xs font-bold uppercase tracking-wide shadow-md sm:mt-8 sm:max-w-none sm:px-8 sm:text-sm"
          style={{ backgroundColor: '#0A1628', color: '#ffffff' }}
        >
          Request Certificates <FiArrowRight />
        </a>
      </div>
    </section>
  </div>
);

export default QualityPage;
