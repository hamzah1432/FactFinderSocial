import React from "react";
// This is the header, which contains navigation links such as Home, News, About Us, and Profile.
const Navbar = () => {
  return (
    <nav className="profile-navbar">
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
