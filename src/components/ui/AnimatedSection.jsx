import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const AnimatedSection = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-50px",
    amount: 0.1 
  })
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    // Force check if element is already in viewport on mount
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0
      
      if (isVisible) {
        // Element is already visible, animate immediately
        setTimeout(() => setShouldAnimate(true), delay * 1000)
      }
    }
  }, [delay])

  useEffect(() => {
    if (isInView && !shouldAnimate) {
      setTimeout(() => setShouldAnimate(true), delay * 1000)
    }
  }, [isInView, shouldAnimate, delay])

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export default AnimatedSection