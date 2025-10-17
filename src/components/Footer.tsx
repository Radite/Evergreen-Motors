import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap');

        footer {
          background: #252728;
          color: #fff;
          padding: 0;
          margin-top: 0;
        }

        .footer-top {
          padding: 7rem 5%;
        }

        .footer-top-content {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-links {
          display: flex;
          gap: 2.5rem;
        }

        .footer-links a {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: #fff;
        }

        .footer-social-section {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .footer-social-label {
          color: rgba(255,255,255,0.7);
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .footer-social {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50%;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          text-decoration: none;
          color: rgba(255,255,255,0.7);
        }

        .social-link:hover {
          border-color: rgba(255,255,255,0.5);
          color: #fff;
        }

        .footer-bottom {
          text-align: center;
          padding: 1.5rem 5%;
        }

        .footer-bottom-content {
          max-width: 1400px;
          margin: 0 auto;
        }

        .footer-bottom p {
          color: rgba(255,255,255,0.5);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 0.85rem;
        }

        @media (max-width: 768px) {
          .footer-top-content {
            flex-direction: column;
            gap: 2rem;
            align-items: flex-start;
          }

          .footer-links {
            flex-direction: column;
            gap: 1rem;
          }

          .footer-social-section {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>

      <footer>
        <div className="footer-top">
          <div className="footer-top-content">
            <div className="footer-links">
              <a href="#">Privacy & Legal</a>
              <a href="#">Cookie Policy</a>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="footer-social-section">
              <span className="footer-social-label">FOLLOW US</span>
              <div className="footer-social">
                <a href="#" className="social-link" aria-label="Facebook">f</a>
                <a href="#" className="social-link" aria-label="X">𝕏</a>
                <a href="#" className="social-link" aria-label="Instagram">📷</a>
                <a href="#" className="social-link" aria-label="TikTok">♪</a>
                <a href="#" className="social-link" aria-label="YouTube">▶</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>© BYD Company Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;