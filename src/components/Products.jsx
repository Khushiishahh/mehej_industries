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

/* ─── Slide variants — short travel so narrow viewports don’t feel jumpy ─── */
const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 56 : -56, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
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
            className="absolute left-1 top-1/2 z-30 -translate-y-1/2 rounded-full p-2 shadow-lg backdrop-blur-sm transition hover:bg-white/10 hover:text-white min-[400px]:left-[-0.2rem] sm:left-[-0.5rem] md:p-3 md:left-[-0.75rem] xl:left-[-1rem]"
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
              transition={{ duration: 0.42, ease: [0.22, 0.08, 0.24, 1] }}
            >
              <Link
                to={`/washers/${item.slug}`}
                className="group block overflow-hidden rounded-2xl transition-all hover:shadow-xl sm:rounded-3xl"
                style={{ border: `1px solid ${NAVY_BORDER}`, backgroundColor: NAVY_CARD }}
              >
                <div
                  className="grid grid-cols-[minmax(0,36%)_minmax(0,1fr)] items-stretch min-[400px]:grid-cols-[minmax(0,38%)_minmax(0,1fr)] sm:grid-cols-[minmax(0,42%)_minmax(0,1fr)] md:grid-cols-[minmax(0,44%)_minmax(0,1fr)] max-sm:h-auto max-sm:min-h-0 max-sm:max-h-none sm:h-[18.875rem] sm:min-h-[18.875rem] sm:max-h-[18.875rem] md:h-[19.875rem] md:min-h-[19.875rem] md:max-h-[19.875rem] lg:h-[20.5rem] lg:min-h-[20.5rem] lg:max-h-[20.5rem]"
                >
                  <div className="relative isolate min-h-[10rem] min-w-0 overflow-hidden bg-slate-100 max-sm:self-stretch sm:min-h-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full min-h-[10rem] w-full object-contain object-center p-2 transition-transform duration-700 max-sm:min-h-[11rem] min-[400px]:p-2.5 sm:min-h-0 sm:p-4 md:p-5 group-hover:scale-[1.02]"
                    />
                    {item.badge && (
                      <div className="absolute left-1.5 top-1.5 z-[2] max-w-[calc(100%-0.75rem)] truncate rounded-full border border-slate-200/90 bg-white/95 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-slate-700 shadow-sm min-[400px]:left-2 min-[400px]:top-2 min-[400px]:px-2.5 min-[400px]:text-xs sm:px-3 sm:py-1 sm:text-[11px] md:text-sm">
                        {item.badge}
                      </div>
                    )}
                  </div>

                  <div
                    className="flex min-w-0 flex-col gap-2 border-l border-slate-700/80 px-3 py-3 max-sm:h-auto max-sm:overflow-visible sm:isolate sm:h-full sm:min-h-0 sm:gap-2 sm:overflow-hidden sm:px-4 sm:py-4 md:px-5 md:py-4 lg:px-6"
                    style={{ backgroundColor: NAVY }}
                  >
                    <div className="relative z-10 shrink-0 bg-[#060E1A]">
                      <div className="inline-flex max-w-full rounded-full border border-primary/35 bg-primary/15 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-widest text-primary min-[400px]:px-2.5 min-[400px]:text-[10px] sm:px-3 sm:py-1 sm:text-xs">
                        Washer Type
                      </div>
                      <h3 className="mt-1.5 break-words text-[0.92rem] font-extrabold leading-tight text-white min-[400px]:text-[1.02rem] sm:mt-1.5 sm:line-clamp-2 sm:text-lg md:text-xl lg:text-[1.55rem]">
                        {item.name}
                      </h3>
                    </div>

                    <div className="relative z-10 min-h-0 min-w-0 max-sm:shrink-0 sm:flex-[1_1_0] sm:min-h-0 sm:overflow-hidden">
                      <p className="overflow-hidden break-words text-[10px] leading-relaxed text-slate-300 min-[400px]:text-[11px] max-sm:block max-sm:pb-0.5 max-sm:line-clamp-none sm:h-full sm:min-h-0 sm:text-[13px] sm:leading-snug sm:line-clamp-3 md:text-sm md:line-clamp-4 md:leading-relaxed">
                        {item.overview}
                      </p>
                    </div>

                    <div
                      className="relative z-20 grid shrink-0 grid-cols-2 gap-2 bg-[#060E1A] pt-1 min-[400px]:gap-2.5 sm:gap-2 sm:pt-0.5 md:gap-2.5 sm:shadow-[0_-14px_16px_-4px_rgb(6,14,26)]"
                    >
                      <div
                        className="flex min-w-0 flex-col rounded-lg bg-[#0A1628] p-2 sm:min-h-0 sm:overflow-hidden sm:rounded-xl sm:p-2.5 md:p-2.5"
                        style={{ border: `1px solid ${NAVY_BORDER}` }}
                      >
                        <p className="shrink-0 text-[9px] font-bold uppercase tracking-wide text-primary sm:text-[10px] md:text-xs">
                          Standards
                        </p>
                        <p className="mt-1 break-words text-[10px] font-semibold leading-snug text-slate-100 sm:mt-0.5 sm:line-clamp-3 sm:text-xs md:text-[13px]">
                          {item.specs.find((s) => s.label === 'Standards')?.value || item.specs[1]?.value || 'N/A'}
                        </p>
                      </div>
                      <div
                        className="flex min-w-0 flex-col rounded-lg bg-[#0A1628] p-2 sm:min-h-0 sm:overflow-hidden sm:rounded-xl sm:p-2.5 md:p-2.5"
                        style={{ border: `1px solid ${NAVY_BORDER}` }}
                      >
                        <p className="shrink-0 text-[9px] font-bold uppercase tracking-wide text-primary sm:text-[10px] md:text-xs">
                          Materials
                        </p>
                        <p className="mt-1 break-words text-[10px] font-semibold leading-snug text-slate-100 sm:mt-0.5 sm:line-clamp-3 sm:text-xs md:text-[13px]">
                          {item.specs.find((s) => s.label === 'Materials')?.value || 'N/A'}
                        </p>
                      </div>
                    </div>

                    <div className="relative z-20 flex shrink-0 items-center gap-1 border-t border-white/5 bg-[#060E1A] pt-2 text-[10px] font-extrabold leading-none text-slate-200 transition-all group-hover:gap-1.5 group-hover:text-white max-sm:mt-auto sm:pt-1.5 sm:text-xs md:text-sm">
                      <span className="min-w-0 truncate">Full specs</span>
                      <FiArrowRight className="shrink-0" size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={() => paginate(1)}
            className="absolute right-1 top-1/2 z-30 -translate-y-1/2 rounded-full p-2 shadow-lg backdrop-blur-sm transition hover:bg-white/10 hover:text-white min-[400px]:right-[-0.2rem] sm:right-[-0.5rem] md:p-3 md:right-[-0.75rem] xl:right-[-1rem]"
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
          <h2 className="text-[1.65rem] font-extrabold leading-snug tracking-tight text-white min-[480px]:text-3xl md:text-4xl lg:text-5xl lg:leading-[1.1]">
            Precision washers manufactured in India.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl">
          Explore our range of precision engineered washers designed for diverse industrial applications.          </p>
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
