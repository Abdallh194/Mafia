import React from "react";
import img from "./Footer.jpg";
import Zoom from "react-reveal/Zoom";
function Footer() {
  return (
    <div>
      <div className="pre_Footer">
        <img src={img} className="img-fluid foot_img" alt="footer img" />
        <div className="svg"></div>
        <div className="info">
          <Zoom right cascade>
            <div className="head"> INFORMATION ABOUT MAFIA CRASH </div>
            <i class="bi bi-geo-fill"> Al-Atawa,Tanta , Egypt</i>
            <a href="tel:+201091415560" target="_blank" rel="noreferrer">
              <i class="bi bi-telephone-inbound-fill"> 01091415560</i>
            </a>
            <a href="mailto:Abdallhsabry194@gmail.com">
              <i class="bi bi-envelope-check-fill">
                {" "}
                Abdallhsabry194@gmail.com
              </i>
            </a>
            <a href="https://abdallh-rakha.netlify.app/">
              <i class="bi bi-globe"> Abdallh Sabry</i>
            </a>
            <div className="more">More</div>
          </Zoom>
        </div>
      </div>
      <footer>
        <div className="name">
          MAFIA CRASH <i class="bi bi-check-circle-fill"></i>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
