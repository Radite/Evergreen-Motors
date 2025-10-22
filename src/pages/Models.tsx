import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { models } from './TestDrivePage/data/models'; // Adjust path as needed

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


  // Add this helper function after imports
const getModelSlug = (modelName: string): string => {
  const slugMap: { [key: string]: string } = {
    'BYD Dolphin Mini': 'dolphin-mini',
    'BYD Atto 2': 'atto-2',
    'BYD Atto 3': 'atto-3',
    'iCAR 03 Adventure Ed.': 'icar-03',
    'BYD Seal U': 'seal-u',
    'BYD Sealion 07': 'sealion-07',
    'BYD Tang': 'tang',
    'Radar King Kong': 'radar-king-kong',
    'BYD Song Pro': 'song-pro',
    'BYD Leopard Ti7': 'leopard-ti7',
    'BYD YU8': 'yu8',
    'BYD Shark': 'shark',
  };
  return slugMap[modelName] || modelName.toLowerCase().replace(/\s+/g, '-');
};

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        .models-hero {
          height: 100vh;
          background:
                      url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000') center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
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
          text-shadow: 2px 2px 20px rgba(255,255,255,0.8);
          color: #fff;
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
          font-weight: 400;
          letter-spacing: 1px;
          text-shadow: 1px 1px 10px rgba(255,255,255,0.5);
          max-width: 900px;
          margin: 0 auto;
          color: #fff;
        }

        .models-section {
          padding: 8rem 5%;
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          min-height: 100vh;
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
          color: #1a1a1a;
        }

        .models-intro p {
          font-size: 1.3rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
          line-height: 2;
          color: #4a4a4a;
        }

        .luxury-models-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 4rem;
          max-width: 1600px;
          margin: 0 auto;
        }

        .luxury-model-card {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
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
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.03) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.6s ease;
          z-index: 1;
        }

        .luxury-model-card:hover::before {
          opacity: 1;
        }

        .luxury-model-card:hover {
          transform: translateY(-20px);
          box-shadow: 0 30px 80px rgba(74, 158, 255, 0.15);
          border-color: rgba(74, 158, 255, 0.3);
        }

        .model-image-container {
          width: 100%;
          height: 350px;
          overflow: hidden;
          position: relative;
          background: #f8f9fa;
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

        .model-availability-badge {
          position: absolute;
          top: 25px;
          right: 25px;
          background: rgba(255, 152, 0, 0.95);
          backdrop-filter: blur(10px);
          color: white;
          padding: 0.6rem 1.8rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          z-index: 2;
        }

        .luxury-model-info {
          padding: 3rem;
          position: relative;
          z-index: 2;
          background: #ffffff;
        }

        .luxury-model-name {
          font-size: 2.8rem;
          margin-bottom: 1.5rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 4px;
          color: #1a1a1a;
        }

        .luxury-model-category {
          font-size: 1rem;
          line-height: 1.9;
          color: #6a6a6a;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .luxury-model-description {
          font-size: 1.05rem;
          line-height: 1.9;
          color: #5a5a5a;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          margin-bottom: 2rem;
        }

        .model-specs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(0,0,0,0.08);
        }

        .spec-item {
          text-align: center;
        }

        .spec-label {
          font-size: 0.75rem;
          color: #8a8a8a;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          display: block;
        }

        .spec-value {
          font-size: 1.1rem;
          color: #4a9eff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          display: block;
        }

        .color-preview {
          margin-bottom: 2rem;
        }

        .color-preview-label {
          font-size: 0.85rem;
          color: #6a6a6a;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 1px;
          margin-bottom: 0.8rem;
          display: block;
        }

        .color-dots {
          display: flex;
          gap: 0.8rem;
          align-items: center;
        }

        .color-dot {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .luxury-model-card:hover .color-dot {
          transform: scale(1.1);
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

          .model-specs {
            grid-template-columns: repeat(2, 1fr);
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
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .luxury-model-name {
            font-size: 2.2rem;
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
  to={`/models/${getModelSlug(model.name)}`}  // ✅ This uses the slug
  className="luxury-model-card"
>
              <div className="model-image-container">
                <img src={model.images[0]} alt={model.name} />
                <div className="model-type-badge">
                  {model.type === 'electric' ? '⚡ Electric' : '🔋 Hybrid'}
                </div>
                {model.notes && (
                  <div className="model-availability-badge">
                    {model.notes.includes('3-month') ? 'Pre-Order' : 
                     model.notes.includes('January 2026') ? 'Coming Soon' : 'Available'}
                  </div>
                )}
              </div>
              <div className="luxury-model-info">
                <h3 className="luxury-model-name">{model.name}</h3>
                <p className="luxury-model-category">{model.category} • {model.class}</p>
                
                <div className="model-specs">
                  <div className="spec-item">
                    <span className="spec-label">Range</span>
                    <span className="spec-value">{model.range.split(' ')[0]}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Seating</span>
                    <span className="spec-value">{model.seats}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Type</span>
                    <span className="spec-value">{model.type === 'electric' ? 'EV' : 'PHEV'}</span>
                  </div>
                </div>

<div className="color-preview" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  {/* Exterior Colors */}
  <div>
    <span className="color-preview-label">
      {model.colors.exterior.length} Exterior Color{model.colors.exterior.length > 1 ? 's' : ''}
    </span>
    <div className="color-dots">
      {model.colors.exterior.slice(0, 5).map((color, idx) => (
        <div 
          key={`ext-${idx}`} 
          className="color-dot"
          style={{ backgroundColor: getColorHex(color) }}
          title={color}
        />
      ))}
      {model.colors.exterior.length > 5 && (
        <span style={{ fontSize: '0.85rem', color: '#8a8a8a', fontFamily: 'Montserrat, sans-serif' }}>
          +{model.colors.exterior.length - 5}
        </span>
      )}
    </div>
  </div>

  {/* Interior Colors aligned right */}
  <div style={{ textAlign: 'right' }}>
    <span className="color-preview-label">
      {model.colors.interior.length} Interior Color{model.colors.interior.length > 1 ? 's' : ''}
    </span>
    <div className="color-dots" style={{ justifyContent: 'flex-end' }}>
      {model.colors.interior.slice(0, 5).map((color, idx) => (
        <div 
          key={`int-${idx}`} 
          className="color-dot"
          style={{ backgroundColor: getColorHex(color) }}
          title={color}
        />
      ))}
      {model.colors.interior.length > 5 && (
        <span style={{ fontSize: '0.85rem', color: '#8a8a8a', fontFamily: 'Montserrat, sans-serif' }}>
          +{model.colors.interior.length - 5}
        </span>
      )}
    </div>
  </div>
</div>


                <span className="luxury-learn-more">Explore Model</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

// Helper function to get hex colors
function getColorHex(colorName: string): string {
  const colorMap: { [key: string]: string } = {
    'White': '#F3F4F6',
    'Black': '#1F2937',
    'Gray': '#6B7280',
    'Grey': '#6B7280',
    'Beige': '#D4C5B0',
    'Blue': '#3B82F6',
    'Green': '#4A7C59',
    'Silver': '#C0C0C0',
    'Orange': '#F97316',
    'Bluish Gray': '#8B9DC3',
    'Dark Green': '#1E5128',
    'Light Blue': '#7DD3FC',
    'Dark Blue': '#1E3A8A',
    'Sunset Orange': '#FB923C',
    'Cloud Gray': '#9CA3AF'
  };
  return colorMap[colorName] || '#6B7280';
}

export default Models;