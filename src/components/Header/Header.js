import React from "react";
import "./Header.css";
import { Link } from "react-scroll";
function Header() {
  return (
    <div className="header-contanier">
      <Link to="about" spy={true} smooth={true}>
        {" "}
        <div className="greenText mainLogo">SR</div>
      </Link>

      <div className="linkContainer">
        <div className="navLink">
          <Link to="about" spy={true} smooth={true}>
            {" "}
            <span className="greenText">01.</span>About
          </Link>
        </div>
        <div className="navLink">
          <Link to="work" spy={true} smooth={true}>
            {" "}
            <span className="greenText">02.</span> Work
          </Link>
        </div>
        <div className="navLink">
          <Link to="contact" spy={true} smooth={true}>
            {" "}
            <span className="greenText">03.</span> Contact
          </Link>
        </div>

        <button className="navButton">
          <span className="greenText">Resume</span>
        </button>
      </div>
    </div>
  );
}

export default Header;
