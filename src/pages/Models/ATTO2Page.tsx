import React from 'react';
import HeroSection from './components/HeroSection';
import SpecsSection from './components/SpecsSection';
import FeaturesSection from './components/FeaturesSection';

const ATTO2Page: React.FC = () => {
  const specs = [
    { label: 'Range', value: '312 mi', icon: '🔋' },
    { label: '0-62 mph', value: '7.9s', icon: '⚡' },
    { label: 'Battery', value: '45.1 kWh', icon: '🔌' },
    { label: 'Power', value: '201 hp', icon: '💪' },
    { label: 'Charging', value: '30 min', icon: '⏱️' },
    { label: 'Seats', value: '5', icon: '👥' },
  ];

  const features = [
    {
      title: 'Compact and Agile',
      description: 'The BYD ATTO 2 is the perfect urban companion, combining compact dimensions with exceptional maneuverability for city driving while maintaining a spacious interior.',
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
    },
    {
      title: 'Advanced Safety Technology',
      description: 'Equipped with comprehensive safety features including adaptive cruise control, lane keeping assist, and emergency braking to keep you protected on every journey.',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80',
    },
    {
      title: 'Efficient Performance',
      description: 'Experience outstanding efficiency with the BYD Blade Battery technology, delivering impressive range and rapid charging capabilities for your daily adventures.',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
    },
  ];

  const ctaSectionStyle: React.CSSProperties = {
    padding: '100px 40px',
    background: 'linear-gradient(135deg, #252728 0%, #3a3d3f 100%)',
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
    color: '#252728',
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
        title="BYD ATTO 2"
        subtitle="Electric Compact SUV"
        description="The perfect blend of style, efficiency, and innovation for the modern driver. Experience the future of urban mobility."
        backgroundImage="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1600&q=80"
        ctaText="Configure Yours"
        ctaLink="#configure"
      />

      <SpecsSection specs={specs} />

      <FeaturesSection
        title="Built for Excellence"
        subtitle="Discover what makes the ATTO 2 stand out from the crowd"
        features={features}
        layout="alternating"
      />

      <section style={ctaSectionStyle}>
        <h2 style={ctaTitleStyle}>Ready to Experience the ATTO 2?</h2>
        <div style={ctaButtonsStyle}>
          <button
            style={primaryButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Book a Test Drive
          </button>
          <button
            style={secondaryButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = '#252728';
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

export default ATTO2Page;
