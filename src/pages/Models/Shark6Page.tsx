import React from 'react';
import HeroSection from './components/HeroSection';
import SpecsSection from './components/SpecsSection';
import FeaturesSection from './components/FeaturesSection';
const Shark6Page: React.FC = () => {
  const specs = [
    { label: 'Range', value: '62 mi EV', icon: '🔋' },
    { label: '0-62 mph', value: '5.7s', icon: '⚡' },
    { label: 'Power', value: '430 hp', icon: '💪' },
    { label: 'Towing', value: '2500 kg', icon: '🚛' },
    { label: 'Payload', value: '835 kg', icon: '📦' },
    { label: 'Drive', value: '4WD', icon: '🚙' },
  ];

  const features = [
    {
      title: 'Hybrid Pickup Innovation',
      description: 'The Shark 6 DMO combines a powerful hybrid powertrain with pickup utility, offering both electric-only city driving and long-range capability for any adventure.',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
    },
    {
      title: 'Intelligent 4WD System',
      description: 'Advanced all-wheel drive with multiple terrain modes ensures confident handling in any condition, whether on-road or off-road, wet or dry.',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
    },
    {
      title: 'Work & Play Versatility',
      description: 'Spacious cargo bed with durable construction meets comfortable 5-seater cabin with premium tech, perfect for both work demands and weekend adventures.',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
    },
  ];

  const ctaSectionStyle: React.CSSProperties = {
    padding: '100px 40px',
    background: 'linear-gradient(135deg, #1e3a5f 0%, #2c5282 100%)',
    textAlign: 'center',
    color: '#fff',
  };

  const ctaTitleStyle: React.CSSProperties = {
    fontSize: 'clamp(36px, 5vw, 56px)',
    fontWeight: 700,
    marginBottom: '20px',
    textTransform: 'uppercase',
  };

  const ctaSubtitleStyle: React.CSSProperties = {
    fontSize: '20px',
    marginBottom: '40px',
    opacity: 0.9,
    maxWidth: '750px',
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
    color: '#1e3a5f',
  };

  const secondaryButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    background: 'transparent',
    color: '#fff',
    border: '2px solid #fff',
  };

  const highlightSectionStyle: React.CSSProperties = {
    padding: '80px 40px',
    background: '#f8f9fa',
  };

  const highlightGridStyle: React.CSSProperties = {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '40px',
  };

  const highlightCardStyle: React.CSSProperties = {
    padding: '40px',
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    textAlign: 'center',
  };

  const highlightTitleStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 700,
    marginBottom: '16px',
    color: '#1e3a5f',
  };

  const highlightTextStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#666',
    lineHeight: '1.6',
  };

  return (
    <div style={{ background: '#fff' }}>
      
      <HeroSection
        title="BYD Shark 6 DMO"
        subtitle="Advanced Hybrid Pickup with Intelligent Features"
        description="The future of pickup trucks is here. Combining hybrid efficiency with rugged capability for work and adventure."
        backgroundImage="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1600&q=80"
        ctaText="Explore Shark 6"
        ctaLink="#explore"
      />

      <SpecsSection 
        specs={specs}
        title="Built Tough, Drives Smart"
      />

      <section style={highlightSectionStyle}>
        <div style={highlightGridStyle}>
          <div style={highlightCardStyle}>
            <h3 style={highlightTitleStyle}>Hybrid Power</h3>
            <p style={highlightTextStyle}>
              Seamlessly switch between pure electric mode for city driving and hybrid mode for extended range, delivering efficiency without compromise.
            </p>
          </div>
          <div style={highlightCardStyle}>
            <h3 style={highlightTitleStyle}>Cargo Capacity</h3>
            <p style={highlightTextStyle}>
              Generous bed space with 835kg payload capacity and 2500kg towing capability makes the Shark 6 ready for any challenge.
            </p>
          </div>
          <div style={highlightCardStyle}>
            <h3 style={highlightTitleStyle}>Advanced Safety</h3>
            <p style={highlightTextStyle}>
              Comprehensive suite of safety features including adaptive cruise, lane assist, and 360-degree camera system for confident driving.
            </p>
          </div>
        </div>
      </section>

      <FeaturesSection
        title="Redefining Pickup Trucks"
        subtitle="Where capability meets innovation"
        features={features}
        layout="alternating"
      />

      <section style={ctaSectionStyle}>
        <h2 style={ctaTitleStyle}>Built for Your Lifestyle</h2>
        <p style={ctaSubtitleStyle}>
          Whether you're heading to the job site or the mountains, the Shark 6 DMO delivers the power, efficiency, and technology you need.
        </p>
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
            Test Drive Shark 6
          </button>
          <button
            style={secondaryButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = '#1e3a5f';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#fff';
            }}
          >
            View Specifications
          </button>
        </div>
      </section>

    </div>
  );
};

export default Shark6Page;
