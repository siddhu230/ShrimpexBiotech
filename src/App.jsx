import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import LoadingScreen from './components/ui/LoadingScreen'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ResearchPage from './pages/ResearchPage'
import QualityPage from './pages/QualityPage'
import ResourcesPage from './pages/ResourcesPage'
import ContactPage from './pages/ContactPage'
import { useLoading } from './hooks/useLoading'


function App() {
  const isLoading = useLoading(1500) // 1.5 second loading screen


  return (
    <div className="min-h-screen bg-white">
      {/* Loading screen */}
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>
      
      {!isLoading && (
        <>
          <div className="relative bg-white min-h-screen">
              <Header />
              <main className="pt-20">
                <AnimatePresence mode="wait">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/research" element={<ResearchPage />} />
                    <Route path="/quality" element={<QualityPage />} />
                    <Route path="/resources" element={<ResourcesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                  </Routes>
                </AnimatePresence>
              </main>
              <Footer />
            </div>
        </>
      )}
    </div>
  )
}

export default App