import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="cta" id="contact">
      <motion.div
        className="cta-container"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          מוכנים להכיר את העתיד?
        </motion.h2>
        <motion.p
          className="cta-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          BleedBlock נולדה מתוך צורך אמיתי בשטח — ואנחנו מחפשים
          שותפים שירצו להיות חלק מהמהפכה הרפואית הבאה.
        </motion.p>
        <motion.button
          className="btn-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          בואו נדבר
        </motion.button>
      </motion.div>
    </section>
  )
}
