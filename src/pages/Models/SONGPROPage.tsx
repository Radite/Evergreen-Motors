import React from 'react';
import HeroSection from './components/HeroSection';
import SpecsSection from './components/SpecsSection';
import FeaturesSection from './components/FeaturesSection';

const SONGPROPage: React.FC = () => {
  const specs = [
    { label: 'Range', value: '316 mi', icon: '🔋' },
    { label: '0-62 mph', value: '8.5s', icon: '⚡' },
    { label: 'Battery', value: '71.7 kWh', icon: '🔌' },
    { label: 'Power', value: '184 hp', icon: '💪' },
    { label: 'Boot Space', value: '520L', icon: '🎒' },
    { label: 'Wheelbase', value: '2.71m', icon: '📏' },
  ];

  const features = [
    {
      title: 'Premium Comfort',
      description: 'Experience refined elegance with high-quality materials, spacious seating, and advanced sound insulation for a serene driving environment on every journey.',
      image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80',
    },
    {
      title: 'Smart Connectivity',
      description: 'Stay connected with the intelligent infotainment system featuring large touchscreen, voice control, wireless charging, and seamless smartphone integration.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    },
    {
      title: 'Efficient & Reliable',
      description: 'The SONG PRO delivers impressive range and reliability with BYD\'s proven electric technology, perfect for daily commutes and weekend getaways alike.',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
    },
  ];

  const ctaSectionStyle: React.CSSProperties = {
    padding: '100px 40px',
    background: 'linear-gradient(135deg, #4a5568 0%, #2d3748 100%)',
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
    color: '#2d3748',
  };

  const secondaryButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    background: 'transparent',
    color: '#fff',
    border: '2px solid #fff',
  };

  const valuePropsSectionStyle: React.CSSProperties = {
    padding: '80px 40px',
    background: 'linear-gradient(180deg, #ffffff 0%, #f7fafc 100%)',
  };

  const valuePropsContainerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  };

  const valuePropsGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px',
    marginTop: '60px',
  };

  const valuePropStyle: React.CSSProperties = {
    padding: '30px',
  };

  const valuePropIconStyle: React.CSSProperties = {
    fontSize: '48px',
    marginBottom: '20px',
  };

  const valuePropTitleStyle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: 700,
    marginBottom: '12px',
    color: '#2d3748',
  };

  const valuePropTextStyle: React.CSSProperties = {
    fontSize: '15px',
    color: '#666',
    lineHeight: '1.7',
  };

  return (
    <div style={{ background: '#fff' }}>
      
      <HeroSection
        title="BYD SONG PRO"
        subtitle="Premium Electric SUV"
        description="Sophisticated design meets advanced technology. The SONG PRO delivers a refined electric driving experience with exceptional comfort and capability."
        backgroundImage="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1600&q=80"
        ctaText="Discover SONG PRO"
        ctaLink="#discover"
      />

      <section style={valuePropsSectionStyle}>
        <div style={valuePropsContainerStyle}>
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 700, color: '#2d3748', marginBottom: '20px' }}>
            Why Choose SONG PRO?
          </h2>
          <p style={{ fontSize: '18px', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
            Experience the perfect balance of style, comfort, and technology
          </p>
          
          <div style={valuePropsGridStyle}>
            <div style={valuePropStyle}>
              <div style={valuePropIconStyle}>✨</div>
              <h3 style={valuePropTitleStyle}>Premium Quality</h3>
              <p style={valuePropTextStyle}>
                Meticulously crafted with attention to detail and high-quality materials throughout
              </p>
            </div>
            <div style={valuePropStyle}>
              <div style={valuePropIconStyle}>🛡️</div>
              <h3 style={valuePropTitleStyle}>Peace of Mind</h3>
              <p style={valuePropTextStyle}>
                Comprehensive warranty and 24/7 roadside assistance for worry-free ownership
              </p>
            </div>
            <div style={valuePropStyle}>
              <div style={valuePropIconStyle}>🌱</div>
              <h3 style={valuePropTitleStyle}>Sustainable Choice</h3>
              <p style={valuePropTextStyle}>
                Zero emissions driving with efficient energy use for a greener tomorrow
              </p>
            </div>
            <div style={valuePropStyle}>
              <div style={valuePropIconStyle}>💡</div>
              <h3 style={valuePropTitleStyle}>Smart Innovation</h3>
              <p style={valuePropTextStyle}>
                Cutting-edge technology and intelligent features for modern living
              </p>
            </div>
          </div>
        </div>
      </section>

      <SpecsSection 
        specs={specs}
        title="Technical Excellence"
        background="#f8f9fa"
      />

      <FeaturesSection
        title="Designed for Your Life"
        subtitle="Every detail crafted with you in mind"
        features={features}
        layout="alternating"
      />

      <section style={ctaSectionStyle}>
        <h2 style={ctaTitleStyle}>Start Your Electric Journey</h2>
        <p style={ctaSubtitleStyle}>
          Experience the SONG PRO difference. Book your test drive today and discover premium electric mobility.
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
              e.currentTarget.style.color = '#2d3748';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#fff';
            }}
          >
            Configure Your SONG PRO
          </button>
        </div>
      </section>

    </div>
  );
};

export default SONGPROPage;
