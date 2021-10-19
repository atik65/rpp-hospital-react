import React from "react";
import "./doctor.css";
import image from "../../images/doctor/single-doctor.jpg";

const Doctor = ({ doctor }) => {
  const { name, specialty, email, degree } = doctor;
  return (
    <div data-aos="fade-up" className="doctor px-4  px-md-0 py-3 py-md-0">
      <div>
        <img src={image} alt="" />
      </div>
      <h5 className="pt-1">Name: {name}</h5>
      <p> Specialty : {specialty} </p>
      <p> Email: {email} </p>
      <h6> Degree: {degree} </h6>
    </div>
  );
};

export default Doctor;
