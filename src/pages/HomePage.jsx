import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import StatsSection from '../components/sections/StatsSection'

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
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
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Text Section - Replaces video hero */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Advancing Science from{' '}
            <span className="gradient-text">Aquaculture</span> to{' '}
            <span className="gradient-text">Human Health</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Pioneering biotechnology solutions in aquaculture and human molecular diagnostics
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/services"
                className="hero-btn bg-maroon-500 hover:bg-maroon-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Human Diagnostics
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/services"
                className="hero-btn bg-maroon-500 hover:bg-maroon-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Aquaculture Solutions
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/research"
                className="hero-btn bg-maroon-500 hover:bg-maroon-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Research Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Stats Section */}
      <StatsSection />

      {/* Quick Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-8"
            >
              Leading Innovation in Biotechnology
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto"
            >
              From pioneering aquaculture solutions to advanced human molecular diagnostics, 
              we bridge scientific domains to create breakthrough biotechnology innovations.
            </motion.p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  title: "Human Diagnostics",
                  description: "Advanced genomic sequencing and molecular diagnostics for precision medicine",
                  link: "/services",
                  icon: "🧬"
                },
                {
                  title: "Aquaculture Solutions", 
                  description: "Innovative biotechnology products for sustainable aquaculture practices",
                  link: "/services",
                  icon: "🦐"
                },
                {
                  title: "Research Excellence",
                  description: "Cutting-edge research with 50+ publications and ongoing innovations",
                  link: "/research",
                  icon: "🔬"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <Link
                    to={item.link}
                    className="text-maroon-500 font-semibold hover:text-maroon-600 transition-colors duration-300"
                  >
                    Learn More →
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-maroon-500 to-maroon-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Advance Your Research?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Partner with us for innovative biotechnology solutions that bridge aquaculture and human health
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-maroon-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-maroon-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default HomePage