/** URL-safe slug for anchor links (/industries#construction-and-infrastructure). */
export function industrySlug(name) {
  return name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Local hero image under public/assets/industries/{slug}-industry.png */
export function industryAssetImage(name) {
  return `/assets/industries/${industrySlug(name)}-industry.png`;
}
