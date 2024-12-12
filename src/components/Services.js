import React from "react";
import "../styles/Service.css";

const servicesData = [
  {
    title: "Trade Finance",
    description:
      "Comprehensive solutions to simplify and secure trade finance processes, using advanced blockchain technology.",
    icon: "fa-truck-loading",
  },
  {
    title: "Supply Chain Solutions",
    description:
      "Optimizing supply chain finance to deliver seamless integration and better financial control.",
    icon: "fa-chart-line",
  },
  {
    title: "Blockchain Integration",
    description:
      "Harness the power of blockchain for enhanced transparency, security, and efficiency in trade.",
    icon: "fa-link",
  },
  {
    title: "AI-Powered Analytics",
    description:
      "AI-driven insights for smarter decision-making and predictive analytics in trade and finance.",
    icon: "fa-brain",
  },
  {
    title: "IoT Connectivity",
    description:
      "IoT-enabled platforms to enhance real-time tracking and management of trade assets.",
    icon: "fa-broadcast-tower",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>Empowering businesses with next-generation trade and supply chain solutions.</p>
      </header>

      <section className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon-container">
              <i className={`fas ${service.icon}`}></i>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="learn-more">Learn More</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;