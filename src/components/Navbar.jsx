import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { label: 'Home',       type: 'anchor', anchor: '#home' },
  { label: 'About',      type: 'anchor', anchor: '#about' },
  { label: 'Products',   type: 'anchor', anchor: '#products' },
  { label: 'Industries', type: 'anchor', anchor: '#industries' },
  { label: 'Catalogue',  type: 'route',  href: '/catalogue' },
  { label: 'Resources',  type: 'route',  href: '/resources' },
  { label: 'Why Us',     type: 'anchor', anchor: '#why-us' },
  { label: 'Contact',    type: 'anchor', anchor: '#contact' },
];

/** Deep navy matches landing hero — logo / wordmark stays readable on white bar */
const BRAND_NAVY = '#0A2540';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') return;
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [location.pathname]);

  const handleAnchor = (e, anchor) => {
    e.preventDefault();
    const menuWasOpen = open;
    const hash = anchor.startsWith('#') ? anchor.slice(1) : anchor;
    setOpen(false);

    if (location.pathname !== '/') {
      navigate({ pathname: '/', hash: `#${hash}` });
      return;
    }

    const doScroll = () => {
      const el = document.querySelector(anchor.startsWith('#') ? anchor : `#${anchor}`);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    if (typeof window !== 'undefined' && menuWasOpen && window.matchMedia('(max-width: 1023px)').matches) {
      setTimeout(doScroll, 400);
      return;
    }

    doScroll();
  };

  const isHome = location.pathname === '/';

  const linkBase = 'relative py-1 text-sm font-semibold tracking-wide transition-colors duration-200';
  const linkActive = 'text-[#0A2540] font-semibold';

  return (
    <header
      className="sticky top-0 z-50 border-b border-slate-200 bg-white transition-all duration-300"
      style={{
        boxShadow: scrolled ? '0 4px 24px rgba(6,14,26,0.08)' : 'none',
      }}
    >
      <div className="container-main">
        <div className={`flex items-center transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}>

          {/* LOGO */}
          <a href="#home" onClick={(e) => handleAnchor(e, '#home')} className="flex items-center gap-3 min-w-fit">
            <img
              src="/logo.png"
              alt="MEHEJ INDUSTRIES"
              className={`w-auto object-contain transition-all duration-300 ${scrolled ? 'h-12' : 'h-14'}`}
            />
            <div>
              <p className="text-base font-extrabold leading-tight tracking-wide" style={{ color: BRAND_NAVY }}>
                MEHEJ INDUSTRIES
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#37506D' }}>
                Fastening the Future
              </p>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden flex-1 items-center justify-center gap-7 lg:flex">
            {navLinks.map((link) => {
              if (link.type === 'route') {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className={`${linkBase} ${isActive ? linkActive : 'text-slate-600 hover:text-[#0A2540]'}`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span layoutId="nav-active" className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-primary" />
                    )}
                  </Link>
                );
              }
              const sectionId = link.anchor.slice(1);
              const isActive = isHome && activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.anchor}
                  onClick={(e) => handleAnchor(e, link.anchor)}
                  className={`${linkBase} ${isActive ? linkActive : 'text-slate-600 hover:text-[#0A2540]'}`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span layoutId="nav-active" className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-primary" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden items-center gap-3 lg:flex min-w-fit">
            <a href="#contact" onClick={(e) => handleAnchor(e, '#contact')} className="btn-primary px-5 py-2.5 text-sm">
              Get a Quote
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="ml-auto rounded-lg border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-50 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <HiOutlineX size={22} /> : <HiOutlineMenuAlt3 size={22} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-slate-200 lg:hidden"
            >
              <nav className="flex flex-col gap-1 bg-white py-4">
                {navLinks.map((link) => {
                  if (link.type === 'route') {
                    return (
                      <Link
                        key={link.label}
                        to={link.href}
                        onClick={() => setOpen(false)}
                        className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                          location.pathname === link.href
                            ? 'bg-slate-100 text-[#0A2540]'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  }
                  const sectionId = link.anchor.slice(1);
                  const isActive = isHome && activeSection === sectionId;
                  return (
                    <a
                      key={link.label}
                      href={link.anchor}
                      onClick={(e) => handleAnchor(e, link.anchor)}
                      className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                        isActive ? 'bg-slate-100 text-[#0A2540]' : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
                <a
                  href="#contact"
                  onClick={(e) => handleAnchor(e, '#contact')}
                  className="mt-2 rounded-lg bg-[#0F2847] px-4 py-3 text-center text-sm font-bold text-white hover:bg-[#060E1A]"
                >
                  Get a Quote
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
