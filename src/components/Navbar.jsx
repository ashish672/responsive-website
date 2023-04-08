import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const hamburgerHandler = () => {
    setIsHamburgerOpen((toggle) => !toggle);
  };

  return (
    <nav>
      <div className="navbar flex">
        <h2 className="logo">Black Sea</h2>
        <div className={`hamburger`} onClick={hamburgerHandler}>
          <span
            style={{
              transform: `${
                isHamburgerOpen ? "rotate(45deg)" : "rotate(0deg)"
              }`,
            }}
          ></span>
          <span style={{ opacity: `${isHamburgerOpen ? 0 : 1} ` }}></span>
          <span
            style={{
              transform: `${
                isHamburgerOpen ? "rotate(-45deg)" : "rotate(0deg)"
              } `,
            }}
          ></span>
        </div>

        <ul className={`nav-list ${isHamburgerOpen ? "open" : ""}`}>
          <li className="nav-item">Home </li>
          <li className="nav-item">About Me</li>
          <li className="nav-item"> Portfolio</li>
          <li className="nav-item">Contact Me</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
