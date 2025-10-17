import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        .fade-in-section {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 1.2s ease-out, transform 1.2s ease-out;
        }

        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* HERO SECTION */
        .luxury-hero {
          height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)),
                      url('https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2000') center/cover;
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
          font-size: 1.5rem;
          letter-spacing: 6px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          text-transform: uppercase;
          color: #4a9eff;
          margin-bottom: 2rem;
        }

        .hero-content h1 {
          font-size: 7rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 15px;
          font-family: 'Cormorant Garamond', serif;
          text-shadow: 2px 2px 30px rgba(0,0,0,0.7);
          line-height: 1.2;
        }

        .hero-tagline {
          font-size: 1.8rem;
          margin-bottom: 3rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 3px;
          text-shadow: 1px 1px 15px rgba(0,0,0,0.7);
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.8;
        }

        .hero-cta-group {
          display: flex;
          gap: 2rem;
          justify-content: center;
          margin-top: 3rem;
        }

        .cta-button {
          padding: 1.5rem 3.5rem;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.5s ease;
          text-decoration: none;
          display: inline-block;
          font-family: 'Montserrat', sans-serif;
          letter-spacing: 3px;
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

        /* DIVERSIFICATION SECTION - Asymmetric grid */
        .luxury-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 8rem 5%;
          background-attachment: fixed;
        }

        .diversification-section {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
          color: white;
        }

        .section-content {
          max-width: 1600px;
          margin: 0 auto;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 6rem;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-label {
          font-size: 1rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #4a9eff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .section-title {
          font-size: 5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 10px;
          font-family: 'Cormorant Garamond', serif;
        }

        .section-subtitle {
          font-size: 1.4rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
          line-height: 2;
          opacity: 0.9;
        }

        .diversification-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: repeat(2, 400px);
          gap: 2rem;
        }

        .div-card-1 {
          grid-column: 1 / 7;
          grid-row: 1 / 2;
        }

        .div-card-2 {
          grid-column: 7 / 13;
          grid-row: 1 / 2;
        }

        .div-card-3 {
          grid-column: 1 / 5;
          grid-row: 2 / 3;
        }

        .div-card-4 {
          grid-column: 5 / 13;
          grid-row: 2 / 3;
        }

        .diversification-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 4rem 3rem;
          transition: all 0.6s ease;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .diversification-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.1) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .diversification-card:hover::before {
          opacity: 1;
        }

        .diversification-card:hover {
          transform: translateY(-10px);
          border-color: rgba(74, 158, 255, 0.5);
          box-shadow: 0 25px 70px rgba(74, 158, 255, 0.3);
        }

        .div-icon {
          font-size: 5rem;
          margin-bottom: 2rem;
          display: block;
        }

        .div-card-title {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 4px;
          position: relative;
          z-index: 1;
        }

        .div-card-description {
          font-size: 1.15rem;
          line-height: 1.9;
          opacity: 0.85;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          position: relative;
          z-index: 1;
        }

        /* FEATURED MODELS SECTION - Showcase grid */
        .featured-section {
          background: white;
        }

        .featured-section .section-title,
        .featured-section .section-label {
          color: #333;
        }

        .featured-section .section-subtitle {
          color: #666;
        }

        .featured-models-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4rem;
          margin-top: 5rem;
        }

        .featured-model-card {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          border: 1px solid rgba(0,0,0,0.08);
          overflow: hidden;
          transition: all 0.6s ease;
          text-decoration: none;
          color: inherit;
          display: block;
          position: relative;
        }

        .featured-model-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #4a9eff 0%, #357abd 100%);
          transform: scaleX(0);
          transition: transform 0.6s ease;
        }

        .featured-model-card:hover::after {
          transform: scaleX(1);
        }

        .featured-model-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 25px 70px rgba(74, 158, 255, 0.2);
        }

        .model-image-container {
          width: 100%;
          height: 350px;
          overflow: hidden;
          position: relative;
          background: linear-gradient(135deg, #4a9eff 0%, #357abd 100%);
        }

        .model-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
          opacity: 0.9;
        }

        .featured-model-card:hover .model-image-container img {
          transform: scale(1.1);
          opacity: 1;
        }

        .model-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3.5rem;
          font-weight: 300;
          letter-spacing: 8px;
          font-family: 'Cormorant Garamond', serif;
          color: white;
          text-shadow: 2px 2px 20px rgba(0,0,0,0.5);
        }

        .model-info {
          padding: 3rem;
        }

        .model-name {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 4px;
          color: #333;
        }

        .model-description {
          font-size: 1.1rem;
          line-height: 1.9;
          margin-bottom: 2rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          color: #666;
        }

        .model-link {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          color: #4a9eff;
          text-decoration: none;
          font-weight: 600;
          letter-spacing: 2px;
          font-size: 1rem;
          text-transform: uppercase;
          font-family: 'Montserrat', sans-serif;
          transition: all 0.4s ease;
        }

        .model-link::after {
          content: '→';
          font-size: 1.4rem;
          transition: transform 0.4s ease;
        }

        .featured-model-card:hover .model-link {
          gap: 1.5rem;
        }

        .featured-model-card:hover .model-link::after {
          transform: translateX(5px);
        }

        /* STATS SECTION - Split layout */
        .stats-section {
          background: linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)),
                      url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000') center/cover;
          color: white;
        }

        .stats-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .stats-text h2 {
          font-size: 5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 10px;
          font-family: 'Cormorant Garamond', serif;
        }

        .stats-text p {
          font-size: 1.3rem;
          line-height: 2;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          opacity: 0.9;
          margin-bottom: 3rem;
        }

        .stats-cta {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          padding: 1.3rem 3rem;
          background: rgba(74, 158, 255, 0.2);
          backdrop-filter: blur(20px);
          border: 2px solid #4a9eff;
          color: white;
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          transition: all 0.4s ease;
        }

        .stats-cta:hover {
          background: #4a9eff;
          transform: translateX(10px);
          box-shadow: 0 10px 40px rgba(74, 158, 255, 0.4);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
        }

        .stat-card {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255,255,255,0.15);
          padding: 4rem 3rem;
          text-align: center;
          transition: all 0.5s ease;
        }

        .stat-card:hover {
          transform: scale(1.05);
          background: rgba(74, 158, 255, 0.15);
          border-color: rgba(74, 158, 255, 0.5);
          box-shadow: 0 20px 60px rgba(74, 158, 255, 0.3);
        }

        .stat-number {
          font-size: 5.5rem;
          font-weight: 300;
          color: #4a9eff;
          margin-bottom: 1rem;
          font-family: 'Cormorant Garamond', serif;
          letter-spacing: 4px;
        }

        .stat-label {
          font-size: 1.2rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          opacity: 0.95;
        }

        /* EXPERIENCE SECTION - Full width callout */
        .experience-section {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.1) 0%, rgba(53, 122, 189, 0.1) 100%);
          padding: 10rem 5%;
          text-align: center;
        }

        .experience-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .experience-content h2 {
          font-size: 5.5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 12px;
          font-family: 'Cormorant Garamond', serif;
          color: #333;
        }

        .experience-content p {
          font-size: 1.5rem;
          line-height: 2;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          color: #666;
          margin-bottom: 4rem;
        }

        .experience-cta-group {
          display: flex;
          gap: 2rem;
          justify-content: center;
        }

        .experience-cta {
          padding: 1.5rem 3.5rem;
          font-size: 1.1rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.5s ease;
          border: 2px solid #4a9eff;
        }

        .experience-cta-primary {
          background: #4a9eff;
          color: white;
        }

        .experience-cta-primary:hover {
          background: #357abd;
          transform: translateY(-5px);
          box-shadow: 0 15px 50px rgba(74, 158, 255, 0.4);
        }

        .experience-cta-secondary {
          background: transparent;
          color: #4a9eff;
        }

        .experience-cta-secondary:hover {
          background: rgba(74, 158, 255, 0.1);
          transform: translateY(-5px);
        }

        @media (max-width: 1200px) {
          .diversification-grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
          }

          .div-card-1, .div-card-2, .div-card-3, .div-card-4 {
            grid-column: 1 / -1;
            grid-row: auto;
          }

          .stats-content {
            grid-template-columns: 1fr;
            gap: 4rem;
          }

          .featured-models-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 3.5rem;
            letter-spacing: 8px;
          }

          .section-title {
            font-size: 3rem;
            letter-spacing: 6px;
          }

          .hero-cta-group,
          .experience-cta-group {
            flex-direction: column;
            align-items: center;
          }

          .stats-grid {
            grid-template-columns: 1fr;
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
            generation of electric mobility with BYD at Evergreen Motors.
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

      {/* DIVERSIFICATION SECTION */}
      <section className="luxury-section diversification-section fade-in-section">
        <div className="section-content">
          <div className="section-header">
            <div className="section-label">Our Expertise</div>
            <h2 className="section-title">Global Innovation</h2>
            <p className="section-subtitle">
              BYD is a pioneering technology company devoted to leveraging sustainable innovations 
              for a better future. From revolutionary electric vehicles to renewable energy solutions, 
              we're leading the transformation across multiple industries worldwide.
            </p>
          </div>

          <div className="diversification-grid">
            <div className="diversification-card div-card-1">
              <div>
                <span className="div-icon">🚗</span>
                <h3 className="div-card-title">Automotive Excellence</h3>
                <p className="div-card-description">
                  As a global leader in electric vehicle technology, BYD pioneered the revolutionary 
                  Blade Battery and advanced dual-mode hybrid systems, setting new industry standards 
                  for safety, performance, and sustainability.
                </p>
              </div>
            </div>

            <div className="diversification-card div-card-2">
              <div>
                <span className="div-icon">🚄</span>
                <h3 className="div-card-title">Rail Transit</h3>
                <p className="div-card-description">
                  Innovative urban transportation solutions providing sustainable, efficient, and 
                  intelligent rail transit systems that transform how cities move.
                </p>
              </div>
            </div>

            <div className="diversification-card div-card-3">
              <div>
                <span className="div-icon">☀️</span>
                <h3 className="div-card-title">Renewable Energy</h3>
                <p className="div-card-description">
                  Comprehensive zero-emission energy generation and storage solutions deployed globally.
                </p>
              </div>
            </div>

            <div className="diversification-card div-card-4">
              <div>
                <span className="div-icon">📱</span>
                <h3 className="div-card-title">Advanced Electronics</h3>
                <p className="div-card-description">
                  Cutting-edge electronics manufacturing and component innovation driving progress 
                  across automotive, consumer, and industrial applications worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED MODELS SECTION */}
      <section className="luxury-section featured-section fade-in-section">
        <div className="section-content">
          <div className="section-header">
            <div className="section-label">Our Collection</div>
            <h2 className="section-title">Featured Models</h2>
            <p className="section-subtitle">
              Discover our exceptional lineup of electric vehicles — each engineered to perfection, 
              designed to inspire, and built to transform your driving experience.
            </p>
          </div>

          <div className="featured-models-grid">
            <Link to="/models/atto-3" className="featured-model-card">
              <div className="model-image-container">
                <img src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2000" alt="Atto 3" />
                <div className="model-overlay">ATTO 3</div>
              </div>
              <div className="model-info">
                <h3 className="model-name">Atto 3</h3>
                <p className="model-description">
                  The benchmark electric SUV featuring e-Platform 3.0 technology, exceptional 
                  versatility, and a 260-mile range.
                </p>
                <span className="model-link">Explore Model</span>
              </div>
            </Link>

            <Link to="/models/seal-u" className="featured-model-card">
              <div className="model-image-container">
                <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2000" alt="Seal U" />
                <div className="model-overlay">SEAL U</div>
              </div>
              <div className="model-info">
                <h3 className="model-name">Seal U</h3>
                <p className="model-description">
                  Premium electric sedan where sophisticated design meets exhilarating performance 
                  and 354 miles of pure electric range.
                </p>
                <span className="model-link">Explore Model</span>
              </div>
            </Link>

            <Link to="/models/tang-l" className="featured-model-card">
              <div className="model-image-container">
                <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000" alt="Tang L" />
                <div className="model-overlay">TANG L</div>
              </div>
              <div className="model-info">
                <h3 className="model-name">Tang L</h3>
                <p className="model-description">
                  Spacious luxury with three rows of premium comfort, cutting-edge technology, 
                  and commanding 7-seater presence.
                </p>
                <span className="model-link">Explore Model</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="luxury-section stats-section fade-in-section">
        <div className="section-content">
          <div className="stats-content">
            <div className="stats-text">
              <h2>Why Evergreen Motors</h2>
              <p>
                As your authorized BYD dealership, we bring decades of innovation, global 
                expertise, and uncompromising commitment to sustainable transportation. 
                Join millions worldwide who have chosen the future of mobility.
              </p>
              <Link to="/about" className="stats-cta">
                Our Story →
              </Link>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">30+</div>
                <div className="stat-label">Years Innovation</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">70+</div>
                <div className="stat-label">Countries Worldwide</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">6M+</div>
                <div className="stat-label">Vehicles Delivered</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">#1</div>
                <div className="stat-label">Global EV Leader</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="experience-section fade-in-section">
        <div className="experience-content">
          <h2>Experience Excellence</h2>
          <p>
            Visit Evergreen Motors today and discover why BYD is redefining electric mobility. 
            From our exceptional vehicle lineup to our commitment to service, we're here to 
            guide you into the future of sustainable driving.
          </p>
          <div className="experience-cta-group">
            <Link to="/test-drive" className="experience-cta experience-cta-primary">
              Schedule Test Drive
            </Link>
            <Link to="/locations" className="experience-cta experience-cta-secondary">
              Find a Location
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;