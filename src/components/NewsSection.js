import React from 'react';
import "../styles/NewsSection.css"; // Add custom styles here
import { Link } from 'react-router-dom';
const NewsSection = () => {
  const newsData = [
    {
      title: "SimplyFI selected in Top 10 startups by NPCI & DST",
      description: "This recognition has given us additional motivation to be relentless in our mission of simplifying the trade finance network.",
      image: "https://simplyfi-website.s3.ap-south-1.amazonaws.com/images/logo/logo.png",
      link: "###",
    },
    {
      title: "SimplyFI selected for JGI Accelerator Programme",
      description: "SimplyFI Softech Pvt. Ltd. has been selected for the JGI Fintech Accelerator Program starting 26th June 2020.",
      image: "https://simplyfi-website.s3.ap-south-1.amazonaws.com/images/logo/logo.png",
      link: "###",
    },
    {
      title: "SimplyFI in 'Top 10 Recommended Blockchain Startups 2020' by CIO Insider",
      description: "SimplyFI’s innovative product line has been a critical factor in pushing the company to new heights and win prestigious awards.",
      image: "https://simplyfi-website.s3.ap-south-1.amazonaws.com/images/logo/logo.png",
      link: "###",
    },
    {
      title: "'SimplyFI Softech India' Shortlisted for CIO Insider Magazine",
      description: "Know about the latest developments and future plans of SimplyFI as Viswanadh Akella, Founder & CEO elaborates on the company's work engagements.",
      image: "https://simplyfi-website.s3.ap-south-1.amazonaws.com/images/logo/logo.png",
      link: "###",
    },
  ];

  return (
    <div className="news-section">
      <h2 className="section-title">News & Press</h2>
      <div className="news-items-container">
        {newsData.map((news, index) => (
          <div key={index} className="news-item">
            <img src={news.image} alt={news.title} className="news-image" />
            <h4 className="news-author">By SimplyFi Softech</h4>
            <h3 className="news-title">{news.title}</h3>
            <p className="news-description">{news.description}</p>
            <a href={news.link} className="news-link">
              More Details <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>
        ))}
      </div>
      <div className="cta-container">
        <h2 className="cta-title">Have a Business? <strong>Let's take it Ahead.</strong></h2>
        <a className="cta-button"><Link to="contact" style={{textDecoration:"none ",color:"white"}}>Schedule Meeting</Link></a>
      </div>
    </div>
  );
};

export default NewsSection;
