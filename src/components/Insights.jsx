import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import b1 from '../assets/blog_card_1.png';
import b2 from '../assets/project_card_1.png';
import b3 from '../assets/project_card_2.png';

const posts = [
  {
    id: 1,
    cat: 'Design Trends',
    date: 'May 20, 2024',
    title: '10 UI Trends Reshaping the Web in 2024',
    excerpt:
      'From glassmorphism to bento grids — discover the design movements shaping the future of digital interfaces and how to apply them today.',
    img: b1,
    featured: true,
  },
  {
    id: 2,
    cat: 'Typography',
    date: 'Apr 15, 2024',
    title: "The Art of Pairing Fonts: A Designer's Complete Guide",
    img: b2,
  },
  {
    id: 3,
    cat: 'Color Theory',
    date: 'Mar 28, 2024',
    title: 'Mastering Color Psychology in Brand Design',
    img: b3,
  },
  {
    id: 4,
    cat: 'Process',
    date: 'Feb 14, 2024',
    title: 'My 5-Step Creative Process for Winning Client Projects',
    img: b1,
  },
];

export default function Insights() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="insights" className="py-28 bg-[#F9F9F9]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-xs font-semibold uppercase tracking-widest text-muted"
            >
              Insights
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-bold text-ink mt-3"
            >
              Design Insights &amp; Trends
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            href="#"
            className="text-sm font-semibold text-ink border-b border-ink pb-0.5 self-start"
          >
            Read All Posts →
          </motion.a>
        </div>

        {/* Layout: Featured + side list */}
        <div className="grid md:grid-cols-5 gap-6">

          {/* Featured */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-3 group bg-white rounded-3xl overflow-hidden shadow-sm cursor-pointer"
          >
            <div className="overflow-hidden aspect-video">
              <img
                src={posts[0].img}
                alt={posts[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold bg-ink text-white px-3 py-1 rounded-full">
                  {posts[0].cat}
                </span>
                <span className="text-xs text-muted">{posts[0].date}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink mb-3">{posts[0].title}</h3>
              <p className="text-muted leading-relaxed mb-6">{posts[0].excerpt}</p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
                Read Article <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.article>

          {/* Side list */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {posts.slice(1).map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm flex gap-4 p-4 cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="w-24 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-semibold text-muted block mb-1">{post.cat}</span>
                  <h3 className="text-sm font-semibold text-ink leading-snug line-clamp-2">{post.title}</h3>
                  <span className="text-xs text-muted block mt-2">{post.date}</span>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
