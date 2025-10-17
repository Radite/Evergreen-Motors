import React, { useEffect } from 'react';

const Ownership = () => {
  useEffect(() => {
    // Scroll to section if hash is present in URL
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    };

    // Scroll on initial load
    scrollToHash();

    // Listen for hash changes
    const handleHashChange = () => {
      scrollToHash();
    };

    window.addEventListener('hashchange', handleHashChange);

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

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
    };
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

        .luxury-ownership-hero {
          height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4)),
                      url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000') center/cover;
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
          max-width: 900px;
          padding: 3rem;
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
          font-size: 5.5rem;
          margin-bottom: 1.5rem;
          font-weight: 300;
          letter-spacing: 10px;
          font-family: 'Cormorant Garamond', serif;
          text-shadow: 2px 2px 20px rgba(0,0,0,0.5);
        }

        .hero-content p {
          font-size: 1.4rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 2px;
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
          scroll-margin-top: 80px;
        }

        .service-section {
          background: linear-gradient(rgba(255,255,255,0.97), rgba(255,255,255,0.97)),
                      url('https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?q=80&w=2000') center/cover;
        }

        .roadside-section {
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
                      url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2000') center/cover;
          color: white;
        }

        .warranty-section {
          background: linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)),
                      url('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2000') center/cover;
        }

        .membership-section {
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
                      url('https://images.unsplash.com/photo-1556742393-d75f468bfcb0?q=80&w=2000') center/cover;
          color: white;
        }

        .charging-section {
          background: linear-gradient(rgba(255,255,255,0.97), rgba(255,255,255,0.97)),
                      url('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2000') center/cover;
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

        .luxury-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
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

        .light-card {
          background: rgba(0,0,0,0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0,0,0,0.05);
        }

        .light-card:hover {
          background: rgba(74, 158, 255, 0.05);
          border-color: rgba(74, 158, 255, 0.2);
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

        .info-box {
          background: rgba(255,255,255,0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0,0,0,0.05);
          padding: 3rem;
          margin-top: 4rem;
        }

        .dark-info-box {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .info-box h3 {
          font-size: 2rem;
          margin-bottom: 2rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 3px;
          color: #4a9eff;
        }

        .dark-info-box h3 {
          color: #fff;
        }

        .info-list {
          list-style: none;
          padding: 0;
        }

        .info-list li {
          padding: 1.5rem 0;
          border-bottom: 1px solid rgba(0,0,0,0.1);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 1.1rem;
          line-height: 1.8;
          color: #666;
        }

        .dark-info-box .info-list li {
          border-bottom-color: rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.85);
        }

        .info-list li:last-child {
          border-bottom: none;
        }

        .info-list strong {
          color: #4a9eff;
          font-weight: 500;
        }

        .dark-info-box .info-list strong {
          color: #fff;
        }

        .emergency-box {
          text-align: center;
          padding: 4rem;
          background: rgba(74, 158, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(74, 158, 255, 0.3);
          margin-top: 4rem;
        }

        .emergency-box h3 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 3px;
        }

        .emergency-number {
          font-size: 3rem;
          color: #4a9eff;
          font-weight: 500;
          font-family: 'Montserrat', sans-serif;
          letter-spacing: 3px;
          margin: 2rem 0;
        }

        .map-container {
          height: 500px;
          background: rgba(0,0,0,0.05);
          border: 1px solid rgba(0,0,0,0.05);
          overflow: hidden;
          margin-top: 4rem;
        }

        .app-download-box {
          text-align: center;
          padding: 4rem;
          background: rgba(0,0,0,0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0,0,0,0.05);
          margin-top: 4rem;
        }

        .app-download-box h3 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 3px;
          color: #4a9eff;
        }

        .app-download-box p {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 1.1rem;
          color: #666;
          margin: 1rem 0;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
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

      <div className="luxury-ownership-hero">
        <div className="hero-content">
          <h1>Ownership</h1>
          <p>Experience excellence in every journey</p>
        </div>
      </div>

      <section id="service-maintenance" className="luxury-section service-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title">Service & Maintenance</h2>
          <p className="section-subtitle">
            Our certified technicians provide expert service to keep your BYD electric vehicle in optimal condition.
          </p>

          <div className="luxury-cards-grid">
            <div className="luxury-card light-card">
              <div className="card-icon">🔧</div>
              <div className="card-content">
                <h3 className="card-title">Regular Maintenance</h3>
                <p className="card-description">
                  Scheduled service to ensure optimal performance and longevity of your vehicle.
                </p>
              </div>
            </div>
            <div className="luxury-card light-card">
              <div className="card-icon">🔋</div>
              <div className="card-content">
                <h3 className="card-title">Battery Service</h3>
                <p className="card-description">
                  Expert battery diagnostics and maintenance for peak efficiency.
                </p>
              </div>
            </div>
            <div className="luxury-card light-card">
              <div className="card-icon">💻</div>
              <div className="card-content">
                <h3 className="card-title">Software Updates</h3>
                <p className="card-description">
                  Latest software and system enhancements delivered seamlessly.
                </p>
              </div>
            </div>
          </div>

          <div className="info-box">
            <h3>Service Schedule</h3>
            <ul className="info-list">
              <li><strong>First Service:</strong> 10,000 miles or 12 months</li>
              <li><strong>Regular Service:</strong> Every 10,000 miles or 12 months</li>
              <li><strong>Battery Check:</strong> Annual battery health assessment</li>
              <li><strong>Software Updates:</strong> As released by BYD</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="roadside-assistance" className="luxury-section roadside-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title">EM Roadside Assistance</h2>
          <p className="section-subtitle" style={{color: 'rgba(255,255,255,0.9)'}}>
            BYD EM Roadside Assistance provides comprehensive support 24 hours a day, 7 days a week, ensuring peace of mind on every journey.
          </p>

          <div className="luxury-cards-grid">
            <div className="luxury-card">
              <div className="card-icon">🔧</div>
              <div className="card-content">
                <h3 className="card-title">Emergency Repairs</h3>
                <p className="card-description">
                  On-site minor repairs and troubleshooting assistance.
                </p>
              </div>
            </div>
            <div className="luxury-card">
              <div className="card-icon">🚗</div>
              <div className="card-content">
                <h3 className="card-title">Towing Service</h3>
                <p className="card-description">
                  Free towing to nearest BYD service center when needed.
                </p>
              </div>
            </div>
            <div className="luxury-card">
              <div className="card-icon">🔋</div>
              <div className="card-content">
                <h3 className="card-title">Emergency Charging</h3>
                <p className="card-description">
                  Mobile charging assistance if you run out of power.
                </p>
              </div>
            </div>
          </div>

          <div className="emergency-box dark-info-box">
            <h3>Emergency Contact</h3>
            <div className="emergency-number">1-800-BYD-HELP</div>
            <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>Available 24/7/365</p>
          </div>
        </div>
      </section>

      <section id="warranty" className="luxury-section warranty-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title">Warranty Coverage</h2>
          <p className="section-subtitle">
            BYD offers one of the most comprehensive warranty programs in the electric vehicle industry, giving you confidence and peace of mind.
          </p>

          <div className="luxury-cards-grid">
            <div className="luxury-card light-card">
              <div className="card-icon">🛡️</div>
              <div className="card-content">
                <h3 className="card-title">Vehicle Warranty</h3>
                <p className="card-description">
                  <strong style={{display: 'block', fontSize: '1.3rem', marginBottom: '0.5rem', color: '#4a9eff'}}>6 years / 150,000 miles</strong>
                  Comprehensive coverage for the entire vehicle
                </p>
              </div>
            </div>
            <div className="luxury-card light-card">
              <div className="card-icon">🔋</div>
              <div className="card-content">
                <h3 className="card-title">Battery Warranty</h3>
                <p className="card-description">
                  <strong style={{display: 'block', fontSize: '1.3rem', marginBottom: '0.5rem', color: '#4a9eff'}}>8 years / 150,000 miles</strong>
                  Blade Battery coverage with capacity guarantee
                </p>
              </div>
            </div>
            <div className="luxury-card light-card">
              <div className="card-icon">⚡</div>
              <div className="card-content">
                <h3 className="card-title">Powertrain Warranty</h3>
                <p className="card-description">
                  <strong style={{display: 'block', fontSize: '1.3rem', marginBottom: '0.5rem', color: '#4a9eff'}}>8 years / 150,000 miles</strong>
                  Electric motor and drivetrain coverage
                </p>
              </div>
            </div>
          </div>

          <div className="info-box">
            <h3>What's Covered</h3>
            <ul className="info-list">
              <li>Electric motor and power electronics</li>
              <li>Battery pack and battery management system</li>
              <li>Charging system components</li>
              <li>Structural and body components</li>
              <li>Interior components and systems</li>
              <li>Safety systems and features</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="membership" className="luxury-section membership-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title">EM Membership & Charge Cards</h2>
          <p className="section-subtitle" style={{color: 'rgba(255,255,255,0.9)'}}>
            Join the BYD EM Membership program and enjoy exclusive benefits, charging discounts, and priority service.
          </p>

          <div className="luxury-cards-grid">
            <div className="luxury-card">
              <div className="card-icon">⭐</div>
              <div className="card-content">
                <h3 className="card-title">Priority Service</h3>
                <p className="card-description">
                  Skip the line with priority service appointments at all locations.
                </p>
              </div>
            </div>
            <div className="luxury-card">
              <div className="card-icon">🔌</div>
              <div className="card-content">
                <h3 className="card-title">Charging Discounts</h3>
                <p className="card-description">
                  Save up to 20% on public charging networks nationwide.
                </p>
              </div>
            </div>
            <div className="luxury-card">
              <div className="card-icon">🎁</div>
              <div className="card-content">
                <h3 className="card-title">Exclusive Perks</h3>
                <p className="card-description">
                  Access to member-only events and special offers.
                </p>
              </div>
            </div>
          </div>

          <div className="info-box dark-info-box">
            <h3>Charge Card Benefits</h3>
            <ul className="info-list">
              <li><strong>Universal Access:</strong> Use at thousands of charging stations</li>
              <li><strong>Mobile App:</strong> Find, reserve, and pay for charging</li>
              <li><strong>Billing Integration:</strong> Consolidated monthly billing</li>
              <li><strong>Charging History:</strong> Track your charging sessions and costs</li>
            </ul>
            <p style={{textAlign: 'center', marginTop: '3rem', fontSize: '1.1rem', fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.85)'}}>
              Learn more: <a href="mailto:membership@byd.com" style={{color: '#4a9eff', textDecoration: 'none'}}>membership@byd.com</a>
            </p>
          </div>
        </div>
      </section>

      <section id="charging-locations" className="luxury-section charging-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title">Charging Locations</h2>
          <p className="section-subtitle">
            Access thousands of charging stations nationwide through our partnerships with major charging networks.
          </p>

          <div className="luxury-cards-grid">
            <div className="luxury-card light-card">
              <div className="card-icon">⚡</div>
              <div className="card-content">
                <h3 className="card-title">Fast Charging</h3>
                <p className="card-description">
                  DC fast charging stations for quick top-ups on the go.
                </p>
              </div>
            </div>
            <div className="luxury-card light-card">
              <div className="card-icon">🏢</div>
              <div className="card-content">
                <h3 className="card-title">Destination Charging</h3>
                <p className="card-description">
                  Level 2 chargers at hotels, restaurants, and shopping centers.
                </p>
              </div>
            </div>
            <div className="luxury-card light-card">
              <div className="card-icon">🏠</div>
              <div className="card-content">
                <h3 className="card-title">Home Charging</h3>
                <p className="card-description">
                  Installation support for home charging solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="map-container">
            <iframe
              title="Charging Locations Map"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{border: 0}}
              src="https://www.openstreetmap.org/export/embed.html?bbox=-74.1%2C40.6%2C-73.9%2C40.8&layer=mapnik"
              allowFullScreen
            ></iframe>
          </div>

          <div className="info-box">
            <h3>Charging Options</h3>
            <ul className="info-list">
              <li><strong>Level 1 (120V):</strong> 3-5 miles of range per hour</li>
              <li><strong>Level 2 (240V):</strong> 20-30 miles of range per hour</li>
              <li><strong>DC Fast Charging:</strong> 80% charge in 30-45 minutes</li>
              <li><strong>Ultra-Fast Charging:</strong> 200+ miles in 15 minutes</li>
            </ul>
          </div>

          <div className="app-download-box">
            <h3>Download Our Charging App</h3>
            <p>Find and navigate to charging stations with real-time availability</p>
            <p style={{fontWeight: '500', marginTop: '1.5rem'}}>Available on iOS and Android</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ownership;