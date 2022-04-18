import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../images/apple-touch-icon.png'
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);
  const handleLogout = () => {
    signOut(auth);
}

  return (
    <nav className=" nav-container">
      <div className="logo-style">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="nav-link-style ">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/aboutme">About me</Link>
        {user ? (
          <button className="btn-style" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Header;