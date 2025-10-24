import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { models } from './TestDrivePage/data/models';
import InstagramLightbox from './InstagramLightbox';
import { instagramPosts } from './instagramPosts';
import CountryCodeSelect from './TestDrivePage/CountryCodeSelect';
import emailjs from '@emailjs/browser';
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


// Inside the component, add these state variables after the existing useState declarations:
const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  countryCode: '+44',
  phone: '',
  modelInterest: '',
  helpWith: ''
});
const [emailError, setEmailError] = useState('');
const [isSubmitting, setIsSubmitting] = useState(false);
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
// Add EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_95egztj';
const EMAILJS_TEMPLATE_ID = 'template_pufs515'; // You'll need to create this template
const EMAILJS_PUBLIC_KEY = 'JT95dY0H7AhNEF5Yc';
  const modelDescription = modelDescriptions[currentModel.id] || '';
// Add email validation function
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation function
const validatePhone = (phone) => {
  // Remove all non-digit characters for validation
  const digitsOnly = phone.replace(/\D/g, '');
  
  // Check if it has between 7 and 15 digits (international standard)
  if (digitsOnly.length < 7 || digitsOnly.length > 15) {
    return false;
  }
  
  // Basic pattern: allows digits, spaces, dashes, parentheses, and plus
  const phoneRegex = /^[\d\s\-\(\)\+]+$/;
  return phoneRegex.test(phone);
};

// Optional: Format phone number as user types
const formatPhoneNumber = (value) => {
  // Remove all non-digit characters
  const digitsOnly = value.replace(/\D/g, '');
  
  // Format based on length (UK format example)
  if (digitsOnly.length <= 5) {
    return digitsOnly;
  } else if (digitsOnly.length <= 9) {
    return `${digitsOnly.slice(0, 5)} ${digitsOnly.slice(5)}`;
  } else {
    return `${digitsOnly.slice(0, 5)} ${digitsOnly.slice(5, 11)}`;
  }
};
const [phoneError, setPhoneError] = useState('');
const handlePhoneChange = (e) => {
  const phone = e.target.value;
  
  // Optional: Auto-format as user types
  // const formatted = formatPhoneNumber(phone);
  // setFormData({ ...formData, phone: formatted });
  
  // Or just set the value directly
  setFormData({ ...formData, phone });
  
  // Validate only if user has entered something
  if (phone && !validatePhone(phone)) {
    setPhoneError('Please enter a valid phone number');
  } else {
    setPhoneError('');
  }
};
const handleEmailChange = (e) => {
  const email = e.target.value;
  setFormData({ ...formData, email });
  
  if (email && !validateEmail(email)) {
    setEmailError('Please enter a valid email address');
  } else {
    setEmailError('');
  }
};

// Replace the existing handleSubmit function with:
const handleSubmit = async () => {
  // Validation
  if (!formData.firstName || !formData.lastName || !formData.email || 
      !formData.phone || !formData.modelInterest || !formData.helpWith) {
    alert('Please fill in all required fields');
    return;
  }

  if (!validateEmail(formData.email)) {
    setEmailError('Please enter a valid email address');
    return;
  }

    // Add phone validation
  if (!validatePhone(formData.phone)) {
    setPhoneError('Please enter a valid phone number');
    return;
  }
  setIsSubmitting(true);

  try {
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      user_email: formData.email,
      phone: `${formData.countryCode} ${formData.phone}`,
      model_interest: formData.modelInterest,
      help_with: formData.helpWith
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    if (response.status === 200) {
      alert('Message sent successfully! We will contact you shortly.');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        countryCode: '+44',
        phone: '',
        modelInterest: '',
        helpWith: ''
      });
      setEmailError('');
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    alert('Failed to send message. Please try again or contact us directly.');
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Bebas+Neue&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* ==================== HERO CAROUSEL STYLES ==================== */
        .hero-carousel {
          height: 100vh;
          position: relative;
          background: #000;
          overflow: hidden;
        }

        .carousel-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: transform 0.3s ease-out;
        }

        .carousel-slide.active {
          transform: translateX(0);
          z-index: 2;
        }

        .carousel-slide.prev {
          transform: translateX(-100%);
          z-index: 1;
        }

        .carousel-slide.next {
          transform: translateX(100%);
          z-index: 1;
        }

        .slide-background {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .slide-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .slide-content {
          position: absolute;
          top: 120px;
          left: 60px;
          z-index: 10;
          color: white;
        }

        .model-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 4rem;
          font-weight: 400;
          letter-spacing: 3px;
          margin-bottom: 0.3rem;
          line-height: 1;
          text-transform: uppercase;
        }

        .model-description {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.1rem;
          font-weight: 400;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, 0.9);
        }

        .hero-carousel-controls {
          position: absolute;
          bottom: 80px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 1.5rem;
          z-index: 20;
        }

        .hero-carousel-button {
          font-family: 'Montserrat', sans-serif;
          padding: 0.9rem 2rem;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          border: 2px solid white;
          background: transparent;
          color: white;
          min-width: 160px;
          text-align: center;
        }

        .hero-carousel-button:hover {
          background: white;
          color: #000;
          transform: translateY(-2px);
        }

        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.5);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
        }

        .nav-arrow:hover {
          background: rgba(255, 255, 255, 0.9);
          color: #000;
          transform: translateY(-50%) scale(1.1);
        }

        .nav-arrow-left {
          left: 40px;
        }

        .nav-arrow-right {
          right: 40px;
        }

        .carousel-indicators {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 20;
        }

        .indicator-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator-dot.active {
          background: white;
          width: 30px;
          border-radius: 5px;
        }

        /* ==================== MODELS SECTION STYLES ==================== */
