import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Database, 
  ScanFace, 
  Brain, 
  Webhook, 
  Sparkles, 
  Scissors,
  Terminal
} from 'lucide-react';

import powerBiIcon from '../assets/powerbi_icon.png';
import msOfficeIcon from '../assets/msoffice_icon.png';
import canvaIcon from '../assets/canva_icon.png';
import vscodeIcon from '../assets/vscode_icon.png';

const skillGroups = [
  {
    cat: 'Programming',
    color: 'bg-blue-50 border-blue-100',
    skills: ['Python', 'JavaScript', 'SQL'],
  },
  {
    cat: 'AI / ML Tools',
    color: 'bg-purple-50 border-purple-100',
    skills: ['OpenCV', 'Face Recognition', 'LLM API & Integration'],
  },
  {
    cat: 'Data Analytics & Visualization',
    color: 'bg-green-50 border-green-100',
    skills: ['Power BI', 'NumPy', 'Pandas'],
  },
  {
    cat: 'Database',
    color: 'bg-orange-50 border-orange-100',
    skills: ['MySQL Workbench', 'Firebase Firestore'],
  },
  {
    cat: 'Web Technologies',
    color: 'bg-cyan-50 border-cyan-100',
    skills: ['HTML', 'CSS', 'JavaScript', 'Streamlit', 'APIs'],
  },
  {
    cat: 'Tools & Platforms',
    color: 'bg-gray-50 border-gray-200',
    skills: ['Git', 'GitHub', 'VS Code', 'AI IDEs', 'Firebase CLI', 'Postman', 'Hugging Face', 'MS Office'],
  },
  {
    cat: 'Design',
    color: 'bg-pink-50 border-pink-100',
    skills: ['Canva', 'Stitch'],
  },
];

const getSkillIcon = (skill) => {
  // All standard small icons are exactly the same size: w-4 h-4 (16px)
  if (skill === 'Power BI') {
    return <img src={powerBiIcon} alt="Power BI icon" className="w-4 h-4 object-contain" />;
  }
  if (skill === 'MS Office') {
    return <img src={msOfficeIcon} alt="MS Office icon" className="w-4 h-4 object-contain" />;
  }
  if (skill === 'Canva') {
    return <img src={canvaIcon} alt="Canva icon" className="w-4 h-4 object-contain" />;
  }
  if (skill === 'VS Code') {
    return <img src={vscodeIcon} alt="VS Code icon" className="w-4 h-4 object-contain" />;
  }

  const cdnMap = {
    'Python': 'https://cdn.simpleicons.org/python',
    'JavaScript': 'https://cdn.simpleicons.org/javascript',
    'OpenCV': 'https://cdn.simpleicons.org/opencv',
    'NumPy': 'https://cdn.simpleicons.org/numpy',
    'Pandas': 'https://cdn.simpleicons.org/pandas',
    'MySQL Workbench': 'https://cdn.simpleicons.org/mysql',
    'Firebase Firestore': 'https://cdn.simpleicons.org/firebase',
    'HTML': 'https://cdn.simpleicons.org/html5',
    'CSS': 'https://cdn.simpleicons.org/css3',
    'Streamlit': 'https://cdn.simpleicons.org/streamlit',
    'Git': 'https://cdn.simpleicons.org/git',
    'GitHub': 'https://cdn.simpleicons.org/github',
    'Postman': 'https://cdn.simpleicons.org/postman',
    'Hugging Face': 'https://cdn.simpleicons.org/huggingface',
  };

  if (cdnMap[skill]) {
    return (
      <img 
        src={cdnMap[skill]} 
        alt={`${skill} icon`} 
        className="w-4 h-4 object-contain" 
        loading="lazy"
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
    );
  }

  // Custom icon fallbacks using Lucide React (exactly w-4 h-4 for uniformity)
  switch (skill) {
    case 'SQL':
      return <Database className="w-4 h-4 text-blue-600 stroke-[2.5]" />;
    case 'Face Recognition':
      return <ScanFace className="w-4 h-4 text-emerald-600 stroke-[2.5]" />;
    case 'LLM API & Integration':
      return <Brain className="w-4 h-4 text-purple-600 stroke-[2.5]" />;
    case 'APIs':
      return <Webhook className="w-4 h-4 text-indigo-600 stroke-[2.5]" />;
    case 'AI IDEs':
      return <Sparkles className="w-4 h-4 text-amber-500 stroke-[2.5]" fill="currentColor" fillOpacity="0.2" />;
    case 'Firebase CLI':
      return <Terminal className="w-4 h-4 text-orange-600 stroke-[2.5]" />;
    case 'Stitch':
      return <Scissors className="w-4 h-4 text-rose-500 stroke-[2.5]" />;
    default:
      return <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />;
  }
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-28 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <motion.span
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="text-xs font-semibold uppercase tracking-widest text-muted"
          >
            Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-ink mt-3"
          >
            Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted mt-4 max-w-xl"
          >
            A full-stack toolkit spanning AI/ML, data engineering, web development, and design.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.cat}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className={`rounded-3xl border p-7 ${group.color} flex flex-col justify-between`}
            >
              <div>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <p className="text-ink text-sm font-bold uppercase tracking-wider">{group.cat}</p>
                </div>

                {/* Skill Layout */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 text-xs font-medium bg-white border border-gray-200 text-ink px-3 py-1.5 rounded-full shadow-sm hover:border-gray-300 hover:scale-[1.03] transition-all duration-300"
                    >
                      {getSkillIcon(skill)}
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
