import {
  FiBox,
  FiSettings,
  FiLayers,
  FiCheckCircle,
  FiPackage,
  FiShield,
  FiTruck,
} from 'react-icons/fi';
import {
  boltTypeImportedUrls,
  nutTypeImportedUrls,
  screwTypeImportedUrls,
} from './productTypeImageUrls';
import {
  BOLT_VARIANTS,
  NUT_VARIANTS,
  SCREW_VARIANTS,
  mapVariantRows,
} from './otherProductVariants';

/**
 * Fallback when a variant has no image set: numbered files under
 * `public/assets/product-types/{folder}/01.jpg`, then Vite-imported
 * `src/assets/product-types/{folder}/` (see productTypeImageUrls.js).
 */
const productTypeGridImages = (folder, count) =>
  Array.from({ length: count }, (_, i) => `/assets/product-types/${folder}/${String(i + 1).padStart(2, '0')}.jpg`);

const mergeTypeImages = (imported, folder, count) => {
  const pub = productTypeGridImages(folder, count);
  return Array.from({ length: count }, (_, i) => imported[i] || pub[i]);
};

export const companyInfo = {
  name: 'MEHEJ INDUSTRIES',
  tagline: 'Fastening the Future',
  email: 'info@mehejindustries.com',
  phone: '9819933344',
  founded: '1970',
  location: 'Mumbai, India',
  about: `MEHEJ INDUSTRIES traces its roots to 1970, when Vijay Hardware Stores was established by Mr. Mahipatbhai Shah in Mumbai. In 1999, Mr. Mehul Shah expanded the business as Mehej Fasteners, laying the foundation for MEHEJ INDUSTRIES. The company strengthened its global presence in 2023, and since 2025, the third generation — Mr. Hem Shah and Mr. Jay Shah — continues the legacy of quality and precision.`,
  description: `We manufacture, supply, and export industrial fasteners including washers, nuts, bolts, screws, and customized fastening solutions for industries such as construction, automotive, infrastructure, oil & gas, and engineering.`,
};

export const stats = [
  { value: '50+', label: 'Years of Industry Legacy' },
  { value: '7+', label: 'Washer Types Manufactured' },
  { value: '5', label: 'International Standards' },
  { value: '100%', label: 'Custom Size Capability' },
];

