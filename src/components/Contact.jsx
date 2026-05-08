import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMail, FiMapPin, FiPhone, FiCheckCircle, FiMessageCircle } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { companyInfo } from '../data/siteData';

const initialForm = { name: '', company: '', phone: '', email: '', product: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = [
      `Hi, I am ${form.name}${form.company ? ` from ${form.company}` : ''}.`,
      form.phone   && `Phone: ${form.phone}`,
      form.email   && `Email: ${form.email}`,
      form.product && `Product Requirement: ${form.product}`,
      form.message && `Message: ${form.message}`,
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/91${companyInfo.phone}?text=${encodeURIComponent(body)}`, '_blank');
    setSubmitted(true);
    setForm(initialForm);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass = "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition";
  const focusInput = (e) => { e.target.style.borderColor = '#0F2847'; e.target.style.backgroundColor = '#fff'; };
  const blurInput  = (e) => { e.target.style.borderColor = '#E2E8F0'; e.target.style.backgroundColor = '#F8FAFC'; };
  const labelClass = "mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-500";

  return (
    <section id="contact" className="section-space bg-white">
      <div className="container-main">
        <SectionHeading
          eyebrow="Contact Us"
          title="Connect with us for product enquiries and business requirements."
          description="Send us your requirement and we will respond promptly with specifications, pricing, and availability."
          align="center"
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-white p-8 shadow-sm"
            style={{ border: '1px solid #E2E8F0' }}
          >
            <h3 className="text-xl font-extrabold text-slate-900">Business Contact</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Reach out for product information, specifications, custom sizes, and industrial supply discussions.
            </p>

            <div className="mt-8 space-y-3">
              {[
                { href: `tel:+91${companyInfo.phone}`, icon: FiPhone, label: 'Phone', value: `+91 ${companyInfo.phone}` },
                { href: `https://wa.me/91${companyInfo.phone}`, icon: FiMessageCircle, label: 'WhatsApp', value: 'Chat with Us', external: true },
                { href: `mailto:${companyInfo.email}`, icon: FiMail, label: 'Email', value: companyInfo.email },
              ].map(({ href, icon: Icon, label, value, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition"
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(15,40,71,0.35)'; e.currentTarget.style.backgroundColor = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.backgroundColor = '#F8FAFC'; }}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-200/80 text-[#0F2847]">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500">{label}</p>
                    <p className="break-all font-semibold text-slate-900">{value}</p>
                  </div>
                </a>
              ))}

              <a
                href="https://share.google/zE2l9GTBmcln7CqWK"
                target="_blank" rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition"
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(15,40,71,0.35)'; e.currentTarget.style.backgroundColor = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.backgroundColor = '#F8FAFC'; }}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-200/80 text-[#0F2847]">
                  <FiMapPin size={18} />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500">Location</p>
                  <p className="font-semibold text-slate-900">{companyInfo.location}</p>
                  <p className="text-xs font-semibold text-slate-600 hover:text-[#0A2540] hover:underline">Get Directions →</p>
                </div>
              </a>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
              <iframe
                title="Mehej Fasteners Location"
                src="https://maps.google.com/maps?q=Mehej+Fasteners+Mumbai&output=embed"
                width="100%"
                height="200"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-2xl bg-white p-8 shadow-sm"
            style={{ border: '1px solid #E2E8F0' }}
          >
            {submitted ? (
              <div className="flex h-full min-h-[340px] flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <FiCheckCircle className="text-3xl text-green-600" />
                </div>
                <h4 className="text-xl font-extrabold text-slate-900">Enquiry Sent!</h4>
                <p className="mt-2 max-w-xs text-sm text-slate-600">Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass}>Full Name <span className="text-red-500">*</span></label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange}
                      placeholder="Your name" className={inputClass} onFocus={focusInput} onBlur={blurInput} />
                  </div>
                  <div>
                    <label className={labelClass}>Company Name</label>
                    <input type="text" name="company" value={form.company} onChange={handleChange}
                      placeholder="Your company" className={inputClass} onFocus={focusInput} onBlur={blurInput} />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass}>Phone Number</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="Your phone" className={inputClass} onFocus={focusInput} onBlur={blurInput} />
                  </div>
                  <div>
                    <label className={labelClass}>Email Address</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="Your email" className={inputClass} onFocus={focusInput} onBlur={blurInput} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Product Requirement</label>
                  <input type="text" name="product" value={form.product} onChange={handleChange}
                    placeholder="e.g. Hex bolts M12, socket screws, washers"
                    className={inputClass} onFocus={focusInput} onBlur={blurInput} />
                </div>
                <div>
                  <label className={labelClass}>Message</label>
                  <textarea name="message" rows={4} value={form.message} onChange={handleChange}
                    placeholder="Describe your requirement in detail..."
                    className={`${inputClass} resize-none`} onFocus={focusInput} onBlur={blurInput} />
                </div>
                <button type="submit" className="btn-whatsapp w-full sm:w-auto">
                  <FiMessageCircle /> Send via WhatsApp
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
