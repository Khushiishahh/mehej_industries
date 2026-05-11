import { motion } from 'framer-motion';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { companyInfo } from '../data/siteData';
import DarkMeshBackground from '../components/DarkMeshBackground';

const HERO_BG_MESH = '#060E1A';
const ORANGE  = '#F97316';

const timeline = [
  { year: '1970', title: 'Foundation', desc: 'Established as Vijay Hardware Stores by Mr. Mahipatbhai Shah in Mumbai, beginning a legacy of quality hardware supply.' },
  { year: '1990', title: 'Second Generation', desc: 'Mr. Mehul Shah took over and rebranded as Mehej Fasteners, expanding the product portfolio and modernizing operations.' },
  { year: '2005', title: 'Export Expansion', desc: 'Began exporting fasteners internationally, aligning products to ASTM, DIN, BS, GB, IS and other global standards.' },
  { year: '2015', title: 'Custom Manufacturing', desc: 'Launched custom size manufacturing capabilities, serving specialized requirements for aerospace, oil & gas, and heavy machinery clients.' },
  { year: '2024', title: 'Third Generation', desc: 'Mr. Hem Shah and Mr. Jay Shah lead the business into its third generation, continuing the tradition of quality, precision, and customer-first service.' },
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
          <h1 className="mt-2 max-w-2xl text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
            50+ Years of Fastening Excellence.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-8 text-slate-300 lg:text-lg">
            From a small hardware store in Mumbai to a respected industrial fastener manufacturer and exporter.
            The Mehej Fasteners story spans three generations and five decades.
          </p>
        </motion.div>
      </div>
    </section>

    {/* ABOUT CONTENT — white */}
    <section className="section-space bg-white">
      <div className="container-main">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="section-label">Who We Are</span>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              A legacy-driven fastener company built on quality and trust.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">{companyInfo.about}</p>
            <p className="mt-4 text-base leading-8 text-slate-600">{companyInfo.description}</p>
            <a href="/catalogue" className="btn-primary mt-8 inline-flex">Get in Touch <FiArrowRight /></a>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
                alt="Manufacturing"
                className="h-[450px] w-full object-cover"
              />
              <div
                className="absolute -bottom-5 -right-5 hidden rounded-2xl px-6 py-4 sm:block shadow-lg"
                style={{ backgroundColor: ORANGE }}
              >
                <p className="text-3xl font-extrabold text-white">1970</p>
                <p className="text-sm font-semibold text-white/80">Est. Mumbai</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* TIMELINE — light gray */}
    <section className="py-12 lg:py-16" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container-main">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <span className="section-label">Our Journey</span>
          <h2 className="mt-4 text-2xl font-extrabold text-slate-900 sm:text-3xl">A legacy built over five decades.</h2>
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
              className={`relative mb-5 pl-14 last:mb-0 lg:pl-0 lg:last:mb-0 ${i % 2 === 0 ? 'lg:mb-5 lg:pr-[calc(50%+1.75rem)]' : 'lg:pl-[calc(50%+1.75rem)]'}`}
            >
              <div
                className="absolute left-4 top-2.5 h-3.5 w-3.5 rounded-full border-[3px] lg:left-1/2 lg:top-2 lg:-translate-x-1/2"
                style={{ borderColor: ORANGE, backgroundColor: '#F8FAFC' }}
              />
              <div className="rounded-xl bg-white px-4 py-3.5 shadow-sm sm:px-5" style={{ border: '1px solid #E2E8F0' }}>
                <span className="text-[10px] font-bold uppercase tracking-widest sm:text-xs" style={{ color: ORANGE }}>{item.year}</span>
                <h3 className="mt-0.5 text-base font-extrabold text-slate-900 sm:text-lg">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CORE VALUES — white */}
    <section className="section-space bg-white">
      <div className="container-main">
        <div className="mb-12 text-center">
          <span className="section-label">Core Values</span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">What drives us every day.</h2>
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
    <section className="py-20" style={{ backgroundColor: ORANGE }}>
      <div className="container-main text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Ready to work with us?</h2>
        <p className="mt-3 text-lg text-white/85">Contact our team for product specifications, pricing, and availability.</p>
        <a
          href={`https://wa.me/91${companyInfo.phone}`}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2.5 rounded-lg px-8 py-4 text-sm font-bold uppercase tracking-wide"
          style={{ backgroundColor: '#0A1628', color: '#ffffff' }}
        >
          WhatsApp Us <FiArrowRight />
        </a>
      </div>
    </section>
  </div>
);

export default AboutPage;
