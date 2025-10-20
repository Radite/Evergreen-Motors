import React from 'react';
import HeroSection from './components/HeroSection';
import SpecsSection from './components/SpecsSection';
import FeaturesSection from './components/FeaturesSection';

const ATTO3Page: React.FC = () => {
  const specs = [
    { label: 'Range', value: '261 mi', icon: '🔋' },
    { label: '0-62 mph', value: '7.3s', icon: '⚡' },
    { label: 'Battery', value: '60.5 kWh', icon: '🔌' },
    { label: 'Power', value: '204 hp', icon: '💪' },
    { label: 'DC Charging', value: '88 kW', icon: '⏱️' },
    { label: 'Boot Space', value: '440L', icon: '🎒' },
  ];

  const features = [
    {
      title: 'Expressive & Dynamic Design',
      description: 'The ATTO 3 features a bold and distinctive design language that sets it apart. With its Dragon Face grille and flowing lines, it creates a powerful presence on the road.',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    },
    {
      title: 'Intelligent Connectivity',
      description: 'Stay connected with the advanced infotainment system featuring a rotating 12.8-inch touchscreen, voice control, and seamless smartphone integration.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    },
    {
      title: 'BYD Blade Battery',
      description: 'Powered by BYD\'s revolutionary Blade Battery technology, offering exceptional safety, longevity, and performance with industry-leading thermal stability.',
      image: 'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=800&q=80',
    },
  ];

  const ctaSectionStyle: React.CSSProperties = {
    padding: '100px 40px',
    background: 'linear-gradient(135deg, #1a4d7a 0%, #2a6ba0 100%)',
    textAlign: 'center',
    color: '#fff',
  };

  const ctaTitleStyle: React.CSSProperties = {
    fontSize: 'clamp(36px, 5vw, 56px)',
    fontWeight: 700,
    marginBottom: '30px',
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
    color: '#1a4d7a',
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
        title="BYD ATTO 3"
        subtitle="Expressive & Dynamic C-SUV"
        description="Experience the perfect combination of style, technology, and performance in this award-winning electric SUV."
        backgroundImage="https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1600&q=80"
        ctaText="Explore ATTO 3"
        ctaLink="#explore"
      />

      <SpecsSection 
        specs={specs}
        background="linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)"
      />

      <FeaturesSection
        title="Innovation Meets Design"
        subtitle="The ATTO 3 redefines what an electric SUV can be"
        features={features}
        layout="alternating"
      />

      <section style={ctaSectionStyle}>
        <h2 style={ctaTitleStyle}>Discover the ATTO 3 Difference</h2>
        <div style={ctaButtonsStyle}>
          <button
            style={primaryButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(255,255,255,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Schedule Test Drive
          </button>
          <button
            style={secondaryButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = '#1a4d7a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#fff';
            }}
          >
            Download Brochure
          </button>
        </div>
      </section>

    </div>
  );
};

export default ATTO3Page;
