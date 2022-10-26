import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  let AllLies = document.querySelectorAll(".menu li a");
  AllLies.forEach((li) => {
    li.addEventListener("click", (e) => {
      AllLies.forEach((li) => {
        li.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
    });
  });
  let exitmenu = () => {
    document.querySelector(".dropedMenu").style.left = "-100%";
  };
  let openmenu = () => {
    document.querySelector(".dropedMenu").style.left = "0%";
  };
  return (
    <div className="navbar">
      <div className="logo">MAFIA Crash</div>
      <ul className="menu">
        <li>
          <Link to="/" className="active">
            Home
          </Link>
        </li>
        <li>
          <a href="#About">About Us</a>
        </li>
        <li>
          <a href="#Service">Service</a>
        </li>
        <li>
          <a href="#Portfilo">Portfilo</a>
        </li>
        <li>
          <a href="#Shop">Shop</a>
        </li>
      </ul>
      <i class="bi bi-grid-3x3-gap-fill BtndropMenu" onClick={openmenu}></i>
      <ul className="dropedMenu">
        <i className="bi bi-x exit_Btn" onClick={exitmenu}></i>
        <li>
          <Link to="/" className="active">
            Home
          </Link>
        </li>
        <li>
          <a href="#About">About Us</a>
        </li>
        <li>
          <a href="#Service">Service</a>
        </li>
        <li>
          <a href="#Portfilo">Portfilo</a>
        </li>
        <li>
          <a href="#Shop">Shop</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
