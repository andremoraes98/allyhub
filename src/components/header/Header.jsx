import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/logo.png';
import './Header.css';

function Header() {
  return (
    <header
      className="d-flex justify-content-around align-items-center flex-wrap"
    >
      <Link to="/">
        <img
          src={image}
          alt="Ally Logo"
          className="img-logo"
        />
      </Link>
      <h1 className="mission">
        With Ally it&apos;s easier
      </h1>
    </header>
  );
}

export default Header;
