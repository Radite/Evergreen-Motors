import React, { useEffect } from 'react';

const Contact = () => {
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

        .luxury-contact-hero {
          height: 70vh;
          background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)),
                      url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2000') center/cover;
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

        .contact-info-section {
          background: linear-gradient(rgba(255,255,255,0.97), rgba(255,255,255,0.97)),
                      url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000') center/cover;
        }

        .reasons-section {
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
                      url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000') center/cover;
          color: white;
        }

        .section-content {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
        }

        .contact-info-box {
          background: rgba(255,255,255,0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0,0,0,0.05);
          padding: 4rem;
        }

        .contact-info-box h2 {
          font-size: 3rem;
          margin-bottom: 3rem;
          font-weight: 300;
          letter-spacing: 4px;
          font-family: 'Cormorant Garamond', serif;
          color: #4a9eff;
        }

        .contact-item {
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }

        .contact-item:last-child {
          border-bottom: none;
        }

        .contact-item h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: #333;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 2px;
        }

        .contact-item p,
        .contact-item a {
          font-size: 1.1rem;
          color: #666;
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          line-height: 1.8;
          transition: color 0.3s;
        }

        .contact-item a:hover {
          color: #4a9eff;
        }

        .map-box {
          height: 100%;
          min-height: 600px;
          background: rgba(0,0,0,0.05);
          overflow: hidden;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .section-title {
          font-size: 4rem;
          text-align: center;
          margin-bottom: 4rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
        }

        .luxury-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
        }

        .luxury-card {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 3rem;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .luxury-card:hover {
          transform: translateY(-15px);
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.3);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }

        .card-title {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
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

          .contact-grid {
            grid-template-columns: 1fr;
          }

          .luxury-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="luxury-contact-hero">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with BYD</p>
        </div>
      </div>

      <section className="luxury-section contact-info-section fade-in-section">
        <div className="section-content">
          <div className="contact-grid">
            <div className="contact-info-box">
              <h2>Get In Touch</h2>
              
              <div className="contact-item">
                <h3>📞 Phone</h3>
                <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
              </div>

              <div className="contact-item">
                <h3>📧 Email</h3>
                <p><a href="mailto:info@byd.com">info@byd.com</a></p>
                <p><a href="mailto:sales@byd.com">sales@byd.com</a></p>
              </div>

              <div className="contact-item">
                <h3>📍 Address</h3>
                <p>BYD Headquarters</p>
                <p>3009 BYD Road</p>
                <p>Shenzhen, Guangdong</p>
                <p>China</p>
              </div>

              <div className="contact-item">
                <h3>🕒 Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="map-box">
              <iframe
                title="BYD Location"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{border: 0}}
                src="https://www.openstreetmap.org/export/embed.html?bbox=113.9%2C22.5%2C114.1%2C22.7&layer=mapnik&marker=22.6%2C114.0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="luxury-section reasons-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title">Why Contact Us?</h2>
          <div className="luxury-cards-grid">
            <div className="luxury-card">
              <h3 className="card-title">🚗 Vehicle Inquiries</h3>
              <p className="card-description">
                Learn more about our electric vehicle lineup and find the perfect model for your needs.
              </p>
            </div>
            <div className="luxury-card">
              <h3 className="card-title">💼 Business Partnerships</h3>
              <p className="card-description">
                Explore fleet solutions and business partnership opportunities with BYD.
              </p>
            </div>
            <div className="luxury-card">
              <h3 className="card-title">🔧 Service Support</h3>
              <p className="card-description">
                Get assistance with service, maintenance, and technical support for your BYD vehicle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;