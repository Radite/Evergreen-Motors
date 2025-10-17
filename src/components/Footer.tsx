import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Models</h3>
          <ul>
            <li><Link to="/models">Dolfin Mini</Link></li>
            <li><Link to="/models">Atto 3</Link></li>
            <li><Link to="/models">Seal U</Link></li>
            <li><Link to="/models">Tang L</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Purchasing</h3>
          <ul>
            <li><Link to="/test-drive">Test Drive</Link></li>
            <li><Link to="/locations">Locations</Link></li>
            <li><Link to="/finance-bank">Finance Options</Link></li>
            <li><Link to="/fleet-solutions">Fleet Solutions</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Ownership</h3>
          <ul>
            <li><Link to="/service-maintenance">Service & Maintenance</Link></li>
            <li><Link to="/warranty">Warranty</Link></li>
            <li><Link to="/charging-locations">Charging Locations</Link></li>
            <li><Link to="/membership">Membership</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><Link to="/about">About BYD</Link></li>
            <li><Link to="/technology">Technology</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 BYD Company Limited. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
