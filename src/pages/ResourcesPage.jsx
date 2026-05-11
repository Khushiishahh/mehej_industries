import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiBookOpen, FiFileText, FiHelpCircle, FiList,
  FiChevronDown, FiCheckCircle, FiArrowRight, FiMessageCircle,
  FiAlertCircle,
} from 'react-icons/fi';
import { companyInfo } from '../data/siteData';
import DarkMeshBackground from '../components/DarkMeshBackground';

const tabs = [
  { id: 'washer', label: 'Washer Guides', icon: FiBookOpen },
  { id: 'fastener', label: 'Fastener Guides', icon: FiFileText },
  { id: 'faq', label: 'FAQs', icon: FiHelpCircle },
  { id: 'glossary', label: 'Glossary', icon: FiList },
];

/* ── Shared UI ────────────────────────────────── */
const SectionTitle = ({ children }) => (
  <h2 className="mb-6 text-xl font-extrabold text-slate-900">{children}</h2>
);

const Tag = ({ children }) => (
  <span className="inline-block rounded-full border border-slate-200 bg-slate-100 px-3 py-0.5 text-xs font-bold text-slate-700">
    {children}
  </span>
);

/* ── Accordion ───────────────────────────────── */
const Accordion = ({ title, tag, children, isOpen, onToggle }) => (
  <div
    className="overflow-hidden rounded-2xl transition-all duration-200"
    style={{
      backgroundColor: '#FFFFFF',
      border: isOpen ? '1px solid rgba(10,37,64,0.35)' : '1px solid #E2E8F0',
    }}
  >
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between gap-4 p-6 text-left"
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className={`font-bold text-base leading-snug ${isOpen ? 'text-[#0A2540]' : 'text-slate-900'}`}>
          {title}
        </span>
        {tag && <Tag>{tag}</Tag>}
      </div>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
        className={`shrink-0 ${isOpen ? 'text-[#0A2540]' : 'text-slate-400'}`}
      >
        <FiChevronDown size={18} />
      </motion.div>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.28 }}
        >
          <div className="px-6 pb-6 pt-5" style={{ borderTop: '1px solid #F1F5F9' }}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

