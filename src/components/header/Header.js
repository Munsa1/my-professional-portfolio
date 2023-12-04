import React from 'react';

function Header() {
  return (
    <div>
      <nav className="logo">
        <img src="#" />
      </nav>
      <nav className="links">
        <ul>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Resume</li></a>
          <a href="#"><li>Projects</li></a>
          <a href="#"><li>Contact</li></a>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
