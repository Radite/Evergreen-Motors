import React, { useState, useEffect, useRef } from 'react';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const [activeFilter, setActiveFilter] = useState('electric');
  const navRef = useRef(null);

  useEffect(() => {
    const updateNavHeight = () => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setNavHeight(rect.bottom);
      }
    };

    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);
    window.addEventListener('scroll', updateNavHeight);

    return () => {
      window.removeEventListener('resize', updateNavHeight);
      window.removeEventListener('scroll', updateNavHeight);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    if (window.innerWidth <= 1023) {
      e.preventDefault();
      setDropdownOpen(!dropdownOpen);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    setActiveFilter('electric');
  };

  const handleDropdownEnter = () => {
    setActiveFilter('electric');
  };

  return (
    <>
      <style>{`
        /* Mobile Menu Toggle Button */
        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: #fff;
          font-size: 1.8rem;
          cursor: pointer;
          padding: 0.5rem;
          transition: color 0.3s ease;
          z-index: 1001;
        }

        .mobile-menu-toggle:hover {
          color: #4a9eff;
        }

        /* Mega Menu Positioning */
        .dropdown-content {
          top: calc(${navHeight}px - 1px) !important;
        }

        /* Desktop Styles */
        @media (min-width: 1024px) {
          .dropdown::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            height: 20px;
            background: transparent;
          }

          .dropdown-content {
            display: none;
            position: fixed;
            left: 0;
            right: 0;
            width: 100%;
            background: #f5f5f5;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            z-index: 999;
            padding: 2rem 3% 3rem 3%;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            min-height: 500px;
          }

          .dropdown:hover .dropdown-content {
            display: flex;
            gap: 3rem;
            animation: megaMenuFadeIn 0.3s ease;
          }

          @keyframes megaMenuFadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .mega-menu-sidebar {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            min-width: 200px;
          }

          .mega-menu-section {
            margin-bottom: 0;
            cursor: pointer;
            transition: all 0.3s ease;
            padding: 0.5rem 1rem;
            border-radius: 4px;
          }

          .mega-menu-section:hover {
            background: rgba(0, 0, 0, 0.05);
          }

          .mega-menu-section.active .mega-menu-section-title {
            color: #4a9eff;
          }

          .mega-menu-section-title {
            font-size: 1.3rem;
            font-weight: 700;
            color: #1a1a1a;
            margin-bottom: 0;
            text-transform: uppercase;
            letter-spacing: 2px;
            transition: color 0.3s ease;
          }

          .mega-menu-main {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            position: relative;
            overflow: visible;
            min-height: 440px;
          }

          .mega-menu-content-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            transition: opacity 0.4s ease, transform 0.4s ease;
          }

          .mega-menu-content-wrapper.hidden {
            opacity: 0;
            transform: translateX(-20px);
            pointer-events: none;
          }

          .mega-menu-content-wrapper.visible {
            opacity: 1;
            transform: translateX(0);
            pointer-events: auto;
          }

          .mega-menu-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 1rem;
            max-width: 100%;
          }

          .mega-menu-item {
            background: transparent;
            border-radius: 0;
            overflow: visible;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            display: flex;
            flex-direction: column;
          }

          .mega-menu-item:hover {
            transform: translateY(-3px);
          }

          .mega-menu-title {
            font-size: 0.85rem;
            color: #1a1a1a;
            margin-bottom: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-align: center;
          }

          .mega-menu-image {
            width: 100%;
            height: 150px;
            background: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            position: relative;
          }

          .mega-menu-image img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            padding: 0.5rem;
          }

          .mega-menu-content {
            padding: 0;
            text-align: center;
            background: transparent;
          }

          .mega-menu-link {
            display: block;
            color: #666;
            text-decoration: none;
            font-size: 0.75rem;
            font-weight: 1000;
            letter-spacing: 0.3px;
            text-transform: uppercase;
            transition: all 0.3s ease;
            margin-top: 0.7rem;
            padding-bottom: 1rem;
            text-align: center;
          }

          .mega-menu-link:hover {
            color: #000;
          }
        }

        /* Tablet & Mobile Styles */
        @media (max-width: 1023px) {
          .mobile-menu-toggle {
            display: block;
            position: absolute;
            right: 5%;
            top: 50%;
            transform: translateY(-50%);
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

          .nav-menu > li {
            width: 100%;
          }

          .nav-menu > li > a {
            padding: 1rem 5%;
            width: 100%;
            text-align: center;
          }

          .dropdown-content {
            position: static !important;
            width: 100% !important;
            max-height: ${dropdownOpen ? '3000px' : '0'};
            overflow: hidden;
            transition: max-height 0.4s ease, padding 0.4s ease;
            padding: ${dropdownOpen ? '1.5rem 3%' : '0'} !important;
            background: #1a1a1a;
            box-shadow: none;
            border: none;
            display: block !important;
          }

          .mega-menu-section {
            margin-bottom: 2rem;
          }

          .mega-menu-section:last-child {
            margin-bottom: 0;
          }

          .mega-menu-section-title {
            font-size: 1.3rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            text-align: center;
          }

          .mega-menu-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.2rem;
          }

          .mega-menu-item {
            background: rgba(42, 42, 42, 0.5);
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.05);
          }

          .mega-menu-image {
            width: 100%;
            height: 160px;
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .mega-menu-image img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            padding: 1rem;
          }

          .mega-menu-content {
            padding: 1.2rem;
            text-align: center;
          }

          .mega-menu-title {
            font-size: 1.1rem;
            color: #fff;
            margin-bottom: 0.5rem;
            font-weight: 600;
            letter-spacing: 1px;
          }

          .mega-menu-link {
            display: inline-block;
            color: #4a9eff;
            text-decoration: none;
            font-size: 0.85rem;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }

          .dropdown > a::after {
            content: ' ▼';
            font-size: 0.7rem;
            margin-left: 0.3rem;
            transition: transform 0.3s ease;
            display: inline-block;
          }

          .dropdown.active > a::after {
            transform: rotate(180deg);
          }
        }

        @media (max-width: 767px) {
          .mobile-menu-toggle {
            font-size: 2rem;
          }

          .mega-menu-image {
            height: 140px;
          }

          .mega-menu-content {
            padding: 1rem;
          }

          .mega-menu-title {
            font-size: 1rem;
          }

          .mega-menu-link {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 479px) {
          .mobile-menu-toggle {
            font-size: 1.8rem;
            right: 4%;
          }

          .mega-menu-image {
            height: 130px;
            font-size: 2.5rem;
          }

          .mega-menu-content {
            padding: 0.8rem;
          }

          .mega-menu-title {
            font-size: 0.95rem;
          }

          .mega-menu-link {
            font-size: 0.75rem;
          }
        }

        /* Logo Styles */
        .logo-text {
          font-size: 1.5rem;
          font-weight: 300;
          color: #fff;
          text-decoration: none;
          letter-spacing: 8px;
          font-family: 'Cormorant Garamond', serif;
          transition: all 0.3s ease;
          text-transform: uppercase;
        }

        .logo-text:hover {
t          color: #4a9eff;
          text-shadow: 0 0 20px rgba(74, 158, 255, 0.5);
        }

        @media (max-width: 1023px) {
          .logo-text {
            font-size: 1.8rem;
            letter-spacing: 6px;
          }
        }

        @media (max-width: 479px) {
          .logo-text {
            font-size: 1.4rem;
            letter-spacing: 4px;
          }
        }
      `}</style>

      <nav ref={navRef}>
        <div className="nav-container">
          <a href="/" className="logo-text" onClick={closeMobileMenu}>
            Evergreen Motors
          </a>

          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          <ul className="nav-menu">
            <li className={`dropdown ${dropdownOpen ? 'active' : ''}`} onMouseEnter={handleDropdownEnter}>
              <a 
                href="/models" 
                onClick={toggleDropdown}
              >
                Models
              </a>
              <div className="dropdown-content">
                <div className="mega-menu-sidebar">
                  <div 
                    className={`mega-menu-section ${activeFilter === 'electric' ? 'active' : ''}`}
                    onMouseEnter={() => setActiveFilter('electric')}
                  >
                    <h2 className="mega-menu-section-title">Electric Cars</h2>
                  </div>
                  <div 
                    className={`mega-menu-section ${activeFilter === 'hybrid' ? 'active' : ''}`}
                    onMouseEnter={() => setActiveFilter('hybrid')}
                  >
                    <h2 className="mega-menu-section-title">Hybrid Cars</h2>
                  </div>
                </div>

                <div className="mega-menu-main">
                  {/* Electric Cars Content */}
                  <div className={`mega-menu-content-wrapper ${activeFilter === 'electric' ? 'visible' : 'hidden'}`}>
                    <div className="mega-menu-grid">
                      <a href="/models/dolphin-mini" onClick={closeMobileMenu} style={{textDecoration: 'none'}}>
                        <div className="mega-menu-item">
                          <h3 className="mega-menu-title">BYD DOLPHIN MINI</h3>
                          <div className="mega-menu-image">
                            <img src="/models/BYD-DOLPHIN-MINI/BYD-DOLPHIN-MINI.png" alt="BYD Dolphin Mini" />
                          </div>
                          <span className="mega-menu-link">Learn More</span>
                        </div>
                      </a>

                      <a href="/models/atto-2" onClick={closeMobileMenu} style={{textDecoration: 'none'}}>
                        <div className="mega-menu-item">
                          <h3 className="mega-menu-title">BYD ATTO 2</h3>
                          <div className="mega-menu-image">
                            <img src="/models/BYD-ATTO-2/BYD_ATTO_2.png" alt="BYD Atto 2" />
                          </div>
                          <span className="mega-menu-link">Learn More</span>
                        </div>
                      </a>

                      <a href="/models/atto-3" onClick={closeMobileMenu} style={{textDecoration: 'none'}}>
                        <div className="mega-menu-item">
                          <h3 className="mega-menu-title">BYD ATTO 3</h3>
                          <div className="mega-menu-image">
                            <img src="/models/BYD-ATTO3/BYD-ATTO3.png" alt="BYD Atto 3" />
                          </div>
                          <span className="mega-menu-link">Learn More</span>
                        </div>
                      </a>

                      <a href="/models/icar-03" onClick={closeMobileMenu} style={{textDecoration: 'none'}}>
                        <div className="mega-menu-item">
                          <h3 className="mega-menu-title">iCAR 03</h3>
                          <div className="mega-menu-image">
                            <img src="/models/ICAR-03/ICAR-03.png" alt="iCAR 03" />
                          </div>
                          <span className="mega-menu-link">Learn More</span>
                        </div>
                      </a>

                      <a href="/models/seal-u" onClick={closeMobileMenu} style={{textDecoration: 'none'}}>
                        <div className="mega-menu-item">
                          <h3 className="mega-menu-title">BYD SEAL U</h3>
                          <div className="mega-menu-image">
                            <img src="/models/BYD-SEAL-U/BYD-SEAL-U.png" alt="BYD Seal U" />
                          </div>
                          <span className="mega-menu-link">Learn More</span>
                        </div>
                      </a>
                    </div>

                    <div className="mega-menu-grid">
                      <a href="/models/sealion-07" onClick={closeMobileMenu} style={{textDecoration: 'none'}}>
                        <div className="mega-menu-item">
                          <h3 className="mega-menu-title">BYD SEALION 07</h3>
                          <div className="mega-menu-image">
                            <img src="/models/BYD-SEALION-07/BYD-SEALION-07.png" alt="BYD Sealion 07" />
                          </div>
                          <span className="mega-menu-link">Learn More</span>
                        </div>
                      </a>

                      <a href="/models/tang" onClick={closeMobileMenu} style={{textDecoration: 'none'}}>
                        <div className="mega-menu-item">
                          <h3 className="mega-menu-title">BYD TANG</h3>
                          <div className="mega-menu-image">
                            <img src="/models/BYD-TANG/BYD-TANG.png" alt="BYD Tang" />
                          </div>
                          <span className="mega-menu-link">Learn More</span>
                        </div>
                      </a>

                      <a href="/models/radar-king-kong" onClick={closeMobileMenu} style={{textDecoration: 'none'}}>
                        <div className="mega-menu-item">
                          <h3 className="mega-menu-title">RADAR KING KONG</h3>
                          <div className="mega-menu-image">
                            <img src="/models/RADAR-KING-KONG/RADAR-KING-KONG.png" alt="Radar King Kong" />
                          </div>
                          <span className="mega-menu-link">Learn More</span>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Hybrid Cars Content */}
                  <div className={`mega-menu-content-wrapper ${activeFilter === 'hybrid' ? 'visible' : 'hidden'}`}>
                    <div className="mega-menu-grid">
                      <a href="/models/song-pro" onClick={closeMobileMenu} style={{textDecoration: 'none'}}>
                        <div className="mega-menu-item">
                          <h3 className="mega-menu-title">BYD SONG PRO</h3>
                          <div className="mega-menu-image">
                            <img src="/models/BYD-SONG-PRO/BYD-SONG-PRO.png" alt="BYD Song Pro" />
                          </div>
                          <span className="mega-menu-link">Learn More</span>
                        </div>
                      </a>

                      <a href="/models/leopard-ti7" onClick={closeMobileMenu} style={{textDecoration: 'none'}}>
                        <div className="mega-menu-item">
                          <h3 className="mega-menu-title">BYD LEOPARD TI7</h3>
                          <div className="mega-menu-image">
                            <img src="/models/BYD-LEOPARD-TI7/BYD-LEOPARD-TI7.png" alt="BYD Leopard Ti7" />
                          </div>
                          <span className="mega-menu-link">Learn More</span>
                        </div>
                      </a>

                      <a href="/models/yu8" onClick={closeMobileMenu} style={{textDecoration: 'none'}}>
                        <div className="mega-menu-item">
                          <h3 className="mega-menu-title">BYD YU8</h3>
                          <div className="mega-menu-image">
                            <img src="/models/BYD-YU8/BYD-YU8.png" alt="BYD YU8" />
                          </div>
                          <span className="mega-menu-link">Learn More</span>
                        </div>
                      </a>

                      <a href="/models/shark" onClick={closeMobileMenu} style={{textDecoration: 'none'}}>
                        <div className="mega-menu-item">
                          <h3 className="mega-menu-title">BYD SHARK</h3>
                          <div className="mega-menu-image">
                            <img src="/models/BYD-SHARK/BYD-SHARK.png" alt="BYD Shark" />
                          </div>
                          <span className="mega-menu-link">Learn More</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            
            <li>
              <a href="/about" onClick={closeMobileMenu}>About</a>
            </li>

            <li>
              <a href="/technology" onClick={closeMobileMenu}>Technology</a>
            </li>

            <li>
              <a href="/purchasing" onClick={closeMobileMenu}>Purchasing</a>
            </li>

            <li>
              <a href="/ownership" onClick={closeMobileMenu}>Ownership</a>
            </li>

            <li>
              <a href="/test-drive" onClick={closeMobileMenu}>Test Drive</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;