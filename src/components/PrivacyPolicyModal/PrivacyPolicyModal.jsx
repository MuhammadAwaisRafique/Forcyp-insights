import React from 'react'
import './PrivacyPolicyModal.css'

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className={`dialogbox privacy-policy-modal ${isOpen ? 'open' : ''}`} 
      style={{ display: isOpen ? 'flex' : 'none' }}
      onClick={handleOverlayClick}
    >
      <div className="dialogbox-wrapper privacy-policy-wrapper">
        <div className="dialogbox-panel privacy-policy-panel">
          <div className="dialogbox-panel-scroll privacy-policy-content">
            <div className="privacy-policy-header">
              <h2 className="privacy-policy-title">Privacy Policy</h2>
              <span className="dialogbox-close" onClick={onClose}>
                <svg className="icon" width="18" height="18" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>

            <div className="privacy-policy-body">
              <p className="privacy-policy-intro">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section className="privacy-section">
                <h3 className="privacy-section-title">Client Confidentiality & Identity Protection</h3>
                <div className="privacy-highlight-box">
                  <p className="privacy-highlight-text">
                    <strong>🔒 Complete Client Anonymity Guarantee:</strong> Any client who engages our services - 
                    <span className="highlight-emphasis"> their identity will never be revealed</span> or disclosed to any third party, 
                    under any circumstances.
                  </p>
                </div>
                <p>
                  At <strong>Forcyp Insights</strong>, we understand the sensitive nature of the services we provide. 
                  Whether you engage us for cybersecurity services, forensic investigations, data science projects, 
                  web development, or any other service, your identity and the nature of your engagement will remain 
                  completely confidential.
                </p>
              </section>

              <section className="privacy-section">
                <h3 className="privacy-section-title">Our Commitment to Privacy</h3>
                <ul className="privacy-list">
                  <li>
                    <strong>Complete Anonymity:</strong> The identity of any client who engages our services will 
                    <strong> never be revealed</strong> or disclosed to any third party, under any circumstances.
                  </li>
                  <li>
                    <strong>Confidentiality Guarantee:</strong> All work performed for clients, regardless of the 
                    service type (cybersecurity, data analysis, web development, etc.), is treated with strict 
                    confidentiality. Client identities remain completely anonymous.
                  </li>
                  <li>
                    <strong>Non-Disclosure:</strong> We do not use client names, company names, or any identifying 
                    information in our marketing materials, case studies, or public communications without explicit 
                    written consent.
                  </li>
                  <li>
                    <strong>Data Protection:</strong> All client data, communications, and project information are 
                    handled with the utmost care and stored securely. We implement industry-standard security measures 
                    to protect client information.
                  </li>
                  <li>
                    <strong>Service Privacy:</strong> Whether you engage us for cybersecurity services, forensic 
                    investigations, data science projects, or any other service, your identity and the nature of your 
                    engagement will remain confidential.
                  </li>
                </ul>
              </section>

              <section className="privacy-section">
                <h3 className="privacy-section-title">What This Means for You</h3>
                <p>When you work with Forcyp Insights:</p>
                <ul className="privacy-list">
                  <li>Your identity will <strong>not be revealed</strong> in any public forum</li>
                  <li>Your project details will <strong>not be shared</strong> without your explicit permission</li>
                  <li>Your business information will <strong>not be used</strong> for marketing purposes</li>
                  <li>Your confidentiality is our <strong>top priority</strong></li>
                </ul>
              </section>

              <section className="privacy-section">
                <h3 className="privacy-section-title">Information We Collect</h3>
                <p>
                  We collect information that you provide directly to us, such as when you:
                </p>
                <ul className="privacy-list">
                  <li>Contact us through our website or contact forms</li>
                  <li>Request a trial or demo of our services</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Engage our services</li>
                </ul>
                <p>
                  This information may include your name, email address, phone number, company name, and any other 
                  information you choose to provide. All such information is kept strictly confidential and is never 
                  shared with third parties without your explicit consent.
                </p>
              </section>

              <section className="privacy-section">
                <h3 className="privacy-section-title">How We Use Your Information</h3>
                <p>We use the information we collect to:</p>
                <ul className="privacy-list">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you technical notices, updates, and support messages</li>
                  <li>Communicate with you about products, services, and events</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                </ul>
                <p>
                  <strong>Important:</strong> We will never use your information or identity for marketing purposes 
                  or share it with third parties without your explicit written consent.
                </p>
              </section>

              <section className="privacy-section">
                <h3 className="privacy-section-title">Data Security</h3>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. However, no method 
                  of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </section>

              <section className="privacy-section">
                <h3 className="privacy-section-title">Legal Compliance</h3>
                <p>
                  We comply with applicable data protection and privacy laws and regulations. All client information 
                  is processed in accordance with our privacy standards and legal obligations.
                </p>
              </section>

              <section className="privacy-section">
                <h3 className="privacy-section-title">Contact for Privacy Concerns</h3>
                <p>
                  If you have any questions or concerns about our privacy practices or this Privacy Policy, please 
                  contact us at:
                </p>
                <div className="privacy-contact-info">
                  <p>
                    <strong>Email:</strong> <a href="mailto:Support@forcyp.com">Support@forcyp.com</a>
                  </p>
                  <p>
                    <strong>Phone:</strong> <a href="tel:+15513255677">+1 (551) 325-5677</a> | <a href="tel:+923558753346">+92 355 8753346</a>
                  </p>
                  <p>
                    <strong>Location:</strong> Islamabad, Pakistan
                  </p>
                  <p>
                    <strong>Office Hours:</strong> Mon-Fri 9AM-6PM PKT
                  </p>
                </div>
              </section>

              <section className="privacy-section">
                <h3 className="privacy-section-title">Changes to This Policy</h3>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review 
                  this Privacy Policy periodically for any changes.
                </p>
              </section>

              <div className="privacy-policy-footer">
                <p className="privacy-policy-summary">
                  <strong>Summary:</strong> Your privacy and confidentiality are paramount to us. Any client who 
                  engages our services can rest assured that their identity will never be revealed or disclosed to 
                  any third party, under any circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dialogbox-overlay" onClick={handleOverlayClick}></div>
    </div>
  )
}

export default PrivacyPolicyModal

