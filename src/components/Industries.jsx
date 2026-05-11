import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { industries } from '../data/siteData';
import { industrySlug, industryAssetImage } from '../utils/industrySlug';

const industryData = {
  'Construction & Infrastructure': { desc: 'Structural bolts & anchors for demanding builds' },
  Automotive: { desc: 'Precision fasteners for automotive assemblies' },
  Aerospace: { desc: 'High-spec fasteners for aircraft components' },
  'Shipbuilding & Marine': { desc: 'Corrosion-resistant marine grade fasteners' },
  'Oil & Gas': { desc: 'High-pressure rated bolts for oil & gas pipelines' },
  'Heavy Machinery': { desc: 'Heavy-duty fasteners for industrial machinery' },
  Railway: { desc: 'Track & rolling stock fastening solutions' },
  'Energy & Power': { desc: 'Fasteners for turbines, panels & power plants' },
  'Electronics & Electrical': { desc: 'Miniature screws & precision PCB fasteners' },
  HVAC: { desc: 'Sheet metal screws & HVAC duct fasteners' },
  Telecommunications: { desc: 'Tower mounting & antenna fastening hardware' },
  'Engineering & Manufacturing': { desc: 'General engineering & production line fasteners' },
};

const FALLBACK_INDUSTRY_IMG = '/assets/industries/engineering-and-manufacturing-industry.png';

const Industries = () => (
  <section id="industries" className="section-space bg-slate-50/80">
    <div className="container-main">
      <div className="mb-12 flex flex-col items-center text-center">
        <span className="section-label">Industries Served</span>
        <h2 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Powering critical sectors across the industrial spectrum.
        </h2>
        <Link
          to="/industries"
          className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-primary underline-offset-4 hover:underline"
        >
          View All Industries <FiArrowRight size={15} />
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {industries.map((industry, index) => {
          const data = industryData[industry] || { desc: '' };
          const slug = industrySlug(industry);
          const src = industryAssetImage(industry);
          return (
            <motion.div
              key={industry}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="h-full"
            >
              <Link
                to={`/industries#${slug}`}
                aria-label={`View ${industry} on Industries page`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm outline-none ring-primary/0 transition-all hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="relative h-36 w-full shrink-0 overflow-hidden bg-slate-200 sm:h-40 md:h-44">
                  <img
                    src={src}
                    alt=""
                    role="presentation"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = FALLBACK_INDUSTRY_IMG;
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-70" />
                </div>
                <div className="flex min-h-0 flex-1 flex-col px-4 py-3.5 sm:px-4 sm:py-4">
                  <h3 className="text-center text-[0.9rem] font-extrabold leading-snug text-slate-900 transition-colors group-hover:text-primary sm:text-[0.97rem] [text-wrap:balance]">
                    {industry}
                  </h3>
                  <p className="mt-2 flex-1 text-center text-[12px] leading-snug text-slate-600 [text-wrap:pretty] line-clamp-3 sm:text-sm sm:leading-relaxed md:line-clamp-4">
                    {data.desc}
                  </p>
                  <div className="mt-3 flex items-center justify-center gap-1.5 border-t border-slate-100 pt-3 text-xs font-bold uppercase tracking-wide text-slate-500 transition-colors group-hover:text-primary">
                    <span>View sector</span>
                    <FiArrowRight size={13} aria-hidden />
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Industries;
