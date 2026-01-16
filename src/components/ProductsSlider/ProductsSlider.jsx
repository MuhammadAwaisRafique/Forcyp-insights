import React, { useState } from 'react'
import './ProductsSlider.css'

const ProductsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const products = [
    {
      name: 'Context',
      sup: 'tm',
      description: "With the appearance of new threats and security challenges on a daily basis, it's now more than ever important to use effective tools to achieve a timely in-depth analysis of any digital threat.",
      href: '#context'
    },
    {
      name: 'Risk',
      sup: 'tm',
      description: 'Leverage Risk to automate your digital risk management and receive insights about any significant changes to your security posture due to Dark Web, data breach, compromised credentials, network infections and other security incidents.',
      href: '#risk'
    },
    {
      name: 'Endpoint Protection',
      description: 'Radical growth in online technologies have led to an increased attack surface, this leads to a myriad of new risks and threats, and this opens the doors to an unprecedented number of new vulnerabilities.',
      href: '#endpoint'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length)
  }

  return (
    <div className="page-section dark slider d-none d-sm-block" id="sliderProducts">
      <div className="slider-images">
        {products.map((product, index) => (
          <div
            key={index}
            className={`slider-image ${index === currentSlide ? 'active' : ''}`}
            style={{ zIndex: products.length - index }}
          >
            <div className="gradient-overlay"></div>
          </div>
        ))}
      </div>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-sm-10 offset-sm-2 col-md-7 offset-md-5 col-lg-5 offset-lg-7">
            <div className="d-flex flex-column justify-content-between h-100">
              <div className="relative underline pb-4">
                <div className="d-flex align-items-center justify-content-between">
                  <h2 className="text-h5-size">Enterprise Products of Cybersecurity Company</h2>
                  <div className="slider-controls">
                    <button
                      type="button"
                      className="slider-control light"
                      onClick={prevSlide}
                      disabled={currentSlide === 0}
                    >
                      <svg className="icon arrow-left" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" fill="currentColor"/>
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="slider-control light"
                      onClick={nextSlide}
                    >
                      <svg className="icon arrow-right" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" fill="currentColor"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="slider-content">
                <div className="slider-item active">
                  <div className="row">
                    <div className="col-lg-11">
                      <div className="text-h2-size mb-4">
                        {products[currentSlide].name}
                        {products[currentSlide].sup && (
                          <sup className="text-sup text-uppercase">{products[currentSlide].sup}</sup>
                        )}
                      </div>
                      <p className="mb-14">{products[currentSlide].description}</p>
                      <div className="button-group">
                        <a className="button light outline" href={products[currentSlide].href}>
                          Learn More
                        </a>
                        <button className="button light outline" type="button">
                          Free Trial
                        </button>
                      </div>
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

export default ProductsSlider

