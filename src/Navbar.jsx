import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">AADITHYA LANKA</Link>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Menu Items */}
        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/news" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>News</Link>
          </li>
          <li className="navbar-item">
            <Link to="/services" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          </li>
          
          {/* Portfolio Dropdown */}
          <li 
            className="navbar-item dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="navbar-link dropdown-toggle">
              Portfolio
            </span>
            <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
              <li className="dropdown-item">
                <Link to="/portfolio/ongoing" className="dropdown-link" onClick={() => {
                  setIsDropdownOpen(false);
                  setIsMobileMenuOpen(false);
                }}>Ongoing</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/portfolio/completed" className="dropdown-link" onClick={() => {
                  setIsDropdownOpen(false);
                  setIsMobileMenuOpen(false);
                }}>Completed</Link>
              </li>
            </ul>
          </li>
          <li className="navbar-item">
            <Link to="/careers" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>Careers</Link>
          </li>        
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link contact-btn" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;