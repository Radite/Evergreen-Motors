import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

// Type definitions for car data
interface CarSpec {
  value: string;
  unit: string;
  label: string;
}

interface ColorOption {
  id: number;
  name: string;
  image: string;
  hex: string;
}

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface CarData {
  name: string;
  tagline: string;
  heroImage: string;
  specs: CarSpec[];
  colors: ColorOption[];
  exteriorFeatures: Feature[];
  interiorFeatures: Feature[];
  technologyFeatures: Feature[];
}

const CarModelPage = () => {
  const [selectedColor, setSelectedColor] = useState(1);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [scrollProgress, setScrollProgress] = useState<{ [key: string]: number }>({});
  const observerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Sample car data
  const carData: CarData = {
    name: "BYD ATTO 2",
    tagline: "Electric Compact SUV",
    heroImage: "/api/placeholder/1920/1080",
    specs: [
      { value: '267', unit: 'miles*', label: 'WLTP combined' },
      { value: '7.9', unit: 's', label: '0-62 mph*' },
      { value: '99', unit: 'mph*', label: 'Top speed' }
    ],
    colors: [
      { id: 0, name: 'Hiking Green', image: '/api/placeholder/60/60', hex: '#4A7C59' },
      { id: 1, name: 'Climbing Grey', image: '/api/placeholder/60/60', hex: '#6B7280' },
      { id: 2, name: 'Skiing White', image: '/api/placeholder/60/60', hex: '#F3F4F6' },
      { id: 3, name: 'Cosmos Black', image: '/api/placeholder/60/60', hex: '#1F2937' }
    ],
    exteriorFeatures: [
      {
        title: "Lighting up your journey",
        description: "Sharp LED headlights are paired with distinctive daytime-running lights to optimise visibility and safety, illuminating your journey ahead. The continuous tail-light design features the recognisable symbol of a Möbius ring.",
        image: "/api/placeholder/800/600"
      },
      {
        title: "Urban comfort and manoeuvrability",
        description: "Designed for the urban explorer, this 4.3m-long compact SUV is surprisingly spacious. It's built for city life too, thanks to its easy manoeuvrability, small turning radius and comfortable handling.",
        image: "/api/placeholder/800/600"
      }
    ],
    interiorFeatures: [
      {
        title: "Smart rotatable screen",
        description: "This compact SUV keeps you connected and entertained through its rotatable screen, seamlessly integrating navigation, apps and infotainment features during every drive.",
        image: "/api/placeholder/800/600"
      },
      {
        title: "Ergonomic seating for comfort and control",
        description: "The multifunctional seats offer exceptional comfort, with electronic adjustment to your seating preference and a heating function to keep you warm on colder days.",
        image: "/api/placeholder/800/600"
      }
    ],
    technologyFeatures: [
      {
        title: "Generous seating space for all passengers",
        description: "Thanks to the advanced BYD e-Platform 3.0, the ATTO 2 optimises space with its compact battery pack, offering generous headroom and legroom for both front and rear passengers.",
        image: "/api/placeholder/800/600"
      },
      {
        title: "Panoramic roof",
        description: "The panoramic sunroof enhances the cabin's spacious and airy ambiance. With brilliant functions such as ambient lighting and wireless charging, the ATTO 2 offers a mix of flexibility, versatility and sophistication.",
        image: "/api/placeholder/800/600"
      },
      {
        title: "Smart storage for extra luggage space",
        description: "This compact SUV has a boot capacity of 400 litres, which can be expanded to 1,340 litres when the rear seats are folded down. Smart in-cabin storage ensures that there's always space for essentials.",
        image: "/api/placeholder/800/600"
      }
    ]
  };

  // Enhanced Intersection Observer with scroll progress tracking
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    Object.keys(observerRefs.current).forEach(key => {
      const element = observerRefs.current[key];
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [key]: true }));
              
              // Calculate scroll progress for parallax effects
              const rect = entry.boundingClientRect;
              const windowHeight = window.innerHeight;
              const progress = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1);
              setScrollProgress(prev => ({ ...prev, [key]: progress }));
            }
          },
          { 
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            rootMargin: '-100px 0px'
          }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    // Scroll listener for continuous updates
    const handleScroll = () => {
      Object.keys(observerRefs.current).forEach(key => {
        const element = observerRefs.current[key];
        if (element && isVisible[key]) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const progress = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1);
          setScrollProgress(prev => ({ ...prev, [key]: progress }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observers.forEach(obs => obs.disconnect());
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  // Calculate transform values based on scroll progress
  const getTransform = (key: string, index: number) => {
    const progress = scrollProgress[key] || 0;
    const isEven = index % 2 === 0;
    
    if (!isVisible[key]) {
      return {
        transform: `translate(${isEven ? '-60px' : '60px'}, 60px)`,
        opacity: 0
      };
    }
    
    const translateX = isEven ? -60 * (1 - progress) : 60 * (1 - progress);
    const translateY = 60 * (1 - progress);
    
    return {
      transform: `translate(${translateX}px, ${translateY}px) scale(${0.95 + (0.05 * progress)})`,
      opacity: Math.min(progress * 1.5, 1)
    };
  };

  // Image parallax effect
  const getImageTransform = (key: string) => {
    const progress = scrollProgress[key] || 0;
    if (!isVisible[key]) {
      return {
        transform: 'translateY(40px) scale(0.95)',
        opacity: 0
      };
    }
    return {
      transform: `translateY(${40 * (1 - progress)}px) scale(${0.95 + (0.05 * progress)})`,
      opacity: Math.min(progress * 1.3, 1)
    };
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#fff',
      fontFamily: "'Montserrat', Arial, 'Helvetica Neue', Helvetica, sans-serif",
      fontSize: '16px',
      fontWeight: 400,
      color: '#000',
      lineHeight: 1.5,
      WebkitFontSmoothing: 'antialiased',
      WebkitTextSizeAdjust: '100%',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      overflow: 'hidden',
      overflowY: 'auto'
    }}>
      
      {/* Hero Banner */}
      <section style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden'
      }}>
        <img 
          src={carData.heroImage}
          alt={carData.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: '60px',
            fontWeight: 700,
            marginBottom: '16px',
            animation: 'fadeInUp 1s cubic-bezier(0.645, 0.045, 0.355, 1)'
          }}>
            {carData.name}
          </h1>
          <p style={{
            fontSize: '24px',
            marginBottom: '48px',
            animation: 'fadeInUp 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s both'
          }}>
            {carData.tagline}
          </p>
          
          <ul style={{
            display: 'flex',
            gap: '64px',
            listStyle: 'none',
            padding: 0,
            margin: 0,
            animation: 'fadeInUp 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0.4s both'
          }}>
            {carData.specs.map((spec, idx) => (
              <li key={idx} style={{
                textAlign: 'center'
              }}>
                <h3 style={{
                  fontSize: '40px',
                  fontWeight: 700,
                  marginBottom: '8px'
                }}>
                  Up to <span>{spec.value}</span> <span style={{ fontSize: '24px' }}>{spec.unit}</span>
                </h3>
                <p style={{
                  fontSize: '14px',
                  opacity: 0.9
                }}>{spec.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Exterior Section */}
      <section style={{
        padding: '160px 96px',
        maxWidth: '1920px',
        margin: '0 auto'
      }}>
        <div 
          ref={el => observerRefs.current['exterior-header'] = el}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '48px',
            alignItems: 'center',
            marginBottom: '80px',
            ...getTransform('exterior-header', 0)
          }}
        >
          <div style={{
            transition: 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)'
          }}>
            <h2 style={{
              fontSize: '18px',
              color: '#7C7D7E',
              fontWeight: 500,
              lineHeight: '24px',
              marginBottom: '8px'
            }}>Exterior</h2>
            <h3 style={{
              fontSize: '40px',
              fontWeight: 700,
              lineHeight: '48px',
              marginBottom: '24px',
              color: '#000'
            }}>
              A compact electric SUV with a striking exterior
            </h3>
            <div style={{
              width: '48px',
              height: '4px',
              backgroundColor: '#000',
              marginBottom: '24px',
              transform: isVisible['exterior-header'] ? 'scaleX(1)' : 'scaleX(0)',
              transformOrigin: 'left',
              transition: 'transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) 0.3s'
            }}></div>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.5',
              color: '#606266',
              textAlign: 'justify'
            }}>
              The BYD ATTO 2 adopts the family design language of the dragon face, 
              designed by BYD's Global Design Director, Wolfgang Egger. Short overhangs 
              and powerful curves on the body surface create a sporty look, while the 
              robust exterior emphasises strength and durability.
            </p>
          </div>
          <div style={{
            transition: 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s',
            ...getImageTransform('exterior-header')
          }}>
            <img 
              src="/api/placeholder/800/600"
              alt="Exterior"
              style={{
                width: '100%',
                borderRadius: '8px',
                boxShadow: '0 12px 32px 4px rgba(0, 0, 0, 0.08)'
              }}
            />
          </div>
        </div>

        {/* Feature Rows */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '120px'
        }}>
          {carData.exteriorFeatures.map((feature, idx) => (
            <div 
              key={`exterior-${idx}`}
              ref={el => observerRefs.current[`exterior-${idx}`] = el}
              className={idx % 2 === 0 ? 'sample-photo forward animated' : 'sample-photo reverse animated'}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '48px',
                alignItems: 'center'
              }}
            >
              <div 
                className="gallery-item"
                style={{
                  order: idx % 2 === 0 ? 1 : 2,
                  transition: 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)',
                  ...getImageTransform(`exterior-${idx}`)
                }}
              >
                <img 
                  src={feature.image}
                  alt={feature.title}
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    transition: 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)',
                    boxShadow: '0 12px 32px 4px rgba(0, 0, 0, 0.08)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div 
                className="copy"
                style={{
                  order: idx % 2 === 0 ? 2 : 1,
                  transition: 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s',
                  ...getTransform(`exterior-${idx}`, idx)
                }}
              >
                <div style={{ marginBottom: '24px' }}>
                  <h3 style={{
                    fontSize: '32px',
                    fontWeight: 700,
                    lineHeight: '1.3',
                    color: '#000'
                  }}>{feature.title}</h3>
                </div>
                <div>
                  <div style={{
                    width: '48px',
                    height: '4px',
                    backgroundColor: '#000',
                    marginBottom: '24px',
                    transform: isVisible[`exterior-${idx}`] ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) 0.4s'
                  }}></div>
                  <p style={{
                    fontSize: '16px',
                    lineHeight: '1.5',
                    color: '#606266',
                    textAlign: 'justify'
                  }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Color Selector */}
      <section 
        ref={el => observerRefs.current['color-selector'] = el}
        style={{
          padding: '160px 96px',
          backgroundColor: '#F7F7F7',
          transition: 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)',
          ...getTransform('color-selector', 0)
        }}
      >
        <div style={{
          maxWidth: '1920px',
          margin: '0 auto'
        }}>
          <h3 style={{
            fontSize: '32px',
            fontWeight: 700,
            marginBottom: '32px',
            color: '#000'
          }}>Customisable colour</h3>
          
          <div style={{
            display: 'flex',
            gap: '16px',
            marginBottom: '48px'
          }}>
            {carData.colors.map((color, idx) => (
              <button
                key={color.id}
                onClick={() => setSelectedColor(color.id)}
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  border: selectedColor === color.id ? '4px solid #000' : '4px solid transparent',
                  backgroundColor: color.hex,
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
                  transform: selectedColor === color.id ? 'scale(1.1)' : 'scale(1)',
                  boxShadow: selectedColor === color.id 
                    ? '0 12px 32px 4px rgba(0, 0, 0, 0.08)' 
                    : '0 0 6px rgba(0, 0, 0, 0.12)',
                  opacity: isVisible['color-selector'] ? 1 : 0,
                  animation: isVisible['color-selector'] 
                    ? `fadeInScale 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) ${idx * 0.1}s both` 
                    : 'none'
                }}
              />
            ))}
          </div>

          <div style={{
            position: 'relative',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 12px 32px 4px rgba(0, 0, 0, 0.04), 0 8px 20px rgba(0, 0, 0, 0.08)',
            transition: 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) 0.3s',
            ...getImageTransform('color-selector')
          }}>
            <img 
              src="/api/placeholder/1400/700"
              alt="Car in selected color"
              style={{
                width: '100%',
                display: 'block',
                transition: 'opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Interior Section */}
      <section style={{
        padding: '160px 96px'
      }}>
        <div style={{
          maxWidth: '1920px',
          margin: '0 auto'
        }}>
          <div 
            ref={el => observerRefs.current['interior-header'] = el}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '48px',
              alignItems: 'center',
              marginBottom: '120px',
              transition: 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)',
              ...getTransform('interior-header', 0)
            }}
          >
            <div>
              <h2 style={{
                fontSize: '18px',
                color: '#7C7D7E',
                fontWeight: 500,
                lineHeight: '24px',
                marginBottom: '8px'
              }}>Interior</h2>
              <h3 style={{
                fontSize: '40px',
                fontWeight: 700,
                lineHeight: '48px',
                marginBottom: '24px',
                color: '#000'
              }}>
                High-quality materials
              </h3>
              <div style={{
                width: '48px',
                height: '4px',
                backgroundColor: '#000',
                marginBottom: '24px',
                transform: isVisible['interior-header'] ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) 0.3s'
              }}></div>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.5',
                color: '#606266',
                textAlign: 'justify'
              }}>
                The BYD ATTO 2's interior is crafted with eco-friendly sleek vegan leather 
                seats and high-quality materials throughout the dashboard and door panels.
              </p>
            </div>
            <div style={{
              transition: 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s',
              ...getImageTransform('interior-header')
            }}>
              <img 
                src="/api/placeholder/800/600"
                alt="Interior"
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  boxShadow: '0 12px 32px 4px rgba(0, 0, 0, 0.08)'
                }}
              />
            </div>
          </div>

          {/* Interior Features */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '120px'
          }}>
            {carData.interiorFeatures.map((feature, idx) => (
              <div 
                key={`interior-${idx}`}
                ref={el => observerRefs.current[`interior-${idx}`] = el}
                className={idx % 2 === 0 ? 'sample-photo forward animated' : 'sample-photo reverse animated'}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '48px',
                  alignItems: 'center'
                }}
              >
                <div 
                  className="gallery-item"
                  style={{
                    order: idx % 2 === 0 ? 1 : 2,
                    transition: 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)',
                    ...getImageTransform(`interior-${idx}`)
                  }}
                >
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    style={{
                      width: '100%',
                      borderRadius: '8px',
                      boxShadow: '0 12px 32px 4px rgba(0, 0, 0, 0.08)'
                    }}
                  />
                </div>
                <div 
                  className="copy"
                  style={{
                    order: idx % 2 === 0 ? 2 : 1,
                    transition: 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s',
                    ...getTransform(`interior-${idx}`, idx)
                  }}
                >
                  <div style={{ marginBottom: '24px' }}>
                    <h3 style={{
                      fontSize: '32px',
                      fontWeight: 700,
                      lineHeight: '1.3',
                      color: '#000'
                    }}>{feature.title}</h3>
                  </div>
                  <div>
                    <div style={{
                      width: '48px',
                      height: '4px',
                      backgroundColor: '#000',
                      marginBottom: '24px',
                      transform: isVisible[`interior-${idx}`] ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) 0.4s'
                    }}></div>
                    <p style={{
                      fontSize: '16px',
                      lineHeight: '1.5',
                      color: '#606266',
                      textAlign: 'justify'
                    }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section style={{
        padding: '160px 96px',
        backgroundColor: '#F7F7F7'
      }}>
        <div style={{
          maxWidth: '1920px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '18px',
            color: '#7C7D7E',
            fontWeight: 500,
            lineHeight: '24px',
            marginBottom: '80px'
          }}>Innovation</h2>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '80px'
          }}>
            {carData.technologyFeatures.map((feature, idx) => (
              <div 
                key={`tech-${idx}`}
                ref={el => observerRefs.current[`tech-${idx}`] = el}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '48px',
                  alignItems: 'center',
                  transition: 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)',
                  ...getTransform(`tech-${idx}`, idx)
                }}
              >
                <div style={{
                  transition: 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s',
                  ...getImageTransform(`tech-${idx}`)
                }}>
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    style={{
                      width: '100%',
                      borderRadius: '8px',
                      boxShadow: '0 12px 32px 4px rgba(0, 0, 0, 0.08)'
                    }}
                  />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    marginBottom: '24px',
                    color: '#000'
                  }}>{feature.title}</h3>
                  <div style={{
                    width: '48px',
                    height: '4px',
                    backgroundColor: '#000',
                    marginBottom: '24px',
                    transform: isVisible[`tech-${idx}`] ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) 0.4s'
                  }}></div>
                  <p style={{
                    fontSize: '16px',
                    lineHeight: '1.5',
                    color: '#606266'
                  }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Hero */}
      <section 
        ref={el => observerRefs.current['tech-hero'] = el}
        style={{
          padding: '160px 96px',
          backgroundColor: '#252728',
          color: '#fff',
          transition: 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)',
          ...getTransform('tech-hero', 0)
        }}
      >
        <div style={{
          maxWidth: '1920px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '48px',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{
                fontSize: '18px',
                color: '#909399',
                fontWeight: 500,
                lineHeight: '24px',
                marginBottom: '8px'
              }}>Technology</h2>
              <h3 style={{
                fontSize: '40px',
                fontWeight: 700,
                lineHeight: '48px',
                marginBottom: '24px'
              }}>BYD Blade Battery</h3>
              <div style={{
                width: '48px',
                height: '4px',
                backgroundColor: '#fff',
                marginBottom: '24px',
                transform: isVisible['tech-hero'] ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) 0.3s'
              }}></div>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.5',
                color: '#CFCFCF',
                marginBottom: '32px'
              }}>
                BYD has been a pioneering name in the battery industry for more than 29 years. 
                Our latest game-changing Blade Battery has passed a series of extreme tests 
                in rigorous conditions making it one of the world's safest batteries.
              </p>
              <button style={{
                border: '1px solid #fff',
                backgroundColor: 'transparent',
                color: '#fff',
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.color = '#252728';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#fff';
              }}>
                LEARN MORE
                <ChevronRight size={20} />
              </button>
            </div>
            <div style={{
              transition: 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s',
              ...getImageTransform('tech-hero')
            }}>
              <img 
                src="/api/placeholder/800/600"
                alt="Battery Technology"
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  boxShadow: '0 12px 32px 4px rgba(0, 0, 0, 0.08)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Bottom CTA Bar */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderTop: '1px solid #e4e7ed',
        padding: '16px 24px',
        zIndex: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '16px',
        flexWrap: 'wrap',
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.05)'
      }}>
        <button style={{
          backgroundColor: '#252728',
          color: '#fff',
          padding: '12px 32px',
          fontSize: '14px',
          fontWeight: 700,
          cursor: 'pointer',
          border: 'none',
          transition: 'all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)',
          boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.5)',
          borderRadius: '0px'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#000'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#252728'}>
          RANGE CALCULATOR
        </button>
        <button style={{
          backgroundColor: '#252728',
          color: '#fff',
          padding: '12px 32px',
          fontSize: '14px',
          fontWeight: 700,
          cursor: 'pointer',
          border: 'none',
          transition: 'all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)',
          boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.5)',
          borderRadius: '0px'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#000'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#252728'}>
          CONFIGURATION
        </button>
        <button style={{
          backgroundColor: 'transparent',
          color: '#252728',
          padding: '12px 32px',
          fontSize: '14px',
          fontWeight: 700,
          cursor: 'pointer',
          border: '1px solid #252728',
          transition: 'all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)',
          boxShadow: 'inset 0 0 0 1px #252728',
          borderRadius: '0px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#252728';
          e.currentTarget.style.color = '#fff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = '#252728';
        }}>
          TEST DRIVE
        </button>
        <button style={{
          backgroundColor: 'transparent',
          color: '#252728',
          padding: '12px 32px',
          fontSize: '14px',
          fontWeight: 700,
          cursor: 'pointer',
          border: '1px solid #252728',
          transition: 'all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)',
          borderRadius: '0px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#f5f7fa';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}>
          PRICE & SPECS
        </button>
      </div>

      {/* Disclaimer */}
      <section style={{
        backgroundColor: '#F7F7F7',
        padding: '80px 96px',
        marginBottom: '80px'
      }}>
        <div style={{
          maxWidth: '1920px',
          margin: '0 auto'
        }}>
          <p style={{
            fontSize: '12px',
            color: '#606266',
            lineHeight: '1.5'
          }}>
            *The vehicle specifications detailed on this page are target specifications 
            under controlled conditions; final specifications are pending and are subject 
            to GB Type Approval. All images shown are for illustration purposes only.
          </p>
        </div>
      </section>

      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .sample-photo.animated .gallery-item {
          will-change: transform, opacity;
        }

        .sample-photo.animated .copy {
          will-change: transform, opacity;
        }

        @media (max-width: 1024px) {
          section > div > div {
            grid-template-columns: 1fr !important;
          }
          
          .sample-photo > div {
            order: initial !important;
          }

          section {
            padding: 80px 32px !important;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 36px !important;
          }
          
          h3 {
            font-size: 28px !important;
          }

          ul {
            flex-direction: column !important;
            gap: 32px !important;
          }

          section {
            padding: 64px 16px !important;
          }

          .sample-photo {
            gap: 24px !important;
          }
        }

        /* Smooth scroll behavior */
        * {
          scroll-behavior: smooth;
        }

        /* Image loading optimization */
        img {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }

        /* Hardware acceleration for transforms */
        .gallery-item,
        .copy {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}} />
    </div>
  );
};

export default CarModelPage