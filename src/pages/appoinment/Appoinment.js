import React from "react";
import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";
import "./appoinment.css";
import image from "../../images/appoinment/appoinment.jpg";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import useAuth from "../../hooks/useAuth";

const Appoinment = () => {
  const { user } = useAuth();
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
    Swal.fire("Congoooo!", "Your Appoinment booked Successfully", "success");
  };
  return (
    <div className="appoinment">
      <Header />
      <div className="container">
        <div className="row m-0">
          <div className="col-md-6">
            <img className="w-100" src={image} alt="" />
          </div>
          <div className="col-md-6">
            <div className="book-appoinment">
              <h3 className="text-center text-light mb-3">
                Book Your Appoinment
              </h3>
              <div className="row m-0">
                <div className="col-6">
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="col-6">
                  <input type="text" placeholder="Your Age" />
                </div>
              </div>
              <div className="row m-0">
                <div className="col-6">
                  <input type="text" placeholder="Your Phone" required />
                </div>
                <div className="col-6">
                  <input type="email" placeholder="Your Email" />
                </div>
              </div>
              <div className="row m-0">
                <div className="col-6">
                  <select
                    className="form-select select-input"
                    aria-label="Default select example"
                    required
                  >
                    <option defaultValue>Select Doctor</option>
                    <option value="1">Dr. Sanderson Peskett</option>
                    <option value="2">Dr. Constancia Osband</option>
                    <option value="3">Dr. Charo Leward</option>
                    <option value="3">Dr. Arlene Fairney</option>
                    <option value="3">Dr. Laughton Alliban</option>
                    <option value="3">Dr. Miller Swaysland</option>
                  </select>
                </div>
                <div className="col-6">
                  <input type="date" name="" id="" />
                </div>
              </div>
              <div className="text-center">
                <button onClick={handleClick}> Make an Appoinment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Appoinment;
