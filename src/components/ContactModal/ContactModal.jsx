import React, { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './ContactModal.css'

const ContactModal = ({ isOpen, onClose }) => {
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
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null
  const [errorMessage, setErrorMessage] = useState('') // Store specific error message
  const [fullErrorDetails, setFullErrorDetails] = useState(null) // Store complete error object for display

  // EmailJS Configuration
  // Get Public Key from: https://dashboard.emailjs.com/admin/integration
  const EMAILJS_SERVICE_ID = 'service_zajhzxs'
  const EMAILJS_TEMPLATE_ID = 'template_nhtek47'
  const EMAILJS_PUBLIC_KEY = 'FvoruTQ4jX3mFdb68' // Get this from EmailJS Dashboard → Account → General → Public Key

  // Initialize EmailJS when component mounts
  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
      try {
        emailjs.init(EMAILJS_PUBLIC_KEY)
        console.log('✅ EmailJS initialized successfully')
      } catch (initError) {
        console.error('❌ EmailJS initialization error:', initError)
      }
    } else {
      console.error('❌ EmailJS Public Key not configured')
    }
  }, [])

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
    setErrorMessage('')
    setFullErrorDetails(null)

    // Final validation
    const isValid = validateForm()
    if (!isValid) {
      setSubmitStatus('error')
      setErrorMessage('Please fix the errors above')
      return
    }

    setIsSubmitting(true)

    // Prepare email template parameters (outside try block so it's accessible in catch)
    // IMPORTANT: These variable names MUST match exactly what you use in your EmailJS template
    // In your EmailJS dashboard → Email Templates → template_nhtek47, use these variables:
    // {{to_email}}, {{from_name}}, {{from_email}}, {{phone}}, {{service_interest}}, {{subject}}, {{message}}, {{reply_to}}, {{name}}
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
      // Note: In v4.x, you can either initialize once and use 3 params, or pass public key as 4th param
      // We'll use the 4-parameter version for reliability
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

      // Auto-close modal after 3 seconds
      setTimeout(() => {
        onClose()
        setSubmitStatus(null)
      }, 3000)

    } catch (error) {
      // Collect ALL error information
      const errorInfo = {
        name: error.name || 'Unknown',
        message: error.message || 'No message',
        status: error.status || 'N/A',
        statusText: error.statusText || 'N/A',
        text: error.text || 'N/A',
        code: error.code || 'N/A',
        stack: error.stack || 'N/A',
        response: error.response ? JSON.stringify(error.response, null, 2) : 'N/A',
        config: error.config ? JSON.stringify(error.config, null, 2) : 'N/A',
        allProperties: Object.getOwnPropertyNames(error),
        stringified: JSON.stringify(error, Object.getOwnPropertyNames(error), 2)
      }

      // Comprehensive error logging for VS Code terminal and browser console
      console.error('\n')
      console.error('═══════════════════════════════════════════════════════════════')
      console.error('❌ EMAILJS ERROR REPORT')
      console.error('═══════════════════════════════════════════════════════════════')
      console.error('📋 ERROR SUMMARY:')
      console.error('   Error Name:', errorInfo.name)
      console.error('   Error Message:', errorInfo.message)
      console.error('   Error Status Code:', errorInfo.status)
      console.error('   Error Status Text:', errorInfo.statusText)
      console.error('   Error Text:', errorInfo.text)
      console.error('   Error Code:', errorInfo.code)
      console.error('\n📧 EMAILJS CONFIGURATION:')
      console.error('   Service ID:', EMAILJS_SERVICE_ID)
      console.error('   Template ID:', EMAILJS_TEMPLATE_ID)
      console.error('   Public Key:', EMAILJS_PUBLIC_KEY ? `${EMAILJS_PUBLIC_KEY.substring(0, 4)}...${EMAILJS_PUBLIC_KEY.substring(EMAILJS_PUBLIC_KEY.length - 4)}` : 'NOT SET')
      console.error('   Public Key Valid:', !!EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY')
      console.error('\n📝 TEMPLATE PARAMETERS SENT:')
      console.error('   Template Params:', JSON.stringify(templateParams, null, 2))
      console.error('\n🔍 ERROR DETAILS:')
      console.error('   All Error Properties:', errorInfo.allProperties)
      if (error.response) {
        console.error('   Response:', errorInfo.response)
      }
      if (error.config) {
        console.error('   Config:', errorInfo.config)
      }
      console.error('\n📄 FULL ERROR OBJECT:')
      console.error(errorInfo.stringified)
      console.error('\n📚 ERROR STACK TRACE:')
      console.error(errorInfo.stack)
      console.error('═══════════════════════════════════════════════════════════════')
      console.error('\n')

      // Build comprehensive error message for UI
      let userErrorMessage = '❌ Email Sending Failed\n\n'
      
      // Add error type
      userErrorMessage += `Error Type: ${errorInfo.name}\n`
      
      // Add status code if available
      if (errorInfo.status !== 'N/A') {
        userErrorMessage += `Status Code: ${errorInfo.status}\n`
      }
      
      // Add error message
      if (errorInfo.message !== 'No message') {
        userErrorMessage += `Message: ${errorInfo.message}\n`
      }
      
      // Add EmailJS error text (most important)
      if (errorInfo.text !== 'N/A') {
        userErrorMessage += `\nEmailJS Error: ${errorInfo.text}\n`
      }
      
      // Add status text
      if (errorInfo.statusText !== 'N/A') {
        userErrorMessage += `Status: ${errorInfo.statusText}\n`
      }
      
      // Add specific guidance based on error
      userErrorMessage += '\n---\n'
      if (errorInfo.status === 400) {
        userErrorMessage += '💡 This usually means invalid template variables or missing required fields.\n'
        userErrorMessage += '   Check that your EmailJS template uses the correct variable names.\n'
      } else if (errorInfo.status === 401) {
        userErrorMessage += '💡 Authentication failed. Verify your Public Key in EmailJS Dashboard.\n'
      } else if (errorInfo.status === 404) {
        userErrorMessage += '💡 Service or Template not found. Verify IDs in EmailJS Dashboard.\n'
        userErrorMessage += `   Service ID: ${EMAILJS_SERVICE_ID}\n`
        userErrorMessage += `   Template ID: ${EMAILJS_TEMPLATE_ID}\n`
      } else if (errorInfo.status >= 500) {
        userErrorMessage += '💡 Server error. This is an EmailJS server issue, try again later.\n'
      }
      
      userErrorMessage += '\n📋 Check browser console (F12) for full error details.'

      // Store full error details for UI display
      setFullErrorDetails(errorInfo)
      setErrorMessage(userErrorMessage)
      setSubmitStatus('error')
      setIsSubmitting(false)

      // Show error message for 10 seconds (longer to read all details)
      setTimeout(() => {
        setSubmitStatus(null)
        setFullErrorDetails(null)
      }, 10000)
    }
  }

  // Prevent closing modal during submission
  const handleOverlayClick = (e) => {
    if (!isSubmitting && e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className={`dialogbox ${isOpen ? 'open' : ''}`} 
      id="dialogContact" 
      style={{ display: isOpen ? 'flex' : 'none' }}
      onClick={handleOverlayClick}
    >
      <div className="dialogbox-wrapper">
        <div className="dialogbox-info" data-animate="">
          <div className="dialogbox-info-top">
            <p className="text-lg-size mb-3">Forcyp Insights</p>
            <p className="mb-06">
              <a className="opacity-7" href="mailto:Support@forcyp.com">
                Support@forcyp.com
              </a>
            </p>
            <p>
              <a className="opacity-7" href="tel:+923001234567">
                +92 300 1234567
              </a>
            </p>
          </div>
          <div className="dialogbox-info-bottom">
            <address className="mb-3 opacity-7">
              Islamabad, Pakistan <br /> Office Hours: Mon-Fri 9AM-6PM PKT
            </address>
          </div>
        </div>
        <div className="dialogbox-panel" data-animate="">
          <div className="dialogbox-panel-scroll">
            <div className="contactbox">
              <div className="text-h2-size text-transform-none mb-5 pr-5 mb-xxl-10">
                Contact us by filling out <span className="text-gradient">the form</span>
              </div>
              <form 
                ref={formRef}
                id="contact-form" 
                className="contactbox-form" 
                onSubmit={handleSubmit}
              >
                <div className="contactbox-form-top">
                  {/* Full Name */}
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      id="contactform-fullname"
                      className={`form-control ${errors.fullName ? 'error' : ''}`}
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      onBlur={(e) => validateField('fullName', e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                    <label className="form-label" htmlFor="contactform-fullname">
                      Full Name *
                    </label>
                    {errors.fullName && (
                      <span className="error-message">{errors.fullName}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="form-group mb-4">
                    <input
                      type="email"
                      id="contactform-email"
                      className={`form-control ${errors.email ? 'error' : ''}`}
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={(e) => validateField('email', e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                    <label className="form-label" htmlFor="contactform-email">
                      Email Address *
                    </label>
                    {errors.email && (
                      <span className="error-message">{errors.email}</span>
                    )}
                  </div>

                  {/* Phone (Optional) */}
                  <div className="form-group mb-4">
                    <input
                      type="tel"
                      id="contactform-phone"
                      className={`form-control ${errors.phone ? 'error' : ''}`}
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={(e) => validateField('phone', e.target.value)}
                      disabled={isSubmitting}
                    />
                    <label className="form-label" htmlFor="contactform-phone">
                      Phone Number
                    </label>
                    {errors.phone && (
                      <span className="error-message">{errors.phone}</span>
                    )}
                  </div>

                  {/* Service Interest Dropdown */}
                  <div className="form-group mb-4">
                    <select
                      id="contactform-service"
                      className={`form-control ${errors.serviceInterest ? 'error' : ''}`}
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      onBlur={(e) => validateField('serviceInterest', e.target.value)}
                      required
                      disabled={isSubmitting}
                    >
                      <option value="">Select Service Interest *</option>
                      {serviceOptions.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    <label className="form-label" htmlFor="contactform-service">
                      Service Interest *
                    </label>
                    {errors.serviceInterest && (
                      <span className="error-message">{errors.serviceInterest}</span>
                    )}
                  </div>

                  {/* Subject */}
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      id="contactform-subject"
                      className={`form-control ${errors.subject ? 'error' : ''}`}
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={(e) => validateField('subject', e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                    <label className="form-label" htmlFor="contactform-subject">
                      Subject *
                    </label>
                    {errors.subject && (
                      <span className="error-message">{errors.subject}</span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="form-group mb-4">
                    <textarea
                      id="contactform-message"
                      className={`form-control ${errors.message ? 'error' : ''}`}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={(e) => validateField('message', e.target.value)}
                      required
                      rows="5"
                      disabled={isSubmitting}
                    ></textarea>
                    <label className="form-label" htmlFor="contactform-message">
                      Message/Query *
                    </label>
                    {errors.message && (
                      <span className="error-message">{errors.message}</span>
                    )}
                  </div>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="form-status success">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="form-status error" style={{ 
                    whiteSpace: 'pre-wrap', 
                    wordBreak: 'break-word',
                    maxHeight: '400px',
                    overflowY: 'auto',
                    padding: '15px',
                    fontSize: '13px',
                    lineHeight: '1.6'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginRight: '10px' }}>
                      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div style={{ flex: 1 }}>
                      <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                        {Object.keys(errors).length > 0 
                          ? 'Please fix the errors above' 
                          : errorMessage || 'Failed to send message. Please try again or contact us directly.'}
                      </div>
                      {fullErrorDetails && (
                        <details style={{ marginTop: '10px', fontSize: '11px', opacity: 0.9 }}>
                          <summary style={{ cursor: 'pointer', marginBottom: '5px', fontWeight: 'bold' }}>
                            📋 Click to view full error details
                          </summary>
                          <div style={{ 
                            marginTop: '10px', 
                            padding: '10px', 
                            background: 'rgba(0,0,0,0.2)', 
                            borderRadius: '4px',
                            fontFamily: 'monospace',
                            fontSize: '10px',
                            overflowX: 'auto'
                          }}>
                            <div><strong>Error Name:</strong> {fullErrorDetails.name}</div>
                            <div><strong>Error Message:</strong> {fullErrorDetails.message}</div>
                            <div><strong>Status Code:</strong> {fullErrorDetails.status}</div>
                            <div><strong>Status Text:</strong> {fullErrorDetails.statusText}</div>
                            <div><strong>Error Text:</strong> {fullErrorDetails.text}</div>
                            <div><strong>Error Code:</strong> {fullErrorDetails.code}</div>
                            <div style={{ marginTop: '10px' }}>
                              <strong>Full Error JSON:</strong>
                              <pre style={{ 
                                marginTop: '5px', 
                                whiteSpace: 'pre-wrap',
                                wordBreak: 'break-word'
                              }}>
                                {fullErrorDetails.stringified}
                              </pre>
                            </div>
                          </div>
                        </details>
                      )}
                    </div>
                  </div>
                )}

                <div className="contactbox-form-bottom">
                  <div className="form-group">
                    <button 
                      type="submit" 
                      className="button dark outline w-xs-100 mb-4"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner"></span>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </div>
              </form>
              <span className="dialogbox-close" onClick={onClose}>
                <svg className="icon" width="18" height="18" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="dialogbox-overlay" onClick={handleOverlayClick}></div>
    </div>
  )
}

export default ContactModal