/* ──────────────────────────────────────────────
   WASHER TYPES — Full specification data
   (Company's primary manufactured product)
────────────────────────────────────────────── */
export const washerTypes = [
  {
    id: 1,
    slug: 'flat-plain',
    name: 'Flat / Plain Washers',
    badge: 'Most Popular',
    overview:
      'Flat washers are used for load distribution and surface protection in fastening assemblies. They spread the load of a fastener over a larger area, preventing damage to surfaces.',
    image: '/assets/washer-plain.jpg',
      specs: [
        { label: 'Type', value: 'Flat / Plain Washer' },
        { label: 'Standards', value: 'ISO 7089, ISO 7090, DIN 125, ANSI B18.22.1' },
        { label: 'Inner Diameter (ID)', value: 'As per bolt size (M3 – M100)' },
        { label: 'Outer Diameter (OD)', value: 'Standard or wide series' },
        { label: 'Thickness', value: '0.3 mm – 10 mm' },
        { label: 'Materials', value: 'Stainless Steel (304, 316), Carbon Steel, Brass, Nylon' },
        { label: 'Finish', value: 'Zinc plated, hot-dip galvanized, black oxide, plain' },
        { label: 'Hardness', value: '100 – 300 HV' },
      ],
    features: [
      'High load-bearing capacity',
      'Corrosion resistance (stainless and galvanized variants)',
      'Available in wide size range',
      'Custom OD and thickness available',
    ],
    applications: [
      'General fastening in mechanical assemblies',
      'Load distribution under bolt/nut heads',
      'Protection of soft materials (aluminium, plastics, wood)',
      'Structural steel connections',
      'Construction and fabrication work',
      'Automotive body and chassis assemblies',
    ],
  },
  {
    id: 3,
    slug: 'lock',
    name: 'Lock Washers',
    badge: 'Locking',
    overview:
      'Lock washers (tooth type) feature internal or external serrated teeth that bite into mating surfaces to prevent fastener loosening under vibration and dynamic loads.',
    image: '/assets/washer-lock.jpg',
      specs: [
        { label: 'Type', value: 'Internal Tooth (DIN 6797-J) / External Tooth (DIN 6797-A)' },
        { label: 'Standards', value: 'DIN 6797' },
        { label: 'Size Range', value: 'M2 – M30' },
        { label: 'Materials', value: 'Spring Steel, Stainless Steel' },
        { label: 'Finish', value: 'Zinc plated, phosphate, passivated, black oxide' },
        { label: 'Teeth', value: 'Internal / External serrations (varies by size)' },
      ],
    features: [
      'Prevents loosening under vibration',
      'Internal type — suitable for small head screws',
      'External type — stronger grip for larger surfaces',
      'Ideal for electrical grounding applications',
      'Bi-directional type available for maximum locking',
    ],
    applications: [
      'Electrical grounding and earthing connections',
      'Electronic equipment and control panels',
      'Automotive engine and body assemblies',
      'Heavy-duty bolted joints and frames',
      'Sheet metal and appliance assemblies',
      'HVAC systems and ducting',
    ],
  },
  {
    id: 2,
    slug: 'spring',
    name: 'Spring Washers',
    badge: 'Anti-Vibration',
    overview:
      'Helical split lock washers provide axial spring force to prevent fastener loosening. The split ends dig into the mating surfaces when compressed, resisting rotational loosening.',
    image:'/assets/washer-spring.jpg',
      specs: [
        { label: 'Type', value: 'Split / Helical Spring Washer' },
        { label: 'Standards', value: 'DIN 127, DIN 7980, ASME B18.21.1' },
        { label: 'Size Range', value: 'M3 – M64' },
        { label: 'Materials', value: 'Spring Steel, Stainless Steel' },
        { label: 'Hardness', value: '420 – 510 HV' },
        { label: 'Finish', value: 'Zinc plated, black oxide, hot-dip galvanized' },
      ],
    features: [
      'Anti-vibration locking action',
      'High durability and long service life',
      'Maintains preload under dynamic loading',
      'Cost-effective locking solution',
    ],
    applications: [
      'High-vibration environments (motors, engines)',
      'Automotive suspension and engine assemblies',
      'Industrial machinery and rotating equipment',
      'Railways and heavy equipment',
      'Construction equipment',
    ],
  },
  {
    id: 4,
    slug: 'wave',
    name: 'Wave Washers',
    badge: 'Spring Type',
    overview:
      'Wave washers provide controlled spring force with reduced axial space. The undulating wave profile creates a cushioning effect and uniform load distribution.',
    image:'/assets/washer-wave.jpg',
      specs: [
        { label: 'Type', value: 'Single wave / Multi-wave' },
        { label: 'Standards', value: 'DIN 137 / Custom' },
        { label: 'Materials', value: 'Stainless Steel, Spring Steel' },
        { label: 'Thickness', value: '0.2 mm – 3 mm' },
        { label: 'Load Capacity', value: 'Defined by wave height and thickness' },
        { label: 'Finish', value: 'Plain / Zinc / Custom' },
      ],
    features: [
      'Space-saving design — minimal axial height',
      'Uniform load distribution',
      'Ideal for preload applications',
      'Multiple wave options for different spring rates',
    ],
    applications: [
      'Bearing preload systems',
      'Electric motors and gear assemblies',
      'Precision instruments',
      'Pumps and compressors',
      'Space-constrained assemblies',
      'Aerospace and electronics',
    ],
  },
  {
    id: 5,
    slug: 'tab',
    name: 'Tab Washers',
    badge: 'Positive Lock',
    overview:
      'Tab washers lock fasteners by bending tabs into position against the bolt head or a slot in the workpiece. Provide a positive, mechanical, non-releasable locking method.',
    image:'/assets/washer-tab.jpg',
      specs: [
        { label: 'Type', value: 'Single tab / Double tab / Multi-tab' },
        { label: 'Standards', value: 'DIN 93, DIN 432' },
        { label: 'Materials', value: 'Mild Steel, Stainless Steel' },
        { label: 'Thickness', value: '0.5 mm – 3 mm' },
        { label: 'Finish', value: 'Zinc plated / Plain / Polished' },
      ],
    features: [
      'Positive mechanical locking — cannot vibrate loose',
      'Reusable (limited cycles)',
      'Rust-resistant stainless steel option',
      'No torque loss after installation',
    ],
    applications: [
      'Gearboxes and transmission systems',
      'Shaft and bearing locking',
      'Automotive hubs and axle nuts',
      'Heavy machinery — positive locking requirement',
      'Marine and railway equipment',
    ],
  },
  {
    id: 6,
    slug: 'serrated',
    name: 'Serrated Washers',
    badge: 'Anti-Slip',
    overview:
      'Serrated washers feature radial teeth on the surface that bite into mating material to prevent loosening due to vibration. Available in internal, external, and bi-directional types.',
    image: '/assets/washer-serrated.jpg',
      specs: [
        { label: 'Type', value: 'Internal / External / Bi-directional serrated' },
        { label: 'Standards', value: 'DIN 6798, DIN 6908' },
        { label: 'Size Range', value: 'M3 – M30' },
        { label: 'Materials', value: 'Spring Steel, Stainless Steel, Carbon Steel' },
        { label: 'Hardness', value: '350 – 500 HV' },
        { label: 'Finish', value: 'Zinc plated, phosphate, black oxide, plain' },
      ],
    features: [
      'Strong anti-slip grip via radial serrations',
      'High resistance to vibration loosening',
      'Provides electrical conductivity for grounding',
      'Eliminates need for additional locking components',
    ],
    applications: [
      'Electrical panels and grounding connections',
      'Automotive assemblies',
      'Sheet metal fastening',
      'Appliances and electronics',
      'Control panels and enclosures',
      'HVAC and ducting systems',
    ],
  },
  {
    id: 7,
    slug: 'custom',
    name: 'Custom / Special Washers',
    badge: 'Custom Made',
    overview:
      'Custom and special purpose washers including sealing washers, Belleville disc springs, thrust washers, shim washers, and insulating washers, manufactured to exact specifications.',
    image:'/assets/washer-custom.jpg',
      specs: [
        { label: 'Types', value: 'Sealing (EPDM, NBR), Shim, Insulating (Nylon, PTFE), Square, Shoulder' },
        { label: 'Custom Sizes', value: 'As per drawing' },
        { label: 'Materials', value: 'Metals, plastics, composites' },
        { label: 'Tolerance', value: '±0.01 mm to ±0.1 mm' },
        { label: 'Finish', value: 'As required' },
      ],
    features: [
      'Fully custom dimensions and materials',
      'Precision tolerances up to ±0.01 mm',
      'OEM and defense grade available',
      'Sealing washers: rubber + metal bonded',
      'Drawing-based manufacturing accepted',
    ],
    applications: [
      'Plumbing, pipelines and roofing (sealing)',
      'Oil & gas sealing applications',
      'Precision spacing in machinery (shim)',
      'Electrical insulation — PCB mounting (nylon)',
      'Rotating shafts and axial load systems (thrust)',
      'Aerospace and defense components',
    ],
  },
];

