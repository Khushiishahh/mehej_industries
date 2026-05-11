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

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
            >
              <Link
                to={`/industries#${slug}`}
                aria-label={`View ${industry} on Industries page`}
                className="group relative block overflow-hidden rounded-2xl outline-none ring-primary/0 transition-shadow focus-visible:ring-2 focus-visible:ring-primary"
                style={{ height: '200px' }}
              >
                <img
                  src={src}
                  alt=""
                  role="presentation"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = FALLBACK_INDUSTRY_IMG;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/05 transition-all duration-300 group-hover:from-primary/92 group-hover:via-primary/48 group-hover:to-transparent" />
                <div className="pointer-events-none absolute inset-0 flex flex-col justify-end p-6">
                  <p className="text-base font-extrabold leading-tight text-white">{industry}</p>
                  <p className="mt-1.5 max-h-0 overflow-hidden text-sm leading-5 text-white/85 opacity-0 transition-all duration-300 group-hover:max-h-16 group-hover:opacity-100">
                    {data.desc}
                  </p>
                  <p className="mt-3 text-sm font-bold uppercase tracking-wider text-white/95 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View details <FiArrowRight className="inline align-text-bottom" size={13} aria-hidden />
                  </p>
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
