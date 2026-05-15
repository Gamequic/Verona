import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

export default function Newsletter() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) setSent(true)
  }

  return (
    <section id="contacto" className="py-28 lg:py-36 bg-mocha text-white relative overflow-hidden">
      {/* Subtle background texture lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-white"
            style={{ left: `${12.5 * (i + 1)}%` }}
          />
        ))}
      </div>

      <div ref={ref} className="max-w-xl mx-auto px-6 text-center relative">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-block text-[10px] font-sans font-semibold tracking-[0.38em] text-petal uppercase mb-5"
        >
          Comunidad Verona
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl lg:text-5xl italic mb-4"
        >
          Únete a la Academia
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-sans text-white/55 text-base leading-relaxed mb-10"
        >
          Recibe noticias de nuevos talleres, temporadas florales y descuentos exclusivos para nuestra
          comunidad de apasionados por las flores.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            {!sent ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto"
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  required
                  className="flex-1 px-5 py-3.5 bg-white/[0.07] border border-white/[0.12] text-white placeholder-white/35 text-sm font-sans focus:outline-none focus:border-petal focus:bg-white/[0.10] transition-all duration-200"
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 bg-petal text-white text-[13px] font-sans font-medium tracking-wide hover:bg-petal-dark transition-colors duration-200 whitespace-nowrap"
                >
                  Suscribirme
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-4 font-serif text-lg italic text-white/80"
              >
                ¡Bienvenida a la comunidad Verona! Pronto recibirás novedades.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
