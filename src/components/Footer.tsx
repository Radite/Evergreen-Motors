import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        footer {
          background: linear-gradient(135deg, #0a0a0f 0%, #1a1a24 100%);
          color: #fff;
          padding: 0;
          margin-top: 0;
          position: relative;
          overflow: hidden;
        }

        footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #4a9eff, transparent);
        }

        .footer-main {
          padding: 6rem 5%;
          position: relative;
          z-index: 1;
        }

        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          gap: 4rem;
        }

        .footer-brand {
          max-width: 350px;
        }

        .footer-logo {
          font-size: 2.5rem;
          font-weight: 300;
          letter-spacing: 4px;
          font-family: 'Cormorant Garamond', serif;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #4a9eff 0%, #00d4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-tagline {
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.7);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          margin-bottom: 2rem;
        }

        .footer-social {
          display: flex;
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .social-link {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(74, 158, 255, 0.1);
          border: 1px solid rgba(74, 158, 255, 0.3);
          font-size: 1.3rem;
          transition: all 0.4s ease;
          text-decoration: none;
          color: #4a9eff;
        }

        .social-link:hover {
          background: rgba(74, 158, 255, 0.2);
          border-color: rgba(74, 158, 255, 0.6);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(74, 158, 255, 0.3);
        }

        .footer-section h3 {
          margin-bottom: 2rem;
          color: #4a9eff;
          font-size: 1.3rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
        }

        .footer-section ul li {
          margin-bottom: 1rem;
        }

        .footer-section a {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 1.05rem;
          transition: all 0.3s ease;
          display: inline-block;
          position: relative;
        }

        .footer-section a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #4a9eff;
          transition: width 0.3s ease;
        }

        .footer-section a:hover {
          color: #4a9eff;
          transform: translateX(5px);
        }

        .footer-section a:hover::after {
          width: 100%;
        }

        .footer-bottom {
          text-align: center;
          padding: 2.5rem 5%;
          border-top: 1px solid rgba(255,255,255,0.1);
          background: rgba(0,0,0,0.3);
        }

        .footer-bottom-content {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-bottom p {
          color: rgba(255,255,255,0.5);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 0.95rem;
          letter-spacing: 1px;
        }

        .footer-links {
          display: flex;
          gap: 2rem;
        }

        .footer-links a {
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .footer-links a:hover {
          color: #4a9eff;
        }

        @media (max-width: 1200px) {
          .footer-content {
            grid-template-columns: 1fr 1fr 1fr;
            gap: 3rem;
          }

          .footer-brand {
            grid-column: span 3;
            max-width: 100%;
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .footer-brand {
            grid-column: span 1;
          }

          .footer-bottom-content {
            flex-direction: column;
            gap: 1.5rem;
          }

          .footer-links {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>

      <footer>
        <div className="footer-main">
          <div className="footer-content">
            <div className="footer-brand">
              <h2 className="footer-logo">EVERGREEN MOTORS</h2>
              <p className="footer-tagline">
                Your premier BYD dealership, bringing cutting-edge electric vehicle technology 
                and unparalleled service to our community. Driving excellence since day one.
              </p>
              <div className="footer-social">
                <a href="#" className="social-link" aria-label="Facebook">📘</a>
                <a href="#" className="social-link" aria-label="Instagram">📷</a>
                <a href="#" className="social-link" aria-label="Twitter">🐦</a>
                <a href="#" className="social-link" aria-label="LinkedIn">💼</a>
              </div>
            </div>

            <div className="footer-section">
              <h3>Models</h3>
              <ul>
                <li><Link to="/models">Dolfin Mini</Link></li>
                <li><Link to="/models">Atto 3</Link></li>
                <li><Link to="/models">Seal U</Link></li>
                <li><Link to="/models">Tang L</Link></li>
                <li><Link to="/models">All Models</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Purchasing</h3>
              <ul>
                <li><Link to="/test-drive">Test Drive</Link></li>
                <li><Link to="/locations">Locations</Link></li>
                <li><Link to="/purchasing#cash-purchases">Cash Purchase</Link></li>
                <li><Link to="/purchasing">Financing</Link></li>
                <li><Link to="/fleet-solutions">Fleet Solutions</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Ownership</h3>
              <ul>
                <li><Link to="/ownership#service-maintenance">Service</Link></li>
                <li><Link to="/ownership#warranty">Warranty</Link></li>
                <li><Link to="/ownership#charging-locations">Charging</Link></li>
                <li><Link to="/ownership#membership">Membership</Link></li>
                <li><Link to="/ownership#roadside-assistance">Roadside</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Company</h3>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/technology">Technology</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/locations">Locations</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 Evergreen Motors. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;