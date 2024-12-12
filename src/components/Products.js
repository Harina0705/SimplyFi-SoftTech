import React from "react";
import "../styles/Products.css";

const products = [
  {
    id: "01",
    title: "INVOIZO",
    description:
      "Asia’s first Invoice Discounting Marketplace on Blockchain and AI. Our Blockchain-enabled Invoice Financing Platform- INVOIZO enables businesses to have a consistent flow of working capital. Start trading in less than 5 minutes on the digitized platform with our e-KYC.",
    moreDetailsLink: "#",
    imageUrl:"https://simplyfi-website.s3.ap-south-1.amazonaws.com/images/home/invoizo.png",
  },
  {
    id: "02",
    title: "SIMBA",
    description:
      "Blockchain enabled Trade Finance Automation Platform for the banks across the globe that automates entire International Trade Document Scrutiny. SIMBA is capable of converting non-digitized International Trade documents into machine-readable format.",
    moreDetailsLink: "#",
    imageUrl:"https://simplyfi-website.s3.ap-south-1.amazonaws.com/images/home/simba.png",
  },
  
];

const AllProducts = () => {
  return (
    <div className="product-page">
    

      <section className="products">
        <h2>Banking Automation Products</h2>
        <p>
          Discover the world's most unique and intelligent service offerings
          based on cutting-edge technologies featuring Blockchain and AI that run your business securely & effectively.
        </p>

        <div className="product-cards">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
                 <img 
      src={product.imageUrl} 
      alt={product.title} 
      style={{ width: '100%', height: 'auto', borderRadius: '8px', objectFit: 'cover' }} 
    />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <button className="details-button">
                <a href={product.moreDetailsLink}>More Details</a>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllProducts;
