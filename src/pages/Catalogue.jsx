import { motion } from 'framer-motion';
import { FiDownload, FiMessageCircle, FiCheckCircle } from 'react-icons/fi';
import { companyInfo } from '../data/siteData';
import { catalogueDownloads, cataloguePdfHref } from '../data/catalogueDownloads';
import DarkMeshBackground from '../components/DarkMeshBackground';

const HERO_BG_MESH = '#060E1A';
const ORANGE = '#F97316';
const NAVY_DEEP = '#0A2540';
const NAVY_BORDER = '#1E3A5F';

const Catalogue = () => (
  <div className="min-h-screen bg-white">

    <section
      className="relative overflow-hidden py-10 lg:py-14"
      style={{ backgroundColor: HERO_BG_MESH }}
    >
      <DarkMeshBackground />
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 z-[1] h-[3px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.35) 40%, rgba(255,255,255,0.35) 60%, transparent)' }}
      />
      <div className="relative z-10 container-main">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="section-label !mb-4 !inline-block !border-primary/35 !bg-primary/15 !text-primary">
            Downloads
          </span>
          <h1 className="mt-2 text-4xl font-extrabold text-white lg:text-5xl">Product Catalogues</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Eight PDF downloads — washers, fasteners, and each specialist washer range.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {['ASTM • DIN • BS • IS', 'Direct PDF downloads', '8 catalogues'].map((tag) => (
              <span key={tag} className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white">
                <FiCheckCircle style={{ color: ORANGE }} size={12} /> {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    <section className="container-main py-14">
      <h2 className="mb-8 text-xl font-extrabold text-slate-900 sm:text-2xl">All catalogue downloads</h2>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {catalogueDownloads.map((item, index) => {
          const href = cataloguePdfHref(item.file);
          return (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              style={{ border: '1px solid #E2E8F0' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(10,37,64,0.35)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E2E8F0'; }}
            >
              <div className="relative h-44 overflow-hidden sm:h-48">
                <img src={item.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)' }} />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-extrabold leading-snug text-slate-900">{item.name}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600 sm:text-sm">{item.desc}</p>
                <a
                  href={href}
                  download={item.file}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-xs font-bold text-white shadow-sm transition hover:brightness-110 sm:text-sm"
                  style={{ backgroundColor: NAVY_DEEP }}
                >
                  <FiDownload size={18} /> Download PDF
                </a>
              </div>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 overflow-hidden rounded-3xl border p-8 lg:p-12"
        style={{ backgroundColor: NAVY_DEEP, borderColor: NAVY_BORDER }}
      >
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/65">Need a mailed copy?</p>
            <h2 className="mt-2 text-2xl font-extrabold text-white lg:text-3xl">
              Prefer WhatsApp or a printed catalogue — we can help.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
              Message us and we&apos;ll send the catalogues you need.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              href={`https://wa.me/91${companyInfo.phone}?text=${encodeURIComponent('Hi, I need catalogue PDFs from Mehej Industries.')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold transition hover:bg-slate-100"
              style={{ color: NAVY_DEEP }}
            >
              <FiDownload /> WhatsApp
            </a>
            <a
              href={`mailto:${companyInfo.email}?subject=Catalogue Request`}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/45 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <FiMessageCircle /> Email Us
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  </div>
);

export default Catalogue;
