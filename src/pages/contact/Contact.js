import React from "react";
import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";
import "./contact.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Contact = () => {
  const handleSubmit = () => {
    console.log("button cliked");
    Swal.fire("Yoo Hooo !", "Your Message Sent successfully!", "success");
  };
  return (
    <div className="contact">
      <Header />
      <div className="container w-50">
        <h1 className="mb-4">Contact Form</h1>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Name
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Your Name"
          />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="email@email.com"
          />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Your Message
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>

        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-outline-primary"
        >
          Submit
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
