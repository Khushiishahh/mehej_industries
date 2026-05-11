import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCheckCircle, FiMessageCircle, FiDownload } from 'react-icons/fi';
import { products, companyInfo } from '../data/siteData';
import DarkMeshBackground from '../components/DarkMeshBackground';

const typeImagePools = {
  bolts: [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1531834685032-c34bf6d64b27?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=400&q=80',
  ],
  nuts: [
    'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1531834685032-c34bf6d64b27?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=400&q=80',
  ],
  screws: [
    'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1531834685032-c34bf6d64b27?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=400&q=80',
  ],
};
const defaultPool = typeImagePools.bolts;

function typeEntryLabel(type) {
  return typeof type === 'string' ? type : type?.name ?? '';
}

/** Per-variant image: explicit file in `public/assets/{category}/` overrides mergeTypeImages placeholders. */
function resolveTypeImage(product, index, imgPool) {
  const row = product.types[index];
  const direct = typeof row === 'object' && row?.image;
  if (direct) return direct;
  if (product.typeImages?.[index]) return product.typeImages[index];
  return imgPool[index % imgPool.length];
}

const HERO_BG_MESH = '#060E1A';
const BRAND_NAVY = '#060E1A';
const BRAND_BORDER = '#1E3A5F';

const ProductDetail = () => {
  const { slug }   = useParams();
  const navigate   = useNavigate();
  const product    = products.find((p) => p.slug === slug);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [slug]);

  const goBackToProducts = (e) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => { document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' }); }, 150);
  };

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center bg-white">
        <h1 className="text-3xl font-extrabold text-slate-900">Product not found.</h1>
        <button onClick={() => navigate('/')} className="btn-primary">Back to Home</button>
      </div>
    );
  }

  const imgPool = typeImagePools[slug] || defaultPool;
  const typeImg = (i) => resolveTypeImage(product, i, imgPool);

  return (
    <div className="min-h-screen bg-white">

      {/* BREADCRUMB */}
      <div className="bg-white border-b border-slate-200">
        <div className="container-main py-3">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <button onClick={() => navigate('/')} className="hover:text-[#0A2540] transition">Home</button>
            <span className="text-slate-300">/</span>
            <button onClick={goBackToProducts} className="hover:text-[#0A2540] transition">Products</button>
            <span className="text-slate-300">/</span>
            <span className="font-semibold text-slate-800">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* PRODUCT HERO — same navy + mesh as Knowledge Base */}
      <section className="relative overflow-hidden" style={{ backgroundColor: HERO_BG_MESH }}>
        <DarkMeshBackground />
        <div className="pointer-events-none absolute top-0 left-0 right-0 z-[1] h-[3px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.35) 40%, rgba(255,255,255,0.35) 60%, transparent)' }} />
        <div className="container-main relative z-10 py-10 lg:py-14">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <button
              onClick={goBackToProducts}
              className="mb-6 inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm text-slate-300 transition hover:text-white hover:border-slate-400"
              style={{ borderColor: 'rgba(255,255,255,0.20)' }}
            >
              <FiArrowLeft size={16} /> Back to Products
            </button>

            <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
              {product.name}
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-300 max-w-lg">{product.intro}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/91${companyInfo.phone}?text=${encodeURIComponent(`Hi, I'd like to enquire about your ${product.name} range.`)}`}
                target="_blank" rel="noreferrer"
                className="btn-whatsapp"
              >
                <FiMessageCircle /> Get a Quote on WhatsApp
              </a>
              <a href="/catalogue" className="btn-primary">
                <FiDownload /> Download Catalogue
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TYPES — white background */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                {product.name} Types
              </h2>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-bold text-slate-700">
                {product.types.length} variants available
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {product.types.map((type, i) => (
                <motion.div
                  key={`${product.slug}-${i}-${typeEntryLabel(type)}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: (i % 6) * 0.06 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group overflow-hidden rounded-2xl bg-white transition-all duration-300 cursor-default hover:shadow-md"
                  style={{ border: '1px solid #E2E8F0' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(15,40,71,0.35)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E8F0'; }}
                >
                  <div className="relative flex aspect-[5/4] w-full items-center justify-center border-b border-slate-100 bg-slate-50 p-3 sm:aspect-square sm:p-3.5">
                    <img
                      src={typeImg(i)}
                      alt={typeEntryLabel(type)}
                      className="max-h-full max-w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                      onError={(e) => {
                        const el = e.currentTarget;
                        if (el.dataset.fallback === '1') return;
                        el.dataset.fallback = '1';
                        el.src = product.image;
                      }}
                    />
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ background: 'linear-gradient(to top, rgba(10,37,64,0.12) 0%, transparent 55%)' }}
                    />
                  </div>
                  <div className="p-3.5 sm:p-4">
                    <p className="text-sm font-extrabold leading-snug text-slate-800 sm:text-base group-hover:text-[#0A2540] transition-colors line-clamp-2">
                      {typeEntryLabel(type)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SPECIFICATIONS + APPLICATIONS — light gray */}
      <section className="py-8 pb-16 lg:pb-24" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container-main">
          <div className="grid gap-6 lg:grid-cols-3">

            {/* Applications */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border p-7 lg:col-span-1"
              style={{ backgroundColor: BRAND_NAVY, borderColor: BRAND_BORDER }}
            >
              <h2 className="mb-5 text-xl font-extrabold text-white">Applications</h2>
              <div className="space-y-3">
                {product.applications.map((app) => (
                  <div
                    key={app}
                    className="flex items-center gap-3 rounded-xl border px-4 py-2.5 text-sm font-medium text-slate-200"
                    style={{ borderColor: 'rgba(255,255,255,0.12)', backgroundColor: 'rgba(255,255,255,0.06)' }}
                  >
                    <FiCheckCircle className="shrink-0 text-slate-400" size={15} />
                    {app}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="rounded-2xl bg-white p-7 shadow-sm lg:col-span-2"
              style={{ border: '1px solid #E2E8F0' }}
            >
              <h2 className="mb-5 text-xl font-extrabold text-slate-900">Specifications</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {product.specs.map((spec) => (
                  <div key={spec} className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3" style={{ border: '1px solid #E2E8F0' }}>
                    <FiCheckCircle className="mt-0.5 shrink-0 text-[#0A2540]" size={16} />
                    <span className="text-sm leading-6 text-slate-700">{spec}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 flex flex-col items-center gap-6 rounded-2xl border px-8 py-8 text-center sm:flex-row sm:justify-between sm:text-left bg-white"
            style={{ borderColor: '#CBD5E1', borderWidth: 1 }}
          >
            <div>
              <p className="text-lg font-extrabold text-slate-900">Need a custom specification?</p>
              <p className="mt-1 text-sm text-slate-500">
                Our team will help you find the right size, material, and standard.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a href={`https://wa.me/91${companyInfo.phone}`} target="_blank" rel="noreferrer"
                className="btn-whatsapp">
                <FiMessageCircle /> WhatsApp Us
              </a>
              <a href={`mailto:${companyInfo.email}`} className="btn-outline-navy">
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