/* ──────────────────────────────────────────────
   OTHER PRODUCTS — traded (not manufactured)
   Only 3 categories: Bolts, Nuts, Screws
────────────────────────────────────────────── */
export const products = [

  {
    id: 1,
    slug: 'nuts',
    name: 'Nut',
    shortDesc: 'Complete nut range in all grades and materials for pairing with bolts in industrial assemblies.',
    image: '/assets/product-types/nuts/nut.jpg',
    icon: FiSettings,
    intro: 'Threaded fastening solutions designed for reliable pairing with bolts in all assemblies.',
    types: [
      {
        name: 'Hex Nut',
        image: '/assets/nuts/hex-nut.jpg',
      },
      {
        name: 'Square Nut',
        image: '/assets/nuts/square-nut.jpg',
      },
      {
        name: 'Flange Nut',
        image: '/assets/nuts/flange-nut.jpg',
      },
      {
        name: 'Wing Nut',
        image: '/assets/nuts/wing-nut.jpg',
      },
      {
        name: 'Nylock Nut',
        image: '/assets/nuts/nylock-nut.jpg',
      },
      {
        name: 'Slotted Hex Nut',
        image: '/assets/nuts/slotted-hex-nut.jpg',
      },
      {
        name: 'Knurled Nut',
        image: '/assets/nuts/knurled-nut.jpg',
      },
      {
        name: 'Lock Nut',
        image: '/assets/nuts/lock-nut.jpg',
      },
      {
        name: 'Weld Nut',
        image: '/assets/nuts/weld-nut.jpg',
      },
      {
        name: 'Dome Nut',
        image: '/assets/nuts/dome-nut.jpg',
      },
      {
        name: 'Keps Lock Nut',
        image: '/assets/nuts/keps-lock-nut.jpg',
      },
    ],
    
    specs: [
      'Dimension: ASTM, DIN, BS, GB, IS and all international standards',
      'Size: M3 to M75 or 1/8" to 3"',
      'Heat Treatment: Annealing, Stress Relieving, Case Hardening, Quenching and Tempering',
      'Materials: Carbon Steel, Stainless Steel, Brass, Copper',
    ],
    applications: [
      'Automotive & Transportation',
      'Railway Industry',
      'Heavy Equipment Manufacturing',
      'Energy Sector',
      'Construction Industry',
    ],
  },
  {
    id: 2,
    slug: 'bolts',
    name: 'Bolt',
    shortDesc: 'High-strength structural and mechanical bolts for demanding industrial assemblies.',
    image: '/assets/product-types/bolts/bolt.jpg',
    icon: FiBox,
    intro:
      'Industrial bolts for secure assembly across structural, mechanical, and heavy-duty applications.',

    types: [
      {
        name: 'Hex Head Bolt',
        image: '/assets/bolts/hex-head-bolt.jpg',
      },
      {
        name: 'Square Head Bolt',
        image: '/assets/bolts/square-head-bolt.jpg',
      },
      {
        name: 'Anchor Bolt',
        image: '/assets/bolts/anchor-bolt.jpg',
      },
      {
        name: 'Button Head Bolt',
        image: '/assets/bolts/button-head-bolt.jpg',
      },
      {
        name: 'Flange Bolt',
        image: '/assets/bolts/flange-bolt.jpg',
      },
      {
        name: 'Eye Bolt',
        image: '/assets/bolts/eye-bolt.jpg',
      },
      {
        name: 'Carriage Bolt',
        image: '/assets/bolts/carriage-bolt.jpg',
      },
      {
        name: 'T Bolt',
        image: '/assets/bolts/t-bolt.jpg',
      },
      {
        name: 'U Bolt',
        image: '/assets/bolts/u-bolt.jpg',
      },
      {
        name: 'J Bolt',
        image: '/assets/bolts/j-bolt.jpg',
      },
    ],


      
    
    
    specs: [
      'Dimension: ASTM, DIN, BS, GB, IS and all international standards',
      'Length: 10 mm up to 500 mm & 3/8" up to 20"',
      'Bolt Size: M6 up to M72 or 1/4" up to 3"',
      'Heat Treatment: Annealing, Stress Relieving, Case Hardening, Quenching and Tempering',
      'Materials: Carbon Steel, Alloy Steel, Stainless Steel, Brass, Copper',
    ],
    applications: [
      'Construction & Infrastructure',
      'Automotive Industry',
      'Aerospace Industry',
      'Shipbuilding & Marine',
      'Oil & Gas Industry',
      'Heavy Machinery Manufacturing',
    ],
  },
  
  {
    id: 3,
    slug: 'screws',
    name: 'Screw',
    shortDesc: 'Full screw range of machine screws, socket screws, self-tapping and more for all applications.',
    image: '/assets/product-types/screws/screw.jpg',
    icon: FiLayers,
    intro:
      'Comprehensive screw range covering machine screws, socket head screws, and self-tapping screws.',
    
    types: [
      {
        name: 'Allen CSK Screw',
        image: '/assets/screws/allen-csk-screw.jpg',
      },
      {
        name: 'CSK PHILLIPS Head 2 Screw',
        image: '/assets/screws/csk-phillips-head-2-screw.jpg',
      },
      {
        name: 'Button Head Socket Cap Self Tapping Screw',
        image: '/assets/screws/button-head-socket-cap-self-tapping-screw.jpg',
      },
      {
        name: 'Countersunk Head Machine Screws',
        image: '/assets/screws/countersunk-head-machine-screws.jpg',
      },
      {
        name: 'Button Head Screw',
        image: '/assets/screws/button-head-screw.jpg',
      },
      {
        name: 'CSK Slotted Screw',
        image: '/assets/screws/csk-slotted-screw.jpg',
      },
      {
        name: 'Hex Head Self Tapping Screw',
        image: '/assets/screws/hex-head-self-tapping-screw.jpg',
      },

      {
        name: 'Pan Head Screw',
        image: '/assets/screws/pan-head-screw.jpg',
      },
      {
        name: 'Phillips Oval Head Screw',
        image: '/assets/screws/phillips-oval-head-screw.jpg',
      },
      {
        name: 'Pan Slotted Head Screw',
        image: '/assets/screws/pan-slotted-head-screw.jpg',
      },
      {
        name: 'Pan Phillips Screws',
        image: '/assets/screws/pan-phillips-screw.jpg',
      },
      {
        name: 'Pan Head Self Drilling Screw',
        image: '/assets/screws/pan-head-self-drilling-screw.jpg',
      },
      {
        name: 'Hex Flange Head Self Drilling Screw',
        image: '/assets/screws/hex-flange-head-self-drilling-screw.jpg',
      },
    ],

    specs: [
      'Dimension: ASTM, DIN, BS, GB, IS and all international standards',
      'Length: 3 mm to 200 mm',
      'Size: M1.6 to M64 | Custom Sizes',
      'Heat Treatment: Annealing, Stress Relieving, Case Hardening, Quenching and Tempering',
      'Materials: Carbon Steel, Alloy Steel, Stainless Steel, Brass',
    ],
    applications: [
      'Electronics & Electrical Industry',
      'Appliance Manufacturing',
      'HVAC Industry',
      'Automotive Industry',
      'Furniture & Interior Fit-out',
    ],
  },
];