/* ══════════════════════════════════════════════
   TAB 1 — WASHER GUIDES
══════════════════════════════════════════════ */
const WasherGuidesPanel = () => {
  const [open, setOpen] = useState(0);
  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
      {/* Accordions */}
      <div className="space-y-3">
        <Accordion title="Washer Types Explained" tag="Reference" isOpen={open === 0} onToggle={() => toggle(0)}>
          <div className="space-y-4">
            {[
              { name: 'Plain / Flat Washer', std: 'DIN 125, DIN 9021, ISO 7089', desc: 'The most common type. Distributes clamping force over a wider area. Large OD (DIN 9021) variant used when extra bearing surface is needed.' },
              { name: 'Split Lock Washer', std: 'DIN 127', desc: 'Helical coil design creates axial spring force that resists rotational loosening. Best used on hard, smooth mating surfaces.' },
              { name: 'Internal / External Tooth Washer', std: 'DIN 6797', desc: 'Serrated teeth grip the bolt head and mating surface. External type offers higher torque resistance; internal type suits smaller fasteners.' },
              { name: 'Belleville / Disc Spring Washer', std: 'Custom', desc: 'Conical shape allows extremely high spring forces in small axial space. Used for bolt preload maintenance and vibration dampening.' },
              { name: 'Wave Washer', std: 'DIN 137', desc: 'Undulating profile delivers controlled, uniform spring force. Used in bearing preload and precision equipment.' },
              { name: 'Tab Washer', std: 'Custom', desc: 'Bent tabs lock against bolt flats or into slots, providing positive mechanical locking. Used in gearboxes and axle shaft assemblies.' },
              { name: 'Serrated Washer', std: 'DIN 6798', desc: 'Radial serrations on the face bite into mating materials. Available internal, external, or bi-directional. Ideal for electrical grounding.' },
            ].map((w) => (
              <div key={w.name} className="flex items-start gap-3 rounded-xl p-4" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <FiCheckCircle className="mt-0.5 shrink-0 text-[#0A2540]" size={15} />
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-bold text-slate-900">{w.name}</p>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-bold text-slate-600">{w.std}</span>
                  </div>
                  <p className="mt-1 text-xs leading-5 text-slate-600">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Accordion>

        <Accordion title="How to Choose the Right Washer" tag="Beginner" isOpen={open === 1} onToggle={() => toggle(1)}>
          <p className="text-sm leading-7 text-slate-600">
            Selecting the right washer depends on the application, load requirements, and environment. Use this quick reference:
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { type: 'Flat Washer', use: 'Load distribution and surface protection in general assemblies.' },
              { type: 'Spring Washer', use: 'Vibration resistance (ideal for automotive and machinery).' },
              { type: 'Tooth Lock Washer', use: 'Positive locking in electrical and high-vibration applications.' },
              { type: 'Belleville Washer', use: 'High load in compact axial space with controlled spring force.' },
              { type: 'Wave Washer', use: 'Lightweight preload in precision instruments and motors.' },
              { type: 'Sealing Washer', use: 'Watertight seal in plumbing, roofing, and pipelines.' },
            ].map((r) => (
              <div key={r.type} className="rounded-xl p-3" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <p className="text-xs font-extrabold text-[#0A2540]">{r.type}</p>
                <p className="mt-1 text-xs leading-5 text-slate-600">{r.use}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-600">
            <span className="font-semibold text-slate-900">Tip:</span> Always match the washer material to the bolt material to avoid galvanic corrosion.
          </p>
        </Accordion>

        <Accordion title="Material Selection Guide" tag="Important" isOpen={open === 2} onToggle={() => toggle(2)}>
          <div className="overflow-hidden rounded-xl" style={{ border: '1px solid #E2E8F0' }}>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0A2540] text-white">
                  <th className="p-3 text-left text-xs font-bold">Material</th>
                  <th className="p-3 text-left text-xs font-bold">Best For</th>
                  <th className="p-3 text-left text-xs font-bold hidden sm:table-cell">Avoid When</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { mat: 'Carbon Steel (Zinc Plated)', best: 'Indoor, general purpose assemblies', avoid: 'Outdoor, wet or corrosive exposure' },
                  { mat: 'Stainless Steel 202', best: 'Cost-sensitive indoor use, mild corrosion exposure', avoid: 'Marine, aggressive chlorides, long-term coastal' },
                  { mat: 'Stainless Steel 304', best: 'Outdoor, fresh water, food grade', avoid: 'Marine / high chloride environments' },
                  { mat: 'Stainless Steel 316', best: 'Marine, coastal, chemical environments', avoid: 'High-temperature (>500°C)' },
                  { mat: 'Brass', best: 'Electrical, plumbing, decorative', avoid: 'High-load structural joints' },
                  { mat: 'Copper', best: 'Electrical bonding, heat transfer', avoid: 'Acidic or alkaline environments' },
                  { mat: 'Aluminium', best: 'Lightweight / aerospace structures', avoid: 'High clamping force requirements' },
                  { mat: 'Nylon / PTFE', best: 'Electrical insulation, PCB mounting', avoid: 'High-temperature applications' },
                ].map((r, i) => (
                  <tr key={r.mat} style={{ backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#F8FAFC' }}>
                    <td className="p-3 text-xs font-semibold text-slate-900">{r.mat}</td>
                    <td className="p-3 text-xs text-slate-600">{r.best}</td>
                    <td className="p-3 text-xs text-slate-600 hidden sm:table-cell">{r.avoid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Accordion>
      </div>

      {/* Sidebar */}
      <div className="space-y-4">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#0A2540]">Quick Tip</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            For vibrating assemblies, always combine a flat washer (below the spring washer) to protect the mating surface and increase bearing area.
          </p>
        </div>
        <div className="rounded-2xl p-5" style={{ backgroundColor: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.25)' }}>
          <div className="flex items-center gap-2">
            <FiAlertCircle className="shrink-0 text-amber-700" size={16} />
            <p className="text-xs font-extrabold text-amber-900">Material Warning</p>
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Never use carbon steel washers with stainless steel bolts in wet environments: galvanic corrosion will occur at the contact point.
          </p>
        </div>
        <div className="rounded-2xl p-5" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#0A2540]">Need custom sizes?</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            We manufacture washers to exact drawings with tolerances up to ±0.01 mm.
          </p>
          <a
            href={`https://wa.me/91${companyInfo.phone}?text=${encodeURIComponent('Hi, I need a custom washer quote.')}`}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-center gap-2 text-xs font-bold text-[#0A2540] hover:underline"
          >
            <FiMessageCircle size={13} /> Get a Quote →
          </a>
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════
   TAB 2 — FASTENER GUIDES
══════════════════════════════════════════════ */
const FastenerGuidesPanel = () => {
  const [open, setOpen] = useState(0);
  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
      <div className="space-y-3">
        <Accordion title="Bolt Selection" tag="Reference" isOpen={open === 0} onToggle={() => toggle(0)}>
          <div className="space-y-3">
            {[
              { name: 'Hex head bolts (DIN 931 / 933, ISO 4014 / 4017)', desc: 'The standard choice for structural and machine assembly when you have side clearance for a spanner or socket. Partial thread keeps a stronger shank in shear planes; go full thread for thin stacks or long engagement.' },
              { name: 'Flange & hex-flange bolts', desc: 'Integrated washer face spreads load and can reduce part count. Useful where alignment and bearing area matter on sheet metal or painted surfaces.' },
              { name: 'Property class & nut matching', desc: 'Choose grade (e.g. 4.6, 8.8, 10.9) to match design load and standard. The nut must be equal or higher grade than the bolt—never downgrade the nut.' },
              { name: 'Grip length & thread engagement', desc: 'The unthreaded grip should cover the joint stack. Verify minimum thread engagement in tapped holes or with nuts per your drawing or applicable standard.' },
              { name: 'Coarse vs fine pitch', desc: 'Coarse is faster to assemble and most common. Fine pitch suits thin materials, adjustment, and some vibration-sensitive joints—always match male and female threads.' },
            ].map((b) => (
              <div key={b.name} className="flex items-start gap-3 rounded-xl p-3" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0A2540]" />
                <div>
                  <p className="text-sm font-bold text-slate-900">{b.name}</p>
                  <p className="mt-0.5 text-xs leading-5 text-slate-600">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Accordion>

        <Accordion title="Screw Selection" tag="Reference" isOpen={open === 1} onToggle={() => toggle(1)}>
          <div className="space-y-3">
            {[
              { name: 'Machine screws (metric / UNC)', desc: 'Used with threaded holes or nuts in precision assemblies, covers, and instruments. Pick length for full engagement without bottoming out.' },
              { name: 'Sheet-metal & thread-forming screws', desc: 'For thin-gauge steel: cutting or forming threads without a tapped hole. Match point, pitch, and drill size to material thickness and hardness.' },
              { name: 'Wood & chipboard screws', desc: 'Coarse threads and sharp points for timber and panels. Do not substitute these for machine screws in metal structural joints.' },
              { name: 'Self-drilling (tek) screws', desc: 'Drill point pierces steel sheet in one step—common in HVAC, roofing, and cladding. Use the correct washer and load rating for the application.' },
              { name: 'Head style & drive', desc: 'Countersunk when you need a flush surface; pan or cheese heads when height is acceptable. Torx or hex socket drive reduces cam-out versus Phillips under torque.' },
            ].map((s) => (
              <div key={s.name} className="flex items-start gap-3 rounded-xl p-3" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0A2540]" />
                <div>
                  <p className="text-sm font-bold text-slate-900">{s.name}</p>
                  <p className="mt-0.5 text-xs leading-5 text-slate-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Accordion>

        <Accordion title="Bolt Grade & Strength Reference" tag="Essential" isOpen={open === 2} onToggle={() => toggle(2)}>
          <p className="mb-4 text-sm text-slate-600">Metric bolt property classes define both tensile and yield strength:</p>
          <div className="overflow-hidden rounded-xl" style={{ border: '1px solid #E2E8F0' }}>
            <table className="w-full">
              <thead>
                <tr className="bg-[#0A2540] text-white">
                  <th className="p-3 text-left text-xs font-bold">Grade</th>
                  <th className="p-3 text-left text-xs font-bold">Tensile (MPa)</th>
                  <th className="p-3 text-left text-xs font-bold">Yield (MPa)</th>
                  <th className="p-3 text-left text-xs font-bold hidden sm:table-cell">Typical Use</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { g: '4.6', t: '400', y: '240', use: 'Non-critical, general purpose' },
                  { g: '8.8', t: '800', y: '640', use: 'Structural, most common grade' },
                  { g: '10.9', t: '1040', y: '940', use: 'High-strength structural & machinery' },
                  { g: '12.9', t: '1220', y: '1100', use: 'Highest grade, precision & automotive' },
                ].map((r, i) => (
                  <tr key={r.g} style={{ backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#F8FAFC' }}>
                    <td className="p-3 text-sm font-extrabold text-[#0A2540]">{r.g}</td>
                    <td className="p-3 text-sm text-slate-700">{r.t}</td>
                    <td className="p-3 text-sm text-slate-700">{r.y}</td>
                    <td className="p-3 text-xs text-slate-600 hidden sm:table-cell">{r.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-600">
            <span className="font-semibold text-slate-900">Note:</span> Nut grade must match or exceed bolt grade. Grade 8.8 bolt requires a Grade 8 nut; Grade 10.9 requires Grade 10.
          </p>
        </Accordion>

        <Accordion title="Thread Standards (Metric, UNC, BSW)" tag="Reference" isOpen={open === 3} onToggle={() => toggle(3)}>
          <div className="space-y-4">
            {[
              { std: 'Metric ISO (Most Common)', detail: 'Thread pitch expressed in mm. M10 × 1.5 means 10 mm diameter, 1.5 mm between threads. Used globally and as standard in India.', examples: ['M6 × 1.0', 'M8 × 1.25', 'M10 × 1.5', 'M12 × 1.75', 'M16 × 2.0'] },
              { std: 'UNC / UNF (Unified National)', detail: 'Used in USA and legacy equipment. Expressed in TPI (threads per inch). UNC = coarse, UNF = fine.', examples: ['1/4"-20 UNC', '3/8"-16 UNC', '1/2"-13 UNC', '3/4"-10 UNC'] },
              { std: 'BSW / BSF (Whitworth)', detail: 'British standard, largely replaced by metric. Still found in older machinery, railways, and some heritage equipment.', examples: ['1/4" BSW', '3/8" BSW', '1/2" BSW'] },
            ].map((s) => (
              <div key={s.std} className="rounded-xl p-4" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <p className="font-bold text-slate-900">{s.std}</p>
                <p className="mt-1 text-xs leading-5 text-slate-600">{s.detail}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.examples.map((e) => (
                    <span key={e} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-semibold text-slate-700">{e}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Accordion>

        <Accordion title="Surface Finish & Coating Guide" tag="Reference" isOpen={open === 4} onToggle={() => toggle(4)}>
          <div className="overflow-hidden rounded-xl" style={{ border: '1px solid #E2E8F0' }}>
            <table className="w-full">
              <thead>
                <tr className="bg-[#0A2540] text-white">
                  <th className="p-3 text-left text-xs font-bold">Finish</th>
                  <th className="p-3 text-left text-xs font-bold">Protection</th>
                  <th className="p-3 text-left text-xs font-bold hidden sm:table-cell">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { f: 'Zinc Electroplated', p: '72–96 hrs salt spray', b: 'Indoor and mildly outdoor use' },
                  { f: 'Hot Dip Galvanized', p: '500+ hrs salt spray', b: 'Outdoor, infrastructure, civil work' },
                  { f: 'Black Oxide', p: 'Minimal (oil dependent)', b: 'Socket screws, precision parts' },
                  { f: 'Phosphate', p: 'Moderate', b: 'Base coat for paint or oil' },
                  { f: 'Plain / Self Colour', p: 'None', b: 'Indoor, short-term or painted assemblies' },
                  { f: 'Passivated (stainless)', p: 'Excellent', b: 'Stainless steel in corrosive environments' },
                ].map((r, i) => (
                  <tr key={r.f} style={{ backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#F8FAFC' }}>
                    <td className="p-3 text-xs font-semibold text-slate-900">{r.f}</td>
                    <td className="p-3 text-xs text-slate-600">{r.p}</td>
                    <td className="p-3 text-xs text-slate-600 hidden sm:table-cell">{r.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Accordion>

        <Accordion title="Nut Selection Guide" tag="Reference" isOpen={open === 5} onToggle={() => toggle(5)}>
          <div className="space-y-3">
            {[
              { name: 'Hex Nut (DIN 934)', desc: 'Standard nut for all general applications. Available in all grades and materials.' },
              { name: 'Heavy Hex Nut', desc: 'Wider across flats for more bearing surface. Used in structural steel and high-temp applications (ASTM A194).' },
              { name: 'Nyloc Nut (DIN 985)', desc: 'Nylon ring creates friction to prevent loosening. Single-use. Not suitable above 120°C.' },
              { name: 'All-Metal Lock Nut (DIN 980)', desc: 'Deformed thread provides locking without nylon. Suitable for higher temperatures than Nyloc.' },
              { name: 'Flange Nut', desc: 'Built-in washer face distributes load. Reduces component count in assemblies.' },
              { name: 'Castle / Slotted Nut (DIN 935)', desc: 'Used with split pins or wire for positive locking. Common in wheel hubs and axle ends.' },
              { name: 'Coupling Nut (DIN 6334)', desc: 'Extended length for joining two threaded rods or adjusting overall rod length.' },
            ].map((n) => (
              <div key={n.name} className="flex items-start gap-3 rounded-xl p-3" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0A2540]" />
                <div>
                  <p className="text-sm font-bold text-slate-900">{n.name}</p>
                  <p className="mt-0.5 text-xs leading-5 text-slate-600">{n.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Accordion>
      </div>

      {/* Sidebar */}
      <div className="space-y-4">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#0A2540]">Grade Marking</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            On metric bolts, the property class is marked on the head (e.g. "8.8", "10.9"). On nuts, the grade is marked on the flat face.
          </p>
        </div>
        <div className="rounded-2xl p-5" style={{ backgroundColor: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.25)' }}>
          <div className="flex items-center gap-2">
            <FiAlertCircle className="shrink-0 text-amber-700" size={16} />
            <p className="text-xs font-extrabold text-amber-900">Important</p>
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Never mix Metric and UNC/BSW fasteners. The thread forms appear similar but are incompatible and will strip under load.
          </p>
        </div>
        <div className="rounded-2xl p-5" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#0A2540]">Need a specific grade?</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            We supply all grades with material test certificates on request.
          </p>
          <a
            href={`https://wa.me/91${companyInfo.phone}?text=${encodeURIComponent('Hi, I need fasteners with test certificates.')}`}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-center gap-2 text-xs font-bold text-[#0A2540] hover:underline"
          >
            <FiMessageCircle size={13} /> Enquire →
          </a>
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════
   TAB 3 — FAQs
══════════════════════════════════════════════ */
const faqs = [
  { q: 'What is the difference between DIN and ISO standards?', a: 'DIN (Deutsches Institut für Normung) is the German national standard; ISO is the international standard. Most modern DIN fastener standards have been harmonised with ISO equivalents; for example, DIN 933 (hex bolt, full thread) aligns with ISO 4017. We supply to both and can match your specific standard requirement.' },
  { q: 'What material should I choose for outdoor or marine applications?', a: 'For basic outdoor use, zinc-plated carbon steel is sufficient. For humid or coastal environments, grade 304 stainless steel is recommended. For marine, sea water, or chemical plant environments, grade 316 is the correct choice due to its higher molybdenum content which resists chloride-induced corrosion.' },
  { q: 'Can you supply custom sizes and non-standard dimensions?', a: 'Yes, especially for washers, which is our primary manufactured product. We accept drawing-based custom orders with tolerances as tight as ±0.01 mm. Custom bolt lengths, special diameters, non-standard thread pitches, and OEM-specific designs are all possible. Contact us with your drawing or specification.' },
  { q: 'What is the minimum order quantity (MOQ)?', a: 'MOQ varies by product, material, and whether the item is standard or custom. For standard washers and fasteners, we can supply small quantities. For custom-manufactured washers, a minimum batch is typically required depending on tooling. Please share your requirement and we will advise on pricing and MOQ.' },
  { q: 'How do I calculate the correct washer size for a given bolt?', a: 'The washer inner diameter (ID) should be slightly larger than the bolt shank (typically bolt diameter + 0.3 to 0.5 mm). The outer diameter (OD) should be large enough to distribute load without interfering with adjacent features. For soft materials (aluminium, plastic, wood), use DIN 9021 large OD washers. Standard DIN/ISO washer sizes are pre-defined for each bolt size.' },
  { q: 'What is the difference between hot dip galvanizing and zinc electroplating?', a: 'Zinc electroplating deposits a thin (5–15 micron) zinc layer via an electrical process. It produces a smooth, uniform finish and is cost-effective, suitable for indoor and mild outdoor use. Hot dip galvanizing immerses the part in molten zinc, creating a much thicker (45–85 micron) coating that provides significantly better corrosion protection for outdoor and underground applications.' },
  { q: 'Do you provide material test certificates?', a: 'Yes. Material test certificates (MTC) are available on request for standard products. For critical applications (oil & gas, aerospace, structural steelwork) we can provide full mill certification, hardness test reports, dimensional inspection reports, and compliance documentation to the relevant standard.' },
  { q: 'What is the difference between a coarse and fine thread?', a: 'Coarse thread (e.g. M10 × 1.5) has a larger pitch: it assembles faster, is more tolerant of damage, and is better suited to soft materials. Fine thread (e.g. M10 × 1.25) has a smaller pitch: it generates higher clamping force per turn, offers better vibration resistance, and is used in precision applications and thin-walled components.' },
];

const FaqPanel = () => {
  const [open, setOpen] = useState(0);
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
      <div className="space-y-3">
        {faqs.map((f, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl transition-all duration-200"
            style={{ backgroundColor: '#FFFFFF', border: open === i ? '1px solid rgba(10,37,64,0.28)' : '1px solid #E2E8F0' }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-start justify-between gap-4 p-5 text-left"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-xs font-extrabold text-[#0A2540]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={`text-sm font-bold leading-snug ${open === i ? 'text-[#0A2540]' : 'text-slate-900'}`}>{f.q}</span>
              </div>
              <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }} className="mt-0.5 shrink-0 text-slate-600">
                <FiChevronDown size={16} />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                  <div className="px-5 pb-5 pt-4 pl-14" style={{ borderTop: '1px solid #F1F5F9' }}>
                    <p className="text-sm leading-7 text-slate-600">{f.a}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <div className="space-y-4">
        <div className="rounded-2xl p-5" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
          <FiHelpCircle className="mb-3 text-[#0A2540]" size={24} />
          <p className="font-extrabold text-slate-900">Can't find your answer?</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">Our technical team is available to answer any product or application question.</p>
          <a
            href={`https://wa.me/91${companyInfo.phone}?text=${encodeURIComponent('Hi, I have a technical question.')}`}
            target="_blank" rel="noreferrer"
            className="mt-4 flex items-center gap-2 text-xs font-bold text-[#0A2540] hover:underline"
          >
            <FiMessageCircle size={13} /> Ask on WhatsApp →
          </a>
        </div>
        <div className="rounded-2xl p-5" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#0A2540]">Popular Topics</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {['Washer Sizes', 'Custom Orders', '304 vs 316', 'Bolt Grades', 'DIN vs ISO', 'Certificates'].map(t => (
              <button key={t} onClick={() => {}} className="rounded-full px-3 py-1 text-xs text-slate-600 transition hover:text-[#0A2540]" style={{ border: '1px solid #E2E8F0', backgroundColor: '#FFFFFF' }}>
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════
   TAB 4 — GLOSSARY
══════════════════════════════════════════════ */
const glossaryItems = [
  { term: 'Tensile Strength', cat: 'Mechanical', def: 'The maximum stress a material can withstand before breaking under tension. Expressed in MPa or N/mm². Defines the property class of a bolt.' },
  { term: 'Yield Strength', cat: 'Mechanical', def: 'The stress at which a material begins to deform permanently. Fasteners should not be loaded beyond 75–80% of yield strength in service.' },
  { term: 'Property Class', cat: 'Standard', def: 'Metric bolt strength classification (e.g. 4.6, 8.8, 10.9, 12.9). First number × 100 = tensile strength MPa; product of both × 10 = yield strength MPa.' },
  { term: 'Thread Pitch', cat: 'Dimensional', def: 'Distance between adjacent thread crests in mm. Coarse pitch = larger number; fine pitch = smaller number for the same diameter.' },
  { term: 'Proof Load', cat: 'Mechanical', def: 'Maximum tensile load a fastener can withstand without permanent deformation. Typically 85–90% of yield load. Used for quality inspection.' },
  { term: 'Galvanic Corrosion', cat: 'Corrosion', def: 'Accelerated corrosion when two dissimilar metals are in electrical contact with moisture present. Match washer and bolt materials to prevent this.' },
  { term: 'DIN', cat: 'Standard', def: 'Deutsches Institut für Normung (German Institute for Standardisation). Widely used for fastener dimensions globally (e.g. DIN 933, DIN 125).' },
  { term: 'ISO', cat: 'Standard', def: 'International Organisation for Standardisation. Globally recognised fastener standards, often harmonised with DIN (e.g. ISO 4017 ≈ DIN 933).' },
  { term: 'ASTM', cat: 'Standard', def: 'American Society for Testing and Materials. Defines material grades for US and international use (e.g. ASTM A307, A325, A193 B7).' },
  { term: 'Hardness (HV / HRC)', cat: 'Mechanical', def: 'Resistance of a material to deformation. Vickers (HV) and Rockwell C (HRC) are common scales. Higher hardness = higher strength, potentially more brittle.' },
  { term: 'AQL', cat: 'Quality', def: 'Acceptable Quality Level, a statistical sampling standard for inspection defining the maximum acceptable defect rate in a production batch.' },
  { term: 'Clamp Load (Preload)', cat: 'Mechanical', def: 'Tension created in a bolt when tightened. Proper preload keeps joint members in compression and prevents loosening under service loads.' },
  { term: 'Galling', cat: 'Corrosion', def: 'Adhesive wear caused by friction between mating threads, especially in stainless steel. Prevented by lubrication or anti-galling coatings.' },
  { term: 'Nominal Diameter', cat: 'Dimensional', def: 'Standard reference diameter of a fastener (e.g. M10 = 10 mm nominal). Actual shank is slightly smaller due to thread tolerances.' },
  { term: 'Hot Dip Galvanizing', cat: 'Coating', def: 'Immersion of steel in molten zinc (440–460°C) creating a thick metallurgical bond of 45–85 microns. Superior outdoor corrosion protection.' },
];

const catColors = {
  Mechanical:  'bg-blue-100 text-blue-800',
  Standard:    'bg-slate-100 text-slate-800 border border-slate-200',
  Dimensional: 'bg-emerald-100 text-emerald-800',
  Corrosion:   'bg-red-100 text-red-800',
  Quality:     'bg-purple-100 text-purple-800',
  Coating:     'bg-amber-100 text-amber-900',
};

const GlossaryPanel = () => {
  const [search, setSearch] = useState('');
  const filtered = glossaryItems.filter(g =>
    g.term.toLowerCase().includes(search.toLowerCase()) || g.def.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Search */}
      <div className="mb-6 max-w-md">
        <input
          type="text"
          placeholder="Search terms..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400"
          onFocus={e => { e.target.style.borderColor = '#0F2847'; }}
          onBlur={e => { e.target.style.borderColor = '#E2E8F0'; }}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((g) => (
          <motion.div
            key={g.term}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-2xl p-5 transition-all hover:-translate-y-1"
            style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <p className="font-extrabold text-slate-900">{g.term}</p>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${catColors[g.cat]}`}>{g.cat}</span>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-600">{g.def}</p>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-16 text-center text-slate-600">
          <FiList size={32} className="mx-auto mb-3 opacity-30" />
          <p className="text-sm">No terms found for "<span className="font-semibold">{search}</span>"</p>
        </div>
      )}
    </div>
  );
};

/* ══════════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════════ */
const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState('washer');

  const renderPanel = () => {
    switch (activeTab) {
      case 'washer': return <WasherGuidesPanel />;
      case 'fastener': return <FastenerGuidesPanel />;
      case 'faq': return <FaqPanel />;
      case 'glossary': return <GlossaryPanel />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* HERO — same deep navy as landing */}
      <section
        className="relative overflow-hidden py-10 lg:py-14"
        style={{ backgroundColor: '#060E1A' }}
      >
        <DarkMeshBackground />
        <div className="relative z-10 container-main">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-label !mb-4 !inline-block !border-primary/35 !bg-primary/15 !text-primary">
              Technical Resources
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white lg:text-5xl">Knowledge Base</h1>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
              Expert guides, standards reference, and technical FAQs for engineers and procurement teams.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {tabs.map((t) => {
                const Icon = t.icon;
                return (
                  <span key={t.id} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300">
                    <Icon size={12} className="text-slate-300" /> {t.label}
                  </span>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* STICKY TABS — white bar to match site */}
      <div className="sticky top-[72px] z-40 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-sm">
        <div className="container-main">
          <div className="flex overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative flex shrink-0 items-center gap-2 px-6 py-4 text-sm font-semibold transition-colors"
                  style={{ color: isActive ? '#0A2540' : '#475569' }}
                >
                  <Icon size={16} />
                  {tab.label}
                  {isActive && (
                    <motion.div
                      layoutId="tab-bar"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t-full"
                      style={{ backgroundColor: '#0A2540' }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <section className="container-main py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {renderPanel()}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-100 bg-slate-50 pb-16">
        <div className="container-main">
          <div
            className="overflow-hidden rounded-3xl border p-8 lg:p-12"
            style={{ backgroundColor: '#060E1A', borderColor: '#1E3A5F' }}
          >
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Still have questions?</p>
                <h2 className="mt-2 text-2xl font-extrabold text-white lg:text-3xl">
                  Our technical team is ready to help.
                </h2>
                <p className="mt-2 max-w-lg text-sm leading-7 text-slate-400">
                  Advising on material selection, standards compliance, custom specifications, and industrial supply requirements.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <a href={`https://wa.me/91${companyInfo.phone}?text=${encodeURIComponent('Hi, I have a technical question about your products.')}`}
                  target="_blank" rel="noreferrer" className="btn-whatsapp">
                  <FiMessageCircle /> Ask on WhatsApp
                </a>
                <a href={`mailto:${companyInfo.email}`} className="btn-outline-white">
                  <FiArrowRight /> Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
