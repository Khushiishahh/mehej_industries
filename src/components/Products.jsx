import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiChevronLeft,
  FiChevronRight,
  FiArrowRight,
  FiZap,
  FiDownload,
} from 'react-icons/fi';
import { washerTypes, products } from '../data/siteData';
import DarkMeshBackground from './DarkMeshBackground';

/** Same deep navy as landing hero */
const NAVY = '#060E1A';
const NAVY_CARD = '#0A1628';
const NAVY_BORDER = '#1E3A5F';

/** Section pills — on navy / dark blue */
const productsEyebrowClass =
  'inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/[0.14] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-primary';

/* ─── Slide variants ─── */
const slideVariants = {
  enter:  (dir) => ({ x: dir > 0 ? 320 : -320, opacity: 0, scale: 0.95 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit:   (dir) => ({ x: dir > 0 ? -320 : 320, opacity: 0, scale: 0.95 }),
};

/* ─── Mini side card ─── */
const MiniCard = ({ item, onClick }) => (
  <div
    onClick={onClick}
    onKeyDown={(e) => e.key === 'Enter' && onClick()}
    role="button"
    tabIndex={0}
    className="cursor-pointer overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg"
    style={{ border: `1px solid ${NAVY_BORDER}`, backgroundColor: NAVY_CARD }}
  >
    <img src={item.image} alt={item.name} className="h-36 w-full object-cover object-center" />
    <div className="border-t px-3.5 py-3" style={{ borderColor: NAVY_BORDER, backgroundColor: NAVY }}>
      <p className="truncate text-sm font-extrabold text-white">{item.name}</p>
      {item.badge && (
        <span
          className="mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-bold"
          style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#E8EDF5', border: '1px solid rgba(255,255,255,0.22)' }}
        >
          {item.badge}
        </span>
      )}
    </div>
  </div>
);

/* ─── HOT PRODUCTS — Washer Carousel ─── */
const WasherCarousel = () => {
  const [[current, direction], setSlide] = useState([0, 1]);
  const [paused, setPaused] = useState(false);
  const n = washerTypes.length;

  const paginate = useCallback(
    (dir) => setSlide(([curr]) => [((curr + dir) % n + n) % n, dir]),
    [n]
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => paginate(1), 3800);
    return () => clearInterval(t);
  }, [paused, paginate]);

  const item = washerTypes[current];
  const prevItem = washerTypes[((current - 1) % n + n) % n];
  const nextItem = washerTypes[(current + 1) % n];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center gap-5 xl:gap-6">
        <div className="hidden w-56 shrink-0 opacity-[0.72] transition-opacity hover:opacity-100 xl:block">
          <MiniCard item={prevItem} onClick={() => paginate(-1)} />
        </div>

        <div className="relative min-w-0 flex-1">
          <button
            type="button"
            onClick={() => paginate(-1)}
            className="absolute -left-3 top-1/2 z-20 -translate-y-1/2 rounded-full p-3 shadow-lg backdrop-blur-sm transition sm:-left-5 xl:-left-7 hover:bg-white/10 hover:text-white"
            style={{
              backgroundColor: 'rgba(10,22,40,0.92)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: '#F1F5F9',
              boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
            }}
            aria-label="Previous washer type"
          >
            <FiChevronLeft size={20} />
          </button>

          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            >
              <Link
                to={`/washers/${item.slug}`}
                className="group block overflow-hidden rounded-3xl transition-all hover:shadow-xl"
                style={{ border: `1px solid ${NAVY_BORDER}`, backgroundColor: NAVY_CARD }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] sm:items-stretch md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
                  {/* Image: fills this cell; photo scales to max size while showing full frame (object-contain) */}
                  <div className="relative isolate h-[220px] w-full overflow-hidden bg-slate-100 sm:h-full sm:min-h-[260px]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="absolute inset-0 h-full w-full object-contain object-center p-4 transition-transform duration-700 sm:p-5 group-hover:scale-[1.02]"
                    />
                    {item.badge && (
                      <div className="absolute left-3 top-3 z-[2] rounded-full border border-slate-200/90 bg-white/95 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-slate-700 shadow-sm sm:left-4 sm:top-4 sm:px-3.5 sm:py-1.5 sm:text-sm">
                        {item.badge}
                      </div>
                    )}
                  </div>

                  <div
                    className="flex min-h-0 flex-col justify-center border-t border-slate-700/80 p-6 sm:border-l sm:border-t-0 sm:p-7 md:p-8 lg:p-9"
                    style={{ backgroundColor: NAVY }}
                  >
                    <div className="inline-flex w-fit rounded-full border border-primary/35 bg-primary/15 px-3 py-1.5 text-xs font-extrabold uppercase tracking-widest text-primary sm:px-4 sm:py-2 sm:text-sm">
                      Washer Type
                    </div>
                    <h3 className="mt-3 text-2xl font-extrabold leading-snug text-white sm:mt-4 sm:text-3xl lg:text-[1.75rem]">{item.name}</h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-300 sm:mt-3 sm:text-base">{item.overview}</p>

                    <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:gap-4">
                      <div className="rounded-xl p-3 sm:p-4" style={{ backgroundColor: NAVY_CARD, border: `1px solid ${NAVY_BORDER}` }}>
                        <p className="text-[10px] font-bold uppercase tracking-wide text-primary sm:text-xs">Standards</p>
                        <p className="mt-1.5 line-clamp-2 text-xs font-semibold leading-snug text-slate-100 sm:mt-2 sm:text-sm">
                          {item.specs.find((s) => s.label === 'Standards')?.value || item.specs[1]?.value || 'N/A'}
                        </p>
                      </div>
                      <div className="rounded-xl p-3 sm:p-4" style={{ backgroundColor: NAVY_CARD, border: `1px solid ${NAVY_BORDER}` }}>
                        <p className="text-[10px] font-bold uppercase tracking-wide text-primary sm:text-xs">Materials</p>
                        <p className="mt-1.5 line-clamp-2 text-xs font-semibold leading-snug text-slate-100 sm:mt-2 sm:text-sm">
                          {item.specs.find((s) => s.label === 'Materials')?.value?.split(',')[0] || 'N/A'}...
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-slate-200 transition-all group-hover:gap-3 group-hover:text-white sm:mt-5 sm:text-base">
                      View Full Specifications <FiArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={() => paginate(1)}
            className="absolute -right-3 top-1/2 z-20 -translate-y-1/2 rounded-full p-3 shadow-lg backdrop-blur-sm transition sm:-right-5 xl:-right-7 hover:bg-white/10 hover:text-white"
            style={{
              backgroundColor: 'rgba(10,22,40,0.92)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: '#F1F5F9',
              boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
            }}
            aria-label="Next washer type"
          >
            <FiChevronRight size={20} />
          </button>
        </div>

        <div className="hidden w-56 shrink-0 opacity-[0.72] transition-opacity hover:opacity-100 xl:block">
          <MiniCard item={nextItem} onClick={() => paginate(1)} />
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-3">
        <div className="flex max-w-full flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {washerTypes.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSlide([i, i > current ? 1 : -1])}
              className="rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#060E1A]"
              style={{
                width: i === current ? 28 : 8,
                height: 8,
                backgroundColor: i === current ? '#F97316' : 'rgba(148,163,184,0.45)',
              }}
              aria-label={`Washer type ${i + 1}`}
            />
          ))}
        </div>
        {!paused && (
          <div className="h-px w-36 overflow-hidden rounded-full bg-white/20 sm:w-44">
            <motion.div
              key={current}
              className="h-full rounded-full bg-gradient-to-r from-primary/90 to-primary"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 3.8, ease: 'linear' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── OTHER PRODUCTS ─── */
const OtherProducts = () => (
  <div className="mt-14 pt-4">
    <div className="mb-10">
      <span className={productsEyebrowClass}>
        Other Products
      </span>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        Complete fastener range, traded pan-India.
      </h2>
      <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-300 lg:text-lg">
        Beyond washers, we supply bolts, nuts, and screws across all types and grades.
      </p>
    </div>

    <div className="grid gap-5 sm:grid-cols-3">
      {products.map((product, index) => {
        return (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
          >
            <Link
              to={`/products/${product.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{ border: `1px solid ${NAVY_BORDER}`, backgroundColor: NAVY_CARD }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              </div>
              <div className="flex-1 border-t p-5 md:p-6" style={{ borderColor: NAVY_BORDER, backgroundColor: NAVY }}>
                <h3 className="text-xl font-extrabold text-white transition-colors group-hover:text-slate-200">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300 line-clamp-2">{product.shortDesc}</p>
                <p className="mt-3 text-sm text-slate-400">{product.types.length} types available</p>
                <div className="mt-3 flex items-center gap-1 text-sm font-bold text-slate-300 opacity-0 transition-opacity group-hover:opacity-100">
                  View All Types <FiArrowRight size={14} />
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  </div>
);

/* ─── MAIN SECTION ─── */
const Products = () => (
  <section id="products" className="relative section-space overflow-hidden text-slate-200" style={{ backgroundColor: NAVY }}>
    <DarkMeshBackground />
    <div className="relative z-10 container-main">
      <div className="mb-12 flex flex-col gap-8 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <div className="mb-5 flex flex-wrap items-center gap-2.5">
            <span className={productsEyebrowClass}>
              <FiZap size={14} className="shrink-0 opacity-90" /> Hot Products
            </span>
            <span className={productsEyebrowClass}>Our Speciality</span>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl sm:leading-[1.1]">
            Precision washers manufactured in India.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300 lg:text-xl">
            Explore our catalogue of washer types below—each opens to full specifications, materials, and applications.
          </p>
        </div>
        <a
          href="/catalogue"
          className="btn-outline-primary inline-flex h-fit shrink-0 items-center gap-2.5 self-start rounded-xl px-7 py-4 text-base font-bold shadow-sm transition hover:shadow md:self-auto lg:self-end"
        >
          <FiDownload size={18} />
          Download catalogue
        </a>
      </div>

      <WasherCarousel />

      <OtherProducts />
    </div>
  </section>
);

export default Products;
