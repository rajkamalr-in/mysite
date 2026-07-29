import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import heroImg from '../assets/hero_portrait.jpg';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#F9F9F9] flex items-center pt-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-20">

        {/* ── Left ── */}
        <div>
          {/* Tag */}
          <motion.p
            {...fadeUp(0.1)}
            className="text-xs font-semibold uppercase tracking-widest text-muted mb-6"
          >
            A journey of a thousand miles begins with a single step.
          </motion.p>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-serif text-[clamp(4rem,10vw,7rem)] leading-none font-bold text-ink mb-6"
          >
            Hello<span className="text-gray-300">,</span>
          </motion.h1>

          {/* Sub */}
          <motion.div {...fadeUp(0.3)} className="mb-10 max-w-lg space-y-3">
            <p className="text-base text-muted leading-relaxed">
              I am <span className="text-ink font-semibold">Rajkamal Ravichandran</span>, an AI &amp; Data Science Graduate with hands-on experience architecting real-world systems, including a multimodal AI framework{' '}
              <span className="text-ink font-semibold">CattleVetLook</span> for automated veterinary diagnostics.
              Proficient in{' '}
              <span className="text-ink font-medium">Python, SQL, Computer Vision</span>, and{' '}
              <span className="text-ink font-medium">Multimodal Generative AI</span>{' '}
              to build optimized, end-to-end data pipelines.
              Proven leader &amp; mentor looking to drive innovation as an{' '}
              <span className="text-ink font-medium">Associate AI Engineer</span>,{' '}
              <span className="text-ink font-medium">Graduate Engineer Trainee</span>, or{' '}
              <span className="text-ink font-medium">Data Scientist</span>.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.4)} className="flex flex-wrap items-center gap-x-8 gap-y-6 mb-12">
            {[
              { num: '1', label: 'Year Exp.' },
              { num: '5', label: 'Projects Done' },
              { num: '2', label: 'Workshops Org.' },
              { num: '3', label: 'Leadership' },
              { num: '1', label: 'Self-Published Book' },
            ].map(({ num, label }) => (
              <div key={label} className="text-left min-w-[80px]">
                <p className="text-3xl font-bold text-ink">{num}</p>
                <p className="text-[11px] font-semibold text-muted mt-1 uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-ink text-white font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-gray-800 transition-colors"
            >
              View Portfolio <ArrowDownRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-gray-300 text-ink font-semibold text-sm px-7 py-3.5 rounded-full hover:border-ink transition-colors"
            >
              Let's Talk →
            </a>
          </motion.div>
        </div>

        {/* ── Right: Portrait ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center"
        >
          {/* Background circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.05)] opacity-80" />
          </div>

          {/* Portrait */}
          <img
            src={heroImg}
            alt="Rajkamal Ravichandran – AI & Data Science Engineer"
            className="relative z-10 w-72 md:w-80 object-cover object-top"
            style={{ filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.12))' }}
          />
        </motion.div>

      </div>
    </section>
  );
}
