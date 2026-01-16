import React, { useState, useEffect, useRef } from 'react'
import './Partners.css'

const Partners = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)

  const partners = [
    'DSTA', 'NVIDIA', 'Bitso', 'Unieuro', 'Discovery', 'VALITOR', 'tvN', 'AQP', 
    'Garr', 'GIA', 'Claro', 'Suruhanjaya Security', 'Justo', 'ST Engineering', 
    'Enermex', 'Warner Bros. Discovery', 'Rheinmetall Defence', 'LCGPA', 'SLR Consulting'
  ]

  // Duplicate enough times for seamless infinite scroll (need at least 2 full sets)
  // We'll use 3 sets to ensure smooth transition
  const allPartners = [...partners, ...partners, ...partners]

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
        setMousePosition({ x, y })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      return () => container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="partners-container" ref={containerRef}>
      {/* Gradient Overlays for depth */}
      <div className="partners-gradient-left"></div>
      <div className="partners-gradient-right"></div>
      
      {/* Animated Background Pattern */}
      <div className="partners-pattern"></div>
      <div className="partners-pattern-2"></div>
      
      {/* Floating Particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div 
          key={`particle-${i}`} 
          className="floating-particle"
          style={{
            '--particle-delay': `${i * 0.3}s`,
            '--particle-duration': `${8 + (i % 5) * 2}s`,
            '--particle-x': `${(i * 7) % 100}%`
          }}
        ></div>
      ))}
      
      {/* Wave Effects */}
      <div className="wave-effect wave-1"></div>
      <div className="wave-effect wave-2"></div>
      <div className="wave-effect wave-3"></div>
      
      {/* Ripple Effects */}
      <div className="ripple-effect ripple-1"></div>
      <div className="ripple-effect ripple-2"></div>
      
      <div 
        className="logo-wrapper"
        style={{
          '--mouse-x': mousePosition.x,
          '--mouse-y': mousePosition.y
        }}
      >
        {allPartners.map((partner, index) => (
          <div 
            key={index} 
            className="logo-item"
            style={{
              '--index': index,
              '--delay': `${index * 0.05}s`,
              '--rotation': `${(index % 3) * 2}deg`
            }}
          >
            <span className="logo-item-inner">
              <span className="logo-item-text">{partner}</span>
              <span className="logo-item-glow"></span>
              <span className="logo-item-shadow"></span>
              <span className="logo-item-border"></span>
            </span>
          </div>
        ))}
      </div>
      
      {/* Multiple Shimmer Effects */}
      <div className="partners-shimmer shimmer-1"></div>
      <div className="partners-shimmer shimmer-2"></div>
      
      {/* Energy Lines */}
      <div className="energy-line energy-line-1"></div>
      <div className="energy-line energy-line-2"></div>
      <div className="energy-line energy-line-3"></div>
    </div>
  )
}

export default Partners
