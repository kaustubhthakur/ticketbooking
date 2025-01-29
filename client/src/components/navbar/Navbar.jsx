import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="data:image/png;base64,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" alt="" className="img-logo" />
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <Menu size={24} />
      </button>
    </nav>
  );
}