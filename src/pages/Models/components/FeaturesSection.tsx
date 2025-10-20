import React from 'react';

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface FeaturesSectionProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  layout?: 'grid' | 'alternating';
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  title = 'Outstanding Features',
  subtitle,
  features,
  layout = 'alternating',
}) => {
  const sectionStyle: React.CSSProperties = {
    padding: '100px 40px',
    background: '#fff',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1400px',
    margin: '0 auto',
  };

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '80px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(36px, 5vw, 56px)',
    fontWeight: 700,
    marginBottom: '20px',
    color: '#252728',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '18px',
    color: '#666',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.8',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '60px',
  };

  const featureCardStyle: React.CSSProperties = {
    overflow: 'hidden',
    borderRadius: '16px',
    background: '#f8f9fa',
  };

  const featureImageStyle: React.CSSProperties = {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
  };

  const featureContentStyle: React.CSSProperties = {
    padding: '40px',
  };

  const featureTitleStyle: React.CSSProperties = {
    fontSize: '28px',
    fontWeight: 700,
    marginBottom: '16px',
    color: '#252728',
  };

  const featureDescriptionStyle: React.CSSProperties = {
    fontSize: '16px',
    lineHeight: '1.8',
    color: '#666',
  };

  const alternatingFeatureStyle = (index: number): React.CSSProperties => ({
    display: 'grid',
    gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
    gap: '60px',
    alignItems: 'center',
    marginBottom: '80px',
  });

  const alternatingImageWrapStyle: React.CSSProperties = {
    borderRadius: '16px',
    overflow: 'hidden',
    height: '500px',
  };

  const alternatingImageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const alternatingContentStyle: React.CSSProperties = {
    padding: '40px',
  };

  if (layout === 'grid') {
    return (
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <div style={headerStyle}>
            <h2 style={titleStyle}>{title}</h2>
            {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
          </div>

          <div style={gridStyle}>
            {features.map((feature, index) => (
              <div key={index} style={featureCardStyle}>
                <img
                  src={feature.image}
                  alt={feature.title}
                  style={featureImageStyle}
                />
                <div style={featureContentStyle}>
                  <h3 style={featureTitleStyle}>{feature.title}</h3>
                  <p style={featureDescriptionStyle}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>{title}</h2>
          {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
        </div>

        {features.map((feature, index) => (
          <div key={index} style={alternatingFeatureStyle(index)}>
            {index % 2 === 0 ? (
              <>
                <div style={alternatingImageWrapStyle}>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    style={alternatingImageStyle}
                  />
                </div>
                <div style={alternatingContentStyle}>
                  <h3 style={featureTitleStyle}>{feature.title}</h3>
                  <p style={featureDescriptionStyle}>{feature.description}</p>
                </div>
              </>
            ) : (
              <>
                <div style={alternatingContentStyle}>
                  <h3 style={featureTitleStyle}>{feature.title}</h3>
                  <p style={featureDescriptionStyle}>{feature.description}</p>
                </div>
                <div style={alternatingImageWrapStyle}>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    style={alternatingImageStyle}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
