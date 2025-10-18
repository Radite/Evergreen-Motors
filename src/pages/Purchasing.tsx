import { useEffect } from 'react';

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

        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease, transform 1s ease;
        }

        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
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

        .card-image {
          width: 100%;
          height: 250px;
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
          transition: transform 0.5s ease;
        }

        .card-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.4) 100%);
        }

        .luxury-card:hover .card-image {
          transform: scale(1.05);
        }

        .card-content {
          padding: 2.5rem;
        }

        .card-title {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
        }

        .card-description {
          font-size: 1.1rem;
          line-height: 1.8;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          opacity: 0.9;
        }

        .process-box {
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255,255,255,0.2);
          padding: 3rem;
          margin: 4rem 0;
        }

        .process-box h3 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 3px;
          color: #4a9eff;
        }

        .process-box ol {
          list-style: none;
          counter-reset: step-counter;
          padding: 0;
        }

        .process-box ol li {
          counter-increment: step-counter;
          margin-bottom: 2rem;
          padding-left: 4rem;
          position: relative;
          font-size: 1.2rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          line-height: 1.8;
        }

        .process-box ol li::before {
          content: counter(step-counter);
          position: absolute;
          left: 0;
          top: 0;
          width: 2.5rem;
          height: 2.5rem;
          background: linear-gradient(135deg, #4a9eff 0%, #00d4ff 100%);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-family: 'Montserrat', sans-serif;
        }

        .benefits-list {
          list-style: none;
          padding: 0;
          margin: 4rem 0;
        }

        .benefits-list li {
          margin-bottom: 2rem;
          padding: 2rem;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255,255,255,0.15);
          border-left: 4px solid #4a9eff;
          transition: all 0.3s ease;
        }

        .benefits-list li:hover {
          background: rgba(255,255,255,0.1);
          border-left-width: 8px;
          transform: translateX(10px);
        }

        .benefits-list li strong {
          display: block;
          font-size: 1.4rem;
          margin-bottom: 0.8rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
          color: #4a9eff;
        }

        .benefits-list li {
          font-size: 1.1rem;
          line-height: 1.8;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .contact-cta {
          text-align: center;
          padding: 3rem;
          margin: 4rem 0;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255,255,255,0.2);
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
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 1px;
          transition: color 0.3s ease;
        }

        .contact-cta a:hover {
          color: #00d4ff;
        }

        @media (max-width: 1024px) {
          .luxury-cards-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .hero-content h1 {
            font-size: 4rem;
            letter-spacing: 8px;
          }

          .section-title {
            font-size: 3.5rem;
            letter-spacing: 5px;
          }

          .luxury-section {
            padding: 4rem 5%;
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 3rem;
            letter-spacing: 5px;
          }

          .section-title {
            font-size: 2.5rem;
          }
        }
      `}</style>

      <div className="luxury-hero">
        <div className="hero-content">
          <h1>PURCHASING</h1>
          <p className="subtitle">Your Path to Electric Excellence</p>
          <p>
            Discover flexible purchasing options designed to make your transition to electric 
            driving seamless, affordable, and tailored to your unique needs.
          </p>
        </div>
      </div>

      <section className="luxury-section cash-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title">Cash Purchase</h2>
          <p className="section-subtitle">
            Own your BYD outright with no interest charges and enjoy immediate equity, 
            complete ownership freedom, and maximum long-term value.
          </p>
          
          <div className="luxury-cards-grid">
            <div className="luxury-card">
              <div 
                className="card-image"
                style={{backgroundImage: 'url(https://images.unsplash.com/photo-1554224311-beee460c201f?q=80&w=1200)'}}
              ></div>
              <div className="card-content">
                <h3 className="card-title">No Interest Charges</h3>
                <p className="card-description">
                  Save thousands over the life of ownership by avoiding financing costs and 
                  interest payments completely.
                </p>
              </div>
            </div>
            <div className="luxury-card">
              <div 
                className="card-image"
                style={{backgroundImage: 'url(https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=1200)'}}
              ></div>
              <div className="card-content">
                <h3 className="card-title">Immediate Ownership</h3>
                <p className="card-description">
                  Full title transfer on delivery with no restrictions, allowing complete freedom 
                  to modify, sell, or trade your vehicle anytime.
                </p>
              </div>
            </div>
            <div className="luxury-card">
              <div 
                className="card-image"
                style={{backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200)'}}
              ></div>
              <div className="card-content">
                <h3 className="card-title">Maximum Value</h3>
                <p className="card-description">
                  Build equity from day one and benefit from the highest resale value with no 
                  mileage restrictions or wear penalties.
                </p>
              </div>
            </div>
          </div>

          <div className="process-box">
            <h3>Purchase Process</h3>
            <ol>
              <li>Select your preferred BYD model and configuration</li>
              <li>Review vehicle specifications and finalize order details</li>
              <li>Arrange payment via wire transfer or certified funds</li>
              <li>Complete documentation and title transfer</li>
              <li>Take delivery of your new electric vehicle</li>
            </ol>
          </div>

          <div className="contact-cta">
            <p>Ready to purchase your BYD?</p>
            <p><a href="mailto:sales@evergreenmotor.tc">sales@evergreenmotor.tc</a> | <a href="tel:+16494329988">+1 (649) 432-9988</a></p>
          </div>
        </div>
      </section>

      <section className="luxury-section finance-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title" style={{color: '#333'}}>Financing Options</h2>
          <p className="section-subtitle" style={{color: '#666'}}>
            Partner with leading financial institutions for competitive rates and flexible terms 
            tailored to your budget and lifestyle.
          </p>
          
          <div className="luxury-cards-grid">
            <div className="luxury-card light-card">
              <div 
                className="card-image"
                style={{backgroundImage: 'url(https://images.unsplash.com/photo-1554224311-beee460c201f?q=80&w=1200)'}}
              ></div>
              <div className="card-content">
                <h3 className="card-title" style={{color: '#333'}}>Bank Financing</h3>
                <p className="card-description" style={{color: '#666'}}>
                  Access preferential interest rates through our partner banks with flexible 
                  terms from 24 to 84 months and competitive APR.
                </p>
              </div>
            </div>
            <div className="luxury-card light-card">
              <div 
                className="card-image"
                style={{backgroundImage: 'url(https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=1200)'}}
              ></div>
              <div className="card-content">
                <h3 className="card-title" style={{color: '#333'}}>Dealer Financing</h3>
                <p className="card-description" style={{color: '#666'}}>
                  Convenient in-house financing with competitive rates, special promotions, 
                  and personalized service from our finance team.
                </p>
              </div>
            </div>
            <div className="luxury-card light-card">
              <div 
                className="card-image"
                style={{backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200)'}}
              ></div>
              <div className="card-content">
                <h3 className="card-title" style={{color: '#333'}}>Quick Approval</h3>
                <p className="card-description" style={{color: '#666'}}>
                  Fast pre-approval process, often within 24 hours, to get you driving your 
                  new BYD sooner with minimal hassle.
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
            <p><a href="mailto:finance@evergreenmotor.tc">finance@evergreenmotor.tc</a></p>
          </div>
        </div>
      </section>

      <section className="luxury-section lease-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title">Leasing Options</h2>
          <p className="section-subtitle">
            Drive the latest BYD technology with flexible lease terms and enjoy hassle-free 
            ownership with lower monthly payments.
          </p>
          
          <ul className="benefits-list">
            <li>
              <strong>Lower Monthly Payments</strong>
              Pay significantly less per month compared to traditional financing options while 
              enjoying premium electric vehicle ownership.
            </li>
            <li>
              <strong>Latest Technology</strong>
              Upgrade to newer models every few years and always drive the newest features, 
              innovations, and improved range capabilities.
            </li>
            <li>
              <strong>Warranty Coverage</strong>
              Most leases are fully covered by manufacturer warranty throughout the lease term 
              for complete peace of mind.
            </li>
            <li>
              <strong>Tax Benefits</strong>
              Potential business tax deductions for qualified business use, reducing your 
              overall ownership costs significantly.
            </li>
            <li>
              <strong>Flexibility</strong>
              Simple return process at lease end or option to purchase your vehicle at 
              predetermined residual value.
            </li>
          </ul>

          <div className="luxury-cards-grid">
            <div className="luxury-card">
              <div 
                className="card-image"
                style={{backgroundImage: 'url(https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=1200)'}}
              ></div>
              <div className="card-content">
                <h3 className="card-title">24-Month Lease</h3>
                <p className="card-description">
                  Short-term flexibility perfect for those who want the latest models 
                  and newest technology every two years.
                </p>
              </div>
            </div>
            <div className="luxury-card">
              <div 
                className="card-image"
                style={{backgroundImage: 'url(https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200)'}}
              ></div>
              <div className="card-content">
                <h3 className="card-title">36-Month Lease</h3>
                <p className="card-description">
                  Most popular option with balanced payments and optimal term length 
                  for the perfect ownership experience.
                </p>
              </div>
            </div>
            <div className="luxury-card">
              <div 
                className="card-image"
                style={{backgroundImage: 'url(https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200)'}}
              ></div>
              <div className="card-content">
                <h3 className="card-title">48-Month Lease</h3>
                <p className="card-description">
                  Lowest monthly payments with extended term for maximum affordability 
                  and long-term budget planning.
                </p>
              </div>
            </div>
          </div>

          <div className="contact-cta">
            <p>Contact us for personalized lease quotes:</p>
            <p><a href="mailto:lease@evergreenmotor.tc">lease@evergreenmotor.tc</a></p>
          </div>
        </div>
      </section>

      <section className="luxury-section fleet-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title" style={{color: '#333'}}>Fleet & Business Solutions</h2>
          <p className="section-subtitle" style={{color: '#666'}}>
            Transform your business fleet with BYD electric vehicles and dramatically reduce 
            operational costs while meeting sustainability goals.
          </p>
          
          <div className="luxury-cards-grid">
            <div className="luxury-card light-card">
              <div 
                className="card-image"
                style={{backgroundImage: 'url(https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1200)'}}
              ></div>
              <div className="card-content">
                <h3 className="card-title" style={{color: '#333'}}>Corporate Fleets</h3>
                <p className="card-description" style={{color: '#666'}}>
                  Volume pricing and dedicated fleet management support for your organization 
                  with customized solutions and priority service.
                </p>
              </div>
            </div>
            <div className="luxury-card light-card">
              <div 
                className="card-image"
                style={{backgroundImage: 'url(https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=1200)'}}
              ></div>
              <div className="card-content">
                <h3 className="card-title" style={{color: '#333'}}>Commercial Vehicles</h3>
                <p className="card-description" style={{color: '#666'}}>
                  Electric vans and trucks perfect for delivery and logistics operations 
                  with significantly lower operating costs.
                </p>
              </div>
            </div>
            <div className="luxury-card light-card">
              <div 
                className="card-image"
                style={{backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200)'}}
              ></div>
              <div className="card-content">
                <h3 className="card-title" style={{color: '#333'}}>Government Solutions</h3>
                <p className="card-description" style={{color: '#666'}}>
                  Special programs designed specifically for government and municipal fleets 
                  with competitive pricing and dedicated support.
                </p>
              </div>
            </div>
          </div>

          <ul className="benefits-list" style={{background: 'rgba(74, 158, 255, 0.05)', border: '1px solid rgba(74, 158, 255, 0.2)'}}>
            <li style={{color: '#333'}}>
              <strong style={{color: '#4a9eff'}}>Lower Operating Costs</strong>
              Reduced fuel and maintenance expenses with up to 70% savings on operating costs 
              compared to traditional combustion engine fleets.
            </li>
            <li style={{color: '#333'}}>
              <strong style={{color: '#4a9eff'}}>Tax Incentives</strong>
              Federal and local EV tax credits can significantly reduce acquisition costs, 
              improving your return on investment.
            </li>
            <li style={{color: '#333'}}>
              <strong style={{color: '#4a9eff'}}>Sustainability Goals</strong>
              Meet corporate environmental targets and reduce your carbon footprint with 
              zero-emission electric vehicles.
            </li>
            <li style={{color: '#333'}}>
              <strong style={{color: '#4a9eff'}}>Fleet Management</strong>
              Comprehensive fleet management services with telematics, dedicated support team, 
              and priority maintenance scheduling.
            </li>
          </ul>

          <div className="contact-cta" style={{background: 'rgba(74, 158, 255, 0.05)', border: '1px solid rgba(74, 158, 255, 0.2)'}}>
            <p style={{color: '#333'}}>Contact our fleet specialists:</p>
            <p><a href="mailto:fleet@evergreenmotor.tc">fleet@evergreenmotor.tc</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Purchasing;