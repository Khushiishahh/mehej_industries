import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { whyChooseUs } from '../data/siteData';

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-space" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container-main">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The right partner for precision industrial fastening."
          description="Decades of experience combined with a relentless focus on quality, standards, and customer-first service."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white p-7 transition-all duration-300 hover:shadow-lg"
                style={{ border: '1px solid #E2E8F0' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(249,115,22,0.35)')}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#E2E8F0'}
              >
                <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="inline-flex rounded-xl border border-primary/25 bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:scale-110">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-lg font-extrabold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-slate-500 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn More →
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
