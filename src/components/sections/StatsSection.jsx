import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const StatsSection = () => {
  const [counters, setCounters] = useState({
    tests: 0,
    experience: 0,
    publications: 0,
    scientists: 0
  })
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const statsData = [
    { key: 'tests', target: 1000, label: 'Tests Conducted', suffix: '+' },
    { key: 'experience', target: 15, label: 'Years Experience', suffix: '+' },
    { key: 'publications', target: 50, label: 'Research Publications', suffix: '+' },
    { key: 'scientists', target: 25, label: 'Expert Scientists', suffix: '+' }
  ]

  useEffect(() => {
    if (!isInView) return

    statsData.forEach(({ key, target }) => {
      let current = 0
      const increment = target / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }))
      }, 40)
    })
  }, [isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <div ref={ref} className="max-w-6xl mx-auto px-4 -mt-20 relative z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {statsData.map((stat, index) => (
          <motion.div
            key={stat.key}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              transition: { duration: 0.3 }
            }}
            className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div 
              className="stat-number text-3xl font-bold text-maroon-500 mb-2"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: index * 0.2 + 0.5, duration: 0.5, type: "spring" }}
            >
              {counters[stat.key]}{stat.suffix}
            </motion.div>
            <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default StatsSection