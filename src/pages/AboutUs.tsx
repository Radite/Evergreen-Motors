import React, { useEffect } from 'react';

const AboutUs = () => {
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
          transition: opacity 1s ease-out, transform 1s ease-out;
        }

        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .luxury-about-hero {
          height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4)),
                      url('https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=2000') center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          position: relative;
          background-attachment: fixed;
        }

        .about-content {
          max-width: 1100px;
          padding: 3rem;
          z-index: 1;
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

        .about-content h1 {
          font-size: 5.5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 10px;
          font-family: 'Cormorant Garamond', serif;
          text-shadow: 2px 2px 20px rgba(0,0,0,0.5);
        }

        .about-content p {
          font-size: 1.3rem;
          line-height: 2;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
          text-shadow: 1px 1px 10px rgba(0,0,0,0.5);
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

        .mission-section {
          background: linear-gradient(rgba(255,255,255,0.97), rgba(255,255,255,0.97)),
                      url('https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2000') center/cover;
        }

        .business-section {
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
                      url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000') center/cover;
          color: white;
        }

        .global-section {
          background: linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)),
                      url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000') center/cover;
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
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
        }

        .section-subtitle {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 5rem;
          font-size: 1.3rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
          line-height: 2;
          color: #666;
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

        @media (max-width: 768px) {
          .about-content h1 {
            font-size: 3rem;
          }
          
          .section-title {
            font-size: 2.5rem;
          }

          .luxury-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="luxury-about-hero">
        <div className="about-content">
          <h1>About BYD</h1>
          <p>
            Founded in 1995, BYD is a leading technology company devoted to leveraging innovations for a better life. 
            With more than 27 years of expertise, BYD has established itself as an industry leader in electronics, 
            automotives, renewable energy, and rail transit. As a global leader with more than 30 industrial parks 
            across 6 continents, BYD's zero-emission solutions, focused on energy generation and storage, are 
            expansive and widely applicable.
          </p>
        </div>
      </div>

      <section className="luxury-section mission-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-subtitle">
            To leverage technology innovations for a better life by providing zero-emission energy solutions and 
            sustainable transportation options that help create a cleaner, greener world for future generations.
          </p>
          
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-number">1995</div>
              <div className="stat-label">Year Founded</div>
            </div>
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
          </div>
        </div>
      </section>

      <section className="luxury-section business-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title">Our Business Areas</h2>
          <div className="luxury-cards-grid">
            <div className="luxury-card">
              <div className="card-icon">🚗</div>
              <div className="card-content">
                <h3 className="card-title">Automotive</h3>
                <p className="card-description">
                  Leading manufacturer of electric vehicles with innovative Blade Battery technology 
                  and comprehensive NEV solutions.
                </p>
              </div>
            </div>
            <div className="luxury-card">
              <div className="card-icon">🔋</div>
              <div className="card-content">
                <h3 className="card-title">Renewable Energy</h3>
                <p className="card-description">
                  Advanced energy storage systems and solar solutions for sustainable power generation 
                  and distribution.
                </p>
              </div>
            </div>
            <div className="luxury-card">
              <div className="card-icon">🚄</div>
              <div className="card-content">
                <h3 className="card-title">Rail Transit</h3>
                <p className="card-description">
                  Innovative urban rail transit solutions including SkyRail monorail systems for 
                  sustainable city transportation.
                </p>
              </div>
            </div>
            <div className="luxury-card">
              <div className="card-icon">📱</div>
              <div className="card-content">
                <h3 className="card-title">Electronics</h3>
                <p className="card-description">
                  High-quality electronic components and assembly services for leading global 
                  technology brands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="luxury-section global-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title">Global Presence</h2>
          <p className="section-subtitle">
            BYD operates in over 70 countries and regions with more than 30 industrial parks strategically 
            located across 6 continents. Our global presence enables us to serve customers worldwide while 
            maintaining our commitment to quality, innovation, and sustainability. From North America to 
            Europe, Asia to South America, BYD continues to expand its footprint in the global transition 
            to clean energy and sustainable transportation.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;