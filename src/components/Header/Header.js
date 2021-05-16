import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-contanier">
      <div className="greenText mainLogo">SR</div>
      <div className="linkContainer">
        <div className="navLink">
          <span className="greenText">01.</span>About
        </div>
        <div className="navLink">
          <span className="greenText">02.</span> Work
        </div>
        <div className="navLink">
          <span className="greenText">03.</span> Contact
        </div>
        <div>
          <button className="navButton">
            <span className="greenText">Resume</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