.models-section {
  background: #f0f0f0;
  padding: 40px 0 110px;  /* Only top/bottom padding */
}

/* Remove max-width constraint and centering */
.models-container {
  max-width: 100%;
  margin: 0;
  padding: 0;
}

/* KEEP padding on title */
.models-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 4rem;
  font-weight: 400;
  margin-bottom: 40px;
  color: #1a1a1a;
  letter-spacing: 2px;
  padding-left: 40px;  /* Keep this - title has padding */
  padding-right: 40px;
}

        .models-carousel-wrapper {
          position: relative;
          overflow: hidden;
          padding: 0 20px;
        }

        .models-carousel-track {
          display: flex;
          gap: 40px;
        }
          

        .model-card {
          flex: 0 0 calc(50% - 20px);
          background: white;
          overflow: hidden;
          border-radius: 4px;
          box-shadow: 0 2px 20px rgba(0,0,0,0.06);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .model-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
        }

        .model-card-header {
          padding: 40px 40px 30px;
          position: relative;
          min-height: 150px;
          background: white;
        }

        .offer-badge {
          position: absolute;
          top: 40px;
          right: 40px;
          background: #e8f0fe;
          color: #1967d2;
          padding: 12px 22px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 1px;
          text-transform: uppercase;
          border-radius: 2px;
        }

        .offer-badge:hover {
          background: #1967d2;
          color: white;
        }

        .model-card-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.8rem;
          font-weight: 400;
          margin-bottom: 12px;
          color: #1a1a1a;
          letter-spacing: 2px;
          line-height: 1;
        }

        .model-card-description {
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          color: #666;
          font-weight: 400;
          letter-spacing: 0.5px;
        }

        .model-card-image {
          width: 100%;
          height: 350px;
          object-fit: cover;
          display: block;
        }

.model-card-buttons {
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  background: white;
}

.model-button {
  font-family: 'Montserrat', sans-serif;
  padding: 18px 28px;
  font-size: 0.8rem;  /* Increased from 0.7rem */
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid #1a1a1a;
  background: transparent;
  color: #1a1a1a;
  text-align: center;
  border-radius: 2px;
}

        .model-button:hover {
          background: #1a1a1a;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .model-button.full-width {
          grid-column: 1 / -1;
        }

        .models-carousel-controls {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
          display: flex;
          justify-content: space-between;
          padding: 0 30px;
          pointer-events: none;
          z-index: 10;
        }

        .models-carousel-arrow {
          width: 60px;
          height: 60px;
          border: 2px solid #1a1a1a;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          color: #1a1a1a;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          pointer-events: all;
          backdrop-filter: blur(10px);
        }

        .models-carousel-arrow:hover {
          background: #1a1a1a;
          color: white;
          transform: scale(1.1);
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }

        /* Electric Cars Section */
        .electric-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: white;
        }

        .electric-content {
          padding: 100px 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: white;
        }

        .electric-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 4rem;
          font-weight: 400;
          margin-bottom: 35px;
          color: #1a1a1a;
          letter-spacing: 2px;
          line-height: 1;
        }

        .electric-description {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.05rem;
          line-height: 1.9;
          color: #4a4a4a;
          margin-bottom: 45px;
          font-weight: 400;
          letter-spacing: 0.2px;
        }

        .electric-button {
          font-family: 'Montserrat', sans-serif;
          padding: 16px 50px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.8px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid #1a1a1a;
          background: transparent;
          color: #1a1a1a;
          text-align: center;
          width: fit-content;
        }

        .electric-button:hover {
          background: #1a1a1a;
          color: white;
          transform: translateX(5px);
        }

        .electric-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

