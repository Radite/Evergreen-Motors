import React, { useState, useEffect, useRef } from 'react';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const [activeFilter, setActiveFilter] = useState('electric');
  const [mobileModelsExpanded, setMobileModelsExpanded] = useState(false);
  const [mobileElectricExpanded, setMobileElectricExpanded] = useState(false);
  const [mobileHybridExpanded, setMobileHybridExpanded] = useState(false);
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

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setMobileModelsExpanded(false);
        setMobileElectricExpanded(false);
        setMobileHybridExpanded(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setDropdownOpen(false);
    setMobileModelsExpanded(false);
    setMobileElectricExpanded(false);
    setMobileHybridExpanded(false);
  };

  const toggleDropdown = (e) => {
    if (window.innerWidth <= 1023) {
      e.preventDefault();
      setDropdownOpen(!dropdownOpen);
    }
  };

  const toggleMobileModels = (e) => {
    e.preventDefault();
    setMobileModelsExpanded(!mobileModelsExpanded);
    if (!mobileModelsExpanded) {
      setMobileElectricExpanded(false);
      setMobileHybridExpanded(false);
    }
  };

  const toggleMobileElectric = (e) => {
    e.preventDefault();
    setMobileElectricExpanded(!mobileElectricExpanded);
    if (!mobileElectricExpanded) {
      setMobileHybridExpanded(false);
    }
  };

  const toggleMobileHybrid = (e) => {
    e.preventDefault();
    setMobileHybridExpanded(!mobileHybridExpanded);
    if (!mobileHybridExpanded) {
      setMobileElectricExpanded(false);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    setActiveFilter('electric');
    setMobileModelsExpanded(false);
    setMobileElectricExpanded(false);
    setMobileHybridExpanded(false);
  };

  const handleDropdownEnter = () => {
    setActiveFilter('electric');
  };

  return (
    <>
      <style>{`
        /* Base Navigation Styles */
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 3%;
          max-width: 100%;
          margin: 0 auto;
        }

        .logo-text {
          font-size: 2rem;
          font-weight: 900;
          letter-spacing: 8px;
          color: #fff;
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.3s ease;
          z-index: 1001;
        }

        .logo-text:hover {
          color: #4a9eff;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 2.5rem;
          align-items: center;
        }

        .nav-menu li {
          position: relative;
        }

        .nav-menu a {
          color: #fff;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 0.5rem 0;
          transition: color 0.3s ease;
          display: block;
        }

        .nav-menu a:hover {
          color: #4a9eff;
        }

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
            border-radius: 0;
            margin-bottom: 1rem;
            transition: transform 0.3s ease;
          }

          .mega-menu-item:hover .mega-menu-image {
            transform: scale(1.05);
          }

          .mega-menu-image img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }

          .mega-menu-link {
            display: block;
            text-align: center;
            color: #4a9eff;
            font-size: 0.85rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: color 0.3s ease;
          }

          .mega-menu-item:hover .mega-menu-link {
            color: #1a73e8;
          }

          /* Hide mobile elements on desktop */
          .mobile-submenu,
          .mobile-arrow,
          .mobile-category-header,
          .mobile-models-link {
            display: none !important;
          }

          .desktop-models-link {
            display: block !important;
          }
        }

        /* Mobile and Tablet Styles */
        @media (max-width: 1023px) {
          .mobile-menu-toggle {
            display: block;
          }

          .nav-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 85%;
            max-width: 400px;
            height: 100vh;
            background: rgba(0, 0, 0, 0.98);
            display: flex !important;
            flex-direction: column !important;
            align-items: stretch !important;
            padding: 5rem 0 2rem;
            gap: 0 !important;
            transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            overflow-y: auto;
            overflow-x: hidden;
            box-shadow: -5px 0 15px rgba(0,0,0,0.3);
          }

          .nav-menu.open {
            right: 0;
          }

          .nav-menu li {
            border-bottom: 1px solid rgba(255,255,255,0.1);
            width: 100%;
            flex-shrink: 0;
          }

          .nav-menu > li > a {
            padding: 1.2rem 2rem;
            font-size: 1.1rem;
            width: 100%;
            box-sizing: border-box;
          }

          /* Mobile Models Menu */
          .desktop-models-link {
            display: none !important;
          }

          .mobile-models-link {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.2rem 2rem;
            font-size: 1.1rem;
            cursor: pointer;
            color: #fff;
            font-weight: 600;
            letter-spacing: 1px;
            text-transform: uppercase;
            transition: color 0.3s ease;
            width: 100%;
            box-sizing: border-box;
          }

          .mobile-models-link:hover {
            color: #4a9eff;
          }

          .mobile-arrow {
            font-size: 1.2rem;
            transition: transform 0.3s ease;
            display: inline-block;
            color: #fff;
            flex-shrink: 0;
          }

          .mobile-arrow.open {
            transform: rotate(180deg);
          }

          /* Mobile Submenu */
          .mobile-submenu {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            background: #f5f5f5;
            width: 100%;
          }

          .mobile-submenu.expanded {
            max-height: 3000px;
          }

          /* Mobile Category Headers (Electric/Hybrid) */
          .mobile-category-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.25rem 1.5rem;
            background: #e8e8e8;
            border-left: 4px solid #4a9eff;
            cursor: pointer;
            transition: background 0.3s ease;
            width: 100%;
            box-sizing: border-box;
          }

          .mobile-category-header:hover {
            background: #d8d8d8;
          }

          .mobile-category-header h3 {
            margin: 0;
            font-size: 1.1rem;
            font-weight: 700;
            color: #1a1a1a;
            text-transform: uppercase;
            letter-spacing: 1.5px;
          }

          .mobile-category-header .mobile-arrow {
            color: #1a1a1a;
          }

          /* Mobile Car Models Grid */
          .mobile-models-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 0;
            background: #f5f5f5;
            width: 100%;
          }

          .mobile-model-item {
            padding: 1.5rem 1.5rem;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            transition: background 0.3s ease;
            background: #fff;
            width: 100%;
            box-sizing: border-box;
          }

          .mobile-model-item:hover {
            background: #e8f4ff;
          }

          .mobile-model-item a {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            text-decoration: none;
            padding: 0;
            width: 100%;
          }

          .mobile-model-image {
            width: 140px;
            height: 90px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f5f5f5;
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid rgba(0,0,0,0.1);
          }

          .mobile-model-image img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }

          .mobile-model-name {
            font-size: 1.1rem;
            font-weight: 700;
            color: #1a1a1a;
            letter-spacing: 0.5px;
            flex: 1;
          }

          /* Desktop mega menu hidden on mobile */
          .dropdown-content {
            display: none !important;
          }

          .mega-menu-sidebar,
          .mega-menu-main {
            display: none !important;
          }
        }

        /* Tablet Landscape Adjustments */
        @media (min-width: 768px) and (max-width: 1023px) and (orientation: landscape) {
          .nav-menu {
            width: 60%;
            max-width: 500px;
          }

          .mobile-models-grid {
            grid-template-columns: 1fr;
          }

          .mobile-model-item {
            padding: 1.5rem 1.5rem;
          }

          .mobile-model-image {
            width: 140px;
            height: 90px;
          }

          .mobile-model-name {
            font-size: 1.1rem;
          }
        }

        /* Small Mobile Adjustments */
        @media (max-width: 479px) {
          .logo-text {
            font-size: 1.4rem;
            letter-spacing: 4px;
          }

          .nav-menu {
            width: 90%;
          }

          .mobile-model-image {
            width: 120px;
            height: 80px;
          }

          .mobile-model-name {
            font-size: 1rem;
          }

          .mobile-model-item {
            padding: 1.25rem 1rem;
          }

          .mobile-model-item a {
            gap: 1rem;
          }
        }

        /* Medium devices */
        @media (max-width: 1023px) {
          .logo-text {
            font-size: 1.8rem;
            letter-spacing: 6px;
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

          <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
            {/* Models Dropdown/Menu */}
            <li className={`dropdown ${dropdownOpen ? 'active' : ''}`} onMouseEnter={handleDropdownEnter}>
              {/* Desktop Version */}
              <a 
                href="/models" 
                onClick={toggleDropdown}
                className="desktop-models-link"
              >
                Models
              </a>
              
              {/* Mobile Version */}
              <div 
                className="mobile-models-link"
                onClick={toggleMobileModels}
              >
                <span>Models</span>
                <span className={`mobile-arrow ${mobileModelsExpanded ? 'open' : ''}`}>▼</span>
              </div>

              {/* Desktop Mega Menu */}
              <div className="dropdown-content">
                <div className="mega-menu-sidebar">
                  <div 
                    className={`mega-menu-section ${activeFilter === 'electric' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('electric')}
                    onMouseEnter={() => setActiveFilter('electric')}
                  >
                    <h2 className="mega-menu-section-title">Electric Cars</h2>
                  </div>
                  <div 
                    className={`mega-menu-section ${activeFilter === 'hybrid' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('hybrid')}
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



                      <a href="/models/seal-u" onClick={closeMobileMenu} style={{textDecoration: 'none'}}>
                        <div className="mega-menu-item">
                          <h3 className="mega-menu-title">BYD SEAL U</h3>
                          <div className="mega-menu-image">
                            <img src="/models/BYD-SEAL-U/BYD-SEAL-U.png" alt="BYD Seal U" />
                          </div>
                          <span className="mega-menu-link">Learn More</span>
                        </div>
                      </a>

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

              {/* Mobile Submenu */}
              <div className={`mobile-submenu ${mobileModelsExpanded ? 'expanded' : ''}`}>
                {/* Electric Cars Section */}
                <div>
                  <div 
                    className="mobile-category-header"
                    onClick={toggleMobileElectric}
                  >
                    <h3>Electric Cars</h3>
                    <span className={`mobile-arrow ${mobileElectricExpanded ? 'open' : ''}`}>▼</span>
                  </div>
                  <div className={`mobile-submenu ${mobileElectricExpanded ? 'expanded' : ''}`}>
                    <div className="mobile-models-grid">
                      <div className="mobile-model-item">
                        <a href="/models/dolphin-mini" onClick={closeMobileMenu}>
                          <div className="mobile-model-image">
                            <img src="/models/BYD-DOLPHIN-MINI/BYD-DOLPHIN-MINI.png" alt="BYD Dolphin Mini" />
                          </div>
                          <span className="mobile-model-name">BYD DOLPHIN MINI</span>
                        </a>
                      </div>
                      <div className="mobile-model-item">
                        <a href="/models/atto-2" onClick={closeMobileMenu}>
                          <div className="mobile-model-image">
                            <img src="/models/BYD-ATTO-2/BYD_ATTO_2.png" alt="BYD Atto 2" />
                          </div>
                          <span className="mobile-model-name">BYD ATTO 2</span>
                        </a>
                      </div>
                      <div className="mobile-model-item">
                        <a href="/models/atto-3" onClick={closeMobileMenu}>
                          <div className="mobile-model-image">
                            <img src="/models/BYD-ATTO3/BYD-ATTO3.png" alt="BYD Atto 3" />
                          </div>
                          <span className="mobile-model-name">BYD ATTO 3</span>
                        </a>
                      </div>
                      <div className="mobile-model-item">
                        <a href="/models/icar-03" onClick={closeMobileMenu}>
                          <div className="mobile-model-image">
                            <img src="/models/ICAR-03/ICAR-03.png" alt="iCAR 03" />
                          </div>
                          <span className="mobile-model-name">iCAR 03</span>
                        </a>
                      </div>
                      <div className="mobile-model-item">
                        <a href="/models/seal-u" onClick={closeMobileMenu}>
                          <div className="mobile-model-image">
                            <img src="/models/BYD-SEAL-U/BYD-SEAL-U.png" alt="BYD Seal U" />
                          </div>
                          <span className="mobile-model-name">BYD SEAL U</span>
                        </a>
                      </div>
                      <div className="mobile-model-item">
                        <a href="/models/sealion-07" onClick={closeMobileMenu}>
                          <div className="mobile-model-image">
                            <img src="/models/BYD-SEALION-07/BYD-SEALION-07.png" alt="BYD Sealion 07" />
                          </div>
                          <span className="mobile-model-name">BYD SEALION 07</span>
                        </a>
                      </div>
                      <div className="mobile-model-item">
                        <a href="/models/tang" onClick={closeMobileMenu}>
                          <div className="mobile-model-image">
                            <img src="/models/BYD-TANG/BYD-TANG.png" alt="BYD Tang" />
                          </div>
                          <span className="mobile-model-name">BYD TANG</span>
                        </a>
                      </div>
                      <div className="mobile-model-item">
                        <a href="/models/radar-king-kong" onClick={closeMobileMenu}>
                          <div className="mobile-model-image">
                            <img src="/models/RADAR-KING-KONG/RADAR-KING-KONG.png" alt="Radar King Kong" />
                          </div>
                          <span className="mobile-model-name">RADAR KING KONG</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hybrid Cars Section */}
                <div>
                  <div 
                    className="mobile-category-header"
                    onClick={toggleMobileHybrid}
                  >
                    <h3>Hybrid Cars</h3>
                    <span className={`mobile-arrow ${mobileHybridExpanded ? 'open' : ''}`}>▼</span>
                  </div>
                  <div className={`mobile-submenu ${mobileHybridExpanded ? 'expanded' : ''}`}>
                    <div className="mobile-models-grid">
                      <div className="mobile-model-item">
                        <a href="/models/song-pro" onClick={closeMobileMenu}>
                          <div className="mobile-model-image">
                            <img src="/models/BYD-SONG-PRO/BYD-SONG-PRO.png" alt="BYD Song Pro" />
                          </div>
                          <span className="mobile-model-name">BYD SONG PRO</span>
                        </a>
                      </div>
                      <div className="mobile-model-item">
                        <a href="/models/leopard-ti7" onClick={closeMobileMenu}>
                          <div className="mobile-model-image">
                            <img src="/models/BYD-LEOPARD-TI7/BYD-LEOPARD-TI7.png" alt="BYD Leopard Ti7" />
                          </div>
                          <span className="mobile-model-name">BYD LEOPARD TI7</span>
                        </a>
                      </div>
                      <div className="mobile-model-item">
                        <a href="/models/yu8" onClick={closeMobileMenu}>
                          <div className="mobile-model-image">
                            <img src="/models/BYD-YU8/BYD-YU8.png" alt="BYD YU8" />
                          </div>
                          <span className="mobile-model-name">BYD YU8</span>
                        </a>
                      </div>
                      <div className="mobile-model-item">
                        <a href="/models/shark" onClick={closeMobileMenu}>
                          <div className="mobile-model-image">
                            <img src="/models/BYD-SHARK/BYD-SHARK.png" alt="BYD Shark" />
                          </div>
                          <span className="mobile-model-name">BYD SHARK</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            
<li><a href="/technology" onClick={closeMobileMenu}>Technology</a></li>
<li><a href="/purchasing" onClick={closeMobileMenu}>Purchasing</a></li>
<li><a href="/ownership" onClick={closeMobileMenu}>Ownership</a></li>
<li><a href="/about" onClick={closeMobileMenu}>About</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;