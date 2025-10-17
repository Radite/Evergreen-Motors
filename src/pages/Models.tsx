import React from 'react';
import { Link } from 'react-router-dom';

const Models = () => {
  const models = [
    { 
      id: 'dolfin-mini',
      name: 'Dolfin Mini', 
      description: 'Compact and efficient city car perfect for urban living',
      type: 'City Electric',
      image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=2000',
      price: 'Starting at $28,990'
    },
    { 
      id: 'atto-2',
      name: 'Atto 2', 
      description: 'Smart electric vehicle with advanced connectivity features',
      type: 'Compact SUV',
      image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=2000',
      price: 'Starting at $32,990'
    },
    { 
      id: 'atto-3',
      name: 'Atto 3', 
      description: 'Popular electric SUV with e-Platform 3.0 technology',
      type: 'Electric SUV',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2000',
      price: 'Starting at $38,990'
    },
    { 
      id: 'song-pro',
      name: 'Song Pro', 
      description: 'Versatile family SUV with plug-in hybrid options',
      type: 'Hybrid SUV',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2000',
      price: 'Starting at $42,990'
    },
    { 
      id: 'seal-u',
      name: 'Seal U', 
      description: 'Premium electric sedan with sophisticated design',
      type: 'Luxury Sedan',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2000',
      price: 'Starting at $48,990'
    },
    { 
      id: 'leopard-7',
      name: 'Leopard 7', 
      description: 'Luxury electric SUV with exceptional performance',
      type: 'Premium SUV',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2000',
      price: 'Starting at $62,990'
    },
    { 
      id: 'tang-l',
      name: 'Tang L', 
      description: 'Spacious 7-seater SUV with cutting-edge technology',
      type: '7-Seater SUV',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000',
      price: 'Starting at $58,990'
    },
    { 
      id: 'radar',
      name: 'Radar', 
      description: 'Rugged electric pickup truck for work and adventure',
      type: 'Electric Pickup',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2000',
      price: 'Starting at $54,990'
    },
    { 
      id: 'shark',
      name: 'Shark', 
      description: 'Performance-oriented electric vehicle with bold styling',
      type: 'Performance Electric',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000',
      price: 'Starting at $65,990'
    }
  ];

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        .models-hero {
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

        .models-hero-content {
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

        .models-hero-content h1 {
          font-size: 5.5rem;
          margin-bottom: 1.5rem;
          font-weight: 300;
          letter-spacing: 10px;
          font-family: 'Cormorant Garamond', serif;
          text-shadow: 2px 2px 20px rgba(0,0,0,0.5);
        }

        .models-hero-content p {
          font-size: 1.4rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 2px;
          text-shadow: 1px 1px 10px rgba(0,0,0,0.5);
        }

        .models-section {
          padding: 8rem 5%;
          background: linear-gradient(to bottom, #0a0a0a 0%, #1a1a1a 100%);
        }

        .models-intro {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 6rem;
        }

        .models-intro h2 {
          font-size: 3.5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          color: #ffffff;
        }

        .models-intro p {
          font-size: 1.2rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
          line-height: 2;
          color: rgba(255, 255, 255, 0.7);
        }

        .luxury-models-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 4rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .luxury-model-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .luxury-model-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 20px 60px rgba(74, 158, 255, 0.3);
          border-color: rgba(74, 158, 255, 0.5);
          background: rgba(255, 255, 255, 0.08);
        }

        .model-image-container {
          width: 100%;
          height: 300px;
          overflow: hidden;
          position: relative;
        }

        .model-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .luxury-model-card:hover .model-image-container img {
          transform: scale(1.1);
        }

        .model-type-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(74, 158, 255, 0.9);
          backdrop-filter: blur(10px);
          color: white;
          padding: 0.5rem 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .luxury-model-info {
          padding: 2.5rem;
        }

        .luxury-model-name {
          font-size: 2.2rem;
          margin-bottom: 1rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 3px;
          color: #1a1a1a;
        }

        .luxury-model-description {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          margin-bottom: 1.5rem;
        }

        .model-price {
          font-size: 1.3rem;
          color: #4a9eff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
        }

        .luxury-learn-more {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #4a9eff;
          transition: all 0.3s;
          text-decoration: none;
        }

        .luxury-learn-more:hover {
          gap: 1rem;
          color: #357abd;
        }

        .luxury-learn-more::after {
          content: '→';
          font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .models-hero-content h1 {
            font-size: 3rem;
          }

          .luxury-models-grid {
            grid-template-columns: 1fr;
          }

          .models-intro h2 {
            font-size: 2.5rem;
          }
        }
      `}</style>

      <div className="models-hero">
        <div className="models-hero-content">
          <h1>Our Collection</h1>
          <p>Discover the pinnacle of electric luxury</p>
        </div>
      </div>

      <section className="models-section">
        <div className="models-intro">
          <h2>The Future of Mobility</h2>
          <p>
            Each BYD vehicle represents the perfect fusion of cutting-edge technology, 
            sustainable innovation, and timeless elegance. Explore our complete range 
            of electric and hybrid vehicles designed to elevate every journey.
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
                <div className="model-price">{model.price}</div>
                <span className="luxury-learn-more">Explore</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Models;