import React from "react";
import ServiceCard from "../components/ServiceCard";
import { FaTerminal, FaMobileAlt } from "react-icons/fa"; // Import the icons

const Services = () => {
  return (
    <div className="container">
      <div className="heading">
        <h1>Services</h1>
        <div></div>
      </div>
      <p className="sub-head">
        I offer a wide range of services to help businesses and individuals achieve their digital goals.
      </p>
      <div className="service-cards">
        <ServiceCard
          img={FaTerminal}
          heading="Web Development"
          content="I specialize in building modern, responsive, and user-friendly websites using the latest web technologies."
        />
        <ServiceCard
          img={FaMobileAlt}  // Use the correct icon for mobile apps
          heading="App Development"
          content="I create mobile apps using Java and XML, ensuring a seamless user experience."
        />
      </div>
    </div>
  );
};

export default Services;
