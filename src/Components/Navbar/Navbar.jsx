/* eslint-disable react/jsx-no-undef */

import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""} `}>
      <img className="logo" src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>Contact Us</li>
        {/* <li>
          <a href="https://api.whatsapp.com/send?phone=254793834558&text=Welcome%20to%20Baringo%20Tours%20Safaris">
            WhatsApp
          </a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
