import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="container p-0">
        <div className="row  m-0">
          <div className="col-md-4 ">
            <h6>Contact Information</h6>

            <div className="pt-5">
              <p>
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                4512 Rpp Street
              </p>
              <p>
                <span>
                  <i className="fas fa-globe"></i>
                </span>
                rpp-medical.net
              </p>
              <p>
                <span>
                  <i className="far fa-envelope"></i>
                </span>
                rpp-medical@email.com
              </p>
              <p>
                <span>
                  <i className="fas fa-mobile-alt"></i>
                </span>
                0-111-123-4567
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <h6>Doctors</h6>
            <div className="pt-5">
              <ul>
                <li> Dr. Sanderson Peskett </li>
                <li> Dr. Lizzie Webberley </li>
                <li> Dr. Cirstoforo Tomasello </li>
                <li> Dr. Franzen Daintrey </li>
                <li> Dr. Constancia Osband </li>
                <li> Dr. Charo Leward </li>
                <li> Dr. Arlene Fairney </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <h6>Services</h6>

            <div className="pt-5">
              <ul>
                <li>Laboratory Analysis</li>
                <li>Outpatient Rehabilitation</li>
                <li>Pediatric Clinic</li>
                <li>Cardiac Clinic</li>
                <li>Outpatient Surgery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
