import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronRight, Gauge, Users, Zap, Battery, Settings, Award, Palette, Car, Play, Pause, X } from 'lucide-react';
import { models } from './TestDrivePage/data/models';

const CarModelPage: React.FC = () => {
  const location = useLocation();
  const [selectedColor, setSelectedColor] = useState(0);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const observerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const modelName = urlToModelMap[location.pathname];
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

  const carData = {
    name: model.name,
    tagline: `${model.type === 'electric' ? 'Electric' : 'Hybrid'} ${model.class}`,
    heroImage: model.images[3] || model.images[0],
    mainImage: model.images[0],
    sideImage: model.images[0] || model.images[0],
    interiorImage: model.images[0] || model.images[0],
    video: model.videos[0],
    allImages: model.images, // All images for gallery
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

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

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
      <style>{`
        /* Model Page Responsive Styles */
        @media (max-width: 1024px) {
          .model-page-hero h1 {
            font-size: 52px !important;
            letter-spacing: -0.5px !important;
          }

          .model-page-hero p {
            font-size: 20px !important;
            margin-bottom: 50px !important;
          }

          .spec-item {
            font-size: 24px !important;
          }

          .spec-label {
            font-size: 13px !important;
          }
        }

        @media (max-width: 768px) {
          .model-page-hero {
            height: 80vh !important;
          }

          .model-page-hero h1 {
            font-size: 38px !important;
            margin-bottom: 16px !important;
          }

          .model-page-hero p {
            font-size: 18px !important;
            margin-bottom: 40px !important;
          }

          .hero-specs-container {
            gap: 40px !important;
            padding: 0 20px !important;
          }

          .spec-icon {
            width: 52px !important;
            height: 52px !important;
            margin-bottom: 12px !important;
          }

          .spec-item {
            font-size: 22px !important;
          }

          .spec-label {
            font-size: 12px !important;
          }

          .section-padding {
            padding: 60px 5% !important;
          }

          .section-title {
            font-size: 32px !important;
            margin-bottom: 30px !important;
          }

          .section-subtitle {
            font-size: 16px !important;
          }

          .color-selector {
            gap: 10px !important;
          }

          .color-swatch {
            width: 38px !important;
            height: 38px !important;
          }

          .gallery-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }

          .cta-button {
            padding: 14px 35px !important;
            font-size: 15px !important;
          }
        }

        @media (max-width: 599px) {
          .model-page-hero {
            height: 70vh !important;
          }

          .model-page-hero h1 {
            font-size: 32px !important;
            margin-bottom: 14px !important;
            padding: 0 15px !important;
          }

          .model-page-hero p {
            font-size: 16px !important;
            margin-bottom: 35px !important;
            padding: 0 15px !important;
          }

          .hero-specs-container {
            gap: 30px !important;
            flex-direction: column !important;
            padding: 0 15px !important;
          }

          .spec-icon {
            width: 48px !important;
            height: 48px !important;
            margin-bottom: 10px !important;
          }

          .spec-item {
            font-size: 20px !important;
            margin-bottom: 6px !important;
          }

          .spec-label {
            font-size: 11px !important;
          }

          .section-padding {
            padding: 50px 4% !important;
          }

          .section-title {
            font-size: 28px !important;
            margin-bottom: 25px !important;
          }

          .section-subtitle {
            font-size: 15px !important;
            line-height: 1.6 !important;
          }

          .color-selector {
            gap: 8px !important;
            justify-content: center !important;
          }

          .color-swatch {
            width: 34px !important;
            height: 34px !important;
          }

          .gallery-grid {
            gap: 15px !important;
          }

          .cta-button {
            padding: 12px 30px !important;
            font-size: 14px !important;
            width: 100% !important;
            max-width: 300px !important;
          }

          .features-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }

        @media (max-width: 479px) {
          .model-page-hero {
            height: 60vh !important;
          }

          .model-page-hero h1 {
            font-size: 26px !important;
            margin-bottom: 12px !important;
            letter-spacing: 0px !important;
          }

          .model-page-hero p {
            font-size: 14px !important;
            margin-bottom: 30px !important;
          }

          .hero-specs-container {
            gap: 25px !important;
          }

          .spec-icon {
            width: 44px !important;
            height: 44px !important;
            margin-bottom: 8px !important;
          }

          .spec-item {
            font-size: 18px !important;
            margin-bottom: 5px !important;
          }

          .spec-label {
            font-size: 10px !important;
          }

          .section-padding {
            padding: 40px 4% !important;
          }

          .section-title {
            font-size: 24px !important;
            margin-bottom: 20px !important;
            letter-spacing: -0.5px !important;
          }

          .section-subtitle {
            font-size: 14px !important;
            line-height: 1.5 !important;
          }

          .color-selector {
            gap: 6px !important;
          }

          .color-swatch {
            width: 30px !important;
            height: 30px !important;
          }

          .color-name {
            font-size: 13px !important;
          }

          .gallery-grid {
            gap: 12px !important;
          }

          .cta-button {
            padding: 11px 25px !important;
            font-size: 13px !important;
            letter-spacing: 0.5px !important;
          }

          .features-grid {
            gap: 18px !important;
          }

          .feature-card {
            padding: 20px !important;
          }

          .feature-title {
            font-size: 16px !important;
            margin-bottom: 10px !important;
          }

          .feature-description {
            font-size: 13px !important;
            line-height: 1.5 !important;
          }
        }

        @media (max-width: 374px) {
          .model-page-hero h1 {
            font-size: 22px !important;
          }

          .model-page-hero p {
            font-size: 13px !important;
          }

          .spec-item {
            font-size: 16px !important;
          }

          .spec-label {
            font-size: 9px !important;
          }

          .section-title {
            font-size: 21px !important;
          }

          .section-subtitle {
            font-size: 13px !important;
          }

          .color-swatch {
            width: 28px !important;
            height: 28px !important;
          }

          .cta-button {
            padding: 10px 22px !important;
            font-size: 12px !important;
          }
        }

        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          .cta-button,
          .color-swatch {
            min-height: 44px !important;
            min-width: 44px !important;
          }
        }

        /* Animations */
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
      `}</style>

      {/* Hero Banner */}
      <div className="model-page-hero" style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
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
          
          <div className="hero-specs-container" style={{
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
                  <div className="spec-icon" style={{
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
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
                  }}
                  >
                    <IconComponent size={28} />
                  </div>
                  <div className="spec-item" style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>
                    {spec.value}{spec.unit}
                  </div>
                  <div className="spec-label" style={{ fontSize: '14px', opacity: 0.9 }}>
                    {spec.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div 
        ref={el => observerRefs.current['video'] = el}
        style={{
          padding: '100px 20px',
          maxWidth: '1400px',
          margin: '0 auto'
        }}
      >
        <div style={{
          textAlign: 'center',
          marginBottom: '50px',
          opacity: isVisible['video'] ? 1 : 0,
          transform: isVisible['video'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out'
        }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 700,
            marginBottom: '16px',
            color: '#252728',
            letterSpacing: '-1px'
          }}>
            See It In Action
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Experience the {carData.name} like never before
          </p>
        </div>

        <div style={{
          position: 'relative',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
          opacity: isVisible['video'] ? 1 : 0,
          transform: isVisible['video'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out 0.2s',
          background: '#000'
        }}>
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: 'auto',
              display: 'block'
            }}
            onPlay={() => setIsVideoPlaying(true)}
            onPause={() => setIsVideoPlaying(false)}
          >
            <source src={carData.video} type="video/mp4" />
          </video>
          
          <button
            onClick={toggleVideo}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.95)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
              opacity: isVideoPlaying ? 0 : 1,
              pointerEvents: isVideoPlaying ? 'none' : 'auto'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)';
            }}
          >
            <Play size={32} color="#252728" strokeWidth={2} style={{ marginLeft: '4px' }} />
          </button>
        </div>
      </div>

      {/* Featured Images Grid */}
      <div 
        ref={el => observerRefs.current['featured'] = el}
        style={{
          padding: '100px 20px',
          backgroundColor: '#f8f9fa'
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '50px',
            opacity: isVisible['featured'] ? 1 : 0,
            transform: isVisible['featured'] ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out'
          }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 700,
              marginBottom: '16px',
              color: '#252728',
              letterSpacing: '-1px'
            }}>
              Every Angle Matters
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#666'
            }}>
              Discover the design excellence from every perspective
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '30px'
          }}>
            {[
              { img: carData.mainImage, label: 'Exterior Design' },
              { img: carData.sideImage, label: 'Side Profile' },
              { img: carData.interiorImage, label: 'Interior Luxury' }
            ].map((item, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxImage(item.img)}
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  aspectRatio: '16/10',
                  transition: 'all 0.4s ease',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  opacity: isVisible['featured'] ? 1 : 0,
                  transform: isVisible['featured'] ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${0.2 + idx * 0.1}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                }}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLImageElement).style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLImageElement).style.transform = 'scale(1)';
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '24px',
                  background: 'linear-gradient(to top, rgba(37,39,40,0.9), transparent)',
                  color: '#fff'
                }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    margin: 0
                  }}>
                    {item.label}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Color Selector */}
      <div 
        ref={el => observerRefs.current['colors'] = el}
        style={{
          padding: '100px 20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <div style={{
          background: '#fff',
          borderRadius: '16px',
          padding: '60px 40px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
          opacity: isVisible['colors'] ? 1 : 0,
          transform: isVisible['colors'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out'
        }}>
          <h3 style={{
            fontSize: '36px',
            fontWeight: 700,
            marginBottom: '40px',
            textAlign: 'center',
            color: '#252728'
          }}>
            Choose Your Color
          </h3>

          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '50px'
          }}>
            {carData.colors.map((color, idx) => (
              <div
                key={color.id}
                onClick={() => setSelectedColor(idx)}
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: color.hex,
                  cursor: 'pointer',
                  border: selectedColor === idx 
                    ? '3px solid #252728' 
                    : '3px solid #e0e0e0',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  boxShadow: selectedColor === idx
                    ? '0 8px 20px rgba(37,39,40,0.3)'
                    : '0 4px 12px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.15) translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(37,39,40,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) translateY(0)';
                  e.currentTarget.style.boxShadow = selectedColor === idx
                    ? '0 8px 20px rgba(37,39,40,0.3)'
                    : '0 4px 12px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{
                  position: 'absolute',
                  bottom: '-32px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: '12px',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  color: selectedColor === idx ? '#252728' : '#999',
                  transition: 'color 0.3s ease'
                }}>
                  {color.name}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            textAlign: 'center',
            marginTop: '50px'
          }}>
            <div style={{
              fontWeight: 600,
              color: '#252728',
              marginBottom: '16px',
              fontSize: '16px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Interior Options
            </div>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {carData.interiorColors.map((color, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '10px 24px',
                    background: '#f8f9fa',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#252728',
                    border: '1px solid #e0e0e0'
                  }}
                >
                  {color}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Specifications Grid */}
      <div 
        ref={el => observerRefs.current['specs'] = el}
        style={{
          padding: '100px 20px',
          backgroundColor: '#f8f9fa'
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '50px',
            opacity: isVisible['specs'] ? 1 : 0,
            transform: isVisible['specs'] ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out'
          }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 700,
              marginBottom: '16px',
              color: '#252728',
              letterSpacing: '-1px'
            }}>
              Technical Specifications
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {[
              { icon: Settings, label: 'Class', value: carData.class },
              { icon: Gauge, label: 'Dimensions', value: carData.size },
              { icon: Battery, label: 'Type', value: carData.type.toUpperCase() },
              { icon: Zap, label: 'Range', value: model.range },
              { icon: Users, label: 'Capacity', value: `${carData.specs[1].value} Seats` }
            ].map((spec, idx) => {
              const IconComponent = spec.icon;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#fff',
                    borderRadius: '12px',
                    padding: '32px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                    opacity: isVisible['specs'] ? 1 : 0,
                    transform: isVisible['specs'] ? 'translateY(0)' : 'translateY(30px)',
                    transitionDelay: `${0.1 + idx * 0.05}s`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
                  }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: '#f8f9fa',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <IconComponent size={24} color="#252728" strokeWidth={1.5} />
                  </div>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#999',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    {spec.label}
                  </div>
                  <div style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#252728',
                    lineHeight: '1.4'
                  }}>
                    {spec.value}
                  </div>
                </div>
              );
            })}
          </div>

          {model.notes && (
            <div style={{
              marginTop: '40px',
              padding: '24px',
              background: '#fff3cd',
              borderRadius: '12px',
              borderLeft: '4px solid #ffc107',
              fontSize: '15px',
              color: '#856404',
              opacity: isVisible['specs'] ? 1 : 0,
              transform: isVisible['specs'] ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out 0.5s'
            }}>
              <div style={{
                fontSize: '13px',
                fontWeight: 600,
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Availability
              </div>
              <div style={{ fontSize: '15px', lineHeight: '1.6' }}>
                {model.notes}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Gallery Section */}
      <div 
        ref={el => observerRefs.current['gallery'] = el}
        style={{
          padding: '100px 20px',
          maxWidth: '1600px',
          margin: '0 auto'
        }}
      >
        <div style={{
          textAlign: 'center',
          marginBottom: '50px',
          opacity: isVisible['gallery'] ? 1 : 0,
          transform: isVisible['gallery'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out'
        }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 700,
            marginBottom: '16px',
            color: '#252728',
            letterSpacing: '-1px'
          }}>
            Photo Gallery
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#666'
          }}>
            Browse through our complete collection
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {carData.allImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxImage(img)}
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                aspectRatio: '4/3',
                transition: 'all 0.4s ease',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                opacity: isVisible['gallery'] ? 1 : 0,
                transform: isVisible['gallery'] ? 'scale(1)' : 'scale(0.95)',
                transitionDelay: `${idx * 0.05}s`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
              }}
            >
              <img
                src={img}
                alt={`${carData.name} - Image ${idx + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '50px',
                height: '50px',
                background: 'rgba(255,255,255,0.9)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                pointerEvents: 'none'
              }}
              className="gallery-overlay"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#252728" strokeWidth="2">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.95)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          <button
            onClick={() => setLightboxImage(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '48px',
              height: '48px',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
            }}
          >
            <X size={24} color="#fff" />
          </button>
          <img
            src={lightboxImage}
            alt="Full size"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              borderRadius: '8px',
              animation: 'scaleIn 0.3s ease-out'
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

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
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(255,255,255,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Book Test Drive
            </a>
            <a
              href="/#contact"
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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        * {
          scroll-behavior: smooth;
          box-sizing: border-box;
        }

        div:hover .gallery-overlay {
          opacity: 1 !important;
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

          div[style*="gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'"] {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)) !important;
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
          div[style*="padding: 100px"] {
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
          div[style*="gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CarModelPage;