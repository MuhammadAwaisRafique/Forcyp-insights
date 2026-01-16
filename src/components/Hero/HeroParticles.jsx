import React, { useEffect, useRef } from 'react'

const HeroParticles = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const particleCount = 120
    let time = 0

    class Particle {
      constructor() {
        this.baseX = Math.random() * canvas.width
        this.baseY = Math.random() * canvas.height
        this.x = this.baseX
        this.y = this.baseY
        this.size = Math.random() * 2 + 0.5
        this.waveAmplitude = Math.random() * 30 + 20
        this.waveFrequency = Math.random() * 0.02 + 0.01
        this.waveSpeed = Math.random() * 0.5 + 0.3
        this.opacity = Math.random() * 0.3 + 0.2
        this.depth = Math.random()
        const colorChoice = Math.random()
        if (colorChoice < 0.5) {
          this.color = 'rgba(108, 0, 120, 0.8)' // Purple light
        } else {
          this.color = 'rgba(56, 3, 87, 0.8)' // Purple dark
        }
        this.phase = Math.random() * Math.PI * 2
      }

      update(t) {
        // Waving animation - particles move in wave patterns
        this.x = this.baseX + Math.sin(t * this.waveSpeed + this.phase) * this.waveAmplitude
        this.y = this.baseY + Math.cos(t * this.waveSpeed * 0.7 + this.phase) * this.waveAmplitude * 0.5
        
        // Add depth-based movement
        this.x += Math.sin(t * 0.3 + this.phase) * 10 * this.depth
        this.y += Math.cos(t * 0.2 + this.phase) * 15 * this.depth

        // Keep particles in bounds
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.opacity
        ctx.shadowBlur = 10
        ctx.shadowColor = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        particle.update(time)
        particle.draw()
      })
      
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles.forEach(particle => {
        particle.baseX = Math.min(particle.baseX, canvas.width)
        particle.baseY = Math.min(particle.baseY, canvas.height)
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
        pointerEvents: 'none'
      }}
    />
  )
}

export default HeroParticles

