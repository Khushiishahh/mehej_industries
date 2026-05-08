import { motion } from 'framer-motion';

const SectionHeading = ({ eyebrow, title, description, align = 'left', dark = false }) => {
  const isCentered = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55 }}
      className={`mb-12 ${isCentered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}
    >
      {eyebrow && <span className="section-label">{eyebrow}</span>}
      <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${dark ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-7 sm:text-lg ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
