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
          width: 44px;
          height: 44px;
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
          transform: scale(1.1);
        }

        .footer-bottom {
          text-align: center;
          padding: 1.5rem 5%;
          border-top: 1px solid rgba(255,255,255,0.1);
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

        /* Extra Large Screens (1600px+) */
        @media (min-width: 1600px) {
          .footer-top {
            padding: 8rem 8%;
          }
          
          .footer-links {
            gap: 3rem;
          }
          
          .footer-links a {
            font-size: 1rem;
          }
          
          .social-link {
            width: 48px;
            height: 48px;
            font-size: 1.2rem;
          }
        }

        /* Large Laptops (1200px - 1440px) */
        @media (max-width: 1440px) {
          .footer-top {
            padding: 6rem 5%;
          }
        }

        /* Standard Laptops (1024px - 1199px) */
        @media (max-width: 1199px) {
          .footer-top {
            padding: 5rem 4%;
          }
          
          .footer-links {
            gap: 2rem;
          }
          
          .footer-links a {
            font-size: 0.85rem;
          }
          
          .footer-social-section {
            gap: 1.5rem;
          }
        }

        /* Tablets & Small Laptops (768px - 1023px) */
        @media (max-width: 1023px) {
          .footer-top {
            padding: 4rem 4%;
          }
          
          .footer-top-content {
            flex-direction: column;
            gap: 3rem;
            align-items: center;
            text-align: center;
          }
          
          .footer-links {
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.5rem 2rem;
          }
          
          .footer-social-section {
            flex-direction: column;
            gap: 1.5rem;
            width: auto;
          }
          
          .footer-social-label {
            font-size: 0.85rem;
          }
        }

        /* Large Phones & Small Tablets (600px - 767px) */
        @media (max-width: 767px) {
          .footer-top {
            padding: 3.5rem 5%;
          }
          
          .footer-top-content {
            gap: 2.5rem;
          }
          
          .footer-links {
            flex-direction: column;
            gap: 1.2rem;
            align-items: center;
          }
          
          .footer-links a {
            font-size: 0.9rem;
            padding: 0.3rem 0;
          }
          
          .footer-social {
            gap: 1.2rem;
          }
          
          .social-link {
            width: 48px;
            height: 48px;
          }
          
          .footer-bottom {
            padding: 1.8rem 5%;
          }
          
          .footer-bottom p {
            font-size: 0.8rem;
            line-height: 1.5;
          }
        }

        /* Medium Phones (480px - 599px) */
        @media (max-width: 599px) {
          .footer-top {
            padding: 3rem 6%;
          }
          
          .footer-links a {
            font-size: 0.95rem;
            padding: 0.4rem 0;
          }
          
          .footer-social-label {
            font-size: 0.8rem;
            letter-spacing: 0.5px;
          }
          
          .social-link {
            width: 50px;
            height: 50px;
            font-size: 1.15rem;
          }
        }

        /* Small Phones (320px - 479px) */
        @media (max-width: 479px) {
          .footer-top {
            padding: 2.5rem 5%;
          }
          
          .footer-top-content {
            gap: 2rem;
          }
          
          .footer-links {
            gap: 1rem;
            width: 100%;
          }
          
          .footer-links a {
            font-size: 1rem;
            padding: 0.5rem 0;
            width: 100%;
          }
          
          .footer-social-section {
            gap: 1.2rem;
            width: 100%;
          }
          
          .footer-social-label {
            font-size: 0.75rem;
          }
          
          .footer-social {
            gap: 0.8rem;
            justify-content: center;
          }
          
          .social-link {
            width: 46px;
            height: 46px;
            font-size: 1.1rem;
          }
          
          .footer-bottom {
            padding: 1.5rem 5%;
          }
          
          .footer-bottom p {
            font-size: 0.75rem;
            line-height: 1.6;
          }
        }

        /* Extra Small Devices (< 360px) */
        @media (max-width: 359px) {
          .footer-top {
            padding: 2rem 4%;
          }
          
          .footer-links a {
            font-size: 0.95rem;
          }
          
          .social-link {
            width: 44px;
            height: 44px;
            font-size: 1rem;
          }
          
          .footer-social {
            gap: 0.6rem;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .social-link {
            min-width: 44px;
            min-height: 44px;
          }
          
          .footer-links a {
            padding: 0.6rem 0;
            min-height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
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
            <p>© Evergreen Motors Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;