import React, { useState } from 'react';
import '../Assets/Css/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Assets/Images/Logo.png';

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-content">
        <Link className="brand" to="/">
          <img src={Logo} alt="Elderlyze logo" className="brand-logo" />
        </Link>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu" aria-expanded={isMenuOpen}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`} aria-label="Primary Navigation">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to={{ pathname: '/', hash: '#features' }} onClick={closeMenu}>Features</Link>
          <Link to={{ pathname: '/', hash: '#how-it-works' }} onClick={closeMenu}>How It Works</Link>
          <Link to={{ pathname: '/', hash: '#tutorial' }} onClick={closeMenu}>Tutorial</Link>
          <Link to={{ pathname: '/', hash: '#about' }} onClick={closeMenu}>About</Link>
          <Link to={{ pathname: '/', hash: '#contact' }} onClick={closeMenu}>Contact</Link>
        </nav>
        <div className={`auth-actions ${isMenuOpen ? 'open' : ''}`}>
          <button className="btn btn-ghost" aria-label="Login" onClick={() => { navigate('/signin'); closeMenu(); }}>Login</button>
          <button className="btn btn-primary" aria-label="Sign Up" onClick={() => { navigate('/signup'); closeMenu(); }}>Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;


