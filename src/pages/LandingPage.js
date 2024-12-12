import React from 'react';
// import Navbar from '../components/Navbar';
import Navbar from '../components/navbar';
import Banner from '../components/Banner';
import About from '../components/About';
// import Footer from '../components/Footer';
import Footer from '../Layouts/Footer';
import NewsSection from '../components/NewsSection';
import AllProducts from '../components/Products';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AllProducts/>
      <NewsSection/>
      <About />
      <Footer />
    </div>
  );
};

export default LandingPage;