import React, { useState, useEffect } from 'react'
import './CookieBanner.css'

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Check if user has already given consent
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      // Small delay for smooth entrance animation
      setTimeout(() => {
        setIsVisible(true)
      }, 500)
    }
  }, [])

  const handleAccept = () => {
    setIsAnimating(true)
    setTimeout(() => {
      localStorage.setItem('cookieConsent', 'accepted')
      setIsVisible(false)
      setIsAnimating(false)
    }, 400)
  }

  const handleReject = () => {
    setIsAnimating(true)
    setTimeout(() => {
      localStorage.setItem('cookieConsent', 'rejected')
      setIsVisible(false)
      setIsAnimating(false)
    }, 400)
  }

  const handleClose = () => {
    setIsAnimating(true)
    setTimeout(() => {
      localStorage.setItem('cookieConsent', 'dismissed')
      setIsVisible(false)
      setIsAnimating(false)
    }, 400)
  }

  if (!isVisible) return null

  return (
    <div className={`cookie ${isAnimating ? 'cookie-exit' : 'cookie-enter'}`}>
      <div className="cookie-content">
        <div className="cookie-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
          </svg>
        </div>
        <p>
          We use cookies to enhance your browsing experience and analyze site traffic. 
          By clicking "Accept All", you consent to our use of cookies.{' '}
          <a className="cookie-link" href="#cookies-policy">Learn more</a>
        </p>
        <div className="cookie-buttons">
          <button className="cookie-btn cookie-btn-reject" onClick={handleReject}>
            Reject All
          </button>
          <button className="cookie-btn cookie-btn-accept" onClick={handleAccept}>
            Accept All
          </button>
        </div>
      </div>
      <button onClick={handleClose} className="cookie-close" aria-label="Close cookie banner">
        <svg className="icon" width="18" height="18" viewBox="0 0 24 24">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  )
}

export default CookieBanner

