import React, { useState, useEffect, useRef } from 'react'
import './ParallaxBackground3D.css'

const ParallaxBackground3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate mouse position relative to viewport center
      const x = (e.clientX / window.innerWidth - 0.5) * 2 // -1 to 1
      const y = (e.clientY / window.innerHeight - 0.5) * 2 // -1 to 1
      
      setMousePosition({ x, y })
    }

    // Throttle mouse movement for performance
    let ticking = false
    const throttledMouseMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleMouseMove(e)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('mousemove', throttledMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', throttledMouseMove)
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="parallax-3d-container"
      style={{
        '--mouse-x': mousePosition.x,
        '--mouse-y': mousePosition.y
      }}
    >
      {/* Base Background Layer */}
      <div className="parallax-layer layer-base"></div>
      
      {/* Deep Background Layers (furthest) */}
      <div className="parallax-layer layer-1">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      
      {/* Mid Background Layers */}
      <div className="parallax-layer layer-2">
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
        <div className="shape shape-6"></div>
        <div className="shape shape-7"></div>
      </div>
      
      {/* Foreground Layers (closest) */}
      <div className="parallax-layer layer-3">
        <div className="shape shape-8"></div>
        <div className="shape shape-9"></div>
        <div className="shape shape-10"></div>
      </div>
      
      {/* Ambient Glow Layer */}
      <div className="parallax-layer layer-glow"></div>
    </div>
  )
}

export default ParallaxBackground3D

