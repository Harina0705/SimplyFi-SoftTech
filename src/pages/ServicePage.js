import React from 'react';
// import Navbar from '../components/Navbar';
import Navbar from '../components/navbar';
import Banner from '../components/Banner';
import About from '../components/About';
// import Footer from '../components/Footer';
import Footer from '../Layouts/Footer';
import NewsSection from '../components/NewsSection';
import ContactForm from '../components/Contactfrorm';
import Services from '../components/Services';
const Contact = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Services/>
<ContactForm/>
      <Footer />
    </div>
  );
};

export default Contact ;