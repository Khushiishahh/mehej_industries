import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCheckCircle, FiMessageCircle, FiDownload } from 'react-icons/fi';
import { washerTypes, companyInfo } from '../data/siteData';
import DarkMeshBackground from '../components/DarkMeshBackground';

const HERO_BG_MESH = '#060E1A';
const NAVY_BORDER = '#1E3A5F';

const WasherDetail = () => {
  const { slug } = useParams();
  const navigate  = useNavigate();
  const washer    = washerTypes.find((w) => w.slug === slug);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [slug]);

  if (!washer) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center bg-white">
        <h1 className="text-3xl font-extrabold text-slate-900">Washer type not found.</h1>
        <button onClick={() => navigate('/')} className="btn-primary">Back to Home</button>
      </div>
    );
  }

  const idx  = washerTypes.findIndex((w) => w.slug === slug);
  const prev = washerTypes[(idx - 1 + washerTypes.length) % washerTypes.length];
  const next = washerTypes[(idx + 1) % washerTypes.length];

  return (
    <div className="min-h-screen bg-white">

      {/* HERO — navy + mesh (same as Knowledge Base / landing) */}
      <section className="relative overflow-hidden py-20 lg:py-28" style={{ backgroundColor: HERO_BG_MESH }}>
        <DarkMeshBackground />
        <div className="pointer-events-none absolute top-0 left-0 right-0 z-[1] h-[3px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.35) 40%, rgba(255,255,255,0.35) 60%, transparent)' }} />

        <div className="relative z-10 container-main">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <button
              onClick={() => { navigate('/'); setTimeout(() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' }), 150); }}
              className="flex items-center gap-1 text-slate-300 transition-colors hover:text-white"
            >
              <FiArrowLeft size={13} /> Back to Products
            </button>
            <span>/</span>
            <span>Hot Products</span>
            <span>/</span>
            <span className="font-semibold text-slate-200">{washer.name}</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {washer.badge && (
              <span className="mb-3 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-slate-200">
                {washer.badge}
              </span>
            )}
            <h1 className="text-4xl font-extrabold text-white lg:text-5xl">{washer.name}</h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">{washer.overview}</p>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT — white bg */}
      <section className="section-space bg-white">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-[2fr_3fr]">

            {/* Image + prev/next */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="overflow-hidden rounded-2xl shadow-lg sticky top-24">
                <img src={washer.image} alt={washer.name} className="w-full object-cover" style={{ maxHeight: 420 }} />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <Link to={`/washers/${prev.slug}`}
                  className="flex flex-col gap-1 rounded-xl bg-white p-4 transition-all duration-200 hover:shadow-md"
                  style={{ border: '1px solid #E2E8F0' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(249,115,22,0.45)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#E2E8F0'}>
                  <span className="text-[10px] font-bold uppercase text-slate-400">← Previous</span>
                  <span className="text-xs font-extrabold text-slate-800 line-clamp-1">{prev.name}</span>
                </Link>
                <Link to={`/washers/${next.slug}`}
                  className="flex flex-col gap-1 rounded-xl bg-white p-4 transition-all duration-200 text-right hover:shadow-md"
                  style={{ border: '1px solid #E2E8F0' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(249,115,22,0.45)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#E2E8F0'}>
                  <span className="text-[10px] font-bold uppercase text-slate-400">Next →</span>
                  <span className="text-xs font-extrabold text-slate-800 line-clamp-1">{next.name}</span>
                </Link>
              </div>
            </motion.div>

            {/* Details */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-8">

              {/* Specs */}
              <div>
                <h2 className="mb-4 text-xl font-extrabold text-slate-900">Product Specifications</h2>
                <div className="overflow-hidden rounded-2xl shadow-sm" style={{ border: '1px solid #E2E8F0' }}>
                  <table className="w-full">
                    <tbody>
                      {washer.specs.map((spec, i) => (
                        <tr key={spec.label} style={{ backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#F8FAFC' }}>
                          <td className="w-2/5 p-4 text-xs font-bold uppercase tracking-wide text-slate-500" style={{ borderRight: '1px solid #E2E8F0' }}>
                            {spec.label}
                          </td>
                          <td className="p-4 text-sm font-medium text-slate-800">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="mb-4 text-xl font-extrabold text-slate-900">Key Features</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {washer.features.map((f) => (
                    <div key={f} className="flex items-start gap-3 rounded-xl bg-slate-50 p-4" style={{ border: '1px solid #E2E8F0' }}>
                      <FiCheckCircle className="mt-0.5 shrink-0 text-[#0A2540]" size={16} />
                      <span className="text-sm text-slate-700">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h2 className="mb-4 text-xl font-extrabold text-slate-900">Applications</h2>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {washer.applications.map((app) => (
                    <div
                      key={app}
                      className="flex items-center gap-3 rounded-xl border px-4 py-3"
                      style={{ borderColor: NAVY_BORDER, backgroundColor: 'rgba(6,14,26,0.04)' }}
                    >
                      <span className="h-2 w-2 shrink-0 rounded-full bg-[#0A2540]" />
                      <span className="text-sm text-slate-700">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-200">
                <a href={`https://wa.me/91${companyInfo.phone}?text=${encodeURIComponent(`Hi, I need a quote for *${washer.name}*. Please share specifications, sizes, and pricing.`)}`}
                  target="_blank" rel="noreferrer" className="btn-whatsapp">
                  <FiMessageCircle /> Enquire on WhatsApp
                </a>
                <Link to="/catalogue" className="btn-outline-navy">
                  <FiDownload /> Download Catalogue
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OTHER WASHER TYPES — light gray */}
      <section className="pb-16" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container-main pt-12">
          <h2 className="mb-6 text-xl font-extrabold text-slate-900">Other Washer Types</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {washerTypes.filter((w) => w.slug !== slug).map((w) => (
              <Link key={w.id} to={`/washers/${w.slug}`}
                className="group flex items-center gap-4 overflow-hidden rounded-2xl bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                style={{ border: '1px solid #E2E8F0' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(15,40,71,0.35)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#E2E8F0'}
              >
                <img src={w.image} alt={w.name} className="h-16 w-16 shrink-0 rounded-xl object-cover" />
                <div>
                  <p className="font-extrabold text-slate-900 transition-colors group-hover:text-[#0A2540]">{w.name}</p>
                  {w.badge && (
                    <span className="mt-0.5 inline-block rounded-full border border-slate-200 bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                      {w.badge}
                    </span>
                  )}
                  <p className="mt-1 text-xs text-slate-500 line-clamp-1">{w.overview.slice(0, 55)}...</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WasherDetail;