export const industries = [
  'Construction & Infrastructure',
  'Automotive',
  'Aerospace',
  'Shipbuilding & Marine',
  'Oil & Gas',
  'Heavy Machinery',
  'Railway',
  'Energy & Power',
  'Electronics & Electrical',
  'HVAC',
  'Telecommunications',
  'Engineering & Manufacturing',
];

export const whyChooseUs = [
  {
    title: 'Washer Specialists',
    text: 'India\'s trusted washer manufacturer in plain, spring, lock, tab, serrated, wave and custom types in all materials.',
    icon: FiCheckCircle,
  },
  {
    title: 'Wide Product Range',
    text: 'Complete fastener supply of washers manufactured in-house, and bolts, nuts, screws traded pan-India.',
    icon: FiPackage,
  },
  {
    title: 'Standards & Quality',
    text: 'Products aligned with ASTM, DIN, BS, GB, IS and other international requirements with strict quality checks.',
    icon: FiShield,
  },
  {
    title: 'Export Ready',
    text: 'Catering to global buyers with export standard packaging, ASTM/DIN-compliant documentation, and timely international dispatch.',
    icon: FiLayers,
  },
  {
    title: 'Custom Manufacturing',
    text: 'Fully custom washer dimensions, tolerances up to ±0.01 mm drawing-based manufacturing accepted.',
    icon: FiSettings,
  },
  {
    title: 'Pan-India Delivery',
    text: 'Reliable pan-India dispatch from Mumbai. Responsive service, competitive pricing, and dependable timelines.',
    icon: FiTruck,
  },
];
