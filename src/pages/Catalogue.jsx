import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMessageCircle, FiFileText, FiCheckCircle } from 'react-icons/fi';
import { companyInfo } from '../data/siteData';

const HERO_BG = '#0A1628';
const ORANGE  = '#F97316';

const catalogueItems = [
  { id: 1, name: 'Bolt Catalogue',                slug: 'bolts',      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80', pages: 24, updated: 'Jan 2026', size: '2.4 MB', desc: 'Complete range of hex bolts, carriage bolts, anchor bolts, studs and more with full dimensional specifications.' },
  { id: 2, name: 'Nut Catalogue',                 slug: 'nuts',       image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80', pages: 18, updated: 'Jan 2026', size: '1.8 MB', desc: 'Hex nuts, lock nuts, flange nuts, castle nuts and all variants with tolerance tables and material grades.' },
  { id: 3, name: 'Screw Catalogue',               slug: 'screws',     image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=600&q=80', pages: 28, updated: 'Feb 2026', size: '2.6 MB', desc: 'Pan, CSK, machine screws, socket screws, self-tapping and all screw types with full specifications.' },
  { id: 4, name: 'Plain / Flat Washer Catalogue', slug: 'flat-plain', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80', pages: 14, updated: 'Feb 2026', size: '1.2 MB', desc: 'Full range of plain and flat washers across all standards (DIN 125, DIN 9021, ISO 7089 and custom sizes).' },
  { id: 5, name: 'Spring & Lock Washer Catalogue', slug: 'spring',    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=600&q=80', pages: 16, updated: 'Mar 2026', size: '1.5 MB', desc: 'Spring washers (DIN 127), lock washers including internal and external tooth types for all vibration applications.' },
  { id: 6, name: 'Special Washer Catalogue',      slug: 'custom',     image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80', pages: 20, updated: 'Mar 2026', size: '1.9 MB', desc: 'Wave, tab, serrated, Belleville, sealing and custom washers with full specifications.' },
];

const Catalogue = () => {
  const [requested, setRequested] = useState({});

  const handleRequest = (item) => {
    const msg = `Hi, I would like to request the *${item.name}* from Mehej Fasteners. Please share the catalogue. Thank you.`;
    window.open(`https://wa.me/91${companyInfo.phone}?text=${encodeURIComponent(msg)}`, '_blank');
    setRequested((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => setRequested((prev) => ({ ...prev, [item.id]: false })), 4000);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* HERO — dark banner */}
      <section className="relative overflow-hidden py-20 lg:py-28" style={{ backgroundColor: HERO_BG }}>
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${HERO_BG} 40%, transparent)` }} />
        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: `linear-gradient(90deg, transparent, ${ORANGE} 40%, ${ORANGE} 60%, transparent)` }} />
        <div className="relative z-10 container-main">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-label">Downloads</span>
            <h1 className="mt-2 text-4xl font-extrabold text-white lg:text-5xl">Product Catalogues</h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">
              Browse and request our detailed product catalogues. Each catalogue contains complete specifications, dimensions, material grades, and standards.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {['ASTM • DIN • BS • IS', 'All Product Categories', 'Updated 2026'].map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white">
                  <FiCheckCircle style={{ color: ORANGE }} size={12} /> {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW TO REQUEST BANNER */}
      <div style={{ backgroundColor: 'rgba(249,115,22,0.06)', borderBottom: '1px solid rgba(249,115,22,0.18)' }} className="py-3">
        <div className="container-main flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-600">
            <span className="font-bold" style={{ color: ORANGE }}>How to request:</span> Click "Request Catalogue" and it opens a WhatsApp message. We&apos;ll send the PDF within 24 hours.
          </p>
          <a href={`mailto:${companyInfo.email}?subject=Catalogue Request`} className="text-sm font-semibold hover:underline" style={{ color: ORANGE }}>
            Or email us →
          </a>
        </div>
      </div>

      {/* CONTENT — white */}
      <section className="container-main py-14">

        {/* MASTER CATALOGUE */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 overflow-hidden rounded-2xl bg-white p-7 shadow-sm"
          style={{ border: `2px solid rgba(249,115,22,0.35)` }}
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl p-3.5 shrink-0" style={{ backgroundColor: 'rgba(249,115,22,0.10)', color: ORANGE }}>
                <FiFileText size={30} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: ORANGE }}>Ready to Download</span>
                <h3 className="mt-0.5 text-xl font-extrabold text-slate-900">Master Catalogue: All Products</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Complete product listing with specifications, materials, sizes and standards for all Mehej Fasteners product lines.
                </p>
                <div className="mt-2 flex gap-4 text-xs text-slate-400">
                  <span>96 pages</span><span>·</span><span>Updated Apr 2026</span><span>·</span><span>PDF Format</span>
                </div>
              </div>
            </div>
            <a
              href="/Mehej_Fasteners_Master_Catalogue.pdf"
              download="Mehej_Fasteners_Master_Catalogue.pdf"
              className="btn-primary shrink-0"
            >
              <FiDownload /> Download Master Catalogue
            </a>
          </div>
        </motion.div>

        {/* CATEGORY CATALOGUES */}
        <h2 className="mb-6 text-xl font-extrabold text-slate-900">Product Category Catalogues</h2>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {catalogueItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              style={{ border: '1px solid #E2E8F0' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(249,115,22,0.40)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#E2E8F0'}
            >
              <div className="relative h-44 overflow-hidden">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }} />
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-bold text-white"
                  style={{ backgroundColor: ORANGE }}>
                  <FiFileText size={12} />
                  {item.pages} pages
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-extrabold text-slate-900">{item.name}</h3>
                <p className="mt-1.5 text-xs leading-5 text-slate-600 line-clamp-2">{item.desc}</p>
                <div className="mt-3 flex gap-3 text-xs text-slate-400">
                  <span>Updated {item.updated}</span><span>·</span><span>{item.size}</span>
                </div>
                <button
                  onClick={() => handleRequest(item)}
                  className="mt-4 w-full btn-primary justify-center py-2.5 text-xs"
                >
                  {requested[item.id] ? <><FiCheckCircle /> Requested!</> : <><FiDownload /> Request Catalogue</>}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BULK ENQUIRY — orange */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden rounded-3xl p-8 lg:p-12"
          style={{ backgroundColor: ORANGE }}
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/70">Need More Information?</p>
              <h2 className="mt-2 text-2xl font-extrabold text-white lg:text-3xl">
                Request all catalogues or a custom product specification sheet.
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/85">
                Our team will send you all relevant documents, pricing, and technical data sheets based on your specific industry and application requirements.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a
                href={`https://wa.me/91${companyInfo.phone}?text=${encodeURIComponent('Hi, I would like to request all Mehej Fasteners product catalogues.')}`}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold"
                style={{ backgroundColor: '#0A1628', color: '#ffffff' }}
              >
                <FiDownload /> Request All Catalogues
              </a>
              <a href={`mailto:${companyInfo.email}?subject=Catalogue Request`}
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/50 px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition">
                <FiMessageCircle /> Email Us
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Catalogue;
