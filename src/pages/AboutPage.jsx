import { motion } from 'framer-motion';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { companyInfo } from '../data/siteData';
import DarkMeshBackground from '../components/DarkMeshBackground';

const HERO_BG_MESH = '#060E1A';
const ORANGE  = '#F97316';

const timeline = [
  { year: '1970', title: 'Foundation', desc: 'Established as Vijay Hardware Stores by Mr. Mahipatbhai Shah in Mumbai, beginning a legacy of quality hardware supply.' },
  { year: '1999', title: 'Second generation', desc: 'Mr. Mehul Shah took over the business—rebranding as Mehej Fasteners, expanding the product portfolio and modernizing operations.' },
  { year: '2023', title: 'Global footprint', desc: 'Scaled internationally with export-grade fasteners aligned to ASTM, DIN, BS, GB, IS and other global standards, plus custom capabilities for demanding sectors.' },
  { year: '2025', title: 'Third generation', desc: 'Mr. Hem Shah and Mr. Jay Shah took over leadership, stewarding quality, precision, and customer-first service into the company’s next chapter.' },
];

const coreValues = [
  { title: 'Quality First',           desc: 'Every product undergoes rigorous quality checks before dispatch.' },
  { title: 'Precision Engineering',   desc: 'Tolerances held to international standards across all product lines.' },
  { title: 'Customer Commitment',     desc: 'Responsive service and tailored solutions for every client need.' },
  { title: 'Timely Delivery',         desc: 'Reliable dispatch timelines backed by strong supply chain management.' },
  { title: 'Innovation',              desc: 'Continuously expanding capabilities to meet evolving industrial demands.' },
  { title: 'Integrity',               desc: 'Transparent pricing and honest business practices, generation after generation.' },
];

const AboutPage = () => (
  <div className="min-h-screen bg-white">

    {/* HERO — same mesh + compact band as Catalogue / Resources */}
    <section className="relative overflow-hidden py-10 lg:py-14" style={{ backgroundColor: HERO_BG_MESH }}>
      <DarkMeshBackground />
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 z-[1] h-[3px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.35) 40%, rgba(255,255,255,0.35) 60%, transparent)' }}
      />
      <div className="relative z-10 container-main">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="section-label !mb-4 !inline-block !border-primary/35 !bg-primary/15 !text-primary">Our Story</span>
          <h1 className="mt-2 max-w-2xl text-[1.75rem] font-extrabold leading-snug tracking-tight text-white min-[380px]:text-3xl sm:text-4xl lg:text-5xl">
            50+ Years of Fastening Excellence.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 min-[380px]:text-base min-[380px]:leading-8 lg:text-lg">
            From a small hardware store in Mumbai to a respected industrial fastener manufacturer and exporter.
            The Mehej Fasteners story spans three generations and five decades.
          </p>
        </motion.div>
      </div>
    </section>

    {/* ABOUT CONTENT — white */}
    <section className="section-space bg-white">
      <div className="container-main">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="section-label">Who We Are</span>
            <h2 className="text-[1.5rem] font-extrabold leading-snug tracking-tight text-slate-900 min-[380px]:text-2xl sm:text-4xl">
              A legacy-driven fastener company built on quality and trust.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 min-[380px]:mt-5 min-[380px]:text-base min-[380px]:leading-8">{companyInfo.about}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 min-[380px]:mt-4 min-[380px]:text-base min-[380px]:leading-8">{companyInfo.description}</p>
            <a href="/catalogue" className="btn-primary mt-6 inline-flex min-[380px]:mt-8">Get in Touch <FiArrowRight /></a>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="min-w-0">
            <div className="overflow-hidden rounded-2xl bg-slate-100 shadow-lg ring-1 ring-slate-200/90">
              <img
                src="/assets/founders/mehej-founders.jpg"
                alt={`${companyInfo.name} — leadership and founders`}
                loading="lazy"
                decoding="async"
                className="mx-auto block h-auto w-full max-h-[min(70vh,29rem)] object-contain object-center sm:max-h-[min(76vh,33rem)] md:max-h-[min(85vh,40rem)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* TIMELINE — light gray */}
    <section className="py-12 lg:py-16" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container-main">
        <div className="mx-auto mb-8 max-w-2xl px-1 text-center sm:px-0">
          <span className="section-label">Our Journey</span>
          <h2 className="mt-4 text-[1.375rem] font-extrabold leading-snug text-slate-900 min-[380px]:text-2xl sm:text-3xl">A legacy built over five decades.</h2>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute left-6 top-0 h-full w-0.5 lg:left-1/2"
            style={{ background: `linear-gradient(to bottom, ${ORANGE}, rgba(249,115,22,0.10))` }}
          />

          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -32 : 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`relative mb-5 pl-[3.35rem] last:mb-0 sm:pl-14 lg:pl-0 lg:last:mb-0 ${i % 2 === 0 ? 'lg:mb-5 lg:pr-[calc(50%+1.75rem)]' : 'lg:pl-[calc(50%+1.75rem)]'}`}
            >
              <div
                className="absolute left-4 top-2.5 h-3.5 w-3.5 rounded-full border-[3px] lg:left-1/2 lg:top-2 lg:-translate-x-1/2"
                style={{ borderColor: ORANGE, backgroundColor: '#F8FAFC' }}
              />
              <div className="rounded-xl bg-white px-3.5 py-3 shadow-sm sm:px-5 sm:py-3.5" style={{ border: '1px solid #E2E8F0' }}>
                <span className="text-[10px] font-bold uppercase tracking-widest sm:text-xs" style={{ color: ORANGE }}>{item.year}</span>
                <h3 className="mt-0.5 text-[0.9375rem] font-extrabold text-slate-900 sm:text-lg">{item.title}</h3>
                <p className="mt-1.5 hyphens-auto break-words text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CORE VALUES — white */}
    <section className="section-space bg-white">
      <div className="container-main">
        <div className="mb-10 px-1 text-center sm:mb-12 sm:px-0">
          <span className="section-label">Core Values</span>
          <h2 className="text-[1.5rem] font-extrabold leading-snug text-slate-900 min-[380px]:text-2xl sm:text-4xl">What drives us every day.</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="flex items-start gap-4 rounded-2xl bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-md"
              style={{ border: '1px solid #E2E8F0' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(249,115,22,0.35)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#E2E8F0'}
            >
              <FiCheckCircle className="mt-0.5 shrink-0" style={{ color: ORANGE }} size={20} />
              <div>
                <h3 className="font-bold text-slate-900">{val.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{val.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-14 sm:py-20" style={{ backgroundColor: ORANGE }}>
      <div className="container-main px-2 text-center sm:px-0">
        <h2 className="text-xl font-extrabold leading-snug text-white min-[380px]:text-2xl sm:text-4xl">Ready to work with us?</h2>
        <p className="mx-auto mt-3 max-w-lg px-1 text-base leading-relaxed text-white/90 sm:mt-4 sm:text-lg">Contact our team for product specifications, pricing, and availability.</p>
        <a
          href={`https://wa.me/91${companyInfo.phone}`}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex max-w-full flex-wrap items-center justify-center gap-2.5 rounded-lg px-6 py-4 text-xs font-bold uppercase tracking-wide shadow-md sm:mt-8 sm:px-8 sm:text-sm"
          style={{ backgroundColor: '#0A1628', color: '#ffffff' }}
        >
          WhatsApp Us <FiArrowRight />
        </a>
      </div>
    </section>
  </div>
);

export default AboutPage;
