import React from "react";
import { NavLink } from "react-router-dom";
import "./service.css";

const Service = ({ service }) => {
  const { id, name, shortDes, image } = service;

  return (
    <div data-aos="fade-up" className="service">
      <div className="service-main mb-2">
        <img src={image} alt="" />
        <div className="service-hover">
          <p className="mb-5">{shortDes}</p>
          <NavLink className="services-details-button" to={`/services/${id}`}>
            View Details
          </NavLink>
        </div>
      </div>

      <NavLink className="title-ancor" to={`/services/${id}`}>
        <h3>{name}</h3>
      </NavLink>
    </div>
  );
};

export default Service;
