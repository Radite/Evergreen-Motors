import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import your models data - adjust the path as needed
// import { models } from './data/models';

// Temporary mock data - replace with your actual data
const models = [
  {
    id: 1,
    name: 'BYD ATTO 2',
    description: 'Electric Compact SUV',
    images: ['/path-to-image.jpg'], // Replace with actual image paths
    offerAvailable: true,
  },
  {
    id: 2,
    name: 'BYD ATTO 3',
    description: 'Expressive and dynamic C-SUV',
    images: ['/path-to-image.jpg'],
    offerAvailable: true,
  },
  {
    id: 3,
    name: 'BYD DOLPHIN',
    description: 'Electric Hatchback',
    images: ['/path-to-image.jpg'],
    offerAvailable: false,
  },
  {
    id: 4,
    name: 'BYD SEAL',
    description: 'Electric Sedan',
    images: ['/path-to-image.jpg'],
    offerAvailable: true,
  },
  {
    id: 5,
    name: 'BYD SEALION 7',
    description: 'Electric SUV',
    images: ['/path-to-image.jpg'],
    offerAvailable: false,
  },
  {
    id: 6,
    name: 'BYD DOLPHIN SURF',
    description: 'Electric Hatchback',
    images: ['/path-to-image.jpg'],
    offerAvailable: true,
  },
];

