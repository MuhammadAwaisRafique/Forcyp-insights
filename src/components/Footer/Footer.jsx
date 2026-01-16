import React from 'react'
import './Footer.css'
import logoImage from '../../assets/images/forcyp-logo.PNG'

const Footer = ({ onContactClick, onTrialClick, onPrivacyClick }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="page-footer">
      {/* Animated Background */}
      <div className="footer-bg-gradient"></div>
      <div className="footer-grid-pattern"></div>

      <div className="container">
        <div className="footer-content">
          {/* Top Section */}
          <div className="footer-top">
            <div className="footer-main">
              {/* Company Info */}
              <div className="footer-brand">
                <div className="footer-logo">
                  <img src={logoImage} alt="Forcyp Insights Logo" className="footer-logo-img" />
                  <div className="footer-logo-text">
                    <span className="logo-text-primary">Forcyp</span>
                    <span className="logo-text-secondary"> Insights</span>
                  </div>
                </div>
                <p className="footer-tagline">
                  Next-generation cybersecurity platform designed to protect your enterprise from emerging threats.
                </p>
                <div className="footer-social">
                  <a href="#linkedin" className="social-icon" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="currentColor"/>
                    </svg>
                  </a>
                  <a href="#twitter" className="social-icon" aria-label="Twitter">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" fill="currentColor"/>
                    </svg>
                  </a>
                  <a href="#facebook" className="social-icon" aria-label="Facebook">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" fill="currentColor"/>
                    </svg>
                  </a>
                  <a href="#github" className="social-icon" aria-label="GitHub">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Footer Links Grid */}
              <div className="footer-links-grid">
                <div className="footer-column">
                  <h4 className="footer-column-title">Platform</h4>
                  <ul className="footer-links">
                    <li><a href="#platform">Overview</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><span onClick={onTrialClick} className="footer-link-clickable">Free Trial</span></li>
                  </ul>
                </div>

                <div className="footer-column">
                  <h4 className="footer-column-title">Services</h4>
                  <ul className="footer-links">
                    <li><a href="#services">Cyber Security</a></li>
                    <li><a href="#services">Forensic & Detective Services</a></li>
                    <li><a href="#services">Data Analysis</a></li>
                    <li><a href="#services">Data Science</a></li>
                    <li><a href="#services">Artificial Intelligence</a></li>
                    <li><a href="#services">Machine Learning</a></li>
                    <li><a href="#services">Web Development</a></li>
                    <li><a href="#services">App Development</a></li>
                    <li><a href="#services">SEO & Digital Marketing</a></li>
                    <li><a href="#services">2D Animation & Graphics</a></li>
                    <li><a href="#services">VAPT Testing</a></li>
                    <li><a href="#services">Brand Protection</a></li>
                    <li><a href="#services">Identity Protection</a></li>
                    <li><a href="#services">PVT Intelligence</a></li>
                  </ul>
                </div>

                <div className="footer-column">
                  <h4 className="footer-column-title">Company</h4>
                  <ul className="footer-links">
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#team">Our Team</a></li>
                    <li><a href="#careers">Careers</a></li>
                    <li><a href="#partners">Partners</a></li>
                    <li><span onClick={onContactClick} className="footer-link-clickable">Contact Us</span></li>
                  </ul>
                </div>

                <div className="footer-column">
                  <h4 className="footer-column-title">Resources</h4>
                  <ul className="footer-links">
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#case-studies">Case Studies</a></li>
                    <li><a href="#whitepapers">Whitepapers</a></li>
                    <li><a href="mailto:Support@forcyp.com">Support</a></li>
                    <li><a href="#documentation">Documentation</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="footer-legal">
                <span onClick={onPrivacyClick} className="footer-link-clickable">Privacy Policy</span>
                <span className="footer-separator">•</span>
                <a href="#terms-of-service">Terms of Service</a>
                <span className="footer-separator">•</span>
                <a href="#cookies-policy">Cookie Policy</a>
                <span className="footer-separator">•</span>
                <a href="#accessibility">Accessibility</a>
              </div>
              <div className="footer-copyright">
                <p>Copyright © {currentYear} Forcyp Insights. All rights reserved.</p>
                <p className="footer-location">Based in Islamabad, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
