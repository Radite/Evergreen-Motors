import React from 'react';

interface Spec {
  label: string;
  value: string;
  icon?: string;
}

interface SpecsSectionProps {
  title?: string;
  specs: Spec[];
  background?: string;
}

const SpecsSection: React.FC<SpecsSectionProps> = ({
  title = 'Key Specifications',
  specs,
  background = '#f8f9fa',
}) => {
  const sectionStyle: React.CSSProperties = {
    padding: '100px 40px',
    background,
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1400px',
    margin: '0 auto',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(36px, 5vw, 56px)',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: '60px',
    color: '#252728',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px',
  };

  const specCardStyle: React.CSSProperties = {
    padding: '40px 30px',
    background: '#fff',
    borderRadius: '12px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  };

  const iconStyle: React.CSSProperties = {
    fontSize: '48px',
    marginBottom: '20px',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#666',
    marginBottom: '10px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: 500,
  };

  const valueStyle: React.CSSProperties = {
    fontSize: '32px',
    fontWeight: 700,
    color: '#252728',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>{title}</h2>
        
        <div style={gridStyle}>
          {specs.map((spec, index) => (
            <div
              key={index}
              style={specCardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}
            >
              {spec.icon && <div style={iconStyle}>{spec.icon}</div>}
              <p style={labelStyle}>{spec.label}</p>
              <p style={valueStyle}>{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
