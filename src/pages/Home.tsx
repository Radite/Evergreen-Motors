import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { models } from './TestDrivePage/data/models';
import InstagramLightbox from './InstagramLightbox';
import { instagramPosts } from './instagramPosts';
import './Home.css'; // <-- ADD THIS LINE
// Add this helper function after your imports and before the component
const getModelSlug = (modelName: string): string => {
  const slugMap: { [key: string]: string } = {
    'BYD Dolphin Mini': 'dolphin-mini',
    'BYD Atto 2': 'atto-2',
    'BYD Atto 3': 'atto-3',
    'iCAR 03 Adventure Ed.': 'icar-03',
    'BYD Seal U': 'seal-u',
    'BYD Sealion 07': 'sealion-07',
    'BYD Tang': 'tang',
    'Radar King Kong': 'radar-king-kong',
    'BYD Song Pro': 'song-pro',
    'BYD Leopard Ti7': 'leopard-ti7',
    'BYD YU8': 'yu8',
    'BYD Shark': 'shark',
  };
  return slugMap[modelName] || modelName.toLowerCase().replace(/\s+/g, '-');
};
// Configuration for hero carousel images
// Configuration for hero carousel images
const carouselImageConfig: Record<number, number> = {
  1: 3, 2: 3, 3: 3, 4: 3, 5: 3, 6: 3, 7: 3, 8: 3, 9: 3, 10: 3, 11: 3, 12: 3,
};

const modelDescriptions: Record<number, string> = {
  1: 'Compact hatchback',
  2: 'Compact SUV',
  3: 'Compact SUV',
  4: 'Compact Off-Road',
  5: 'Medium SUV',
  6: 'Medium SUV',
  7: 'Med-Large SUV',
  8: 'Med-Large SUV',
  9: 'Large SUV',
  10: 'Large SUV',
  11: 'Crew Cab Pickup Truck',
  12: 'Crew Cab Pickup Truck',
};



const CompleteBYDPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
const [lightboxIndex, setLightboxIndex] = useState(0);
// Add this function after your other carousel functions
const openLightbox = (index: number) => {
  setLightboxIndex(index);
  setLightboxOpen(true);
};
  // Hero Carousel State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [lastInteraction, setLastInteraction] = useState(Date.now());
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const currentModel = models[currentIndex];
const selectedImageIndex = carouselImageConfig[currentModel.id] || 0;

  // Models Section State - FIXED FOR INFINITE SCROLL
  const [currentSlide, setCurrentSlide] = useState(models.length); // Start at first duplicate set
  const [instagramIndex, setInstagramIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  
  const itemsPerView = 2; // Show 2.5 cards for wider, more premium look
  
  // Create infinite scroll by triplicating models array
  const extendedModels = [...models, ...models, ...models];

  // Hero Carousel Functions
  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setDirection('right');
      setCurrentIndex((prev) => (prev + 1) % models.length);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setDirection('left');
      setCurrentIndex((prev) => (prev - 1 + models.length) % models.length);
      setLastInteraction(Date.now());
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const handleManualNext = () => {
    nextSlide();
    setLastInteraction(Date.now());
  };

  const goToSlide = (index: number) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setDirection(index > currentIndex ? 'right' : 'left');
      setCurrentIndex(index);
      setLastInteraction(Date.now());
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  // Hero Carousel Auto-advance
useEffect(() => {
  const autoInterval = 1000000; // 10 seconds
  const idleThreshold = 1000000; // wait 10 seconds before auto-change

  const interval = setInterval(() => {
    const timeSinceLastInteraction = Date.now() - lastInteraction;
    if (timeSinceLastInteraction >= idleThreshold) {
      nextSlide();
      setLastInteraction(Date.now());
    }
  }, autoInterval);

  return () => clearInterval(interval);
}, [lastInteraction]);


  // Instagram Auto-rotate
// Change from 8 to 9 items
useEffect(() => {
  const interval = setInterval(() => {
    setInstagramIndex((prev) => (prev + 1) % 9);  // Updated to 9
  }, 3000);
  return () => clearInterval(interval);
}, []);

  // Models Carousel Functions - FIXED FOR INFINITE SCROLL
  const nextModelsSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const prevModelsSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentSlide((prev) => prev - 1);
  };

 // Reset position for infinite scroll when reaching clones
