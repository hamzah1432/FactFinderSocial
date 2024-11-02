import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <div className="logo">
            <img src="/logo.png" alt="" />
          </div>
        </div>

        <div className="nav-links">
          <button>Home</button>
          <button>News</button>
          <button>About Us</button>
          <button>Profile</button>
        </div>

        <div className="nav-links">
          <button className="signup-btn">Sign In</button>
        </div>
      </div>
    </nav> 
  );
};

export default Navbar;