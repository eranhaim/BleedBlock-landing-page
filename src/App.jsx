import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import VideoSection from './components/VideoSection'
import Founder from './components/Founder'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div ref={containerRef} className="app">
      <motion.div
        className="scroll-progress"
        style={{ width: progressWidth }}
      />
      <Navbar />
      <Hero />
      <Features />
      <VideoSection />
      <Founder />
      <CTA />
      <Footer />
    </div>
  )
}
