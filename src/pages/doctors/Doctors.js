import React, { useEffect, useState } from "react";
import Doctor from "../../components/doctor/Doctor";
import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";
import "./doctors.css";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("https://atik65.github.io/doctors-data/")
      .then((result) => result.json())
      .then((data) => {
        setDoctors(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Header />
      {loading ? (
        <div className="text-center">
          <div class="spinner-border loading text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="doctors container pb-5">
          {doctors.map((doctor) => (
            <Doctor key={doctor.id} doctor={doctor} />
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Doctors;
