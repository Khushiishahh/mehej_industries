/**
 * Optional thumbnails for Bolts / Nuts / Screws type grids (fallback when `public/assets/{bolts,nuts,screws}/`
 * has no file for a row — see `otherProductVariants.js`).
 *
 * Add image files under src/assets/product-types/{bolts,nuts,screws}/ — Vite bundles them at build time.
 * Naming: prefer 01.jpg, 02.jpg, … same order as rows in `otherProductVariants.js` (numeric sort).
 */

function sortedUrls(modules) {
  return Object.keys(modules)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((k) => modules[k]);
}

const boltModules = import.meta.glob('../assets/product-types/bolts/*.{jpg,jpeg,png,gif,webp,JPG,JPEG,PNG,GIF,WEBP}', {
  eager: true,
  import: 'default',
});
const nutModules = import.meta.glob('../assets/product-types/nuts/*.{jpg,jpeg,png,gif,webp,JPG,JPEG,PNG,GIF,WEBP}', {
  eager: true,
  import: 'default',
});
const screwModules = import.meta.glob('../assets/product-types/screws/*.{jpg,jpeg,png,gif,webp,JPG,JPEG,PNG,GIF,WEBP}', {
  eager: true,
  import: 'default',
});

export const boltTypeImportedUrls = sortedUrls(boltModules);
export const nutTypeImportedUrls = sortedUrls(nutModules);
export const screwTypeImportedUrls = sortedUrls(screwModules);
