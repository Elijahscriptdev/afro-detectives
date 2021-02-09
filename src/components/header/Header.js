import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header container'>
        <div className='logo'>
          <ul>
            <li>LOGO</li>
          </ul>
        </div>
        <div className='nav-links'>
          <ul>
            <li>Home</li>
            <li>Our Games</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
