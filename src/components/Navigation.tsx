import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    if (window.innerWidth <= 1023) {
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    }
  };

  return (
    <>
      <style>{`
        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: #fff;
          font-size: 1.8rem;
          cursor: pointer;
          padding: 0.5rem;
          transition: color 0.3s ease;
        }

        .mobile-menu-toggle:hover {
          color: #4a9eff;
        }

        /* Desktop hover functionality */
        @media (min-width: 1024px) {
          .dropdown {
            position: relative;
          }

          .dropdown-content {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            background: #2a2c2e;
            min-width: 200px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.5);
            z-index: 1000;
            margin-top: 0;
          }

          .dropdown:hover .dropdown-content {
            display: block;
          }

          .dropdown-content a {
            display: block;
            padding: 0.8rem 1.5rem;
            color: #fff;
            text-decoration: none;
            transition: background-color 0.2s ease;
            white-space: nowrap;
          }

          .dropdown-content a:hover {
            background-color: #3a3c3e;
          }
        }

        @media (max-width: 1023px) {
          .mobile-menu-toggle {
            display: block;
            position: absolute;
            right: 5%;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1001;
          }

          .nav-container {
            position: relative;
            min-height: 80px;
          }

          .nav-menu {
            display: ${mobileMenuOpen ? 'flex' : 'none'};
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: #252728;
            flex-direction: column;
            padding: 1rem 0;
            box-shadow: 0 4px 20px rgba(0,0,0,0.5);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            max-height: calc(100vh - 80px);
            overflow-y: auto;
          }

          .dropdown.active .dropdown-content {
            display: block;
            max-height: 1000px;
          }

          .nav-menu > li > a {
            padding: 1rem 5%;
          }

          .dropdown-content {
            animation: none;
          }

          .dropdown-content a {
            padding: 0.8rem 8%;
          }
        }

        @media (max-width: 767px) {
          .mobile-menu-toggle {
            font-size: 2rem;
          }

          .nav-menu > li > a {
            font-size: 1rem;
            padding: 1.2rem 6%;
          }

          .dropdown-content a {
            padding: 1rem 10%;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 479px) {
          .mobile-menu-toggle {
            font-size: 1.8rem;
            right: 4%;
          }

          .nav-menu > li > a {
            padding: 1.3rem 5%;
          }
        }

        /* Logo text styling */
        .logo-text {
          font-size: 1.5rem;
          font-weight: bold;
          color: #fff;
          text-decoration: none;
        }
      `}</style>

      <nav>
        <div className="nav-container">
          <Link to="/" className="logo-text">
            Evergreen Motors
          </Link>

          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          <ul className="nav-menu">
            <li className="dropdown">
              <Link to="/models">Models</Link>
              <div className="dropdown-content">
                <Link to="/models/dolphin-mini" onClick={() => setMobileMenuOpen(false)}>Dolphin Mini</Link>
                <Link to="/models/atto-3" onClick={() => setMobileMenuOpen(false)}>Atto 3</Link>
                <Link to="/models/seal-u" onClick={() => setMobileMenuOpen(false)}>Seal U</Link>
                <Link to="/models/tang-l" onClick={() => setMobileMenuOpen(false)}>Tang L</Link>
                <Link to="/models/han" onClick={() => setMobileMenuOpen(false)}>Han</Link>
                <Link to="/models/seal" onClick={() => setMobileMenuOpen(false)}>Seal</Link>
              </div>
            </li>
            <li 
              className={`dropdown ${activeDropdown === 'purchasing' ? 'active' : ''}`}
              onClick={() => toggleDropdown('purchasing')}
            >
              <Link to="/purchasing">Purchasing</Link>
              <div className="dropdown-content">
                <Link to="/test-drive" onClick={() => setMobileMenuOpen(false)}>Test Drive</Link>
                <Link to="/locations" onClick={() => setMobileMenuOpen(false)}>Locations</Link>
                <Link to="/cash-purchases" onClick={() => setMobileMenuOpen(false)}>Cash Purchases</Link>
                <Link to="/finance-bank" onClick={() => setMobileMenuOpen(false)}>Finance (Bank)</Link>
                <Link to="/lease" onClick={() => setMobileMenuOpen(false)}>Lease</Link>
                <Link to="/finance-dealer" onClick={() => setMobileMenuOpen(false)}>Finance (Dealer)</Link>
                <Link to="/subscriptions" onClick={() => setMobileMenuOpen(false)}>Subscriptions</Link>
                <Link to="/rentals" onClick={() => setMobileMenuOpen(false)}>Rentals</Link>
                <Link to="/fleet-solutions" onClick={() => setMobileMenuOpen(false)}>Fleet & Business Solutions</Link>
              </div>
            </li>
            <li 
              className={`dropdown ${activeDropdown === 'ownership' ? 'active' : ''}`}
              onClick={() => toggleDropdown('ownership')}
            >
              <Link to="/ownership">Ownership</Link>
              <div className="dropdown-content">
                <a href="/ownership#service-maintenance" onClick={() => setMobileMenuOpen(false)}>Service & Maintenance</a>
                <a href="/ownership#roadside-assistance" onClick={() => setMobileMenuOpen(false)}>EM Roadside Assistance</a>
                <a href="/ownership#warranty" onClick={() => setMobileMenuOpen(false)}>Warranty</a>
                <a href="/ownership#membership" onClick={() => setMobileMenuOpen(false)}>EM Membership & Charge Cards</a>
                <a href="/ownership#charging-locations" onClick={() => setMobileMenuOpen(false)}>Charging Locations</a>
              </div>
            </li>
            <li>
              <Link to="/technology" onClick={() => setMobileMenuOpen(false)}>Technology</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;