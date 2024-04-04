import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand"><span>D</span>esign <span>with S</span>adaam</div>
      <div className="navbar-nav">
        <ul>
        <li><a href="#">Home</a></li>
          <li><a href="#">projects</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact me</a></li> 
          <li><a href="#">Our work</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
