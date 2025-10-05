import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Award, Shield, Settings } from 'lucide-react'
import AnimatedSection from '../components/ui/AnimatedSection'

const QualityPage = () => {
    useEffect(() => {
        scrollTo(0, 0);
    })
    const certifications = [
        {
            icon: CheckCircle,
            title: "ISO Certified",
            description: "ISO 9001:2015 quality management system certification ensuring consistent quality standards.",
            color: "text-green-600"
        },
        {
            icon: Award,
            title: "NABL Accredited",
            description: "National Accreditation Board for Testing and Calibration recognition for laboratory excellence.",
            color: "text-blue-600"
        },
        {
            icon: Shield,
            title: "GLP Compliant",
            description: "Good Laboratory Practice standards ensuring quality integrity and data reliability.",
            color: "text-purple-600"
        },
        {
            icon: Settings,
            title: "GMP Adherent",
            description: "Good Manufacturing Practice compliance in all biotechnology processes and procedures.",
            color: "text-orange-600"
        }
    ]

    const qualityPillars = [
        {
            title: "Quality Assurance",
            description: "Comprehensive QA programs ensure every process meets the highest standards",
            points: [
                "Rigorous standard operating procedures",
                "Regular internal audits and assessments",
                "Continuous improvement protocols",
                "Staff training and certification programs"
            ]
        },
        {
            title: "Data Integrity",
            description: "Maintaining complete accuracy and security of all research and diagnostic data",
            points: [
                "Secure data management systems",
                "Backup and recovery protocols",
                "Access control and user authentication",
                "Audit trail maintenance"
            ]
        },
        {
            title: "Regulatory Compliance",
            description: "Adherence to all relevant local and international regulatory requirements",
            points: [
                "ICMR guidelines compliance",
                "CDSCO regulatory adherence",
                "HIPAA data privacy standards",
                "International quality benchmarks"
            ]
        }
    ]

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
                        Quality & Compliance
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-4xl mx-auto"
                    >
                        At Shrimpex Biotech, we maintain the highest standards of quality and compliance
                        across all our operations, ensuring reliable and accurate results for our clients.
                    </motion.p>
                </div>
            </AnimatedSection>

            {/* Certifications Grid */}
            <AnimatedSection className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-center mb-16"
                    >
                        Our Certifications
                    </motion.h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-white rounded-2xl p-6 text-center border border-gray-200 hover:border-maroon-500 transition-all duration-300 hover:shadow-xl"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                                    viewport={{ once: true }}
                                    className={`${cert.color} mb-4 flex justify-center`}
                                >
                                    <cert.icon size={48} />
                                </motion.div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">{cert.title}</h4>
                                <p className="text-gray-600">{cert.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Quality Pillars */}
            <AnimatedSection className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-center mb-16"
                    >
                        Quality Management Framework
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {qualityPillars.map((pillar, index) => (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300"
                            >
                                <h3 className="text-2xl font-bold text-maroon-500 mb-4">{pillar.title}</h3>
                                <p className="text-gray-600 mb-6">{pillar.description}</p>
                                <ul className="space-y-3">
                                    {pillar.points.map((point, pointIndex) => (
                                        <motion.li
                                            key={pointIndex}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.2 + pointIndex * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-start text-gray-700"
                                        >
                                            <CheckCircle size={16} className="text-maroon-500 mr-3 mt-0.5 flex-shrink-0" />
                                            {point}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Compliance Information */}
            <AnimatedSection className="py-20 bg-maroon-50">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 text-center border border-maroon-200 shadow-lg"
                    >
                        <h3 className="text-2xl font-bold text-maroon-500 mb-4">Regulatory Compliance</h3>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                            We adhere to all relevant regulatory guidelines including ICMR, CDSCO, and HIPAA standards
                            for data security and patient privacy protection. Our compliance framework ensures that
                            all biotechnology services meet international quality benchmarks and regulatory requirements.
                        </p>
                    </motion.div>
                </div>
            </AnimatedSection>

            {/* Quality Metrics */}
            <AnimatedSection className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-center mb-16"
                    >
                        Quality Metrics
                    </motion.h2>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { metric: "99.8%", label: "Accuracy Rate" },
                            { metric: "24hrs", label: "Average TAT" },
                            { metric: "100%", label: "Compliance Score" },
                            { metric: "ISO 9001", label: "Quality Standard" }
                        ].map((metric, index) => (
                            <motion.div
                                key={metric.label}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="text-center p-6 bg-white rounded-lg shadow-sm"
                            >
                                <div className="text-3xl font-bold text-maroon-500 mb-2">{metric.metric}</div>
                                <div className="text-gray-600 font-medium">{metric.label}</div>
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
                        Trust in Our Quality Standards
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
                    >
                        Experience the confidence that comes with certified quality and regulatory compliance.
                        Partner with us for reliable biotechnology solutions.
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
                            Learn More About Our Standards
                        </motion.a>
                    </motion.div>
                </div>
            </AnimatedSection>
        </motion.div>
    )
}

export default QualityPage