import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../logo.png';

function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="navbar">
      <div className="container nav-content">
        <Link className="brand" to="/">
          <img src={logo} alt="Elderlyze logo" className="brand-logo" />
        </Link>
        <nav className="nav-links" aria-label="Primary Navigation">
          <Link to="/">Home</Link>
          <Link to={{ pathname: '/', hash: '#features' }}>Features</Link>
          <Link to={{ pathname: '/', hash: '#how-it-works' }}>How It Works</Link>
          <Link to={{ pathname: '/', hash: '#tutorial' }}>Tutorial</Link>
          <Link to={{ pathname: '/', hash: '#about' }}>About</Link>
          <Link to={{ pathname: '/', hash: '#contact' }}>Contact</Link>
        </nav>
        <div className="auth-actions">
          <button className="btn btn-ghost" aria-label="Login" onClick={() => navigate('/signin')}>Login</button>
          <button className="btn btn-primary" aria-label="Sign Up" onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;


