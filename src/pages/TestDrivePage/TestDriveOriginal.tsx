import { useState, useEffect } from 'react';
import { Calendar, Check } from 'lucide-react';
import { models as allModels } from './data/models';
import CountryCodeSelect from './CountryCodeSelect';
import emailjs from '@emailjs/browser';

const TestDrivePage = () => {
  // Image loading state for blur-up effect
  const [imageLoaded, setImageLoaded] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isProgressAboveFooter, setIsProgressAboveFooter] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(9);
  const [currentYear, setCurrentYear] = useState(2025);
  const [errors, setErrors] = useState({});
  const [emailError, setEmailError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+44',
    phone: '',
    useType: 'personal'
  });

  const EMAILJS_SERVICE_ID = 'service_95egztj';
  const EMAILJS_TEMPLATE_ID = 'template_og3k19g';
  const EMAILJS_PUBLIC_KEY = 'JT95dY0H7AhNEF5Yc';
  const timeSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const categories = [
    { value: 'all', label: 'All' },
    { value: 'electric', label: 'Electric cars' },
    { value: 'hybrid', label: 'Hybrid cars' }
  ];

  const models = allModels.map(m => ({
    id: m.id,
    name: m.name,
    type: m.type,
    image: m.images[0]
  }));

  const filteredModels = selectedCategory === 'all' ? models : models.filter(m => m.type === selectedCategory);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const setError = (field, message) => setErrors(prev => ({ ...prev, [field]: message }));
  const clearError = (field) => setError(field, '');

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      const progressBar = document.querySelector('.progress-bar');
      if (footer && progressBar) {
        const footerRect = footer.getBoundingClientRect();
        const progressBarRect = progressBar.getBoundingClientRect();
        const gap = 20;
        setIsProgressAboveFooter(footerRect.top < window.innerHeight - gap + progressBarRect.height);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    const container = document.querySelector('.models-grid');
    const handleScroll = () => {
      if (container) setCarouselIndex(Math.round(container.scrollLeft / 410));
    };
    if (container) container.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, [filteredModels]);

  const scrollCarousel = (direction) => {
    const container = document.querySelector('.models-grid');
    container.scrollBy({ left: direction === 'left' ? -410 : 410, behavior: 'smooth' });
  };

  const scrollToIndex = (index) => {
    const container = document.querySelector('.models-grid');
    container.scrollTo({ left: 410 * index, behavior: 'smooth' });
  };

  const navigateMonth = (direction) => {
    if (direction === 'prev') {
      setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
      if (currentMonth === 0) setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1);
      if (currentMonth === 11) setCurrentYear(currentYear + 1);
    }
  };

  const generateCalendarDays = () => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const today = new Date();
    const days = [];

    for (let i = 0; i < firstDay; i++) days.push({ day: '', disabled: true, empty: true });
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const isPast = date < today && date.toDateString() !== today.toDateString();
      days.push({
        day,
        disabled: isPast,
        dateString: `${day} ${monthNames[currentMonth]} ${currentYear}`
      });
    }
    return days;
  };

  const handleDateClick = () => {
    if (!selectedModel) {
      setError('model', 'Please complete the previous step before proceeding');
      return;
    }
    setShowCalendar(!showCalendar);
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

  const isFormComplete = 
    selectedModel && selectedDate && selectedTime &&
    formData.firstName.trim() && formData.lastName.trim() &&
    formData.email.trim() && validateEmail(formData.email) && !emailError &&
    formData.phone.trim() && formData.useType;

  const handleSubmit = async () => {
    if (!selectedModel || !selectedDate || !selectedTime || !formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.useType) {
      setError('contact', 'Please fill all required fields');
      document.querySelector('.contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address');
      document.querySelector('.contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);
    try {
      const selectedModelData = models.find(m => m.id === selectedModel);
      const useTypeMap = { 'personal': 'Personal', 'private-hire': 'Private Hire', 'fleet-corporate': 'Fleet/Corporate' };
      
      const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: `${formData.firstName} ${formData.lastName}`,
        user_email: formData.email,
        phone: `${formData.countryCode} ${formData.phone}`,
        use_type: useTypeMap[formData.useType] || formData.useType,
        model: selectedModelData?.name || 'Unknown Model',
        date: selectedDate,
        time: selectedTime
      }, EMAILJS_PUBLIC_KEY);

      if (response.status === 200) {
        alert('Test drive booking request submitted successfully! We will contact you shortly.');
        setSelectedModel(null);
        setSelectedDate('');
        setSelectedTime('');
        setFormData({ firstName: '', lastName: '', email: '', countryCode: '+44', phone: '', useType: 'personal' });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to submit booking request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderFormInput = (label, name, type = 'text', value, onChange, error = null) => (
    <div className="form-group">
      <label className="form-label">{label}<span className="required">*</span></label>
      <input
        type={type}
        className="form-input"
        placeholder={label + '*'}
        value={value}
        onChange={onChange}
        style={{ borderColor: error ? '#e74c3c' : '' }}
      />
      {error && <div style={{ color: '#e74c3c', fontSize: '0.8rem', marginTop: '5px' }}>{error}</div>}
    </div>
  );

  const ProgressIcon = ({ completed, number }) => (
    <div className={`progress-icon ${completed ? 'completed' : 'incomplete'}`}>
      {completed ? <Check size={14} strokeWidth={3} /> : number}
    </div>
  );

  const SectionNumber = ({ completed, number }) => (
    <span className={`section-number ${completed ? 'completed' : ''}`}>
      {completed ? <Check size={22} strokeWidth={3} /> : number}
    </span>
  );

  return (
    <div style={{ width: '100%', fontFamily: "'Montserrat', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');
        
        /* HERO SECTION - OPTIMIZED */
        .hero-section { 
          height: 110vh; 
          display: flex; 
          align-items: center; 
          padding-left: 8%; 
          color: white; 
          position: relative; 
          overflow: hidden;
        }
        
        .hero-image-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 0;
          transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-image-wrapper.loaded .hero-image {
          opacity: 1;
        }

        .hero-placeholder {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #d0d0d0 0%, #e5e5e5 100%);
          animation: shimmer 2s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.9; }
        }

        .hero-title { 
          font-size: 6rem; 
          font-weight: 300; 
          letter-spacing: 8px; 
          font-family: 'Cormorant Garamond', serif; 
          text-shadow: 2px 2px 30px rgba(0,0,0,0.7); 
          margin: 0;
          position: relative;
          z-index: 1;
        }
        
        .content-section { max-width: 1400px; margin: 0 auto; padding: 80px 40px 80px 150px; }
        .section-title { font-size: 2rem; font-weight: 400; margin-bottom: 15px; display: flex; align-items: center; gap: 15px; }
        .section-number { width: 45px; height: 45px; border: 2px solid #000; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0; }
        .section-number.completed { background: #000; color: white; border-color: #000; }
        .error-message { color: #e74c3c; font-size: 0.9rem; margin-bottom: 30px; }
        .category-tabs { display: flex; gap: 40px; margin-bottom: 40px; border-bottom: 2px solid #e5e5e5; }
        .category-tab { padding: 12px 0; font-size: 1rem; background: none; border: none; cursor: pointer; position: relative; color: #999; transition: color 0.3s; text-transform: capitalize; letter-spacing: 1px; }
        .category-tab.active { color: #000; }
        .category-tab.active::after { content: ''; position: absolute; bottom: -2px; left: 0; right: 0; height: 2px; background: #000; }
        .models-grid { display: flex; gap: 30px; margin-bottom: 40px; overflow-x: auto; scroll-behavior: smooth; padding: 20px 0; scrollbar-width: none; }
        .models-grid::-webkit-scrollbar { display: none; }
        .carousel-container { position: relative; margin-bottom: 60px; }
        .carousel-controls { display: flex; justify-content: center; gap: 15px; margin-top: 20px; align-items: center; }
        .carousel-nav { width: 50px; height: 50px; border-radius: 50%; background: #e5e5e5; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.3s; font-size: 1.2rem; }
        .carousel-nav:hover { background: #4a9eff; color: white; }
        .carousel-dots { display: flex; gap: 10px; align-items: center; }
        .carousel-dot { width: 8px; height: 8px; border-radius: 50%; background: #ccc; border: none; cursor: pointer; padding: 0; transition: all 0.3s; }
        .carousel-dot.active { background: #000; width: 10px; height: 10px; }
        .model-card { border: 2px solid #e5e5e5; border-radius: 12px; padding: 30px; cursor: pointer; transition: all 0.3s ease; position: relative; background: white; min-width: 480px; flex-shrink: 0; display: flex; flex-direction: column; }
        .model-card:hover { border-color: #ccc; }
        .model-header { text-align: left; margin-bottom: 20px; }
        .model-name { font-size: 1.5rem; font-weight: 600; letter-spacing: 1px; margin-bottom: 8px; color: #000; }
        .model-type { color: #666; font-size: 0.85rem; }
        .model-image { width: 100%; height: 220px; object-fit: cover; margin-bottom: 15px; display: block; }
        .selection-circle { width: 30px; height: 30px; border: 2px solid #d0d0d0; border-radius: 50%; align-self: flex-end; display: flex; align-items: center; justify-content: center; transition: all 0.3s; }
        .model-card.selected .selection-circle { background: #000; border-color: #000; }
        .form-section { margin-top: 60px; }
        .form-group { margin-bottom: 20px; }
        .form-label { display: block; margin-bottom: 8px; font-weight: 500; font-size: 0.9rem; }
        .required { color: #e74c3c; }
        .date-input-wrapper { position: relative; max-width: 400px; }
        .date-time-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .date-input { width: 100%; padding: 12px; border: 2px solid #e5e5e5; border-radius: 8px; font-size: 0.95rem; font-family: 'Montserrat', sans-serif; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: white; transition: border-color 0.3s; }
        .date-input.disabled { background: #f5f5f5; cursor: not-allowed; color: #999; }
        .date-input:not(.disabled):hover { border-color: #4a9eff; }
        .calendar-dropdown { position: absolute; top: 100%; left: 0; margin-top: 8px; background: white; border: 1px solid #e5e5e5; border-radius: 8px; padding: 15px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); z-index: 100; width: 350px; }
        .calendar-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; font-weight: 600; font-size: 0.95rem; }
        .calendar-nav-btn { background: none; border: none; font-size: 1rem; cursor: pointer; padding: 5px; color: #666; }
        .calendar-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 5px; }
        .calendar-day-header { text-align: center; font-size: 0.75rem; font-weight: 600; color: #666; padding: 5px; }
        .calendar-day { aspect-ratio: 1; border: 1px solid transparent; border-radius: 4px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; background: white; font-size: 0.85rem; }
        .calendar-day:hover:not(.disabled):not(.selected) { background: #f0f0f0; }
        .calendar-day.disabled { color: #ccc; cursor: not-allowed; }
        .calendar-day.empty { cursor: default; visibility: hidden; }
        .calendar-day.selected { background: #000; color: white; font-weight: 600; }
        .contact-form { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px 40px; align-items: end; }
        .use-type { grid-column: 1 / 2; grid-row: 3; }
        .contact-form .submit-button { grid-column: 1 / 2; justify-self: start; padding: 14px 40px; background-color: #000 !important; color: #fff !important; border: none !important; border-radius: 0 !important; font-size: 0.95rem; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; transition: all 0.3s ease; margin-top: 12px; margin-bottom: 50px; }
        .contact-form .submit-button:disabled { background-color: #999 !important; cursor: not-allowed !important; opacity: 0.5 !important; }
        .contact-form .submit-button:hover { background-color: #333 !important; transform: translateY(-2px); }
        .form-input { width: 100%; padding: 12px; border: 1px solid #e5e5e5; border-radius: 4px; font-size: 0.95rem; font-family: 'Montserrat', sans-serif; transition: border-color 0.3s; }
        .form-input::placeholder { color: #999; }
        .form-input:focus { outline: none; border-color: #4a9eff; }
        .phone-group { display: flex; gap: 10px; }
        .country-code-select { width: 110px; padding: 12px; border: 1px solid #e5e5e5; border-radius: 4px; font-size: 0.95rem; font-family: 'Montserrat', sans-serif; cursor: pointer; transition: border-color 0.3s; }
        .country-code-select:focus { outline: none; border-color: #4a9eff; }
        .progress-bar { position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); background: white; border: 1px solid #e5e5e5; border-radius: 50px; padding: 15px 40px; display: flex; align-items: center; gap: 30px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); z-index: 1000; transition: all 0.3s ease; }
        .progress-item { display: flex; align-items: center; gap: 10px; font-size: 1.1rem; font-weight: 600; }
        .progress-icon { width: 24px; height: 24px; border-radius: 50%; border: 2px solid #000; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; flex-shrink: 0; }
        .progress-icon.completed { background: #000; color: white; }
        .progress-icon.incomplete { border-color: #000; color: #000; }
        @media (max-width: 768px) { .content-section { padding: 40px 20px; } .hero-title { font-size: 3rem; letter-spacing: 4px; } .contact-form { grid-template-columns: 1fr; } .calendar-dropdown { width: 100%; } .contact-form .submit-button { grid-column: 1 / -1; width: 100%; margin-bottom: 150px !important; } }
        @media (max-width: 599px) { .content-section { padding: 40px 20px !important; } .hero-section { padding-left: 5%; height: 80vh; } .hero-title { font-size: 2.5rem !important; } .models-grid { gap: 20px; } .model-card { min-width: calc(100vw - 60px) !important; } .calendar-dropdown { position: fixed !important; top: 50% !important; left: 50% !important; transform: translate(-50%, -50%) !important; width: 320px !important; z-index: 1000 !important; } .date-time-row { grid-template-columns: 1fr; } }
      `}</style>

      {/* OPTIMIZED HERO SECTION */}
      <div className="hero-section">
        <div className={`hero-image-wrapper ${imageLoaded ? 'loaded' : ''}`}>
          {/* Picture element: WebP for modern browsers, JPG fallback for older */}
          <picture>
            {/* Modern WebP format - 70% smaller */}
            <source 
              srcSet="/models/BYD-ATTO-2/Banner.webp" 
              type="image/webp"
            />
            {/* Fallback to JPG for browsers without WebP support */}
            <source 
              srcSet="/models/BYD-ATTO-2/Banner.jpg" 
              type="image/jpeg"
            />
            {/* Actual image element */}
            <img
              src="/models/BYD-ATTO-2/Banner.jpg"
              alt="BYD ATTO 2 Test Drive"
              className="hero-image"
              fetchPriority="high"
              onLoad={() => setImageLoaded(true)}
              decoding="async"
            />
          </picture>
          {/* Blur-up placeholder while image loads */}
          {!imageLoaded && <div className="hero-placeholder" />}
        </div>
        <h1 className="hero-title">Test Drive</h1>
      </div>

      <div className="content-section">
        <div className="section-title">
          <SectionNumber completed={!!selectedModel} number="1" />
          <span>Choose your model</span>
        </div>
        {errors.model && <div className="error-message">{errors.model}</div>}

        <div className="category-tabs">
          {categories.map(cat => (
            <button
              key={cat.value}
              className={`category-tab ${selectedCategory === cat.value ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="carousel-container">
          <div className="models-grid">
            {filteredModels.map(model => (
              <div
                key={model.id}
                className={`model-card ${selectedModel === model.id ? 'selected' : ''}`}
                onClick={() => { setSelectedModel(model.id); clearError('model'); }}
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
            <button className="carousel-nav" onClick={() => scrollCarousel('left')} disabled={carouselIndex === 0}>←</button>
            <div className="carousel-dots">
              {filteredModels.map((_, i) => (
                <button key={i} className={`carousel-dot ${i === carouselIndex ? 'active' : ''}`} onClick={() => scrollToIndex(i)} />
              ))}
            </div>
            <button className="carousel-nav" onClick={() => scrollCarousel('right')} disabled={carouselIndex === filteredModels.length - 1}>→</button>
          </div>
        </div>

        <div className="form-section">
          <div className="section-title">
            <SectionNumber completed={!!(selectedDate && selectedTime)} number="2" />
            <span>Choose your date and time</span>
          </div>
          {errors.date && <div className="error-message">{errors.date}</div>}

          <div className="date-time-row">
            <div className="form-group" style={{ position: 'relative' }}>
              <label className="form-label">Preferred Date <span className="required">*</span></label>
              <div className="date-input-wrapper">
                <div 
                  className={`date-input ${!selectedModel ? 'disabled' : ''}`}
                  onClick={handleDateClick}
                  style={{ cursor: !selectedModel ? 'not-allowed' : 'pointer' }}
                >
                  <span>{selectedDate || 'Select a date'}</span>
                  <Calendar size={18} />
                </div>
              </div>
              {showCalendar && selectedModel && (
                <div className="calendar-dropdown">
                  <div className="calendar-header">
                    <button className="calendar-nav-btn" onClick={() => navigateMonth('prev')}>«</button>
                    <span>{monthNames[currentMonth]} {currentYear}</span>
                    <button className="calendar-nav-btn" onClick={() => navigateMonth('next')}>»</button>
                  </div>
                  <div className="calendar-grid">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <div key={day} className="calendar-day-header">{day}</div>
                    ))}
                    {generateCalendarDays().map((dayObj, idx) => (
                      <div
                        key={idx}
                        className={`calendar-day ${dayObj.disabled ? 'disabled' : ''} ${dayObj.empty ? 'empty' : ''} ${selectedDate === dayObj.dateString ? 'selected' : ''}`}
                        onClick={() => {
                          if (!dayObj.disabled && !dayObj.empty) {
                            setSelectedDate(dayObj.dateString);
                            setShowCalendar(false);
                            clearError('date');
                          }
                        }}
                      >
                        {dayObj.day}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {selectedDate && (
              <div className="form-group">
                <label className="form-label">Choose your time <span className="required">*</span></label>
                <select
                  className="form-input"
                  value={selectedTime}
                  onChange={(e) => { setSelectedTime(e.target.value); clearError('time'); }}
                >
                  <option value="">Select a time</option>
                  {timeSlots.map(time => (<option key={time} value={time}>{time}</option>))}
                </select>
              </div>
            )}
          </div>

          <div className="section-title" style={{ marginTop: '50px' }}>
            <span className="section-number">3</span>
            <span>Enter your contact details</span>
          </div>
          {errors.contact && <div className="error-message">{errors.contact}</div>}

          <div className="contact-form">
            {renderFormInput('First Name', 'firstName', 'text', formData.firstName, (e) => setFormData({ ...formData, firstName: e.target.value }))}
            {renderFormInput('Last Name', 'lastName', 'text', formData.lastName, (e) => setFormData({ ...formData, lastName: e.target.value }))}
            {renderFormInput('Email', 'email', 'email', formData.email, handleEmailChange, emailError)}
            
            <div className="form-group phone">
              <label className="form-label">Phone Number <span className="required">*</span></label>
              <div className="phone-group">
                <CountryCodeSelect value={formData.countryCode} onChange={(code) => setFormData({ ...formData, countryCode: code })} />
                <input type="tel" className="form-input" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="07400 123456*" />
              </div>
            </div>

            <div className="form-group use-type">
              <label className="form-label">Type of use <span className="required">*</span></label>
              <select className="form-input" value={formData.useType} onChange={(e) => setFormData({ ...formData, useType: e.target.value })}>
                <option value="">Type of use *</option>
                <option value="personal">Personal</option>
                <option value="private-hire">Private Hire</option>
                <option value="fleet-corporate">Fleet/Corporate</option>
              </select>
            </div>

            <button onClick={handleSubmit} className="submit-button" disabled={isSubmitting || !isFormComplete}>
              {isSubmitting ? 'Submitting...' : 'Request Booking'}
            </button>
          </div>
        </div>
      </div>

      <div className="progress-bar">
        <div className="progress-item">
          <ProgressIcon completed={!!selectedModel} number="1" />
          <span>Models</span>
        </div>
        <div className="progress-item">
          <ProgressIcon completed={!!(selectedDate && selectedTime)} number="2" />
          <span>Date</span>
        </div>
        <div className="progress-item">
          <ProgressIcon completed={false} number="3" />
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
};

export default TestDrivePage;