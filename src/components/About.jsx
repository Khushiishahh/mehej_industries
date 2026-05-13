import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { companyInfo } from '../data/siteData';

const coreValues = [
  'Trusted manufacturer and exporter of industrial fasteners',
  'Wide range of nuts, bolts, screws, washers, and custom solutions',
  'Stainless steel, carbon steel, alloy steel, and other materials available',
  'Competitive pricing with timely delivery and responsive service',
  'Manufactured as per required industry and quality standards',
];

const About = () => {
  return (
    <section id="about" className="section-space bg-white">
      <div className="container-main">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-14 xl:gap-16">
          {/* Left — founders photo; column height tracks the copy */}
          <motion.figure
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-md lg:min-h-[min(38rem,calc(100vh-12rem))]"
          >
            <div className="relative min-h-[min(74vw,18.5rem)] flex-1 sm:min-h-[min(62vw,22rem)] lg:min-h-[20rem]">
              <img
                src="/assets/founders/mehej-founders.jpg"
                alt={`${companyInfo.name} — founders and leadership`}
                className="absolute inset-0 h-full w-full object-cover object-[center_22%] lg:object-contain lg:object-center lg:p-4"
              />
            </div>
            <figcaption className="shrink-0 border-t border-slate-100 bg-white px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 sm:text-sm">
              Carrying forward the legacy of 50+ years
            </figcaption>
          </motion.figure>

          {/* Right — story */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.06 }}
            className="flex flex-col justify-center lg:justify-start"
          >
            <SectionHeading
              eyebrow="About Us"
              title="India's trusted fastener manufacturer and supplier."
            />

            <p className="text-base leading-8 text-slate-600">{companyInfo.about}</p>
            <p className="mt-4 text-base leading-8 text-slate-600">{companyInfo.description}</p>

            <ul className="mt-8 space-y-3">
              {coreValues.map((val) => (
                <li key={val} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                  <FiCheckCircle className="mt-0.5 shrink-0 text-primary" size={17} />
                  {val}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Contact Us
              </a>
              <a href="#products" className="btn-outline-primary">
                Our Products
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