/* Community Section */
.community-section {
  background: white;
  padding: 90px 40px;
}

.community-container {
  max-width: 1500px;
  margin: 0 auto;
}

.community-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 4rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 25px;
  color: #1a1a1a;
  letter-spacing: 2px;
}

.community-subtitle {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.05rem;
  text-align: center;
  color: #666;
  margin-bottom: 70px;
  line-height: 1.7;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
  letter-spacing: 0.2px;
}

.instagram-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 200px;
  gap: 15px;
}

/* Column 1: Large on top, 2 small below */
.instagram-item:nth-child(1) {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}

.instagram-item:nth-child(2) {
  grid-column: 1;
  grid-row: 3;
}

.instagram-item:nth-child(3) {
  grid-column: 2;
  grid-row: 3;
}

/* Column 2: 2 small on top, large below */
.instagram-item:nth-child(4) {
  grid-column: 3;
  grid-row: 1;
}

.instagram-item:nth-child(5) {
  grid-column: 4;
  grid-row: 1;
}

.instagram-item:nth-child(6) {
  grid-column: 3 / 5;
  grid-row: 2 / 4;
}

/* Column 3: Large on top, 2 small below */
.instagram-item:nth-child(7) {
  grid-column: 5 / 7;
  grid-row: 1 / 3;
}

.instagram-item:nth-child(8) {
  grid-column: 5;
  grid-row: 3;
}

.instagram-item:nth-child(9) {
  grid-column: 6;
  grid-row: 3;
}

.instagram-item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background: #f5f5f5;
}

.instagram-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.instagram-item:hover img {
  transform: scale(1.08);
}

.instagram-icon {
  position: absolute;
  bottom: 18px;
  right: 18px;
  background: white;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.95;
  transition: opacity 0.3s ease;
}

.instagram-item:hover .instagram-icon {
  opacity: 1;
}

.instagram-item video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.instagram-item:hover video {
  transform: scale(1.08);
}

/* Optional: Play button indicator for videos */
.instagram-item.video-item::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.instagram-item.video-item::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 52%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 20px solid #000;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;
}

.instagram-item.video-item:hover::before,
.instagram-item.video-item:hover::after {
  opacity: 1;
}
        /* Contact Section */
        .contact-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: white;
          height: 120vh;
        }

        .contact-form-wrapper {
          padding: 100px 80px;
          background: #fafafa;
        }

        .contact-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 4rem;
          font-weight: 400;
          margin-bottom: 60px;
          color: #1a1a1a;
          letter-spacing: 2px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-input, .form-select {
          width: 100%;
          padding: 18px 25px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          border: none;
          background: white;
          color: #333;
          font-weight: 400;
          transition: box-shadow 0.3s ease;
        }

        .form-input:focus, .form-select:focus {
          outline: none;
          box-shadow: 0 0 0 2px #1967d2;
        }

        .form-input::placeholder {
          color: #999;
        }

        .phone-input-group {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 20px;
        }

        .form-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg width='14' height='9' viewBox='0 0 14 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L7 7L13 1' stroke='%23666' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 25px center;
          padding-right: 55px;
          cursor: pointer;
        }

        .consent-group {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-top: 35px;
        }

        .consent-checkbox {
          width: 22px;
          height: 22px;
          min-width: 22px;
          margin-top: 3px;
          cursor: pointer;
          accent-color: #1967d2;
        }

        .consent-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          color: #666;
          line-height: 1.7;
          font-weight: 400;
          letter-spacing: 0.2px;
        }

        .consent-label a {
          color: #1967d2;
          text-decoration: none;
          border-bottom: 1px solid #1967d2;
          transition: color 0.3s ease;
        }

        .consent-label a:hover {
          color: #0d47a1;
        }

