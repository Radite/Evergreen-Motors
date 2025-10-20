import React from 'react';
import HeroSection from './components/HeroSection';
import SpecsSection from './components/SpecsSection';
import FeaturesSection from './components/FeaturesSection';

const DolphinMiniPage: React.FC = () => {
  const specs = [
    { label: 'Range', value: '211 mi', icon: '🔋' },
    { label: '0-62 mph', value: '10.9s', icon: '⚡' },
    { label: 'Battery', value: '38.9 kWh', icon: '🔌' },
    { label: 'Power', value: '94 hp', icon: '💪' },
    { label: 'Fast Charge', value: '40 min', icon: '⏱️' },
    { label: 'Length', value: '3.78m', icon: '📏' },
  ];

  const features = [
    {
      title: 'Perfect City Car',
      description: 'Designed specifically for urban environments, the Dolphin Mini offers exceptional maneuverability and easy parking while maintaining a surprisingly spacious interior.',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
    },
    {
      title: 'Playful & Practical',
      description: 'With its fun, youthful design and customizable color options, the Dolphin Mini brings personality to electric mobility while offering practical features for daily use.',
      image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80',
    },
    {
      title: 'Smart Technology',
      description: 'Despite its compact size, the Dolphin Mini is packed with intelligent features including smartphone integration, advanced safety systems, and intuitive controls.',
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80',
    },
  ];

  const ctaSectionStyle: React.CSSProperties = {
    padding: '100px 40px',
    background: 'linear-gradient(135deg, #00a8e8 0%, #007ea7 100%)',
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
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  };

  const primaryButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    background: '#fff',
    color: '#007ea7',
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
        title="BYD Dolphin Mini"
        subtitle="Big Fun, Small Footprint"
        description="The ultimate urban electric vehicle that proves great things come in small packages. Perfect for city adventures."
        backgroundImage="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1600&q=80"
        ctaText="Discover Dolphin Mini"
        ctaLink="#discover"
      />

      <SpecsSection 
        specs={specs}
        background="#f0f8ff"
      />

      <FeaturesSection
        title="Small Car, Big Personality"
        subtitle="Everything you need for the perfect city driving experience"
        features={features}
        layout="grid"
      />

      <section style={ctaSectionStyle}>
        <h2 style={ctaTitleStyle}>Join the Electric Revolution</h2>
        <p style={ctaSubtitleStyle}>Experience the joy of electric driving with the Dolphin Mini</p>
        <div style={ctaButtonsStyle}>
          <button
            style={primaryButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(255,255,255,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Book a Test Drive
          </button>
          <button
            style={secondaryButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = '#007ea7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#fff';
            }}
          >
            Configure Your Dolphin
          </button>
        </div>
      </section>

    </div>
  );
};

export default DolphinMiniPage;
