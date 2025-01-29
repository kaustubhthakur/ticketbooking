import { useState } from "react"; 
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import "./Navbar.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') !== null);
  const [isAdmin, setIsAdmin] = useState(false);

  // Check if the user is admin based on the data in localStorage
  if (isLoggedIn && !isAdmin) {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.isAdmin) {
      setIsAdmin(true);
    }
  }

  const navigate = useNavigate();

  const handleLogout = () => {
    const token = localStorage.getItem('token');

    axios.get("http://localhost:9000/auth/logout", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.status === 200) {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        navigate('/login');
      }
    });
  };

  return (
    <nav className="navbar">
      <div className="logo">
        {/* Logo can go here */}
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        {isLoggedIn ? (
          <>
            {isAdmin && (
              <Link to="/create-event">Create Event</Link>
            )}
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <Menu size={24} />
      </button>
    </nav>
  );
}
