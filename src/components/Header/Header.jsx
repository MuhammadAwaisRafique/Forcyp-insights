import React, { useState, useEffect } from 'react'
import logoImage from '../../assets/images/forcyp-logo.PNG'
import './Header.css'

const Header = ({ onContactClick, onTrialClick }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`page-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="page-header-wrapper">
        <div className="container h-100">
          <div className="d-flex align-items-center justify-content-between h-100">
            <a href="/" className="logo">
              <div className="logo-icon">
                <img src={logoImage} alt="Forcyp Insights Logo" className="logo-img" />
              </div>
              <span className="logo-text">
                <span className="logo-text-primary">Forcyp</span>
                <span className="logo-text-secondary"> Insights</span>
              </span>
            </a>

            <nav className="main-nav d-none d-lg-flex">
              <ul className="main-nav-list">
                <li className="main-nav-item">
                  <a className="main-nav-link" href="#services">Services</a>
                </li>
                <li 
                  className="main-nav-item nav-item-dropdown"
                  onMouseEnter={() => setIsAboutDropdownOpen(true)}
                  onMouseLeave={() => setIsAboutDropdownOpen(false)}
                >
                  <a className="main-nav-link" href="#about">
                    About
                    <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <div className={`dropdown-menu ${isAboutDropdownOpen ? 'show' : ''}`}>
                    <a 
                      href="#about" 
                      className="dropdown-item"
                      onClick={(e) => {
                        e.preventDefault()
                        setIsAboutDropdownOpen(false)
                        // Scroll to about section and switch to company tab
                        const aboutSection = document.getElementById('about')
                        if (aboutSection) {
                          aboutSection.scrollIntoView({ behavior: 'smooth' })
                          // Trigger tab switch after scroll completes
                          setTimeout(() => {
                            const companyTab = document.querySelector('[data-tab="company"]')
                            if (companyTab) {
                              companyTab.click()
                            }
                          }, 600)
                        }
                      }}
                    >
                      <svg className="dropdown-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M3 21H21M5 21V7L12 3L19 7V21M9 9V21M15 9V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>About Company</span>
                    </a>
                    <a 
                      href="#about" 
                      className="dropdown-item"
                      onClick={(e) => {
                        e.preventDefault()
                        setIsAboutDropdownOpen(false)
                        // Scroll to about section and switch to team tab
                        const aboutSection = document.getElementById('about')
                        if (aboutSection) {
                          aboutSection.scrollIntoView({ behavior: 'smooth' })
                          // Trigger tab switch after scroll completes
                          setTimeout(() => {
                            const teamTab = document.querySelector('[data-tab="team"]')
                            if (teamTab) {
                              teamTab.click()
                            }
                          }, 600)
                        }
                      }}
                    >
                      <svg className="dropdown-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Our Team</span>
                    </a>
                  </div>
                </li>
                <li className="main-nav-item">
                  <a className="main-nav-link" href="#contact" onClick={(e) => { e.preventDefault(); onContactClick(); }}>Contact Us</a>
                </li>
              </ul>
            </nav>

            <nav className="mobile-nav d-lg-none">
              <button 
                className={`hamburger hamburger--squeeze ${isMobileMenuOpen ? 'is-active' : ''}`}
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </nav>

            <div className="button-group d-none d-lg-inline-block text-right">
              <button className="button light outline small accent-btn" onClick={onTrialClick}>
                Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav className={`mobile-nav-dialog d-lg-none ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-dialog-wrap">
          <div className="mobile-nav-dialog-right">
            <div className="mobile-nav-dialog-right-wrapper">
              <ul className="mobile-nav-menu">
                <li className="mobile-nav-menu-item">
                  <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
                </li>
                <li className="mobile-nav-menu-item">
                  <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                </li>
                <li className="mobile-nav-menu-item">
                  <a href="#contact" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); onContactClick(); }}>Contact Us</a>
                </li>
              </ul>
              <div className="button-group pt-10">
                <button 
                  type="button" 
                  className="button dark outline block mb-3"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    onContactClick()
                  }}
                >
                  Contact
                </button>
                <button 
                  type="button" 
                  className="button dark outline block"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    onTrialClick()
                  }}
                >
                  Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

