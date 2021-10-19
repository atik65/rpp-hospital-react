import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../../images/logo/logo.png";

const Header = () => {
  return (
    <div className="">
      <nav class="navbar fixed-top   navbar-expand-lg navbar-light nav-bg">
        <div class="container ">
          <NavLink class="navbar-brand" to="/">
            <img
              src={logo}
              width="36"
              height="36"
              class="d-inline-block align-text-center"
            />
            <p className="logo-title"> Rpp Hospital</p>
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2  mb-lg-0">
              <li class="nav-item header-link">
                <NavLink class="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li class="nav-item header-link">
                <NavLink
                  class="nav-link active"
                  aria-current="page"
                  to="/doctors"
                >
                  Doctors
                </NavLink>
              </li>

              <li class="nav-item header-link">
                <NavLink
                  class="nav-link active"
                  aria-current="page"
                  to="/appoinment"
                >
                  Book Appoinment
                </NavLink>
              </li>

              <li class="nav-item header-link">
                <NavLink
                  class="nav-link active"
                  aria-current="page"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li class="nav-item header-link">
                <NavLink class="nav-link active" aria-current="page" to="/faq">
                  FAQ
                </NavLink>
              </li>

              <li class="nav-item header-link">
                <NavLink
                  class="nav-link active"
                  aria-current="page"
                  to="/login"
                >
                  Log In
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
