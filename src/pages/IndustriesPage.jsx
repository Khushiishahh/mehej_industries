import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { companyInfo } from '../data/siteData';
import { industrySlug } from '../utils/industrySlug';

const HERO_BG = '#0A1628';
const ORANGE  = '#F97316';

const industryDetails = [
  { name: 'Construction & Infrastructure', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80', desc: 'Construction projects demand fasteners with exceptional load-bearing capacity, weather resistance, and dimensional precision. We supply structural hex bolts, anchor bolts, and high-tensile hardware for buildings, bridges, and infrastructure projects.', products: ['Structural Hex Bolts (Grade 8.8/10.9)', 'Anchor Bolts', 'Heavy Hex Nuts', 'Structural Washers F436', 'Threaded Rods'] },
  { name: 'Automotive', image: 'https://images.unsplash.com/photo-1567818735868-e71b99932e29?auto=format&fit=crop&w=900&q=80', desc: 'The automotive industry requires fasteners that withstand vibration, thermal cycling, and high-stress loads. Our precision-grade fasteners meet OEM specifications for engine assemblies, chassis components, and interior fittings.', products: ['High Tensile Bolts', 'Flanged Nuts', 'Lock Nuts', 'Socket Head Cap Screws', 'Self Tapping Screws'] },
  { name: 'Aerospace', image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=900&q=80', desc: 'Aerospace applications demand the highest precision tolerances, material certifications, and traceability. Our aerospace-grade fasteners meet the strictest international standards for critical flight components.', products: ['Titanium Bolts', 'Precision Socket Screws', 'Aircraft Grade Nuts', 'Close Tolerance Bolts', 'Locking Fasteners'] },
  { name: 'Shipbuilding & Marine', image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=900&q=80', desc: 'Marine environments impose severe challenges including saltwater corrosion, biofouling, and extreme loads. Our marine-grade stainless steel fasteners provide long-term reliability in offshore and vessel applications.', products: ['SS 316 Bolts & Nuts', 'Marine Grade Washers', 'Flanged Bolts', 'U-Bolts', 'Eye Bolts'] },
  { name: 'Oil & Gas', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80', desc: 'Oil and gas installations require fasteners rated for high pressure, high temperature, and corrosive media. We supply API and ASTM grade fasteners for pipeline flanges, pressure vessels, and drilling equipment.', products: ['Stud Bolts with Nuts', 'ASTM A193 B7 Bolts', 'Heavy Hex Nuts A194 2H', 'B16.5 Flange Bolts', 'Spiral Wound Gaskets'] },
  { name: 'Heavy Machinery', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80', desc: 'Heavy machinery manufacturing requires robust fasteners that withstand constant vibration, shock loads, and mechanical stress. Our Grade 10.9 and 12.9 bolts are engineered for demanding assembly line applications.', products: ['Grade 10.9 Hex Bolts', 'Grade 12.9 Socket Screws', 'Lock Washers', 'Prevailing Torque Nuts', 'T-Slot Bolts'] },
  { name: 'Railway', image: 'https://images.unsplash.com/photo-1494515843206-f3117d3f5077?auto=format&fit=crop&w=900&q=80', desc: 'Railway track and rolling stock fasteners must endure cyclic fatigue, vibration, and weathering over decades of service. We supply track bolts, fish bolts, and coach screws to railway standards.', products: ['Track Bolts & Nuts', 'Fish Bolts', 'Coach Screws', 'Spring Washers', 'Nyloc Lock Nuts'] },
  { name: 'Energy & Power', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80', desc: 'Power generation facilities, from thermal plants to solar farms, need fasteners that perform reliably in thermal cycling, outdoor exposure, and high-vibration environments across decades of operation.', products: ['Structural Bolts', 'Solar Panel Mounting Bolts', 'Flange Bolts', 'Hex Nuts', 'Serrated Washers'] },
  { name: 'Electronics & Electrical', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80', desc: 'Electronics manufacturing demands miniature, precisely machined fasteners with consistent thread quality. Our machine screws and standoffs meet the stringent requirements of PCB assembly, panel mounting, and enclosure fastening.', products: ['Miniature Machine Screws', 'Standoffs', 'Brass Inserts', 'CSK Phillips Screws', 'Pan Head Machine Screws'] },
  { name: 'HVAC', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80', desc: 'HVAC systems require sheet metal screws, self-tapping fasteners, and duct hardware that install quickly and hold securely in thin gauge materials across a range of temperatures and environmental conditions.', products: ['Self Tapping Screws', 'Hex Head Sheet Metal Screws', 'Wafer Head Screws', 'Tek Screws', 'Duct Fasteners'] },
  { name: 'Telecommunications', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80', desc: 'Telecommunications tower and equipment installations require fasteners with corrosion resistance, vibration locking, and dimensional precision for both indoor cabinet and outdoor tower mounting applications.', products: ['Stainless U-Bolts', 'Flange Bolts', 'Lock Nuts', 'Spring Washers', 'Tower Hardware Sets'] },
  { name: 'Engineering & Manufacturing', image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80', desc: 'General engineering and manufacturing encompasses a broad range of fastener requirements. We supply standard and custom fasteners for production lines, tooling, jigs, fixtures, and general assembly.', products: ['Socket Head Cap Screws', 'Hex Bolts & Nuts', 'Washers', 'Set Screws', 'Custom Machined Fasteners'] },
];

const IndustriesPage = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (pathname !== '/industries' || !hash) return;
    const id = decodeURIComponent(hash.replace(/^#/, '').trim());
    if (!id) return;
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 260);
    return () => window.clearTimeout(t);
  }, [pathname, hash, key]);

  return (
  <div className="min-h-screen bg-white">

    {/* HERO — dark banner */}
    <section className="relative overflow-hidden py-24 lg:py-32" style={{ backgroundColor: HERO_BG }}>
      <div className="absolute inset-0 opacity-20">
        <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80" alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${HERO_BG} 40%, transparent)` }} />
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: `linear-gradient(90deg, transparent, ${ORANGE} 40%, ${ORANGE} 60%, transparent)` }} />
      <div className="relative z-10 container-main">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="section-label">Industries We Serve</span>
          <h1 className="mt-2 max-w-2xl text-4xl font-extrabold text-white lg:text-5xl">
            Powering 12 critical industrial sectors.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
            From construction to aerospace, our fasteners are trusted across industries where precision, reliability, and performance are non-negotiable.
          </p>
        </motion.div>
      </div>
    </section>

    {/* INDUSTRIES GRID — white */}
    <section className="section-space bg-white">
      <div className="container-main">
        <div className="grid gap-8">
          {industryDetails.map((ind, i) => (
            <motion.div
              key={ind.name}
              id={industrySlug(ind.name)}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
              className="scroll-mt-[88px] overflow-hidden rounded-3xl shadow-sm"
              style={{ border: '1px solid #E2E8F0' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(249,115,22,0.30)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#E2E8F0'}
            >
              <div className={`grid lg:grid-cols-[2fr_3fr] ${i % 2 === 1 ? 'lg:grid-cols-[3fr_2fr]' : ''}`}>
                {/* Image */}
                <div className={`relative overflow-hidden ${i % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <img
                    src={ind.image}
                    alt=""
                    role="presentation"
                    className="h-64 min-h-[16rem] w-full object-cover lg:h-full"
                    onError={(e) => {
                      e.target.src =
                        'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center bg-white p-8 lg:p-10">
                  <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 lg:text-3xl">{ind.name}</h2>
                  <p className="mt-4 text-base leading-7 text-slate-600">{ind.desc}</p>
                  <div className="mt-6">
                    <h4 className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: ORANGE }}>
                      Recommended Products
                    </h4>
                    <ul className="space-y-2">
                      {ind.products.map((p) => (
                        <li key={p} className="flex items-center gap-2.5 text-sm text-slate-700">
                          <FiCheckCircle className="shrink-0" style={{ color: ORANGE }} size={15} />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={`https://wa.me/91${companyInfo.phone}?text=${encodeURIComponent(`Hi, I need fasteners for the ${ind.name} industry. Please advise.`)}`}
                    target="_blank" rel="noreferrer"
                    className="btn-primary mt-6 w-fit"
                  >
                    Enquire for {ind.name.split(' ')[0]} <FiArrowRight />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA — orange */}
    <section className="py-20" style={{ backgroundColor: ORANGE }}>
      <div className="container-main text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Don't see your industry?</h2>
        <p className="mt-3 text-lg text-white/85">We supply fasteners for virtually any industrial application. Contact us with your specific requirement.</p>
        <a href={`https://wa.me/91${companyInfo.phone}`} target="_blank" rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2.5 rounded-lg px-8 py-4 text-sm font-bold uppercase tracking-wide"
          style={{ backgroundColor: '#0A1628', color: '#ffffff' }}>
          Tell Us Your Requirement <FiArrowRight />
        </a>
      </div>
    </section>
  </div>
  );
};

export default IndustriesPage;
