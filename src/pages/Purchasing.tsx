import React, { useEffect } from 'react';

const Purchasing = () => {
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
          background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4)),
                      url('https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2000') center/cover;
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

        .luxury-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 8rem 5%;
          background-attachment: fixed;
        }

        .cash-section {
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
                      url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2000') center/cover;
          color: white;
        }

        .finance-section {
          background: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
                      url('https://images.unsplash.com/photo-1554224311-beee415c201f?q=80&w=2000') center/cover;
          color: white;
        }

        .lease-section {
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
                      url('https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2000') center/cover;
          color: white;
        }

        .fleet-section {
          background: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
                      url('https://images.unsplash.com/photo-1566024287286-457247b70310?q=80&w=2000') center/cover;
          color: white;
        }

        .rental-section {
          background: linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)),
                      url('https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=2000') center/cover;
        }

        .subscription-section {
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
                      url('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2000') center/cover;
          color: white;
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

        .card-icon {
          width: 100%;
          height: 180px;
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
          font-size: 1.6rem;
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
          font-size: 1rem;
        }

        .info-list {
          list-style: none;
          padding: 0;
          margin: 3rem 0;
        }

        .info-list li {
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
          border-left: 3px solid #4a9eff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          line-height: 1.8;
          transition: all 0.3s;
        }

        .info-list li:hover {
          background: rgba(255,255,255,0.1);
          transform: translateX(10px);
        }

        .info-list strong {
          font-weight: 500;
          letter-spacing: 1px;
        }

        .process-box {
          margin-top: 4rem;
          padding: 3rem;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .process-box h3 {
          font-size: 2rem;
          margin-bottom: 2rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 2px;
        }

        .process-box ol {
          padding-left: 2rem;
          line-height: 2.2;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 1.1rem;
        }

        .process-box ol li {
          margin-bottom: 1rem;
        }

        .contact-cta {
          text-align: center;
          margin-top: 4rem;
          padding: 3rem;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .contact-cta p {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
        }

        .contact-cta a {
          color: #4a9eff;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s;
          letter-spacing: 1px;
        }

        .contact-cta a:hover {
          color: #6bb0ff;
          text-decoration: underline;
        }

        .light-card {
          background: rgba(0,0,0,0.03);
          border: 1px solid rgba(0,0,0,0.05);
        }

        .light-card:hover {
          background: rgba(74, 158, 255, 0.05);
          border-color: rgba(74, 158, 255, 0.2);
        }

        .light-card .card-icon {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.1) 0%, rgba(53, 122, 189, 0.1) 100%);
          color: #4a9eff;
        }

        .light-card:hover .card-icon {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.2) 0%, rgba(53, 122, 189, 0.2) 100%);
        }

        .light-card .card-title {
          color: #333;
        }

        .light-card .card-description {
          color: #666;
        }

        .rental-section .info-list li {
          background: rgba(0,0,0,0.03);
          border-left-color: #4a9eff;
          color: #333;
        }

        .rental-section .info-list li:hover {
          background: rgba(74, 158, 255, 0.05);
        }

        .rental-section .contact-cta {
          background: rgba(0,0,0,0.03);
          border: 1px solid rgba(0,0,0,0.05);
        }

        .rental-section .contact-cta p {
          color: #333;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 3rem;
            letter-spacing: 4px;
          }
          
          .section-title {
            font-size: 2.5rem;
            letter-spacing: 3px;
          }

          .luxury-cards-grid {
            grid-template-columns: 1fr;
          }

          .luxury-section {
            padding: 5rem 5%;
          }
        }
      `}</style>

      <section className="luxury-hero">
        <div className="hero-content">
          <h1>Your Path to Ownership</h1>
          <p>Flexible purchasing solutions designed for every lifestyle</p>
        </div>
      </section>

      <section id="cash-purchases" className="luxury-section cash-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title">Cash Purchases</h2>
          <p className="section-subtitle">
            Simple, straightforward vehicle ownership with immediate benefits
          </p>
          
          <ul className="info-list">
            <li><strong>No Interest Payments:</strong> Own your vehicle outright without financing charges</li>
            <li><strong>Immediate Ownership:</strong> Full ownership from day one with no monthly payments</li>
            <li><strong>Simplified Process:</strong> Faster purchase process with less paperwork</li>
            <li><strong>No Credit Checks:</strong> Purchase without credit approval requirements</li>
            <li><strong>Negotiating Power:</strong> Potential for better pricing with cash payment</li>
          </ul>

          <div className="process-box">
            <h3>How to Purchase</h3>
            <ol>
              <li>Select your preferred BYD model</li>
              <li>Visit a dealership or contact us for pricing</li>
              <li>Complete the purchase agreement</li>
              <li>Arrange payment via bank transfer or certified check</li>
              <li>Complete registration and take delivery</li>
            </ol>
          </div>

          <div className="contact-cta">
            <p>Ready to purchase?</p>
            <p>Contact our sales team at <a href="mailto:sales@byd.com">sales@byd.com</a></p>
          </div>
        </div>
      </section>

      <section className="luxury-section finance-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title">Financing Options</h2>
          <p className="section-subtitle">
            Partner with leading financial institutions for competitive rates and flexible terms
          </p>
          
          <div className="luxury-cards-grid">
            <div className="luxury-card">
              <div className="card-icon">💰</div>
              <div className="card-content">
                <h3 className="card-title">Bank Financing</h3>
                <p className="card-description">
                  Access preferential interest rates through our partner banks with flexible terms from 24 to 84 months
                </p>
              </div>
            </div>
            <div className="luxury-card">
              <div className="card-icon">🏪</div>
              <div className="card-content">
                <h3 className="card-title">Dealer Financing</h3>
                <p className="card-description">
                  Convenient in-house financing with competitive rates, special promotions, and personalized service
                </p>
              </div>
            </div>
            <div className="luxury-card">
              <div className="card-icon">✅</div>
              <div className="card-content">
                <h3 className="card-title">Quick Approval</h3>
                <p className="card-description">
                  Fast pre-approval process, often within 24 hours, to get you driving sooner
                </p>
              </div>
            </div>
          </div>

          <div className="process-box">
            <h3>Financing Process</h3>
            <ol>
              <li>Submit financing application to partner bank or dealer</li>
              <li>Receive pre-approval and rate quote</li>
              <li>Select your BYD vehicle</li>
              <li>Finalize loan terms and complete documentation</li>
              <li>Take delivery of your new BYD</li>
            </ol>
          </div>

          <div className="contact-cta">
            <p>For financing information, contact:</p>
            <p><a href="mailto:finance@byd.com">finance@byd.com</a></p>
          </div>
        </div>
      </section>

      <section className="luxury-section lease-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title">Leasing Options</h2>
          <p className="section-subtitle">
            Drive a BYD with flexible lease terms and enjoy the latest technology
          </p>
          
          <ul className="info-list">
            <li><strong>Lower Monthly Payments:</strong> Pay less than traditional financing</li>
            <li><strong>Latest Technology:</strong> Upgrade to newer models every few years</li>
            <li><strong>Warranty Coverage:</strong> Most leases covered by manufacturer warranty</li>
            <li><strong>Tax Benefits:</strong> Potential business tax deductions</li>
            <li><strong>No Resale Hassle:</strong> Simply return the vehicle at lease end</li>
          </ul>

          <div className="luxury-cards-grid">
            <div className="luxury-card">
              <div className="card-icon">24</div>
              <div className="card-content">
                <h3 className="card-title">24-Month Lease</h3>
                <p className="card-description">
                  Short-term flexibility with the latest models and newest technology
                </p>
              </div>
            </div>
            <div className="luxury-card">
              <div className="card-icon">36</div>
              <div className="card-content">
                <h3 className="card-title">36-Month Lease</h3>
                <p className="card-description">
                  Most popular option with balanced payments and optimal term length
                </p>
              </div>
            </div>
            <div className="luxury-card">
              <div className="card-icon">48</div>
              <div className="card-content">
                <h3 className="card-title">48-Month Lease</h3>
                <p className="card-description">
                  Lowest monthly payments with extended term for maximum affordability
                </p>
              </div>
            </div>
          </div>

          <div className="contact-cta">
            <p>Contact us for lease quotes:</p>
            <p><a href="mailto:lease@byd.com">lease@byd.com</a></p>
          </div>
        </div>
      </section>

      <section className="luxury-section fleet-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title">Fleet & Business Solutions</h2>
          <p className="section-subtitle">
            Transform your business fleet with BYD electric vehicles and reduce operational costs
          </p>
          
          <div className="luxury-cards-grid">
            <div className="luxury-card">
              <div className="card-icon">💼</div>
              <div className="card-content">
                <h3 className="card-title">Corporate Fleets</h3>
                <p className="card-description">
                  Volume pricing and dedicated fleet management support for your organization
                </p>
              </div>
            </div>
            <div className="luxury-card">
              <div className="card-icon">🚚</div>
              <div className="card-content">
                <h3 className="card-title">Commercial Vehicles</h3>
                <p className="card-description">
                  Electric vans and trucks perfect for delivery and logistics operations
                </p>
              </div>
            </div>
            <div className="luxury-card">
              <div className="card-icon">🏢</div>
              <div className="card-content">
                <h3 className="card-title">Government Solutions</h3>
                <p className="card-description">
                  Special programs designed for government and municipal fleets
                </p>
              </div>
            </div>
          </div>

          <ul className="info-list">
            <li><strong>Lower Operating Costs:</strong> Reduced fuel and maintenance expenses</li>
            <li><strong>Tax Incentives:</strong> Federal and state EV tax credits</li>
            <li><strong>Sustainability Goals:</strong> Meet corporate environmental targets</li>
            <li><strong>Fleet Management:</strong> Comprehensive fleet management services</li>
          </ul>

          <div className="contact-cta">
            <p>Contact our fleet specialists:</p>
            <p><a href="mailto:fleet@byd.com">fleet@byd.com</a></p>
          </div>
        </div>
      </section>

      <section className="luxury-section rental-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title" style={{color: '#333'}}>Rental & Subscription Services</h2>
          <p className="section-subtitle" style={{color: '#666'}}>
            Flexible short-term and all-inclusive options for every need
          </p>
          
          <div className="luxury-cards-grid">
            <div className="luxury-card light-card">
              <div className="card-icon">📅</div>
              <div className="card-content">
                <h3 className="card-title">Daily Rentals</h3>
                <p className="card-description">
                  Perfect for test driving or short trips with competitive daily rates
                </p>
              </div>
            </div>
            <div className="luxury-card light-card">
              <div className="card-icon">📆</div>
              <div className="card-content">
                <h3 className="card-title">Weekly & Monthly</h3>
                <p className="card-description">
                  Extended rates for longer adventures and flexible month-to-month options
                </p>
              </div>
            </div>
            <div className="luxury-card light-card">
              <div className="card-icon">🔄</div>
              <div className="card-content">
                <h3 className="card-title">Subscriptions</h3>
                <p className="card-description">
                  All-inclusive service with insurance, maintenance, and roadside assistance
                </p>
              </div>
            </div>
          </div>

          <ul className="info-list">
            <li><strong>All-Inclusive:</strong> Insurance, maintenance, and registration included in subscriptions</li>
            <li><strong>No Long-Term Commitment:</strong> Month-to-month flexibility with no down payment</li>
            <li><strong>Switch Models:</strong> Change vehicles as your needs evolve</li>
            <li><strong>Hassle-Free:</strong> No credit check required for subscription service</li>
          </ul>

          <div className="contact-cta">
            <p>For rentals and subscriptions, contact:</p>
            <p><a href="mailto:rentals@byd.com">rentals@byd.com</a></p>
          </div>
        </div>
      </section>

      <section className="luxury-section subscription-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title">Ready to Get Started?</h2>
          <p className="section-subtitle">
            Experience the BYD difference and join millions of satisfied drivers worldwide
          </p>
          
          <div className="luxury-cards-grid">
            <div className="luxury-card">
              <div className="card-icon">🚗</div>
              <div className="card-content">
                <h3 className="card-title">Schedule Test Drive</h3>
                <p className="card-description">
                  Experience BYD innovation firsthand at any of our locations
                </p>
              </div>
            </div>
            <div className="luxury-card">
              <div className="card-icon">📍</div>
              <div className="card-content">
                <h3 className="card-title">Find a Location</h3>
                <p className="card-description">
                  Visit our dealerships and service centers near you
                </p>
              </div>
            </div>
            <div className="luxury-card">
              <div className="card-icon">💬</div>
              <div className="card-content">
                <h3 className="card-title">Contact Sales</h3>
                <p className="card-description">
                  Speak with our expert team to find the perfect solution
                </p>
              </div>
            </div>
          </div>

          <div className="contact-cta" style={{marginTop: '5rem'}}>
            <p style={{fontSize: '1.4rem', marginBottom: '2rem'}}>Questions about purchasing?</p>
            <p>Call us at <a href="tel:+1234567890">+1 (234) 567-890</a></p>
            <p>Email us at <a href="mailto:sales@byd.com">sales@byd.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Purchasing;