import React from "react";
import "./notFound.css";
import image from "../../images/error/error.png";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="error-page">
      <img src={image} />
      <br />
      <NavLink to="/"> Back to Website</NavLink>
    </div>
  );
};

export default NotFound;
