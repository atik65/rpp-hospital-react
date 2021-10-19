import React, { useEffect, useState } from "react";
import Service from "../service/Service";
import "./services.css";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetch("https://atik65.github.io/medical-services-data/")
      .then((result) => result.json())
      .then((data) => setServicesData(data))
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="services container px-3 p-md-0">
      <h3>Our Services</h3>
      <div className="services-container">
        {servicesData.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
