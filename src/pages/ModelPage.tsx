import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { models } from './TestDrivePage/data/models';

const CarModelPage: React.FC = () => {
  const location = useLocation();
  const [selectedColor, setSelectedColor] = useState(0);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [scrollProgress, setScrollProgress] = useState<{ [key: string]: number }>({});
  const observerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Map URL slugs to model names
  const urlToModelMap: { [key: string]: string } = {
    '/models/dolphin-mini': 'BYD Dolphin Mini',
    '/models/atto-2': 'BYD Atto 2',
    '/models/atto-3': 'BYD Atto 3',
    '/models/icar-03': 'iCAR 03 Adventure Ed.',
    '/models/seal-u': 'BYD Seal U',
    '/models/sealion-07': 'BYD Sealion 07',
    '/models/tang': 'BYD Tang',
    '/models/radar-king-kong': 'Radar King Kong',
    '/models/song-pro': 'BYD Song Pro',
    '/models/leopard-ti7': 'BYD Leopard Ti7',
    '/models/yu8': 'BYD YU8',
    '/models/shark': 'BYD Shark',
  };

  // Get the model name from the URL
  const modelName = urlToModelMap[location.pathname];
  
  // Find the model by name
  const model = models.find(m => m.name === modelName);

  if (!model) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <h1 style={{ fontSize: '48px', fontWeight: 700 }}>Model Not Found</h1>
        <p style={{ fontSize: '18px', color: '#606266' }}>
          The model you're looking for doesn't exist.
        </p>
        <a 
          href="/models" 
          style={{
            padding: '12px 32px',
            backgroundColor: '#252728',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '14px'
          }}
        >
          VIEW ALL MODELS
        </a>
      </div>
    );
  }

  // Transform model data for the component
  const carData = {
    name: model.name,
    tagline: `${model.type === 'electric' ? 'Electric' : 'Hybrid'} ${model.class}`,
    heroImage: model.images[3] || model.images[0], // Banner image
    mainImage: model.images[0], // Main front view
    sideImage: model.images[1] || model.images[0], // Side view
    interiorImage: model.images[2] || model.images[0], // Interior view
    specs: [
      { value: model.range.split(' ')[0], unit: '', label: 'Range' },
      { value: model.seats, unit: '', label: 'Seating' },
      { value: model.size.split('x')[0].trim(), unit: '', label: 'Length' }
    ],
    colors: model.colors.exterior.map((color, idx) => ({
      id: idx,
      name: color,
      hex: getColorHex(color)
    })),
    category: model.category,
    class: model.class,
    size: model.size,
    type: model.type,
    notes: model.notes,
    interiorColors: model.colors.interior
  };

  // Helper function to get hex colors
  function getColorHex(colorName: string): string {
    const colorMap: { [key: string]: string } = {
      'White': '#F3F4F6',
      'Black': '#1F2937',
      'Gray': '#6B7280',
      'Grey': '#6B7280',
      'Beige': '#D4C5B0',
      'Blue': '#3B82F6',
      'Green': '#4A7C59',
      'Silver': '#C0C0C0',
      'Orange': '#F97316',
      'Bluish Gray': '#8B9DC3',
      'Dark Green': '#1E5128',
      'Light Blue': '#7DD3FC',
      'Dark Blue': '#1E3A8A',
      'Sunset Orange': '#FB923C',
      'Cloud Gray': '#9CA3AF'
    };
    return colorMap[colorName] || '#6B7280';
  }

  // Enhanced Intersection Observer
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    Object.keys(observerRefs.current).forEach(key => {
      const element = observerRefs.current[key];
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [key]: true }));
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
          textAlign: 'center',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))'
        }}>
          <h1 style={{
            fontSize: '60px',
            fontWeight: 700,
            marginBottom: '16px',
            animation: 'fadeInUp 1s cubic-bezier(0.645, 0.045, 0.355, 1)',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            {carData.name}
          </h1>
          <p style={{
            fontSize: '24px',
            marginBottom: '48px',
            animation: 'fadeInUp 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s both',
            textShadow: '0 2px 8px rgba(0,0,0,0.3)'
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
                  marginBottom: '8px',
                  textShadow: '0 2px 8px rgba(0,0,0,0.4)'
                }}>
                  {spec.value} <span style={{ fontSize: '24px' }}>{spec.unit}</span>
                </h3>
                <p style={{
                  fontSize: '14px',
                  opacity: 0.9
                }}>{spec.label}</p>
              </li>
            ))}
          </ul>

          {carData.notes && (
            <div style={{
              position: 'absolute',
              bottom: '40px',
              backgroundColor: 'rgba(255,255,255,0.9)',
              color: '#252728',
              padding: '12px 24px',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: 500,
              textShadow: 'none'
            }}>
              {carData.notes}
            </div>
          )}
        </div>
      </section>

      {/* Color Selection */}
      <section 
        ref={el => observerRefs.current['colors'] = el}
        style={{
          padding: '160px 96px',
          backgroundColor: '#F7F7F7',
          transition: 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)',
          ...getTransform('colors', 0)
        }}
      >
        <div style={{
          maxWidth: '1920px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '40px',
            fontWeight: 700,
            marginBottom: '48px',
            textAlign: 'center',
            color: '#000'
          }}>Choose Your Color</h2>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            marginBottom: '64px',
            flexWrap: 'wrap'
          }}>
            {carData.colors.map((color) => (
              <button
                key={color.id}
                onClick={() => setSelectedColor(color.id)}
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: color.hex,
                  border: selectedColor === color.id ? '4px solid #252728' : '2px solid #ddd',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: selectedColor === color.id 
                    ? '0 4px 12px rgba(0,0,0,0.2)' 
                    : '0 2px 6px rgba(0,0,0,0.1)',
                  transform: selectedColor === color.id ? 'scale(1.1)' : 'scale(1)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  if (selectedColor !== color.id) {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedColor !== color.id) {
                    e.currentTarget.style.transform = 'scale(1)';
                  }
                }}
              />
            ))}
          </div>
          
          <div style={{
            textAlign: 'center',
            marginBottom: '32px'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 600,
              color: '#000'
            }}>{carData.colors[selectedColor].name}</h3>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img 
              src={carData.mainImage}
              alt={`${carData.name} in ${carData.colors[selectedColor].name}`}
              style={{
                maxWidth: '900px',
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 12px 32px 4px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.5s ease'
              }}
            />
          </div>
        </div>
      </section>

      {/* Exterior Design */}
      <section 
        ref={el => observerRefs.current['exterior'] = el}
        style={{
          padding: '160px 96px',
          backgroundColor: '#fff',
          transition: 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)',
          ...getTransform('exterior', 0)
        }}
      >
        <div style={{
          maxWidth: '1920px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '80px',
            alignItems: 'center'
          }}>
            <div style={{
              transition: 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)',
              ...getTransform('exterior', 0)
            }}>
              <h3 style={{
                fontSize: '32px',
                fontWeight: 700,
                marginBottom: '24px',
                color: '#000'
              }}>Striking Exterior Design</h3>
              <p style={{
                fontSize: '16px',
                color: '#606266',
                lineHeight: '1.8',
                marginBottom: '32px'
              }}>
                Experience the perfect blend of form and function with the {carData.name}. 
                Every curve and line has been meticulously crafted to create a vehicle that 
                turns heads while delivering exceptional aerodynamics and efficiency.
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px',
                marginBottom: '32px'
              }}>
                <div>
                  <h4 style={{
                    fontSize: '14px',
                    color: '#909399',
                    marginBottom: '8px'
                  }}>Category</h4>
                  <p style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#000'
                  }}>{carData.category}</p>
                </div>
                <div>
                  <h4 style={{
                    fontSize: '14px',
                    color: '#909399',
                    marginBottom: '8px'
                  }}>Class</h4>
                  <p style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#000'
                  }}>{carData.class}</p>
                </div>
              </div>
              <button style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 32px',
                fontSize: '14px',
                fontWeight: 700,
                color: '#fff',
                backgroundColor: '#252728',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)',
                boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.5)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#252728';
              }}>
                EXPLORE FEATURES
                <ChevronRight size={20} />
              </button>
            </div>
            <div style={{
              transition: 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s',
              ...getImageTransform('exterior')
            }}>
              <img 
                src={carData.sideImage}
                alt={`${carData.name} side view`}
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

      {/* Interior Comfort */}
      <section 
        ref={el => observerRefs.current['interior'] = el}
        style={{
          padding: '160px 96px',
          backgroundColor: '#F7F7F7',
          transition: 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)',
          ...getTransform('interior', 1)
        }}
      >
        <div style={{
          maxWidth: '1920px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '80px',
            alignItems: 'center'
          }}>
            <div style={{
              order: 2,
              transition: 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s',
              ...getImageTransform('interior-img')
            }}>
              <img 
                src={carData.interiorImage}
                alt={`${carData.name} interior`}
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  boxShadow: '0 12px 32px 4px rgba(0, 0, 0, 0.08)'
                }}
              />
            </div>
            <div style={{
              order: 1,
              transition: 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)',
              ...getTransform('interior', 1)
            }}>
              <h3 style={{
                fontSize: '32px',
                fontWeight: 700,
                marginBottom: '24px',
                color: '#000'
              }}>Refined Interior Experience</h3>
              <p style={{
                fontSize: '16px',
                color: '#606266',
                lineHeight: '1.8',
                marginBottom: '32px'
              }}>
                Step inside and discover a cabin designed for comfort and connectivity. 
                Premium materials, intuitive technology, and thoughtful design come together 
                to create an interior that elevates every journey.
              </p>
              <div style={{
                marginBottom: '32px'
              }}>
                <h4 style={{
                  fontSize: '14px',
                  color: '#909399',
                  marginBottom: '12px'
                }}>Interior Color Options</h4>
                <div style={{
                  display: 'flex',
                  gap: '12px',
                  flexWrap: 'wrap'
                }}>
                  {carData.interiorColors.map((color, idx) => (
                    <span key={idx} style={{
                      padding: '8px 16px',
                      backgroundColor: '#fff',
                      borderRadius: '4px',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#000',
                      border: '1px solid #ddd'
                    }}>
                      {color}
                    </span>
                  ))}
                </div>
              </div>
              <button style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 32px',
                fontSize: '14px',
                fontWeight: 700,
                color: '#fff',
                backgroundColor: '#252728',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)',
                boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.5)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#252728';
              }}>
                VIEW INTERIOR DETAILS
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section (if available) */}
      {model.videos && model.videos.length > 0 && (
        <section 
          ref={el => observerRefs.current['video-section'] = el}
          style={{
            padding: '160px 96px',
            backgroundColor: '#fff',
            transition: 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)',
            ...getTransform('video-section', 0)
          }}
        >
          <div style={{
            maxWidth: '1920px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontSize: '40px',
              fontWeight: 700,
              marginBottom: '48px',
              color: '#000',
              textAlign: 'center'
            }}>Experience the {carData.name}</h2>
            <div style={{
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 12px 32px 4px rgba(0, 0, 0, 0.08)'
            }}>
              <video
                controls
                style={{
                  width: '100%',
                  display: 'block',
                  backgroundColor: '#000'
                }}
                poster={carData.mainImage}
              >
                <source src={model.videos[0]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>
      )}

      {/* Specifications Summary */}
      <section 
        ref={el => observerRefs.current['specs-summary'] = el}
        style={{
          padding: '160px 96px',
          backgroundColor: '#252728',
          color: '#fff',
          transition: 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)',
          ...getTransform('specs-summary', 0)
        }}
      >
        <div style={{
          maxWidth: '1920px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '40px',
            fontWeight: 700,
            marginBottom: '48px'
          }}>Technical Specifications</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px',
            marginTop: '48px'
          }}>
            <div style={{
              padding: '32px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: '8px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
            }}>
              <h4 style={{
                fontSize: '16px',
                color: '#909399',
                marginBottom: '12px'
              }}>Type</h4>
              <p style={{
                fontSize: '24px',
                fontWeight: 700
              }}>{carData.type === 'electric' ? 'Full Electric' : 'Plug-in Hybrid'}</p>
            </div>
            
            <div style={{
              padding: '32px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: '8px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
            }}>
              <h4 style={{
                fontSize: '16px',
                color: '#909399',
                marginBottom: '12px'
              }}>Range</h4>
              <p style={{
                fontSize: '24px',
                fontWeight: 700
              }}>{model.range}</p>
            </div>
            
            <div style={{
              padding: '32px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: '8px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
            }}>
              <h4 style={{
                fontSize: '16px',
                color: '#909399',
                marginBottom: '12px'
              }}>Category</h4>
              <p style={{
                fontSize: '24px',
                fontWeight: 700
              }}>{carData.category}</p>
            </div>
            
            <div style={{
              padding: '32px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: '8px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
            }}>
              <h4 style={{
                fontSize: '16px',
                color: '#909399',
                marginBottom: '12px'
              }}>Seating</h4>
              <p style={{
                fontSize: '24px',
                fontWeight: 700
              }}>{model.seats}</p>
            </div>

            <div style={{
              padding: '32px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: '8px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
            }}>
              <h4 style={{
                fontSize: '16px',
                color: '#909399',
                marginBottom: '12px'
              }}>Dimensions</h4>
              <p style={{
                fontSize: '18px',
                fontWeight: 700
              }}>{model.size}</p>
            </div>

            <div style={{
              padding: '32px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: '8px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
            }}>
              <h4 style={{
                fontSize: '16px',
                color: '#909399',
                marginBottom: '12px'
              }}>Exterior Colors</h4>
              <p style={{
                fontSize: '20px',
                fontWeight: 700
              }}>{model.colors.exterior.length} Options</p>
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
          INQUIRE NOW
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
          e.currentTarget.style.backgroundColor = '#252728';
          e.currentTarget.style.color = '#fff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = '#252728';
        }}>
          DOWNLOAD BROCHURE
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
            to approval. All images shown are for illustration purposes only. Range figures 
            are based on CLTC (China Light-Duty Vehicle Test Cycle) testing. Actual range 
            may vary based on driving conditions, temperature, and usage patterns.
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

        * {
          scroll-behavior: smooth;
          box-sizing: border-box;
        }

        img {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }

        @media (max-width: 1024px) {
          section > div > div {
            grid-template-columns: 1fr !important;
          }
          
          section > div > div > div {
            order: initial !important;
          }

          section {
            padding: 80px 32px !important;
          }

          h1 {
            font-size: 48px !important;
          }

          h2 {
            font-size: 32px !important;
          }

          h3 {
            font-size: 28px !important;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 36px !important;
          }
          
          h2 {
            font-size: 28px !important;
          }

          h3 {
            font-size: 24px !important;
          }

          ul {
            flex-direction: column !important;
            gap: 32px !important;
          }

          section {
            padding: 64px 16px !important;
          }

          div[style*="gap: 80px"] {
            gap: 40px !important;
          }
        }
      `}} />
    </div>
  );
};

export default CarModelPage;