/**
 * PDFs: public/catalogues/<file> — see public/catalogues/FILES.txt
 */
export const catalogueDownloads = [
  {
    id: 1,
    name: 'Washer Master Catalogue',
    file: 'washer-master.pdf',
    image: '/assets/washer-plain.jpg',
    desc: 'Full overview of our manufactured washer programme — types, materials, sizes and standards.',
  },
  {
    id: 2,
    name: 'Bolts, Nuts & Screws',
    file: 'bolts-nuts-screws.pdf',
    image: '/assets/product-types/bolts/bolt.jpg',
    desc: 'Traded range: hex bolts, nuts, machine and self-tapping screws, grades and finishes.',
  },
  {
    id: 3,
    name: 'Plain / Flat Washer',
    file: 'plain-flat-washer.pdf',
    image: '/assets/washer-plain.jpg',
    desc: 'DIN 125, DIN 9021, ISO 7089 / 7090, wide series and custom OD/thickness.',
  },
  {
    id: 4,
    name: 'Spring Washer',
    file: 'spring-washer.pdf',
    image: '/assets/washer-spring.jpg',
    desc: 'Split lock / helical spring washers — DIN 127, DIN 7980, ASME B18.21.1.',
  },
  {
    id: 5,
    name: 'Internal / External Lock Washer',
    file: 'lock-washer.pdf',
    image: '/assets/washer-lock.jpg',
    desc: 'Internal and external tooth lock washers (DIN 6797) for vibration-prone joints.',
  },
  {
    id: 6,
    name: 'Wave Washer',
    file: 'wave-washer.pdf',
    image: '/assets/washer-wave.jpg',
    desc: 'Single- and multi-wave washers — axial spring load in minimal space.',
  },
  {
    id: 7,
    name: 'Tab Washer',
    file: 'tab-washer.pdf',
    image: '/assets/washer-tab.jpg',
    desc: 'Single-, double- and multi-tab positive locking washers (DIN 93, DIN 432).',
  },
  {
    id: 8,
    name: 'Other Washer Catalogue',
    file: 'other-washers.pdf',
    image: '/assets/washer-custom.jpg',
    desc: 'Serrated, sealing, shim, Belleville / disc spring and specials — bespoke sizes on request.',
  },
];

export const cataloguePdfHref = (file) => `/catalogues/${file}`;