useEffect(() => {
  if (!isSliding) return;
  
  const timer = setTimeout(() => {
    // Calculate which set we're in (0 = first clone, 1 = original, 2 = last clone)
    const currentSet = Math.floor(currentSlide / models.length);
    const positionInSet = currentSlide % models.length;
    
    // If we're in the first or last clone set, jump to middle set
    if (currentSet === 0 || currentSet === 2) {
      // Disable transition temporarily
      const newPosition = models.length + positionInSet;
      setCurrentSlide(newPosition);
      
      // Re-enable sliding after position is set
      requestAnimationFrame(() => {
        setTimeout(() => {
          setIsSliding(false);
        }, 50);
      });
    } else {
      setIsSliding(false);
    }
  }, 600);
  
  
  return () => clearTimeout(timer);
}, [currentSlide, isSliding, models.length]);

// Add this helper function at the top of your component, after the state declarations
const formatRange = (rangeString: string) => {
  // Extract numbers from strings like "305km or 405km (CLTC)" or "430km (CLTC)"
  const numbers = rangeString.match(/\d+/g);
  if (!numbers) return 'N/A';
  
  // Convert km to miles (1 km = 0.621371 miles)
  const miles = numbers.map(num => Math.round(parseInt(num) * 0.621371));
  
  if (miles.length === 1) {
    return `${miles[0]} miles`;
  } else if (miles.length >= 2) {
    return `${miles[0]}-${miles[1]} miles`;
  }
  return 'N/A';
};

  const modelDescription = modelDescriptions[currentModel.id] || '';
  const handleSubmit = () => {
    if (!selectedModel) {
      setShowModelError(true);
      return;
    }
    if (!selectedDate) {
      setShowDateError(true);
      return;
    }
    if (!selectedTime) {
      setShowTimeError(true);
      return;
    }
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }
    alert('Booking request submitted!');
  };
  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>


      {/* ==================== HERO CAROUSEL SECTION ==================== */}
      <div className="hero-carousel">
        {models.map((model, index) => {
          const imageIndex = carouselImageConfig[model.id] || 0;
          const description = modelDescriptions[model.id] || '';
          
          let slideClass = 'carousel-slide';
          if (index === currentIndex) {
            slideClass += ' active';
          } else if (
            (direction === 'right' && index === (currentIndex - 1 + models.length) % models.length) ||
            (direction === 'left' && index === (currentIndex + 1) % models.length)
          ) {
            slideClass += direction === 'right' ? ' prev' : ' next';
          } else {
            slideClass += index < currentIndex ? ' prev' : ' next';
          }
          
          return (
            <div key={model.id} className={slideClass}>
              <img
                src={model.images[imageIndex]}
                alt={model.name}
                className="slide-background"
              />
              <div className="slide-overlay" />
              
{index === currentIndex && (
  <div className="slide-content">
    <h1 className="model-name">{model.name}</h1>
    <p className="model-description">{model.class}</p>
  </div>
)}
            </div>
          );
        })}

        <button className="nav-arrow nav-arrow-left" onClick={prevSlide}>
          <ChevronLeft size={24} />
        </button>
        <button className="nav-arrow nav-arrow-right" onClick={handleManualNext}>
          <ChevronRight size={24} />
        </button>

        <div className="hero-carousel-controls">
          <a href={`/models/${currentModel.name.toLowerCase().replace(/\s+/g, '-')}`} className="hero-carousel-button">
            Learn More
          </a>
          <a href="/test-drive" className="hero-carousel-button">
            Test Drive
          </a>

        </div>

        <div className="carousel-indicators">
          {models.map((_, index) => (
            <div
              key={index}
              className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* ==================== MODELS SECTION ==================== */}
      <section className="models-section">
        <div className="models-container">
          <h2 className="models-title">Models</h2>
          
          <div className="models-carousel-wrapper">
            {/* Arrows positioned on top of carousel */}
            <div className="models-carousel-controls">
              <button 
                className="models-carousel-arrow"
                onClick={prevModelsSlide}
                aria-label="Previous"
              >
                <ChevronLeft size={28} />
              </button>
              <button 
                className="models-carousel-arrow"
                onClick={nextModelsSlide}
                aria-label="Next"
              >
                <ChevronRight size={28} />
              </button>
            </div>

<div 
  className="models-carousel-track"
  style={{ 
    transform: `translateX(calc(25% - ${currentSlide * (100 / itemsPerView)}%))`,
    transition: isSliding ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
  }}
>
              {extendedModels.map((model, index) => (
<div key={`${model.id}-${index}`} className="model-card">
  <div className="model-card-header">
    <h3 className="model-card-title">{model.name}</h3>
    <p className="model-card-description">{modelDescriptions[model.id]}</p>
  </div>
  
  <a href={`/models/${getModelSlug(model.name)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <img 
      src={model.images[0]} 
      alt={model.name}
      className="model-card-image"
      style={{ cursor: 'pointer' }}
    />
  </a>
  
  <div className="model-card-buttons">
    <button className="model-button" style={{ fontSize: '0.75rem', padding: '18px 12px' }}>
      <div style={{ fontWeight: '700', marginBottom: '6px', fontSize: '0.85rem' }}>{formatRange(model.range)}</div>
      <div style={{ fontSize: '0.7rem', fontWeight: '400', opacity: '0.7' }}>Range</div>
    </button>
    <button className="model-button" style={{ fontSize: '0.75rem', padding: '18px 12px' }}>
      <div style={{ fontWeight: '700', marginBottom: '6px', fontSize: '0.85rem' }}>L2</div>
      <div style={{ fontSize: '0.7rem', fontWeight: '400', opacity: '0.7' }}>Charging</div>
    </button>
    <button className="model-button" style={{ fontSize: '0.75rem', padding: '18px 12px' }}>
      <div style={{ fontWeight: '700', marginBottom: '6px', fontSize: '0.85rem' }}>{model.seats}</div>
      <div style={{ fontSize: '0.7rem', fontWeight: '400', opacity: '0.7' }}>Seats</div>
    </button>
    <button className="model-button" style={{ fontSize: '0.75rem', padding: '18px 12px' }}>
      <div style={{ fontWeight: '700', marginBottom: '6px', fontSize: '0.85rem' }}>6-62mph</div>
      <div style={{ fontSize: '0.7rem', fontWeight: '400', opacity: '0.7' }}>13.8sec</div>
    </button>
    <a 
      href={`/models/${getModelSlug(model.name)}`}
      className="model-button full-width" 
      style={{ 
        fontSize: '0.8rem', 
        padding: '20px 28px',
        textDecoration: 'none',
        display: 'block'
      }}
    >
      View Details
    </a>
  </div>
</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Electric Cars Section */}
      <section className="electric-section">
        <div className="electric-content">
          <h2 className="electric-title">Electric Cars</h2>
          <p className="electric-description">
            At Evergreen Motors, our electric vehicles are different; our industry-leading battery 
            technology marries perfectly with innovative design to create a range of EVs 
            that are as safe as they are luxurious. Time to upgrade? Discover our available 
            models today.
          </p>
          <button className="electric-button" onClick={() => window.location.href = '/electric-cars'}>
            Learn More
          </button>
        </div>
        <div>
          <img 
            src="/Home/ElectricCars.jpg"
            alt="BYD Electric Car Charging"
            className="electric-image"
          />
        </div>
      </section>

      {/* Community Section */}
{/* Community Section */}
{/* Community Section */}
<section className="community-section">
  <div className="community-container">
    <h2 className="community-title">Our Evergreen Community</h2>
    <p className="community-subtitle">
      Share your BYD with us via social media by tagging @EvergreenMotorsTCI & using #EvergreenMotorsTCI 
      for a chance to feature across our website and social channels.
    </p>
    
    <div className="instagram-grid">
      {instagramPosts.map((post, index) => {
        const hasMultipleMedia = post.media.length > 1;
        const firstMedia = post.media[0];
        
        return (
          <div 
            key={post.id} 
            className={`instagram-item ${firstMedia.type === 'video' ? 'video-item' : ''}`}
            onClick={() => openLightbox(index)}
            style={{
              transform: index === instagramIndex ? 'scale(1.02)' : 'scale(1)',
              transition: 'transform 0.5s ease',
              zIndex: index === instagramIndex ? 2 : 1,
              cursor: 'pointer',
            }}
          >
            {firstMedia.type === 'image' ? (
              <img 
                src={firstMedia.url}
                alt={post.alt} 
              />
            ) : (
              <video 
                src={firstMedia.url}
                poster={firstMedia.thumbnailUrl}
                autoPlay
                loop
                muted
                playsInline
              />
            )}
            
            {/* Carousel Indicator Icon */}
            {hasMultipleMedia && (
              <div className="instagram-carousel-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
                  <rect x="3" y="5" width="9" height="14" rx="1" fill="white" opacity="0.8"/>
                  <rect x="12" y="5" width="9" height="14" rx="1" fill="white"/>
                </svg>
              </div>
            )}
            
            {/* Instagram Icon */}
            <div className="instagram-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#1a1a1a">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

{/* Instagram Lightbox Modal */}
<InstagramLightbox
  key={lightboxOpen ? lightboxIndex : 'closed'}
  posts={instagramPosts}
  initialIndex={lightboxIndex}
  isOpen={lightboxOpen}
  onClose={() => setLightboxOpen(false)}
/>
      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-form-wrapper">
          <h2 className="contact-title">Contact us</h2>
          
          <form onSubmit={(e) => { e.preventDefault(); }}>
            <div className="form-row">
              <div className="form-group">
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="First Name*"
                  required
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Last Name*"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <input 
                type="email" 
                className="form-input" 
                placeholder="Email*"
                required
              />
            </div>

            <div className="form-group">
              <div className="phone-input-group">
                <select className="form-select">
                  <option>+44</option>
                  <option>+1</option>
                  <option>+91</option>
                </select>
                <input 
                  type="tel" 
                  className="form-input" 
                  placeholder="07400 123456*"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <select className="form-select" required>
                <option value="">Model of Interest*</option>
                {models.map(model => (
                  <option key={model.id} value={model.name}>{model.name}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <select className="form-select" required>
                <option value="">Post Code*</option>
              </select>
            </div>

            <div className="form-group">
              <select className="form-select" required>
                <option value="">How can we help you?*</option>
                <option>Test Drive</option>
                <option>Purchase Inquiry</option>
                <option>General Question</option>
                <option>Service Inquiry</option>
              </select>
            </div>

<button onClick={handleSubmit} className="submit-button">
  Submit
</button>

          </form>
        </div>

        <div>
          <img 
            src="/Home/Contact.jpg"
            alt="BYD Electric Car"
            className="contact-image"
          />
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <h2 className="map-title">Our Location</h2>
        <div className="map-container">
          <iframe
src="https://maps.google.com/maps?q=21.795800671508836,-72.18088702512645&t=&z=13&ie=UTF8&iwloc=&output=embed"            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="BYD Location Map"
          />
        </div>
      </section>
    </div>
  );
};

export default CompleteBYDPage;