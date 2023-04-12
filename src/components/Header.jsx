import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = ({ isLoggedIn }) => {
  return (
    <header>
      <div className="logo">Stranger's Things</div>
      <nav className="link-container">
        {isLoggedIn ? (
          <>
            <NavLink to="/" className="link">
              {" "}
              Home{" "}
            </NavLink>

            <NavLink to="/posts" className="link">
              Posts
            </NavLink>
            <NavLink to="/profile" className="link">
              Profile
            </NavLink>
            <NavLink to="/signout" className="link">
              Sign Out
            </NavLink>
          </>
        ) : (
          <>
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
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
