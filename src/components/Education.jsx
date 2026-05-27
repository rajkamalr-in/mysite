import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Award, School, MapPin } from 'lucide-react';
import careLogo from '../assets/care_college_logo.png';

const educationList = [
  {
    id: 1,
    institution: 'CARE College of Engineering',
    degree: 'B.Tech, Artificial Intelligence & Data Science',
    period: 'Nov 2022 – Apr 2026',
    grade: 'A+',
    location: 'Tiruchirappalli, Tamil Nadu, India',
    logo: careLogo,
    color: 'bg-blue-50 border-blue-100 text-blue-600',
  },
  {
    id: 2,
    institution: 'Government Higher Secondary School',
    degree: 'HSC, Bio-Maths',
    period: 'Sep 2021 – Apr 2022',
    grade: '81%',
    location: 'Thanjavur, Tamil Nadu, India',
    logo: null,
    color: 'bg-purple-50 border-purple-100 text-purple-600',
  },
  {
    id: 3,
    institution: 'Government Higher Secondary School',
    degree: 'SSLC',
    period: 'Jun 2019 – May 2020',
    grade: '83%',
    location: 'Thanjavur, Tamil Nadu, India',
    logo: null,
    color: 'bg-emerald-50 border-emerald-100 text-emerald-600',
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="py-28 bg-[#F9F9F9]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-xs font-semibold uppercase tracking-widest text-muted"
          >
            Academic
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-ink mt-3"
          >
            Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted mt-4 max-w-xl text-sm"
          >
            A chronological timeline of my academic background, degrees, and grades.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

          <div className="space-y-6">
            {educationList.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative md:pl-16"
              >
                {/* Timeline dot/icon */}
                <div className="absolute left-3.5 top-6 w-3 h-3 rounded-full bg-gray-300 border-2 border-white shadow-sm hidden md:block" />

                {/* Card Container */}
                <div className="bg-white rounded-[2rem] border border-gray-100 p-6 md:p-8 hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
                    
                    {/* Left: Info Row */}
                    <div className="flex gap-4 items-start">
                      {edu.logo ? (
                        <img 
                          src={edu.logo} 
                          alt={`${edu.institution} logo`} 
                          className="w-12 h-12 rounded-xl object-contain border border-gray-100 p-1.5 bg-gray-50 flex-shrink-0"
                        />
                      ) : (
                        <div className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 ${edu.color}`}>
                          <School size={20} />
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-bold text-ink leading-snug">{edu.institution}</h3>
                        <p className="text-sm font-semibold text-muted mt-0.5">{edu.degree}</p>
                        <p className="text-xs text-muted mt-2.5 flex items-center gap-1.5">
                          <MapPin size={12} className="text-gray-400" />
                          {edu.location}
                        </p>
                      </div>
                    </div>

                    {/* Right: Grade Badge & Duration */}
                    <div className="flex flex-wrap md:flex-col md:items-end justify-between w-full md:w-auto gap-4 pt-4 md:pt-0 border-t border-gray-100 md:border-0">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-muted">
                        <Calendar size={12} />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-3.5 py-1 rounded-full">
                        <Award size={14} />
                        <span>Grade: {edu.grade}</span>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
