import React from 'react';
// import './Banner.css';
import "../styles/Banner.css";
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div className="banner-container">
      <img 
        src="https://simplyfi.tech/images/home/indexBlockchainBanner.png
" 
        alt="Banner" 
        className="banner-image"
      />
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h1 className="banner-title">"Innovation Meets Simplicity"</h1>
        <p className="banner-subtitle">Discover Amazing Things with SimplyFI</p>
        <button className="banner-button" >
            <Link to="/About" style={{color:"white",textDecoration: "none"}}> Learn More</Link>
          
        </button>
      </div>
    </div>
  );
};

export default Banner;