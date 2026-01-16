import React from 'react'
import './BackgroundAnimation.css'

const BackgroundAnimation = () => {
  return (
    <div className="background-animation-container">
      {/* Main Gradient Blobs */}
      <div className="gradient-blob blob-1"></div>
      <div className="gradient-blob blob-2"></div>
      <div className="gradient-blob blob-3"></div>
      <div className="gradient-blob blob-4"></div>
      <div className="gradient-blob blob-5"></div>
      <div className="gradient-blob blob-6"></div>
      
      {/* Mesh Gradient Overlay */}
      <div className="mesh-gradient"></div>
      
      {/* Animated Grid Pattern */}
      <div className="animated-grid"></div>
      
      {/* Light Rays */}
      <div className="light-ray ray-1"></div>
      <div className="light-ray ray-2"></div>
      <div className="light-ray ray-3"></div>
      
      {/* Orbital Rings */}
      <div className="orbital-ring ring-1"></div>
      <div className="orbital-ring ring-2"></div>
      
      {/* Floating Particles Layer */}
      <div className="particles-layer">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="particle" style={{
            '--delay': `${i * 0.1}s`,
            '--duration': `${15 + (i % 10) * 2}s`,
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`
          }}></div>
        ))}
      </div>
      
      {/* Gradient Waves */}
      <div className="gradient-wave wave-1"></div>
      <div className="gradient-wave wave-2"></div>
      <div className="gradient-wave wave-3"></div>
      
      {/* Ambient Glow */}
      <div className="ambient-glow"></div>
    </div>
  )
}

export default BackgroundAnimation
