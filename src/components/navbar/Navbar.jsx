import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="main-nav">
      <div className="nav">
        <div className="right"></div>
        <div className="left">

            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