.contact-image {
  height: 80%; /* smaller than 100% */
  width: auto;
  object-fit: cover;
  margin: auto; /* center vertically */
}


        /* Map Section */
        .map-section {
          background: #fff;
          position: relative;
          padding: 40px 40px;
        }

        .map-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 4rem;
          font-weight: 400;
          text-align: center;
          margin-bottom: 40px;
          color: #1a1a1a;
          letter-spacing: 2px;
        }
        
        .map-container {
          width: 100%;
          height: 550px;
        }

        .map-container iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .model-card {
            flex: 0 0 calc(50% - 20px);
          }

          .models-title,
          .electric-title,
          .community-title,
          .contact-title,
          .map-title {
            font-size: 3.5rem;
          }

          .models-carousel-arrow {
            width: 50px;
            height: 50px;
          }
        }

        @media (max-width: 1024px) {
          .electric-section,
          .contact-section {
            grid-template-columns: 1fr;
          }

          .instagram-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .electric-content,
          .contact-form-wrapper {
            padding: 80px 60px;
          }
        }

        @media (max-width: 768px) {
          .models-section,
          .community-section,
          .map-section {
            padding: 60px 20px;
          }

          .model-card {
            flex: 0 0 calc(85% - 20px);
          }

          .models-carousel-arrow {
            width: 45px;
            height: 45px;
          }

          .models-carousel-controls {
            padding: 0 15px;
          }

          .instagram-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }

          .form-row,
          .phone-input-group {
            grid-template-columns: 1fr;
          }

          .electric-content,
          .contact-form-wrapper {
            padding: 60px 30px;
          }

          .models-title,
          .electric-title,
          .community-title,
          .contact-title,
          .map-title {
            font-size: 2.8rem;
          }

          .carousel-controls {
            padding-right: 0;
          }
        }

        @media (max-width: 1024px) {
          .hero-carousel-controls {
            bottom: 60px;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
          }

          .hero-carousel-button {
            min-width: 200px;
          }
        }

        @media (max-width: 768px) {
          .slide-content {
            top: 80px;
            left: 30px;
          }

          .model-name {
            font-size: 2.5rem;
          }

          .model-description {
            font-size: 0.9rem;
          }

          .nav-arrow {
            width: 40px;
            height: 40px;
          }

          .nav-arrow-left {
            left: 20px;
          }

          .nav-arrow-right {
            right: 20px;
          }

          .hero-carousel-controls {
            bottom: 40px;
          }

          .hero-carousel-button {
            padding: 0.8rem 1.5rem;
            font-size: 0.75rem;
            min-width: 140px;
          }
        }

        .submit-button {
  grid-column: 1 / 2;
  justify-self: start;
  padding: 14px 40px;
  background-color: #000 !important;
  color: #fff !important;
  border: none !important;
  border-radius: 0 !important;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  
  /* tightened spacing */
  margin-top: 12px; /* 👈 reduced from 40px */
  margin-bottom: 50px; /* 👈 keeps it visually above the progress bar */
}

.submit-button:hover {
  background-color: #333 !important;
  transform: translateY(-2px);
}
      `}</style>

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
    
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
      <div className="form-row">
        <div className="form-group">
          <input 
            type="text" 
            className="form-input" 
            placeholder="First Name*"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <input 
            type="text" 
            className="form-input" 
            placeholder="Last Name*"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <input 
          type="email" 
          className="form-input" 
          placeholder="Email*"
          value={formData.email}
          onChange={handleEmailChange}
          style={{ borderColor: emailError ? '#e74c3c' : '' }}
          required
        />
        {emailError && (
          <div style={{ color: '#e74c3c', fontSize: '0.85rem', marginTop: '5px' }}>
            {emailError}
          </div>
        )}
      </div>

      <div className="form-group">
<div className="form-group">
  <div className="phone-input-group">
    <CountryCodeSelect
      value={formData.countryCode}
      onChange={(code) => setFormData({ ...formData, countryCode: code })}
    />
    <input 
      type="tel" 
      className="form-input" 
      placeholder="07400 123456*"
      value={formData.phone}
      onChange={handlePhoneChange}
      style={{ borderColor: phoneError ? '#e74c3c' : '' }}
      required
    />
  </div>
  {phoneError && (
    <div style={{ color: '#e74c3c', fontSize: '0.85rem', marginTop: '5px' }}>
      {phoneError}
    </div>
  )}
</div>
      </div>

      <div className="form-group">
        <select 
          className="form-select" 
          value={formData.modelInterest}
          onChange={(e) => setFormData({ ...formData, modelInterest: e.target.value })}
          required
        >
          <option value="">Model of Interest*</option>
          {models.map(model => (
            <option key={model.id} value={model.name}>{model.name}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <select 
          className="form-select" 
          value={formData.helpWith}
          onChange={(e) => setFormData({ ...formData, helpWith: e.target.value })}
          required
        >
          <option value="">How can we help you?*</option>
          <option value="test-drive">Test Drive</option>
          <option value="purchase">Purchase Inquiry</option>
          <option value="general">General Question</option>
          <option value="service">Service Inquiry</option>
        </select>
      </div>

      <button 
        type="submit" 
        className="submit-button"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
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