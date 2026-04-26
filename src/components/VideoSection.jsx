import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function VideoSection() {
  const ref = useRef(null)
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <section className="video-section" id="video" ref={ref}>
      <motion.div
        className="features-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section-label">סרטון</span>
        <h2 className="section-title">ראו את BleedBlock בפעולה</h2>
        <p className="section-subtitle">
          צפו כיצד התחבושת עוטפת את הגפה, עוצרת דימום ומעניקה הגנה
          מלאה תוך שניות ספורות.
        </p>
      </motion.div>

      <motion.div className="video-container" style={{ scale, opacity }}>
        <div className="video-frame">
          <div className="video-glow" />
          <video
            ref={videoRef}
            className="video-player"
            controls={isPlaying}
            onEnded={() => setIsPlaying(false)}
            playsInline
          >
            <source src="/product-video.mp4" type="video/mp4" />
          </video>
          {!isPlaying && (
            <div className="video-overlay" onClick={handlePlay}>
              <div className="video-play-btn">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  )
}
