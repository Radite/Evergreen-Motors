import React, { useState, useRef } from 'react';

// Type Definitions
interface DiversificationItem {
  icon: string;
  title: string;
  image: string;
}

interface FeatureItem {
  title: string;
  description: string;
}


// Hero Video Banner Component
const HeroBanner: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section style={{
      position: 'relative',
      height: '140vh',
      width: '100%',
      overflow: 'hidden'
    }}>
      <video
        ref={videoRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/About/Hero.mp4" type="video/mp4" />
      </video>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
      }}></div>
    </section>
  );
};

// About Section Component
const AboutSection: React.FC = () => {
  return (
<section style={{
  position: 'relative',
  width: '100%',
  height: '140vh',
  overflow: 'hidden'
}}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}>
        <img
          src="/About/AboutBYD.jpg"
          alt="About BYD"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1600px',
        margin: '0 auto',
        padding: '6rem 4rem 4rem',
        textAlign: 'center'
      }}>
        <div style={{ 
          maxWidth: '80rem',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '3.5rem',
            fontWeight: '700',
            color: '#000',
            marginBottom: '2rem',
            lineHeight: '1.2'
          }}>
            About BYD
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#000',
            lineHeight: '1.8',
            fontWeight: '300'
          }}>
            Founded in 1994, BYD is a high-tech company devoted to leveraging
            technological innovations for a better life. After more than 31 years
            of rapid growth, BYD has played a significant role in industries
            related to electronics, auto, renewable energy and rail transit. With
            a focus on energy acquisition, storage, and application, BYD offers
            comprehensive zero-emission new energy solutions.
          </p>
        </div>
      </div>
    </section>
  );
};
// Diversification Section Component
const DiversificationSection: React.FC = () => {
  const businesses: DiversificationItem[] = [
    { icon: '/About/icon1pc.png', title: 'Auto', image: '/About/diversification-auto.jpg' },
    { icon: '/About/icon2pc.png', title: 'Rail Transit', image: '/About/diversification-rail-transit.jpg' },
    { icon: '/About/icon3pc.png', title: 'Renewable Energy', image: '/About/diversification-renewable-energy.jpg' },
    { icon: '/About/icon4pc.png', title: 'Electronics', image: '/About/diversification-electronics.jpg' },
  ];

  return (
<section style={{
      position: 'relative',
      width: '100%',
      padding: '8rem 0'
    }}>

      {/* Background Image Container */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0
      }}>
        <img
          src="/About/Diversification.jpg"
          alt="Diversification Background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        {/* Dark overlay for better text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}></div>
      </div>

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '4rem',
          color: 'white'
        }}>
          Diversification
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem'
        }}>
          {businesses.map((business, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'transparent',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '2px solid white',
                transition: 'transform 0.3s',
                padding: '0.5rem'
              }}
            >
              <div style={{ padding: '1.5rem 1rem 1rem', textAlign: 'center' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  margin: '0 auto 0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src={business.icon} 
                    alt={business.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white', marginBottom: '1rem' }}>{business.title}</h3>
              </div>
              <div style={{
                aspectRatio: '4/3',
                overflow: 'hidden',
                borderRadius: '4px'
              }}>
                <img
                  src={business.image}
                  alt={business.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Image Text Section Component
// Image Text Section Component
const ImageTextSection: React.FC<{
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  darkText?: boolean;
}> = ({ title, description, image, reverse, darkText }) => {
  return (
<section style={{
  position: 'relative',
  width: '100%',
  minHeight: '140vh',
  overflow: 'hidden'
}}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}>
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1600px',
        margin: '0 auto',
        padding: '6rem 4rem 4rem',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '56rem',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '2rem',
            color: darkText ? '#252728' : 'white',
            lineHeight: '1.2'
          }}>
            {title}
          </h2>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: '1.8',
            color: darkText ? '#4b5563' : 'white',
            fontWeight: '300'
          }}>
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
// Features Section Component
const FeaturesSection: React.FC<{
  title: string;
  subtitle?: string;
  features: FeatureItem[];
  image: string;
}> = ({ title, subtitle, features, image }) => {
  return (
<section style={{
  position: 'relative',
  width: '100%',
  height: '140vh',        // ← Add (same as hero)
  display: 'flex',        // ← Add (for centering)
  alignItems: 'center',   // ← Add (vertical center)
  overflow: 'hidden'      // ← Add (clean edges)
}}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}>
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>
      <div style={{
        position: 'relative',
        maxWidth: '1600px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1rem'
          }}>
            {title}
          </h2>
          {subtitle && (
            <p style={{
              fontSize: '1.125rem',
              color: 'white',
              opacity: 0.9
            }}>{subtitle}</p>
          )}
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                color: 'white',
                marginBottom: '0.75rem'
              }}>
                {feature.title}
              </h3>
              <p style={{
                color: 'white',
                opacity: 0.9,
                lineHeight: '1.75'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


// Main App Component
const BYDAboutPage: React.FC = () => {
  const bladeFeatures: FeatureItem[] = [
    {
      title: 'Enhanced safety',
      description: 'The unique flat rectangle shape improves cooling efficiency and preheating performance. Blade Battery has safely passed the nail penetration test without emitting fire or smoke.',
    },
    {
      title: 'Optimised strength',
      description: 'Arranged in an array in one pack, each cell serves as a structural beam to help withstand the force.',
    },
    {
      title: 'Longer range',
      description: 'The space utilisation of the Blade Battery has been increased by over 50% compared with traditional battery packs.',
    },
    {
      title: 'Longer lifecycle',
      description: 'Blade Battery has a long battery life with over 5000 charge and discharge cycles.',
    },
  ];

  const ePlatformFeatures: FeatureItem[] = [
    {
      title: 'Safety',
      description: 'The e-Platform 3.0 doubles the rigidity of the entire vehicle after integrating the Blade Battery into the car body.',
    },
    {
      title: 'High efficiency',
      description: "Equipped with the world's first mass-produced 8-in-1 electric powertrain as standard, the overall system efficiency is up to 89%.",
    },
    {
      title: 'Intelligence',
      description: 'Evolving from distributed electronic and electrical architecture into an integrated domain-controlled architecture.',
    },
    {
      title: 'Aesthetics',
      description: 'The vehicle features shorter overhangs and a longer wheel base, significantly expanding the passenger space.',
    },
  ];

  return (
    <div style={{ minHeight: '140vh', backgroundColor: 'white' }}>
      <main >
        <HeroBanner />
        <AboutSection />
        <DiversificationSection />
        <ImageTextSection
          title="Globalisation"
          description="BYD's new energy vehicles have established a presence in 112 countries and regions worldwide, while its passenger vehicles have reached 102 countries and regions."
          image="/About/Globalization.jpg"
        />
        <ImageTextSection
          title="Auto"
          description="BYD has developed the Blade Battery and dual-mode hybrid power technology, accelerating the once-in-a-century transition from fossil fuel powered vehicles to electric vehicles."
          image="/About/Auto.jpg"
        />
        <FeaturesSection
          title="Blade Battery"
          features={bladeFeatures}
          image="/About/Blade.jpg"
        />
        <FeaturesSection
          title="e-Platform 3.0"
          subtitle="Give full play to the advantages of intelligence, efficiency, safety, and aesthetics that electrification brings."
          features={ePlatformFeatures}
          image="/About/E-Platform.jpg"
        />
        <ImageTextSection
          title="Semiconductor Chip"
          description="Semiconductor chip, the 'CPU' of new energy vehicles, is the core technology of the whole industry."
          image="/About/SemiCondutorChip.jpg"
        />
        <ImageTextSection
          title="BYD Intelligent Cockpit System"
          description="The smartphone functions are integrated into the in-vehicle platform."
          image="/About/DiLink.jpg"
        />
        <ImageTextSection
          title="Vehicle Safety"
          description="Numerous challenging tests for top quality"
          image="/About/VehicleSafety.jpg"
        />
        <ImageTextSection
          title="Market Performance"
          description="As of the end of April 2025, BYD's cumulative new energy vehicle (NEV) sales exceeded 11.9 million units. On November 18, 2024, BYD became the world's first automaker to produce 10 million NEVs."
          image="/About/MarketPerformance.jpg"
        />
        <ImageTextSection
          title="Social Responsibility"
          description="At the beginning of 2020, in the midst of Covid-19, BYD responded quickly and announced that it would produce face masks to help alleviate mask shortages around the world."
          image="/About/SocialResponsibility.jpg"
          darkText
        />
      </main>
    </div>
  );
};

export default BYDAboutPage;