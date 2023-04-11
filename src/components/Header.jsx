import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">Stranger's Things</div>
      <nav className="link-container">
        <NavLink to="/" className="link">
          {" "}
          Home{" "}
        </NavLink>
        <NavLink to="/signin" className="link">
          Sign In
        </NavLink>
        <NavLink to="/register" className="link">
          Register
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
