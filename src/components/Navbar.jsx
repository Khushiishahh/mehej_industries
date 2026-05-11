import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { FiChevronDown } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';
import { companyInfo } from '../data/siteData';

const morePageLinks = [
  { label: 'Company Story', href: '/about' },
  { label: 'Quality & Standards', href: '/quality' },
  { label: 'Industries Served', href: '/industries' },
];

const navLinks = [
  { label: 'Home',       type: 'anchor', anchor: '#home' },
  { label: 'About',      type: 'anchor', anchor: '#about' },
  { label: 'Products',   type: 'anchor', anchor: '#products' },
  { label: 'Industries', type: 'anchor', anchor: '#industries' },
  { label: 'Catalogue',  type: 'route',  href: '/catalogue' },
  { label: 'Resources',  type: 'route',  href: '/resources' },
  { label: 'More pages', type: 'more',   items: morePageLinks },
  { label: 'Why Us',     type: 'anchor', anchor: '#why-us' },
  { label: 'Contact',    type: 'anchor', anchor: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [moreExpanded, setMoreExpanded] = useState(false);
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
    if (!open) setMoreExpanded(false);
  }, [open]);

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
          <a
            href="#home"
            onClick={(e) => handleAnchor(e, '#home')}
            className="flex min-w-0 shrink-0 items-center"
          >
            <img
              src="/logo.png"
              alt={companyInfo.name}
              className={`w-auto object-contain object-left transition-all duration-300 ${scrolled ? 'h-12 sm:h-14' : 'h-14 sm:h-16'}`}
            />
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden flex-1 items-center justify-center gap-5 xl:gap-6 lg:flex">
            {navLinks.map((link) => {
              if (link.type === 'more') {
                const childActive = link.items.some((i) => location.pathname === i.href);
                return (
                  <div key={link.label} className="group relative shrink-0">
                    <button
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded={childActive ? 'true' : 'false'}
                      className={`${linkBase} flex items-center gap-0.5 ${
                        childActive ? linkActive : 'cursor-pointer border-none bg-transparent text-slate-600 hover:text-[#0A2540]'
                      }`}
                    >
                      More pages
                      <FiChevronDown size={14} className="opacity-65 transition-transform duration-200 group-hover:-rotate-180" aria-hidden />
                    </button>
                    <div className="invisible absolute left-1/2 top-full z-[70] mt-px w-max min-w-[15rem] -translate-x-1/2 rounded-xl border border-slate-200 bg-white py-2 opacity-0 shadow-xl shadow-slate-900/10 ring-1 ring-black/5 transition duration-150 group-hover:visible group-hover:opacity-100">
                      <ul role="menu" className="py-1">
                        {link.items.map((item) => {
                          const sub = location.pathname === item.href;
                          return (
                            <li key={item.href}>
                              <Link
                                role="menuitem"
                                to={item.href}
                                className={`block whitespace-nowrap px-5 py-3 text-[0.9375rem] font-semibold leading-snug transition sm:text-base ${
                                  sub ? 'bg-slate-50 text-[#0A2540]' : 'text-slate-700 hover:bg-slate-50'
                                }`}
                              >
                                {item.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              }
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
              <nav className="flex flex-col gap-1 bg-white px-1 py-4">
                {navLinks.map((link) => {
                  if (link.type === 'more') {
                    return (
                      <div key={link.label} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                        <button
                          type="button"
                          aria-expanded={moreExpanded}
                          onClick={() => setMoreExpanded((v) => !v)}
                          className={`flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-base font-semibold transition ${
                            moreExpanded ? 'bg-slate-50 text-[#0A2540]' : 'text-slate-800'
                          }`}
                        >
                          <span>{link.label}</span>
                          <FiChevronDown
                            size={20}
                            className={`shrink-0 opacity-70 transition-transform duration-200 ${moreExpanded ? 'rotate-180' : ''}`}
                            aria-hidden
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {moreExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden border-t border-slate-100"
                            >
                              <div className="flex flex-col py-1">
                                {link.items.map((item) => (
                                  <Link
                                    key={item.href}
                                    to={item.href}
                                    onClick={() => {
                                      setOpen(false);
                                      setMoreExpanded(false);
                                    }}
                                    className={`border-b border-slate-50 px-5 py-3.5 text-base font-semibold leading-snug last:border-b-0 ${
                                      location.pathname === item.href
                                        ? 'bg-slate-50 text-[#0A2540]'
                                        : 'text-slate-700 active:bg-slate-50'
                                    }`}
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }
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
