/**
 * Dark navy background with large honeycomb hexagon pattern.
 * Parent section must be `relative` with `backgroundColor: '#060E1A'`.
 */
const DarkMeshBackground = () => (
  <>
    {/* Large honeycomb hexagon SVG pattern */}
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.18 }}
    >
      <defs>
        <pattern
          id="honeycomb"
          x="0"
          y="0"
          width="90"
          height="156"
          patternUnits="userSpaceOnUse"
        >
          {/* Row 1 — centered hex */}
          <polygon
            points="45,2 83,24 83,68 45,90 7,68 7,24"
            fill="none"
            stroke="rgba(148,163,184,0.9)"
            strokeWidth="1"
          />
          {/* Row 2 — offset hex */}
          <polygon
            points="45,88 83,110 83,154 45,176 7,154 7,110"
            fill="none"
            stroke="rgba(148,163,184,0.9)"
            strokeWidth="1"
          />
          {/* Left partial hex for seamless tiling */}
          <polygon
            points="-45,88 -7,110 -7,154 -45,176 -83,154 -83,110"
            fill="none"
            stroke="rgba(148,163,184,0.9)"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#honeycomb)" />
    </svg>

    {/* Radial vignette — fades hex at edges */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          'radial-gradient(ellipse 80% 70% at center, transparent 30%, #060E1A 100%)',
      }}
    />

    {/* Subtle orange glow top-left accent */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          'radial-gradient(ellipse 50% 40% at 15% 20%, rgba(249,115,22,0.06) 0%, transparent 70%)',
      }}
    />
  </>
);

export default DarkMeshBackground;