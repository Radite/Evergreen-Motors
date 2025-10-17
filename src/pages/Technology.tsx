import React, { useEffect } from 'react';

const Technology = () => {
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

        .luxury-tech-hero {
          height: 70vh;
          background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)),
                      url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000') center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          position: relative;
          background-attachment: fixed;
        }

        .hero-content {
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

        .hero-content h1 {
          font-size: 5rem;
          margin-bottom: 1rem;
          font-weight: 300;
          letter-spacing: 10px;
          font-family: 'Cormorant Garamond', serif;
          text-shadow: 2px 2px 20px rgba(0,0,0,0.5);
        }

        .hero-content p {
          font-size: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 3px;
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

        .platform-section {
          background: linear-gradient(rgba(255,255,255,0.97), rgba(255,255,255,0.97)),
                      url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2000') center/cover;
        }

        .cockpit-section {
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
                      url('https://images.unsplash.com/photo-1519003300449-424ad0405076?q=80&w=2000') center/cover;
          color: white;
        }

        .nev-section {
          background: linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)),
                      url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2000') center/cover;
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
          margin-bottom: 4rem;
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

        .tech-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
          margin-bottom: 5rem;
        }

        .tech-content {
          background: rgba(255,255,255,0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0,0,0,0.05);
          padding: 3rem;
        }

        .tech-content h3 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          font-weight: 300;
          letter-spacing: 3px;
          font-family: 'Cormorant Garamond', serif;
          color: #4a9eff;
        }

        .tech-content p {
          font-size: 1.2rem;
          line-height: 2;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .tech-visual {
          width: 100%;
          height: 400px;
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.2) 0%, rgba(53, 122, 189, 0.2) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
          border: 1px solid rgba(0,0,0,0.05);
          transition: all 0.5s;
        }

        .tech-visual:hover {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.3) 0%, rgba(53, 122, 189, 0.3) 100%);
          font-size: 5.5rem;
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
          .hero-content h1 {
            font-size: 3rem;
          }
          
          .section-title {
            font-size: 2.5rem;
          }

          .tech-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .luxury-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="luxury-tech-hero">
        <div className="hero-content">
          <h1>Technology</h1>
          <p>Innovation driving the future of mobility</p>
        </div>
      </div>

      <section className="luxury-section platform-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title">e-Platform 3.0</h2>
          
          <div className="tech-grid">
            <div className="tech-content">
              <h3>Safety</h3>
              <p>
                The e-Platform 3.0 integrates ultra-safe Blade batteries into the chassis, forming a robust and unique body structure that enhances overall vehicle safety and crash protection.
              </p>
            </div>
            <div className="tech-visual">
              🛡️
            </div>
          </div>

          <div className="tech-grid">
            <div className="tech-visual">
              ⚡
            </div>
            <div className="tech-content">
              <h3>High Efficiency</h3>
              <p>
                The new platform enables ranges exceeding 620 miles through the world's first 8-in-1 electric powertrain, delivering exceptional efficiency and performance.
              </p>
            </div>
          </div>

          <div className="tech-grid">
            <div className="tech-content">
              <h3>Intelligence</h3>
              <p>
                BYD's advanced operating system enhances the driving experience. The vehicle's computer system continuously monitors environmental input to optimize for the driver's conditions and comfort.
              </p>
            </div>
            <div className="tech-visual">
              🤖
            </div>
          </div>

          <div className="tech-grid">
            <div className="tech-visual">
              ✨
            </div>
            <div className="tech-content">
              <h3>Aesthetics</h3>
              <p>
                This design prioritizes both passenger comfort and vehicle efficiency. Shorter overhangs and a longer wheelbase significantly expand the inside space of the vehicle and decrease the drag coefficient to 0.21 Cd.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="luxury-section cockpit-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title">BYD Intelligent Cockpit System</h2>
          <p className="section-subtitle" style={{color: 'rgba(255,255,255,0.9)'}}>
            Seamlessly integrates smartphone functions into the vehicle's platform
          </p>
          
          <div className="luxury-cards-grid">
            <div className="luxury-card">
              <div className="card-icon">📱</div>
              <div className="card-content">
                <h3 className="card-title">Connectivity</h3>
                <p className="card-description">
                  Advanced integration with your smartphone for seamless connectivity and control.
                </p>
              </div>
            </div>
            <div className="luxury-card">
              <div className="card-icon">🗺️</div>
              <div className="card-content">
                <h3 className="card-title">Navigation</h3>
                <p className="card-description">
                  Intelligent navigation system with real-time traffic and route optimization.
                </p>
              </div>
            </div>
            <div className="luxury-card">
              <div className="card-icon">🎵</div>
              <div className="card-content">
                <h3 className="card-title">Entertainment</h3>
                <p className="card-description">
                  Premium audio system with streaming integration for the ultimate driving experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="luxury-section nev-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title">NEVs (New Energy Vehicles)</h2>
          <p className="section-subtitle">
            BYD is at the forefront of the New Energy Vehicle revolution, pioneering advanced battery technology, 
            electric powertrains, and sustainable manufacturing processes. Our commitment to innovation has made us 
            a global leader in electric vehicle technology, helping to reduce carbon emissions and create a cleaner 
            future for generations to come.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Technology;