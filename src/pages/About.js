import React from 'react';
// import Navbar from '../components/Navbar';
import Navbar from '../components/navbar';
import Banner from '../components/Banner';
import About from '../components/About';
// import Footer from '../components/Footer';
import Footer from '../Layouts/Footer';
import NewsSection from '../components/NewsSection';

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Footer />
    </div>
  );
};

export default AboutUs ;