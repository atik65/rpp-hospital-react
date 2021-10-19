import React from "react";
import Banner from "../../components/banner/Banner";
import ContactInfo from "../../components/miniContactInfo/ContactInfo";
import Poster from "../../components/poster/Poster";
import Services from "../../components/services/Services";
import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";
import "./home.css";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <ContactInfo />
      <Poster />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
