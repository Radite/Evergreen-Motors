import React, { useState, useEffect } from 'react';
import { OptimizedBackground, preloadImage } from './ImageOptimizer';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Preload hero image
  useEffect(() => {
    preloadImage('/contact.jpg');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitStatus('success');
    
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setSubmitStatus('idle');
    }, 3000);
  };

  return (
    <div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        .luxury-contact-hero {
          min-height: 95vh;
          display: flex;
          align-items: flex-start;
          padding: 12rem 8%;
          color: white;
          position: relative;
          will-change: transform;
        }

        .hero-content {
          max-width: 800px;
          z-index: 2;
          position: relative;
        }

        .hero-content h1 {
          font-size: 8rem;
          margin-bottom: 0;
          font-weight: 300;
          font-family: 'Cormorant Garamond', serif;
          letter-spacing: 15px;
          text-shadow: 2px 2px 20px rgba(0,0,0,0.3);
          line-height: 1;
        }

        .luxury-section {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6rem 5%;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
        }

        .section-content {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-label {
          font-size: 1rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #4a9eff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .section-title {
          font-size: 4rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 8px;
          font-family: 'Cormorant Garamond', serif;
          color: white;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-info-box {
          background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 3rem;
        }

        .contact-info-box h2 {
          font-size: 2.5rem;
          margin-bottom: 2.5rem;
          font-weight: 300;
          letter-spacing: 5px;
          font-family: 'Cormorant Garamond', serif;
          color: #4a9eff;
        }

        .contact-item {
          margin-bottom: 2.5rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .contact-item:last-child {
          border-bottom: none;
        }

        .contact-item h3 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: rgba(255,255,255,0.9);
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 2px;
        }

        .contact-item p,
        .contact-item a {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          line-height: 1.8;
          transition: color 0.3s ease;
        }

        .contact-item a:hover {
          color: #4a9eff;
        }

        .contact-form-box {
          background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255,255,255,0.15);
          padding: 2.5rem;
          box-shadow: 0 25px 70px rgba(0,0,0,0.5);
        }

        .contact-form-box h2 {
          font-size: 2.2rem;
          margin-bottom: 0.8rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          color: white;
        }

        .form-subtitle {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.7);
          margin-bottom: 2rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
          line-height: 1.8;
        }

        .form-group {
          margin-bottom: 1.5rem;
          position: relative;
        }

        .form-group label {
          display: block;
          font-size: 0.9rem;
          margin-bottom: 1rem;
          color: rgba(255,255,255,0.9);
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 1rem 1.2rem;
          font-size: 0.95rem;
          border: none;
          border-bottom: 2px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.03);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          transition: all 0.4s ease;
          color: white;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(255,255,255,0.4);
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-bottom-color: #4a9eff;
          background: rgba(74, 158, 255, 0.08);
          box-shadow: 0 10px 30px rgba(74, 158, 255, 0.2);
        }

        .form-group textarea {
          min-height: 140px;
          resize: vertical;
          border: 2px solid rgba(255,255,255,0.2);
          padding: 1.2rem 1.5rem;
        }

        .form-group textarea:focus {
          border-color: #4a9eff;
        }

        .form-group select {
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%234a9eff' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 2rem center;
          padding-right: 4rem;
        }

        .form-group select option {
          background: #1a1a1a;
          color: white;
        }

        .submit-btn {
          width: 100%;
          padding: 1.8rem;
          background: linear-gradient(135deg, #4a9eff 0%, #357abd 100%);
          color: white;
          border: none;
          font-size: 1rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 4px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 15px 40px rgba(74, 158, 255, 0.3);
          position: relative;
          overflow: hidden;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s ease;
        }

        .submit-btn:hover::before {
          left: 100%;
        }

        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 50px rgba(74, 158, 255, 0.5);
        }

        .submit-btn:active {
          transform: translateY(-1px);
        }

        .success-message {
          background: linear-gradient(135deg, rgba(76, 175, 80, 0.2) 0%, rgba(76, 175, 80, 0.1) 100%);
          border: 1px solid rgba(76, 175, 80, 0.5);
          color: #4caf50;
          padding: 1.5rem;
          margin-bottom: 2.5rem;
          text-align: center;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 2px;
          box-shadow: 0 10px 30px rgba(76, 175, 80, 0.2);
        }

       .map-section {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
          padding: 6rem 5%;
        }

        .map-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .map-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255,255,255,0.15);
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0,0,0,0.6);
          aspect-ratio: 2 / 1;
        }

        .map-info {
          padding: 4rem 3.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }

        .map-title {
          font-size: 3rem;
          margin-bottom: 2.5rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          color: white;
          line-height: 1.2;
        }

        .map-address {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.85);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 0.5px;
          line-height: 2;
        }

        .map-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
          border-left: 1px solid rgba(255,255,255,0.1);
        }

        .map-wrapper iframe {
          width: 100%;
          height: 100%;
          border: none;
          filter: grayscale(40%) brightness(0.85) contrast(1.15);
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 4rem;
            letter-spacing: 8px;
          }

          .luxury-contact-hero {
            padding: 8rem 5%;
            background-attachment: scroll !important;
          }

          .section-title {
            font-size: 3rem;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }

          .contact-info-box,
          .contact-form-box {
            padding: 3rem 2rem;
          }

          .map-header h2 {
            font-size: 3rem;
          }

          .map-wrapper {
            height: 400px;
          }

          .map-card {
            grid-template-columns: 1fr;
          }
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .luxury-contact-hero {
            background-attachment: scroll !important;
          }
          
          .submit-btn,
          .contact-item a {
            transition: none !important;
          }
        }
      `}</style>

      <OptimizedBackground
        src="/contact.jpg"
        className="luxury-contact-hero"
        priority={true}
        style={{
          backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll'
        }}
      >
        <div className="hero-content">
          <h1>CONTACT US</h1>
        </div>
      </OptimizedBackground>

      <section className="luxury-section">
        <div className="section-content">
          <div className="section-header">
            <div className="section-label">Get In Touch</div>
            <h2 className="section-title">Let's Connect</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-info-box">
              <h2>Information</h2>
              
              <div className="contact-item">
                <h3>Phone</h3>
                <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
              </div>

              <div className="contact-item">
                <h3>Email</h3>
                <p><a href="mailto:info@byd.com">info@byd.com</a></p>
                <p><a href="mailto:sales@byd.com">sales@byd.com</a></p>
              </div>

              <div className="contact-item">
                <h3>Address</h3>
                <p>BYD Headquarters</p>
                <p>3009 BYD Road</p>
                <p>Shenzhen, Guangdong</p>
                <p>China</p>
              </div>

              <div className="contact-item">
                <h3>Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="contact-form-box">
              <h2>Send Message</h2>
              <p className="form-subtitle">We'd love to hear from you. Fill out the form below and we'll be in touch shortly.</p>
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  ✓ Message sent successfully
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales & Purchasing</option>
                    <option value="service">Service & Maintenance</option>
                    <option value="test-drive">Schedule a Test Drive</option>
                    <option value="fleet">Fleet Solutions</option>
                    <option value="partnership">Business Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="submit-btn">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;