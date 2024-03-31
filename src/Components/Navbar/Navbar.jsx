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
        <li>
          <button className="btn">Home</button>
        </li>
        <li>
          <button className="btn">Program</button>
        </li>
        <li>
          <button className="btn">About Us</button>
        </li>
        <li>
          <button className="btn">Campus</button>
        </li>
        <li>
          <button className="btn">Testimonials</button>
        </li>
        <li>
          <button className="btn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
