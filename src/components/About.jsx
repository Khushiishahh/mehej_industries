import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiCheckCircle } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { companyInfo } from '../data/siteData';

const VIDEO_ID = 'BkHrQxI2x0Q';

const coreValues = [
  "India's premier washer manufacturer — plain, spring, structural and custom types",
  'Reliable supply of screws, nuts and bolts across India',
  'Competitive pricing backed by timely dispatch and responsive service',
  'Manufactured to ASTM, DIN, BS, GB, IS and all international standards',
  'Carbon steel, stainless steel, brass, copper, aluminium — all materials available',
];

const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-lg" style={{ aspectRatio: '16/9' }}>
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
          className="absolute inset-0 h-full w-full"
          title="Mehej Fasteners Company Video"
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
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* VIDEO */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="relative order-last lg:order-first"
          >
            <VideoPlayer />

            {/* Floating badge — orange */}
            <div
              className="absolute -bottom-5 -right-4 hidden rounded-2xl border border-white/15 px-6 py-4 text-white shadow-lg sm:block"
              style={{ backgroundColor: '#7c2d12' }}
            >
              <p className="text-3xl font-extrabold text-white">50+</p>
              <p className="mt-0.5 text-sm text-white/90">Years of Legacy</p>
            </div>

            {/* Est. badge */}
            <div
              className="absolute -top-4 -left-4 hidden rounded-xl bg-white px-5 py-3 shadow-md sm:block"
              style={{ border: '1px solid rgba(249, 115, 22, 0.25)' }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Est.</p>
              <p className="text-xl font-extrabold text-slate-900">1970</p>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <SectionHeading
              eyebrow="About Us"
              title="India's trusted washer manufacturer and fastener supplier."
            />

            <p className="text-base leading-8 text-slate-600">{companyInfo.about}</p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              We specialize in the{' '}
              <span className="font-semibold text-slate-900">manufacturing and supply of precision washers</span>{' '}
              across India, while also trading in all types of industrial fasteners including bolts, screws,
              and nuts to serve complete fastening requirements.
            </p>

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
