import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="nav-link">Your Logo</Link>
        </div>

        {/* Desktop Menu */}
        <div className="nav-links">
          <Link to="/login" className="nav-link" onClick={closeMobileMenu}>Login</Link>
          <Link to="/register" className="nav-link" onClick={closeMobileMenu}>Register</Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <Link to="/login" className="mobile-nav-link" onClick={closeMobileMenu}>Login</Link>
            <Link to="/register" className="mobile-nav-link" onClick={closeMobileMenu}>Register</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;