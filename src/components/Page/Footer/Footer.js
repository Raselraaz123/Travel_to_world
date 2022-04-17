import React from 'react';
import logo from '../../../images/apple-touch-icon.png'
import './Footer.css'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
  return (
    <footer className='footer-container'>
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <p>Copyright © {year} Company Name</p>
      </div>
      <div>
        <button>Email & password</button>
        <button>Login in google</button>
        <button> Facebook</button>
      </div>
    </footer>
  );
};

export default Footer;