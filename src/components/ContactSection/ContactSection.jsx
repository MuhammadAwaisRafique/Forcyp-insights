import React, { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './ContactSection.css'

const ContactSection = () => {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceInterest: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  // EmailJS Configuration
  // Get Public Key from: https://dashboard.emailjs.com/admin/integration
  const EMAILJS_SERVICE_ID = 'service_zajhzxs'
  const EMAILJS_TEMPLATE_ID = 'template_nhtek47'
  const EMAILJS_PUBLIC_KEY = 'FvoruTQ4jX3mFdb68' // Get this from EmailJS Dashboard → Account → General → Public Key

  // Service options matching the Services section
  const serviceOptions = [
    'General Inquiry',
    'Cyber Security',
    'Forensic & Detective Services',
    'Data Analysis',
    'Data Science',
    'Artificial Intelligence',
    'Machine Learning',
    'Web Development',
    'App Development',
    'SEO & Digital Marketing',
    '2D Animation & Graphics Designing'
  ]

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  // Phone validation regex (optional, flexible format)
  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/

  // Initialize EmailJS when component mounts
  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
      try {
        emailjs.init(EMAILJS_PUBLIC_KEY)
        console.log('✅ EmailJS initialized successfully in ContactSection')
      } catch (initError) {
        console.error('❌ EmailJS initialization error:', initError)
      }
    } else {
      console.error('❌ EmailJS Public Key not configured')
    }
  }, [])

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

  // Real-time validation
  const validateField = (name, value) => {
    const newErrors = { ...errors }

    switch (name) {
      case 'fullName':
        if (!value.trim()) {
          newErrors.fullName = 'Full name is required'
        } else if (value.trim().length < 2) {
          newErrors.fullName = 'Name must be at least 2 characters'
        } else {
          delete newErrors.fullName
        }
        break

      case 'email':
        if (!value.trim()) {
          newErrors.email = 'Email address is required'
        } else if (!emailRegex.test(value)) {
          newErrors.email = 'Please enter a valid email address'
        } else {
          delete newErrors.email
        }
        break

      case 'phone':
        if (value.trim() && !phoneRegex.test(value)) {
          newErrors.phone = 'Please enter a valid phone number'
        } else {
          delete newErrors.phone
        }
        break

      case 'serviceInterest':
        if (!value) {
          newErrors.serviceInterest = 'Please select a service interest'
        } else {
          delete newErrors.serviceInterest
        }
        break

      case 'subject':
        if (!value.trim()) {
          newErrors.subject = 'Subject is required'
        } else if (value.trim().length < 3) {
          newErrors.subject = 'Subject must be at least 3 characters'
        } else {
          delete newErrors.subject
        }
        break

      case 'message':
        if (!value.trim()) {
          newErrors.message = 'Message is required'
        } else if (value.trim().length < 10) {
          newErrors.message = 'Message must be at least 10 characters'
        } else {
          delete newErrors.message
        }
        break

      default:
        break
    }

    setErrors(newErrors)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Real-time validation
    validateField(name, value)
  }

  const validateForm = () => {
    const newErrors = {}

    // Validate all fields
    Object.keys(formData).forEach(key => {
      const value = formData[key]
      // Re-validate each field
      if (key === 'fullName' && (!value.trim() || value.trim().length < 2)) {
        newErrors.fullName = !value.trim() ? 'Full name is required' : 'Name must be at least 2 characters'
      } else if (key === 'email' && (!value.trim() || !emailRegex.test(value))) {
        newErrors.email = !value.trim() ? 'Email address is required' : 'Please enter a valid email address'
      } else if (key === 'phone' && value.trim() && !phoneRegex.test(value)) {
        newErrors.phone = 'Please enter a valid phone number'
      } else if (key === 'serviceInterest' && !value) {
        newErrors.serviceInterest = 'Please select a service interest'
      } else if (key === 'subject' && (!value.trim() || value.trim().length < 3)) {
        newErrors.subject = !value.trim() ? 'Subject is required' : 'Subject must be at least 3 characters'
      } else if (key === 'message' && (!value.trim() || value.trim().length < 10)) {
        newErrors.message = !value.trim() ? 'Message is required' : 'Message must be at least 10 characters'
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus(null)

    // Final validation
    const isValid = validateForm()
    if (!isValid) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)

    try {
      // Log configuration for debugging
      // NOTE: These logs appear in the browser console (F12 → Console tab), not in the terminal
      console.log('📧 EmailJS Configuration:', {
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID,
        publicKey: EMAILJS_PUBLIC_KEY ? `${EMAILJS_PUBLIC_KEY.substring(0, 4)}...` : 'NOT SET',
        hasPublicKey: !!EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY'
      })
      // Also log to console.error for better visibility
      console.error('📧 [DEBUG] EmailJS Config - Service:', EMAILJS_SERVICE_ID, 'Template:', EMAILJS_TEMPLATE_ID)

      // Prepare email template parameters
      // These variables will be used in your EmailJS template
      const templateParams = {
        to_email: 'Support@forcyp.com',
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        service_interest: formData.serviceInterest,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
        name: formData.fullName // Alternative variable name for template compatibility
      }

      console.log('📝 Template Parameters:', templateParams)
      console.error('📝 [DEBUG] Template Params:', JSON.stringify(templateParams, null, 2))

      // Validate EmailJS configuration before sending
      if (!EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        throw new Error('EmailJS Public Key is not configured. Please add your Public Key from EmailJS Dashboard.')
      }

      if (!EMAILJS_SERVICE_ID || EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
        throw new Error('EmailJS Service ID is not configured.')
      }

      if (!EMAILJS_TEMPLATE_ID || EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID') {
        throw new Error('EmailJS Template ID is not configured.')
      }

      console.log('🚀 Sending email via EmailJS...')
      console.error('🚀 [DEBUG] Attempting to send email...')

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      console.log('✅ EmailJS Success Response:', response)
      console.log('✅ Email sent successfully! Status:', response.status, 'Text:', response.text)
      console.error('✅ [SUCCESS] Email sent! Status:', response.status, 'Response:', response.text)

      // Success
      setSubmitStatus('success')
      setIsSubmitting(false)

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        serviceInterest: '',
        subject: '',
        message: ''
      })
      setErrors({})

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)

    } catch (error) {
      // Comprehensive error logging
      // These will appear in browser console (F12) and terminal if using certain dev tools
      console.error('❌ EmailJS Error Details:')
      console.error('Error Type:', error.name)
      console.error('Error Message:', error.message)
      console.error('Error Code:', error.code)
      console.error('Error Status:', error.status)
      console.error('Error Text:', error.text)
      console.error('Full Error Object:', error)
      
      // Detailed error breakdown for terminal/browser console
      console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
      console.error('❌ EMAILJS ERROR REPORT')
      console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
      console.error('Error Name:', error.name || 'Unknown')
      console.error('Error Message:', error.message || 'No message')
      console.error('Error Status Code:', error.status || 'N/A')
      console.error('Error Text:', error.text || 'N/A')
      console.error('Error Code:', error.code || 'N/A')
      console.error('Service ID:', EMAILJS_SERVICE_ID)
      console.error('Template ID:', EMAILJS_TEMPLATE_ID)
      console.error('Public Key Set:', !!EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY')
      console.error('Full Error:', JSON.stringify(error, Object.getOwnPropertyNames(error), 2))
      console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
      
      // Check for specific error types
      if (error.text) {
        console.error('EmailJS Error Text:', error.text)
      }
      
      if (error.status) {
        console.error('EmailJS Error Status Code:', error.status)
      }

      // User-friendly error message
      let errorMessage = 'Failed to send message. Please try again or contact us directly at Support@forcyp.com'
      
      if (error.message) {
        console.error('Detailed Error:', error.message)
        if (error.message.includes('Public Key')) {
          errorMessage = 'Email service configuration error. Please contact support at Support@forcyp.com'
        } else if (error.message.includes('Service ID') || error.message.includes('Template ID')) {
          errorMessage = 'Email service configuration error. Please contact support at Support@forcyp.com'
        } else if (error.status === 400) {
          errorMessage = 'Invalid request. Please check your form and try again.'
        } else if (error.status === 401) {
          errorMessage = 'Authentication failed. Please contact support at Support@forcyp.com'
        } else if (error.status === 404) {
          if (error.text && error.text.includes('Account not found')) {
            errorMessage = `❌ Account not found: The Public Key "${EMAILJS_PUBLIC_KEY.substring(0, 4)}..." doesn't match your EmailJS account. Please get the correct Public Key from EmailJS Dashboard → Account → General → Public Key for Service ID: ${EMAILJS_SERVICE_ID}`
          } else {
            errorMessage = `Service or Template not found. Please verify Service ID (${EMAILJS_SERVICE_ID}) and Template ID (${EMAILJS_TEMPLATE_ID}) in EmailJS dashboard.`
          }
        } else if (error.status >= 500) {
          errorMessage = 'Server error. Please try again later or contact us at Support@forcyp.com'
        }
      }

      setSubmitStatus('error')
      setIsSubmitting(false)

      // Show error message for 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }
  }

  return (
    <div 
      ref={sectionRef}
      className={`contact-section ${isVisible ? 'visible' : ''}`}
      id="contact"
    >
      {/* Animated Background Elements */}
      <div className="contact-bg-gradient"></div>
      <div className="contact-grid-pattern"></div>
      <div className="contact-particles">
        {Array.from({ length: 12 }).map((_, i) => (
          <div 
            key={i} 
            className="contact-particle"
            style={{
              '--particle-delay': `${i * 0.2}s`,
              '--particle-x': `${(i * 8) % 100}%`,
              '--particle-y': `${(i * 6) % 100}%`
            }}
          ></div>
        ))}
      </div>

      <div className="container">
        <div className="contact-content-wrapper">
          {/* Left Side - Contact Info */}
          <div className="contact-info">
            <div className="contact-label">
              GET IN TOUCH
            </div>
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-description">
              Ready to enhance your cybersecurity posture? Reach out to our team for expert consultation, product demonstrations, or to discuss your specific security needs.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="detail-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="detail-content">
                  <h4>Phone</h4>
                  <p>+92 300 1234567</p>
                  <p>+92 51 1234567</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="detail-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="detail-content">
                  <h4>Email</h4>
                  <p><a href="mailto:Support@forcyp.com">Support@forcyp.com</a></p>
                  <p><a href="mailto:info@forcypinsights.com">info@forcypinsights.com</a></p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="detail-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="detail-content">
                  <h4>Address</h4>
                  <p>Islamabad, Pakistan</p>
                  <p>Office Hours: Mon-Fri 9AM-6PM PKT</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form-wrapper">
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={(e) => validateField('fullName', e.target.value)}
                  required
                  placeholder="Enter your full name"
                  className={errors.fullName ? 'error' : ''}
                  disabled={isSubmitting}
                />
                {errors.fullName && (
                  <span className="error-message">{errors.fullName}</span>
                )}
              </div>

              {/* Email and Phone Row */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={(e) => validateField('email', e.target.value)}
                    required
                    placeholder="your.email@example.com"
                    className={errors.email ? 'error' : ''}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={(e) => validateField('phone', e.target.value)}
                    placeholder="+92 300 1234567"
                    className={errors.phone ? 'error' : ''}
                    disabled={isSubmitting}
                  />
                  {errors.phone && (
                    <span className="error-message">{errors.phone}</span>
                  )}
                </div>
              </div>

              {/* Service Interest */}
              <div className="form-group">
                <label htmlFor="serviceInterest">Service Interest *</label>
                <select
                  id="serviceInterest"
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                  onBlur={(e) => validateField('serviceInterest', e.target.value)}
                  required
                  className={errors.serviceInterest ? 'error' : ''}
                  disabled={isSubmitting}
                >
                  <option value="">Select a service...</option>
                  {serviceOptions.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.serviceInterest && (
                  <span className="error-message">{errors.serviceInterest}</span>
                )}
              </div>

              {/* Subject */}
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={(e) => validateField('subject', e.target.value)}
                  required
                  placeholder="What is this regarding?"
                  className={errors.subject ? 'error' : ''}
                  disabled={isSubmitting}
                />
                {errors.subject && (
                  <span className="error-message">{errors.subject}</span>
                )}
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message">Message/Query *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={(e) => validateField('message', e.target.value)}
                  required
                  rows="5"
                  placeholder="Tell us about your needs..."
                  className={errors.message ? 'error' : ''}
                  disabled={isSubmitting}
                ></textarea>
                {errors.message && (
                  <span className="error-message">{errors.message}</span>
                )}
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="form-status success">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-status error">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>
                    {Object.keys(errors).length > 0 
                      ? 'Please fix the errors above' 
                      : 'Failed to send message. Please try again or contact us directly at Support@forcyp.com'}
                  </span>
                </div>
              )}

              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
