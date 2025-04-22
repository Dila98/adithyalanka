import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-section">
          <h3 className="footer-logo">AADITHYA LANKA</h3>
          <p className="footer-description">
            Delivering a full range of building projects on time, meeting international standards and sustainable practices to exceed customer expectations.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links">
            <li><a href="/services/high-rise">High-Rise Construction</a></li>
            <li><a href="/services/warehouse">Warehouse Construction</a></li>
            <li><a href="/services/residential">Residential Construction</a></li>
            <li><a href="/services/design">Design and Build Services</a></li>

          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="footer-contact">
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <span>#56A, Horton Place,Colombo-07</span>
            </li>
            <li>
              <FaPhone className="contact-icon" />
              <span>+94 11 269 8863</span>
            </li>
            <li>
              <FaPhone className="contact-icon" />
              <span>+94 71 319 8347</span>
            </li>
            <li>
              <FaEnvelope className="contact-icon" />
              <span>info@aadithyalanka.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AADITHYA LANKA. All rights reserved.</p>
        <div className="footer-legal">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;