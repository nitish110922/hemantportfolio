import React from "react";
import "./education.css";

const Education = () => {
  return (
    <section id="education" className="container">
      <h2>Education</h2>
      <div className="institution">
        <div className="clg">
          <h3>Indian Institute of Technology (ISM) Dhanbad</h3>
          <h4>B.Tech in Electrical Engineering</h4>
          <h5> October 2022 - May 2026 </h5>
          <h5>CGPA - 6.66</h5>
        </div>
        <div className="school">
          <h3>Aklank Day Boarding Cum Resi School ,Kota</h3>
          <h4>Senior Secondary</h4>
          <h5>April 2019 - May 2021 </h5>
          <h5>Pecentage - 75.60%</h5>
        </div>
      </div>
    </section>
  );
};

export default Education;
