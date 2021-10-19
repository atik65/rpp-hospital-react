import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../../images/logo/logo.png";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="">
      <nav className="navbar fixed-top   navbar-expand-lg navbar-light nav-bg">
        <div className="container ">
          <NavLink className="navbar-brand" to="/">
            <img
              src={logo}
              width="36"
              height="36"
              className="d-inline-block align-text-center"
            />
            <p className="logo-title"> Rpp Hospital</p>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 ">
              <li className="nav-item header-link">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item header-link">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/doctors"
                >
                  Doctors
                </NavLink>
              </li>

              <li className="nav-item header-link">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/appoinment"
                >
                  Book Appoinment
                </NavLink>
              </li>

              <li className="nav-item header-link">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item header-link">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/faq"
                >
                  FAQ
                </NavLink>
              </li>
              {user.email ? (
                <li className="nav-item header-link">
                  <a className="nav-link active logout-button" onClick={logOut}>
                    Log Out {user?.displayName ? user.displayName : ""}
                  </a>
                </li>
              ) : (
                <li className="nav-item header-link">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/login"
                  >
                    Log In
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
