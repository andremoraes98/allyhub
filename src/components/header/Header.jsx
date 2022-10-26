import React from 'react';
import image from '../../images/logo.png';
import './Header.css';

function Header() {
  return (
    <header
      className="d-flex justify-content-around align-items-center"
    >
      <img
        src={image}
        alt="Ally Logo"
        className="img-logo"
      />
      <h1 className="mission">
        With Ally it&apos;s easier
      </h1>
    </header>
  );
}

export default Header;
