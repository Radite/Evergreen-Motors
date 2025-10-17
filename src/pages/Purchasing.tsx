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
          transition: opacity 1.2s ease-out, transform 1.2s ease-out;
        }

        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .luxury-hero {
          height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)),
                      url('https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2000') center/cover;
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
          max-width: 1000px;
          padding: 2rem;
          animation: heroFade 1.8s ease-out;
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
          letter-spacing: 12px;
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

        .cash-section {
          background: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)),
                      url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2000') center/cover;
          color: white;
        }

        .finance-section {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
        }

        .lease-section {
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
                      url('https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2000') center/cover;
          color: white;
        }

        .fleet-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        }

        .section-content {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .section-title {
          font-size: 4.5rem;
          text-align: center;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 8px;
          font-family: 'Cormorant Garamond', serif;
        }

        .section-subtitle {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 5rem;
          font-size: 1.4rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
          opacity: 0.95;
          line-height: 2;
        }

        .luxury-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          margin: 4rem 0;
        }

        .luxury-card {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255,255,255,0.15);
          overflow: hidden;
          transition: all 0.5s ease;
          cursor: pointer;
        }

        .luxury-card:hover {
          transform: translateY(-15px);
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.3);
          box-shadow: 0 30px 70px rgba(0,0,0,0.5);
        }

        .light-card {
          background: white;
          border: 1px solid rgba(0,0,0,0.08);
        }

        .light-card:hover {
          background: rgba(74, 158, 255, 0.02);
          border-color: rgba(74, 158, 255, 0.3);
          box-shadow: 0 30px 70px rgba(74, 158, 255, 0.15);
        }

        .card-icon {
          width: 100%;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.3) 0%, rgba(53, 122, 189, 0.3) 100%);
          transition: all 0.5s ease;
        }

        .luxury-card:hover .card-icon {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.5) 0%, rgba(53, 122, 189, 0.5) 100%);
          font-size: 5.5rem;
        }

        .light-card .card-icon {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.08) 0%, rgba(53, 122, 189, 0.08) 100%);
        }

        .light-card:hover .card-icon {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.15) 0%, rgba(53, 122, 189, 0.15) 100%);
        }

        .card-content {
          padding: 3rem 2.5rem;
        }

        .card-title {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
        }

        .light-card .card-title {
          color: #333;
        }

        .card-description {
          line-height: 1.9;
          opacity: 0.9;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 1.1rem;
        }

        .light-card .card-description {
          color: #666;
        }

        .benefits-list {
          list-style: none;
          padding: 0;
          margin: 4rem 0;
        }

        .benefits-list li {
          padding: 2rem;
          margin-bottom: 2rem;
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(20px);
          border-left: 4px solid #4a9eff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 1.15rem;
          line-height: 1.8;
          transition: all 0.4s ease;
        }

        .benefits-list li:hover {
          background: rgba(255,255,255,0.12);
          padding-left: 3rem;
          border-left-width: 6px;
        }

        .benefits-list strong {
          display: block;
          font-weight: 600;
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          letter-spacing: 1px;
        }

        .process-box {
          margin-top: 5rem;
          padding: 4rem;
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255,255,255,0.15);
        }

        .process-box h3 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 3px;
          text-align: center;
        }

        .process-box ol {
          padding-left: 2rem;
          line-height: 2.5;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 1.15rem;
        }

        .process-box ol li {
          margin-bottom: 1.5rem;
        }

        .contact-cta {
          text-align: center;
          margin-top: 5rem;
          padding: 4rem;
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.12) 0%, rgba(53, 122, 189, 0.12) 100%);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(74, 158, 255, 0.3);
        }

        .contact-cta p {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
        }

        .contact-cta a {
          color: #4a9eff;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          letter-spacing: 1px;
          font-size: 1.2rem;
        }

        .contact-cta a:hover {
          color: #6bb0ff;
        }

        @media (max-width: 1200px) {
          .luxury-cards-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 3.5rem;
            letter-spacing: 6px;
          }
          
          .section-title {
            font-size: 3rem;
            letter-spacing: 4px;
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
          <h1>PURCHASING</h1>
          <p className="subtitle">Your Path to Ownership</p>
          <p>
            At Evergreen Motors, we offer flexible purchasing solutions designed for every lifestyle. 
            Whether you prefer cash purchase, financing, leasing, or subscription, we're here to make 
            your journey to electric mobility seamless and rewarding.
          </p>
        </div>
      </section>

      <section id="cash-purchases" className="luxury-section cash-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title">Cash Purchases</h2>
          <p className="section-subtitle">
            Simple, straightforward vehicle ownership with immediate benefits and complete freedom
          </p>
          
          <ul className="benefits-list">
            <li>
              <strong>No Interest Payments</strong>
              Own your vehicle outright without financing charges or monthly obligations
            </li>
            <li>
              <strong>Immediate Ownership</strong>
              Full ownership from day one with complete control and no restrictions
            </li>
            <li>
              <strong>Simplified Process</strong>
              Faster purchase process with minimal paperwork and no credit checks
            </li>
            <li>
              <strong>Better Pricing</strong>
              Potential for enhanced negotiating power and exclusive cash purchase incentives
            </li>
          </ul>

          <div className="process-box">
            <h3>Simple Purchase Process</h3>
            <ol>
              <li>Select your preferred BYD model from our showroom</li>
              <li>Discuss pricing and available incentives with our sales team</li>
              <li>Complete the purchase agreement and documentation</li>
              <li>Arrange payment via bank transfer or certified check</li>
              <li>Complete registration and drive away in your new BYD</li>
            </ol>
          </div>

          <div className="contact-cta">
            <p>Ready to purchase your BYD?</p>
            <p><a href="mailto:sales@evergreenmotor.com">sales@evergreenmotor.com</a> | <a href="tel:+1234567890">+1 (234) 567-890</a></p>
          </div>
        </div>
      </section>

      <section className="luxury-section finance-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title" style={{color: '#333'}}>Financing Options</h2>
          <p className="section-subtitle" style={{color: '#666'}}>
            Partner with leading financial institutions for competitive rates and flexible terms 
            tailored to your budget and lifestyle
          </p>
          
          <div className="luxury-cards-grid">
            <div className="luxury-card light-card">
              <div className="card-icon">💰</div>
              <div className="card-content">
                <h3 className="card-title">Bank Financing</h3>
                <p className="card-description">
                  Access preferential interest rates through our partner banks with flexible 
                  terms from 24 to 84 months and competitive APR
                </p>
              </div>
            </div>
            <div className="luxury-card light-card">
              <div className="card-icon">🏪</div>
              <div className="card-content">
                <h3 className="card-title">Dealer Financing</h3>
                <p className="card-description">
                  Convenient in-house financing with competitive rates, special promotions, 
                  and personalized service from our finance team
                </p>
              </div>
            </div>
            <div className="luxury-card light-card">
              <div className="card-icon">✅</div>
              <div className="card-content">
                <h3 className="card-title">Quick Approval</h3>
                <p className="card-description">
                  Fast pre-approval process, often within 24 hours, to get you driving your 
                  new BYD sooner with minimal hassle
                </p>
              </div>
            </div>
          </div>

          <div className="process-box" style={{background: 'rgba(74, 158, 255, 0.05)', border: '1px solid rgba(74, 158, 255, 0.2)'}}>
            <h3 style={{color: '#4a9eff'}}>Financing Process</h3>
            <ol style={{color: '#333'}}>
              <li>Submit financing application to partner bank or dealer</li>
              <li>Receive pre-approval and competitive rate quote within 24 hours</li>
              <li>Select your BYD vehicle with your approved budget</li>
              <li>Finalize loan terms and complete all documentation</li>
              <li>Take delivery of your new electric vehicle</li>
            </ol>
          </div>

          <div className="contact-cta" style={{background: 'rgba(74, 158, 255, 0.05)', border: '1px solid rgba(74, 158, 255, 0.2)'}}>
            <p style={{color: '#333'}}>For financing information, contact:</p>
            <p><a href="mailto:finance@evergreenmotor.com">finance@evergreenmotor.com</a></p>
          </div>
        </div>
      </section>

      <section className="luxury-section lease-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title">Leasing Options</h2>
          <p className="section-subtitle">
            Drive the latest BYD technology with flexible lease terms and enjoy hassle-free 
            ownership with lower monthly payments
          </p>
          
          <ul className="benefits-list">
            <li>
              <strong>Lower Monthly Payments</strong>
              Pay significantly less per month compared to traditional financing options
            </li>
            <li>
              <strong>Latest Technology</strong>
              Upgrade to newer models every few years and always drive the newest features
            </li>
            <li>
              <strong>Warranty Coverage</strong>
              Most leases are fully covered by manufacturer warranty for peace of mind
            </li>
            <li>
              <strong>Tax Benefits</strong>
              Potential business tax deductions for qualified business use
            </li>
            <li>
              <strong>Flexibility</strong>
              Simple return process at lease end or option to purchase your vehicle
            </li>
          </ul>

          <div className="luxury-cards-grid">
            <div className="luxury-card">
              <div className="card-icon">24</div>
              <div className="card-content">
                <h3 className="card-title">24-Month Lease</h3>
                <p className="card-description">
                  Short-term flexibility perfect for those who want the latest models 
                  and newest technology every two years
                </p>
              </div>
            </div>
            <div className="luxury-card">
              <div className="card-icon">36</div>
              <div className="card-content">
                <h3 className="card-title">36-Month Lease</h3>
                <p className="card-description">
                  Most popular option with balanced payments and optimal term length 
                  for the perfect ownership experience
                </p>
              </div>
            </div>
            <div className="luxury-card">
              <div className="card-icon">48</div>
              <div className="card-content">
                <h3 className="card-title">48-Month Lease</h3>
                <p className="card-description">
                  Lowest monthly payments with extended term for maximum affordability 
                  and long-term budget planning
                </p>
              </div>
            </div>
          </div>

          <div className="contact-cta">
            <p>Contact us for personalized lease quotes:</p>
            <p><a href="mailto:lease@evergreenmotor.com">lease@evergreenmotor.com</a></p>
          </div>
        </div>
      </section>

      <section className="luxury-section fleet-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title" style={{color: '#333'}}>Fleet & Business Solutions</h2>
          <p className="section-subtitle" style={{color: '#666'}}>
            Transform your business fleet with BYD electric vehicles and dramatically reduce 
            operational costs while meeting sustainability goals
          </p>
          
          <div className="luxury-cards-grid">
            <div className="luxury-card light-card">
              <div className="card-icon">💼</div>
              <div className="card-content">
                <h3 className="card-title">Corporate Fleets</h3>
                <p className="card-description">
                  Volume pricing and dedicated fleet management support for your organization 
                  with customized solutions
                </p>
              </div>
            </div>
            <div className="luxury-card light-card">
              <div className="card-icon">🚚</div>
              <div className="card-content">
                <h3 className="card-title">Commercial Vehicles</h3>
                <p className="card-description">
                  Electric vans and trucks perfect for delivery and logistics operations 
                  with lower operating costs
                </p>
              </div>
            </div>
            <div className="luxury-card light-card">
              <div className="card-icon">🏢</div>
              <div className="card-content">
                <h3 className="card-title">Government Solutions</h3>
                <p className="card-description">
                  Special programs designed specifically for government and municipal fleets 
                  with competitive pricing
                </p>
              </div>
            </div>
          </div>

          <ul className="benefits-list" style={{background: 'rgba(74, 158, 255, 0.05)', border: '1px solid rgba(74, 158, 255, 0.2)'}}>
            <li style={{color: '#333'}}>
              <strong style={{color: '#4a9eff'}}>Lower Operating Costs</strong>
              Reduced fuel and maintenance expenses with up to 70% savings on operating costs
            </li>
            <li style={{color: '#333'}}>
              <strong style={{color: '#4a9eff'}}>Tax Incentives</strong>
              Federal and state EV tax credits can significantly reduce acquisition costs
            </li>
            <li style={{color: '#333'}}>
              <strong style={{color: '#4a9eff'}}>Sustainability Goals</strong>
              Meet corporate environmental targets and reduce your carbon footprint
            </li>
            <li style={{color: '#333'}}>
              <strong style={{color: '#4a9eff'}}>Fleet Management</strong>
              Comprehensive fleet management services and dedicated support team
            </li>
          </ul>

          <div className="contact-cta" style={{background: 'rgba(74, 158, 255, 0.05)', border: '1px solid rgba(74, 158, 255, 0.2)'}}>
            <p style={{color: '#333'}}>Contact our fleet specialists:</p>
            <p><a href="mailto:fleet@evergreenmotor.com">fleet@evergreenmotor.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Purchasing;