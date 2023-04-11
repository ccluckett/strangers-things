import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">Stranger's Things</div>
      <nav className="link-container">
        <ul className="links">
          <li className="link">
            <a href="#">Home</a>
          </li>
          <li className="link">
            <a href="#">Sign In</a>
          </li>
          <li className="link">
            <a href="#">Register</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
