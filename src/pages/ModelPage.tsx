import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronRight, Gauge, Users, Zap, Battery, Settings, Award, Palette, Car } from 'lucide-react';
import { models } from './TestDrivePage/data/models';

const CarModelPage: React.FC = () => {
  const location = useLocation();
  const [selectedColor, setSelectedColor] = useState(0);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [scrollProgress, setScrollProgress] = useState(0);
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
        fontFamily: 'Montserrat, Arial, sans-serif',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '20px',
        padding: '20px'
      }}>
        <h1 style={{ fontSize: '48px', fontWeight: 700, color: '#252728', letterSpacing: '-1px' }}>Model Not Found</h1>
        <p style={{ fontSize: '18px', color: '#666' }}>
          The model you're looking for doesn't exist.
        </p>
        <a 
          href="/models" 
          style={{
            padding: '16px 45px',
            backgroundColor: '#252728',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '16px',
            borderRadius: '6px',
            transition: 'all 0.3s ease'
          }}
        >
          View All Models
        </a>
      </div>
    );
  }

  // Transform model data for the component
  const carData = {
    name: model.name,
    tagline: `${model.type === 'electric' ? 'Electric' : 'Hybrid'} ${model.class}`,
    heroImage: model.images[3] || model.images[0],
    mainImage: model.images[0],
    sideImage: model.images[0] || model.images[0],
    interiorImage: model.images[0] || model.images[0],
    specs: [
      { value: model.range.split(' ')[0], unit: 'km', label: 'Range', icon: Zap },
      { value: model.seats, unit: '', label: 'Seating', icon: Users },
      { value: model.size.split('x')[0].trim(), unit: '', label: 'Length', icon: Gauge }
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
      'Cloud Gray': '#9CA3AF',
      'Red': '#DC2626'
    };
    return colorMap[colorName] || '#6B7280';
  }

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    Object.keys(observerRefs.current).forEach(key => {
      const element = observerRefs.current[key];
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [key]: true }));
            }
          },
          { 
            threshold: 0.1,
            rootMargin: '-50px'
          }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrolled / maxScroll;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      observers.forEach(obs => obs.disconnect());
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{
      fontFamily: 'Montserrat, Arial, sans-serif',
      color: '#252728',
      backgroundColor: '#fff',
      minHeight: '100vh'
    }}>
      
      {/* Hero Banner */}
      <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        <img 
          src={carData.heroImage}
          alt={carData.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: `scale(${1 + scrollProgress * 0.1})`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4))',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          textAlign: 'center',
          opacity: 1 - scrollProgress * 2
        }}>
          <h1 style={{
            fontSize: '64px',
            fontWeight: 700,
            marginBottom: '20px',
            letterSpacing: '-1px',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
            animation: 'fadeInUp 0.8s ease-out'
          }}>
            {carData.name}
          </h1>
          <p style={{
            fontSize: '24px',
            marginBottom: '60px',
            fontWeight: 300,
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            animation: 'fadeInUp 0.8s ease-out 0.2s both'
          }}>
            {carData.tagline}
          </p>
          
          <div style={{
            display: 'flex',
            gap: '80px',
            listStyle: 'none',
            padding: 0,
            margin: 0,
            flexWrap: 'wrap',
            justifyContent: 'center',
            animation: 'fadeInUp 0.8s ease-out 0.4s both'
          }}>
            {carData.specs.map((spec, index) => {
              const IconComponent = spec.icon;
              return (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    margin: '0 auto 16px',
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255,255,255,0.3)',
                    transition: 'all 0.3s ease'
                  }}>
                    <IconComponent size={32} color="#fff" />
                  </div>
                  <div style={{
                    fontSize: '32px',
                    fontWeight: 700,
                    marginBottom: '4px'
                  }}>
                    {spec.value}
                    <span style={{ fontSize: '18px', fontWeight: 400, marginLeft: '4px' }}>
                      {spec.unit}
                    </span>
                  </div>
                  <div style={{ fontSize: '14px', opacity: 0.9, fontWeight: 500 }}>
                    {spec.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div 
        ref={el => observerRefs.current['overview'] = el}
        style={{ 
          padding: '120px 20px',
          backgroundColor: '#fff'
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            opacity: isVisible['overview'] ? 1 : 0,
            transform: isVisible['overview'] ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <div style={{
                fontSize: '14px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#3B82F6',
                marginBottom: '16px'
              }}>
                {carData.category}
              </div>
              <h2 style={{ 
                fontSize: '48px', 
                fontWeight: 700, 
                marginBottom: '24px',
                letterSpacing: '-1px'
              }}>
                Designed for Excellence
              </h2>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.8',
                color: '#6B7280',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                The {carData.name} combines cutting-edge {carData.type} technology with sophisticated design, 
                delivering an exceptional driving experience that sets new standards in the {carData.class.toLowerCase()} segment.
              </p>
            </div>
          </div>

          {/* Main Image Gallery */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '30px',
            marginBottom: '60px'
          }}>
            {/* Main Vehicle Image */}
            <div style={{
              gridColumn: 'span 2',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '16px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
              opacity: isVisible['overview'] ? 1 : 0,
              transform: isVisible['overview'] ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out 0.2s'
            }}>
              <img 
                src={carData.mainImage}
                alt={`${carData.name} main view`}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'transform 0.5s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>

            {/* Side View */}
            <div style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '16px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
              opacity: isVisible['overview'] ? 1 : 0,
              transform: isVisible['overview'] ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out 0.3s'
            }}>
              <img 
                src={carData.sideImage}
                alt={`${carData.name} side view`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                color: '#fff',
                fontWeight: 600,
                fontSize: '18px',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}>
                Exterior Design
              </div>
            </div>

            {/* Interior View */}
            <div style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '16px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
              opacity: isVisible['overview'] ? 1 : 0,
              transform: isVisible['overview'] ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out 0.4s'
            }}>
              <img 
                src={carData.interiorImage}
                alt={`${carData.name} interior view`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                color: '#fff',
                fontWeight: 600,
                fontSize: '18px',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}>
                Interior Luxury
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Color Selection Section */}
      <div 
        ref={el => observerRefs.current['colors'] = el}
        style={{ 
          padding: '120px 20px',
          backgroundColor: '#f8f9fa'
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            opacity: isVisible['colors'] ? 1 : 0,
            transform: isVisible['colors'] ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out'
          }}>
            <h2 style={{ 
              fontSize: '44px', 
              fontWeight: 700, 
              marginBottom: '16px', 
              textAlign: 'center',
              letterSpacing: '-0.5px'
            }}>
              Personalize Your Style
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#6B7280',
              textAlign: 'center',
              marginBottom: '60px',
              maxWidth: '700px',
              margin: '0 auto 60px'
            }}>
              Choose from our curated palette of premium exterior and interior finishes
            </p>

            <div style={{
              display: 'flex',
              gap: '80px',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              {/* Color Swatches */}
              <div style={{ flex: '1', minWidth: '300px' }}>
                <div style={{ marginBottom: '40px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '24px'
                  }}>
                    <Palette size={24} color="#252728" />
                    <h3 style={{ fontSize: '24px', fontWeight: 600, margin: 0 }}>
                      Exterior Colors
                    </h3>
                  </div>
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    {carData.colors.map((color, index) => (
                      <div
                        key={color.id}
                        onClick={() => setSelectedColor(index)}
                        style={{
                          width: '72px',
                          height: '72px',
                          borderRadius: '50%',
                          backgroundColor: color.hex,
                          cursor: 'pointer',
                          border: selectedColor === index ? '4px solid #3B82F6' : '3px solid #E5E7EB',
                          boxShadow: selectedColor === index 
                            ? '0 8px 24px rgba(59, 130, 246, 0.3)' 
                            : '0 4px 12px rgba(0,0,0,0.1)',
                          transition: 'all 0.3s ease',
                          transform: selectedColor === index ? 'scale(1.1)' : 'scale(1)',
                          position: 'relative'
                        }}
                        onMouseEnter={e => {
                          if (selectedColor !== index) {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.15)';
                          }
                        }}
                        onMouseLeave={e => {
                          if (selectedColor !== index) {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                          }
                        }}
                      >
                        {selectedColor === index && (
                          <div style={{
                            position: 'absolute',
                            bottom: '-30px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            fontSize: '13px',
                            fontWeight: 600,
                            whiteSpace: 'nowrap',
                            color: '#252728'
                          }}>
                            {color.name}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div style={{
                    marginTop: '50px',
                    padding: '20px',
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    border: '1px solid #E5E7EB'
                  }}>
                    <div style={{ fontWeight: 600, marginBottom: '8px', fontSize: '16px' }}>
                      Selected: {carData.colors[selectedColor].name}
                    </div>
                    <div style={{ fontSize: '14px', color: '#6B7280' }}>
                      Premium {carData.colors[selectedColor].name.toLowerCase()} finish with UV protection
                    </div>
                  </div>
                </div>

                {/* Interior Colors */}
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '24px'
                  }}>
                    <Car size={24} color="#252728" />
                    <h3 style={{ fontSize: '24px', fontWeight: 600, margin: 0 }}>
                      Interior Options
                    </h3>
                  </div>
                  <div style={{
                    padding: '24px',
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    border: '1px solid #E5E7EB'
                  }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {carData.interiorColors.map((color, idx) => (
                        <div key={idx} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px'
                        }}>
                          <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            backgroundColor: getColorHex(color),
                            border: '2px solid #E5E7EB',
                            flexShrink: 0
                          }} />
                          <div>
                            <div style={{ fontWeight: 600, fontSize: '15px' }}>{color}</div>
                            <div style={{ fontSize: '13px', color: '#6B7280' }}>Premium upholstery</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Large Preview Image */}
              <div style={{
                flex: '1.5',
                minWidth: '400px',
                position: 'relative'
              }}>
                <div style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 30px 80px rgba(0,0,0,0.15)',
                  backgroundColor: '#fff',
                  padding: '40px'
                }}>
                  <img 
                    src={carData.mainImage}
                    alt={`${carData.name} in ${carData.colors[selectedColor].name}`}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      transition: 'all 0.5s ease'
                    }}
                  />
                  <div style={{
                    marginTop: '30px',
                    textAlign: 'center',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#252728'
                  }}>
                    {carData.name}
                  </div>
                  <div style={{
                    textAlign: 'center',
                    fontSize: '14px',
                    color: '#6B7280',
                    marginTop: '8px'
                  }}>
                    Shown in {carData.colors[selectedColor].name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div 
        ref={el => observerRefs.current['specs'] = el}
        style={{ 
          padding: '120px 20px',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
          color: '#fff'
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            opacity: isVisible['specs'] ? 1 : 0,
            transform: isVisible['specs'] ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out'
          }}>
            <h2 style={{ 
              fontSize: '44px', 
              fontWeight: 700, 
              marginBottom: '60px', 
              textAlign: 'center',
              letterSpacing: '-0.5px'
            }}>
              Technical Specifications
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px'
            }}>
              {/* Range */}
              <div style={{
                padding: '32px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.3s ease',
                opacity: isVisible['specs'] ? 1 : 0,
                animation: isVisible['specs'] ? 'fadeInUp 0.6s ease-out 0.1s both' : 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{ 
                  fontSize: '13px', 
                  opacity: 0.8, 
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: 600
                }}>
                  {model.type === 'electric' ? 'Electric Range' : 'Combined Range'}
                </div>
                <div style={{ 
                  fontSize: '36px', 
                  fontWeight: 700,
                  marginBottom: '8px'
                }}>
                  {model.range}
                </div>
                <div style={{ fontSize: '14px', opacity: 0.7 }}>
                  CLTC Standard
                </div>
              </div>

              {/* Seating */}
              <div style={{
                padding: '32px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.3s ease',
                opacity: isVisible['specs'] ? 1 : 0,
                animation: isVisible['specs'] ? 'fadeInUp 0.6s ease-out 0.2s both' : 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{ 
                  fontSize: '13px', 
                  opacity: 0.8, 
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: 600
                }}>
                  Seating Capacity
                </div>
                <div style={{ 
                  fontSize: '36px', 
                  fontWeight: 700,
                  marginBottom: '8px'
                }}>
                  {model.seats}
                </div>
                <div style={{ fontSize: '14px', opacity: 0.7 }}>
                  {model.seats === '2+3+2' ? '7 Passengers' : '5 Passengers'}
                </div>
              </div>

              {/* Dimensions */}
              <div style={{
                padding: '32px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.3s ease',
                opacity: isVisible['specs'] ? 1 : 0,
                animation: isVisible['specs'] ? 'fadeInUp 0.6s ease-out 0.3s both' : 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{ 
                  fontSize: '13px', 
                  opacity: 0.8, 
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: 600
                }}>
                  Dimensions
                </div>
                <div style={{ 
                  fontSize: '36px', 
                  fontWeight: 700,
                  marginBottom: '8px'
                }}>
                  {model.size}
                </div>
                <div style={{ fontSize: '14px', opacity: 0.7 }}>
                  Length × Width × Height
                </div>
              </div>

              {/* Exterior Colors */}
              <div style={{
                padding: '32px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.3s ease',
                opacity: isVisible['specs'] ? 1 : 0,
                animation: isVisible['specs'] ? 'fadeInUp 0.6s ease-out 0.4s both' : 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{ 
                  fontSize: '13px', 
                  opacity: 0.8, 
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: 600
                }}>
                  Exterior Colors
                </div>
                <div style={{ 
                  fontSize: '36px', 
                  fontWeight: 700,
                  marginBottom: '8px'
                }}>
                  {model.colors.exterior.length}
                </div>
                <div style={{ fontSize: '14px', opacity: 0.7 }}>
                  Premium Finishes Available
                </div>
              </div>

              {/* Powertrain Type */}
              <div style={{
                padding: '32px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.3s ease',
                opacity: isVisible['specs'] ? 1 : 0,
                animation: isVisible['specs'] ? 'fadeInUp 0.6s ease-out 0.5s both' : 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{ 
                  fontSize: '13px', 
                  opacity: 0.8, 
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: 600
                }}>
                  Powertrain
                </div>
                <div style={{ 
                  fontSize: '36px', 
                  fontWeight: 700,
                  marginBottom: '8px',
                  textTransform: 'capitalize'
                }}>
                  {model.type}
                </div>
                <div style={{ fontSize: '14px', opacity: 0.7 }}>
                  {model.type === 'electric' ? 'Zero Emissions' : 'Plug-in Hybrid'}
                </div>
              </div>

              {/* Category */}
              <div style={{
                padding: '32px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.3s ease',
                opacity: isVisible['specs'] ? 1 : 0,
                animation: isVisible['specs'] ? 'fadeInUp 0.6s ease-out 0.6s both' : 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{ 
                  fontSize: '13px', 
                  opacity: 0.8, 
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: 600
                }}>
                  Vehicle Class
                </div>
                <div style={{ 
                  fontSize: '28px', 
                  fontWeight: 700,
                  marginBottom: '8px'
                }}>
                  {model.class}
                </div>
                <div style={{ fontSize: '14px', opacity: 0.7 }}>
                  {model.category}
                </div>
              </div>
            </div>

            {/* Availability Note */}
            {model.notes && (
              <div style={{
                marginTop: '60px',
                padding: '24px 32px',
                backgroundColor: 'rgba(255,255,255,0.15)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                textAlign: 'center',
                opacity: isVisible['specs'] ? 1 : 0,
                animation: isVisible['specs'] ? 'fadeInUp 0.6s ease-out 0.7s both' : 'none'
              }}>
                <div style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Availability
                </div>
                <div style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  {model.notes}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ padding: '120px 20px', background: 'linear-gradient(135deg, #252728 0%, #3d3f42 100%)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', color: '#fff' }}>
          <h3 style={{ 
            fontSize: '44px', 
            fontWeight: 700, 
            marginBottom: '24px', 
            letterSpacing: '-0.5px' 
          }}>
            Experience {carData.name}
          </h3>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            marginBottom: '45px',
            opacity: 0.95,
            maxWidth: '700px',
            margin: '0 auto 45px'
          }}>
            Schedule a test drive today and discover why this model is redefining expectations in its class.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="/test-drive"
              style={{
                display: 'inline-block',
                backgroundColor: '#fff',
                color: '#252728',
                padding: '18px 50px',
                fontSize: '16px',
                fontWeight: 600,
                textDecoration: 'none',
                borderRadius: '6px',
                transition: 'all 0.3s ease',
                fontFamily: 'Montserrat, Arial, sans-serif'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f3f4f6';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Book Test Drive
            </a>
            <a 
              href="/contact"
              style={{
                display: 'inline-block',
                backgroundColor: 'transparent',
                color: '#fff',
                padding: '18px 50px',
                fontSize: '16px',
                fontWeight: 600,
                textDecoration: 'none',
                border: '2px solid #fff',
                borderRadius: '6px',
                transition: 'all 0.3s ease',
                fontFamily: 'Montserrat, Arial, sans-serif'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Inquire Now
            </a>
            <a 
              href="#"
              style={{
                display: 'inline-block',
                backgroundColor: 'transparent',
                color: '#fff',
                padding: '18px 50px',
                fontSize: '16px',
                fontWeight: 600,
                textDecoration: 'none',
                border: '2px solid #fff',
                borderRadius: '6px',
                transition: 'all 0.3s ease',
                fontFamily: 'Montserrat, Arial, sans-serif'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Download Brochure
            </a>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '60px 20px'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <p style={{
            fontSize: '13px',
            color: '#666',
            lineHeight: '1.8',
            textAlign: 'center'
          }}>
            *The vehicle specifications detailed on this page are target specifications under controlled conditions; 
            final specifications are pending and are subject to approval. All images shown are for illustration purposes only. 
            Range figures are based on CLTC (China Light-Duty Vehicle Test Cycle) testing. Actual range may vary based on 
            driving conditions, temperature, and usage patterns. Colors shown may vary from actual vehicle colors. 
            Please contact us for the most current information on availability and specifications.
          </p>
        </div>
      </div>

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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        * {
          scroll-behavior: smooth;
          box-sizing: border-box;
        }

        @media (max-width: 991px) {
          div[style*="display: flex"] {
            flex-direction: column !important;
          }
          
          div[style*="gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))'"] {
            grid-template-columns: 1fr !important;
          }

          div[style*="gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'"] {
            grid-template-columns: 1fr !important;
          }

          div[style*="gridColumn: 'span 2'"] {
            grid-column: span 1 !important;
          }

          h1 {
            font-size: 36px !important;
          }
          h2 {
            font-size: 32px !important;
          }
          h3 {
            font-size: 28px !important;
          }
          div[style*="padding: 120px"] {
            padding: 60px 20px !important;
          }
          div[style*="gap: 80px"] {
            gap: 40px !important;
          }
          div[style*="fontSize: '64px'"] {
            font-size: 36px !important;
          }
          div[style*="fontSize: '48px'"] {
            font-size: 32px !important;
          }
          div[style*="fontSize: '44px'"] {
            font-size: 28px !important;
          }
          div[style*="width: '72px'"] {
            width: 56px !important;
            height: 56px !important;
          }
          div[style*="width: '64px'"] {
            width: 48px !important;
            height: 48px !important;
          }
        }

        @media (max-width: 768px) {
          div[style*="minWidth: '400px'"] {
            min-width: 100% !important;
          }
          div[style*="minWidth: '300px'"] {
            min-width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CarModelPage;