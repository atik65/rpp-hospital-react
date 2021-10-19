import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "./banner.css";
import banner1 from "../../images/banner-slider/slider-1.jpg";
import banner2 from "../../images/banner-slider/slider-2.jpg";
import banner3 from "../../images/banner-slider/slider-3.jpg";
import banner4 from "../../images/banner-slider/slider-4.jpg";
import banner5 from "../../images/banner-slider/slider-5.jpg";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div
        id="carouselExampleCaptions"
        class="carousel slide  "
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={banner1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block slider-caption">
              <p>Entrust your health our doctors</p>
              <h2>The Hospital of the Future, Today</h2>
              <div>
                <NavLink to="/appoinment" className="slider-button">
                  Make an Appoinment
                </NavLink>
                <NavLink to="/doctors" className="slider-button">
                  Doctors
                </NavLink>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={banner2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block slider-caption">
              <p>Entrust your health our doctors</p>
              <h2>Medical services that you can trust</h2>
              <div>
                <NavLink to="/appoinment" className="slider-button">
                  Make an Appoinment
                </NavLink>
                <NavLink to="/doctors" className="slider-button">
                  Doctors
                </NavLink>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={banner3} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block slider-caption">
              <p>Entrust your health our doctors</p>
              <h2>Medical excellence every day.</h2>
              <div>
                <NavLink to="/appoinment" className="slider-button">
                  Make an Appoinment
                </NavLink>
                <NavLink to="/doctors" className="slider-button">
                  Doctors
                </NavLink>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={banner4} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block slider-caption">
              <p>Entrust your health our doctors</p>
              <h2>Exceptional people. Exceptional care.</h2>
              <div>
                <NavLink to="/appoinment" className="slider-button">
                  Make an Appoinment
                </NavLink>
                <NavLink to="/doctors" className="slider-button">
                  Doctors
                </NavLink>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <img src={banner5} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block slider-caption">
              <p>Entrust your health our doctors</p>
              <h2>Healthcare just for kids. Saving children.</h2>
              <div>
                <NavLink to="/appoinment" className="slider-button">
                  Make an Appoinment
                </NavLink>
                <NavLink to="/doctors" className="slider-button">
                  Doctors
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
