import React from 'react'
import './NewsSection.css'

const NewsSection = () => {
  const news = [
    {
      category: 'Team',
      title: 'Resecurity Appoints Darrell M. Blocker as a Senior Advisor',
      date: '25 Sep 2024',
      href: '#news1'
    },
    {
      category: 'Company',
      title: 'Resecurity Recognized As A Leader in Frost & Sullivan\'s 2024 Global Cyber Threat Intelligence Market Radar',
      date: '5 Sep 2024',
      href: '#news2'
    }
  ]

  return (
    <div className="page-section p-0 order-2 order-sm-1">
      <div className="news">
        <div className="news-header">
          <div className="container">
            <div className="row align-items-center">
              <div className="col">
                <div className="text-h5-size">Latest News</div>
              </div>
              <div className="col text-right">
                <a href="#news" className="button dark outline w-xs-100">More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="news-body">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              {news.map((item, index) => (
                <div key={index} className="col-lg-6 card full">
                  <div className="card-body">
                    <div className="row">
                      <a className="col-lg-11" href={item.href}>
                        <p className="news-category">{item.category}</p>
                        <div className="text-h4-size news-title">{item.title}</div>
                        <time dateTime={item.date}>{item.date}</time>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsSection

