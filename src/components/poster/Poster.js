import React from "react";
import "./poster.css";

const Poster = () => {
  return (
    <div data-aos="fade-up" className="poster container">
      <div className="row">
        <div className="col-md-4 poster-one">
          <h4>Top Doctors</h4>
          <p>
            There are over 850,000 practicing doctors in the United States and
            not all qualify to be a Castle Connolly Top Doctor. Unlike other
            'find a doctor' services Castle Connolly has curated approximately
            60,000 board-certified US physicians.
          </p>
        </div>
        <div className="col-md-4 poster-two">
          <h4>24 Hour Service</h4>
          <p>
            Emergency departments are in many public hospitals across NSW and
            open 24 hours a day. To find your nearest emergency department,
            visit our Emergency Department waiting times.
          </p>
        </div>
        <div className="col-md-4 poster-three">
          <h4>Opening Hours</h4>
          <p className="first-child">
            Monday - Friday <span>8.00 - 17.00</span>{" "}
          </p>
          <p>
            Saturday <span>9.00 - 17.30</span>{" "}
          </p>
          <p>
            Sunday <span>9.00 - 15.00</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Poster;
