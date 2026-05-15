import { motion } from 'framer-motion'
import { IMAGES } from '../data/content'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
})

const STATS = [
  ['150+', 'Estudiantes'],
  ['5', 'Años de pasión'],
  ['500+', 'Arreglos creados'],
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col-reverse lg:flex-row pt-20 overflow-hidden"
    >
      {/* Text column */}
      <div className="flex-none lg:w-[45%] flex flex-col justify-center px-8 lg:pl-16 xl:pl-24 lg:pr-12 py-16 lg:py-0">
        <motion.span
          {...fadeUp(0.25)}
          className="inline-block text-[10px] font-sans font-semibold tracking-[0.38em] text-petal uppercase mb-5"
        >
          Academia · Estudio
        </motion.span>

        <motion.h1
          {...fadeUp(0.4)}
          className="font-serif text-5xl lg:text-6xl xl:text-[4.25rem] font-medium leading-[1.08] text-charcoal mb-6"
        >
          Aprende el Arte,
          <br />
          <em className="italic text-charcoal/75">Regala Emoción</em>
        </motion.h1>

        <motion.p {...fadeUp(0.55)} className="font-sans text-stone-500 text-base leading-relaxed max-w-sm mb-10">
          En Verona unimos dos mundos: la <strong className="font-medium text-charcoal">Academia</strong> donde
          transmitimos el arte floral, y el{' '}
          <strong className="font-medium text-charcoal">Estudio</strong> donde cada arreglo nace desde la
          pasión y la técnica.
        </motion.p>

        <motion.div {...fadeUp(0.68)} className="flex flex-col sm:flex-row gap-3 mb-14">
          <a
            href="#academia"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-petal text-white font-sans text-sm font-medium tracking-wide hover:bg-petal-dark transition-colors duration-200"
          >
            Ver Cursos
          </a>
          <a
            href="#estudio"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-charcoal/20 text-charcoal font-sans text-sm font-medium tracking-wide hover:bg-charcoal hover:text-white hover:border-charcoal transition-all duration-200"
          >
            Ver Arreglos
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          {...fadeUp(0.82)}
          className="flex gap-8 pt-8 border-t border-charcoal/10"
        >
          {STATS.map(([num, label]) => (
            <div key={label}>
              <div className="font-serif text-3xl font-medium text-charcoal">{num}</div>
              <div className="text-[11px] font-sans text-stone-400 tracking-wide mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Image column */}
      <motion.div
        className="flex-none lg:flex-1 relative h-64 sm:h-80 lg:h-auto overflow-hidden"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={IMAGES.hero}
          alt="Florista de Verona sosteniendo un arreglo de autor"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle left-fade to blend with the white text column on desktop */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-pearl to-transparent pointer-events-none" />

        {/* Floating badge */}
        <motion.div
          className="absolute bottom-8 left-8 lg:left-auto lg:right-8 bg-pearl/95 backdrop-blur-sm px-5 py-3 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="font-serif text-sm text-charcoal italic">Arte floral de autor</div>
          <div className="text-[10px] font-sans text-stone-400 tracking-widest uppercase mt-0.5">
            Verona Studio
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
