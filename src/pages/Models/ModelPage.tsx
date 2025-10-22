import React from 'react';

const LuxuryBYDCarPage: React.FC = () => {
  return (
    <div style={{
      fontFamily: '"Montserrat", Arial, "Helvetica Neue", Helvetica, sans-serif',
      margin: 0,
      padding: 0,
      backgroundColor: '#ffffff',
      color: '#1a1a1a',
      overflowX: 'hidden'
    }}>
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
        transition: 'all 0.3s ease',
        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{
          maxWidth: '1920px',
          margin: '0 auto',
          padding: '20px 60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '32px',
            fontWeight: '700',
            letterSpacing: '4px',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #d4af37 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            BYD
          </div>
          
          <nav style={{
            display: 'flex',
            gap: '45px',
            alignItems: 'center'
          }}>
            {['Overview', 'Design', 'Performance', 'Technology', 'Configure'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  color: '#1a1a1a',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  letterSpacing: '1px',
                  position: 'relative',
                  padding: '8px 0',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#d4af37';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#1a1a1a';
                }}
              >
                {item}
              </a>
            ))}
            <button style={{
              backgroundColor: '#d4af37',
              border: 'none',
              color: '#fff',
              padding: '12px 28px',
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '1.5px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              borderRadius: '2px',
              textTransform: 'uppercase',
              boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.3)';
            }}>
              Test Drive
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        height: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #fafafa 0%, #ffffff 50%, #f5f5f5 100%)',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 30% 40%, rgba(212, 175, 55, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(26, 26, 26, 0.02) 0%, transparent 50%)
          `,
          zIndex: 1
        }}></div>
        
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: '1400px',
          padding: '0 60px'
        }}>
          <div style={{
            fontSize: '14px',
            fontWeight: '500',
            letterSpacing: '4px',
            marginBottom: '20px',
            color: '#d4af37',
            textTransform: 'uppercase',
            animation: 'fadeInUp 1s ease-out'
          }}>
            BYD SEALION 7
          </div>
          
          <h1 style={{
            fontSize: '120px',
            fontWeight: '700',
            letterSpacing: '10px',
            margin: '0 0 40px 0',
            lineHeight: '1',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #d4af37 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'fadeInUp 1.2s ease-out'
          }}>
            PURE LUXURY
          </h1>

          {/* Car Image Placeholder */}
          <div style={{
            width: '100%',
            height: '500px',
            margin: '60px 0',
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, transparent 100%)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(212, 175, 55, 0.15)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
            animation: 'fadeInUp 1.4s ease-out',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              fontSize: '180px',
              fontWeight: '900',
              opacity: '0.03',
              letterSpacing: '20px',
              color: '#1a1a1a',
              position: 'absolute'
            }}>
              SEALION 7
            </div>
            <div style={{
              fontSize: '24px',
              fontWeight: '300',
              letterSpacing: '3px',
              color: 'rgba(26, 26, 26, 0.3)',
              zIndex: 1
            }}>
              [Hero Car Image]
            </div>
          </div>
          
          <p style={{
            fontSize: '20px',
            fontWeight: '300',
            letterSpacing: '2px',
            marginBottom: '50px',
            color: '#4a4a4a',
            lineHeight: '1.8',
            maxWidth: '800px',
            margin: '0 auto 50px',
            animation: 'fadeInUp 1.6s ease-out'
          }}>
            Where sophistication meets sustainable innovation. Experience the pinnacle of electric mobility.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            animation: 'fadeInUp 1.8s ease-out'
          }}>
            <button style={{
              backgroundColor: '#d4af37',
              border: 'none',
              color: '#fff',
              padding: '18px 50px',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '2px',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              textTransform: 'uppercase',
              boxShadow: '0 10px 40px rgba(212, 175, 55, 0.3)',
              borderRadius: '2px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 15px 50px rgba(212, 175, 55, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(212, 175, 55, 0.3)';
            }}>
              Configure Your SEALION 7
            </button>
            
            <button style={{
              backgroundColor: 'transparent',
              border: '2px solid #1a1a1a',
              color: '#1a1a1a',
              padding: '18px 50px',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '2px',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              textTransform: 'uppercase',
              borderRadius: '2px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1a1a1a';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#1a1a1a';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Key Specifications */}
      <section style={{
        padding: '100px 60px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{
          maxWidth: '1600px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '60px'
        }}>
          {[
            { value: '530 km', label: 'Range (WLTP)', icon: '⚡' },
            { value: '4.5s', label: '0-100 km/h', icon: '🚀' },
            { value: '530 HP', label: 'Max Power', icon: '💪' },
            { value: '82.5 kWh', label: 'Battery', icon: '🔋' }
          ].map((spec, index) => (
            <div key={index} style={{
              textAlign: 'center',
              padding: '40px 30px',
              backgroundColor: '#fafafa',
              borderRadius: '8px',
              border: '1px solid rgba(212, 175, 55, 0.1)',
              transition: 'all 0.4s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(212, 175, 55, 0.15)';
              e.currentTarget.style.borderColor = '#d4af37';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.1)';
            }}>
              <div style={{
                fontSize: '48px',
                marginBottom: '15px'
              }}>
                {spec.icon}
              </div>
              <div style={{
                fontSize: '42px',
                fontWeight: '700',
                color: '#d4af37',
                marginBottom: '10px',
                letterSpacing: '1px'
              }}>
                {spec.value}
              </div>
              <div style={{
                fontSize: '14px',
                color: '#6a6a6a',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                fontWeight: '500'
              }}>
                {spec.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Design Section */}
      <section style={{
        padding: '140px 60px',
        background: 'linear-gradient(180deg, #ffffff 0%, #fafafa 100%)'
      }}>
        <div style={{
          maxWidth: '1600px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '80px'
          }}>
            <div style={{
              fontSize: '14px',
              letterSpacing: '4px',
              color: '#d4af37',
              marginBottom: '20px',
              fontWeight: '500',
              textTransform: 'uppercase'
            }}>
              Exterior Design
            </div>
            <h2 style={{
              fontSize: '56px',
              fontWeight: '700',
              letterSpacing: '3px',
              margin: 0,
              background: 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Sculpted Elegance
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
            marginBottom: '100px'
          }}>
            <div style={{
              height: '500px',
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, #ffffff 100%)',
              borderRadius: '12px',
              border: '1px solid rgba(212, 175, 55, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)'
            }}>
              <div style={{
                fontSize: '24px',
                fontWeight: '300',
                letterSpacing: '3px',
                color: 'rgba(26, 26, 26, 0.2)'
              }}>
                [Exterior View]
              </div>
            </div>

            <div>
              <h3 style={{
                fontSize: '36px',
                fontWeight: '600',
                marginBottom: '25px',
                color: '#1a1a1a',
                letterSpacing: '1px'
              }}>
                Aerodynamic Perfection
              </h3>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.8',
                color: '#4a4a4a',
                marginBottom: '30px',
                letterSpacing: '0.5px'
              }}>
                Every curve, every line has been meticulously crafted to reduce drag while creating a commanding presence on the road. The flowing silhouette seamlessly blends form and function.
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {[
                  'LED Matrix Headlights with Dynamic Signature',
                  'Frameless Doors with Soft-Close Technology',
                  '20" Aerodynamic Alloy Wheels',
                  'Panoramic Glass Roof'
                ].map((feature, index) => (
                  <li key={index} style={{
                    fontSize: '16px',
                    color: '#1a1a1a',
                    marginBottom: '15px',
                    paddingLeft: '30px',
                    position: 'relative',
                    letterSpacing: '0.5px'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: '#d4af37',
                      fontWeight: '700'
                    }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interior Section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center'
          }}>
            <div>
              <div style={{
                fontSize: '14px',
                letterSpacing: '4px',
                color: '#d4af37',
                marginBottom: '20px',
                fontWeight: '500',
                textTransform: 'uppercase'
              }}>
                Interior Design
              </div>
              <h3 style={{
                fontSize: '36px',
                fontWeight: '600',
                marginBottom: '25px',
                color: '#1a1a1a',
                letterSpacing: '1px'
              }}>
                Refined Sanctuary
              </h3>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.8',
                color: '#4a4a4a',
                marginBottom: '30px',
                letterSpacing: '0.5px'
              }}>
                Step into a world of premium materials, ambient lighting, and intuitive technology. Every detail designed for comfort and sophistication.
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {[
                  'Nappa Leather Seats with Heating & Ventilation',
                  '15.6" Rotating Touchscreen Display',
                  'Premium Sound System with 12 Speakers',
                  'Ambient Lighting with 128 Colors'
                ].map((feature, index) => (
                  <li key={index} style={{
                    fontSize: '16px',
                    color: '#1a1a1a',
                    marginBottom: '15px',
                    paddingLeft: '30px',
                    position: 'relative',
                    letterSpacing: '0.5px'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: '#d4af37',
                      fontWeight: '700'
                    }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              height: '500px',
              background: 'linear-gradient(135deg, #ffffff 0%, rgba(212, 175, 55, 0.08) 100%)',
              borderRadius: '12px',
              border: '1px solid rgba(212, 175, 55, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)'
            }}>
              <div style={{
                fontSize: '24px',
                fontWeight: '300',
                letterSpacing: '3px',
                color: 'rgba(26, 26, 26, 0.2)'
              }}>
                [Interior View]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section style={{
        padding: '140px 60px',
        backgroundColor: '#ffffff'
      }}>
        <div style={{
          maxWidth: '1600px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '14px',
            letterSpacing: '4px',
            color: '#d4af37',
            marginBottom: '20px',
            fontWeight: '500',
            textTransform: 'uppercase'
          }}>
            Advanced Technology
          </div>
          <h2 style={{
            fontSize: '56px',
            fontWeight: '700',
            letterSpacing: '3px',
            marginBottom: '80px',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Intelligent Innovation
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '50px'
          }}>
            {[
              {
                title: 'Blade Battery',
                description: 'Revolutionary safety and longevity with BYD\'s proprietary battery technology',
                icon: '🔋'
              },
              {
                title: 'ITM Platform',
                description: 'Intelligent Torque Management for optimal performance and efficiency',
                icon: '⚙️'
              },
              {
                title: 'ADAS Level 2+',
                description: 'Advanced driver assistance with adaptive cruise and lane centering',
                icon: '🤖'
              }
            ].map((tech, index) => (
              <div key={index} style={{
                padding: '50px 40px',
                backgroundColor: '#fafafa',
                borderRadius: '12px',
                border: '1px solid rgba(212, 175, 55, 0.1)',
                transition: 'all 0.4s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(212, 175, 55, 0.15)';
                e.currentTarget.style.borderColor = '#d4af37';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.1)';
              }}>
                <div style={{
                  fontSize: '64px',
                  marginBottom: '25px'
                }}>
                  {tech.icon}
                </div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  marginBottom: '20px',
                  color: '#1a1a1a',
                  letterSpacing: '1px'
                }}>
                  {tech.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.7',
                  color: '#6a6a6a',
                  letterSpacing: '0.5px'
                }}>
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '120px 60px',
        background: 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '700',
            letterSpacing: '3px',
            marginBottom: '30px',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #d4af37 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Experience The SEALION 7
          </h2>
          <p style={{
            fontSize: '20px',
            lineHeight: '1.8',
            color: '#4a4a4a',
            marginBottom: '50px',
            letterSpacing: '0.5px'
          }}>
            Schedule your exclusive test drive today and discover what true electric luxury feels like.
          </p>
          <div style={{
            display: 'flex',
            gap: '25px',
            justifyContent: 'center'
          }}>
            <button style={{
              backgroundColor: '#d4af37',
              border: 'none',
              color: '#fff',
              padding: '20px 55px',
              fontSize: '15px',
              fontWeight: '600',
              letterSpacing: '2px',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              textTransform: 'uppercase',
              boxShadow: '0 10px 40px rgba(212, 175, 55, 0.3)',
              borderRadius: '2px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 15px 50px rgba(212, 175, 55, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(212, 175, 55, 0.3)';
            }}>
              Book Test Drive
            </button>
            
            <button style={{
              backgroundColor: 'transparent',
              border: '2px solid #1a1a1a',
              color: '#1a1a1a',
              padding: '20px 55px',
              fontSize: '15px',
              fontWeight: '600',
              letterSpacing: '2px',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              textTransform: 'uppercase',
              borderRadius: '2px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1a1a1a';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#1a1a1a';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              Find a Dealer
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#f5f5f5',
        borderTop: '1px solid rgba(0, 0, 0, 0.08)',
        padding: '80px 60px 40px'
      }}>
        <div style={{
          maxWidth: '1920px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '50px',
            marginBottom: '60px'
          }}>
            {[
              {
                title: 'Models',
                links: ['BYD DOLPHIN', 'BYD ATTO 3', 'BYD SEAL', 'BYD SEALION 7']
              },
              {
                title: 'About BYD',
                links: ['Company', 'News', 'Careers']
              },
              {
                title: 'Support',
                links: ['Contact Us', 'Find a Dealer', 'FAQ']
              },
              {
                title: 'Legal',
                links: ['Privacy Policy', 'Terms of Use', 'Cookies']
              },
              {
                title: 'Connect',
                links: ['Facebook', 'Instagram', 'LinkedIn', 'YouTube']
              }
            ].map((section, index) => (
              <div key={index}>
                <h3 style={{
                  fontSize: '14px',
                  fontWeight: '700',
                  letterSpacing: '2px',
                  marginBottom: '25px',
                  color: '#1a1a1a',
                  textTransform: 'uppercase'
                }}>
                  {section.title}
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} style={{
                      marginBottom: '12px'
                    }}>
                      <a
                        href="#"
                        style={{
                          color: '#6a6a6a',
                          textDecoration: 'none',
                          fontSize: '14px',
                          letterSpacing: '0.5px',
                          transition: 'all 0.3s ease',
                          display: 'inline-block'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#d4af37';
                          e.currentTarget.style.paddingLeft = '5px';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#6a6a6a';
                          e.currentTarget.style.paddingLeft = '0';
                        }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{
            paddingTop: '30px',
            borderTop: '1px solid rgba(0, 0, 0, 0.05)',
            fontSize: '12px',
            color: '#8a8a8a',
            letterSpacing: '0.5px',
            lineHeight: '1.8',
            textAlign: 'center'
          }}>
            © 2025 BYD Europe B.V. All rights reserved. | BYD (U.K.) CO., LTD. | Company Registration Number 08458577
          </div>
        </div>
      </footer>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
};

export default LuxuryBYDCarPage;