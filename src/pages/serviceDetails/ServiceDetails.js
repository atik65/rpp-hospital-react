import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";
import "./serviceDetails.css";

const ServiceDetails = () => {
  const [service, setService] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch("https://atik65.github.io/medical-services-data/")
      .then((result) => result.json())
      .then((data) => {
        setService(data.find((item) => item.id === id));
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [id]);

  const { name, shortDes, longDes, image } = service;
  return (
    <div className="service-details">
      <Header />
      <div className="container mt-5">
        <div className="row m-0">
          <div className="col-md-6">
            <img className="w-100" src={image} alt="" />
          </div>
          <div className="col-md-6 ps-4 pt-5 pt-md-0">
            <h1 className="mb-4">{name}</h1>
            <p>{shortDes}</p>
            <p>{longDes}</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetails;
