import React, { useState, useEffect } from 'react'
import { enableProtection } from './utils/protection'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import PlatformSection from './components/PlatformSection/PlatformSection'
import IdentitySection from './components/IdentitySection/IdentitySection'
import ServicesSection from './components/ServicesSection/ServicesSection'
import MapSection from './components/MapSection/MapSection'
import ContactSection from './components/ContactSection/ContactSection'
import AboutSection from './components/AboutSection/AboutSection'
import Footer from './components/Footer/Footer'
import CookieBanner from './components/CookieBanner/CookieBanner'
import ContactModal from './components/ContactModal/ContactModal'
import TrialModal from './components/TrialModal/TrialModal'

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false)

  useEffect(() => {
    // Additional protection on component mount
    enableProtection()
    
    // Prevent right-click on all elements
    const handleContextMenu = (e) => {
      e.preventDefault()
      return false
    }

    // Prevent common shortcuts
    const handleKeyDown = (e) => {
      e.stopPropagation()
      
      // F12
      if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault()
        e.stopImmediatePropagation()
        return false
      }
      // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
      if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C', 'i', 'j', 'c'].includes(e.key)) {
        e.preventDefault()
        e.stopImmediatePropagation()
        return false
      }
      // Ctrl+U (View Source) - multiple checks
      if ((e.ctrlKey && (e.key === 'U' || e.key === 'u')) || (e.ctrlKey && e.keyCode === 85)) {
        e.preventDefault()
        e.stopImmediatePropagation()
        return false
      }
      
      return false
    }

    document.addEventListener('contextmenu', handleContextMenu, true)
    document.addEventListener('keydown', handleKeyDown, true)
    window.addEventListener('keydown', handleKeyDown, true)

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="app">
      <Header 
        onContactClick={() => setIsContactModalOpen(true)}
        onTrialClick={() => setIsTrialModalOpen(true)}
      />
      <main className="page-main">
        <Hero />
        <PlatformSection />
        <IdentitySection />
        <ServicesSection />
        <AboutSection />
        <MapSection />
        <ContactSection />
      </main>
      <Footer 
        onContactClick={() => setIsContactModalOpen(true)}
        onTrialClick={() => setIsTrialModalOpen(true)}
      />
      <CookieBanner />
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      <TrialModal 
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
      />
    </div>
  )
}

export default App

