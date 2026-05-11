import { FiMail, FiPhone, FiMessageCircle, FiMapPin } from 'react-icons/fi';
import { useNavigate, Link } from 'react-router-dom';
import { companyInfo } from '../data/siteData';

const ORANGE = '#F97316';
const NAVY = '#060E1A';
const NAVY_BORDER = '#1E3A5F';

const quickLinks = [
  { label: 'About Us', anchor: '#about' },
  { label: 'Products', anchor: '#products' },
  { label: 'Industries', anchor: '#industries' },
  { label: 'Why Us', anchor: '#why-us' },
  { label: 'Contact', anchor: '#contact' },
];

const pagesLinks = [
  { label: 'Company Story', href: '/about' },
  { label: 'Product Catalogues', href: '/catalogue' },
  { label: 'Quality & Standards', href: '/quality' },
  { label: 'Industries Served', href: '/industries' },
  { label: 'Knowledge Base', href: '/resources' },
];

const MadeInIndia = () => (
  <div
    className="mt-5 inline-flex items-center gap-2 rounded-full border px-3 py-2"
    style={{ borderColor: 'rgba(148,163,184,0.35)', backgroundColor: 'rgba(255,255,255,0.06)' }}
  >
  </div>
);

const Footer = () => {
  const navigate = useNavigate();

  const handleLink = (e, anchor) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth' }), 150);
    } else {
      document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: NAVY, borderTop: `1px solid ${NAVY_BORDER}` }}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.06) 1.5px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="container-main relative z-10 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_0.8fr_0.8fr_1fr]">

          {/* Brand */}
          <div>
            <img src="/logo.png" alt={`${companyInfo.name} logo`} className="h-20 w-auto object-contain" />
            <p className="mt-5 max-w-sm text-base leading-7" style={{ color: '#94A3B8' }}>
              Manufacturer, supplier, and exporter of premium industrial washers and fasteners. Trusted quality,
              precision, and customer commitment since {companyInfo.founded}.
            </p>
            <div className="mt-4 flex items-center gap-2 text-base" style={{ color: '#94A3B8' }}>
              <FiMapPin size={15} style={{ color: ORANGE }} className="shrink-0" />
              Mumbai, India
            </div>
            <MadeInIndia />
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest" style={{ color: ORANGE }}>Quick Links</h4>
            <div className="mt-5 space-y-4">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.anchor}
                  onClick={(e) => handleLink(e, link.anchor)}
                  className="block text-base transition hover:text-white"
                  style={{ color: '#94A3B8' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest" style={{ color: ORANGE }}>More Pages</h4>
            <div className="mt-5 space-y-4">
              {pagesLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block text-base transition hover:text-white"
                  style={{ color: '#94A3B8' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest" style={{ color: ORANGE }}>Get in Touch</h4>
            <div className="mt-5 space-y-4">
              <a
                href={`tel:+91${companyInfo.phone}`}
                className="flex items-center gap-2.5 text-base transition hover:text-white"
                style={{ color: '#94A3B8' }}
              >
                <FiPhone size={15} style={{ color: ORANGE }} className="shrink-0" />
                +91 {companyInfo.phone}
              </a>
              <a
                href={`https://wa.me/91${companyInfo.phone}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-base transition hover:text-white"
                style={{ color: '#94A3B8' }}
              >
                <FiMessageCircle size={15} style={{ color: ORANGE }} className="shrink-0" />
                WhatsApp
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2.5 break-all text-base transition hover:text-white"
                style={{ color: '#94A3B8' }}
              >
                <FiMail size={15} style={{ color: ORANGE }} className="shrink-0" />
                {companyInfo.email}
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-12 flex flex-col gap-2 border-t pt-6 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: NAVY_BORDER }}
        >
          <p className="text-sm" style={{ color: '#94A3B8' }}>
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: '#94A3B8' }}>Est. {companyInfo.founded} &middot; Mumbai, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
