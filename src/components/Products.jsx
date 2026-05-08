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

/** Same deep navy as landing hero */
const NAVY = '#060E1A';
const NAVY_CARD = '#0A1628';
const NAVY_BORDER = '#1E3A5F';

/** Pill badges on navy Products section — orange titles */
const productsEyebrowClass =
  'inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/15 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-primary';

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
    className="cursor-pointer overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg"
    style={{ border: `1px solid ${NAVY_BORDER}`, backgroundColor: NAVY_CARD }}
  >
    <img src={item.image} alt={item.name} className="h-28 w-full object-cover" />
    <div className="border-t p-3" style={{ borderColor: NAVY_BORDER, backgroundColor: NAVY }}>
      <p className="truncate text-xs font-extrabold text-white">{item.name}</p>
      {item.badge && (
        <span
          className="mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-bold"
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

  const item     = washerTypes[current];
  const prevItem = washerTypes[((current - 1) % n + n) % n];
  const nextItem = washerTypes[(current + 1) % n];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center gap-4">
        {/* Prev mini */}
        <div className="hidden xl:block w-48 shrink-0 opacity-55 hover:opacity-80 transition-opacity">
          <MiniCard item={prevItem} onClick={() => paginate(-1)} />
        </div>

        {/* Main featured card */}
        <div className="relative flex-1 min-w-0">
          {/* Left arrow */}
          <button
            onClick={() => paginate(-1)}
            className="absolute -left-5 top-1/2 z-20 -translate-y-1/2 rounded-full p-3 shadow-sm transition xl:-left-7 hover:bg-white/15 hover:text-white"
            style={{ backgroundColor: NAVY_CARD, border: `1px solid ${NAVY_BORDER}`, color: '#E2E8F0' }}
            aria-label="Previous"
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
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-64 w-full object-cover md:h-[380px] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    {item.badge && (
                      <div className="absolute top-4 left-4 rounded-full border border-white/30 bg-black/50 px-3 py-1 text-xs font-extrabold text-white shadow backdrop-blur-sm">
                        {item.badge}
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 rounded-full bg-black/40 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                      {current + 1} / {n}
                    </div>
                  </div>

                  {/* Content — navy text panel */}
                  <div className="flex flex-col justify-center border-t border-slate-700/80 p-8 md:border-l md:border-t-0 lg:p-10" style={{ backgroundColor: NAVY }}>
                    <div
                      className="inline-flex w-fit rounded-full border border-primary/35 bg-primary/15 px-3 py-1.5 text-xs font-extrabold uppercase tracking-widest text-primary"
                    >
                      Washer Type
                    </div>
                    <h3 className="mt-4 text-2xl font-extrabold text-white lg:text-3xl">{item.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{item.overview}</p>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-xl p-3" style={{ backgroundColor: NAVY_CARD, border: `1px solid ${NAVY_BORDER}` }}>
                        <p className="text-[10px] font-bold uppercase tracking-wide text-primary">Standards</p>
                        <p className="mt-1 text-xs font-semibold text-slate-200">
                          {item.specs.find(s => s.label === 'Standards')?.value || item.specs[1]?.value || '—'}
                        </p>
                      </div>
                      <div className="rounded-xl p-3" style={{ backgroundColor: NAVY_CARD, border: `1px solid ${NAVY_BORDER}` }}>
                        <p className="text-[10px] font-bold uppercase tracking-wide text-primary">Materials</p>
                        <p className="mt-1 text-xs font-semibold text-slate-200">
                          {item.specs.find(s => s.label === 'Materials')?.value?.split(',')[0] || '—'}...
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-slate-300 transition-all group-hover:gap-3 group-hover:text-white">
                      View Full Specifications <FiArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Right arrow */}
          <button
            onClick={() => paginate(1)}
            className="absolute -right-5 top-1/2 z-20 -translate-y-1/2 rounded-full p-3 shadow-sm transition xl:-right-7 hover:bg-white/15 hover:text-white"
            style={{ backgroundColor: NAVY_CARD, border: `1px solid ${NAVY_BORDER}`, color: '#E2E8F0' }}
            aria-label="Next"
          >
            <FiChevronRight size={20} />
          </button>
        </div>

        {/* Next mini */}
        <div className="hidden xl:block w-48 shrink-0 opacity-55 hover:opacity-80 transition-opacity">
          <MiniCard item={nextItem} onClick={() => paginate(1)} />
        </div>
      </div>

      {/* Dots + progress bar */}
      <div className="mt-8 flex flex-col items-center gap-3">
        <div className="flex items-center gap-2.5">
          {washerTypes.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide([i, i > current ? 1 : -1])}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? 32 : 10,
                height: 10,
                backgroundColor: i === current ? '#F8FAFC' : '#475569',
              }}
              aria-label={`Washer type ${i + 1}`}
            />
          ))}
        </div>
        {!paused && (
          <div className="h-0.5 w-40 overflow-hidden rounded-full" style={{ backgroundColor: NAVY_BORDER }}>
            <motion.div
              key={current}
              className="h-full rounded-full bg-slate-300"
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
  <div className="mt-20">
    <div className="mb-8">
      <span className={productsEyebrowClass}>
        Other Products
      </span>
      <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
        Complete fastener range, traded pan-India.
      </h2>
      <p className="mt-2 max-w-lg text-sm leading-7 text-slate-400">
        Beyond washers, we supply bolts, nuts, and screws across all types and grades.
      </p>
    </div>

    <div className="grid gap-5 sm:grid-cols-3">
      {products.map((product, index) => {
        const Icon = product.icon;
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
                <div className="absolute bottom-3 left-4">
                  <div className="rounded-lg border border-white/20 bg-white/15 p-1.5 backdrop-blur-sm w-fit">
                    <Icon className="text-slate-400" size={14} />
                  </div>
                </div>
              </div>
              <div className="flex-1 border-t p-5" style={{ borderColor: NAVY_BORDER, backgroundColor: NAVY }}>
                <h3 className="text-lg font-extrabold text-white transition-colors group-hover:text-slate-200">
                  {product.name}
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-400 line-clamp-2">{product.shortDesc}</p>
                <p className="mt-3 text-xs text-slate-500">{product.types.length} types available</p>
                <div className="mt-3 flex items-center gap-1 text-xs font-bold text-slate-400 opacity-0 transition-opacity group-hover:opacity-100">
                  View All Types <FiArrowRight size={12} />
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
  <section
    id="products"
    className="relative section-space overflow-hidden"
    style={{ backgroundColor: NAVY }}
  >
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.45]"
      style={{
        backgroundImage:
          'radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.06) 1.5px, transparent 0)',
        backgroundSize: '32px 32px',
      }}
    />

    <div className="relative z-10 container-main">
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className={productsEyebrowClass}>
              <FiZap size={12} className="shrink-0" /> Hot Products
            </span>
            <span className={productsEyebrowClass}>Our Speciality</span>
          </div>
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Precision Washers{' '}
            <span className="border-b-2 border-white/25 pb-0.5">Manufactured in India.</span>
          </h2>
          <p className="mt-3 max-w-xl text-base leading-8 text-slate-400">
            We specialise in manufacturing all types of precision washers. Click any card to view
            complete specifications, features, and applications.
          </p>
        </div>
        <a
          href="/catalogue"
          className="btn-outline-white inline-flex shrink-0 items-center gap-2.5 rounded-xl px-6 py-3 text-sm font-bold"
        >
          <FiDownload size={16} />
          Download Catalogue
        </a>
      </div>

      <WasherCarousel />
      <OtherProducts />
    </div>
  </section>
);

export default Products;
