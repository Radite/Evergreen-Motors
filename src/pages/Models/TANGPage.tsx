import React from 'react';
import Header from '../../components/Navigation';
import HeroSection from './components/HeroSection';
import SpecsSection from './components/SpecsSection';
import FeaturesSection from './components/FeaturesSection';

const TANGPage: React.FC = () => {
  const specs = [
    { label: 'Range', value: '323 mi', icon: '🔋' },
    { label: '0-62 mph', value: '4.4s', icon: '⚡' },
    { label: 'Battery', value: '108.8 kWh', icon: '🔌' },
    { label: 'Power', value: '517 hp', icon: '💪' },
    { label: 'Seats', value: '7', icon: '👥' },
    { label: 'Drive', value: 'AWD', icon: '🚙' },
  ];

  const features = [
    {
      title: 'Performance Powerhouse',
      description: 'With dual motors delivering 517 horsepower and all-wheel drive, the TANG accelerates from 0-62mph in just 4.4 seconds, combining performance with practicality.',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
    },
    {
      title: '7-Seater Luxury',
      description: 'Spacious three-row seating accommodates seven passengers in comfort, with premium materials, advanced climate control, and flexible configurations for any journey.',
      image: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=800&q=80',
    },
    {
      title: 'Advanced Technology',
      description: 'State-of-the-art infotainment with 15.6-inch rotating touchscreen, premium sound system, and comprehensive driver assistance features for a connected experience.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    },
  ];

  const ctaSectionStyle: React.CSSProperties = {
    padding: '120px 40px',
    background: 'linear-gradient(135deg, #8b0000 0%, #b91d1d 100%)',
    textAlign: 'center',
    color: '#fff',
    position: 'relative',
    overflow: 'hidden',
  };

  const ctaTitleStyle: React.CSSProperties = {
    fontSize: 'clamp(40px, 6vw, 64px)',
    fontWeight: 700,
    marginBottom: '20px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  };

  const ctaSubtitleStyle: React.CSSProperties = {
    fontSize: '22px',
    marginBottom: '50px',
    opacity: 0.95,
    maxWidth: '800px',
    margin: '0 auto 50px',
    lineHeight: '1.6',
  };

  const ctaButtonsStyle: React.CSSProperties = {
    display: 'flex',
    gap: '24px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '20px 56px',
    fontSize: '16px',
    fontWeight: 600,
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
  };

  const primaryButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    background: '#fff',
    color: '#8b0000',
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
        title="BYD TANG"
        subtitle="The 7-Seater All-Electric Performance SUV"
        description="Uncompromising performance meets luxury and space. The TANG delivers exhilarating acceleration and advanced technology for the whole family."
        backgroundImage="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1600&q=80"
        ctaText="Experience Power"
        ctaLink="#experience"
      />

      <SpecsSection 
        specs={specs}
        title="Impressive Performance Specs"
        background="linear-gradient(180deg, #1a1a1a 0%, #2a2a2a 100%)"
      />

      <FeaturesSection
        title="Performance Meets Practicality"
        subtitle="The ultimate electric SUV for those who refuse to compromise"
        features={features}
        layout="alternating"
      />

      <section style={ctaSectionStyle}>
        <h2 style={ctaTitleStyle}>Unleash the Power of Electric</h2>
        <p style={ctaSubtitleStyle}>
          Experience the thrill of instant torque, whisper-quiet luxury, and cutting-edge technology. 
          The TANG redefines what a family SUV can be.
        </p>
        <div style={ctaButtonsStyle}>
          <button
            style={primaryButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(255,255,255,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Reserve Your TANG
          </button>
          <button
            style={secondaryButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = '#8b0000';
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

export default TANGPage;
