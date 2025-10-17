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
            min-height: 60px;
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
      `}</style>

      <nav>
        <div className="nav-container">
          <Link to="/" className="logo">
            <img src="/text-1760673746758.png" alt="BYD Logo" className="logo-image" />
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
<li>
  <Link to="/models" onClick={() => setMobileMenuOpen(false)}>Models</Link>
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