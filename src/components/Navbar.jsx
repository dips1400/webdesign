import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss"; 

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-logo">
        <div class="lines-container">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div>
        <Link to="/">Logo</Link>
        </div>
        
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page1">Page 1</Link>
          </li>
          <li>
            <Link to="/page2">Page 2</Link>
          </li>
        </ul>
      </div>
    </nav>
   </>
  );
};

export default Navbar;
