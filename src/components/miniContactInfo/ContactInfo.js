import React from "react";
import "./contactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-info container">
      <div className="row">
        <div className="col-md-4">
          <div className="row">
            <div className="col-2">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <div className="col-10">
              <p>Give us a Call</p>
              <h5>0-111-123-4567</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
          <div className="row">
            <div className="col-2">
              <i className="far fa-envelope"></i>
            </div>
            <div className="col-10">
              <p>Send us a Message</p>
              <h5>rpp-medical@email.com</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
          <div className="row">
            <div className="col-2">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="col-10">
              <p>Visit our Location</p>
              <h5>4512 Rpp Street</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
