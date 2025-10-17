import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        /* HERO SECTION */
        .luxury-hero {
          height: 95vh;
          background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)),
                      url('/HeroBackground.png') center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          position: relative;
          background-attachment: fixed;
        }

        .luxury-hero::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 250px;
          background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.9));
        }

        .hero-content {
          z-index: 1;
          max-width: 1200px;
          padding: 3rem;
          animation: heroFade 2s ease-out;
        }

        @keyframes heroFade {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-logo {
          font-size: 1.1rem;
          letter-spacing: 4px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          text-transform: uppercase;
          color: #4a9eff;
          margin-bottom: 1.5rem;
        }

        .hero-content h1 {
          font-size: 5rem;
          margin-bottom: 1.5rem;
          font-weight: 300;
          letter-spacing: 12px;
          font-family: 'Cormorant Garamond', serif;
          text-shadow: 2px 2px 30px rgba(0,0,0,0.7);
          line-height: 1.2;
        }

        .hero-tagline {
          font-size: 1.3rem;
          margin-bottom: 2.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 2px;
          text-shadow: 1px 1px 15px rgba(0,0,0,0.7);
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
        }

        .hero-cta-group {
          display: flex;
          gap: 2rem;
          justify-content: center;
          margin-top: 3rem;
        }

        .cta-button {
          padding: 1.2rem 2.8rem;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.5s ease;
          text-decoration: none;
          display: inline-block;
          font-family: 'Montserrat', sans-serif;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 600;
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-primary {
          background: rgba(74, 158, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 2px solid #4a9eff;
          color: white;
        }

        .cta-primary:hover {
          background: #4a9eff;
          transform: translateY(-5px);
          box-shadow: 0 15px 50px rgba(74, 158, 255, 0.4);
        }

        .cta-secondary {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255,255,255,0.8);
          color: white;
        }

        .cta-secondary:hover {
          background: rgba(255,255,255,0.95);
          color: #000;
          transform: translateY(-5px);
          box-shadow: 0 15px 50px rgba(255,255,255,0.3);
        }

        /* STATS SECTION */
        .stats-section {
          min-height: 80vh;
          background: url('/bottom-bannerPC.jpg') center/cover;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
            letter-spacing: 6px;
          }

          .hero-cta-group {
            flex-direction: column;
            align-items: center;
          }

          .luxury-hero,
          .stats-section {
            background-attachment: scroll;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="luxury-hero">
        <div className="hero-content">
          <div className="hero-logo">Evergreen Motors</div>
          <h1>Drive the Future</h1>
          <p className="hero-tagline">
            Where sustainable innovation meets uncompromising luxury. Experience the next 
            generation of electric mobility at Evergreen Motors.
          </p>
          <div className="hero-cta-group">
            <Link to="/models" className="cta-button cta-primary">
              Explore Collection
            </Link>
            <Link to="/test-drive" className="cta-button cta-secondary">
              Schedule Test Drive
            </Link>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats-section"></section>
    </div>
  );
};

export default Home;