import React from 'react'
import ParallaxBackground3D from './ParallaxBackground3D'
import Partners from '../Partners/Partners'
import './Hero.css'

const Hero = () => {
  return (
    <div className="page-section intro auto">
      <div className="video-background">
        <ParallaxBackground3D />
      </div>
      
      <div className="container mb-4 hero-content">
        <div className="text-center">
          <h1 className="mb-1">Secure, Investigate, Resolve</h1>
          <p className="mb-5 hero-subtitle">
            Protecting the Digital Realm and uncovering cyber threats.
          </p>
        </div>

        <div className="row mt-lg-2 mt-xxl-6 text-left hero-cards-row">
          <div className="col-lg-6 mb-3 mb-lg-0 hero-card-col">
            <a href="#idp" className="card-link me">
              <div className="card-glow"></div>
              <span className="card-link-type">FOR INDIVIDUALS</span>
              <span className="card-link-title">Secure Yourself</span>
              <span className="card-link-button">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24">
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" fill="currentColor"/>
                </svg>
              </span>
            </a>
          </div>
          <div className="col-lg-6 hero-card-col">
            <a href="#cybersecurity_services" className="card-link company anchor">
              <div className="card-glow"></div>
              <span className="card-link-type">FOR ENTERPRISE</span>
              <span className="card-link-title">Secure Your Company</span>
              <span className="card-link-button">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24">
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" fill="currentColor"/>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Partners Section - Moved inside Hero */}
      <div className="partners-section-hero">
        <Partners />
      </div>
    </div>
  )
}

export default Hero

