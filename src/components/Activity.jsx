import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Award, Users, ExternalLink, Presentation } from 'lucide-react';
import imgCodeWar from '../assets/act_codewar.png';
import imgWorkshop from '../assets/act_workshop.png';
import imgExpo from '../assets/act_expo.png';
import imgConclave from '../assets/act_conclave.png';

const activityItems = [
  {
    id: 1,
    icon: <Code2 size={16} />,
    label: 'Organized "CODE WAR!" Coding Contest',
    role: 'Resident Leader',
    date: '21 November 2024',
    desc: 'Organized a highly anticipated technical coding contest for resident hostel students, featuring a head-to-head competition between Python and Java developers to showcase algorithmic problem-solving skills.',
    tags: ['Event Organizer', 'Python vs Java', 'Technical Event'],
    dot: 'bg-blue-500',
    img: imgCodeWar,
    link: null,
  },
  {
    id: 2,
    icon: <Presentation size={16} />,
    label: 'Led Deployed AI Hands-on Workshop',
    role: 'Vice President | ADSA',
    date: '26 September 2024',
    desc: 'Organized and led a practical software engineering bootcamp, guiding over 80+ peers through Streamlit web development, Text-to-Speech integration, and direct Google Gemini LLM API implementations.',
    tags: ['Streamlit', 'Gemini API', 'Technical Speaker'],
    dot: 'bg-purple-500',
    img: imgWorkshop,
    link: null,
  },
  {
    id: 3,
    icon: <Award size={16} />,
    label: 'Showcased AI Innovation to CEO',
    role: 'CARE Project Expo',
    date: '13 April 2024',
    desc: 'Selected to present CattleVetLook directly to the CARE Group CEO during the Open House Project Expo, receiving highly encouraging strategic feedback on real-world demographic deployment.',
    tags: ['Project Expo', 'AI Presentation', 'CEO Recognition'],
    dot: 'bg-emerald-500',
    img: imgExpo,
    link: 'https://www.linkedin.com/posts/rajkamalr-in_artificialintelligence-ai-techexpo-share-7317181764433522689-21Nz/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOkSjcBLv4h-BS8-l5oNE9ehWUwXIhWQ-U',
  },
  {
    id: 4,
    icon: <Users size={16} />,
    label: 'Attended CARE AI Conclave 2026',
    role: 'Industry Insights & Upskilling',
    date: 'February 2026',
    desc: 'Participated in the AI Conclave 2026, gaining critical strategic takeaways from global technology leads on modern industry applications of AI pipelines and future tech preparation.',
    tags: ['AI Conclave', 'Industry Network', 'Professional Prep'],
    dot: 'bg-amber-500',
    img: imgConclave,
    link: 'https://www.linkedin.com/posts/rajkamalr-in_carecollege-futureoftech-ai-ugcPost-7457652610066661376-mdMP/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOkSjcBLv4h-BS8-l5oNE9ehWUwXIhWQ-U',
  },
];

export default function Activity() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="activity" className="py-28 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <motion.span
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="text-xs font-semibold uppercase tracking-widest text-muted"
          >
            Timeline
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-ink mt-3"
          >
            Activity
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted mt-4 max-w-xl"
          >
            A chronological feed of workshops led, technical contests hosted, and key industry conclaves.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

          <div className="space-y-8">
            {activityItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className={`absolute left-3.5 top-6 w-3 h-3 rounded-full ${item.dot} border-2 border-white shadow-sm hidden md:block`} />

                <div className="bg-[#F9F9F9] rounded-[2rem] border border-gray-100/50 p-6 md:p-8 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    
                    {/* Left: Content Column (7 cols) */}
                    <div className="lg:col-span-8 flex flex-col justify-between h-full">
                      <div>
                        {/* Header metadata */}
                        <div className="flex items-start gap-4 mb-4">
                          {/* Icon wrapper */}
                          <div className="w-10 h-10 rounded-xl bg-ink text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-ink leading-snug">{item.label}</h3>
                            <p className="text-xs text-muted font-semibold uppercase tracking-wider mt-0.5">{item.role}</p>
                            <p className="text-[10px] text-muted font-mono mt-1">{item.date}</p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-muted leading-relaxed mb-5">{item.desc}</p>
                      </div>

                      {/* Footer: Tags and Action */}
                      <div className="flex flex-wrap gap-4 items-center justify-between mt-auto">
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((t) => (
                            <span key={t} className="text-xs font-semibold bg-white border border-gray-100 text-ink px-3 py-1 rounded-full">
                              {t}
                            </span>
                          ))}
                        </div>

                        {item.link && (
                          <a 
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-ink hover:text-ink/80 transition-colors"
                          >
                            LinkedIn Post <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right: Media Column (4 cols) */}
                    <div className="lg:col-span-4 overflow-hidden rounded-2xl border border-gray-200/80 shadow-sm relative group bg-gray-50 flex items-center justify-center">
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full cursor-zoom-in">
                          <img 
                            src={item.img} 
                            alt={item.label} 
                            className="w-full h-auto object-cover max-h-[160px] md:max-h-[180px] transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                        </a>
                      ) : (
                        <img 
                          src={item.img} 
                          alt={item.label} 
                          className="w-full h-auto object-cover max-h-[160px] md:max-h-[180px] transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      )}
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footnote Link */}
        <div className="text-center mt-14">
          <p className="text-xs text-muted">
            Looking for more daily updates? Visit my{' '}
            <a 
              href="https://www.linkedin.com/in/rajkamalr-in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-ink font-semibold underline underline-offset-4 hover:text-ink/80 transition-colors"
            >
              LinkedIn Activity Feed
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
