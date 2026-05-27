import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-4 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-ink rounded-3xl px-10 py-16 md:px-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative"
        >
          {/* Background texture dots */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          <div className="relative z-10 max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 block">
              Let's Collaborate
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-snug">
              Exclusive Consultation for Your Team —{' '}
              <em className="text-gray-300">Build it Right.</em>
            </h2>
            <p className="text-gray-400 text-base mt-5 leading-relaxed">
              Whether you need a full digital transformation or a single stunning interface, 
              let's build something extraordinary together.
            </p>
          </div>

          <div className="relative z-10 flex flex-col gap-3 min-w-fit">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-ink font-semibold text-sm px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
            >
              Start a Project <ArrowRight size={16} />
            </a>
            <a
              href="#works"
              className="inline-flex items-center justify-center gap-2 border border-gray-600 text-white font-semibold text-sm px-8 py-4 rounded-full hover:border-gray-400 transition-colors"
            >
              See Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
