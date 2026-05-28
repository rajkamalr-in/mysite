import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import aboutImg from '../assets/about_photo.png';

function Card({ className = '', children, dark }) {
  return (
    <div
      className={`rounded-3xl p-7 ${dark ? 'bg-ink text-white' : 'bg-white'} shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}



export default function AboutBento() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section id="about" className="py-28 bg-[#F9F9F9]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Section Header ── */}
        <motion.div {...anim(0)} className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted">About Me</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink mt-3 leading-tight">
            Building intelligent systems<br />
            that <em>solve</em> real problems.
          </h2>
        </motion.div>

        {/* ── Bento Grid Row 1 ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Who I Am — spans 2 cols */}
          <motion.div {...anim(0.1)} className="md:col-span-2">
            <Card className="h-full">
              <p className="text-muted text-sm uppercase tracking-widest font-semibold mb-5">Who I Am</p>
              <div className="space-y-4">
                <p className="text-ink text-base leading-relaxed">
                  I am <span className="font-semibold">Rajkamal Ravichandran</span>, an AI &amp; Data Science Graduate
                  with hands-on experience architecting realworld systems,including a multimodal AI
                  framework <span className="font-semibold">CattleVetLook</span> for automated veterinary diagnostics.Proficient in <span className="text-ink font-medium">Python, SQL, Computer Vision</span>,
                  and <span className="text-ink font-medium">Multimodal Generative AI</span> to build
                  optimized, end-to-end data pipelines.Proven leader &amp; mentor looking to drive innovation as an{' '}
                  <span className="text-ink font-medium">Associate AI Engineer</span>,{' '}
                  <span className="text-ink font-medium">Graduate Engineer Trainee</span>, or{' '}
                  <span className="text-ink font-medium">Data Scientist</span>.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Stat: Projects */}
          <motion.div {...anim(0.2)}>
            <Card dark className="h-full flex flex-col justify-between">
              <p className="text-gray-400 text-sm">Projects Delivered</p>
              <div>
                <p className="font-serif text-8xl font-bold text-white leading-none">
                  5
                </p>
                <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                  Real-world AI & data science systems built end-to-end.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Photo */}
          <motion.div {...anim(0.3)}>
            <div className="rounded-3xl overflow-hidden h-64 md:h-full">
              <img src={aboutImg} alt="Rajkamal Ravichandran workspace" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Experience card */}
          <motion.div {...anim(0.35)}>
            <Card className="h-full flex flex-col justify-between">
              <p className="text-muted text-xs uppercase tracking-widest font-semibold mb-5">Experience</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-ink flex-shrink-0" />
                  <div>
                    <p className="text-ink text-sm font-semibold">Application Developer (Intern)</p>
                    <p className="text-muted text-xs mt-0.5">WVI Web Ventures India</p>
                    <p className="text-muted text-xs mt-0.5">May 2025 – Feb 2026 · 10 mos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-gray-300 flex-shrink-0" />
                  <div>
                    <p className="text-ink text-sm font-semibold">AI & ML Developer</p>
                    <p className="text-muted text-xs mt-0.5">CattleVetLook — Multimodal AI</p>
                    <p className="text-muted text-xs mt-0.5">2024 – Present · 1 Year</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-5 border-t border-gray-100">
                <p className="font-serif text-3xl font-bold text-ink">1<span className="text-gray-400 text-2xl">yr</span></p>
                <p className="text-muted text-xs mt-1">Hands-on experience</p>
              </div>
            </Card>
          </motion.div>

          {/* Philosophy */}
          <motion.div {...anim(0.4)}>
            <Card dark className="h-full flex flex-col justify-between">
              <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-4">Philosophy</p>
              <div>
                <p className="font-serif text-xl font-semibold text-white leading-snug">
                  "Let’s go invent tomorrow instead of worrying about what happened yesterday."
                </p>
                <p className="text-xs text-gray-400 mt-3 font-medium">— Steve Jobs</p>
              </div>
              <div className="mt-6 flex gap-2 flex-wrap">
                {['AI-First', 'Data-Driven', 'End-to-End'].map((t) => (
                  <span key={t} className="text-xs font-medium bg-white/10 text-gray-300 px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>

        </div>



      </div>
    </section>
  );
}
