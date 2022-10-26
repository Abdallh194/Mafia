import React from "react";
import Roll from "react-reveal/Roll";
function About() {
  return (
    <div className="About" id="About">
      <div className="container">
        <div className="row">
          <Roll top cascade>
            <div className="col-md-8 image_Side"></div>
            <div className="col-md-4 Text_Side">
              <div className="head">ABOUT US</div>
              <div className="desc">
                MAFIA CRASH , It is an Egyptian international car brand , Mafia
                Crash is famous for its luxury vehicles, vans, trucks, buses and
                ambulances. Its head office is located in the city of Al-Atwa in
                Tanta
              </div>
              <div className="icons">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-youtube"></i>
                <i className="bi bi-instagram"></i>
              </div>
              <a className="service" href="#Service">
                Show Service
              </a>
            </div>
          </Roll>
        </div>
      </div>
    </div>
  );
}

export default About;
