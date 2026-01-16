import React, { useState } from 'react'
import './TrialModal.css'

const TrialModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    company: '',
    location: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Trial form submitted:', formData)
    onClose()
  }

  return (
    <div className={`dialogbox ${isOpen ? 'open' : ''}`} id="dialogTrial" style={{ display: isOpen ? 'flex' : 'none' }}>
      <div className="dialogbox-wrapper">
        <div className="dialogbox-panel" data-animate="">
          <div className="dialogbox-panel-scroll">
            <div className="contactbox">
              <div className="text-h2-size text-transform-none mb-5 mb-xxl-10 pr-lg-5 pr-xxl-10">
                Try Resecurity products today with a <span className="text-gradient">free trial</span>
              </div>
              <form id="request-trial-form" className="contactbox-form" onSubmit={handleSubmit}>
                <div className="contactbox-form-top">
                  <div className="row">
                    <div className="col-lg-12 col-sm-6 col-12">
                      <div className="form-group mb-4">
                        <input
                          type="text"
                          id="requesttrialform-firstname"
                          className="form-control"
                          name="firstname"
                          value={formData.firstname}
                          onChange={handleChange}
                          required
                        />
                        <label className="form-label" htmlFor="requesttrialform-firstname">
                          First Name *
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-sm-6 col-12">
                      <div className="form-group mb-4">
                        <input
                          type="text"
                          id="requesttrialform-lastname"
                          className="form-control"
                          name="lastname"
                          value={formData.lastname}
                          onChange={handleChange}
                          required
                        />
                        <label className="form-label" htmlFor="requesttrialform-lastname">
                          Last Name *
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-sm-6 col-12">
                      <div className="form-group mb-4">
                        <input
                          type="email"
                          id="requesttrialform-email"
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        <label className="form-label" htmlFor="requesttrialform-email">
                          Email Address *
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-sm-6 col-12">
                      <div className="form-group mb-4">
                        <input
                          type="text"
                          id="requesttrialform-company"
                          className="form-control"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                        />
                        <label className="form-label" htmlFor="requesttrialform-company">
                          Company *
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      id="requesttrialform-location"
                      className="form-control"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="requesttrialform-location">
                      Location
                    </label>
                  </div>
                </div>
                <div className="contactbox-form-bottom">
                  <div className="form-group">
                    <button type="submit" className="button dark outline w-xs-100 mb-4">
                      Send
                    </button>
                  </div>
                </div>
              </form>
              <span className="dialogbox-close" onClick={onClose}>
                <svg className="icon" width="18" height="18" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="dialogbox-overlay" onClick={onClose}></div>
    </div>
  )
}

export default TrialModal

