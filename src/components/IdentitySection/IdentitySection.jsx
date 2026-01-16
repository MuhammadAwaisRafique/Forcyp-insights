import React, { useState, useEffect, useRef } from 'react'
import './IdentitySection.css'

const IdentitySection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
        setMousePosition({ x, y })
      }
    }

    const section = sectionRef.current
    if (section) {
      section.addEventListener('mousemove', handleMouseMove)
      return () => section.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div 
      ref={sectionRef}
      className={`identity-section ${isVisible ? 'visible' : ''}`}
      style={{
        '--mouse-x': mousePosition.x,
        '--mouse-y': mousePosition.y
      }}
    >
      {/* Animated Background Elements */}
      <div className="identity-bg-gradient"></div>
      <div className="identity-bg-pattern"></div>
      <div className="identity-floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="container">
        <div className="identity-content-wrapper">
          {/* Left Side - Text Content */}
          <div className="identity-text-content">
            <div className="identity-label">
              IDENTITY PROTECTION
            </div>
            <h2 className="identity-title">Protect Your Digital Presence</h2>
            <p className="identity-description">
              Advanced security solutions that safeguard your personal information and digital footprint from emerging cyber risks through intelligent monitoring and proactive threat detection.
            </p>
            <a href="#identity" className="identity-learn-more-btn">
              Learn more
              <svg className="btn-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Right Side - Mobile Phones Display */}
          <div className="identity-phones-container">
            {/* Background Phone */}
            <div className="phone phone-background">
              <div className="phone-frame">
                <div className="phone-screen">
                  <div className="app-screen breaches-screen">
                    <div className="screen-header">
                      <h3 className="screen-title">Security Alerts</h3>
                      <p className="screen-subtitle">Enhance your protection by resolving each identified threat</p>
                      <div className="breaches-count">148 Threats Detected</div>
                    </div>
                    <div className="search-bar">
                      <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                        <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <span className="search-placeholder">Search threats...</span>
                    </div>
                    <div className="breaches-list">
                      {['twitter.com', 'paypal.com', 'patreon.com', 'Data Breach', 'Password Breach', 'facebook.com', 'govia.com'].map((item, index) => (
                        <div key={index} className="breach-item" style={{'--delay': `${index * 0.1}s`}}>
                          <div className="breach-icon">
                            {index % 2 === 0 ? '🔑' : '👤'}
                          </div>
                          <span className="breach-name">{item}</span>
                          <span className="breach-badge">NEW</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Foreground Phone */}
            <div className="phone phone-foreground">
              <div className="phone-frame">
                <div className="phone-screen">
                  <div className="app-screen main-screen">
                    <div className="phone-status-bar">
                      <span className="time">2:51</span>
                      <div className="status-icons">
                        <span className="signal"></span>
                        <span className="wifi"></span>
                        <span className="battery"></span>
                      </div>
                    </div>
                    <div className="app-content">
                      <div className="greeting">Hi Awais, Your attention is required</div>
                      <div className="identity-card">
                        <div className="card-header">
                          <h4 className="card-title">Identity Protection</h4>
                        </div>
                        <div className="card-body">
                          <div className="alert-badge">2 New security alerts</div>
                          <p className="card-description">
                            We've identified potential exposure of your sensitive data across compromised platforms that require immediate action.
                          </p>
                          <button className="card-button">View details</button>
                        </div>
                      </div>
                      <div className="secondary-card">
                        <div className="secondary-card-title">Credit</div>
                      </div>
                    </div>
                    <div className="bottom-nav">
                      {['home', 'shield', 'plus', 'learn', 'settings'].map((icon, index) => (
                        <div key={index} className={`nav-icon ${icon === 'plus' ? 'active' : ''}`}>
                          {icon === 'home' && '🏠'}
                          {icon === 'shield' && '🛡️'}
                          {icon === 'plus' && <span className="plus-icon">+</span>}
                          {icon === 'learn' && '🎓'}
                          {icon === 'settings' && '⚙️'}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IdentitySection
