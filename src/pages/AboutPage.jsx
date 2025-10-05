import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/ui/AnimatedSection'

const AboutPage = () => {
  useEffect (()=>{
    scrollTo(0,0);
  })  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <AnimatedSection className="min-h-screen bg-white flex items-center py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
          >
            About Shrimpex Biotech
          </motion.h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2011, Shrimpex Biotech Pvt Ltd has established itself as a pioneering force in biotechnology, bridging the gap between aquaculture innovation and human molecular diagnostics. Based in Chennai, India, we combine deep scientific expertise with cutting-edge technology to deliver solutions that advance both aquatic sciences and human health.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our multidisciplinary approach allows us to leverage insights from marine biotechnology to develop innovative diagnostic solutions for human health, creating a unique synergy that sets us apart in the biotechnology landscape.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-maroon-50 to-maroon-100 rounded-2xl p-8 text-center"
            >
              <div className="text-6xl text-maroon-500 mb-4">🧬</div>
              <h3 className="text-2xl font-bold text-maroon-500 mb-2">Innovation Hub</h3>
              <p className="text-gray-600">Connecting aquaculture research with human health solutions</p>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8"
            >
              <div className="text-4xl text-blue-600 mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To advance scientific knowledge and improve lives through innovative biotechnology solutions that bridge aquaculture research and human health diagnostics, delivering accurate, reliable, and accessible molecular diagnostic services.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8"
            >
              <div className="text-4xl text-green-600 mb-4">🔬</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a global leader in biotechnology innovation, recognized for our excellence in molecular diagnostics, aquaculture solutions, and our commitment to advancing scientific understanding for the betterment of human and aquatic life.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Timeline Section */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Our Journey
          </motion.h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-maroon-200"></div>
            
            {[
              {
                year: "2011",
                title: "Company Founded",
                description: "Shrimpex Biotech established in Chennai with a focus on aquaculture biotechnology"
              },
              {
                year: "2015",
                title: "Research Expansion",
                description: "Expanded into molecular diagnostics and human health applications"
              },
              {
                year: "2018",
                title: "Quality Certifications",
                description: "Achieved ISO 9001:2015 and NABL accreditation for laboratory services"
              },
              {
                year: "2021",
                title: "Advanced Genomics",
                description: "Launched whole genome and exome sequencing services"
              },
              {
                year: "2024",
                title: "Global Recognition",
                description: "Recognized as a leading biotechnology innovation company in India"
              }
            ].map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-2xl font-bold text-maroon-500 mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-maroon-500 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Our Expertise
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Molecular Biology",
                description: "Expert team in genomics, proteomics, and molecular diagnostics",
                icon: "🧬"
              },
              {
                title: "Aquaculture Sciences",
                description: "Specialized knowledge in marine biology and aquaculture technologies",
                icon: "🐟"
              },
              {
                title: "Bioinformatics",
                description: "Advanced computational biology and data analysis capabilities",
                icon: "💻"
              }
            ].map((expertise, index) => (
              <motion.div
                key={expertise.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{expertise.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{expertise.title}</h3>
                <p className="text-gray-600">{expertise.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </motion.div>
  )
}

export default AboutPage