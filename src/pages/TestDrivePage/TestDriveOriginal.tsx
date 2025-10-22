import { useState, useEffect } from 'react';
import { Calendar, Check } from 'lucide-react';
import { models as allModels } from './data/models'; // Import from models.ts
import CountryCodeSelect from './CountryCodeSelect';

const TestDrivePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [showModelError, setShowModelError] = useState(false);
  const [showDateError, setShowDateError] = useState(false);
  const [showTimeError, setShowTimeError] = useState(false);
  const [isProgressAboveFooter, setIsProgressAboveFooter] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+44',
    phone: '',
    useType: 'personal'
  });

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      const progressBar = document.querySelector('.progress-bar');
      
      if (footer && progressBar) {
        const footerRect = footer.getBoundingClientRect();
        const progressBarRect = progressBar.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const gap = 20;
        
        // Calculate if progress bar would overlap footer
        const progressBarBottom = windowHeight - gap;
        const shouldStopAboveFooter = footerRect.top < progressBarBottom + progressBarRect.height;
        
        setIsProgressAboveFooter(shouldStopAboveFooter);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Check on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Map models from models.ts to the format needed for test drive
  const models = allModels.map(model => ({
    id: model.id,
    name: model.name,
    type: model.type,
    image: model.images[0] // Use first image
  }));

  const filteredModels = selectedCategory === 'all' 
    ? models 
    : models.filter(m => m.type === selectedCategory);
  const scrollCarousel = (direction) => {
    const container = document.querySelector('.models-grid');
    const cardWidth = 410;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    
    const newIndex = direction === 'left' 
      ? Math.max(0, carouselIndex - 1)
      : Math.min(filteredModels.length - 1, carouselIndex + 1);
    setCarouselIndex(newIndex);
  };

  useEffect(() => {
  const container = document.querySelector('.models-grid');
  
  const handleCarouselScroll = () => {
    if (!container) return;
    
    const cardWidth = 410;
    const scrollLeft = container.scrollLeft;
    const newIndex = Math.round(scrollLeft / cardWidth);
    
    setCarouselIndex(newIndex);
  };

  if (container) {
    container.addEventListener('scroll', handleCarouselScroll);
  }
  
  return () => {
    if (container) {
      container.removeEventListener('scroll', handleCarouselScroll);
    }
  };
}, [filteredModels]);
  const scrollToIndex = (index) => {
    const container = document.querySelector('.models-grid');
    const cardWidth = 410;
    container.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
    setCarouselIndex(index);
  };

  const handleDateClick = () => {
    if (!selectedModel) {
      setShowModelError(true);
      return;
    }
    setShowCalendar(!showCalendar);
  };

  const handleModelSelect = (modelId) => {
    setSelectedModel(modelId);
    setShowModelError(false);
  };

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
    <div style={{ width: '100%', fontFamily: "'Montserrat', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        .hero-section {
          height: 110vh;
          background: 
                      url('/models/BYD-ATTO-2/Banner.jpg') center/cover;
          display: flex;
          align-items: center;
          padding-left: 8%;
          color: white;
          position: relative;
        }

        .hero-title {
          font-size: 6rem;
          font-weight: 300;
          letter-spacing: 8px;
          font-family: 'Cormorant Garamond', serif;
          text-shadow: 2px 2px 30px rgba(0,0,0,0.7);
          margin: 0;
        }

.content-section {
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 40px;
  padding-left: 150px; /* 👈 Add a strong left margin */
}


        .section-title {
          font-size: 2rem;
          font-weight: 400;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .section-number {
          width: 45px;
          height: 45px;
          border: 2px solid #000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .section-number.completed {
          background: #000;
          color: white;
          border-color: #000;
        }

        .error-message {
          color: #e74c3c;
          font-size: 0.9rem;
          margin-bottom: 30px;
        }

        .category-tabs {
          display: flex;
          gap: 40px;
          margin-bottom: 40px;
          border-bottom: 2px solid #e5e5e5;
        }

        .category-tab {
          padding: 12px 0;
          font-size: 1rem;
          background: none;
          border: none;
          cursor: pointer;
          position: relative;
          color: #999;
          transition: color 0.3s;
          text-transform: capitalize;
          letter-spacing: 1px;
        }

        .category-tab.active {
          color: #000;
        }

        .category-tab.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: #000;
        }

        .models-grid {
          display: flex;
          gap: 30px;
          margin-bottom: 40px;
          overflow-x: auto;
          scroll-behavior: smooth;
          padding: 20px 0;
          scrollbar-width: none;
        }

        .models-grid::-webkit-scrollbar {
          display: none;
        }

        .carousel-container {
          position: relative;
          margin-bottom: 60px;
        }

        .carousel-controls {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 20px;
          align-items: center;
        }

        .carousel-nav {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #e5e5e5;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          font-size: 1.2rem;
        }

        .carousel-nav:hover {
          background: #4a9eff;
          color: white;
        }

        .carousel-dots {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .carousel-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ccc;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.3s;
        }

        .carousel-dot.active {
          background: #000;
          width: 10px;
          height: 10px;
        }

        .model-card {
          border: 2px solid #e5e5e5;
          border-radius: 12px;
          padding: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          background: white;
          min-width: 480px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
        }

        .model-card:hover {
          border-color: #ccc;
        }

        .model-card.selected {
          border-color: #e5e5e5;
        }

        .model-header {
          text-align: left;
          margin-bottom: 20px;
        }

        .model-name {
          font-size: 1.5rem;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 8px;
          color: #000;
        }

        .model-type {
          color: #666;
          font-size: 0.85rem;
        }

        .model-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
          margin-bottom: 15px;
          display: block;
        }

        .selection-circle {
          width: 30px;
          height: 30px;
          border: 2px solid #d0d0d0;
          border-radius: 50%;
          align-self: flex-end;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }

        .model-card.selected .selection-circle {
          background: #000;
          border-color: #000;
        }

        .form-section {
          margin-top: 60px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .required {
          color: #e74c3c;
        }

        .date-input-wrapper {
          position: relative;
          max-width: 400px;
        }

        .date-time-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .date-input {
          width: 100%;
          padding: 12px;
          border: 2px solid #e5e5e5;
          border-radius: 8px;
          font-size: 0.95rem;
          font-family: 'Montserrat', sans-serif;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: white;
          transition: border-color 0.3s;
        }

        .date-input.disabled {
          background: #f5f5f5;
          cursor: not-allowed;
          color: #999;
        }

        .date-input:not(.disabled):hover {
          border-color: #4a9eff;
        }

        .calendar-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          margin-top: 8px;
          background: white;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          padding: 15px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          z-index: 100;
          width: 350px;
        }

        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .calendar-nav-btn {
          background: none;
          border: none;
          font-size: 1rem;
          cursor: pointer;
          padding: 5px;
          color: #666;
        }

        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 5px;
        }

        .calendar-day-header {
          text-align: center;
          font-size: 0.75rem;
          font-weight: 600;
          color: #666;
          padding: 5px;
        }

        .calendar-day {
          aspect-ratio: 1;
          border: 1px solid transparent;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          background: white;
          font-size: 0.85rem;
        }

        .calendar-day:hover:not(.disabled):not(.selected) {
          background: #f0f0f0;
        }

        .calendar-day.disabled {
          color: #ccc;
          cursor: not-allowed;
        }

        .calendar-day.selected {
          background: #000;
          color: white;
          font-weight: 600;
        }

