import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import cattleImg    from '../assets/cattlevetlook_preview.png';
import crmImg       from '../assets/project_card_2.png';
import mysqlImg     from '../assets/mysql_tkinter_preview.png';
import opencvImg    from '../assets/opencv_classification_preview.png';
import powerbiHrImg from '../assets/powerbi_hr_analysis.png';

const projects = [
  {
    id: 1,
    title: 'CattleVetLook',
    type: 'Multimodal AI Framework · Veterinary Diagnostics',
    period: 'Jan 2026 – Apr 2026',
    tags: ['Google Gemini AI', 'Computer Vision', 'ElevenLabs TTS', 'Firebase', 'Flask', 'Python'],
    link: 'https://cattlevetlook.web.app/public/login.html',
    github: null,
    img: cattleImg,
    featured: true,
    stats: [
      { value: '90%',  label: 'Detection Accuracy' },
      { value: '15+',  label: 'Regional Languages' },
      { value: '24/7', label: 'Expert Availability' },
    ],
    summary:
      'An autonomous AI-powered veterinary diagnostic platform built to solve the lack of immediate veterinary access in rural farming communities.',
    highlights: [
      'Multimodal AI using Google Gemini — processes images & text for clinical disease detection in cattle',
      'Identifies bovine dermatological diseases and auto-generates medically grounded treatment plans',
      'ElevenLabs Voice AI delivers diagnostic results in Tamil, English & regional languages',
      'Geospatial module locates and connects farmers with the nearest certified veterinarians in real time',
      'Operates as a scalable 24/7 virtual veterinary clinic — no physical vet needed for first diagnosis',
      'Built with Firebase Studio & Flask for high-performance, production-ready deployment',
    ],
  },
  {
    id: 2,
    title: 'Staff Attendance Regularization',
    type: 'CRM Module · Application Development',
    period: 'May 2025 – Feb 2026',
    tags: ['CRM', 'Biometric Data', 'Workflow Design', 'SQL', 'Firebase'],
    link: null,
    github: null,
    img: crmImg,
    featured: false,
    stats: [
      { value: '10',   label: 'Months' },
      { value: '2',    label: 'Workflow Modules' },
      { value: '100%', label: 'Biometric Integrated' },
    ],
    summary:
      'Attendance regularization module with biometric punch processing and multi-level approval/rejection workflows — built during internship at WVI Web Ventures India.',
    highlights: [
      'Processed & validated raw biometric punch data for staff attendance',
      'Built approval and rejection workflow sub-modules for managers and HR',
      'Strengthened CRM logic-building with structured data models and UI flows',
    ],
  },
  {
    id: 3,
    title: 'MySQL DB App with Python GUI',
    type: 'Desktop Application · Database',
    period: 'May 2024 – Jun 2024',
    tags: ['Python', 'Tkinter', 'MySQL', 'MySQL Connector', 'CRUD'],
    link: null,
    github: 'https://github.com/rk-rajkamalR/MY-DB',
    img: mysqlImg,
    featured: false,
    stats: [
      { value: '4',     label: 'CRUD Operations' },
      { value: 'GUI',   label: 'Tkinter Frontend' },
      { value: 'MySQL', label: 'Backend DB' },
    ],
    summary:
      'A desktop CRUD application with a Tkinter GUI, connecting Python directly to MySQL for seamless INSERT, UPDATE, DELETE, and SELECT operations.',
    highlights: [
      'Full CRUD via MySQL Connector — INSERT, UPDATE, DELETE, SELECT',
      'Clean Tkinter GUI with form fields and live data table display',
      'Designed for scalability and future feature customization',
    ],
  },
  {
    id: 4,
    title: 'Image Classification with OpenCV',
    type: 'Computer Vision · Python',
    period: 'Mar 2024 – Apr 2024',
    tags: ['Python', 'OpenCV', 'Face Recognition', 'Machine Learning'],
    link: null,
    github: 'https://github.com/rk-rajkamalR/image-classification-',
    img: opencvImg,
    featured: false,
    stats: [
      { value: 'CV2',  label: 'OpenCV Engine' },
      { value: 'Auto', label: 'Image Tagging' },
      { value: 'ML',   label: 'Classification' },
    ],
    summary:
      'An image classification app using OpenCV and face recognition for automated tagging and categorisation of images — applicable in law enforcement and security.',
    highlights: [
      'Classifies and tags images automatically using ML algorithms',
      'Face recognition with OpenCV for identity matching and verification',
      'Practical application in crime scene analysis and suspect identification',
    ],
  },
  {
    id: 5,
    title: 'HR HC Analysis Dashboard',
    type: 'Data Analysis & Dashboard · Microsoft Power BI',
    period: 'Mar 2024',
    tags: ['Microsoft Power BI', 'Data Analysis', 'Data Sourcing', 'Workforce Metrics', 'Data Visualization'],
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7173737275925671936/?originTrackingId=MqVCcviSQiaW3k2i24x%2FtA%3D%3D',
    github: null,
    img: powerbiHrImg,
    featured: false,
    stats: [
      { value: '108',   label: 'Headcount Analyzed' },
      { value: 'Interactive', label: 'Filtering Slices' },
      { value: '5+',    label: 'Demographic Charts' },
    ],
    summary:
      'An interactive Power BI headcount and workforce dashboard created to analyze staffing trends, gender splits, age distributions, job roles, and geographic allocations.',
    highlights: [
      'Created a central HR Headcount volume trend chart tracking employee ratios from 2019 to 2023',
      'Designed donut charts for gender segmentation and multi-level treemaps for country-wise slicing',
      'Built-in interactive filtering parameters allowing instant dashboard query updates across 108 records',
    ],
  },
];

