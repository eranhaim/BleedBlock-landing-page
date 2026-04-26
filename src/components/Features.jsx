import { motion } from 'framer-motion'

const features = [
  {
    icon: '🩸',
    title: 'עצירת דימום עם מקריש דם',
    description:
      'התחבושת משלבת חומר מקריש דם בתוך הידרוג\'ל ייחודי, שעוצר דימומים ביעילות גבוהה — הרבה מעבר לספיגה פסיבית.',
  },
  {
    icon: '🛡️',
    title: 'מעטפת מלאה לגפה',
    description:
      'המבנה ההנדסי עוטף את כל הגפה הפצועה ומונע חדירת עצמים וזיהומים מבחוץ, תוך שמירה על סביבה סטרילית.',
  },
  {
    icon: '⚡',
    title: 'טיפול אנטי-בקטריאלי מובנה',
    description:
      'שילוב חומר אנטי-בקטריאלי בתוך התחבושת מוריד משמעותית את הסיכוי לזיהומים — כבר מרגע ההנחה הראשונה.',
  },
  {
    icon: '🕐',
    title: 'שלוש שעות הגנה רציפה',
    description:
      'מרגע הנחת התחבושת, היא מקנה עד שלוש שעות של טיפול רציף — הדם לא מתייבש, העור לא נפגע, והפצוע מוגן עד הגעה לבית החולים.',
  },
  {
    icon: '🏥',
    title: 'הסרה מהירה ויעילה',
    description:
      'התחבושת תוכננה להסרה מהירה ואיכותית, מה שמקנה יעילות גבוהה בחדרי ניתוח ובחדרי עיון.',
  },
  {
    icon: '💊',
    title: 'שיכוך כאב ראשוני',
    description:
      'בנוסף לעצירת הדימום, התחבושת כוללת חומר משכך כאב ראשוני המשולב בהידרוג\'ל — מענה תרופתי מיידי בשטח.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function Features() {
  return (
    <section className="features" id="product">
      <motion.div
        className="features-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section-label">המוצר</span>
        <h2 className="section-title">למה BleedBlock?</h2>
        <p className="section-subtitle">
          תחבושת שונה מכל מה שיש בשוק — משלבת עצירת דימום, חיטוי
          ושיכוך כאב במוצר הנדסי אחד שעוטף ומגן על הגפה.
        </p>
      </motion.div>

      <div className="features-grid">
        {features.map((feature, i) => (
          <motion.div
            className="feature-card"
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
