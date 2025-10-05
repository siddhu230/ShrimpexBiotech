import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FileText, Download, ExternalLink, BookOpen } from 'lucide-react'
import AnimatedSection from '../components/ui/AnimatedSection'

const ResourcesPage = () => {
    useEffect(() => {
        scrollTo(0, 0);
    })
    const downloadableResources = [
        {
            title: "Company Brochure",
            description: "Comprehensive overview of Shrimpex Biotech services and capabilities",
            type: "PDF",
            size: "2.5 MB",
            icon: FileText
        },
        {
            title: "Service Portfolio",
            description: "Detailed information about our biotechnology and diagnostic services",
            type: "PDF",
            size: "4.2 MB",
            icon: FileText
        },
        {
            title: "Quality Certifications",
            description: "Documentation of our ISO, NABL, and other quality certifications",
            type: "PDF",
            size: "1.8 MB",
            icon: FileText
        },
        {
            title: "Research Highlights",
            description: "Summary of our key research achievements and publications",
            type: "PDF",
            size: "3.1 MB",
            icon: FileText
        }
    ]

    const articles = [
        {
            title: "Advances in Whole Genome Sequencing for Rare Disease Diagnosis",
            excerpt: "Exploring the latest developments in WGS technology and its applications in clinical diagnostics. This comprehensive review covers current methodologies, challenges, and future directions.",
            readTime: "8 min read",
            category: "Genomics",
            publishDate: "December 15, 2024"
        },
        {
            title: "Probiotics in Aquaculture: A Sustainable Approach",
            excerpt: "How beneficial microorganisms are revolutionizing aquaculture practices and improving fish health. Learn about the latest research in aquatic probiotics and their environmental benefits.",
            readTime: "6 min read",
            category: "Aquaculture",
            publishDate: "November 28, 2024"
        },
        {
            title: "The Future of Molecular Diagnostics in Precision Medicine",
            excerpt: "Understanding how molecular diagnostic technologies are shaping personalized healthcare. Insights into NGS applications, biomarker discovery, and therapeutic targeting.",
            readTime: "10 min read",
            category: "Diagnostics",
            publishDate: "November 10, 2024"
        },
        {
            title: "Biotechnology Innovation in Marine Sciences",
            excerpt: "Bridging the gap between marine biology and biotechnology applications. Discover how marine-derived compounds are contributing to medical and industrial innovations.",
            readTime: "7 min read",
            category: "Marine Biology",
            publishDate: "October 22, 2024"
        }
    ]

    const resourceCategories = [
        {
            title: "Technical Guides",
            description: "Step-by-step protocols and methodologies",
            count: "12 resources",
            color: "from-blue-50 to-blue-100"
        },
        {
            title: "Research Papers",
            description: "Published research and white papers",
            count: "50+ publications",
            color: "from-purple-50 to-purple-100"
        },
        {
            title: "Case Studies",
            description: "Real-world applications and success stories",
            count: "25 case studies",
            color: "from-green-50 to-green-100"
        },
        {
            title: "Educational Materials",
            description: "Learning resources and training materials",
            count: "8 courses",
            color: "from-orange-50 to-orange-100"
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
                        Resources
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-4xl mx-auto"
                    >
                        Access our comprehensive collection of research materials, technical guides,
                        and educational resources to support your biotechnology endeavors.
                    </motion.p>
                </div>
            </AnimatedSection>

            {/* Resource Categories */}
            <AnimatedSection className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-center mb-16"
                    >
                        Resource Categories
                    </motion.h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {resourceCategories.map((category, index) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300`}
                            >
                                <BookOpen size={40} className="text-gray-700 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                                <p className="text-gray-600 mb-4">{category.description}</p>
                                <div className="text-sm font-semibold text-maroon-500">{category.count}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Main Resources Content */}
            <AnimatedSection className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Downloadable Resources */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-maroon-500 mb-8">Downloadable Resources</h3>
                            <div className="space-y-4">
                                {downloadableResources.map((resource, index) => (
                                    <motion.div
                                        key={resource.title}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ x: 10, scale: 1.02 }}
                                        className="flex items-center p-4 bg-white hover:bg-maroon-50 rounded-lg border border-gray-200 hover:border-maroon-500 transition-all duration-300 cursor-pointer"
                                    >
                                        <div className="text-maroon-500 mr-4">
                                            <resource.icon size={24} />
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-semibold text-gray-900">{resource.title}</h4>
                                            <p className="text-sm text-gray-600 mb-1">{resource.description}</p>
                                            <div className="text-xs text-gray-500">{resource.type} • {resource.size}</div>
                                        </div>
                                        <Download size={20} className="text-gray-400" />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Latest Articles */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-maroon-500 mb-8">Latest Articles</h3>
                            <div className="space-y-6">
                                {articles.map((article, index) => (
                                    <motion.div
                                        key={article.title}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-white rounded-lg p-6 border border-gray-200 hover:border-maroon-500 hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <span className="inline-block px-3 py-1 bg-maroon-100 text-maroon-700 text-sm font-medium rounded-full">
                                                {article.category}
                                            </span>
                                            <ExternalLink size={16} className="text-gray-400" />
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3 hover:text-maroon-500 transition-colors">
                                            {article.title}
                                        </h4>
                                        <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                                        <div className="flex items-center justify-between text-sm text-gray-500">
                                            <span>{article.readTime}</span>
                                            <span>{article.publishDate}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Newsletter Signup */}
            <AnimatedSection className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-6"
                    >
                        Stay Updated
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-600 mb-8"
                    >
                        Subscribe to our newsletter to receive the latest research updates,
                        technical insights, and biotechnology news directly in your inbox.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row gap-4 max-w-md mx-auto"
                    >
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:border-maroon-500 focus:ring-2 focus:ring-maroon-500 focus:ring-opacity-20 outline-none"
                        />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-maroon-500 hover:bg-maroon-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                        >
                            Subscribe
                        </motion.button>
                    </motion.div>
                </div>
            </AnimatedSection>
        </motion.div>
    )
}

export default ResourcesPage