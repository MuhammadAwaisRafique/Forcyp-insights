import React, { useState, useEffect, useRef } from 'react'
import './MapSection.css'

const MapSection = () => {
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

  return (
    <div 
      ref={sectionRef}
      className={`map-section ${isVisible ? 'visible' : ''}`}
    >
      {/* Animated Background Elements */}
      <div className="map-bg-gradient"></div>
      <div className="map-grid-pattern"></div>
      <div className="map-particles">
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i} 
            className="map-particle"
            style={{
              '--particle-delay': `${i * 0.3}s`,
              '--particle-x': `${(i * 7) % 100}%`,
              '--particle-y': `${(i * 5) % 100}%`
            }}
          ></div>
        ))}
      </div>

      <div className="container">
        <div className="map-content-wrapper">
          {/* Left Side - Text Content */}
          <div className="map-text-content">
            <div className="map-label">
              GLOBAL PRESENCE
            </div>
            <h2 className="map-title">We Are Global</h2>
            <p className="map-description">
              Operating in compliance with Pakistan's cybersecurity regulations, we deliver comprehensive security solutions across South Asia, Middle East, and beyond. Our services are designed to protect businesses and individuals while adhering to local data protection laws.
            </p>
            <div className="map-stats">
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Coverage</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Local Compliance</div>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive Network Visualization */}
          <div className="map-visual-container">
            <div className="network-visualization">
              {/* Central Hub (Pakistan) */}
              <div className="central-hub">
                <div className="hub-core">
                  <div className="hub-icon">🛡️</div>
                  <div className="hub-label">Pakistan</div>
                </div>
                <div className="hub-pulse-ring ring-1"></div>
                <div className="hub-pulse-ring ring-2"></div>
                <div className="hub-pulse-ring ring-3"></div>
              </div>

              {/* Regional Nodes */}
              {[
                { name: 'South Asia', angle: 0, distance: 120, icon: '🌏', delay: '0.2s' },
                { name: 'Middle East', angle: 60, distance: 120, icon: '🏛️', delay: '0.4s' },
                { name: 'Southeast Asia', angle: 120, distance: 120, icon: '🌴', delay: '0.6s' },
                { name: 'East Asia', angle: 180, distance: 120, icon: '🏯', delay: '0.8s' },
                { name: 'Europe', angle: 240, distance: 120, icon: '🏰', delay: '1s' },
                { name: 'Americas', angle: 300, distance: 120, icon: '🌎', delay: '1.2s' }
              ].map((region, index) => {
                const x = 50 + Math.cos((region.angle * Math.PI) / 180) * (region.distance / 3.5)
                const y = 50 + Math.sin((region.angle * Math.PI) / 180) * (region.distance / 3.5)
                
                return (
                  <div
                    key={index}
                    className="region-node"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      '--node-delay': region.delay,
                      '--node-angle': `${region.angle}deg`
                    }}
                  >
                    <div className="node-connection-line"></div>
                    <div className="node-core">
                      <div className="node-icon">{region.icon}</div>
                      <div className="node-label">{region.name}</div>
                    </div>
                    <div className="node-pulse"></div>
                  </div>
                )
              })}

              {/* Data Flow Particles */}
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="data-particle"
                  style={{
                    '--particle-index': i,
                    '--particle-delay': `${i * 0.3}s`
                  }}
                ></div>
              ))}

              {/* Security Shield Overlay */}
              <div className="security-shield">
                <svg viewBox="0 0 200 200" className="shield-svg">
                  <defs>
                    <radialGradient id="shieldGradient" cx="50%" cy="50%">
                      <stop offset="0%" stopColor="rgba(108, 0, 120, 0.3)" />
                      <stop offset="100%" stopColor="rgba(108, 0, 120, 0)" />
                    </radialGradient>
                  </defs>
                  <path
                    d="M100 20 L160 40 L160 100 Q160 140 100 180 Q40 140 40 100 L40 40 Z"
                    fill="url(#shieldGradient)"
                    stroke="rgba(108, 0, 120, 0.4)"
                    strokeWidth="2"
                    className="shield-path"
                  />
                </svg>
              </div>

              {/* Animated Grid Background */}
              <div className="network-grid"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MapSection