/* ─────────────────────────── CARD COMPONENT ─────────────────────────── */

function FeaturedCard({ project, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="md:col-span-2 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/7' }}>
        <img src={project.img} alt={project.title}
          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
        <span className="absolute top-4 left-4 bg-ink text-white text-xs font-bold px-3 py-1.5 rounded-full shadow border border-gray-800">Featured</span>
        <a href={project.link} target="_blank" rel="noopener noreferrer"
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-ink text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 hover:bg-white shadow">
          Live Site <ArrowUpRight size={12} />
        </a>
      </div>

      {/* Body: 2 columns */}
      <div className="p-8 grid md:grid-cols-2 gap-8">
        {/* Left */}
        <div>
          <span className="text-xs font-semibold text-muted uppercase tracking-widest">{project.type}</span>
          <h3 className="font-serif text-2xl font-bold text-ink mt-2 mb-1">{project.title}</h3>
          <span className="text-xs font-mono text-muted">{project.period}</span>
          <p className="text-muted text-sm leading-relaxed mt-4 mb-6">{project.summary}</p>

          <div className="flex gap-6 mb-6">
            {project.stats.map(s => (
              <div key={s.label}>
                <p className="text-2xl font-bold font-serif text-ink">{s.value}</p>
                <p className="text-xs text-muted mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map(t => (
              <span key={t} className="text-xs font-medium bg-[#F9F9F9] border border-gray-200 text-ink px-3 py-1.5 rounded-full">{t}</span>
            ))}
          </div>
        </div>

        {/* Right */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-muted mb-5">Key Highlights</p>
          <ul className="space-y-3">
            {project.highlights.map(h => (
              <li key={h} className="flex items-start gap-3 text-sm text-ink leading-relaxed">
                <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />{h}
              </li>
            ))}
          </ul>
          <a href={project.link} target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-ink text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
            View Live Project <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function SmallCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.1 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <img src={project.img} alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        
        {/* Active badges */}
        {project.github ? (
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-ink text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1 hover:bg-white shadow">
            GitHub <ArrowUpRight size={11} />
          </a>
        ) : project.link ? (
          <a href={project.link} target="_blank" rel="noopener noreferrer"
            className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-ink text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1 hover:bg-white shadow">
            LinkedIn Project <ArrowUpRight size={11} />
          </a>
        ) : null}
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <span className="text-xs font-semibold text-muted uppercase tracking-widest">{project.type}</span>
        <h3 className="font-serif text-xl font-bold text-ink mt-2 mb-0.5">{project.title}</h3>
        <span className="text-xs font-mono text-muted mb-3">{project.period}</span>
        <p className="text-muted text-sm leading-relaxed mb-5">{project.summary}</p>

        {/* Stats */}
        <div className="flex gap-5 mb-5">
          {project.stats.map(s => (
            <div key={s.label}>
              <p className="text-lg font-bold font-serif text-ink">{s.value}</p>
              <p className="text-xs text-muted mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <ul className="space-y-2 mb-5">
          {project.highlights.map(h => (
            <li key={h} className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ink flex-shrink-0" />{h}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(t => (
            <span key={t} className="text-xs font-medium bg-[#F9F9F9] border border-gray-200 text-ink px-3 py-1 rounded-full">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────── SECTION ─────────────────────────── */

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-28 bg-[#F9F9F9]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              className="text-xs font-semibold uppercase tracking-widest text-muted"
            >
              Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-bold text-ink mt-3"
            >
              Projects
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-sm text-muted max-w-xs leading-relaxed"
          >
            Real-world AI and data science systems — from idea to deployment.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Featured spans full 2 cols */}
          <FeaturedCard project={featured} inView={inView} />

          {/* 4 regular cards */}
          {rest.map((p, i) => (
            <SmallCard key={p.id} project={p} index={i} inView={inView} />
          ))}
        </div>

      </div>
    </section>
  );
}
