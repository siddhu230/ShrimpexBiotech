import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          <div className="footer-section">
            <motion.h4 
              className="text-xl font-bold mb-4"
              whilehover={{ color: '#800000' }}
            >
              Shrimpex Biotech Pvt Ltd
            </motion.h4>
            <p className="text-gray-300 mb-4">Advancing Science from Aquaculture to Human Health</p>
            <p className="text-gray-400 text-sm">Established 2011 • Chennai, India</p>
          </div>
          
          <div className="footer-section">
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Research', path: '/research' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <motion.li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                    whilehover={{ x: 5 }}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="text-xl font-bold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <p className="text-gray-300">Chennai, Tamil Nadu, India</p>
              <motion.a 
                href="mailto:info@shrimpexbiotech.com"
                className="text-gray-300 hover:text-white transition-colors duration-300 block"
                whilehover={{ color: '#800000' }}
              >
                info@shrimpexbiotech.com
              </motion.a>
              <motion.a 
                href="tel:+91-44-XXXX-XXXX"
                className="text-gray-300 hover:text-white transition-colors duration-300 block"
                whilehover={{ color: '#800000' }}
              >
                +91-44-XXXX-XXXX
              </motion.a>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 text-center"
        >
          <p className="text-gray-400">
            &copy; 2024 Shrimpex Biotech Pvt Ltd. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer