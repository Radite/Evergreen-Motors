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
          transition: opacity 1.2s ease-out, transform 1.2s ease-out;
        }

        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .luxury-about-hero {
          height: 100vh;
          background: linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(26,35,126,0.5) 100%),
                      url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000') center/cover;
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
          font-size: 6rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 12px;
          font-family: 'Cormorant Garamond', serif;
          text-shadow: 2px 2px 20px rgba(0,0,0,0.5);
        }

        .tagline {
          font-size: 1.8rem;
          margin-bottom: 2rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #4a9eff;
          text-shadow: 1px 1px 10px rgba(0,0,0,0.5);
        }

        .about-content p {
          font-size: 1.3rem;
          line-height: 2.2;
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

        /* Mission Section - Split Layout */
        .mission-section {
          background: white;
        }

        .mission-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .mission-text h2 {
          font-size: 4.5rem;
          margin-bottom: 3rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          color: #1a1a1a;
        }

        .mission-text p {
          font-size: 1.3rem;
          line-height: 2.2;
          color: #555;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          margin-bottom: 2rem;
        }

        .mission-image {
          height: 600px;
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.2) 0%, rgba(53, 122, 189, 0.2) 100%),
                      url('https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?q=80&w=2000') center/cover;
          box-shadow: 0 30px 80px rgba(0,0,0,0.15);
          transition: transform 0.6s ease;
        }

        .mission-image:hover {
          transform: scale(1.02);
        }

        /* Values Section - Dark with Cards */
        .values-section {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
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
          line-height: 2.2;
          opacity: 0.9;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4rem;
          margin-top: 5rem;
        }

        .value-card {
          text-align: center;
          padding: 4rem 2.5rem;
          background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.08) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.5s ease;
          position: relative;
          overflow: hidden;
        }

        .value-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, transparent, #4a9eff, transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }

        .value-card:hover::before {
          transform: translateX(100%);
        }

        .value-card:hover {
          transform: translateY(-15px);
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.1) 0%, rgba(53, 122, 189, 0.1) 100%);
          border-color: rgba(74, 158, 255, 0.3);
          box-shadow: 0 30px 80px rgba(74, 158, 255, 0.3);
        }

        .value-icon {
          font-size: 4.5rem;
          margin-bottom: 2rem;
          filter: drop-shadow(0 10px 20px rgba(74, 158, 255, 0.3));
        }

        .value-title {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .value-description {
          line-height: 2;
          opacity: 0.85;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 1.05rem;
        }

        /* Stats Section - Full Width Dark */
        .stats-section {
          background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),
                      url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2000') center/cover;
          color: white;
          background-attachment: fixed;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 5rem;
          margin: 4rem 0;
        }

        .stat {
          text-align: center;
          padding: 3rem 2rem;
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(255,255,255,0.1);
          transition: all 0.5s ease;
          position: relative;
        }

        .stat::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #4a9eff, #357abd);
          transition: width 0.5s ease;
        }

        .stat:hover::after {
          width: 80%;
        }

        .stat:hover {
          transform: scale(1.05);
          background: rgba(74, 158, 255, 0.1);
          border-color: rgba(74, 158, 255, 0.5);
          box-shadow: 0 20px 60px rgba(74, 158, 255, 0.3);
        }

        .stat-number {
          font-size: 5rem;
          font-weight: 300;
          color: #4a9eff;
          margin-bottom: 1.5rem;
          font-family: 'Cormorant Garamond', serif;
          letter-spacing: 4px;
        }

        .stat-label {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.9);
          letter-spacing: 3px;
          text-transform: uppercase;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
        }

        /* Story Section - Zigzag Layout */
        .story-section {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        .story-item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
          margin-bottom: 8rem;
        }

        .story-item:last-child {
          margin-bottom: 0;
        }

        .story-item:nth-child(even) {
          direction: rtl;
        }

        .story-item:nth-child(even) > * {
          direction: ltr;
        }

        .story-content h3 {
          font-size: 3rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 4px;
          font-family: 'Cormorant Garamond', serif;
          color: #1a1a1a;
        }

        .story-content p {
          font-size: 1.2rem;
          line-height: 2;
          color: #555;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .story-image {
          height: 450px;
          background-size: cover;
          background-position: center;
          box-shadow: 0 30px 80px rgba(0,0,0,0.2);
          transition: all 0.6s ease;
        }

        .story-image:hover {
          transform: scale(1.03);
          box-shadow: 0 40px 100px rgba(0,0,0,0.3);
        }

        /* Team Section - Light with Overlay */
        .team-section {
          background: white;
        }

        .team-intro {
          text-align: center;
          max-width: 1000px;
          margin: 0 auto 6rem;
        }

        .team-intro h2 {
          font-size: 4.5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 8px;
          font-family: 'Cormorant Garamond', serif;
          color: #1a1a1a;
        }

        .team-intro p {
          font-size: 1.4rem;
          line-height: 2.2;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 4rem;
        }

        .expertise-card {
          padding: 4rem;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-left: 4px solid #4a9eff;
          transition: all 0.5s ease;
        }

        .expertise-card:hover {
          transform: translateX(15px);
          box-shadow: -20px 20px 60px rgba(74, 158, 255, 0.2);
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
        }

        .expertise-card h3 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
          color: #1a1a1a;
        }

        .expertise-card p {
          font-size: 1.1rem;
          line-height: 2;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        @media (max-width: 1024px) {
          .about-content h1 {
            font-size: 4rem;
          }
          
          .section-title, .mission-text h2, .team-intro h2 {
            font-size: 3rem;
          }

          .mission-split, .story-item, .expertise-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .story-item:nth-child(even) {
            direction: ltr;
          }

          .values-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem;
          }
        }

        @media (max-width: 768px) {
          .about-content h1 {
            font-size: 2.5rem;
            letter-spacing: 6px;
          }

          .luxury-section {
            padding: 5rem 5%;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="luxury-about-hero">
        <div className="about-content">
          <h1>EVERGREEN MOTORS</h1>
          <p className="tagline">Driving Innovation, Sustaining Tomorrow</p>
          <p>
            At Evergreen Motors, we're not just selling vehicles—we're pioneering a movement toward sustainable 
            transportation. Since our founding, we've been committed to delivering cutting-edge electric vehicles 
            that combine luxury, performance, and environmental responsibility. Every vehicle we offer represents 
            our dedication to a cleaner, greener future.
          </p>
        </div>
      </div>

      <section className="luxury-section mission-section fade-in-section">
        <div className="section-content">
          <div className="mission-split">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                To revolutionize the automotive industry by making sustainable transportation accessible, 
                desirable, and exceptional. We believe that driving electric doesn't mean compromising on 
                performance, luxury, or experience.
              </p>
              <p>
                Through strategic partnerships with leading manufacturers like BYD, we bring world-class 
                electric vehicles to drivers who demand excellence and sustainability in equal measure.
              </p>
            </div>
            <div className="mission-image"></div>
          </div>
        </div>
      </section>

      <section className="luxury-section values-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">
            The principles that drive everything we do, from selecting our vehicles to serving our customers
          </p>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3 className="value-title">Sustainability</h3>
              <p className="value-description">
                Environmental stewardship isn't just a goal—it's embedded in every decision we make, 
                from the vehicles we offer to our business practices.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3 className="value-title">Innovation</h3>
              <p className="value-description">
                We embrace cutting-edge technology and forward-thinking solutions to deliver vehicles 
                that are as advanced as they are reliable.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">✨</div>
              <h3 className="value-title">Excellence</h3>
              <p className="value-description">
                From our showroom experience to our after-sales service, we maintain the highest 
                standards in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="luxury-section stats-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title">By The Numbers</h2>
          
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-number">5,000+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
            <div className="stat">
              <div className="stat-number">12</div>
              <div className="stat-label">Showroom Locations</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      <section className="luxury-section story-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title">Our Story</h2>
          
          <div className="story-item">
            <div className="story-content">
              <h3>The Beginning</h3>
              <p>
                Evergreen Motors was founded on a simple belief: that the future of transportation should 
                be sustainable without sacrificing the driving experience. We saw an opportunity to bridge 
                the gap between environmental responsibility and automotive excellence.
              </p>
            </div>
            <div 
              className="story-image" 
              style={{background: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2000') center/cover"}}
            ></div>
          </div>

          <div className="story-item">
            <div className="story-content">
              <h3>Growth & Innovation</h3>
              <p>
                As we expanded, we remained committed to our core values. Each new location, each partnership, 
                and each customer relationship has been built on trust, transparency, and a shared vision 
                for a sustainable future.
              </p>
            </div>
            <div 
              className="story-image" 
              style={{background: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000') center/cover"}}
            ></div>
          </div>

          <div className="story-item">
            <div className="story-content">
              <h3>Looking Forward</h3>
              <p>
                Today, we're proud to be at the forefront of the electric vehicle revolution. But we're 
                not done yet. We continue to innovate, expand, and refine our offerings to ensure that 
                every customer experiences the future of driving.
              </p>
            </div>
            <div 
              className="story-image" 
              style={{background: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2000') center/cover"}}
            ></div>
          </div>
        </div>
      </section>

      <section className="luxury-section team-section fade-in-section">
        <div className="section-content">
          <div className="team-intro">
            <h2>Expert Team</h2>
            <p>
              Our success is driven by passionate individuals who share a commitment to excellence and 
              sustainability. From sales to service, every member of the Evergreen Motors family is 
              dedicated to delivering an exceptional experience.
            </p>
          </div>

          <div className="expertise-grid">
            <div className="expertise-card">
              <h3>Sales Excellence</h3>
              <p>
                Our sales team consists of EV specialists who understand the technology, benefits, and 
                nuances of electric vehicles. They're here to guide you, not just sell to you.
              </p>
            </div>
            
            <div className="expertise-card">
              <h3>Technical Expertise</h3>
              <p>
                Our certified technicians are trained on the latest EV technology, ensuring your vehicle 
                receives expert care and maintenance throughout its lifetime.
              </p>
            </div>
            
            <div className="expertise-card">
              <h3>Customer Care</h3>
              <p>
                From your first visit to years down the road, our customer care team is committed to 
                ensuring you have a seamless, supportive ownership experience.
              </p>
            </div>
            
            <div className="expertise-card">
              <h3>Financial Services</h3>
              <p>
                Our finance specialists work with multiple lenders to find competitive rates and flexible 
                terms that make owning an electric vehicle more accessible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;