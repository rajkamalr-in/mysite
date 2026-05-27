import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import p1 from '../assets/project_card_1.png';
import p2 from '../assets/project_card_2.png';
import p3 from '../assets/project_card_3.png';

const items = [
  {
    id: 1,
    year: '2024',
    title: 'Felix Digital Agency Website',
    role: 'Lead UI/UX Designer',
    tags: ['UI Design', 'Web Dev', 'Branding'],
    desc: 'A bold, conversion-focused website redesign for a digital agency. Featured dynamic scroll animations, a premium dark aesthetic, and a design system built for scale.',
    img: p1,
  },
  {
    id: 2,
    year: '2023',
    title: 'Premium Brand Identity System',
    role: 'Brand Strategist & Designer',
    tags: ['Brand Identity', 'Typography', 'Strategy'],
    desc: 'Complete brand overhaul including logo suite, motion guidelines, typography system, and digital/print asset library for a global design consultancy.',
    img: p2,
  },
  {
    id: 3,
    year: '2023',
    title: 'Architectural Photography Series',
    role: 'Creative Director',
    tags: ['Photography', 'Visual Art', 'Print'],
    desc: 'Visual storytelling through architecture — exploring symmetry, light, and the geometry of modern urban spaces. Published in three design magazines.',
    img: p3,
  },
  {
    id: 4,
    year: '2022',
    title: 'SaaS Dashboard — AI Analytics',
    role: 'Product Designer',
    tags: ['Product Design', 'Data Viz', 'React'],
    desc: 'End-to-end design of an AI-powered analytics dashboard, from user research to high-fidelity prototyping, resulting in 40% reduction in user drop-off.',
    img: p1,
  },
];

function JourneyItem({ item, index }) {
  const [open, setOpen] = useState(index === 0);
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
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-7 text-left group"
      >
        <div className="flex items-center gap-6">
          <span className="text-xs font-mono text-muted w-10">{item.year}</span>
          <div>
            <h3 className="text-lg font-semibold text-ink group-hover:text-gray-600 transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-muted mt-0.5">{item.role}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-2">
            {item.tags.slice(0, 2).map((t) => (
              <span key={t} className="text-xs font-medium bg-[#F9F9F9] border border-gray-200 text-muted px-3 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>
          <ChevronDown
            size={18}
            className={`text-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        </div>
      </button>

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
            <div className="grid md:grid-cols-2 gap-8 pb-8 pl-16">
              <p className="text-muted leading-relaxed">{item.desc}</p>
              <div className="rounded-2xl overflow-hidden aspect-video">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
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
    <section id="journey" className="py-28 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-xs font-semibold uppercase tracking-widest text-muted"
            >
              Selected Works
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-bold text-ink mt-3"
            >
              Explore My Design Journey
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            href="#works"
            className="text-sm font-semibold text-ink border-b border-ink pb-0.5 self-start hover:text-muted transition-colors"
          >
            View All Works →
          </motion.a>
        </div>

        <div>
          {items.map((item, i) => (
            <JourneyItem key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
