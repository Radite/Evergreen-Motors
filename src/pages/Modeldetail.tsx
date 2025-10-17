import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

interface ModelData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  type: string;
  image: string;
  price: string;
  specs: {
    range: string;
    acceleration: string;
    topSpeed: string;
    motorPower: string;
    batteryCapacity: string;
    chargingTime: string;
    seating: string;
    driveType: string;
  };
  features: string[];
  colors: Array<{ name: string; hex: string }>;
  highlights: Array<{ title: string; description: string; icon: string }>;
}

const ModelDetail = () => {
  const { modelId } = useParams<{ modelId: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [modelId]);

  const modelsData: Record<string, ModelData> = {
    'dolphin-mini': {
      id: 'dolphin-mini',
      name: 'Dolphin Mini',
      tagline: 'Urban Sophistication Reimagined',
      description: 'The Dolphin Mini represents the perfect harmony of compact design and electric efficiency. Engineered for city driving yet capable of longer journeys, this sophisticated city car delivers premium comfort, advanced technology, and exceptional range in a beautifully compact package.',
      type: 'City Electric',
      image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=2000',
      price: 'Starting at $28,990',
      specs: {
        range: '250 miles',
        acceleration: '7.5s 0-60mph',
        topSpeed: '99 mph',
        motorPower: '150 kW',
        batteryCapacity: '44.9 kWh',
        chargingTime: '30 min (10-80%)',
        seating: '5 passengers',
        driveType: 'Front-Wheel Drive'
      },
      features: [
        'e-Platform 3.0 Architecture',
        'Blade Battery Technology',
        'Intelligent Cockpit System',
        'Advanced Driver Assistance',
        'Panoramic Sunroof',
        'Premium Interior Materials',
        'Wireless Phone Charging',
        'LED Lighting System'
      ],
      colors: [
        { name: 'Pearl White', hex: '#f8f9fa' },
        { name: 'Midnight Black', hex: '#1a1a1a' },
        { name: 'Ocean Blue', hex: '#4a9eff' },
        { name: 'Silver Mist', hex: '#c0c0c0' }
      ],
      highlights: [
        { title: 'Compact Excellence', description: 'Perfect dimensions for urban navigation without sacrificing interior space or comfort', icon: '🏙️' },
        { title: 'Efficient Power', description: 'Optimized electric motor delivers responsive performance with exceptional efficiency', icon: '⚡' },
        { title: 'Smart Technology', description: 'Intuitive infotainment and connectivity keep you seamlessly connected', icon: '📱' }
      ]
    },
    'atto-3': {
      id: 'atto-3',
      name: 'Atto 3',
      tagline: 'The Benchmark Electric SUV',
      description: 'The Atto 3 sets new standards for electric SUVs with its perfect blend of practicality, performance, and cutting-edge technology. Built on BYD\'s revolutionary e-Platform 3.0, this versatile SUV offers exceptional range, sophisticated design, and an interior that redefines comfort and innovation.',
      type: 'Electric SUV',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2000',
      price: 'Starting at $38,990',
      specs: {
        range: '260 miles',
        acceleration: '7.3s 0-60mph',
        topSpeed: '100 mph',
        motorPower: '150 kW',
        batteryCapacity: '60.5 kWh',
        chargingTime: '29 min (30-80%)',
        seating: '5 passengers',
        driveType: 'Front-Wheel Drive'
      },
      features: [
        'e-Platform 3.0 Technology',
        'Blade Battery System',
        'Panoramic Sky Window',
        'Rotating Touchscreen Display',
        'Voice-Activated Controls',
        'Premium Sound System',
        'Advanced Safety Suite',
        'Wireless CarPlay & Android Auto'
      ],
      colors: [
        { name: 'Cosmos Black', hex: '#0a0a0a' },
        { name: 'Surf Blue', hex: '#4a9eff' },
        { name: 'Boulder Grey', hex: '#6c757d' },
        { name: 'Parkour Red', hex: '#dc3545' }
      ],
      highlights: [
        { title: 'Spacious Versatility', description: 'Generous cargo space and flexible seating configurations for every adventure', icon: '🎒' },
        { title: 'Advanced Safety', description: 'Comprehensive suite of driver assistance systems for confident driving', icon: '🛡️' },
        { title: 'Exceptional Range', description: 'Travel further with confidence thanks to efficient battery technology', icon: '🔋' }
      ]
    },
    'seal-u': {
      id: 'seal-u',
      name: 'Seal U',
      tagline: 'Premium Electric Sophistication',
      description: 'The Seal U embodies the pinnacle of electric sedan luxury. With its stunning ocean-inspired design language, exhilarating performance, and advanced technology suite, this premium sedan delivers an uncompromising driving experience that seamlessly blends elegance with athletic capability.',
      type: 'Luxury Sedan',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2000',
      price: 'Starting at $48,990',
      specs: {
        range: '354 miles',
        acceleration: '3.8s 0-60mph',
        topSpeed: '112 mph',
        motorPower: '390 kW',
        batteryCapacity: '82.5 kWh',
        chargingTime: '26 min (30-80%)',
        seating: '5 passengers',
        driveType: 'All-Wheel Drive'
      },
      features: [
        'CTB Cell-to-Body Integration',
        'Dual Motor AWD System',
        'Adaptive Air Suspension',
        'Premium Nappa Leather Interior',
        'Head-Up Display',
        'Dynaudio Sound System',
        'Matrix LED Headlights',
        'Advanced Climate Control'
      ],
      colors: [
        { name: 'Aurora Silver', hex: '#d4d4d4' },
        { name: 'Deep Ocean Blue', hex: '#1e3a8a' },
        { name: 'Quantum Grey', hex: '#4b5563' },
        { name: 'Crystal White', hex: '#ffffff' }
      ],
      highlights: [
        { title: 'Athletic Performance', description: 'Dual motors deliver exhilarating acceleration and dynamic handling', icon: '🏁' },
        { title: 'Luxurious Comfort', description: 'Premium materials and meticulous craftsmanship throughout the cabin', icon: '✨' },
        { title: 'Extended Range', description: 'Travel over 350 miles on a single charge for ultimate peace of mind', icon: '🌍' }
      ]
    },
    'tang-l': {
      id: 'tang-l',
      name: 'Tang L',
      tagline: 'Luxury Redefined for Seven',
      description: 'The Tang L represents the ultimate expression of family luxury. This spacious three-row SUV combines cutting-edge electric technology with opulent comfort, offering seven passengers premium accommodations and an array of advanced features that make every journey extraordinary.',
      type: '7-Seater SUV',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000',
      price: 'Starting at $58,990',
      specs: {
        range: '323 miles',
        acceleration: '4.4s 0-60mph',
        topSpeed: '112 mph',
        motorPower: '380 kW',
        batteryCapacity: '108.8 kWh',
        chargingTime: '30 min (30-80%)',
        seating: '7 passengers',
        driveType: 'All-Wheel Drive'
      },
      features: [
        'Three-Row Seating',
        'Dual Motor Performance',
        'Premium Quilted Leather',
        'Panoramic Glass Roof',
        'Individual Seat Climate Control',
        'Premium Audio System',
        'Gesture Control',
        'Advanced Autopilot'
      ],
      colors: [
        { name: 'Imperial Red', hex: '#8b0000' },
        { name: 'Graphite Black', hex: '#2d3436' },
        { name: 'Champagne Gold', hex: '#d4af37' },
        { name: 'Celestial White', hex: '#fafafa' }
      ],
      highlights: [
        { title: 'Seven-Seat Luxury', description: 'Premium comfort for every passenger across three spacious rows', icon: '👨‍👩‍👧‍👦' },
        { title: 'Powerful Performance', description: 'Dual motors provide commanding power and confident handling', icon: '💪' },
        { title: 'Advanced Technology', description: 'Cutting-edge features and connectivity throughout', icon: '🔬' }
      ]
    },
    'han': {
      id: 'han',
      name: 'Han',
      tagline: 'Executive Excellence',
      description: 'The Han flagship sedan represents the apex of BYD\'s engineering prowess and design philosophy. This executive-class vehicle combines breathtaking aesthetics with phenomenal performance, offering a driving experience that rivals the world\'s most prestigious luxury sedans while delivering zero emissions.',
      type: 'Executive Sedan',
      image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=2000',
      price: 'Starting at $54,990',
      specs: {
        range: '379 miles',
        acceleration: '3.9s 0-60mph',
        topSpeed: '115 mph',
        motorPower: '380 kW',
        batteryCapacity: '85.4 kWh',
        chargingTime: '25 min (30-80%)',
        seating: '5 passengers',
        driveType: 'All-Wheel Drive'
      },
      features: [
        'Dragon Face Design Language',
        'Executive Rear Seating',
        'Massage Function',
        'Ambient Lighting (31 colors)',
        'Premium Dynaudio System',
        'Advanced DiPilot',
        'Ventilated & Heated Seats',
        'Electrochromic Panoramic Roof'
      ],
      colors: [
        { name: 'Dragon Scale Grey', hex: '#708090' },
        { name: 'Phoenix Red', hex: '#c41e3a' },
        { name: 'Jade Green', hex: '#00a86b' },
        { name: 'Emperor Black', hex: '#000000' }
      ],
      highlights: [
        { title: 'Flagship Design', description: 'Stunning Dragon Face aesthetic that commands attention', icon: '🐉' },
        { title: 'Executive Comfort', description: 'First-class accommodations with massage and premium materials', icon: '🎩' },
        { title: 'Record Range', description: 'Nearly 380 miles of range for effortless long-distance travel', icon: '🛣️' }
      ]
    },
    'seal': {
      id: 'seal',
      name: 'Seal',
      tagline: 'Performance Unleashed',
      description: 'The Seal performance sedan delivers pure driving excitement. Inspired by the ocean\'s most agile creatures, this athletic sedan combines razor-sharp handling, explosive acceleration, and striking design to create a driving experience that thrills enthusiasts while maintaining everyday practicality.',
      type: 'Performance Sedan',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000',
      price: 'Starting at $44,990',
      specs: {
        range: '310 miles',
        acceleration: '3.6s 0-60mph',
        topSpeed: '112 mph',
        motorPower: '390 kW',
        batteryCapacity: '82.5 kWh',
        chargingTime: '26 min (30-80%)',
        seating: '5 passengers',
        driveType: 'All-Wheel Drive'
      },
      features: [
        'Sport-Tuned Suspension',
        'Performance Dual Motors',
        'Sport Seats with Bolstering',
        'Track Mode',
        'Performance Braking System',
        'Sport Steering Wheel',
        'Digital Instrument Cluster',
        'Launch Control'
      ],
      colors: [
        { name: 'Racing Blue', hex: '#0066cc' },
        { name: 'Shadow Black', hex: '#121212' },
        { name: 'Silver Storm', hex: '#b8b8b8' },
        { name: 'Carbon Grey', hex: '#3d3d3d' }
      ],
      highlights: [
        { title: 'Track-Ready Performance', description: 'Sub-4-second acceleration with sport-tuned dynamics', icon: '🏎️' },
        { title: 'Agile Handling', description: 'Low center of gravity and AWD provide exceptional cornering', icon: '🌀' },
        { title: 'Driver-Focused', description: 'Every element optimized for an engaging driving experience', icon: '🎯' }
      ]
    }
  };

  const model = modelsData[modelId || ''];

  if (!model) {
    return (
      <div style={{padding: '10rem 5%', textAlign: 'center', color: 'white', background: '#0a0a0a', minHeight: '100vh'}}>
        <h1 style={{fontSize: '3rem', marginBottom: '2rem'}}>Model Not Found</h1>
        <Link to="/models" style={{color: '#4a9eff', fontSize: '1.2rem'}}>← Back to Models</Link>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        .model-detail-hero {
          height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)),
                      url('${model.image}') center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          position: relative;
          background-attachment: fixed;
        }

        .hero-detail-content {
          z-index: 1;
          max-width: 1200px;
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

        .back-link {
          position: absolute;
          top: 120px;
          left: 5%;
          z-index: 10;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: white;
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 1px;
          padding: 0.8rem 1.5rem;
          background: rgba(0,0,0,0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          transition: all 0.3s ease;
        }

        .back-link:hover {
          background: rgba(74, 158, 255, 0.3);
          border-color: #4a9eff;
          transform: translateX(-5px);
        }

        .model-type-badge-hero {
          display: inline-block;
          background: rgba(74, 158, 255, 0.9);
          padding: 0.6rem 2rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 2rem;
        }

        .hero-detail-content h1 {
          font-size: 7rem;
          margin-bottom: 1.5rem;
          font-weight: 300;
          letter-spacing: 15px;
          font-family: 'Cormorant Garamond', serif;
          text-shadow: 2px 2px 20px rgba(0,0,0,0.5);
        }

        .hero-tagline {
          font-size: 2rem;
          margin-bottom: 2rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 3px;
          color: #4a9eff;
        }

        .hero-price {
          font-size: 1.8rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 2px;
        }

        .detail-section {
          padding: 8rem 5%;
          min-height: 50vh;
        }

        .dark-section {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
          color: white;
        }

        .light-section {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          color: #333;
        }

        .section-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 4rem;
          margin-bottom: 3rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          text-align: center;
        }

        .description-text {
          font-size: 1.3rem;
          line-height: 2;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          max-width: 1000px;
          margin: 0 auto 5rem;
          text-align: center;
        }

        .specs-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 3rem;
          margin-top: 5rem;
        }

        .spec-card {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 2.5rem 2rem;
          text-align: center;
          transition: all 0.4s ease;
        }

        .light-section .spec-card {
          background: white;
          border: 1px solid rgba(0,0,0,0.08);
        }

        .spec-card:hover {
          transform: translateY(-10px);
          border-color: #4a9eff;
          box-shadow: 0 20px 60px rgba(74, 158, 255, 0.2);
        }

        .spec-label {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.6);
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .light-section .spec-label {
          color: #666;
        }

        .spec-value {
          font-size: 2rem;
          color: #4a9eff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4rem;
          margin-top: 5rem;
        }

        .highlight-card {
          text-align: center;
          padding: 3rem 2rem;
        }

        .highlight-icon {
          font-size: 5rem;
          margin-bottom: 2rem;
        }

        .highlight-title {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
        }

        .highlight-description {
          font-size: 1.1rem;
          line-height: 1.8;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-top: 5rem;
        }

        .feature-item {
          padding: 1.8rem 2rem;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(20px);
          border-left: 4px solid #4a9eff;
          font-family: 'Montserrat', sans-serif;
          font-size: 1.1rem;
          font-weight: 300;
          transition: all 0.3s ease;
        }

        .light-section .feature-item {
          background: white;
          border: 1px solid rgba(0,0,0,0.05);
          border-left: 4px solid #4a9eff;
        }

        .feature-item:hover {
          padding-left: 3rem;
          background: rgba(74, 158, 255, 0.1);
        }

        .colors-grid {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-top: 5rem;
        }

        .color-option {
          text-align: center;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .color-option:hover {
          transform: scale(1.1);
        }

        .color-swatch {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin: 0 auto 1rem;
          border: 3px solid rgba(255,255,255,0.3);
          transition: all 0.3s ease;
        }

        .color-option:hover .color-swatch {
          border-color: #4a9eff;
          box-shadow: 0 0 30px rgba(74, 158, 255, 0.5);
        }

        .color-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: 1px;
        }

        .cta-section {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.1) 0%, rgba(53, 122, 189, 0.1) 100%);
          padding: 6rem 5%;
          text-align: center;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 3rem;
        }

        .cta-button {
          padding: 1.5rem 3rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.4s ease;
          border: 2px solid #4a9eff;
        }

        .cta-button-primary {
          background: #4a9eff;
          color: white;
        }

        .cta-button-primary:hover {
          background: #357abd;
          transform: translateY(-5px);
          box-shadow: 0 10px 40px rgba(74, 158, 255, 0.4);
        }

        .cta-button-secondary {
          background: transparent;
          color: #4a9eff;
        }

        .cta-button-secondary:hover {
          background: rgba(74, 158, 255, 0.1);
          transform: translateY(-5px);
        }

        @media (max-width: 1024px) {
          .specs-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .highlights-grid {
            grid-template-columns: 1fr;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .hero-detail-content h1 {
            font-size: 3.5rem;
            letter-spacing: 6px;
          }

          .specs-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .colors-grid {
            flex-wrap: wrap;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .back-link {
            top: 100px;
            left: 3%;
          }
        }
      `}</style>

      <Link to="/models" className="back-link">
        ← All Models
      </Link>

      <div className="model-detail-hero">
        <div className="hero-detail-content">
          <div className="model-type-badge-hero">{model.type}</div>
          <h1>{model.name}</h1>
          <p className="hero-tagline">{model.tagline}</p>
          <p className="hero-price">{model.price}</p>
        </div>
      </div>

      <section className="detail-section dark-section">
        <div className="section-container">
          <h2 className="section-title">Overview</h2>
          <p className="description-text" style={{color: 'rgba(255,255,255,0.8)'}}>
            {model.description}
          </p>

          <div className="specs-grid">
            <div className="spec-card">
              <div className="spec-label">Range</div>
              <div className="spec-value">{model.specs.range}</div>
            </div>
            <div className="spec-card">
              <div className="spec-label">0-60 MPH</div>
              <div className="spec-value">{model.specs.acceleration}</div>
            </div>
            <div className="spec-card">
              <div className="spec-label">Top Speed</div>
              <div className="spec-value">{model.specs.topSpeed}</div>
            </div>
            <div className="spec-card">
              <div className="spec-label">Motor Power</div>
              <div className="spec-value">{model.specs.motorPower}</div>
            </div>
            <div className="spec-card">
              <div className="spec-label">Battery</div>
              <div className="spec-value">{model.specs.batteryCapacity}</div>
            </div>
            <div className="spec-card">
              <div className="spec-label">Charging</div>
              <div className="spec-value">{model.specs.chargingTime}</div>
            </div>
            <div className="spec-card">
              <div className="spec-label">Seating</div>
              <div className="spec-value">{model.specs.seating}</div>
            </div>
            <div className="spec-card">
              <div className="spec-label">Drive Type</div>
              <div className="spec-value">{model.specs.driveType}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-section light-section">
        <div className="section-container">
          <h2 className="section-title">Key Highlights</h2>
          
          <div className="highlights-grid">
            {model.highlights.map((highlight, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-icon">{highlight.icon}</div>
                <h3 className="highlight-title">{highlight.title}</h3>
                <p className="highlight-description">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-section dark-section">
        <div className="section-container">
          <h2 className="section-title">Premium Features</h2>
          
          <div className="features-grid">
            {model.features.map((feature, index) => (
              <div key={index} className="feature-item">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-section light-section">
        <div className="section-container">
          <h2 className="section-title">Available Colors</h2>
          
          <div className="colors-grid">
            {model.colors.map((color, index) => (
              <div key={index} className="color-option">
                <div 
                  className="color-swatch" 
                  style={{backgroundColor: color.hex}}
                ></div>
                <div className="color-name">{color.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="section-container">
          <h2 className="section-title" style={{color: '#333'}}>Experience the {model.name}</h2>
          <p style={{fontSize: '1.3rem', color: '#666', fontFamily: 'Montserrat, sans-serif', fontWeight: 300}}>
            Visit Evergreen Motors today and discover why the {model.name} is redefining electric mobility
          </p>
          
          <div className="cta-buttons">
            <Link to="/test-drive" className="cta-button cta-button-primary">
              Schedule Test Drive
            </Link>
            <Link to="/contact" className="cta-button cta-button-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModelDetail;