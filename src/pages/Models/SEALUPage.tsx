import React from 'react';
import HeroSection from './components/HeroSection';
import SpecsSection from './components/SpecsSection';
import FeaturesSection from './components/FeaturesSection';

const SEALUPage: React.FC = () => {
  const specs = [
    { label: 'Range', value: '354 mi', icon: '🔋' },
    { label: '0-62 mph', value: '9.6s', icon: '⚡' },
    { label: 'Battery', value: '87 kWh', icon: '🔌' },
    { label: 'Power', value: '218 hp', icon: '💪' },
    { label: 'Boot Space', value: '570L', icon: '🎒' },
    { label: 'Seats', value: '5-7', icon: '👥' },
  ];

  const features = [
    {
      title: 'Spacious & Comfortable',
      description: 'The SEAL U offers exceptional space for passengers and cargo, with flexible seating configurations and premium materials throughout the cabin for ultimate comfort.',
      image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80',
    },
    {
      title: 'Advanced Safety Suite',
      description: 'Comprehensive safety features including 360-degree cameras, adaptive cruise control, blind-spot monitoring, and advanced collision avoidance systems keep you protected.',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
    },
    {
      title: 'Practical SUV Excellence',
      description: 'Designed for families and adventurers, the SEAL U combines practical features with sophisticated technology for a truly versatile driving experience.',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
    },
  ];

  const ctaSectionStyle: React.CSSProperties = {
    padding: '100px 40px',
    background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
    textAlign: 'center',
    color: '#fff',
  };

  const ctaTitleStyle: React.CSSProperties = {
    fontSize: 'clamp(36px, 5vw, 56px)',
    fontWeight: 700,
    marginBottom: '20px',
  };

  const ctaSubtitleStyle: React.CSSProperties = {
    fontSize: '20px',
    marginBottom: '40px',
    opacity: 0.9,
    maxWidth: '700px',
    margin: '0 auto 40px',
  };

  const ctaButtonsStyle: React.CSSProperties = {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '18px 48px',
    fontSize: '16px',
    fontWeight: 600,
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  };

  const primaryButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    background: '#fff',
    color: '#2c3e50',
  };

  const secondaryButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    background: 'transparent',
    color: '#fff',
    border: '2px solid #fff',
  };

  return (
    <div style={{ background: '#fff' }}>
      
      <HeroSection
        title="BYD SEAL U"
        subtitle="Spacious, Comfortable & Practical SUV"
        description="The perfect family SUV that combines space, comfort, and cutting-edge electric technology for every journey."
        backgroundImage="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1600&q=80"
        ctaText="Explore SEAL U"
        ctaLink="#explore"
      />

      <SpecsSection 
        specs={specs}
        background="#f5f7fa"
      />

      <FeaturesSection
        title="Engineered for Families"
        subtitle="Experience the perfect blend of space, safety, and sophistication"
        features={features}
        layout="alternating"
      />

      <section style={ctaSectionStyle}>
        <h2 style={ctaTitleStyle}>Experience Premium Electric SUV</h2>
        <p style={ctaSubtitleStyle}>
          Discover why the SEAL U is the ideal choice for modern families seeking space, safety, and sustainability
        </p>
        <div style={ctaButtonsStyle}>
          <button
            style={primaryButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(255,255,255,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Book Test Drive
          </button>
          <button
            style={secondaryButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = '#2c3e50';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#fff';
            }}
          >
            Find a Dealer
          </button>
        </div>
      </section>

    </div>
  );
};

export default SEALUPage;
