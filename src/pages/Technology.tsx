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
          transition: opacity 1.2s ease-out, transform 1.2s ease-out;
        }

        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .luxury-tech-hero {
          height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)),
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
          font-size: 1.4rem;
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

        /* E-PLATFORM SECTION - Alternating grid layout */
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
          font-size: 8rem;
          position: relative;
          overflow: hidden;
          transition: all 0.5s ease;
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
          font-size: 9rem;
        }

        /* COCKPIT SECTION - Card masonry layout */
        .cockpit-section {
          background: linear-gradient(rgba(255,255,255,0.98), rgba(255,255,255,0.98)),
                      url('https://images.unsplash.com/photo-1519003300449-424ad0405076?q=80&w=2000') center/cover;
        }

        .cockpit-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .cockpit-header {
          text-align: center;
          margin-bottom: 6rem;
        }

        .cockpit-header h2 {
          font-size: 4.5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          color: #333;
        }

        .cockpit-subtitle {
          font-size: 1.4rem;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
        }

        .cockpit-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, auto);
          gap: 3rem;
        }

        .cockpit-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,249,250,0.95) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0,0,0,0.08);
          overflow: hidden;
          transition: all 0.5s ease;
          position: relative;
        }

        .cockpit-card:nth-child(1) {
          grid-column: span 2;
          grid-row: span 2;
        }

        .cockpit-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 70px rgba(74, 158, 255, 0.15);
          border-color: rgba(74, 158, 255, 0.3);
        }

        .cockpit-icon-large {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12rem;
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.05) 0%, rgba(53, 122, 189, 0.05) 100%);
        }

        .cockpit-icon {
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.08) 0%, rgba(53, 122, 189, 0.08) 100%);
          transition: all 0.4s ease;
        }

        .cockpit-card:hover .cockpit-icon {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.15) 0%, rgba(53, 122, 189, 0.15) 100%);
          font-size: 5.5rem;
        }

        .cockpit-content {
          padding: 3rem;
        }

        .cockpit-content h3 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
          color: #333;
        }

        .cockpit-content p {
          font-size: 1.15rem;
          line-height: 1.9;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .cockpit-feature-list {
          list-style: none;
          padding: 0;
          margin: 2rem 0 0 0;
        }

        .cockpit-feature-list li {
          padding: 1rem 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          font-family: 'Montserrat', sans-serif;
          font-size: 1.05rem;
          color: #555;
          transition: all 0.3s ease;
        }

        .cockpit-feature-list li:hover {
          padding-left: 1rem;
          color: #4a9eff;
        }

        .cockpit-feature-list li:last-child {
          border-bottom: none;
        }

        /* NEV SECTION - Full width immersive */
        .nev-section {
          background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)),
                      url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2000') center/cover;
          color: white;
          min-height: 100vh;
        }

        .nev-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .nev-container h2 {
          font-size: 5.5rem;
          margin-bottom: 3rem;
          font-weight: 300;
          letter-spacing: 10px;
          font-family: 'Cormorant Garamond', serif;
        }

        .nev-subtitle {
          font-size: 1.5rem;
          line-height: 2.2;
          margin-bottom: 6rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
          opacity: 0.95;
        }

        .nev-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4rem;
          margin-top: 6rem;
        }

        .nev-stat {
          position: relative;
          padding: 3rem 2rem;
        }

        .nev-stat::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #4a9eff, transparent);
        }

        .nev-stat-number {
          font-size: 5rem;
          font-weight: 300;
          color: #4a9eff;
          margin: 2rem 0 1rem;
          font-family: 'Cormorant Garamond', serif;
        }

        .nev-stat-label {
          font-size: 1.2rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          opacity: 0.9;
        }

        /* BLADE BATTERY SECTION - Split reveal */
        .blade-section {
          background: white;
          padding: 0;
          min-height: 100vh;
        }

        .blade-split {
          display: grid;
          grid-template-columns: 45% 55%;
          min-height: 100vh;
        }

        .blade-content {
          padding: 8rem 6rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
        }

        .blade-content h2 {
          font-size: 4.5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          color: #333;
          line-height: 1.2;
        }

        .blade-content .highlight {
          color: #4a9eff;
        }

        .blade-content p {
          font-size: 1.25rem;
          line-height: 2;
          margin-bottom: 2rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          color: #555;
        }

        .blade-features {
          margin-top: 3rem;
        }

        .blade-feature {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
          padding: 1.5rem;
          background: rgba(74, 158, 255, 0.03);
          border-left: 4px solid #4a9eff;
          transition: all 0.4s ease;
        }

        .blade-feature:hover {
          padding-left: 2.5rem;
          background: rgba(74, 158, 255, 0.08);
          border-left-width: 6px;
        }

        .blade-feature-icon {
          font-size: 2.5rem;
          min-width: 50px;
        }

        .blade-feature-text h4 {
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          color: #333;
          letter-spacing: 1px;
        }

        .blade-feature-text p {
          font-size: 1.05rem;
          margin: 0;
          color: #666;
        }

        .blade-visual {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%),
                      url('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2000') center/cover;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .blade-visual-icon {
          font-size: 15rem;
          opacity: 0.3;
        }

        @media (max-width: 1200px) {
          .cockpit-grid {
            grid-template-columns: 1fr 1fr;
          }

          .cockpit-card:nth-child(1) {
            grid-column: span 2;
            grid-row: span 1;
          }

          .blade-split {
            grid-template-columns: 1fr;
          }

          .blade-visual {
            min-height: 60vh;
          }

          .nev-stats {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 3.5rem;
            letter-spacing: 6px;
          }

          .tech-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .cockpit-grid {
            grid-template-columns: 1fr;
          }

          .cockpit-card:nth-child(1) {
            grid-column: span 1;
          }

          .blade-content {
            padding: 4rem 2rem;
          }

          .tech-visual {
            height: 300px;
            font-size: 5rem;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <div className="luxury-tech-hero">
        <div className="hero-content">
          <h1>TECHNOLOGY</h1>
          <p className="subtitle">Innovation in Motion</p>
          <p>
            At Evergreen Motors, we bring you BYD's revolutionary technology — 
            engineered for performance, designed for sustainability, built for the future.
          </p>
        </div>
      </div>

      {/* E-PLATFORM 3.0 SECTION - Alternating grid */}
      <section className="luxury-section platform-section fade-in-section">
        <div className="section-content">
          <div className="platform-header">
            <h2>e-Platform 3.0</h2>
            <p className="platform-subtitle">
              The foundation of next-generation electric vehicles
            </p>
          </div>
          
          <div className="tech-grid">
            <div className="tech-content">
              <span className="tech-number">01</span>
              <h3>Safety First</h3>
              <p>
                The e-Platform 3.0 integrates ultra-safe Blade batteries directly into the chassis, 
                forming a robust and unique body structure. This cell-to-body design enhances overall 
                vehicle safety, improves crash protection, and maximizes structural integrity while 
                optimizing interior space.
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
              <span className="tech-number">02</span>
              <h3>Unmatched Efficiency</h3>
              <p>
                Achieve ranges exceeding 620 miles on a single charge with the world's first 8-in-1 
                electric powertrain. This revolutionary system integrates motor, controller, reducer, 
                on-board charger, DC converter, power distribution, battery management, and vehicle 
                control into one seamless unit for exceptional efficiency.
              </p>
            </div>
          </div>

          <div className="tech-grid">
            <div className="tech-content">
              <span className="tech-number">03</span>
              <h3>Advanced Intelligence</h3>
              <p>
                BYD's sophisticated operating system creates an intuitive, responsive driving experience. 
                The vehicle's neural network continuously monitors environmental inputs, learning your 
                preferences and automatically optimizing performance, comfort, and safety for your 
                unique driving conditions.
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
              <span className="tech-number">04</span>
              <h3>Refined Aesthetics</h3>
              <p>
                Form meets function in perfect harmony. Shorter overhangs and an extended wheelbase 
                significantly expand interior passenger space while achieving an incredible 0.21 Cd 
                drag coefficient — one of the lowest in the industry — for enhanced range and 
                whisper-quiet operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COCKPIT SECTION - Masonry card layout */}
      <section className="luxury-section cockpit-section fade-in-section">
        <div className="cockpit-container">
          <div className="cockpit-header">
            <h2>Intelligent Cockpit System</h2>
            <p className="cockpit-subtitle">
              Your digital command center for the ultimate driving experience
            </p>
          </div>
          
          <div className="cockpit-grid">
            <div className="cockpit-card">
              <div className="cockpit-icon-large">🎛️</div>
              <div className="cockpit-content">
                <h3>Total Integration</h3>
                <p>
                  The BYD Intelligent Cockpit seamlessly merges your digital life with your vehicle. 
                  Experience unprecedented connectivity as your smartphone, navigation, entertainment, 
                  and vehicle controls unite in one intuitive interface.
                </p>
                <ul className="cockpit-feature-list">
                  <li>🔄 Wireless Apple CarPlay & Android Auto</li>
                  <li>🎤 Voice-activated controls</li>
                  <li>📊 Real-time vehicle diagnostics</li>
                  <li>☁️ Cloud-based personalization</li>
                  <li>🔐 Advanced security features</li>
                </ul>
              </div>
            </div>

            <div className="cockpit-card">
              <div className="cockpit-icon">📱</div>
              <div className="cockpit-content">
                <h3>Seamless Connectivity</h3>
                <p>
                  Advanced smartphone integration keeps you connected with intuitive touch controls 
                  and wireless charging.
                </p>
              </div>
            </div>

            <div className="cockpit-card">
              <div className="cockpit-icon">🗺️</div>
              <div className="cockpit-content">
                <h3>Smart Navigation</h3>
                <p>
                  Intelligent GPS with real-time traffic, automatic rerouting, and EV charging 
                  station integration.
                </p>
              </div>
            </div>

            <div className="cockpit-card">
              <div className="cockpit-icon">🎵</div>
              <div className="cockpit-content">
                <h3>Premium Audio</h3>
                <p>
                  Concert-quality sound system with streaming integration and spatial audio technology.
                </p>
              </div>
            </div>

            <div className="cockpit-card">
              <div className="cockpit-icon">🌡️</div>
              <div className="cockpit-content">
                <h3>Climate Control</h3>
                <p>
                  Multi-zone intelligent climate system that learns and adapts to your comfort preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLADE BATTERY SECTION - Split reveal */}
      <section className="blade-section fade-in-section">
        <div className="blade-split">
          <div className="blade-content">
            <h2>
              <span className="highlight">Blade Battery</span><br />
              Technology
            </h2>
            <p>
              BYD's revolutionary Blade Battery represents a quantum leap in battery safety, 
              performance, and longevity. This groundbreaking technology has redefined what's 
              possible in electric vehicle power systems.
            </p>

            <div className="blade-features">
              <div className="blade-feature">
                <span className="blade-feature-icon">🔥</span>
                <div className="blade-feature-text">
                  <h4>Uncompromising Safety</h4>
                  <p>
                    Passed the nail penetration test without fire or smoke — a feat unmatched 
                    by conventional lithium batteries.
                  </p>
                </div>
              </div>

              <div className="blade-feature">
                <span className="blade-feature-icon">📏</span>
                <div className="blade-feature-text">
                  <h4>Space Optimization</h4>
                  <p>
                    Unique blade-shaped design increases space utilization by 50% compared to 
                    traditional battery packs.
                  </p>
                </div>
              </div>

              <div className="blade-feature">
                <span className="blade-feature-icon">⏱️</span>
                <div className="blade-feature-text">
                  <h4>Extended Lifespan</h4>
                  <p>
                    Advanced lithium iron phosphate chemistry delivers over 3,000 charge cycles 
                    with minimal degradation.
                  </p>
                </div>
              </div>

              <div className="blade-feature">
                <span className="blade-feature-icon">🌱</span>
                <div className="blade-feature-text">
                  <h4>Eco-Friendly</h4>
                  <p>
                    Cobalt-free construction reduces environmental impact while maintaining 
                    exceptional performance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="blade-visual">
            <span className="blade-visual-icon">🔋</span>
          </div>
        </div>
      </section>

      {/* NEV SECTION - Full width immersive */}
      <section className="luxury-section nev-section fade-in-section">
        <div className="nev-container">
          <h2>New Energy Vehicles</h2>
          <p className="nev-subtitle">
            BYD leads the global New Energy Vehicle revolution with groundbreaking innovations 
            in battery technology, electric powertrains, and sustainable manufacturing. At 
            Evergreen Motors, we're proud to deliver these world-class vehicles that are 
            reshaping transportation and creating a cleaner, greener future for generations to come.
          </p>

          <div className="nev-stats">
            <div className="nev-stat">
              <div className="nev-stat-number">3M+</div>
              <div className="nev-stat-label">Global NEV Sales</div>
            </div>
            <div className="nev-stat">
              <div className="nev-stat-number">70+</div>
              <div className="nev-stat-label">Countries & Regions</div>
            </div>
            <div className="nev-stat">
              <div className="nev-stat-number">#1</div>
              <div className="nev-stat-label">NEV Manufacturer</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;