import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import p1 from '../assets/project_card_1.png';
import p2 from '../assets/project_card_2.png';
import p3 from '../assets/project_card_3.png';
import p4 from '../assets/about_photo.png';

const filters = ['All', 'UI Design', 'Branding', 'Photography'];

const works = [
  { id: 1, title: 'Digital Agency Dashboard', cat: 'UI Design', img: p1, year: '2024' },
  { id: 2, title: 'Premium Brand Identity', cat: 'Branding', img: p2, year: '2024', featured: true },
  { id: 3, title: 'Urban Architecture Series', cat: 'Photography', img: p3, year: '2023' },
  { id: 4, title: 'SaaS Analytics Interface', cat: 'UI Design', img: p4, year: '2023' },
  { id: 5, title: 'Creative Studio Identity', cat: 'Branding', img: p2, year: '2023' },
  { id: 6, title: 'Product Photography Set', cat: 'Photography', img: p3, year: '2022' },
];

function WorkCard({ work, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-3xl overflow-hidden bg-[#F9F9F9] cursor-pointer ${
        work.featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className="overflow-hidden aspect-[4/3]">
        <img
          src={work.img}
          alt={work.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/60 transition-colors duration-300 flex items-center justify-center">
        <a
          href="#"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-ink text-sm font-semibold px-6 py-3 rounded-full flex items-center gap-2"
        >
          View Project <ArrowUpRight size={14} />
        </a>
      </div>

      <div className="p-5 flex items-center justify-between">
        <div>
          <span className="text-xs text-muted font-medium">{work.cat}</span>
          <h3 className="text-base font-semibold text-ink mt-0.5">{work.title}</h3>
        </div>
        <span className="text-xs font-mono text-muted">{work.year}</span>
      </div>
    </motion.div>
  );
}

export default function LatestWorks() {
  const [active, setActive] = useState('All');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const filtered = active === 'All' ? works : works.filter((w) => w.cat === active);

  return (
    <section id="works" className="py-28 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-xs font-semibold uppercase tracking-widest text-muted"
            >
              Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-bold text-ink mt-3"
            >
              Latest Works
            </motion.h2>
          </div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`text-sm font-semibold px-5 py-2 rounded-full border transition-colors ${
                  active === f
                    ? 'bg-ink text-white border-ink'
                    : 'border-gray-200 text-muted hover:border-ink hover:text-ink'
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {filtered.map((w, i) => (
            <WorkCard key={w.id} work={w} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
