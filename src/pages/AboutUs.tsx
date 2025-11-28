import React, { useState, useRef, useEffect } from 'react';

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

// Custom hook for responsive breakpoints
const useResponsive = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenSize({
        width,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};

// Hero Video Banner Component with Controls
const HeroBanner: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isMobile, isTablet } = useResponsive();
  
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleLoadedMetadata = () => setDuration(video.duration);
    const handleEnded = () => setIsPlaying(false);

    // Fullscreen change listeners
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement || !!(document as any).webkitFullscreenElement);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('ended', handleEnded);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleEnded);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newVolume = parseFloat(e.target.value);
    video.volume = newVolume;
    setVolume(newVolume);
    
    if (newVolume > 0 && isMuted) {
      video.muted = false;
      setIsMuted(false);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const progressBar = e.currentTarget;
    const clickX = e.clientX - progressBar.getBoundingClientRect().left;
    const width = progressBar.offsetWidth;
    const percentage = clickX / width;
    video.currentTime = percentage * duration;
  };

  const toggleFullscreen = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (!document.fullscreenElement) {
        // Try standard fullscreen API first
        if (video.requestFullscreen) {
          await video.requestFullscreen();
        } 
        // Safari iOS fallback
        else if ((video as any).webkitEnterFullscreen) {
          (video as any).webkitEnterFullscreen();
        }
        // Safari desktop fallback
        else if ((video as any).webkitRequestFullscreen) {
          await (video as any).webkitRequestFullscreen();
        }
        setIsFullscreen(true);
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        }
        setIsFullscreen(false);
      }
    } catch (err) {
      console.error('Fullscreen error:', err);
      // If standard fullscreen fails on mobile, try video-specific fullscreen
      if ((video as any).webkitEnterFullscreen) {
        try {
          (video as any).webkitEnterFullscreen();
          setIsFullscreen(true);
        } catch (e) {
          console.error('WebKit fullscreen error:', e);
        }
      }
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    const timeout = isMobile || isTablet ? 5000 : 3000; // Longer timeout on mobile/tablet
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, timeout);
  };

  const handleMouseLeave = () => {
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    setShowControls(false);
  };

  return (
    <section 
      style={{
        position: 'relative',
        height: isMobile ? '60vh' : isTablet ? '80vh' : '140vh',
        width: '100%',
        overflow: 'hidden',
        cursor: showControls ? 'default' : 'none'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={() => setShowControls(true)}
    >
      <video
        ref={videoRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          cursor: 'pointer'
        }}
        autoPlay
        loop
        muted
        playsInline
        onClick={(e) => {
          e.stopPropagation();
          togglePlay();
        }}
        onTouchEnd={(e) => {
          e.stopPropagation();
          e.preventDefault();
          togglePlay();
        }}
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

      {/* Video Controls */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
          padding: isMobile ? '3rem 1rem 1rem' : '4rem 2rem 1.5rem',
          opacity: showControls ? 1 : 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: showControls ? 'auto' : 'none'
        }}
        onMouseEnter={() => setShowControls(true)}
        onMouseMove={() => setShowControls(true)}
        onTouchStart={() => setShowControls(true)}
      >
        {/* Progress Bar */}
        <div 
          style={{
            width: '100%',
            height: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            borderRadius: '2px',
            cursor: 'pointer',
            marginBottom: '1rem',
            position: 'relative'
          }}
          onClick={handleProgressClick}
        >
          <div style={{
            width: `${(currentTime / duration) * 100}%`,
            height: '100%',
            backgroundColor: '#fff',
            borderRadius: '2px',
            transition: 'width 0.1s linear'
          }}></div>
        </div>

        {/* Controls Row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: isMobile ? '0.5rem' : '1rem'
        }}>
          {/* Left Controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '0.75rem' : '1rem'
          }}>
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                fontSize: isMobile ? '1.25rem' : '1.5rem'
              }}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? '⏸' : '▶'}
            </button>

            {/* Volume Controls */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <button
                onClick={toggleMute}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: isMobile ? '1.25rem' : '1.5rem'
                }}
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted || volume === 0 ? '🔇' : volume < 0.5 ? '🔉' : '🔊'}
              </button>

              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                style={{
                  width: isMobile ? '60px' : '80px',
                  cursor: 'pointer'
                }}
                aria-label="Volume"
              />
            </div>

            {/* Time Display */}
            <span style={{
              color: 'white',
              fontSize: isMobile ? '0.875rem' : '0.95rem',
              fontFamily: 'monospace',
              display: isMobile ? 'none' : 'block'
            }}>
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          {/* Right Controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                fontSize: isMobile ? '1.25rem' : '1.5rem'
              }}
              aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            >
              {isFullscreen ? '⤓' : '⛶'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection: React.FC = () => {
  const { isMobile, isTablet } = useResponsive();

  return (
<section style={{
      position: 'relative',
      width: '100%',
      height: isMobile ? 'auto' : isTablet ? '100vh' : '140vh',
      minHeight: isMobile ? '70vh' : 'auto',
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
          alt="About EM"
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
        maxWidth: isMobile ? '100%' : isTablet ? '900px' : '1600px',
        margin: '0 auto',
        padding: isMobile ? '3rem 1.5rem 2rem' : isTablet ? '4rem 2.5rem 3rem' : '6rem 4rem 4rem',
        textAlign: 'center'
      }}>
        <div style={{ 
          maxWidth: isMobile ? '100%' : isTablet ? '45rem' : '80rem',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: isMobile ? '2rem' : isTablet ? '2.75rem' : '3.5rem',
            fontWeight: '700',
            color: '#000',
            marginBottom: isMobile ? '1.25rem' : '2rem',
            lineHeight: '1.2'
          }}>
            About EM
          </h2>
          <p style={{
            fontSize: isMobile ? '0.95rem' : isTablet ? '1rem' : '1.125rem',
            color: '#000',
            lineHeight: isMobile ? '1.6' : '1.8',
            fontWeight: '300',
            marginBottom: isMobile ? '1.5rem' : '2rem'
          }}>
            We put residents and visitors to the Turks & Caicos Islands at the forefront of the automotive and clean energy revolutions, by introducing residents to the planet's most advanced, its safest, and its most environmentally responsible vehicles, and by supporting multiple pathways to sustainable mobility and clean energy consumption. We are passionate about helping TCI's residents, its businesses, Government, and visitors solve their transportation needs, in as safe and affordable a manner as possible, with the least environmental impact, and with the most resilient energy consumption options. That is the thread that ties all our products and services together. We court the world's most innovative brands, and we seek to offer and support their most suitable products for the Islands.
          </p>
          <p style={{
            fontSize: isMobile ? '1.05rem' : isTablet ? '1.15rem' : '1.25rem',
            color: '#000',
            lineHeight: isMobile ? '1.6' : '1.8',
            fontWeight: '500',
            marginBottom: isMobile ? '1rem' : '1.5rem'
          }}>
            We provide mobility and clean energy solutions, intended to help residents live their best lives.
          </p>
          <p style={{
            fontSize: isMobile ? '0.95rem' : isTablet ? '1rem' : '1.125rem',
            color: '#000',
            lineHeight: isMobile ? '1.6' : '1.8',
            fontWeight: '300',
            fontStyle: 'italic'
          }}>
            Hastening the transition from fossil fuel to clean energy vehicles.
          </p>
        </div>
      </div>
    </section>
  );
};

// Diversification Section Component
const DiversificationSection: React.FC = () => {
  const { isMobile, isTablet } = useResponsive();
  
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
      padding: isMobile ? '4rem 0' : isTablet ? '6rem 0' : '8rem 0'
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
        maxWidth: isMobile ? '100%' : '1200px',
        margin: '0 auto',
        padding: isMobile ? '0 1.25rem' : '0 2rem'
      }}>
        <h2 style={{
          fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: isMobile ? '2.5rem' : isTablet ? '3rem' : '4rem',
          color: 'white'
        }}>
          Diversification
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile 
            ? '1fr' 
            : isTablet 
              ? 'repeat(2, 1fr)' 
              : 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: isMobile ? '1.5rem' : '2.5rem'
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
              <div style={{ 
                padding: isMobile ? '1rem 0.75rem 0.75rem' : '1.5rem 1rem 1rem', 
                textAlign: 'center' 
              }}>
                <div style={{ 
                  width: isMobile ? '50px' : '60px', 
                  height: isMobile ? '50px' : '60px', 
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
                <h3 style={{ 
                  fontSize: isMobile ? '1.1rem' : '1.25rem', 
                  fontWeight: 600, 
                  color: 'white', 
                  marginBottom: '1rem' 
                }}>
                  {business.title}
                </h3>
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
const ImageTextSection: React.FC<{
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  darkText?: boolean;
}> = ({ title, description, image, reverse, darkText }) => {
  const { isMobile, isTablet } = useResponsive();

  return (
    <section style={{
      position: 'relative',
      width: '100%',
      minHeight: isMobile ? 'auto' : isTablet ? '100vh' : '140vh',
      height: isMobile ? 'auto' : isTablet ? '100vh' : '140vh',
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
        maxWidth: isMobile ? '100%' : isTablet ? '900px' : '1600px',
        margin: '0 auto',
        padding: isMobile ? '3rem 1.5rem 2rem' : isTablet ? '4rem 2.5rem 3rem' : '6rem 4rem 4rem',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        minHeight: isMobile ? '70vh' : 'auto'
      }}>
        <div style={{
          maxWidth: isMobile ? '100%' : isTablet ? '40rem' : '56rem',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: isMobile ? '2rem' : isTablet ? '2.75rem' : '3.5rem',
            fontWeight: '700',
            marginBottom: isMobile ? '1.25rem' : '2rem',
            color: darkText ? '#252728' : 'white',
            lineHeight: '1.2'
          }}>
            {title}
          </h2>
          <p style={{
            fontSize: isMobile ? '0.95rem' : isTablet ? '1rem' : '1.125rem',
            lineHeight: isMobile ? '1.6' : '1.8',
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
  const { isMobile, isTablet } = useResponsive();

  return (
    <section style={{
      position: 'relative',
      width: '100%',
      minHeight: isMobile ? 'auto' : isTablet ? '100vh' : '140vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      padding: isMobile ? '3rem 0' : isTablet ? '4rem 0' : '0'
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
        maxWidth: isMobile ? '100%' : isTablet ? '900px' : '1600px',
        margin: '0 auto',
        padding: isMobile ? '0 1.5rem' : '0 2rem',
        width: '100%'
      }}>
        <div style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
          <h2 style={{
            fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: isMobile ? '0.75rem' : '1rem'
          }}>
            {title}
          </h2>
          {subtitle && (
            <p style={{
              fontSize: isMobile ? '0.95rem' : isTablet ? '1rem' : '1.125rem',
              color: 'white',
              opacity: 0.9
            }}>{subtitle}</p>
          )}
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile 
            ? '1fr' 
            : isTablet 
              ? 'repeat(2, 1fr)' 
              : 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: isMobile ? '1.25rem' : '2rem'
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '8px',
              padding: isMobile ? '1.25rem' : '1.5rem'
            }}>
              <h3 style={{
                fontSize: isMobile ? '1.25rem' : isTablet ? '1.35rem' : '1.5rem',
                fontWeight: 600,
                color: 'white',
                marginBottom: '0.75rem'
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: isMobile ? '0.9rem' : '1rem',
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
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <main>
        <HeroBanner />
        <AboutSection />
        <DiversificationSection />

        <ImageTextSection
          title="Auto"
          description="The BYD vehicles that we sell incorporate that company’s cutting edge and ultra safe Blade Battery and Dual-Mode hybrid power technologies, which rests on the accumulated breakthroughs and innovations of the more than one hundred thousand engineers that it employs, more than any other automotive company."
          image="/About/Auto.jpg"
        />
        <FeaturesSection
          title="BYD’s Blade Battery Technology"
          features={bladeFeatures}
          image="/About/Blade.jpg"
        />
        <FeaturesSection
          title="BYD’s e-Platform 3.0 Technology"
          subtitle="Give full play to the advantages of intelligence, efficiency, safety, and aesthetics that electrification brings."
          features={ePlatformFeatures}
          image="/About/E-Platform.jpg"
        />
        <ImageTextSection
          title="Semiconductor Chip"
          description="Semiconductor chips are the ‘CPUs’ and core technology of advanced electric and hybrid vehicles."
          image="/About/SemiCondutorChip.jpg"
        />
        <ImageTextSection
          title="Intelligent Cockpit Systems"
          description="Smartphone functions are integrated into each vehicle’s operating and communications platform. "
          image="/About/DiLink.jpg"
        />
        <ImageTextSection
          title="Vehicle Safety"
          description="Numerous challenging tests for top quality"
          image="/About/VehicleSafety.jpg"
        />
      </main>
    </div>
  );
};

export default BYDAboutPage;