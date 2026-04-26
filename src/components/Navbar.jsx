import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href="#" className="navbar-logo">
        <img src="/logo.png" alt="BleedBlock" className="navbar-logo-img" />
      </a>

      <ul className="navbar-links">
        <li><a href="#product">המוצר</a></li>
        <li><a href="#video">סרטון</a></li>
        <li><a href="#founder">המייסד</a></li>
        <li><a href="#contact">צור קשר</a></li>
      </ul>

      <a href="#contact" className="navbar-cta">בואו נדבר</a>
    </motion.nav>
  )
}
