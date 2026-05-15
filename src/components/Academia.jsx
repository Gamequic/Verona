import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { COURSES } from '../data/content'

function SectionHeader({ inView }) {
  return (
    <div className="mb-16 lg:mb-20 max-w-2xl">
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="inline-block text-[10px] font-sans font-semibold tracking-[0.38em] text-petal uppercase mb-4"
      >
        Aprende con nosotros
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-serif text-5xl lg:text-[3.5rem] italic text-charcoal"
      >
        Academia Floral
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.55, delay: 0.3 }}
        className="mt-5 h-px w-16 bg-petal origin-left"
      />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-5 font-sans text-stone-500 text-base leading-relaxed"
      >
        Talleres íntimos donde la técnica se convierte en expresión. Aprende a crear con flores desde cero
        o perfecciona tu habilidad junto a maestros de autor.
      </motion.p>
    </div>
  )
}

function CourseCard({ course, index, sectionInView }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const visible = sectionInView || inView

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.15 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col bg-pearl"
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
        {course.tag && (
          <span className="absolute top-4 left-4 z-10 bg-petal text-white text-[10px] font-sans font-semibold tracking-[0.2em] uppercase px-3 py-1">
            {course.tag}
          </span>
        )}
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 border border-t-0 border-charcoal/[0.08]">
        <span className="text-[10px] font-sans font-semibold tracking-[0.3em] text-petal uppercase mb-2">
          {course.subtitle}
        </span>
        <h3 className="font-serif text-xl font-medium text-charcoal mb-3 leading-snug">{course.title}</h3>
        <p className="font-sans text-stone-500 text-sm leading-relaxed flex-1 mb-5">{course.description}</p>
        <div className="flex items-center justify-between pt-4 border-t border-charcoal/[0.08]">
          <div>
            <div className="font-serif text-xl text-charcoal">{course.price}</div>
            <div className="text-[11px] text-stone-400 font-sans mt-0.5">{course.duration}</div>
          </div>
          <a
            href="#contacto"
            className="inline-flex items-center gap-1.5 text-petal text-sm font-sans font-medium hover:gap-3 transition-all duration-200"
          >
            Reservar
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default function Academia() {
  const headerRef = useRef(null)
  const inView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="academia" className="py-24 lg:py-32 bg-pearl-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={headerRef}>
          <SectionHeader inView={inView} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {COURSES.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} sectionInView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
