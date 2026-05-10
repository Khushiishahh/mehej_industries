import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { industries } from '../data/siteData';
import { industrySlug } from '../utils/industrySlug';

const industryData = {
  'Construction & Infrastructure': { image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80', desc: 'Structural bolts & anchors for demanding builds' },
  'Automotive':                    { image: 'https://images.unsplash.com/photo-1567818735868-e71b99932e29?auto=format&fit=crop&w=600&q=80', desc: 'Precision fasteners for automotive assemblies' },
  'Aerospace':                     { image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=600&q=80', desc: 'High-spec fasteners for aircraft components' },
  'Shipbuilding & Marine':         { image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=600&q=80', desc: 'Corrosion-resistant marine grade fasteners' },
  'Oil & Gas':                     { image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80', desc: 'High-pressure rated bolts for oil & gas pipelines' },
  'Heavy Machinery':               { image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80', desc: 'Heavy-duty fasteners for industrial machinery' },
  'Railway':                       { image: 'https://images.unsplash.com/photo-1494515843206-f3117d3f5077?auto=format&fit=crop&w=600&q=80', desc: 'Track & rolling stock fastening solutions' },
  'Energy & Power':                { image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80', desc: 'Fasteners for turbines, panels & power plants' },
  'Electronics & Electrical':      { image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80', desc: 'Miniature screws & precision PCB fasteners' },
  'HVAC':                          { image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80', desc: 'Sheet metal screws & HVAC duct fasteners' },
  'Telecommunications':            { image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80', desc: 'Tower mounting & antenna fastening hardware' },
  'Engineering & Manufacturing':   { image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=600&q=80', desc: 'General engineering & production line fasteners' },
};

const Industries = () => {
  return (
    <section id="industries" className="section-space bg-slate-50/80">
      <div className="container-main">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="section-label">Industries Served</span>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Powering critical sectors across the industrial spectrum.
          </h2>
          <Link
            to="/industries"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            View All Industries <FiArrowRight size={15} />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry, index) => {
            const data = industryData[industry] || { image: '', desc: '' };
            const slug = industrySlug(industry);
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
                    src={data.image}
                    alt=""
                    role="presentation"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/05 transition-all duration-300 group-hover:from-primary/92 group-hover:via-primary/48 group-hover:to-transparent" />
                  <div className="pointer-events-none absolute inset-0 flex flex-col justify-end p-5">
                    <p className="text-sm font-extrabold leading-tight text-white">{industry}</p>
                    <p className="mt-1.5 max-h-0 overflow-hidden text-xs leading-5 text-white/85 opacity-0 transition-all duration-300 group-hover:max-h-14 group-hover:opacity-100">
                      {data.desc}
                    </p>
                    <p className="mt-3 text-[11px] font-bold uppercase tracking-wider text-white/95 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
};

export default Industries;
