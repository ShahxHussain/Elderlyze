import React from 'react';
import logo from '../logo.png';

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-content">
        <div className="brand">
          <img src={logo} alt="Elderlyze logo" className="brand-logo" />
        </div>
        <nav className="nav-links" aria-label="Primary Navigation">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#tutorial">Tutorial</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="auth-actions">
          <button className="btn btn-ghost" aria-label="Login">Login</button>
          <button className="btn btn-primary" aria-label="Sign Up">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;


