import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

interface ModelData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  type: string;
  images: Array<{ url: string; caption: string; }>;
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
  highlights: Array<{ title: string; description: string; image: string }>;
}

const ModelDetail = () => {
  const { modelId } = useParams<{ modelId: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      images: [
        { url: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=2000', caption: 'Exterior View' },
        { url: 'https://images.unsplash.com/photo-1  503376780353-7e6692767b70?q=80&w=2000', caption: 'Front Profile' },
        { url: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2000', caption: 'Interior Cabin' },
        { url: 'https://images.unsplash.com/photo-1 542362567-b07e54358753?q=80&w=2000', caption: 'Dashboard' },
        { url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000', caption: 'Rear View' }
      ],
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
        { 
          title: 'Compact Excellence', 
          description: 'Perfect dimensions for urban navigation without sacrificing interior space or comfort', 
          image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1200'
        },
        { 
          title: 'Efficient Power', 
          description: 'Optimized electric motor delivers responsive performance with exceptional efficiency', 
          image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200'
        },
        { 
          title: 'Smart Technology', 
          description: 'Intuitive infotainment and connectivity keep you seamlessly connected', 
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200'
        }
      ]
    },
    'atto-3': {
      id: 'atto-3',
      name: 'Atto 3',
      tagline: 'The Benchmark Electric SUV',
      description: 'The Atto 3 sets new standards for electric SUVs with its perfect blend of practicality, performance, and cutting-edge technology. Built on BYD\'s revolutionary e-Platform 3.0, this versatile SUV offers exceptional range, sophisticated design, and an interior that redefines comfort and innovation.',
      type: 'Electric SUV',
      images: [
        { url: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2000', caption: 'Exterior View' },
        { url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000', caption: 'Side Profile' },
        { url: 'https://images.unsplash.com/photo-1549927681-0b673b8243ab?q=80&w=2000', caption: 'Interior Cockpit' },
        { url: 'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2000', caption: 'Technology Features' },
        { url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000', caption: 'Cargo Space' }
      ],
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
        { 
          title: 'Spacious Versatility', 
          description: 'Generous cargo space and flexible seating configurations for every adventure', 
          image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200'
        },
        { 
          title: 'Advanced Safety', 
          description: 'Comprehensive suite of driver assistance systems for confident driving', 
          image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200'
        },
        { 
          title: 'Exceptional Range', 
          description: 'Travel further with confidence thanks to efficient battery technology', 
          image: 'https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?q=80&w=1200'
        }
      ]
    },
    'seal-u': {
      id: 'seal-u',
      name: 'Seal U',
      tagline: 'Premium Electric Sophistication',
      description: 'The Seal U embodies the pinnacle of electric sedan luxury. With its stunning ocean-inspired design language, exhilarating performance, and advanced technology suite, this premium sedan delivers an uncompromising driving experience that seamlessly blends elegance with athletic capability.',
      type: 'Luxury Sedan',
      images: [
        { url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2000', caption: 'Exterior View' },
        { url: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=2000', caption: 'Dynamic Profile' },
        { url: 'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2000', caption: 'Luxury Interior' },
        { url: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2000', caption: 'Premium Seats' },
        { url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000', caption: 'Rear Detail' }
      ],
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
        { 
          title: 'Athletic Performance', 
          description: 'Dual motors deliver exhilarating acceleration and dynamic handling', 
          image: 'https://images.unsplash.com/photo-1617886322207-7cc22ce7a22a?q=80&w=1200'
        },
        { 
          title: 'Luxurious Comfort', 
          description: 'Premium materials and meticulous craftsmanship throughout the cabin', 
          image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200'
        },
        { 
          title: 'Extended Range', 
          description: 'Travel over 350 miles on a single charge for ultimate peace of mind', 
          image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200'
        }
      ]
    },
    'tang-l': {
      id: 'tang-l',
      name: 'Tang L',
      tagline: 'Luxury Redefined for Seven',
      description: 'The Tang L represents the ultimate expression of family luxury. This spacious three-row SUV combines cutting-edge electric technology with opulent comfort, offering seven passengers premium accommodations and an array of advanced features that make every journey extraordinary.',
      type: '7-Seater SUV',
      images: [
        { url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000', caption: 'Exterior View' },
        { url: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2000', caption: 'Bold Design' },
        { url: 'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2000', caption: 'Spacious Interior' },
        { url: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2000', caption: 'Third Row Seating' },
        { url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000', caption: 'Technology Suite' }
      ],
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
        { 
          title: 'Seven-Seat Luxury', 
          description: 'Premium comfort for every passenger across three spacious rows', 
          image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200'
        },
        { 
          title: 'Powerful Performance', 
          description: 'Dual motors provide commanding power and confident handling', 
          image: 'https://images.unsplash.com/photo-1617886322207-7cc22ce7a22a?q=80&w=1200'
        },
        { 
          title: 'Advanced Technology', 
          description: 'Cutting-edge features and connectivity throughout', 
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200'
        }
      ]
    },
    'han': {
      id: 'han',
      name: 'Han',
      tagline: 'Executive Excellence',
      description: 'The Han flagship sedan represents the apex of BYD\'s engineering prowess and design philosophy. This executive-class vehicle combines breathtaking aesthetics with phenomenal performance, offering a driving experience that rivals the world\'s most prestigious luxury sedans while delivering zero emissions.',
      type: 'Executive Sedan',
      images: [
        { url: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=2000', caption: 'Exterior View' },
        { url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2000', caption: 'Elegant Profile' },
        { url: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2000', caption: 'Executive Interior' },
        { url: 'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2000', caption: 'Premium Craftsmanship' },
        { url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000', caption: 'Aerodynamic Design' }
      ],
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
        'Dual Motor Performance',
        'Executive Rear Seating',
        'Premium Leather Upholstery',
        'Advanced Infotainment',
        'Adaptive Cruise Control',
        'Massage Function Seats',
        'Ambient Lighting System'
      ],
      colors: [
        { name: 'Dynasty Black', hex: '#000000' },
        { name: 'Sovereign Silver', hex: '#c0c0c0' },
        { name: 'Royal Blue', hex: '#1e3a8a' },
        { name: 'Prestige White', hex: '#ffffff' }
      ],
      highlights: [
        { 
          title: 'Flagship Design', 
          description: 'Breathtaking aesthetics that command attention and respect', 
          image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=1200'
        },
        { 
          title: 'Executive Comfort', 
          description: 'First-class accommodations with premium materials throughout', 
          image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200'
        },
        { 
          title: 'Maximum Range', 
          description: 'Nearly 380 miles of range for long-distance confidence', 
          image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200'
        }
      ]
    },
    'seal': {
      id: 'seal',
      name: 'Seal',
      tagline: 'Performance Unleashed',
      description: 'The Seal performance sedan combines athletic design with exhilarating electric power. Inspired by the ocean\'s most agile creatures, this dynamic sedan delivers track-ready performance, stunning aesthetics, and advanced technology in a package that redefines what an electric sports sedan can be.',
      type: 'Performance Sedan',
      images: [
        { url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000', caption: 'Exterior View' },
        { url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2000', caption: 'Sport Profile' },
        { url: 'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2000', caption: 'Driver-Focused Cockpit' },
        { url: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2000', caption: 'Sport Seats' },
        { url: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=2000', caption: 'Dynamic Lines' }
      ],
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
        'Ocean Aesthetic Design',
        'Dual Motor AWD',
        'Sport-Tuned Suspension',
        'Performance Braking System',
        'Track Mode',
        'Sport Seats',
        'Digital Instrument Cluster',
        'Launch Control'
      ],
      colors: [
        { name: 'Racing Blue', hex: '#0066cc' },
        { name: 'Storm Grey', hex: '#6c757d' },
        { name: 'Carbon Black', hex: '#1a1a1a' },
        { name: 'Pearl White', hex: '#f8f9fa' }
      ],
      highlights: [
        { 
          title: 'Thrilling Performance', 
          description: '0-60mph in 3.6 seconds with dual motor all-wheel drive power', 
          image: 'https://images.unsplash.com/photo-1617886322207-7cc22ce7a22a?q=80&w=1200'
        },
        { 
          title: 'Dynamic Handling', 
          description: 'Sport-tuned suspension delivers precise, responsive handling', 
          image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200'
        },
        { 
          title: 'Track-Ready', 
          description: 'Performance modes and launch control for ultimate driving excitement', 
          image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200'
        }
      ]
    }
  };

  const model = modelsData[modelId || ''];

  if (!model) {
    return (
      <div style={{ padding: '10rem 5%', textAlign: 'center' }}>
        <h1>Model not found</h1>
        <Link to="/models">← Back to Models</Link>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % model.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + model.images.length) % model.images.length);
  };

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        .model-detail-hero {
          height: 100vh;
          position: relative;
          overflow: hidden;
          background: #000;
        }

        .carousel-container {
          position: absolute;
          inset: 0;
        }

        .carousel-image {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.8s ease;
        }

        .carousel-image.active {
          opacity: 1;
        }

        .carousel-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .carousel-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7));
        }

        .carousel-controls {
          position: absolute;
          bottom: 10%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          gap: 1rem;
        }

        .carousel-button {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255,255,255,0.3);
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-button:hover {
          background: rgba(74, 158, 255, 0.5);
          border-color: #4a9eff;
          transform: scale(1.1);
        }

        .carousel-indicators {
          position: absolute;
          bottom: 5%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          gap: 0.8rem;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .indicator.active {
          background: #4a9eff;
          border-color: white;
          transform: scale(1.3);
        }

        .image-caption {
          position: absolute;
          bottom: 20%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          color: white;
          font-family: 'Montserrat', sans-serif;
          font-size: 1.2rem;
          font-weight: 300;
          letter-spacing: 2px;
          text-transform: uppercase;
          background: rgba(0,0,0,0.5);
          padding: 1rem 2rem;
          backdrop-filter: blur(10px);
        }

        .hero-detail-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: white;
          z-index: 5;
          max-width: 1000px;
          padding: 2rem;
        }

        .model-type-badge-hero {
          display: inline-block;
          background: rgba(74, 158, 255, 0.9);
          padding: 0.8rem 2rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 2rem;
        }

        .hero-detail-content h1 {
          font-size: 5.5rem;
          margin-bottom: 1.5rem;
          font-weight: 300;
          letter-spacing: 10px;
          font-family: 'Cormorant Garamond', serif;
          text-shadow: 2px 2px 20px rgba(0,0,0,0.7);
        }

        .hero-tagline {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 3px;
          color: #4a9eff;
        }

        .hero-price {
          font-size: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 2px;
        }

        .back-link {
          position: fixed;
          top: 120px;
          left: 5%;
          z-index: 100;
          color: white;
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: 1px;
          padding: 1rem 2rem;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          transition: all 0.3s ease;
        }

        .back-link:hover {
          background: rgba(74, 158, 255, 0.5);
          border-color: #4a9eff;
          transform: translateX(-5px);
        }

        .detail-section {
          padding: 8rem 5%;
          min-height: 50vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dark-section {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
          color: white;
        }

        .light-section {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          color: #333;
        }

        .cta-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          padding: 8rem 5%;
          text-align: center;
        }

        .section-container {
          max-width: 1400px;
          width: 100%;
          margin: 0 auto;
        }

        .section-title {
          font-size: 4rem;
          text-align: center;
          margin-bottom: 3rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
        }

        .description-text {
          font-size: 1.3rem;
          line-height: 2;
          text-align: center;
          max-width: 1000px;
          margin: 0 auto 5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .specs-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2.5rem;
          margin: 4rem 0;
        }

        .spec-card {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 2.5rem;
          text-align: center;
          transition: all 0.4s ease;
        }

        .spec-card:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(74, 158, 255, 0.5);
          transform: translateY(-10px);
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

        .spec-value {
          font-size: 1.8rem;
          color: #4a9eff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          margin: 4rem 0;
        }

        .highlight-card {
          background: white;
          border: 1px solid rgba(0,0,0,0.08);
          overflow: hidden;
          transition: all 0.5s ease;
        }

        .highlight-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 30px 70px rgba(74, 158, 255, 0.2);
          border-color: rgba(74, 158, 255, 0.3);
        }

        .highlight-image {
          width: 100%;
          height: 250px;
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .highlight-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%);
        }

        .highlight-content {
          padding: 2.5rem;
        }

        .highlight-title {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
          color: #333;
        }

        .highlight-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin: 4rem 0;
        }

        .feature-item {
          padding: 2rem;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255,255,255,0.1);
          border-left: 4px solid #4a9eff;
          font-size: 1.2rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .feature-item:hover {
          background: rgba(255,255,255,0.1);
          border-left-width: 8px;
          transform: translateX(10px);
        }

        .colors-grid {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin: 4rem 0;
          flex-wrap: wrap;
        }

        .color-option {
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .color-option:hover {
          transform: translateY(-10px);
        }

        .color-swatch {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 3px solid rgba(0,0,0,0.1);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
          margin-bottom: 1rem;
        }

        .color-option:hover .color-swatch {
          border-color: #4a9eff;
          box-shadow: 0 15px 40px rgba(74, 158, 255, 0.4);
          transform: scale(1.1);
        }

        .color-name {
          font-size: 1.1rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 1px;
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
        <div className="carousel-container">
          {model.images.map((image, index) => (
            <div 
              key={index} 
              className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
            >
              <img src={image.url} alt={`${model.name} - ${image.caption}`} />
            </div>
          ))}
        </div>

        <div className="image-caption">
          {model.images[currentImageIndex].caption}
        </div>

        <div className="carousel-controls">
          <button className="carousel-button" onClick={prevImage}>‹</button>
          <button className="carousel-button" onClick={nextImage}>›</button>
        </div>

        <div className="carousel-indicators">
          {model.images.map((_, index) => (
            <div
              key={index}
              className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>

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
                <div 
                  className="highlight-image"
                  style={{backgroundImage: `url(${highlight.image})`}}
                ></div>
                <div className="highlight-content">
                  <h3 className="highlight-title">{highlight.title}</h3>
                  <p className="highlight-description">{highlight.description}</p>
                </div>
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
            <Link to="/contact?subject=test-drive" className="cta-button cta-button-primary">
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