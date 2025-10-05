import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '../components/ui/AnimatedSection'

const ServicesPage = () => {
    useEffect(() => {
        scrollTo(0, 0);
    })
    const [activeTab, setActiveTab] = useState('diagnostics')

    const tabs = [
        { id: 'diagnostics', name: 'Human Diagnostics' },
        { id: 'biotechnology', name: 'Biotechnology & Life Sciences' }
    ]

    const services = {
        diagnostics: [
            {
                icon: '🧬',
                title: 'Whole Exome Sequencing (WES)',
                description: 'Comprehensive genetic analysis for rare disease diagnosis and genetic counseling support.'
            },
            {
                icon: '🔬',
                title: 'Whole Genome Sequencing (WGS)',
                description: 'Complete genomic profiling for precision medicine and personalized healthcare approaches.'
            },
            {
                icon: '🧪',
                title: 'Clinical NGS Testing',
                description: 'Advanced next-generation sequencing for oncology, inherited disorders, and rare diseases.'
            },
            {
                icon: '⚗️',
                title: 'Molecular Diagnostics',
                description: 'PCR, Real-Time PCR, and qPCR assays for accurate pathogen detection and diagnosis.'
            },
            {
                icon: '💻',
                title: 'Bioinformatics Services',
                description: 'Expert variant analysis, interpretation, and comprehensive genomic data analysis.'
            },
            {
                icon: '👥',
                title: 'Genetic Counseling Support',
                description: 'Professional guidance and support for patients and families navigating genetic results.'
            }
        ],
        biotechnology: [
            {
                icon: '🦐',
                title: 'Aquaculture Solutions',
                description: 'Probiotics, beneficial microorganisms, and feed supplements for optimal aquatic health and sustainable farming.'
            },
            {
                icon: '🧫',
                title: 'Molecular Biology Services',
                description: 'Gene cloning, expression analysis, microbial identification, and custom molecular biology services.'
            },
            {
                icon: '🧬',
                title: 'Custom Oligonucleotide Synthesis',
                description: 'High-quality custom DNA and RNA oligonucleotide synthesis for research and diagnostic applications.'
            },
            {
                icon: '📊',
                title: 'Sequencing Services',
                description: 'Sanger and Nanopore sequencing technologies for various research and diagnostic needs.'
            }
        ]
    }

    const tabVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Hero Section */}
            <AnimatedSection className="py-20 bg-gradient-to-br from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Comprehensive biotechnology solutions spanning human diagnostics and aquaculture innovations
                    </motion.p>
                </div>
            </AnimatedSection>

            {/* Services Section */}
            <AnimatedSection className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Tab Navigation */}
                    <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
                        {tabs.map((tab) => (
                            <motion.button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${activeTab === tab.id
                                        ? 'bg-maroon-500 text-white shadow-lg'
                                        : 'bg-white text-gray-600 border border-gray-300 hover:border-maroon-500'
                                    }`}
                            >
                                {tab.name}
                            </motion.button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            variants={tabVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{ duration: 0.5 }}
                        >
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {services[activeTab].map((service, index) => (
                                    <motion.div
                                        key={service.title}
                                        custom={index}
                                        variants={cardVariants}
                                        initial="hidden"
                                        animate="visible"
                                        whileHover={{
                                            y: -8,
                                            scale: 1.03,
                                            transition: { duration: 0.3 }
                                        }}
                                        className="service-card bg-white rounded-2xl p-6 border border-gray-200 hover:border-maroon-500 transition-all duration-300 hover:shadow-xl"
                                    >
                                        <motion.div
                                            className="text-3xl mb-4"
                                            whileHover={{
                                                scale: 1.2,
                                                rotate: [0, -10, 10, -10, 0],
                                                transition: { duration: 0.6 }
                                            }}
                                        >
                                            {service.icon}
                                        </motion.div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                                        <p className="text-gray-600">{service.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </AnimatedSection>

            {/* Process Section */}
            <AnimatedSection className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-center mb-16"
                    >
                        Our Process
                    </motion.h2>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Consultation",
                                description: "Initial discussion to understand your specific requirements and objectives"
                            },
                            {
                                step: "02",
                                title: "Sample Collection",
                                description: "Secure and professional collection of samples with proper documentation"
                            },
                            {
                                step: "03",
                                title: "Analysis",
                                description: "Advanced laboratory analysis using cutting-edge biotechnology equipment"
                            },
                            {
                                step: "04",
                                title: "Results & Support",
                                description: "Comprehensive reporting with expert interpretation and ongoing support"
                            }
                        ].map((process, index) => (
                            <motion.div
                                key={process.step}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="text-center p-6"
                            >
                                <motion.div
                                    className="w-16 h-16 bg-maroon-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4"
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: 360,
                                        transition: { duration: 0.6 }
                                    }}
                                >
                                    {process.step}
                                </motion.div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                                <p className="text-gray-600">{process.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection className="py-20 bg-gradient-to-r from-maroon-500 to-maroon-600">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-6"
                    >
                        Ready to Get Started?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
                    >
                        Contact us today to discuss your biotechnology needs and discover how we can support your research or diagnostic requirements.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-maroon-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-block"
                        >
                            Contact Us Today
                        </motion.a>
                    </motion.div>
                </div>
            </AnimatedSection>
        </motion.div>
    )
}

export default ServicesPage