import React from 'react'
import './PlatformSection.css'

const PlatformSection = () => {
  return (
    <div className="platform-section">
      <div className="container">
        <div className="platform-content-wrapper">
          {/* Left Side - Text Content */}
          <div className="platform-text-content">
            <div className="platform-label">
              PLATFORM-AS-A-SERVICE (PAAS)
            </div>
            <h2 className="platform-title">Forcyp Insights Platform</h2>
            <p className="platform-description">
              Next-generation cybersecurity platform designed to detect and mitigate tomorrow's threats today.
            </p>
            <a href="#platform" className="platform-learn-more-btn">
              Learn more
            </a>
          </div>

          {/* Right Side - Tablets Display */}
          <div className="platform-tablets-container">
            <div className="tablets-grid">
              {/* Tablet 1 - Main Center */}
              <div className="tablet tablet-1">
                <div className="tablet-screen">
                  <div className="dashboard-content">
                    <div className="dashboard-header">
                      <div className="dashboard-logo">A</div>
                      <span className="dashboard-title">ACME Inc.</span>
                    </div>
                    <div className="dashboard-chart">
                      <div className="chart-bar" style={{'--height': '75%'}}></div>
                      <div className="chart-bar" style={{'--height': '45%'}}></div>
                      <div className="chart-bar" style={{'--height': '90%'}}></div>
                      <div className="chart-bar" style={{'--height': '60%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tablet 2 - Top Right */}
              <div className="tablet tablet-2">
                <div className="tablet-screen">
                  <div className="dashboard-content">
                    <div className="dashboard-label">Geography</div>
                    <div className="dashboard-map">
                      <div className="map-dot dot-1"></div>
                      <div className="map-dot dot-2"></div>
                      <div className="map-dot dot-3"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tablet 3 - Bottom Left */}
              <div className="tablet tablet-3">
                <div className="tablet-screen">
                  <div className="dashboard-content">
                    <div className="dashboard-stats">
                      <div className="stat-item">
                        <div className="stat-label">Threats</div>
                        <div className="stat-value">1,234</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-label">Incidents</div>
                        <div className="stat-value">89</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tablet 4 - Bottom Right */}
              <div className="tablet tablet-4">
                <div className="tablet-screen">
                  <div className="dashboard-content">
                    <div className="dashboard-progress">
                      <div className="progress-ring">
                        <div className="progress-value">58%</div>
                      </div>
                      <div className="progress-label">Analyzing</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tablet 5 - Middle Right */}
              <div className="tablet tablet-5">
                <div className="tablet-screen">
                  <div className="dashboard-content">
                    <div className="dashboard-list">
                      <div className="list-item">
                        <span className="list-icon">🔒</span>
                        <span className="list-text">Assets</span>
                      </div>
                      <div className="list-item">
                        <span className="list-icon">📊</span>
                        <span className="list-text">Reports</span>
                      </div>
                      <div className="list-item">
                        <span className="list-icon">⚙️</span>
                        <span className="list-text">Settings</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tablet 6 - Top Left */}
              <div className="tablet tablet-6">
                <div className="tablet-screen">
                  <div className="dashboard-content">
                    <div className="dashboard-inbox">
                      <div className="inbox-title">ACME Secure Inbox</div>
                      <div className="inbox-item"></div>
                      <div className="inbox-item"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlatformSection
