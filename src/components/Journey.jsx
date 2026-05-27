import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: 'WVI Web Ventures India Private Limited',
    duration: '10 mos',
    period: 'May 2025 – Feb 2026',
    roles: ['Project Intern', 'Application Developer'],
    tags: ['CRM Development', 'Biometric Data', 'Workflow Design'],
    desc: 'Developed a Staff Attendance Regularization Module, gaining hands-on experience processing biometric punch data. Architected sub-modules for approval and rejected workflows, honing the ability to evaluate logic building skills in CRM development.',
    highlights: [
      'Built Staff Attendance Regularization Module end-to-end',
      'Processed and validated biometric punch data pipelines',
      'Architected approval & rejection workflow sub-modules',
      'Strengthened logic-building skills in CRM development',
    ],
  },
];

function ExperienceItem({ item, index }) {
  const [open, setOpen] = useState(true);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-gray-200 last:border-0"
    >
      {/* Header row */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between py-8 text-left group"
      >
        <div className="flex items-start gap-6">
          {/* Icon */}
          <div className="mt-1 w-10 h-10 rounded-2xl bg-ink text-white flex items-center justify-center flex-shrink-0">
            <Briefcase size={16} />
          </div>

          <div>
            {/* Company */}
            <h3 className="text-lg font-semibold text-ink group-hover:text-gray-600 transition-colors leading-snug">
              {item.company}
            </h3>

            {/* Roles */}
            <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1">
              {item.roles.map((r) => (
                <span key={r} className="text-sm text-muted font-medium">{r}</span>
              ))}
            </div>

            {/* Period & Duration */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <span className="flex items-center gap-1.5 text-xs text-muted">
                <Calendar size={12} />
                {item.period}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-ink bg-gray-100 px-2.5 py-0.5 rounded-full">
                {item.duration}
              </span>
            </div>
          </div>
        </div>

        {/* Tags + chevron */}
        <div className="flex items-center gap-3 ml-4">
          <div className="hidden md:flex flex-wrap gap-2 justify-end">
            {item.tags.map((t) => (
              <span key={t} className="text-xs font-medium bg-[#F9F9F9] border border-gray-200 text-muted px-3 py-1 rounded-full whitespace-nowrap">
                {t}
              </span>
            ))}
          </div>
          <ChevronDown
            size={18}
            className={`text-muted flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        </div>
      </button>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pl-16 pb-10 grid md:grid-cols-2 gap-8">

              {/* Description */}
              <div>
                <p className="text-muted text-sm leading-relaxed mb-6">{item.desc}</p>

                {/* Highlights */}
                <ul className="space-y-2.5">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-ink">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ink flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Info card */}
              <div className="bg-[#F9F9F9] rounded-2xl p-6 flex flex-col justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">Role</p>
                  <div className="flex flex-wrap gap-2">
                    {item.roles.map((r) => (
                      <span key={r} className="text-xs font-semibold bg-ink text-white px-3 py-1.5 rounded-full">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">Tech Focus</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span key={t} className="text-xs font-medium border border-gray-300 text-ink px-3 py-1.5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-1">Duration</p>
                  <p className="text-2xl font-bold font-serif text-ink">{item.duration}</p>
                  <p className="text-xs text-muted mt-0.5">{item.period}</p>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function Journey() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="work-experience" className="py-28 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-xs font-semibold uppercase tracking-widest text-muted"
            >
              Career
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-bold text-ink mt-3"
            >
              Work Experience
            </motion.h2>
          </div>

          {/* Total exp badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 bg-[#F9F9F9] rounded-2xl px-5 py-3 self-start"
          >
            <Briefcase size={16} className="text-muted" />
            <span className="text-sm font-semibold text-ink">1 Year Total Experience</span>
          </motion.div>
        </div>

        {/* Experience items */}
        <div>
          {experiences.map((item, i) => (
            <ExperienceItem key={item.id} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
