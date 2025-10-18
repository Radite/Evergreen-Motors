import { useEffect } from 'react';

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

        .luxury-tech-hero {
          height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)),
                      url('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2400') center/cover;
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
          animation: heroFade 1.8s ease-out;
          max-width: 1200px;
          padding: 0 3rem;
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

        .hero-content h1 {
          font-size: 6rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 15px;
          font-family: 'Cormorant Garamond', serif;
          text-shadow: 2px 2px 20px rgba(0,0,0,0.5);
        }

        .hero-content .subtitle {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #4a9eff;
        }

        .hero-content p {
          font-size: 1.3rem;
          line-height: 1.8;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
          text-shadow: 1px 1px 10px rgba(0,0,0,0.5);
          max-width: 900px;
          margin: 0 auto;
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
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
          color: white;
        }

        .platform-header {
          text-align: center;
          margin-bottom: 8rem;
        }

        .platform-header h2 {
          font-size: 5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 8px;
          font-family: 'Cormorant Garamond', serif;
          background: linear-gradient(135deg, #4a9eff 0%, #00d4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .platform-subtitle {
          font-size: 1.4rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 2px;
          opacity: 0.8;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
          margin-bottom: 8rem;
        }

        .tech-grid:last-child {
          margin-bottom: 0;
        }

        .tech-content {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.05) 0%, rgba(53, 122, 189, 0.05) 100%);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(74, 158, 255, 0.2);
          padding: 4rem;
          position: relative;
          overflow: hidden;
          transition: all 0.5s ease;
        }

        .tech-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(74, 158, 255, 0.1), transparent);
          transition: left 0.6s ease;
        }

        .tech-content:hover::before {
          left: 100%;
        }

        .tech-content:hover {
          border-color: rgba(74, 158, 255, 0.5);
          box-shadow: 0 20px 60px rgba(74, 158, 255, 0.2);
          transform: translateX(10px);
        }

        .tech-number {
          position: absolute;
          top: 1rem;
          right: 1.5rem;
          font-size: 1rem;
          color: #4a9eff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
        }

        .tech-content h3 {
          font-size: 3rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 4px;
          font-family: 'Cormorant Garamond', serif;
          color: #4a9eff;
        }

        .tech-content p {
          font-size: 1.2rem;
          line-height: 2;
          color: rgba(255,255,255,0.85);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .tech-visual {
          width: 100%;
          height: 500px;
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%);
          border: 2px solid rgba(74, 158, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          transition: all 0.5s ease;
          background-size: cover;
          background-position: center;
        }

        .tech-visual::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%);
        }

        .tech-visual:hover {
          border-color: rgba(74, 158, 255, 0.6);
          box-shadow: 0 0 60px rgba(74, 158, 255, 0.4);
        }

        .blade-section {
          background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
          color: white;
          padding: 8rem 5%;
        }

        .blade-split {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 6rem;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
        }

        .blade-content h2 {
          font-size: 5rem;
          margin-bottom: 3rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          line-height: 1.2;
        }

        .highlight {
          background: linear-gradient(135deg, #4a9eff 0%, #00d4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .blade-content > p {
          font-size: 1.3rem;
          line-height: 2;
          color: rgba(255,255,255,0.8);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          margin-bottom: 4rem;
        }

        .blade-features {
          display: grid;
          gap: 3rem;
        }

        .blade-feature {
          display: flex;
          align-items: flex-start;
          gap: 2rem;
        }

        .blade-feature-icon {
          font-size: 3rem;
          min-width: 60px;
        }

        .blade-feature-text h4 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          font-weight: 500;
          font-family: 'Cormorant Garamond', serif;
          letter-spacing: 2px;
        }

        .blade-feature-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.7);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .blade-visual {
          width: 100%;
          height: 600px;
          background: url('https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?q=80&w=1200') center/cover;
          border: 2px solid rgba(74, 158, 255, 0.3);
          position: relative;
          overflow: hidden;
        }

        .blade-visual::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.5) 100%);
        }

        .nev-section {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
          color: white;
          text-align: center;
        }

        .nev-container {
          max-width: 1200px;
        }

        .nev-container h2 {
          font-size: 5rem;
          margin-bottom: 3rem;
          font-weight: 300;
          letter-spacing: 8px;
          font-family: 'Cormorant Garamond', serif;
          background: linear-gradient(135deg, #4a9eff 0%, #00d4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nev-subtitle {
          font-size: 1.4rem;
          line-height: 2;
          color: rgba(255,255,255,0.8);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          margin-bottom: 5rem;
        }

        .nev-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4rem;
          margin-top: 5rem;
        }

        .nev-stat {
          padding: 3rem 2rem;
          background: rgba(74, 158, 255, 0.05);
          border: 1px solid rgba(74, 158, 255, 0.2);
          transition: all 0.4s;
        }

        .nev-stat:hover {
          transform: translateY(-10px);
          background: rgba(74, 158, 255, 0.1);
          border-color: rgba(74, 158, 255, 0.4);
          box-shadow: 0 20px 60px rgba(74, 158, 255, 0.3);
        }

        .nev-stat-number {
          font-size: 4.5rem;
          font-weight: 300;
          color: #4a9eff;
          margin-bottom: 1rem;
          font-family: 'Cormorant Garamond', serif;
          letter-spacing: 3px;
        }

        .nev-stat-label {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.8);
          letter-spacing: 2px;
          text-transform: uppercase;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
        }

        .fade-in-section {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 1s ease, transform 1s ease;
        }

        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 1024px) {
          .tech-grid,
          .blade-split {
            grid-template-columns: 1fr;
            gap: 4rem;
          }

          .nev-stats {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .hero-content h1 {
            font-size: 4rem;
            letter-spacing: 8px;
          }

          .platform-header h2,
          .nev-container h2 {
            font-size: 3.5rem;
          }

          .tech-content h3,
          .blade-content h2 {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 3rem;
            letter-spacing: 5px;
          }

          .luxury-section {
            padding: 4rem 5%;
          }
        }
      `}</style>

      <div className="luxury-tech-hero">
        <div className="hero-content">
          <h1>TECHNOLOGY</h1>
          <p className="subtitle">Pioneering the Future of Clean Mobility</p>
          <p>
            Advanced electric vehicle technology that redefines performance, safety, and environmental responsibility. 
            Experience the most reliable and sophisticated zero-emission vehicles on the planet.
          </p>
        </div>
      </div>

      <section className="luxury-section platform-section fade-in-section">
        <div style={{ maxWidth: '1400px', width: '100%' }}>
          <div className="platform-header">
            <h2>e-Platform 3.0</h2>
            <p className="platform-subtitle">
              The world's most advanced electric vehicle architecture
            </p>
          </div>

          <div className="tech-grid">
            <div className="tech-content">
              <span className="tech-number">01</span>
              <h3>Revolutionary Safety</h3>
              <p>
                The proprietary Blade Battery technology sets new industry standards for battery safety. 
                Utilizing advanced lithium iron phosphate chemistry, our batteries pass the industry's 
                most rigorous nail penetration test without fire or thermal runaway, providing absolute 
                peace of mind for every journey.
              </p>
            </div>
            <div 
              className="tech-visual" 
              style={{backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200)'}}
            >
            </div>
          </div>

          <div className="tech-grid">
            <div 
              className="tech-visual" 
              style={{backgroundImage: 'url(https://images.unsplash.com/photo-1617886322207-7cc22ce7a22a?q=80&w=1200)'}}
            >
            </div>
            <div className="tech-content">
              <span className="tech-number">02</span>
              <h3>Exceptional Efficiency</h3>
              <p>
                The world's first mass-produced 8-in-1 electric powertrain integrates motor, controller, 
                reducer, on-board charger, DC converter, power distribution, battery management, and vehicle 
                control into one seamless system. This revolutionary integration achieves ranges exceeding 
                600 kilometers on a single charge while optimizing space and energy efficiency.
              </p>
            </div>
          </div>

          <div className="tech-grid">
            <div className="tech-content">
              <span className="tech-number">03</span>
              <h3>Intelligent Performance</h3>
              <p>
                Advanced iTAC technology intelligently allocates drive torque in real-time, utilizing 
                precise torque distribution and negative torque output to eliminate wheel slip. The 
                sophisticated vehicle control system continuously monitors driving conditions, optimizing 
                performance, comfort, and safety for your unique journey.
              </p>
            </div>
            <div 
              className="tech-visual" 
              style={{backgroundImage: 'url(https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1200)'}}
            >
            </div>
          </div>

          <div className="tech-grid">
            <div 
              className="tech-visual" 
              style={{backgroundImage: 'url(https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200)'}}
            >
            </div>
            <div className="tech-content">
              <span className="tech-number">04</span>
              <h3>Refined Design</h3>
              <p>
                Aerodynamic excellence meets intelligent packaging. The extended wheelbase and optimized 
                proportions significantly expand interior space while achieving drag coefficients as low 
                as 0.21 Cd. This perfect balance of form and function delivers exceptional range, 
                whisper-quiet operation, and uncompromised passenger comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="blade-section fade-in-section">
        <div className="blade-split">
          <div className="blade-content">
            <h2>
              <span className="highlight">Blade Battery</span><br />
              Technology
            </h2>
            <p>
              The revolutionary Blade Battery represents a quantum leap in energy storage safety, 
              performance, and longevity. This groundbreaking technology redefines what is possible 
              in electric vehicle power systems.
            </p>

            <div className="blade-features">
              <div className="blade-feature">
                <span className="blade-feature-icon">🛡️</span>
                <div className="blade-feature-text">
                  <h4>Unmatched Safety</h4>
                  <p>
                    Successfully passes the nail penetration test without fire or smoke, a feat 
                    unmatched by conventional lithium batteries. Advanced thermal management ensures 
                    optimal performance in all conditions.
                  </p>
                </div>
              </div>

              <div className="blade-feature">
                <span className="blade-feature-icon">⚡</span>
                <div className="blade-feature-text">
                  <h4>Space Optimization</h4>
                  <p>
                    The unique blade-shaped cell design increases volumetric efficiency by 50% compared 
                    to traditional battery packs, delivering more energy in a smaller footprint.
                  </p>
                </div>
              </div>

              <div className="blade-feature">
                <span className="blade-feature-icon">♻️</span>
                <div className="blade-feature-text">
                  <h4>Extended Lifespan</h4>
                  <p>
                    Advanced lithium iron phosphate chemistry delivers over 3,000 charge cycles with 
                    minimal degradation, ensuring your vehicle maintains exceptional performance for years.
                  </p>
                </div>
              </div>

              <div className="blade-feature">
                <span className="blade-feature-icon">🌿</span>
                <div className="blade-feature-text">
                  <h4>Environmental Responsibility</h4>
                  <p>
                    Cobalt-free construction reduces environmental impact while maintaining exceptional 
                    performance, aligning with our commitment to sustainable mobility.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="blade-visual"></div>
        </div>
      </section>

      <section className="luxury-section nev-section fade-in-section">
        <div className="nev-container">
          <h2>New Energy Vehicles</h2>
          <p className="nev-subtitle">
            As the leading clean energy automotive dealer in the Turks and Caicos Islands, we are proud 
            to represent BYD's world-class electric vehicles. BYD leads the global New Energy Vehicle 
            revolution with groundbreaking innovations in battery technology, electric powertrains, and 
            sustainable manufacturing. These are the most reliable, most advanced, and most environmentally 
            responsible vehicles available today, reshaping transportation and creating a cleaner future 
            for generations to come.
          </p>

          <div className="nev-stats">
            <div className="nev-stat">
              <div className="nev-stat-number">3M+</div>
              <div className="nev-stat-label">Annual Global Sales</div>
            </div>
            <div className="nev-stat">
              <div className="nev-stat-number">70+</div>
              <div className="nev-stat-label">Countries & Regions</div>
            </div>
            <div className="nev-stat">
              <div className="nev-stat-number">#1</div>
              <div className="nev-stat-label">NEV Manufacturer Worldwide</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;