import React from 'react';
import logo from '../../../images/apple-touch-icon.png'
import facebook from '../../../images/social-icon/facebook.png'
import google from '../../../images/social-icon/google.png'


import './Footer.css'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
  return (
    <footer className="footer-container">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <p>Copyright &reg; {year} All rights reserved</p>
      </div>
      <div>
        <button className="w-100 px-5 mb-2 shadow-lg border-0">
          <img width={40} src={google} alt="" /> google
        </button>
        <br />
        <button className="w-100 shadow-lg border-0">
          <img src={facebook} alt="" /> Facebook
        </button>
      </div>
    </footer>
  );
};

export default Footer;