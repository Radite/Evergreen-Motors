import React, { useEffect } from 'react';

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

        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        .fade-in-section {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }

        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .luxury-hero {
          height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)),
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
          height: 200px;
          background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.8));
        }

        .hero-content {
          z-index: 1;
          max-width: 900px;
          padding: 2rem;
          animation: heroFade 1.5s ease-out;
        }

        @keyframes heroFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-content h1 {
          font-size: 5rem;
          margin-bottom: 1.5rem;
          font-weight: 300;
          letter-spacing: 8px;
          font-family: 'Cormorant Garamond', serif;
          text-shadow: 2px 2px 20px rgba(0,0,0,0.5);
        }

        .hero-content p {
          font-size: 1.4rem;
          margin-bottom: 3rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 2px;
          text-shadow: 1px 1px 10px rgba(0,0,0,0.5);
        }

        .cta-button {
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255,255,255,0.8);
          color: white;
          padding: 1.2rem 3rem;
          border-radius: 0;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          display: inline-block;
          font-family: 'Montserrat', sans-serif;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-weight: 500;
        }

        .cta-button:hover {
          background: rgba(255,255,255,0.95);
          color: #000;
          transform: translateY(-3px);
          box-shadow: 0 10px 40px rgba(255,255,255,0.3);
        }

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
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
                      url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000') center/cover;
          color: white;
        }

        .featured-section {
          background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
                      url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000') center/cover;
          color: white;
        }

        .stats-section {
          background: linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)),
                      url('https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=2000') center/cover;
        }

        .section-content {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .section-title {
          font-size: 4rem;
          text-align: center;
          margin-bottom: 1rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
        }

        .section-subtitle {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 5rem;
          font-size: 1.2rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
          opacity: 0.9;
        }

        .luxury-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
          margin-top: 4rem;
        }

        .luxury-card {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .luxury-card:hover {
          transform: translateY(-15px);
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.3);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }

        .card-icon {
          width: 100%;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.3) 0%, rgba(53, 122, 189, 0.3) 100%);
          transition: all 0.5s;
        }

        .luxury-card:hover .card-icon {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.5) 0%, rgba(53, 122, 189, 0.5) 100%);
          font-size: 4.5rem;
        }

        .card-content {
          padding: 2.5rem;
        }

        .card-title {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 2px;
        }

        .card-description {
          line-height: 1.8;
          opacity: 0.85;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .model-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
        }

        .model-card {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.15);
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .model-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.5s;
        }

        .model-card:hover::before {
          left: 100%;
        }

        .model-card:hover {
          transform: scale(1.03);
          border-color: rgba(255,255,255,0.3);
        }

        .model-image {
          width: 100%;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          font-weight: 300;
          letter-spacing: 4px;
          font-family: 'Cormorant Garamond', serif;
          color: white;
        }

        .model-info {
          padding: 2.5rem;
        }

        .model-name {
          font-size: 2rem;
          margin-bottom: 1rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 2px;
        }

        .model-description {
          opacity: 0.85;
          margin-bottom: 1.5rem;
          line-height: 1.8;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .learn-more {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          letter-spacing: 2px;
          font-size: 0.9rem;
          transition: all 0.3s;
          display: inline-block;
          font-family: 'Montserrat', sans-serif;
          text-transform: uppercase;
          border-bottom: 2px solid transparent;
        }

        .learn-more:hover {
          border-bottom-color: #fff;
          transform: translateX(5px);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 4rem;
          margin: 5rem 0;
        }

        .stat {
          text-align: center;
          padding: 3rem 2rem;
          background: rgba(0,0,0,0.03);
          border: 1px solid rgba(0,0,0,0.05);
          transition: all 0.4s;
        }

        .stat:hover {
          transform: translateY(-10px);
          background: rgba(74, 158, 255, 0.05);
          border-color: rgba(74, 158, 255, 0.2);
        }

        .stat-number {
          font-size: 4.5rem;
          font-weight: 300;
          color: #4a9eff;
          margin-bottom: 1rem;
          font-family: 'Cormorant Garamond', serif;
          letter-spacing: 3px;
        }

        .stat-label {
          font-size: 1.1rem;
          color: #333;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 3rem;
          }
          
          .section-title {
            font-size: 2.5rem;
          }

          .luxury-cards-grid,
          .model-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="luxury-hero">
        <div className="hero-content">
          <h1>Build Your Dreams</h1>
          <p>Leading the future of sustainable transportation with innovative electric vehicles</p>
          <a href="#models" className="cta-button">Explore Our Models</a>
        </div>
      </section>

      <section className="luxury-section diversification-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title">Diversification</h2>
          <p className="section-subtitle">
            BYD is a leading technology company devoted to leveraging innovations for a better life
          </p>
          <div className="luxury-cards-grid">
            <div className="luxury-card">
              <div className="card-icon">🚗</div>
              <div className="card-content">
                <h3 className="card-title">Auto</h3>
                <p className="card-description">
                  BYD became a key player in the transition from gas powered vehicles to electric vehicles by developing the cutting-edge Blade Battery and dual-mode hybrid power technology.
                </p>
              </div>
            </div>
            <div className="luxury-card">
              <div className="card-icon">🚄</div>
              <div className="card-content">
                <h3 className="card-title">Rail Transit</h3>
                <p className="card-description">
                  Innovative rail transit solutions providing sustainable and efficient urban transportation systems worldwide.
                </p>
              </div>
            </div>
            <div className="luxury-card">
              <div className="card-icon">☀️</div>
              <div className="card-content">
                <h3 className="card-title">Renewable Energy</h3>
                <p className="card-description">
                  Zero-emission solutions focused on energy generation and storage that are expansive and widely applicable.
                </p>
              </div>
            </div>
            <div className="luxury-card">
              <div className="card-icon">📱</div>
              <div className="card-content">
                <h3 className="card-title">Electronics</h3>
                <p className="card-description">
                  Advanced electronics and components driving innovation across multiple industries and applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="luxury-section featured-section fade-in-section" id="models">
        <div className="section-content">
          <h2 className="section-title">Featured Models</h2>
          <div className="model-cards-grid">
            <div className="model-card">
              <div className="model-image" style={{background: 'linear-gradient(135deg, #4a9eff 0%, #357abd 100%)'}}>
                ATTO 3
              </div>
              <div className="model-info">
                <h3 className="model-name">Atto 3</h3>
                <p className="model-description">
                  Compact electric SUV with advanced e-Platform 3.0 technology and impressive range.
                </p>
                <a href="#" className="learn-more">Learn More →</a>
              </div>
            </div>
            <div className="model-card">
              <div className="model-image" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
                SEAL U
              </div>
              <div className="model-info">
                <h3 className="model-name">Seal U</h3>
                <p className="model-description">
                  Premium electric sedan featuring cutting-edge design and intelligent systems.
                </p>
                <a href="#" className="learn-more">Learn More →</a>
              </div>
            </div>
            <div className="model-card">
              <div className="model-image" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}>
                TANG L
              </div>
              <div className="model-info">
                <h3 className="model-name">Tang L</h3>
                <p className="model-description">
                  Luxury electric SUV with spacious interior and advanced safety features.
                </p>
                <a href="#" className="learn-more">Learn More →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="luxury-section stats-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title">Why Choose BYD</h2>
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-number">27+</div>
              <div className="stat-label">Years of Expertise</div>
            </div>
            <div className="stat">
              <div className="stat-number">30+</div>
              <div className="stat-label">Industrial Parks</div>
            </div>
            <div className="stat">
              <div className="stat-number">6</div>
              <div className="stat-label">Continents</div>
            </div>
            <div className="stat">
              <div className="stat-number">1995</div>
              <div className="stat-label">Founded</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;