import React, { useState, useEffect } from 'react'
import './TrialModal.css'

const TrialModal = ({ isOpen, onClose }) => {
  const [showMessage, setShowMessage] = useState(false)

  // Reset message state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setShowMessage(false)
    }
  }, [isOpen])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Show message
    setShowMessage(true)
    
    // After 3 seconds, close modal and scroll to contact section
    setTimeout(() => {
      setShowMessage(false)
      onClose()
      
      // Scroll to contact section
      setTimeout(() => {
        const contactSection = document.getElementById('contact')
        if (contactSection) {
          contactSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          })
        }
      }, 300)
    }, 3000)
  }

  return (
    <div className={`dialogbox ${isOpen ? 'open' : ''}`} id="dialogTrial" style={{ display: isOpen ? 'flex' : 'none' }}>
      <div className="dialogbox-wrapper">
        <div className="dialogbox-panel" data-animate="">
          <div className="dialogbox-panel-scroll">
            <div className="contactbox">
              {!showMessage ? (
                <>
                  <div className="text-h2-size text-transform-none mb-5 mb-xxl-10 pr-lg-5 pr-xxl-10">
                    Try Forcyp Insights products today with a <span className="text-gradient">free trial</span>
                  </div>
                  <form id="request-trial-form" className="contactbox-form" onSubmit={handleSubmit}>
                    <div className="contactbox-form-top">
                      <div className="trial-message-info">
                        <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '2rem', fontSize: '0.9375rem', lineHeight: '1.6' }}>
                          To start your free trial, please contact us through the contact section below.
                        </p>
                      </div>
                    </div>
                    <div className="contactbox-form-bottom">
                      <div className="form-group">
                        <button type="submit" className="button dark outline w-xs-100 mb-4">
                          Start Free Trial
                        </button>
                      </div>
                    </div>
                  </form>
                </>
              ) : (
                <div className="trial-message-container">
                  <div className="trial-message-box">
                    <svg className="trial-message-icon" width="48" height="48" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h3 className="trial-message-title">Please Contact Here</h3>
                    <p className="trial-message-text">
                      Redirecting you to our contact section...
                    </p>
                  </div>
                </div>
              )}
              <span className="dialogbox-close" onClick={onClose}>
                <svg className="icon" width="18" height="18" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="dialogbox-overlay" onClick={onClose}></div>
    </div>
  )
}

export default TrialModal

