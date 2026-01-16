import React, { useState } from 'react'
import './NewsletterSection.css'

const NewsletterSection = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  return (
    <div className="page-section dark lighter py-8 py-sm-10 order-2 order-sm-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-12">
            <div className="row">
              <div className="col-xxl-6 col-xl-7 col-lg-8 mb-10 mb-lg-0">
                <div className="text-h3-size mb-2">Newsletter</div>
                <p>Keep up to date with the latest cybersecurity news and developments.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <form id="newsletter" className="form row no-gutters" onSubmit={handleSubmit}>
              <div className="form-group col-sm-8 col-12 mb-3 mb-sm-0">
                <input
                  type="email"
                  id="subscribeform-email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="form-group col-sm-4 col-12">
                <button type="submit" className="button light outline w-xs-100">
                  Subscribe
                </button>
              </div>
            </form>
            <div className="row">
              <div className="col">
                <p className="opacity-6 pt-3">
                  By subscribing, I understand and agree that my personal data will be collected and processed according to the{' '}
                  <a className="link" href="#privacy">Privacy</a> and{' '}
                  <a className="link" href="#cookies">Cookies Policy</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsletterSection

