/**
 * Shared dark navy + dual-scale dot mesh (Knowledge Base / Resources hero style).
 * Parent section must be `relative` with `backgroundColor: '#060E1A'` (or equivalent).
 */
const DarkMeshBackground = () => (
  <>
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-80"
      style={{
        backgroundImage:
          'radial-gradient(circle at 1px 1px, rgba(186, 198, 214, 0.08) 1px, transparent 1px)',
        backgroundSize: '12px 12px',
      }}
    />
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-50"
      style={{
        backgroundImage:
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
      }}
    />
  </>
);

export default DarkMeshBackground;
