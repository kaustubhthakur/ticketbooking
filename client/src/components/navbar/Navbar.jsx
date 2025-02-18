import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:9000/auth/logout', null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
    } catch (error) {
      console.error('Logout failed:', error.response?.data?.message || error.message);
    } finally {
      localStorage.removeItem('token');
      navigate('/login');
    }
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
          {isLoggedIn ? (
            <>
              <Link to="/createevent" className="nav-link" onClick={closeMobileMenu}>Create Event</Link>
              <button className="nav-link logout-button" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link" onClick={closeMobileMenu}>Login</Link>
              <Link to="/register" className="nav-link" onClick={closeMobileMenu}>Register</Link>
            </>
          )}
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
            {isLoggedIn ? (
              <>
                <Link to="/createevent" className="mobile-nav-link" onClick={closeMobileMenu}>Create Event</Link>
                <button className="mobile-nav-link logout-button" onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="mobile-nav-link" onClick={closeMobileMenu}>Login</Link>
                <Link to="/register" className="mobile-nav-link" onClick={closeMobileMenu}>Register</Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
