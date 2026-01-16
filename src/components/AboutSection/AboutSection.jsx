import React, { useState, useEffect, useRef } from 'react'
import './AboutSection.css'

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('company')
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

  // Team hierarchy structure - Only Leadership
  const teamHierarchy = [
    {
      level: 'Leadership',
      members: [
        {
          name: 'Jahanzaib Bhatti',
          position: 'Founder',
          expertise: 'Cyber Security & Private Intelligence',
          bio: 'Jahanzaib Bhatti is the visionary founder with deep expertise in cyber security and private intelligence operations. He defines the company\'s strategic direction and has built a culture rooted in trust, confidentiality, and technical excellence.',
          image: null
        },
        {
          name: 'M. Abdullah Bhatti',
          position: 'Chief Executive Officer (CEO)',
          expertise: 'IT Solutions & Cyber Security',
          bio: 'M. Abdullah Bhatti leads the company\'s overall operations and growth strategy with strong expertise in IT solutions and cyber security. He ensures the delivery of secure, scalable technology services while driving business expansion and maintaining exceptional service standards.',
          image: null
        },
        {
          name: 'Mahad Asim',
          position: 'Managing Director',
          expertise: 'Business Development & Project Management',
          bio: 'Mahad Asim oversees business development and project execution across the organization. He plays a pivotal role in client relations, strategic partnerships, and ensuring projects are delivered on time and aligned with business objectives.',
          image: null
        },
        {
          name: 'Muhammad Awais Rafique',
          position: 'Chief Technology Officer (CTO)',
          expertise: 'Software Development, System Architecture & IT Innovation',
          bio: 'Muhammad Awais Rafique leads the company\'s technical vision and innovation strategy. He directs the development of cutting-edge software solutions and robust system architectures that deliver secure, efficient, and high-performance IT systems.',
          image: null
        }
      ]
    }
  ]

  return (
    <div 
      ref={sectionRef}
      className={`about-section ${isVisible ? 'visible' : ''}`}
      id="about"
    >
      {/* Animated Background Elements */}
      <div className="about-bg-gradient"></div>
      <div className="about-grid-pattern"></div>
      <div className="about-particles">
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i} 
            className="about-particle"
            style={{
              '--particle-delay': `${i * 0.2}s`,
              '--particle-x': `${(i * 7) % 100}%`,
              '--particle-y': `${(i * 5) % 100}%`
            }}
          ></div>
        ))}
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="about-header">
          <div className="about-label">
            ABOUT US
          </div>
          <h2 className="about-title">Who We Are</h2>
          <p className="about-subtitle">
            Learn more about our company mission, values, and the talented team driving innovation in cybersecurity.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="about-tabs">
          <button
            className={`about-tab ${activeTab === 'company' ? 'active' : ''}`}
            onClick={() => setActiveTab('company')}
            data-tab="company"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3 21H21M5 21V7L12 3L19 7V21M9 9V21M15 9V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            About Company
          </button>
          <button
            className={`about-tab ${activeTab === 'team' ? 'active' : ''}`}
            onClick={() => setActiveTab('team')}
            data-tab="team"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Our Team
          </button>
        </div>

        {/* Tab Content */}
        <div className="about-content">
          {/* Company Tab */}
          {activeTab === 'company' && (
            <div className="about-company-content">
              <div className="company-intro">
                <h3 className="content-title">Our Company</h3>
                
                {/* Company Overview */}
                <div className="company-overview">
                  <div className="overview-highlight">
                    <div className="overview-texture"></div>
                    <div className="overview-shimmer"></div>
                    <p className="overview-text">
                      <span className="text-bold">Forcyp Insights</span> is a leading 
                      <span className="text-gradient"> technology and cybersecurity company</span> based in Pakistan, 
                      dedicated to providing comprehensive digital solutions that protect and empower businesses in an evolving digital landscape.
                    </p>
                  </div>
                </div>

                {/* Services Grid */}
                <div className="services-showcase">
                  <div className="showcase-texture"></div>
                  <div className="showcase-shimmer"></div>
                  <div className="showcase-header">
                    <h4 className="showcase-title">We Specialize In</h4>
                  </div>
                  <div className="services-tags">
                    <span className="service-tag">Cybersecurity</span>
                    <span className="service-tag">Software Development</span>
                    <span className="service-tag">Data Science</span>
                    <span className="service-tag">Artificial Intelligence</span>
                    <span className="service-tag">Digital Innovation</span>
                  </div>
                  <p className="showcase-subtext">
                    Combining <span className="text-bold">cutting-edge technology</span> with 
                    <span className="text-bold"> deep industry expertise</span>
                  </p>
                </div>

                {/* Mission Statement */}
                <div className="mission-statement">
                  <div className="mission-icon-wrapper">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="mission-content">
                    <h4 className="mission-title">Our Mission</h4>
                    <p className="mission-text">
                      To empower organizations with <span className="text-bold text-purple">robust security frameworks</span> and 
                      <span className="text-bold text-purple"> innovative technology solutions</span> that enable them to operate 
                      confidently and competitively in an increasingly complex digital environment.
                    </p>
                    <p className="mission-subtext">
                      We understand that success today requires more than just technology—it's about 
                      <span className="text-highlight"> building trust</span>, 
                      <span className="text-highlight"> ensuring compliance</span>, 
                      <span className="text-highlight"> driving innovation</span>, and 
                      <span className="text-highlight"> protecting what matters most</span> to our clients.
                    </p>
                  </div>
                </div>

                {/* Global Reach */}
                <div className="global-reach">
                  <div className="reach-item">
                    <span className="reach-icon">🌍</span>
                    <div className="reach-content">
                      <span className="reach-label">Global Presence</span>
                      <span className="reach-value">South Asia, Middle East & Beyond</span>
                    </div>
                  </div>
                  <div className="reach-item">
                    <span className="reach-icon">🛡️</span>
                    <div className="reach-content">
                      <span className="reach-label">Compliance</span>
                      <span className="reach-value">Pakistan's Cybersecurity Regulations</span>
                    </div>
                  </div>
                </div>

                {/* Team Expertise */}
                <div className="team-expertise">
                  <h4 className="expertise-title">Our Multidisciplinary Team</h4>
                  <div className="expertise-grid">
                    <div className="expertise-item">
                      <span className="expertise-name">Security Experts</span>
                    </div>
                    <div className="expertise-item">
                      <span className="expertise-name">Forensic Analysts</span>
                    </div>
                    <div className="expertise-item">
                      <span className="expertise-name">AI Specialists</span>
                    </div>
                    <div className="expertise-item">
                      <span className="expertise-name">Creative Designers</span>
                    </div>
                  </div>
                  <p className="expertise-description">
                    Works tirelessly to deliver <span className="text-bold">tailored solutions</span> that address 
                    <span className="text-bold"> unique business challenges</span> and drive 
                    <span className="text-bold text-purple"> measurable results</span>
                  </p>
                </div>

                {/* Approach Statement */}
                <div className="approach-statement">
                  <div className="approach-badge">Our Approach</div>
                  <p className="approach-text">
                    At Forcyp Insights, we believe in a <span className="text-bold text-purple">proactive and holistic approach</span> to technology. 
                    Whether safeguarding your digital assets through advanced cybersecurity measures, developing custom software solutions, 
                    leveraging data science and AI for business intelligence, or creating compelling digital experiences through 
                    web development and design—we provide <span className="text-bold">comprehensive services</span> that adapt to your 
                    evolving needs and help you <span className="text-gradient">stay ahead in the digital age</span>.
                  </p>
                </div>
              </div>

              <div className="company-values">
                <h3 className="content-title">Our Values</h3>
                <div className="values-grid">
                  <div className="value-card">
                    <div className="value-icon">🔒</div>
                    <h4>Security First</h4>
                    <p>Security is at the core of everything we do</p>
                  </div>
                  <div className="value-card">
                    <div className="value-icon">💡</div>
                    <h4>Innovation</h4>
                    <p>Constantly evolving to stay ahead of threats</p>
                  </div>
                  <div className="value-card">
                    <div className="value-icon">🤝</div>
                    <h4>Trust</h4>
                    <p>Building lasting relationships with our clients</p>
                  </div>
                  <div className="value-card">
                    <div className="value-icon">🎯</div>
                    <h4>Excellence</h4>
                    <p>Delivering the highest quality solutions</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Team Tab */}
          {activeTab === 'team' && (
            <div className="about-team-content">
              <div className="team-intro">
                <h3 className="content-title">Our Team</h3>
                <p className="content-text">
                  Meet the talented professionals who make Forcyp Insights a leader in cybersecurity. 
                  Our team brings together expertise from various domains to deliver exceptional security solutions.
                </p>
              </div>

              {/* Team Hierarchy */}
              <div className="team-hierarchy">
                {teamHierarchy.map((level, levelIndex) => (
                  <div key={levelIndex} className="team-level">
                    <div className="level-header">
                      <div className="level-line"></div>
                      <h4 className="level-title">{level.level}</h4>
                      <div className="level-line"></div>
                    </div>
                    <div className="team-members-grid">
                      {level.members.map((member, memberIndex) => (
                        <div key={memberIndex} className="team-member-card">
                          <div className="member-avatar">
                            {member.image ? (
                              <img src={member.image} alt={member.name} />
                            ) : (
                              <div className="avatar-placeholder">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                            )}
                          </div>
                          <h5 className="member-name">{member.name}</h5>
                          <p className="member-position">{member.position}</p>
                          {member.expertise && (
                            <p className="member-expertise">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle' }}>
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              {member.expertise}
                            </p>
                          )}
                          <p className="member-bio">{member.bio}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AboutSection

