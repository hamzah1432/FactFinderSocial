import React from "react";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="profile-navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <div className="logo">
            <img src="/logo.png" alt="" />
          </div>
        </div>

        <div className="nav-links">
          <button
            onClick={() => {
              navigate("/Home");
            }}
          >
            Home
          </button>
          <button
            onClick={() => {
              navigate("/News");
            }}
          >
            News
          </button>
          <button
            onClick={() => {
              navigate("/AboutUs");
            }}
          >
            About Us
          </button>
        </div>

        <div />
      </div>
      <div className="profile">
        <div>
          <div className="circle" />
        </div>
        <div className="profile-name">
          <div>Alexa Rawles</div>
          <div className="email">alexarawles@gmail.com</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
