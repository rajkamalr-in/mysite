import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, FileText, Users, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import certificateImg from '../assets/certificate.png';
import bookCoverImg from '../assets/book_cover.png';
import careLogo from '../assets/care_college_logo.png';
import nssLogo from '../assets/nss_logo.png';

import certZoho from '../assets/cert_zoho.png';
import certLinkedInPrompt from '../assets/cert_linkedin_prompt.png';
import certHackerRankPython from '../assets/cert_hackerrank_python.png';
import certGuviChatgpt from '../assets/cert_guvi_chatgpt.png';
import certGuviPython from '../assets/cert_guvi_python.png';

const leadershipRoles = [
  {
    role: 'Resident Leader',
    subtitle: 'CARE Boys Hostel',
    org: 'CARE College of Engineering',
    logo: careLogo,
    duration: 'Jun 2024 - May 2025 · 1 yr',
    location: 'Tiruchirappalli, India',
    bullets: [
      'Technical Mentorship: Conducted daily programming sessions for 50+ junior students, teaching Python, AI concepts, and project development.',
      'Hands-on Workshops: Conceptualized and led coding bootcamps focused on real-time project building to bridge theory and engineering.',
      'Community Welfare: Balanced hostel administration and student welfare while cultivating an active, collaborative coding culture.'
    ]
  },
  {
    role: 'Vice President',
    subtitle: 'ADSA (AI & Data Science Association)',
    org: 'CARE College of Engineering',
    logo: careLogo,
    duration: 'Jun 2024 - May 2025 · 1 yr',
    location: 'Tiruchirappalli, India',
    bullets: [
      'Technical Leadership: Organized and led hands-on technical workshops introducing text-to-speech, Streamlit, and Gemini API integration.',
      'Skill Development: Guided participants through building interactive web applications from scratch, bridging theory and practical deployment.',
      'Community Engagement: Cultivated a practical learning environment, equipping peers with modern software development skills.'
    ]
  },
  {
    role: 'Student Volunteer',
    subtitle: 'National Service Scheme (NSS)',
    org: 'National Service Scheme',
    logo: nssLogo,
    duration: 'Jun 2023 - May 2024 · 1 yr',
    location: 'CARE College Campus',
    bullets: [
      'Active Volunteering: Dedicated student volunteer in CARE College of Engineering NSS unit contributing to rural development programs.',
      'Social Welfare: Conducted neighborhood outreach, public health awareness, and environmental cleanliness initiatives.',
      'Civic Engagement: Fostered strong teamwork and community service values to solve civic challenges inside the residential community.'
    ]
  }
];

