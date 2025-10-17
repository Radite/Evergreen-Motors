import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Models = () => {
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

  const models = [
    { 
      id: 'dolphin-mini',
      name: 'Dolphin Mini', 
      description: 'Compact elegance meets urban efficiency in this perfectly sized city electric vehicle',
      type: 'City Electric',
      image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=2000',
      price: 'Starting at $28,990',
      range: '250 miles',
      acceleration: '7.5s 0-60mph'
    },
    { 
      id: 'atto-3',
      name: 'Atto 3', 
      description: 'The benchmark electric SUV featuring e-Platform 3.0 technology and exceptional versatility',
      type: 'Electric SUV',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2000',
      price: 'Starting at $38,990',
      range: '260 miles',
      acceleration: '7.3s 0-60mph'
    },
    { 
      id: 'seal-u',
      name: 'Seal U', 
      description: 'Premium electric sedan where sophisticated design meets exhilarating performance',
      type: 'Luxury Sedan',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2000',
      price: 'Starting at $48,990',
      range: '354 miles',
      acceleration: '3.8s 0-60mph'
    },
    { 
      id: 'tang-l',
      name: 'Tang L', 
      description: 'Spacious luxury with three rows of premium comfort and cutting-edge technology',
      type: '7-Seater SUV',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000',
      price: 'Starting at $58,990',
      range: '323 miles',
      acceleration: '4.4s 0-60mph'
    },
    { 
      id: 'han',
      name: 'Han', 
      description: 'Flagship luxury sedan combining breathtaking design with uncompromising performance',
      type: 'Executive Sedan',
      image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=2000',
      price: 'Starting at $54,990',
      range: '379 miles',
      acceleration: '3.9s 0-60mph'
    },
    { 
      id: 'seal',
      name: 'Seal', 
      description: 'Athletic performance sedan with ocean-inspired design and track-ready dynamics',
      type: 'Performance Sedan',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000',
      price: 'Starting at $44,990',
      range: '310 miles',
      acceleration: '3.6s 0-60mph'
    }
  ];

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

        .models-hero {
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

        .models-hero-content {
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

        .models-hero-content h1 {
          font-size: 6rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 12px;
          font-family: 'Cormorant Garamond', serif;
          text-shadow: 2px 2px 20px rgba(0,0,0,0.5);
        }

        .models-hero-content .subtitle {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #4a9eff;
        }

        .models-hero-content p {
          font-size: 1.4rem;
          line-height: 2;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
          text-shadow: 1px 1px 10px rgba(0,0,0,0.5);
        }

        .models-section {
          padding: 8rem 5%;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
          min-height: 100vh;
        }

        .models-intro {
          text-align: center;
          max-width: 1000px;
          margin: 0 auto 8rem;
        }

        .models-intro h2 {
          font-size: 4.5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 8px;
          font-family: 'Cormorant Garamond', serif;
          color: #ffffff;
        }

        .models-intro p {
          font-size: 1.3rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
          line-height: 2;
          color: rgba(255, 255, 255, 0.8);
        }

        .luxury-models-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 4rem;
          max-width: 1600px;
          margin: 0 auto;
        }

        .luxury-model-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
          transition: all 0.6s ease;
          cursor: pointer;
          text-decoration: none;
          color: inherit;
          display: block;
          position: relative;
        }

        .luxury-model-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.1) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.6s ease;
          z-index: 1;
        }

        .luxury-model-card:hover::before {
          opacity: 1;
        }

        .luxury-model-card:hover {
          transform: translateY(-20px);
          box-shadow: 0 30px 80px rgba(74, 158, 255, 0.4);
          border-color: rgba(74, 158, 255, 0.5);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.05) 100%);
        }

        .model-image-container {
          width: 100%;
          height: 350px;
          overflow: hidden;
          position: relative;
        }

        .model-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .luxury-model-card:hover .model-image-container img {
          transform: scale(1.15);
        }

        .model-type-badge {
          position: absolute;
          top: 25px;
          left: 25px;
          background: rgba(74, 158, 255, 0.95);
          backdrop-filter: blur(10px);
          color: white;
          padding: 0.6rem 1.8rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          z-index: 2;
        }

        .luxury-model-info {
          padding: 3rem;
          position: relative;
          z-index: 2;
        }

        .luxury-model-name {
          font-size: 2.8rem;
          margin-bottom: 1.5rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 4px;
          color: #ffffff;
        }

        .luxury-model-description {
          font-size: 1.1rem;
          line-height: 1.9;
          color: rgba(255,255,255,0.75);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          margin-bottom: 2rem;
        }

        .model-specs {
          display: flex;
          gap: 2rem;
          margin-bottom: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .spec-item {
          flex: 1;
        }

        .spec-label {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.5);
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .spec-value {
          font-size: 1.1rem;
          color: #4a9eff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
        }

        .model-price {
          font-size: 1.5rem;
          color: #ffffff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
          margin-bottom: 2rem;
        }

        .luxury-learn-more {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #4a9eff;
          transition: all 0.4s ease;
          text-decoration: none;
          border-bottom: 2px solid transparent;
          padding-bottom: 0.3rem;
        }

        .luxury-learn-more:hover {
          gap: 1.5rem;
          border-bottom-color: #4a9eff;
        }

        .luxury-learn-more::after {
          content: '→';
          font-size: 1.4rem;
          transition: transform 0.4s ease;
        }

        .luxury-model-card:hover .luxury-learn-more::after {
          transform: translateX(5px);
        }

        @media (max-width: 1024px) {
          .luxury-models-grid {
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 3rem;
          }
        }

        @media (max-width: 768px) {
          .models-hero-content h1 {
            font-size: 3.5rem;
            letter-spacing: 6px;
          }

          .luxury-models-grid {
            grid-template-columns: 1fr;
          }

          .models-intro h2 {
            font-size: 3rem;
          }

          .model-specs {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>

      <div className="models-hero">
        <div className="models-hero-content">
          <h1>OUR COLLECTION</h1>
          <p className="subtitle">Electric Excellence</p>
          <p>
            Discover the pinnacle of electric vehicle innovation. Each BYD model in our 
            collection represents the perfect fusion of cutting-edge technology, sustainable 
            design, and luxurious comfort.
          </p>
        </div>
      </div>

      <section className="models-section fade-in-section">
        <div className="models-intro">
          <h2>The Future of Mobility</h2>
          <p>
            At Evergreen Motors, we offer an exceptional range of BYD electric vehicles — 
            each engineered to perfection, designed to inspire, and built to transform 
            the way you drive. Experience the difference that true innovation makes.
          </p>
        </div>

        <div className="luxury-models-grid">
          {models.map((model) => (
            <Link 
              key={model.id} 
              to={`/models/${model.id}`}
              className="luxury-model-card"
            >
              <div className="model-image-container">
                <img src={model.image} alt={model.name} />
                <div className="model-type-badge">{model.type}</div>
              </div>
              <div className="luxury-model-info">
                <h3 className="luxury-model-name">{model.name}</h3>
                <p className="luxury-model-description">{model.description}</p>
                
                <div className="model-specs">
                  <div className="spec-item">
                    <div className="spec-label">Range</div>
                    <div className="spec-value">{model.range}</div>
                  </div>
                  <div className="spec-item">
                    <div className="spec-label">0-60 MPH</div>
                    <div className="spec-value">{model.acceleration}</div>
                  </div>
                </div>

                <div className="model-price">{model.price}</div>
                <span className="luxury-learn-more">Explore Model</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Models;