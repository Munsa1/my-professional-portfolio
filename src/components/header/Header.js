import React from 'react';

function Header() {
  return (
    <div>
        <nav className='logo'>
            <img src='' />
        </nav>
        <nav className='links'>
            <ul>
                <a><li>Home</li></a>
                <a><li>Resume</li></a>
                <a><li>Projects</li></a>
                <a><li>Contact</li></a>
            </ul>
        </nav>
    </div>
  );
}

export default Header;