const certifications = [
  {
    title: 'Zoho Creator Student Training',
    issuer: 'Zoho Creator (Young Creators Program)',
    issued: 'Issued Apr 2024',
    id: 'Training Completion Certificate',
    link: 'https://media.licdn.com/dms/image/v2/D5622AQEST6WiEUQ5sw/feedshare-image-high-res/feedshare-image-high-res/0/1712194614803?e=1781740800&v=beta&t=kFUhtEqdxKxwmSsfGRlw-KfJOAxNR8C4smG51mi38v8',
    img: certZoho,
  },
  {
    title: 'Introduction to Prompt Engineering for Generative AI',
    issuer: 'LinkedIn Learning',
    issued: 'Issued Jun 2025',
    id: 'f1e6ec2790dcabc84f32ddd1744961502442b568c9283e55e6cc49072f1efb50',
    link: 'https://www.linkedin.com/learning/certificates/f1e6ec2790dcabc84f32ddd1744961502442b568c9283e55e6cc49072f1efb50',
    img: certLinkedInPrompt,
  },
  {
    title: 'Python (Basic)',
    issuer: 'HackerRank',
    issued: 'Issued Jan 2025',
    id: 'F140BE5BAD35',
    link: 'https://www.hackerrank.com/certificates/iframe/f140be5bad35',
    img: certHackerRankPython,
  },
  {
    title: 'ChatGPT for Everyone',
    issuer: 'HCL GUVI',
    issued: 'Issued Aug 2023',
    id: '2Q9w63730x71G7pzli',
    link: 'https://www.guvi.in/share-certificate/2Q9w63730x71G7pz1i',
    img: certGuviChatgpt,
  },
  {
    title: 'Python Programing',
    issuer: 'HCL GUVI',
    issued: 'Issued Jul 2023',
    id: '895e3W1Bj6i2ms138q',
    link: 'https://www.guvi.in/share-certificate/895e3W1Bj6i2ms138q',
    img: certGuviPython,
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certifications.length) % certifications.length);
  };

  return (
    <section id="achievements" className="py-28 bg-[#F9F9F9]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <motion.span
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="text-xs font-semibold uppercase tracking-widest text-muted"
          >
            Milestones
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-ink mt-3"
          >
            Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted mt-4 max-w-xl"
          >
            Research publications, published books, technical leadership, and credentials.
          </motion.p>
        </div>

        {/* ─── TWO LANDMARK FEATURED CARDS (PAPER & BOOK AUTHOR) ─── */}
        <div className="flex flex-col gap-8 mb-20">

          {/* Card 1: Peer-Reviewed Publication */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-[2.5rem] border border-gray-100 p-6 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Certificate Preview */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <motion.a 
                  href="https://www.ijfmr.com/research-paper.php?id=71804"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="block w-full overflow-hidden rounded-2xl border border-gray-200/80 shadow-md group relative cursor-zoom-in bg-gray-50"
                >
                  <img 
                    src={certificateImg} 
                    alt="Certificate of Publication - IJFMR" 
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-ink/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 backdrop-blur-sm text-ink text-xs font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                      <ExternalLink size={14} /> View Certificate
                    </span>
                  </div>
                </motion.a>
                <p className="text-[11px] text-muted mt-3 text-center italic">
                  Certificate of Publication — IJFMR (Paper ID: 71804)
                </p>
              </div>

              {/* Right Column: Text & Content */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                {/* Highlight Badge */}
                <div className="flex items-center gap-2 bg-amber-50 border border-amber-100 text-amber-700 px-4 py-1.5 rounded-full w-fit mb-6 text-xs font-bold uppercase tracking-wider">
                  <Award size={16} className="stroke-[2.5]" />
                  Peer-Reviewed Publication
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink leading-tight mb-2">
                  CattleVetLook: A multimodal large language model integration for autonomous cattle disease diagnosis
                </h3>
                
                {/* Subtitle */}
                <p className="text-sm font-semibold text-muted mb-6 flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span>International Journal For Multidisciplinary Research (IJFMR)</span>
                  <span className="text-gray-300">|</span>
                  <span>Paper ID: 71804</span>
                </p>

                {/* Description */}
                <div className="text-sm text-muted leading-relaxed space-y-4 mb-8">
                  <p>
                    I am incredibly proud to announce the publication of our final-year research paper in the prestigious, international peer-reviewed journal <strong>IJFMR</strong> (Impact Factor: 9.24). 
                    Our 3-member team developed <strong>CattleVetLook</strong>, an autonomous diagnostic framework leveraging the multimodal capabilities of <strong>Google Gemini AI</strong> and <strong>ElevenLabs Voice AI</strong> to deliver real-time veterinary care in regional languages (Tamil and English) directly to rural farmers.
                  </p>
                  <p>
                    Receiving exceptional review scores—particularly a <strong>9/10 in 'Use of Theory'</strong> and <strong>9/10 in 'Understanding & Illustrations'</strong>—is a powerful testament to the technical content and correctness with which we executed this project.
                  </p>
                  <div className="text-xs border-t border-gray-100 pt-4 flex flex-wrap gap-x-6 gap-y-2">
                    <span className="flex items-center gap-1.5">
                      <Users size={14} className="text-gray-400" />
                      <strong>Co-Authors:</strong> Ms. U. Supraja, Ms. U. Susmitha
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Award size={14} className="text-gray-400" />
                      <strong>Advisor:</strong> Ms. N. Parveen Banu N (Assistant Professor, CARE College)
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.ijfmr.com/research-paper.php?id=71804"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-ink hover:bg-ink/90 text-white text-xs font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <FileText size={16} /> Read Full Paper
                  </a>
                  <a
                    href="https://www.ijfmr.com/research-paper.php?id=71804"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-gray-300 text-ink text-xs font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <ExternalLink size={16} /> Verify IJFMR ID
                  </a>
                </div>

              </div>

            </div>
          </motion.div>

          {/* Card 2: Published Book Author */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-[2.5rem] border border-gray-100 p-6 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Book Cover Preview */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <motion.a 
                  href="https://www.amazon.in/dp/B0GX3674BP?ref=cm_sw_r_ffobk_apan_dp_MSRQSWS35JSTQZZ1YH0W_2&ref_=cm_sw_r_ffobk_apan_dp_MSRQSWS35JSTQZZ1YH0W_2&social_share=cm_sw_r_ffobk_apan_dp_MSRQSWS35JSTQZZ1YH0W_2&bestFormat=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="block w-full max-w-[280px] overflow-hidden rounded-2xl border border-gray-200/80 shadow-md group relative cursor-zoom-in bg-gray-50"
                >
                  <img 
                    src={bookCoverImg} 
                    alt="Building a Career That Grades Can't Measure Book Cover" 
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-ink/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 backdrop-blur-sm text-ink text-xs font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                      <BookOpen size={14} /> View on Amazon
                    </span>
                  </div>
                </motion.a>
                <p className="text-[11px] text-muted mt-3 text-center italic">
                  Building a Career That Grades Can’t Measure — Official Cover
                </p>
              </div>

              {/* Right Column: Text & Content */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                {/* Highlight Badge */}
                <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full w-fit mb-6 text-xs font-bold uppercase tracking-wider">
                  <BookOpen size={16} className="stroke-[2.5]" />
                  Published Book Author
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink leading-tight mb-2">
                  Building a Career That Grades Can’t Measure
                </h3>
                
                {/* Subtitle / Subtext */}
                <p className="text-sm font-semibold text-muted mb-4 flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span>Author: Rajkamal Ravichandran</span>
                  <span className="text-gray-300">|</span>
                  <span>Self-Published</span>
                </p>

                {/* Highlight Quote */}
                <div className="border-l-4 border-amber-400 pl-4 py-1.5 my-4 bg-amber-50/40 rounded-r-xl pr-3">
                  <p className="text-sm italic font-medium text-ink leading-relaxed">
                    &ldquo;Grades get you the degree, but skills get you the career.&rdquo;
                  </p>
                </div>

                {/* Description */}
                <div className="text-sm text-muted leading-relaxed space-y-4 mb-8">
                  <p>
                    I am thrilled to announce the publication of my book! <strong>Building a Career That Grades Can’t Measure</strong> is a must-read guide designed specifically for students feeling stuck in the traditional, rigid "Academic Script."
                  </p>
                  <p>
                    This book teaches students how to strategically balance their academic GPA while constructing a robust, T-shaped technical skillset that artificial intelligence cannot replace. Focus on real skills, build actionable solutions, and start designing a career on your own terms.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.amazon.in/dp/B0GX3674BP?ref=cm_sw_r_ffobk_apan_dp_MSRQSWS35JSTQZZ1YH0W_2&ref_=cm_sw_r_ffobk_apan_dp_MSRQSWS35JSTQZZ1YH0W_2&social_share=cm_sw_r_ffobk_apan_dp_MSRQSWS35JSTQZZ1YH0W_2&bestFormat=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-ink hover:bg-ink/90 text-white text-xs font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <BookOpen size={16} /> Get it on Amazon
                  </a>
                </div>

              </div>

            </div>
          </motion.div>

        </div>

        {/* Leadership Section Subheading */}
        <div className="mt-24 mb-10">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-serif text-3xl font-bold text-ink"
          >
            Leadership & Volunteering
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-muted text-sm mt-2 max-w-xl"
          >
            Empowering peers through technical mentorship, organizational leadership, and community service.
          </motion.p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {leadershipRoles.map((role, i) => (
            <motion.div
              key={role.role + i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Logo & Title info */}
                <div className="flex gap-4 items-start mb-5">
                  <img 
                    src={role.logo} 
                    alt={`${role.org} logo`} 
                    className="w-12 h-12 rounded-xl object-contain border border-gray-100 p-1.5 bg-gray-50 flex-shrink-0" 
                  />
                  <div>
                    <h4 className="text-base font-bold text-ink leading-snug">{role.role}</h4>
                    <p className="text-xs font-semibold text-muted uppercase tracking-wider mt-0.5">{role.subtitle}</p>
                    <p className="text-[10px] text-muted font-medium mt-1 uppercase tracking-wide">{role.org}</p>
                  </div>
                </div>

                {/* Subtitle/Timeline Info */}
                <div className="text-[11px] text-muted border-t border-b border-gray-100 py-2 mb-4 flex items-center justify-between font-mono">
                  <span>{role.duration}</span>
                  <span>{role.location}</span>
                </div>

                {/* Bullets */}
                <ul className="text-xs text-muted leading-relaxed space-y-2.5 list-disc pl-4">
                  {role.bullets.map((bullet, idx) => (
                    <li key={idx} className="marker:text-gray-400">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Subheading */}
        <div className="mt-24 mb-10">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-serif text-3xl font-bold text-ink"
          >
            Certifications
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-muted text-sm mt-2 max-w-xl"
          >
            Industry-recognized technical credentials and prompt engineering achievements.
          </motion.p>
        </div>

        {/* Interactive Certificate Slider (One-by-one Carousel) */}
        <div className="relative flex items-center justify-center min-h-[400px] overflow-hidden px-4 md:px-12 py-6">
          <button 
            onClick={handlePrev} 
            className="absolute left-0 md:left-4 z-10 p-3 rounded-full bg-white border border-gray-200/80 shadow-md hover:bg-gray-50 transition-colors text-ink cursor-pointer"
            aria-label="Previous Certificate"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="w-full max-w-4xl overflow-hidden py-4 px-2">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white rounded-[2rem] border border-gray-100 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Image side (7 cols) */}
                <div className="md:col-span-7 flex flex-col items-center">
                  <a 
                    href={certifications[currentIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full overflow-hidden rounded-xl border border-gray-200 shadow-sm relative group cursor-zoom-in bg-gray-50"
                  >
                    <img 
                      src={certifications[currentIndex].img} 
                      alt={certifications[currentIndex].title} 
                      className="w-full h-auto max-h-[300px] object-contain mx-auto"
                    />
                    <div className="absolute inset-0 bg-ink/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white/95 backdrop-blur-sm text-ink text-xs font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5">
                        <ExternalLink size={14} /> View Original
                      </span>
                    </div>
                  </a>
                </div>

                {/* Details side (5 cols) */}
                <div className="md:col-span-5 flex flex-col justify-center">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-600 mb-3 bg-amber-50 px-3 py-1 rounded-full w-fit">
                    <Award size={14} />
                    <span>Verified Credential</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-ink mb-1.5 leading-tight">
                    {certifications[currentIndex].title}
                  </h4>
                  <p className="text-sm font-semibold text-muted mb-1">
                    {certifications[currentIndex].issuer}
                  </p>
                  <p className="text-xs text-muted mb-4 font-mono">
                    {certifications[currentIndex].issued}
                  </p>
                  {certifications[currentIndex].id && (
                    <div className="text-[10px] text-muted border-l-2 border-gray-200 pl-3 mb-6">
                      <span className="font-semibold">Credential ID:</span> <span className="font-mono">{certifications[currentIndex].id}</span>
                    </div>
                  )}

                  <a
                    href={certifications[currentIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-ink hover:bg-ink/90 text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 w-full md:w-fit"
                  >
                    <ExternalLink size={14} /> Verify Certificate
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            onClick={handleNext} 
            className="absolute right-0 md:right-4 z-10 p-3 rounded-full bg-white border border-gray-200/80 shadow-md hover:bg-gray-50 transition-colors text-ink cursor-pointer"
            aria-label="Next Certificate"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {certifications.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex ? 'bg-ink w-6' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Footnote Link */}
        <div className="text-center mt-12">
          <p className="text-xs text-muted">
            Looking for more credentials? Feel free to visit my{' '}
            <a 
              href="https://www.linkedin.com/in/rajkamalr-in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-ink font-semibold underline underline-offset-4 hover:text-ink/80 transition-colors"
            >
              LinkedIn Profile
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
