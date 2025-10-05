import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import AnimatedSection from '../components/ui/AnimatedSection'

const ContactPage = () => {
    useEffect(() => {
        scrollTo(0, 0);
    })
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false)
            setShowSuccess(true)
            setFormData({ name: '', email: '', phone: '', service: '', message: '' })

            // Hide success message after 5 seconds
            setTimeout(() => setShowSuccess(false), 5000)
        }, 2000)
    }

    const contactInfo = [
        {
            icon: MapPin,
            title: "Address",
            details: "123 Biotech Park, Chennai, Tamil Nadu 600001, India",
            color: "text-blue-600"
        },
        {
            icon: Phone,
            title: "Phone",
            details: "+91-44-XXXX-XXXX",
            color: "text-green-600"
        },
        {
            icon: Mail,
            title: "Email",
            details: "info@shrimpexbiotech.com",
            color: "text-purple-600"
        },
        {
            icon: Clock,
            title: "Office Hours",
            details: "Monday to Friday: 9:00 AM - 6:00 PM IST",
            color: "text-orange-600"
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
                        Contact Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Ready to advance your research or need our biotechnology expertise?
                        Get in touch with our team of scientists and specialists.
                    </motion.p>
                </div>
            </AnimatedSection>

            {/* Contact Content */}
            <AnimatedSection className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={info.title}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        whileHover={{ scale: 1.02, x: 10 }}
                                        className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                                    >
                                        <div className={`${info.color} mt-1`}>
                                            <info.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h4>
                                            <p className="text-gray-600">{info.details}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Additional Info */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="mt-8 p-6 bg-maroon-50 rounded-lg border border-maroon-200"
                            >
                                <h3 className="text-xl font-bold text-maroon-500 mb-3">Why Choose Us?</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• 15+ years of biotechnology expertise</li>
                                    <li>• State-of-the-art laboratory facilities</li>
                                    <li>• Quality certified and accredited services</li>
                                    <li>• Expert scientific consultation</li>
                                </ul>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-2xl p-8 shadow-lg"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

                            {showSuccess && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                                >
                                    <p className="text-green-600 font-medium">
                                        Thank you for your message! We'll get back to you within 24 hours.
                                    </p>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="form-control"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="form-control"
                                        placeholder="Enter your email address"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="form-control"
                                        placeholder="Enter your phone number"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                        Service Interest
                                    </label>
                                    <motion.select
                                        whileFocus={{ scale: 1.02 }}
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleInputChange}
                                        className="form-control"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="human-diagnostics">Human Diagnostics</option>
                                        <option value="aquaculture">Aquaculture Solutions</option>
                                        <option value="research">Research Services</option>
                                        <option value="collaboration">Collaboration Opportunities</option>
                                    </motion.select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <motion.textarea
                                        whileFocus={{ scale: 1.02 }}
                                        id="message"
                                        name="message"
                                        required
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="form-control resize-none"
                                        placeholder="Tell us about your project or requirements"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full bg-maroon-500 hover:bg-maroon-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'transform hover:scale-105'
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center">
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                            Sending...
                                        </div>
                                    ) : (
                                        'Send Message'
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Map Section (Optional) */}
            <AnimatedSection className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-center mb-12"
                    >
                        Visit Our Laboratory
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center"
                    >
                        <div className="text-center text-gray-500">
                            <MapPin size={48} className="mx-auto mb-4" />
                            <p className="text-lg">Interactive map would be integrated here</p>
                            <p className="text-sm">Chennai, Tamil Nadu, India</p>
                        </div>
                    </motion.div>
                </div>
            </AnimatedSection>
        </motion.div>
    )
}

export default ContactPage