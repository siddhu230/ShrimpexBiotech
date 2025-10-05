import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/ui/AnimatedSection'

const ResearchPage = () => {
    useEffect(() => {
        scrollTo(0, 0);
    })
    const researchAreas = [
        {
            title: "Publications",
            description: "Over 50 peer-reviewed publications in leading scientific journals, contributing to advances in molecular diagnostics and aquaculture biotechnology.",
            icon: "📚",
            color: "from-purple-50 to-purple-100",
            iconColor: "text-purple-600"
        },
        {
            title: "R&D Pipeline",
            description: "Ongoing research projects focused on novel diagnostic markers, aquaculture probiotics, and innovative sequencing applications.",
            icon: "🔬",
            color: "from-orange-50 to-orange-100",
            iconColor: "text-orange-600"
        },
        {
            title: "University Collaborations",
            description: "Strategic partnerships with leading academic institutions to advance biotechnology research and education.",
            icon: "🤝",
            color: "from-teal-50 to-teal-100",
            iconColor: "text-teal-600"
        }
    ]

    const publications = [
        {
            title: "Advances in Whole Genome Sequencing for Rare Disease Diagnosis",
            authors: "Kumar A., Sharma P., Patel R.",
            journal: "Journal of Molecular Diagnostics",
            year: "2024",
            abstract: "Comprehensive study on the application of WGS technology in clinical diagnostics and rare disease identification."
        },
        {
            title: "Probiotics in Aquaculture: Mechanisms and Applications",
            authors: "Singh M., Reddy S., Kumar A.",
            journal: "Aquaculture Research International",
            year: "2023",
            abstract: "Investigation of beneficial microorganisms in aquaculture systems and their impact on fish health and growth."
        },
        {
            title: "Next-Generation Sequencing in Clinical Practice",
            authors: "Patel R., Sharma P., Singh M.",
            journal: "Genomics & Medicine Today",
            year: "2023",
            abstract: "Review of NGS applications in clinical settings and future directions for molecular diagnostics."
        }
    ]

    const researchStats = [
        { number: "50+", label: "Published Papers" },
        { number: "15+", label: "Research Projects" },
        { number: "8", label: "University Partners" },
        { number: "25+", label: "Researchers" }
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
                        Research & Innovation
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-4xl mx-auto"
                    >
                        Driving scientific advancement through cutting-edge research in biotechnology,
                        molecular diagnostics, and aquaculture sciences
                    </motion.p>
                </div>
            </AnimatedSection>

            {/* Research Stats */}
            <AnimatedSection className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {researchStats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="text-center p-6 rounded-lg bg-gray-50 hover:bg-maroon-50 transition-colors duration-300"
                            >
                                <div className="text-3xl font-bold text-maroon-500 mb-2">{stat.number}</div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Research Areas */}
            <AnimatedSection className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-center mb-16"
                    >
                        Research Focus Areas
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {researchAreas.map((area, index) => (
                            <motion.div
                                key={area.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className={`bg-gradient-to-br ${area.color} rounded-2xl p-8`}
                            >
                                <div className={`text-4xl ${area.iconColor} mb-6`}>{area.icon}</div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h4>
                                <p className="text-gray-600 mb-6">{area.description}</p>
                                <motion.button
                                    whileHover={{ x: 5 }}
                                    className="text-maroon-500 font-semibold hover:text-maroon-600 transition-colors"
                                >
                                    Learn More →
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Recent Publications */}
            <AnimatedSection className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-center mb-16"
                    >
                        Recent Publications
                    </motion.h2>

                    <div className="space-y-8">
                        {publications.map((publication, index) => (
                            <motion.div
                                key={publication.title}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.01, x: 10 }}
                                className="bg-gray-50 rounded-lg p-6 border-l-4 border-maroon-500 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{publication.title}</h3>
                                <p className="text-gray-600 mb-2">
                                    <strong>Authors:</strong> {publication.authors}
                                </p>
                                <p className="text-gray-600 mb-2">
                                    <strong>Journal:</strong> {publication.journal} ({publication.year})
                                </p>
                                <p className="text-gray-700">{publication.abstract}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Innovation Pipeline */}
            <AnimatedSection className="py-20 bg-gradient-to-r from-maroon-500 to-maroon-600">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-8"
                    >
                        Innovation Pipeline
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        {[
                            {
                                stage: "Early Stage",
                                projects: "Novel biomarker discovery for aquaculture diseases",
                                timeline: "2024-2025"
                            },
                            {
                                stage: "Development",
                                projects: "AI-powered genomic analysis platform",
                                timeline: "2024-2026"
                            },
                            {
                                stage: "Clinical Trials",
                                projects: "Advanced diagnostic panels for rare diseases",
                                timeline: "2025-2027"
                            }
                        ].map((pipeline, index) => (
                            <motion.div
                                key={pipeline.stage}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white"
                            >
                                <h3 className="text-xl font-bold mb-3">{pipeline.stage}</h3>
                                <p className="mb-3">{pipeline.projects}</p>
                                <div className="text-sm text-white/80">{pipeline.timeline}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </motion.div>
    )
}

export default ResearchPage