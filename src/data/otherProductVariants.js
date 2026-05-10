/**
 * ─── Edit traded product thumbnails (Bolts / Nuts / Screws) ───
 *
 * 1. Copy images into:
 *      public/assets/bolts/
 *      public/assets/nuts/
 *      public/assets/screws/
 * 2. In the arrays below, set `image` to the FILE NAME ONLY (exactly as saved),
 *    e.g. `HEX HEAD BOLT.jpg` or `square-bolt.webp`
 *    Use `null` to skip → the site tries (in order) optional files in `src/assets/product-types/{category}/`,
 *    then numbered `public/assets/product-types/{category}/01.jpg`, …, then placeholder photos.
 */

/** @typedef {{ name: string, image: string | null }} TradedVariantRow */

/**
 * Turn `image: 'photo.jpg'` into `/assets/{folder}/photo.jpg` (handles spaces safely).
 */
export function publicAssetFilename(folder, filename) {
  if (!filename) return null;
  const parts = filename.split('/').filter(Boolean);
  return `/assets/${folder}/${parts.map(encodeURIComponent).join('/')}`;
}

/** @param {TradedVariantRow[]} rows */
export function mapVariantRows(rows, folder) {
  return rows.map(({ name, image }) => ({
    name,
    image: image ? publicAssetFilename(folder, image) : null,
  }));
}

/** 12 bolt types — only rows with `image` set must have that file present under `public/assets/bolts/` */
export const BOLT_VARIANTS = [
  { name: 'Hex Head Bolt', image: 'HEX HEAD BOLT.jpg' },
  { name: 'Square Head Bolt', image: null }, // e.g. set to 'YOUR-FILE.jpg' after you drop it into public/assets/bolts/
  { name: 'T Bolt', image: null },
  { name: 'Flange Bolt', image: null },
  { name: 'J Bolt', image: null },
  { name: 'U Bolt', image: null },
  { name: 'L Bolt', image: null },
  { name: 'Carriage Bolt', image: null },
  { name: 'Eye Bolt', image: null },
  { name: 'Coach Bolt', image: null },
  { name: 'Stud Bolt', image: null },
  { name: 'Anchor Bolt', image: null },
];

export const NUT_VARIANTS = [
  { name: 'Hex Nut', image: null },
  { name: 'Heavy Hex Nut', image: null },
  { name: 'Lock Nut', image: null },
  { name: 'Nylock Nut', image: null },
  { name: 'Weld Nut', image: null },
  { name: 'Dome Nut / Cap Nut', image: null },
  { name: 'Flange Nut', image: null },
  { name: 'Square Nut', image: null },
  { name: 'Eye Nut', image: null },
  { name: 'T-Nut', image: null },
  { name: 'Shear Nut', image: null },
  { name: 'Keps-K Lock Nut', image: null },
  { name: 'Knurled Thumb Nut', image: null },
  { name: 'Castle Nut / Slotted Hex Nut', image: null },
  { name: 'Hex Jam Nut', image: null },
  { name: 'Coupling Nut', image: null },
  { name: 'Wing Nut', image: null },
  { name: 'Prevailing Torque Lock Nut', image: null },
];

export const SCREW_VARIANTS = [
  { name: 'Pan Head Machine Screw', image: null },
  { name: 'CSK Machine Screw', image: null },
  { name: 'Cheese / Round Head Screw', image: null },
  { name: 'Hex Head Machine Screw', image: null },
  { name: 'Allen Bolt / Socket Head Cap Screw', image: null },
  { name: 'Allen CSK Bolt', image: null },
  { name: 'Grub Screw / Set Screw', image: null },
  { name: 'Button Head Screw', image: null },
  { name: 'Pan Head Self-Tapping Screw', image: null },
  { name: 'CSK Self-Tapping Screw', image: null },
  { name: 'Hex Head Self-Tapping Screw', image: null },
  { name: 'Wafer Head Self-Tapping Screw', image: null },
  { name: 'Self-Drilling Screw (Tek Screw)', image: null },
  { name: 'Wood Screw', image: null },
  { name: 'Coach Screw', image: null },
  { name: 'Truss Head Screw', image: null },
  { name: 'Oval Head Screw', image: null },
  { name: 'Custom Made Screw', image: null },
];
