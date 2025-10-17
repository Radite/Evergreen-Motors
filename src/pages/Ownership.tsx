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

    scrollToHash();

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
          transition: opacity 1.2s ease-out, transform 1.2s ease-out;
        }

        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .luxury-ownership-hero {
          height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)),
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
          max-width: 1000px;
          padding: 3rem;
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
          scroll-margin-top: 80px;
        }

        /* SERVICE SECTION - Grid with feature cards */
        .service-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        }

        .service-header {
          text-align: center;
          margin-bottom: 6rem;
        }

        .service-header h2 {
          font-size: 4.5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          color: #333;
        }

        .service-subtitle {
          font-size: 1.4rem;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
          max-width: 800px;
          margin: 0 auto;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          margin-bottom: 5rem;
        }

        .service-card {
          background: white;
          border: 1px solid rgba(0,0,0,0.08);
          overflow: hidden;
          transition: all 0.5s ease;
          position: relative;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #4a9eff 0%, #00d4ff 100%);
          transform: scaleX(0);
          transition: transform 0.5s ease;
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 30px 70px rgba(74, 158, 255, 0.2);
          border-color: rgba(74, 158, 255, 0.3);
        }

        .service-icon {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.05) 0%, rgba(53, 122, 189, 0.05) 100%);
          transition: all 0.5s ease;
        }

        .service-card:hover .service-icon {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.12) 0%, rgba(53, 122, 189, 0.12) 100%);
          font-size: 5.5rem;
        }

        .service-content {
          padding: 2.5rem;
        }

        .service-title {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
          color: #333;
        }

        .service-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .service-schedule {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.05) 0%, rgba(53, 122, 189, 0.05) 100%);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(74, 158, 255, 0.2);
          padding: 4rem;
          margin-top: 5rem;
        }

        .service-schedule h3 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 3px;
          color: #4a9eff;
          text-align: center;
        }

        .schedule-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .schedule-item {
          padding: 2rem;
          background: white;
          border-left: 4px solid #4a9eff;
          transition: all 0.4s ease;
        }

        .schedule-item:hover {
          padding-left: 3rem;
          border-left-width: 6px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .schedule-item strong {
          display: block;
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: #333;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
        }

        .schedule-item span {
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 1.05rem;
        }

        /* ROADSIDE SECTION - Dark immersive with emergency CTA */
        .roadside-section {
          background: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)),
                      url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2000') center/cover;
          color: white;
        }

        .roadside-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .roadside-header {
          text-align: center;
          margin-bottom: 6rem;
        }

        .roadside-header h2 {
          font-size: 5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 8px;
          font-family: 'Cormorant Garamond', serif;
        }

        .roadside-subtitle {
          font-size: 1.4rem;
          opacity: 0.95;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
        }

        .roadside-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          margin-bottom: 6rem;
        }

        .roadside-card {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255,255,255,0.15);
          padding: 3rem;
          transition: all 0.5s ease;
          position: relative;
          overflow: hidden;
        }

        .roadside-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #4a9eff 0%, #00d4ff 100%);
          transform: scaleX(0);
          transition: transform 0.5s ease;
        }

        .roadside-card:hover::after {
          transform: scaleX(1);
        }

        .roadside-card:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.3);
          transform: translateY(-10px);
          box-shadow: 0 25px 60px rgba(74, 158, 255, 0.3);
        }

        .roadside-icon {
          font-size: 4.5rem;
          margin-bottom: 2rem;
          display: block;
        }

        .roadside-card h3 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
        }

        .roadside-card p {
          font-size: 1.15rem;
          line-height: 1.8;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          opacity: 0.9;
        }

        .emergency-cta {
          text-align: center;
          padding: 5rem 4rem;
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.15) 0%, rgba(0, 212, 255, 0.15) 100%);
          backdrop-filter: blur(30px);
          border: 2px solid rgba(74, 158, 255, 0.4);
          position: relative;
          overflow: hidden;
        }

        .emergency-cta::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(74, 158, 255, 0.1) 0%, transparent 70%);
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }

        .emergency-cta h3 {
          font-size: 3rem;
          margin-bottom: 2rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 4px;
          position: relative;
          z-index: 1;
        }

        .emergency-number {
          font-size: 4rem;
          color: #4a9eff;
          font-weight: 600;
          font-family: 'Montserrat', sans-serif;
          letter-spacing: 4px;
          margin: 2rem 0;
          position: relative;
          z-index: 1;
        }

        .emergency-availability {
          font-size: 1.3rem;
          opacity: 0.95;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          letter-spacing: 2px;
          position: relative;
          z-index: 1;
        }

        /* WARRANTY SECTION - Split with visual accent */
        .warranty-section {
          background: white;
          padding: 0;
          min-height: 100vh;
        }

        .warranty-split {
          display: grid;
          grid-template-columns: 40% 60%;
          min-height: 100vh;
        }

        .warranty-visual {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.9) 0%, rgba(53, 122, 189, 0.9) 100%),
                      url('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2000') center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          padding: 4rem;
          position: relative;
        }

        .warranty-visual-content {
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .warranty-visual h2 {
          font-size: 5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 8px;
          font-family: 'Cormorant Garamond', serif;
        }

        .warranty-visual p {
          font-size: 1.4rem;
          line-height: 2;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
        }

        .warranty-content {
          padding: 8rem 6rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
        }

        .warranty-cards {
          display: grid;
          gap: 2.5rem;
        }

        .warranty-card {
          background: white;
          border: 1px solid rgba(0,0,0,0.08);
          padding: 3rem;
          position: relative;
          transition: all 0.4s ease;
        }

        .warranty-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, #4a9eff 0%, #00d4ff 100%);
          transform: scaleY(0);
          transition: transform 0.4s ease;
        }

        .warranty-card:hover::before {
          transform: scaleY(1);
        }

        .warranty-card:hover {
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
          transform: translateX(10px);
        }

        .warranty-card-icon {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          display: block;
        }

        .warranty-card h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
          color: #333;
        }

        .warranty-period {
          display: block;
          font-size: 1.5rem;
          color: #4a9eff;
          margin-bottom: 1rem;
          font-weight: 600;
          font-family: 'Montserrat', sans-serif;
        }

        .warranty-card p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        /* MEMBERSHIP SECTION - Premium cards layout */
        .membership-section {
          background: linear-gradient(rgba(10,10,15,0.85), rgba(10,10,15,0.9)),
                      url('https://images.unsplash.com/photo-1556742393-d75f468bfcb0?q=80&w=2000') center/cover;
          color: white;
        }

        .membership-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .membership-header {
          text-align: center;
          margin-bottom: 6rem;
        }

        .membership-header h2 {
          font-size: 4.5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 8px;
          font-family: 'Cormorant Garamond', serif;
        }

        .membership-subtitle {
          font-size: 1.4rem;
          opacity: 0.95;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
        }

        .membership-benefits {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          margin-bottom: 5rem;
        }

        .benefit-card {
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255,255,255,0.15);
          padding: 3rem 2.5rem;
          text-align: center;
          transition: all 0.5s ease;
          position: relative;
        }

        .benefit-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(135deg, #4a9eff 0%, #00d4ff 100%);
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: -1;
        }

        .benefit-card:hover::before {
          opacity: 0.2;
        }

        .benefit-card:hover {
          transform: scale(1.05);
          border-color: rgba(74, 158, 255, 0.5);
          box-shadow: 0 25px 60px rgba(74, 158, 255, 0.3);
        }

        .benefit-icon {
          font-size: 4.5rem;
          margin-bottom: 2rem;
          display: block;
        }

        .benefit-card h3 {
          font-size: 1.9rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
        }

        .benefit-card p {
          font-size: 1.1rem;
          line-height: 1.8;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          opacity: 0.9;
        }

        .charge-card-info {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.12) 0%, rgba(53, 122, 189, 0.12) 100%);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(74, 158, 255, 0.3);
          padding: 4rem;
        }

        .charge-card-info h3 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 3px;
          text-align: center;
        }

        .charge-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .charge-feature {
          padding: 1.5rem;
          background: rgba(255,255,255,0.05);
          border-left: 3px solid #4a9eff;
          transition: all 0.4s ease;
        }

        .charge-feature:hover {
          padding-left: 2.5rem;
          background: rgba(255,255,255,0.1);
        }

        .charge-feature strong {
          display: block;
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: white;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
        }

        .charge-feature span {
          color: rgba(255,255,255,0.85);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 1.05rem;
        }

        .membership-cta {
          text-align: center;
          font-size: 1.2rem;
          margin-top: 3rem;
        }

        .membership-cta a {
          color: #4a9eff;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .membership-cta a:hover {
          color: #6bb0ff;
        }

        /* CHARGING SECTION - Map with interactive elements */
        .charging-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        }

        .charging-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .charging-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .charging-header h2 {
          font-size: 4.5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          color: #333;
        }

        .charging-subtitle {
          font-size: 1.4rem;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
        }

        .charging-options {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          margin-bottom: 5rem;
        }

        .charging-option {
          background: white;
          border: 1px solid rgba(0,0,0,0.08);
          padding: 3rem 2.5rem;
          text-align: center;
          transition: all 0.5s ease;
        }

        .charging-option:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 60px rgba(74, 158, 255, 0.15);
          border-color: rgba(74, 158, 255, 0.3);
        }

        .charging-option-icon {
          font-size: 5rem;
          margin-bottom: 2rem;
          display: block;
          transition: all 0.4s ease;
        }

        .charging-option:hover .charging-option-icon {
          font-size: 5.5rem;
        }

        .charging-option h3 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
          color: #333;
        }

        .charging-option p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .map-container {
          height: 500px;
          background: rgba(0,0,0,0.03);
          border: 1px solid rgba(0,0,0,0.08);
          overflow: hidden;
          margin-bottom: 5rem;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
        }

        .charging-specs {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.05) 0%, rgba(53, 122, 189, 0.05) 100%);
          border: 1px solid rgba(74, 158, 255, 0.2);
          padding: 4rem;
        }

        .charging-specs h3 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 3px;
          color: #4a9eff;
          text-align: center;
        }

        .specs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .spec-item {
          padding: 2rem;
          background: white;
          border-left: 4px solid #4a9eff;
          transition: all 0.4s ease;
        }

        .spec-item:hover {
          padding-left: 3rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .spec-item strong {
          display: block;
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: #333;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
        }

        .spec-item span {
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 1.05rem;
        }

        @media (max-width: 1200px) {
          .service-grid,
          .roadside-cards,
          .membership-benefits,
          .charging-options {
            grid-template-columns: 1fr 1fr;
          }

          .warranty-split {
            grid-template-columns: 1fr;
          }

          .warranty-visual {
            min-height: 50vh;
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 3.5rem;
            letter-spacing: 6px;
          }

          .service-grid,
          .roadside-cards,
          .membership-benefits,
          .charging-options,
          .charge-features,
          .schedule-list,
          .specs-grid {
            grid-template-columns: 1fr;
          }

          .warranty-content {
            padding: 4rem 2rem;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <div className="luxury-ownership-hero">
        <div className="hero-content">
          <h1>OWNERSHIP</h1>
          <p className="subtitle">Excellence in Every Journey</p>
          <p>
            At Evergreen Motors, ownership is more than a transaction—it's a partnership. 
            We're committed to providing exceptional service, support, and peace of mind 
            throughout your entire ownership experience.
          </p>
        </div>
      </div>

      {/* SERVICE & MAINTENANCE SECTION */}
      <section id="service-maintenance" className="luxury-section service-section fade-in-section">
        <div className="section-content">
          <div className="service-header">
            <h2>Service & Maintenance</h2>
            <p className="service-subtitle">
              Our certified BYD technicians provide expert service to keep your electric vehicle 
              in optimal condition using state-of-the-art diagnostic equipment and genuine parts.
            </p>
          </div>

          <div className="service-grid">
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <div className="service-content">
                <h3 className="service-title">Regular Maintenance</h3>
                <p className="service-description">
                  Comprehensive scheduled service ensures optimal performance, efficiency, 
                  and longevity of your BYD vehicle.
                </p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">🔋</div>
              <div className="service-content">
                <h3 className="service-title">Battery Service</h3>
                <p className="service-description">
                  Expert Blade Battery diagnostics, health assessments, and maintenance 
                  for peak efficiency and range.
                </p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">💻</div>
              <div className="service-content">
                <h3 className="service-title">Software Updates</h3>
                <p className="service-description">
                  Latest software and system enhancements delivered seamlessly to improve 
                  features and performance.
                </p>
              </div>
            </div>
          </div>

          <div className="service-schedule">
            <h3>Recommended Service Schedule</h3>
            <div className="schedule-list">
              <div className="schedule-item">
                <strong>First Service</strong>
                <span>10,000 miles or 12 months</span>
              </div>
              <div className="schedule-item">
                <strong>Regular Service</strong>
                <span>Every 10,000 miles or 12 months</span>
              </div>
              <div className="schedule-item">
                <strong>Battery Health Check</strong>
                <span>Annual assessment included</span>
              </div>
              <div className="schedule-item">
                <strong>Software Updates</strong>
                <span>As released by BYD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROADSIDE ASSISTANCE SECTION */}
      <section id="roadside-assistance" className="luxury-section roadside-section fade-in-section">
        <div className="roadside-container">
          <div className="roadside-header">
            <h2>Roadside Assistance</h2>
            <p className="roadside-subtitle">
              Evergreen Motors Roadside Assistance provides comprehensive support 24 hours a day, 
              7 days a week, ensuring complete peace of mind on every journey.
            </p>
          </div>

          <div className="roadside-cards">
            <div className="roadside-card">
              <span className="roadside-icon">🔧</span>
              <h3>Emergency Repairs</h3>
              <p>
                On-site minor repairs and expert troubleshooting assistance to get you back 
                on the road quickly and safely.
              </p>
            </div>
            <div className="roadside-card">
              <span className="roadside-icon">🚗</span>
              <h3>Towing Service</h3>
              <p>
                Complimentary towing to the nearest Evergreen Motors service center whenever 
                your vehicle needs professional attention.
              </p>
            </div>
            <div className="roadside-card">
              <span className="roadside-icon">🔋</span>
              <h3>Emergency Charging</h3>
              <p>
                Mobile charging assistance delivered to your location if you unexpectedly 
                run out of power.
              </p>
            </div>
          </div>

          <div className="emergency-cta">
            <h3>Emergency Contact</h3>
            <div className="emergency-number">1-800-EVERGREEN</div>
            <p className="emergency-availability">Available 24/7/365</p>
          </div>
        </div>
      </section>

      {/* WARRANTY SECTION */}
      <section id="warranty" className="warranty-section fade-in-section">
        <div className="warranty-split">
          <div className="warranty-visual">
            <div className="warranty-visual-content">
              <h2>Warranty Coverage</h2>
              <p>
                Evergreen Motors offers one of the most comprehensive warranty programs 
                in the electric vehicle industry, backed by BYD's commitment to quality 
                and your complete confidence.
              </p>
            </div>
          </div>

          <div className="warranty-content">
            <div className="warranty-cards">
              <div className="warranty-card">
                <span className="warranty-card-icon">🛡️</span>
                <h3>Vehicle Warranty</h3>
                <span className="warranty-period">6 Years / 150,000 Miles</span>
                <p>
                  Comprehensive coverage for the entire vehicle including all major components, 
                  systems, and workmanship.
                </p>
              </div>

              <div className="warranty-card">
                <span className="warranty-card-icon">🔋</span>
                <h3>Battery Warranty</h3>
                <span className="warranty-period">8 Years / 150,000 Miles</span>
                <p>
                  Blade Battery coverage with capacity guarantee ensuring long-term performance 
                  and reliability.
                </p>
              </div>

              <div className="warranty-card">
                <span className="warranty-card-icon">⚡</span>
                <h3>Powertrain Warranty</h3>
                <span className="warranty-period">8 Years / 150,000 Miles</span>
                <p>
                  Electric motor, drivetrain, and power electronics fully covered for your 
                  peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP SECTION */}
      <section id="membership" className="luxury-section membership-section fade-in-section">
        <div className="membership-container">
          <div className="membership-header">
            <h2>Membership & Charge Cards</h2>
            <p className="membership-subtitle">
              Join the Evergreen Motors Membership program and enjoy exclusive benefits, 
              charging discounts, and priority service at all locations.
            </p>
          </div>

          <div className="membership-benefits">
            <div className="benefit-card">
              <span className="benefit-icon">⭐</span>
              <h3>Priority Service</h3>
              <p>
                Skip the line with priority service appointments and expedited maintenance 
                at all Evergreen Motors locations.
              </p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">🔌</span>
              <h3>Charging Discounts</h3>
              <p>
                Save up to 20% on public charging networks nationwide with your exclusive 
                member rate.
              </p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">🎁</span>
              <h3>Exclusive Perks</h3>
              <p>
                Access to member-only events, special offers, and early access to new 
                models and features.
              </p>
            </div>
          </div>

          <div className="charge-card-info">
            <h3>Evergreen Charge Card Benefits</h3>
            <div className="charge-features">
              <div className="charge-feature">
                <strong>Universal Access</strong>
                <span>Use at thousands of charging stations nationwide</span>
              </div>
              <div className="charge-feature">
                <strong>Mobile App Integration</strong>
                <span>Find, reserve, and pay for charging seamlessly</span>
              </div>
              <div className="charge-feature">
                <strong>Consolidated Billing</strong>
                <span>One monthly statement for all charging sessions</span>
              </div>
              <div className="charge-feature">
                <strong>Charging Analytics</strong>
                <span>Track your sessions, costs, and savings</span>
              </div>
            </div>
            <p className="membership-cta">
              Learn more: <a href="mailto:membership@evergreenmotor.com">membership@evergreenmotor.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* CHARGING LOCATIONS SECTION */}
      <section id="charging-locations" className="luxury-section charging-section fade-in-section">
        <div className="charging-container">
          <div className="charging-header">
            <h2>Charging Locations</h2>
            <p className="charging-subtitle">
              Access thousands of charging stations nationwide through our partnerships 
              with major charging networks and find charging wherever you go.
            </p>
          </div>

          <div className="charging-options">
            <div className="charging-option">
              <span className="charging-option-icon">⚡</span>
              <h3>Fast Charging</h3>
              <p>
                DC fast charging stations for quick top-ups during your journey—perfect 
                for long-distance travel.
              </p>
            </div>
            <div className="charging-option">
              <span className="charging-option-icon">🏢</span>
              <h3>Destination Charging</h3>
              <p>
                Level 2 chargers at hotels, restaurants, shopping centers, and entertainment 
                venues.
              </p>
            </div>
            <div className="charging-option">
              <span className="charging-option-icon">🏠</span>
              <h3>Home Charging</h3>
              <p>
                Professional installation support for home charging solutions with expert 
                guidance.
              </p>
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

          <div className="charging-specs">
            <h3>Charging Speed Reference</h3>
            <div className="specs-grid">
              <div className="spec-item">
                <strong>Level 1 (120V)</strong>
                <span>3-5 miles of range per hour</span>
              </div>
              <div className="spec-item">
                <strong>Level 2 (240V)</strong>
                <span>20-30 miles of range per hour</span>
              </div>
              <div className="spec-item">
                <strong>DC Fast Charging</strong>
                <span>80% charge in 30-45 minutes</span>
              </div>
              <div className="spec-item">
                <strong>Ultra-Fast Charging</strong>
                <span>200+ miles in 15 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ownership;