const AdditionalSections = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [instagramIndex, setInstagramIndex] = useState(0);
  
  const itemsPerView = 3;
  const maxSlide = Math.max(0, Math.ceil(models.length / itemsPerView) - 1);

  // Auto-rotate Instagram posts every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setInstagramIndex((prev) => (prev + 1) % 8);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (currentSlide < maxSlide) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  return (
    <div style={{ width: '100%' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Bebas+Neue&display=swap');

        /* Models Section */
        .models-section {
          background: #f0f0f0;
          padding: 90px 40px 110px;
        }

        .models-container {
          max-width: 1500px;
          margin: 0 auto;
        }

        .models-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 4rem;
          font-weight: 400;
          margin-bottom: 70px;
          color: #1a1a1a;
          letter-spacing: 2px;
          padding-left: 20px;
        }

        .carousel-wrapper {
          position: relative;
          overflow: hidden;
          padding: 0 20px;
        }

        .carousel-track {
          display: flex;
          gap: 30px;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .model-card {
          flex: 0 0 calc(33.333% - 20px);
          background: white;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .model-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        }

        .model-card-header {
          padding: 35px 35px 25px;
          position: relative;
          min-height: 140px;
        }

        .offer-badge {
          position: absolute;
          top: 35px;
          right: 35px;
          background: #e8f0fe;
          color: #1967d2;
          padding: 10px 18px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
        }

        .offer-badge:hover {
          background: #1967d2;
          color: white;
        }

        .model-card-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.5rem;
          font-weight: 400;
          margin-bottom: 10px;
          color: #1a1a1a;
          letter-spacing: 1.5px;
          line-height: 1.1;
        }

        .model-card-description {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          color: #666;
          font-weight: 400;
          letter-spacing: 0.3px;
        }

        .model-card-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
          display: block;
        }

        .model-card-buttons {
          padding: 35px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          background: white;
        }

        .model-button {
          font-family: 'Montserrat', sans-serif;
          padding: 16px 24px;
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
        }

        .model-button:hover {
          background: #1a1a1a;
          color: white;
          transform: translateY(-2px);
        }

        .model-button.full-width {
          grid-column: 1 / -1;
        }

        .carousel-controls {
          display: flex;
          justify-content: flex-end;
          gap: 20px;
          margin-top: 50px;
          padding-right: 20px;
        }

        .carousel-arrow {
          width: 55px;
          height: 55px;
          border: 2px solid #1a1a1a;
          background: white;
          color: #1a1a1a;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .carousel-arrow:hover:not(:disabled) {
          background: #1a1a1a;
          color: white;
          transform: scale(1.05);
        }

        .carousel-arrow:disabled {
          opacity: 0.3;
          cursor: not-allowed;
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
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        .instagram-item {
          position: relative;
          aspect-ratio: 1;
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

        /* Contact Section */
        .contact-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: white;
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
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Map Section */
        .map-section {
          height: 550px;
          background: #e5e5e5;
          position: relative;
        }

        .map-container {
          width: 100%;
          height: 100%;
        }

        .map-container iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .model-card {
            flex: 0 0 calc(50% - 15px);
          }

          .models-title,
          .electric-title,
          .community-title,
          .contact-title {
            font-size: 3.5rem;
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
          .community-section {
            padding: 60px 20px;
          }

          .model-card {
            flex: 0 0 100%;
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
          .contact-title {
            font-size: 2.8rem;
          }

          .carousel-controls {
            padding-right: 0;
          }
        }
      `}</style>

      {/* Models Section */}
      <section className="models-section">
        <div className="models-container">
          <h2 className="models-title">Models</h2>
          
          <div className="carousel-wrapper">
            <div 
              className="carousel-track"
              style={{ 
                transform: `translateX(-${currentSlide * (100 / itemsPerView + 2)}%)` 
              }}
            >
              {models.map((model) => (
                <div key={model.id} className="model-card">
                  <div className="model-card-header">
                    {model.offerAvailable && (
                      <div className="offer-badge">
                        Offer Available →
                      </div>
                    )}
                    <h3 className="model-card-title">{model.name}</h3>
                    <p className="model-card-description">{model.description}</p>
                  </div>
                  
                  <img 
                    src={model.images[0]} 
                    alt={model.name}
                    className="model-card-image"
                  />
                  
                  <div className="model-card-buttons">
                    <button className="model-button" onClick={() => window.location.href = `/models/${model.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      Learn More
                    </button>
                    <button className="model-button" onClick={() => window.location.href = '/test-drive'}>
                      Test Drive
                    </button>
                    <button className="model-button full-width" onClick={() => window.location.href = '/range-calculator'}>
                      Range Calculator
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-controls">
            <button 
              className="carousel-arrow"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              aria-label="Previous"
            >
              <ChevronLeft size={26} />
            </button>
            <button 
              className="carousel-arrow"
              onClick={nextSlide}
              disabled={currentSlide === maxSlide}
              aria-label="Next"
            >
              <ChevronRight size={26} />
            </button>
          </div>
        </div>
      </section>

      {/* Electric Cars Section */}
      <section className="electric-section">
        <div className="electric-content">
          <h2 className="electric-title">Electric Cars</h2>
          <p className="electric-description">
            At BYD, our electric vehicles are different; our industry-leading battery 
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
            src="/path-to-electric-car-image.jpg" // Replace with actual image path
            alt="BYD Electric Car Charging"
            className="electric-image"
          />
        </div>
      </section>

      {/* Community Section */}
      <section className="community-section">
        <div className="community-container">
          <h2 className="community-title">Our BYD Community</h2>
          <p className="community-subtitle">
            Share your BYD with us via social media by tagging @BYD.UK & using #BYDUK 
            for a chance to feature across our website and social channels.
          </p>
          
          <div className="instagram-grid">
            {[...Array(8)].map((_, index) => (
              <div 
                key={index} 
                className="instagram-item"
                style={{
                  transform: index === instagramIndex ? 'scale(1.03)' : 'scale(1)',
                  transition: 'transform 0.5s ease',
                  zIndex: index === instagramIndex ? 2 : 1,
                }}
              >
                <img 
                  src={`/path-to-instagram-image-${index + 1}.jpg`} // Replace with actual image paths
                  alt={`Instagram post ${index + 1}`} 
                />
                <div className="instagram-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1a1a1a">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-form-wrapper">
          <h2 className="contact-title">Contact us</h2>
          
          <form onSubmit={(e) => { e.preventDefault(); /* Add form submission logic */ }}>
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
                {/* Add postcode options */}
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

            <div className="consent-group">
              <input 
                type="checkbox" 
                id="consent" 
                className="consent-checkbox"
                required
              />
              <label htmlFor="consent" className="consent-label">
                I consent to the way BYD processes my personal data. You can find 
                additional information on how BYD processes your personal data in the{' '}
                <a href="/privacy-policy">privacy policy</a>.*
              </label>
            </div>
          </form>
        </div>

        <div>
          <img 
            src="/path-to-contact-image.jpg" // Replace with actual image path
            alt="BYD Electric Car"
            className="contact-image"
          />
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5379464728707!2d-0.12775948423059603!3d51.50735097963553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="BYD Location Map"
          />
        </div>
      </section>
    </div>
  );
};

export default AdditionalSections;