.contact-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 40px;
  align-items: end;
}

/* Make the “Type of use” field span the full first column (under First Name & Email) */
.use-type {
  grid-column: 1 / 2;
  grid-row: 3;
}

.contact-form .submit-button {
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

.contact-form .submit-button:hover {
  background-color: #333 !important;
  transform: translateY(-2px);
}

/* Responsive fallback */
@media (max-width: 768px) {
  .contact-form .submit-button {
    grid-column: 1 / -1;
    justify-self: stretch;
    width: 100%;
    margin-bottom: 40px;
  }
}



        .form-input {
          width: 100%;
          padding: 12px;
          border: 1px solid #e5e5e5;
          border-radius: 4px;
          font-size: 0.95rem;
          font-family: 'Montserrat', sans-serif;
          transition: border-color 0.3s;
        }

        .form-input::placeholder {
          color: #999;
        }

        .form-input:focus {
          outline: none;
          border-color: #4a9eff;
        }

        .phone-group {
          display: flex;
          gap: 10px;
        }

        .country-code-select {
          width: 110px;
          padding: 12px;
          border: 1px solid #e5e5e5;
          border-radius: 4px;
          font-size: 0.95rem;
          font-family: 'Montserrat', sans-serif;
          cursor: pointer;
          transition: border-color 0.3s;
        }

        .country-code-select:focus {
          outline: none;
          border-color: #4a9eff;
        }

        .full-width {
          grid-column: 1 / -1;
        }

        .submit-button {
          grid-column: 1 / -1;
          padding: 15px 50px;
          background: #4a9eff;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 10px;
        }

        .submit-button:hover {
          background: #3a8ee0;
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(74, 158, 255, 0.3);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
            letter-spacing: 4px;
          }

          .contact-form {
            grid-template-columns: 1fr;
          }

          .calendar-dropdown {
            width: 100%;
          }
        }

        .progress-bar {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          border: 1px solid #e5e5e5;
          border-radius: 50px;
          padding: 15px 40px;
          display: flex;
          align-items: center;
          gap: 30px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .progress-bar.above-footer {
          position: absolute;
          bottom: auto;
          top: auto;
        }

        .progress-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .progress-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 2px solid #000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          flex-shrink: 0;
        }

        .progress-icon.completed {
          background: #000;
          color: white;
        }

        .progress-icon.incomplete {
          border-color: #000;
          color: #000;
        }
      `}</style>

      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Test Drive</h1>
      </div>

      {/* Choose Model Section */}
      <div className="content-section">
        <div className="section-title">
          <span className={`section-number ${selectedModel ? 'completed' : ''}`}>
            {selectedModel ? <Check size={22} strokeWidth={3} /> : '1'}
          </span>
          <span>Choose your model</span>
        </div>
        {showModelError && (
          <div className="error-message">Please complete the previous step before proceeding</div>
        )}

        <div className="category-tabs">
          <button
            className={`category-tab ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All
          </button>
          <button
            className={`category-tab ${selectedCategory === 'electric' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('electric')}
          >
            Electric cars
          </button>
          <button
            className={`category-tab ${selectedCategory === 'hybrid' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('hybrid')}
          >
            Hybrid cars
          </button>
        </div>

        <div className="carousel-container">
          <div className="models-grid">
            {filteredModels.map(model => (
              <div
                key={model.id}
                className={`model-card ${selectedModel === model.id ? 'selected' : ''}`}
                onClick={() => handleModelSelect(model.id)}
              >
                <div className="model-header">
                  <div className="model-name">{model.name}</div>
                  <div className="model-type">{model.type === 'hybrid' ? 'PHEV' : '100% Electric'}</div>
                </div>
                <img src={model.image} alt={model.name} className="model-image" />
                <div className="selection-circle">
                  {selectedModel === model.id && <Check size={18} color="white" strokeWidth={3} />}
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-controls">
            <button 
              className="carousel-nav" 
              onClick={() => scrollCarousel('left')}
              disabled={carouselIndex === 0}
            >
              ←
            </button>
            
            <div className="carousel-dots">
              {filteredModels.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === carouselIndex ? 'active' : ''}`}
                  onClick={() => scrollToIndex(index)}
                />
              ))}
            </div>

            <button 
              className="carousel-nav" 
              onClick={() => scrollCarousel('right')}
              disabled={carouselIndex === filteredModels.length - 1}
            >
              →
            </button>
          </div>
        </div>

        {/* Date Selection */}
        <div className="form-section">
          <div className="section-title">
            <span className={`section-number ${selectedDate && selectedTime ? 'completed' : ''}`}>
              {selectedDate && selectedTime ? <Check size={22} strokeWidth={3} /> : '2'}
            </span>
            <span>Choose your date and time</span>
          </div>
          {showDateError && (
            <div className="error-message">Please complete the previous step before proceeding</div>
          )}

          <div className="date-time-row">
            <div className="form-group">
              <label className="form-label">
                Preferred Date <span className="required">*</span>
              </label>
              <div className="date-input-wrapper">
                <div 
                  className={`date-input ${!selectedModel ? 'disabled' : ''}`}
                  onClick={handleDateClick}
                  style={{ cursor: !selectedModel ? 'not-allowed' : 'pointer' }}
                >
                  <span>{selectedDate || 'Select a date'}</span>
                  <Calendar size={18} />
                </div>
                {showCalendar && selectedModel && (
                  <div className="calendar-dropdown">
                    <div className="calendar-header">
                      <button className="calendar-nav-btn">«</button>
                      <span>2025 October</span>
                      <button className="calendar-nav-btn">»</button>
                    </div>
                    <div className="calendar-grid">
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div key={day} className="calendar-day-header">{day}</div>
                      ))}
                      {[28, 29, 30].map(day => (
                        <div key={`prev-${day}`} className="calendar-day disabled">{day}</div>
                      ))}
                      {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                        <div
                          key={day}
                          className={`calendar-day ${day < 19 ? 'disabled' : ''} ${selectedDate === `${day} October 2025` ? 'selected' : ''}`}
                          onClick={() => {
                            if (day >= 19) {
                              setSelectedDate(`${day} October 2025`);
                              setShowCalendar(false);
                              setShowDateError(false);
                            }
                          }}
                        >
                          {day}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {selectedDate && (
              <div className="form-group">
                <label className="form-label">
                  Choose your time <span className="required">*</span>
                </label>
                <select
                  className="form-input"
                  value={selectedTime}
                  onChange={(e) => {
                    setSelectedTime(e.target.value);
                    setShowTimeError(false);
                  }}
                >
                  <option value="">Select a time</option>
                  {timeSlots.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Contact Details */}
          <div className="section-title" style={{ marginTop: '50px' }}>
            <span className="section-number">3</span>
            <span>Enter your contact details</span>
          </div>
<div className="contact-form">
  {/* Row 1: First & Last Name */}
  <div className="form-group first-name">
    <label className="form-label">
      First Name<span className="required">*</span>
    </label>
    <input
      type="text"
      className="form-input"
      placeholder="First Name*"
      value={formData.firstName}
      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
    />
  </div>

  <div className="form-group last-name">
    <label className="form-label">
      Last Name<span className="required">*</span>
    </label>
    <input
      type="text"
      className="form-input"
      placeholder="Last Name*"
      value={formData.lastName}
      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
    />
  </div>

  {/* Row 2: Email & Phone */}
  <div className="form-group email">
    <label className="form-label">
      Email<span className="required">*</span>
    </label>
    <input
      type="email"
      className="form-input"
      placeholder="Email*"
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    />
  </div>

  <div className="form-group phone">
    <label className="form-label">
      Phone Number<span className="required">*</span>
    </label>
    <div className="phone-group">
<CountryCodeSelect
  value={formData.countryCode}
  onChange={(code) => setFormData({ ...formData, countryCode: code })}
/>

      <input
        type="tel"
        className="form-input"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        placeholder="07400 123456*"
      />
    </div>
  </div>

  {/* Row 3: Type of Use */}
  <div className="form-group use-type">
    <label className="form-label">
      Type of use<span className="required">*</span>
    </label>
    <select
      className="form-input"
      value={formData.useType}
      onChange={(e) => setFormData({ ...formData, useType: e.target.value })}
    >
      <option value="">Type of use *</option>
      <option value="personal">Personal</option>
      <option value="private-hire">Private Hire</option>
      <option value="fleet-corporate">Fleet/Corporate</option>
    </select>
  </div>

  <button onClick={handleSubmit} className="submit-button">
    Request Booking
  </button>
</div>

        </div>
      </div>

      {/* Progress Bar */}
      <div 
        className={`progress-bar ${isProgressAboveFooter ? 'above-footer' : ''}`}
        style={isProgressAboveFooter ? {
          position: 'absolute',
          bottom: 'auto',
          top: `${document.body.scrollHeight - (document.querySelector('footer')?.offsetHeight || 0) - 100}px`
        } : {}}
      >
        <div className="progress-item">
          <div className={`progress-icon ${selectedModel ? 'completed' : 'incomplete'}`}>
            {selectedModel ? <Check size={14} strokeWidth={3} /> : '1'}
          </div>
          <span>Models</span>
        </div>

        <div className="progress-item">
          <div className={`progress-icon ${selectedDate && selectedTime ? 'completed' : 'incomplete'}`}>
            {selectedDate && selectedTime ? <Check size={14} strokeWidth={3} /> : '2'}
          </div>
          <span>Date</span>
        </div>

        <div className="progress-item">
          <div className="progress-icon incomplete">3</div>
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
};

export default TestDrivePage;