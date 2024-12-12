import React from 'react';
import "../styles/Footer.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
        <div className='container mx-auto flex justify-between'>
        <div className="col-md-4 col-sm-6 col-xs-12 footer-quick-links">
    <h4 className="wow fadeInUp">Quick Links</h4>
    <ul>
      <li>
        <Link to="/" >Home</Link>
      </li>
      <li>
        <Link to="/about" >About Us</Link>
      </li>
      <li>
        <Link to="/services" >Services</Link>
      </li>
      <li>
        <Link to="/contact" >Contact Us</Link>
      </li>
    </ul>
  </div>
        <div className='col-md-4 col-sm-6 col-xs-12'>
        <h4 className="wow fadeInUp">Our Address</h4>
    <h6 style={{ fontSize: "14px", color: "#aaaaaa", lineHeight: "1.7rem", marginTop: "1rem" }}>
      Neil Rao Towers, Rao Tower, <br />
      6th Floor E Wing 117 &amp; 118, Rd no. 3, <br />
      Whitefield, Ph I, Vijayanagar, EPIP Zone, <br />
      Bengaluru, Karnataka 560066
    </h6>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12 footer-social-links">
    <h4 className="wow fadeInUp">Follow Us</h4>
    <ul >
      <li>
        <a href="https://www.facebook.com/simplyfitech" target='_blank'>
          <i className="fab fa-facebook" style={{ fontSize: "36px" }}></i>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/simplyfitech" target="_blank" >
          <i className="fab fa-twitter" style={{ fontSize: "36px" }}></i>
        </a>
      </li>
      <li>
        <a href="https://in.linkedin.com/company/simplyfi-softech-india-private-limited" target="_blank">
          <i className="fab fa-linkedin" style={{ fontSize: "36px" }} ></i>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/simplyfitech/" target="_blank">
          <i className="fab fa-instagram" style={{ fontSize: "36px" }}></i>
        </a>
      </li>
    </ul>
  </div>
  <div className="col-md-4 col-sm-6 col-xs-12 ">
    <h4 className="">Contact Us</h4>
   <a href=""> <h5>info@simplyfi.tech</h5></a>
    <a href=""><h5>+919739004742</h5></a>
  </div>
        </div>
      <div className="container mx-auto flex justify-between">
     
      <div className="flex flex-col items-center text-center">
      <p className="text-sm mt-2" style={{ textAlign: "center" }}>© 2024 All Rights Reserved</p>
      </div>

        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-400">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400">Terms of Service</a>
          <a href="#" className="hover:text-blue-400">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;