import React from 'react'
import { motion } from 'framer-motion'
// // issue: there was a issue earlier so we created this component
// whileInView animations wait for Intersection Observer to trigger
// On route changes, the observer sometimes fails to fire immediately
// Content was technically rendered but invisible (opacity: 0) waiting for scroll
// So this component wraps all page with reliable entrance animation 

const PageWrapper = ({ children }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {children}
    </motion.div>
  )
}

export default PageWrapper