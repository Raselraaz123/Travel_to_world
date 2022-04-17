import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../images/apple-touch-icon.png'

const Header = () => {
  return (
    <nav className="nav-container">
      <div className="logo-style">
        <Link to='/'>

          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="nav-link-style font-style">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About me</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;