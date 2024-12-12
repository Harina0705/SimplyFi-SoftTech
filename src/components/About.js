import React, { useState } from 'react';
import '../styles/About.css';

const About = () => {
  const [isExpanded, setIsExpanded] = useState({
    vision: false,
    business: false,
    culture: false,
    mission: false,
    leadership: false,
  });

  const toggleSection = (section) => {
    setIsExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>Innovation is simply connecting the dots</p>
      </header>
      
      <section className="about-us-content">
        <h2>SimplyFI Softech India Pvt Ltd</h2>
        <p>
          SimplyFI is an innovative product development company that specializes in trade, supply chain finance, and banking. As pioneers in the field, we have developed the world's first trade financing platform using blockchain technology. We recognize the need for enhanced data privacy and permission controls for parties involved in international and domestic trade finance. Leveraging our rich experience in advanced technologies like blockchain, AI, and IoT, we founded SimplyFI in 2016 to provide next-generation banking solutions that meet the evolving needs of the industry.
        </p>
        
        <h3>Our Vision</h3>
        <p>
          Our vision is to make SimplyFI a one-stop global solution for all trade & supply chain parties to execute trade seamlessly and securely.
          {isExpanded.vision && (
            <span>
              SimplyFI strives to create an ecosystem that brings together all stakeholders, ensuring smooth and secure financial transactions across borders. By integrating blockchain technology, AI, and IoT, we aim to create a more efficient, transparent, and trustworthy system for all users involved in trade finance.
            </span>
          )}
        </p>
        <button className="read-more" onClick={() => toggleSection('vision')}>
          {isExpanded.vision ? 'Read Less' : 'Read More'}
        </button>

        <h3>Our Business</h3>
        <p>
          We wish to cover every requirement for the new economy based on Blockchain.
          {isExpanded.business && (
            <span>
              Our blockchain-powered solutions are designed to provide a robust, transparent, and secure framework for conducting business in today's evolving economy. We aim to bring blockchain into every facet of trade, supply chain, and finance to deliver faster, more efficient, and highly secure processes.
            </span>
          )}
        </p>
        <button className="read-more" onClick={() => toggleSection('business')}>
          {isExpanded.business ? 'Read Less' : 'Read More'}
        </button>

        <h3>Our Culture</h3>
        <p>
          We always strive to keep our team young, energetic, and creative. We are motivated to provide value and high performance to our clients.
          {isExpanded.culture && (
            <span>
              Our culture is rooted in innovation, collaboration, and a shared vision for the future. We foster a dynamic work environment where creativity and growth are encouraged, and every team member's contribution is valued. We believe that a positive, forward-thinking workplace drives us to push the boundaries of what’s possible.
            </span>
          )}
        </p>
        <button className="read-more" onClick={() => toggleSection('culture')}>
          {isExpanded.culture ? 'Read Less' : 'Read More'}
        </button>

        <h3>Our Mission</h3>
        <p>
          We aim to SimplyFI Trade Finance processes by simplifying the management, tracking, and security of domestic as well as international trade transactions.
          {isExpanded.mission && (
            <span>
              By offering digital solutions backed by blockchain technology, we help businesses reduce operational risks and improve the efficiency of their trade processes. Our mission is to streamline trade finance and provide a secure, user-friendly platform for global trade stakeholders.
            </span>
          )}
        </p>
        <button className="read-more" onClick={() => toggleSection('mission')}>
          {isExpanded.mission ? 'Read Less' : 'Read More'}
        </button>

        <h3>Key Leadership</h3>
        <p>
          Viswanadh is a distinguished leader in the IT industry with 15+ years of experience in management & innovation. Prior to SimplyFI, he was in SAP Labs as Innovation Program Lead for India.
          {isExpanded.leadership && (
            <span>
              With his extensive experience in technology and leadership, Viswanadh Akella brings invaluable expertise to the growth and success of SimplyFI. His passion for innovation and digital transformation drives the company's mission to revolutionize trade finance through blockchain and AI technologies.
            </span>
          )}
        </p>
        <button className="read-more" onClick={() => toggleSection('leadership')}>
          {isExpanded.leadership ? 'Read Less' : 'Read More'}
        </button>
        <p className="leadership-name"><strong>Viswanadh Akella</strong> - Chief Executive Officer</p>
      </section>
    </div>
  );
};

export default About;
