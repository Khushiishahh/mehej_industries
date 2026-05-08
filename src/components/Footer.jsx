import { FiMail, FiPhone, FiMessageCircle, FiMapPin } from 'react-icons/fi';
import { useNavigate, Link } from 'react-router-dom';
import { companyInfo } from '../data/siteData';

const quickLinks = [
  { label: 'About Us',   anchor: '#about' },
  { label: 'Products',   anchor: '#products' },
  { label: 'Industries', anchor: '#industries' },
  { label: 'Why Us',     anchor: '#why-us' },
  { label: 'Contact',    anchor: '#contact' },
];

const pagesLinks = [
  { label: 'Company Story',       href: '/about' },
  { label: 'Product Catalogues',  href: '/catalogue' },
  { label: 'Quality & Standards', href: '/quality' },
  { label: 'Industries Served',   href: '/industries' },
  { label: 'Knowledge Base',      href: '/resources' },
];

const MadeInIndia = () => (
  <div
    className="mt-5 inline-flex items-center gap-2 rounded-full border px-3 py-1.5"
    style={{ borderColor: 'rgba(148,163,184,0.35)', backgroundColor: 'rgba(255,255,255,0.06)' }}
  >
    <span className="text-lg leading-none">🇮🇳</span>
    <span className="text-xs font-bold tracking-wide text-slate-300">Made in India</span>
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
    <footer style={{ backgroundColor: '#060E1A', borderTop: '1px solid #1E3A5F' }}>
      <div className="container-main py-14">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_0.8fr_0.8fr_1fr]">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="MEHEJ FASTENERS" className="h-11 w-auto" />
              <div>
                <p className="text-base font-extrabold tracking-wide text-white">MEHEJ FASTENERS</p>
                <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#4A6080' }}>{companyInfo.tagline}</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7" style={{ color: '#64748B' }}>
              Manufacturer, supplier, and exporter of premium industrial washers and fasteners. Trusted
              quality, precision, and customer commitment since {companyInfo.founded}.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm" style={{ color: '#64748B' }}>
              <FiMapPin size={14} className="shrink-0 text-slate-500" />
              Mumbai, India
            </div>
            <MadeInIndia />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400">Quick Links</h4>
            <div className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.anchor}
                  onClick={(e) => handleLink(e, link.anchor)}
                  className="block text-sm transition hover:text-white"
                  style={{ color: '#64748B' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400">More Pages</h4>
            <div className="mt-5 space-y-3">
              {pagesLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block text-sm transition hover:text-white"
                  style={{ color: '#64748B' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400">Get in Touch</h4>
            <div className="mt-5 space-y-3">
              <a
                href={`tel:+91${companyInfo.phone}`}
                className="flex items-center gap-2.5 text-sm transition hover:text-white"
                style={{ color: '#64748B' }}
              >
                <FiPhone size={14} className="shrink-0 text-slate-500" />
                +91 {companyInfo.phone}
              </a>
              <a
                href={`https://wa.me/91${companyInfo.phone}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-sm transition"
                style={{ color: '#64748B' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#cbd5e1'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#64748B'; }}
              >
                <FiMessageCircle size={14} className="shrink-0 text-slate-500" />
                WhatsApp
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2.5 break-all text-sm transition hover:text-white"
                style={{ color: '#64748B' }}
              >
                <FiMail size={14} className="shrink-0 text-slate-500" />
                {companyInfo.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 flex flex-col gap-2 border-t pt-6 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: '#1E3A5F' }}
        >
          <p className="text-xs" style={{ color: '#334155' }}>
            © {new Date().getFullYear()} MEHEJ FASTENERS. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: '#334155' }}>Est. {companyInfo.founded} &middot; Mumbai, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
