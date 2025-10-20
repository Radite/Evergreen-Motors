import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  backgroundImage,
  ctaText = 'Learn More',
  ctaLink = '#',
}) => {
  const heroStyle: React.CSSProperties = {
    position: 'relative',
    height: '100vh',
    minHeight: '700px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  };

  const backgroundStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    filter: 'brightness(0.7)',
  };

  const contentStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    color: '#fff',
    maxWidth: '1000px',
    padding: '0 40px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(48px, 8vw, 96px)',
    fontWeight: 700,
    marginBottom: '20px',
    letterSpacing: '2px',
    lineHeight: '1.1',
    textTransform: 'uppercase',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: 'clamp(20px, 3vw, 32px)',
    fontWeight: 300,
    marginBottom: '30px',
    letterSpacing: '1px',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '18px',
    lineHeight: '1.8',
    marginBottom: '40px',
    maxWidth: '700px',
    margin: '0 auto 40px',
    opacity: 0.9,
  };

  const ctaButtonStyle: React.CSSProperties = {
    padding: '18px 48px',
    background: '#fff',
    border: 'none',
    color: '#252728',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    borderRadius: '4px',
    textDecoration: 'none',
    display: 'inline-block',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  };

  const scrollIndicatorStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
    animation: 'bounce 2s infinite',
  };

  const bounceAnimation = `
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateX(-50%) translateY(0);
      }
      40% {
        transform: translateX(-50%) translateY(-10px);
      }
      60% {
        transform: translateX(-50%) translateY(-5px);
      }
    }
  `;

  return (
    <>
      <style>{bounceAnimation}</style>
      <section style={heroStyle}>
        <div style={backgroundStyle} />
        
        <div style={contentStyle}>
          <h1 style={titleStyle}>{title}</h1>
          {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
          {description && <p style={descriptionStyle}>{description}</p>}
          <a
            href={ctaLink}
            style={ctaButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.border = '2px solid #fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = '#252728';
              e.currentTarget.style.border = 'none';
            }}
          >
            {ctaText}
          </a>
        </div>

        <div style={scrollIndicatorStyle}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="white">
            <path d="M15 20L10 15L11.5 13.5L15 17L18.5 13.5L20 15L15 20Z" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
