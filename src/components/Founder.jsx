import { motion } from 'framer-motion'

export default function Founder() {
  return (
    <section className="founder" id="founder">
      <motion.div
        className="features-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section-label">המייסד</span>
        <h2 className="section-title">מאחורי החזון</h2>
      </motion.div>

      <div className="founder-content">
        <motion.div
          className="founder-image-wrapper"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="founder-image">
            <img src="/founder.png" alt="המייסד" className="founder-photo" />
          </div>
          <div className="founder-image-accent" />
        </motion.div>

        <motion.div
          className="founder-info"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h3>דויד סעדה</h3>
          <p className="founder-title">
            מייסד BleedBlock | מפקד בצה"ל וחובש
          </p>
          <p className="founder-bio">
            דויד התחיל את דרכו בתחום הרפואה כבר ב-2017 כחובש, העביר קורסי
            עזרה ראשונה, ושירת כמפקד בגדוד 82 בחיל השריון. במהלך המלחמה נלחם
            בכל הגזרות — עזה, לבנון וסוריה — תחת חטיבה 7 ובחזית הלחימה.
          </p>
          <p className="founder-bio">
            הרעיון ל-BleedBlock נולד מתוך חוויה אישית בשטח: אירועי רב-נפגעים
            בהם היו פצועים רבים עם דימומים וטראומות קשות — בלי מספיק חובשים
            ובלי ציוד שנותן מענה אמיתי. דויד היה מקור הטיפול הראשוני היחיד
            עבור הפצועים, וההתנסות הזו הובילה אותו לפתח פתרון טוב יותר.
          </p>
          <blockquote className="founder-quote">
            &ldquo;הייתי שם, בשטח, עם פצועים שצריכים טיפול מיידי ואין מספיק
            כלים. מהרגע הזה ידעתי שאני חייב ליצור משהו שישנה את
            המציאות.&rdquo;
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
