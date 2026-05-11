import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiCheckCircle } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { companyInfo } from '../data/siteData';

const VIDEO_ID = 'BkHrQxI2x0Q';

const coreValues = [
  'Trusted manufacturer and exporter of industrial fasteners',
  'Wide range of nuts, bolts, screws, washers, and custom solutions',
  'Stainless steel, carbon steel, alloy steel, and other materials available',
  'Competitive pricing with timely delivery and responsive service',
  'Manufactured as per required industry and quality standards',
];

const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-lg" style={{ aspectRatio: '16/9' }}>
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
          className="absolute inset-0 h-full w-full"
          title={`${companyInfo.name} — company video`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div onClick={() => setPlaying(true)} className="group cursor-pointer">
          <img
            src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
            alt="Company Video"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80';
            }}
          />
          <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.96 }}
              className="flex h-20 w-20 items-center justify-center rounded-full shadow-xl"
              style={{ backgroundColor: '#0F2847' }}
            >
              <FiPlay className="ml-1 text-white" size={34} />
            </motion.div>
            <span className="rounded-full bg-black/50 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
              Watch Company Profile
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="section-space bg-white">
      <div className="container-main">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-16">

          {/* Left — video, then founders photo */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative flex flex-col gap-8 order-last lg:order-first"
          >
            <VideoPlayer />

            <motion.figure
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-md"
            >
              <img
                src="/assets/founders/mehej-founders.jpg"
                alt={`${companyInfo.name} — founders and leadership`}
                className="w-full aspect-[4/3] object-cover object-[center_22%] sm:aspect-[16/10]"
              />
              <figcaption className="border-t border-slate-100 bg-white px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 sm:text-sm">
                Leadership — third generation stewardship of quality and precision
              </figcaption>
            </motion.figure>
          </motion.div>

          {/* Right — our story */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.06 }}
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
              <a href="#contact" className="btn-primary">Contact Us</a>
              <a href="#products" className="btn-outline-primary">Our Products</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
