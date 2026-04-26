import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.15,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const stats = [
  { value: '3+', label: 'שעות הגנה רציפה מרגע ההנחה' },
  { value: '360°', label: 'מעטפת מלאה לגפה הפצועה' },
  { value: '3 ב-1', label: 'עצירת דימום, חיטוי ושיכוך כאב' },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const imgOpacity = useTransform(scrollYProgress, [0, 0.5], [0.35, 0])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  return (
    <section className="hero" ref={ref}>
      <motion.div
        className="hero-bg-image"
        style={{ opacity: imgOpacity, scale: imgScale, y: bgY }}
      />
      <motion.div className="hero-bg-gradient" style={{ y: bgY }} />
      <div className="hero-grid-overlay" />

      <motion.div className="hero-content" style={{ opacity }}>
        <motion.div
          className="hero-badge"
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <span className="hero-badge-dot" />
          טכנולוגיה מהפכנית בתחום הרפואה
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          תחבושת <span className="highlight">רב-שימושית</span>
          <br />
          שמשנה את כללי המשחק
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          תחבושת מהפכנית שנולדה מתוך צורך אמיתי בשטח — BleedBlock עוטפת
          את הגפה הפצועה ומעניקה מענה משולש: עצירת דימום, טיפול אנטי-בקטריאלי
          ושיכוך כאב ראשוני, הכל במוצר אחד.
        </motion.p>

        <motion.div
          className="hero-buttons"
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <button className="btn-primary">גלו את המוצר</button>
          <button className="btn-secondary">צפו בסרטון</button>
        </motion.div>

        <motion.div
          className="hero-stats"
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, i) => (
            <div className="hero-stat" key={i}>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
