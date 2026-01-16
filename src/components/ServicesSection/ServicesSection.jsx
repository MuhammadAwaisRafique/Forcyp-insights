import React, { useState, useEffect, useRef } from 'react'
import './ServicesSection.css'

const ServicesSection = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
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

  const services = [
    {
      id: 1,
      title: 'Cyber Security',
      brief: 'Comprehensive security solutions protecting your digital assets from evolving threats',
      icon: 'shield',
      color: 'cyan'
    },
    {
      id: 2,
      title: 'Forensic & Detective Services',
      brief: 'Expert digital forensics and investigative services for complex security incidents',
      icon: 'search',
      color: 'green'
    },
    {
      id: 3,
      title: 'Data Analysis',
      brief: 'Transform raw data into actionable insights for informed decision-making',
      icon: 'chart',
      color: 'cyan'
    },
    {
      id: 4,
      title: 'Data Science',
      brief: 'Advanced analytics and predictive modeling to unlock business value',
      icon: 'database',
      color: 'green'
    },
    {
      id: 5,
      title: 'Artificial Intelligence',
      brief: 'Cutting-edge AI solutions to automate and enhance your business processes',
      icon: 'cpu',
      color: 'cyan'
    },
    {
      id: 6,
      title: 'Machine Learning',
      brief: 'Intelligent systems that learn and adapt to improve performance over time',
      icon: 'robot',
      color: 'green'
    },
    {
      id: 7,
      title: 'Web Development',
      brief: 'Custom, responsive websites built with modern technologies and best practices',
      icon: 'code',
      color: 'cyan'
    },
    {
      id: 8,
      title: 'App Development',
      brief: 'Native and cross-platform mobile applications that deliver exceptional user experiences',
      icon: 'smartphone',
      color: 'green'
    },
    {
      id: 9,
      title: 'SEO & Digital Marketing',
      brief: 'Strategic digital marketing solutions to boost your online presence and drive growth',
      icon: 'target',
      color: 'cyan'
    },
    {
      id: 10,
      title: '2D Animation & Graphics Designing',
      brief: 'Creative visual content and animations that bring your brand to life',
      icon: 'palette',
      color: 'green'
    },
    {
      id: 11,
      title: 'VAPT (Vulnerability & Penetration Testing)',
      brief: 'Comprehensive security assessments to identify and remediate vulnerabilities before attackers exploit them',
      icon: 'bug',
      color: 'cyan'
    },
    {
      id: 12,
      title: 'Brand Protection',
      brief: 'Safeguard your brand reputation and intellectual property from online threats and impersonation',
      icon: 'lock',
      color: 'green'
    },
    {
      id: 13,
      title: 'Identity Protection',
      brief: 'Advanced solutions to protect personal and corporate identities from theft, fraud, and misuse',
      icon: 'user-shield',
      color: 'cyan'
    },
    {
      id: 14,
      title: 'PVT Intelligence Services',
      brief: 'Private intelligence gathering and analysis services for strategic business and security decisions',
      icon: 'eye',
      color: 'green'
    }
  ]

  const renderIcon = (iconType) => {
    const iconSize = 32
    const strokeWidth = 2

    switch (iconType) {
      case 'shield':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="M9 12l2 2 4-4"/>
          </svg>
        )
      case 'search':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        )
      case 'chart':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"/>
            <line x1="12" y1="20" x2="12" y2="4"/>
            <line x1="6" y1="20" x2="6" y2="14"/>
          </svg>
        )
      case 'database':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3"/>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
          </svg>
        )
      case 'cpu':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
            <rect x="9" y="9" width="6" height="6"/>
            <line x1="9" y1="1" x2="9" y2="4"/>
            <line x1="15" y1="1" x2="15" y2="4"/>
            <line x1="9" y1="20" x2="9" y2="23"/>
            <line x1="15" y1="20" x2="15" y2="23"/>
            <line x1="20" y1="9" x2="23" y2="9"/>
            <line x1="20" y1="14" x2="23" y2="14"/>
            <line x1="1" y1="9" x2="4" y2="9"/>
            <line x1="1" y1="14" x2="4" y2="14"/>
          </svg>
        )
      case 'robot':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <circle cx="12" cy="16" r="1"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        )
      case 'code':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"/>
            <polyline points="8 6 2 12 8 18"/>
          </svg>
        )
      case 'smartphone':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
            <line x1="12" y1="18" x2="12.01" y2="18"/>
          </svg>
        )
      case 'target':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <circle cx="12" cy="12" r="6"/>
            <circle cx="12" cy="12" r="2"/>
          </svg>
        )
      case 'palette':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
            <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
            <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
          </svg>
        )
      case 'bug':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
            <path d="M7.05 7.05l2.83 2.83M14.12 14.12l2.83 2.83M7.05 16.95l2.83-2.83M14.12 9.88l2.83-2.83"/>
            <circle cx="12" cy="12" r="2"/>
          </svg>
        )
      case 'lock':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="M12 8v4M9 12h6"/>
            <circle cx="12" cy="10" r="1" fill="currentColor"/>
          </svg>
        )
      case 'user-shield':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M22 12c0-1.1-.9-2-2-2h-2M20 12c0 1.1-.9 2-2 2h-2M20 12v6M20 12h-4"/>
            <path d="M16 12h4v6h-4z"/>
          </svg>
        )
      case 'eye':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
            <path d="M17 8l-5 5M7 8l5 5"/>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div 
      ref={sectionRef}
      className={`services-section ${isVisible ? 'visible' : ''}`}
      id="services"
    >
      {/* Animated Background */}
      <div className="services-bg-gradient"></div>
      <div className="services-grid-pattern"></div>
      
      <div className="container">
        {/* Section Header */}
        <div className="services-header">
          <div className="services-label">OUR SERVICES</div>
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">Comprehensive Solutions for the Digital Age</p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card ${service.color} ${hoveredCard === service.id ? 'hovered' : ''}`}
              style={{ '--card-delay': `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-background"></div>
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="card-icon-wrapper">
                  <div className="card-icon-bg"></div>
                  {renderIcon(service.icon)}
                </div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-brief">{service.brief}</p>
              </div>
              <div className="card-border"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
