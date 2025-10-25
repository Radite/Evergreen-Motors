import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { OptimizedBackground, preloadImage } from './ImageOptimizer';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Preload hero image and check for URL parameters
  useEffect(() => {
    preloadImage('/contact.jpg');
    
    // Initialize EmailJS with your public key
    emailjs.init('qDixnNBz5aFVI9l49'); // Replace with your EmailJS public key
    
    // Check if there's a subject parameter in the URL
    const subjectParam = searchParams.get('subject');
    if (subjectParam) {
      setFormData(prev => ({
        ...prev,
        subject: subjectParam
      }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      // EmailJS service parameters
      const templateParams = {
        to_email: 'joshuameghoo@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        'service_gre9op6',    // Replace with your EmailJS service ID
        'template_bji7553',   // Replace with your EmailJS template ID
        templateParams
      );

      console.log('Email sent successfully:', response);
      setSubmitStatus('success');
      
      // Reset form after 3 seconds
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

    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again or contact us directly at joshuameghoo@gmail.com');
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
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
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='rgba(255,255,255,0.7)' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1.2rem center;
          padding-right: 3rem;
          border: 2px solid rgba(255,255,255,0.2);
        }

        .form-group select:focus {
          border-color: #4a9eff;
          background-color: rgba(74, 158, 255, 0.08);
        }

        .form-group select option {
          background: #1a1a1a;
          color: white;
        }

        .submit-btn {
          width: 100%;
          padding: 1.3rem 3rem;
          font-size: 1rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          background: linear-gradient(135deg, #4a9eff 0%, #357abd 100%);
          color: white;
          border: none;
          cursor: pointer;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          transition: all 0.4s ease;
          box-shadow: 0 15px 40px rgba(74, 158, 255, 0.3);
          margin-top: 1.5rem;
          position: relative;
          overflow: hidden;
        }

        .submit-btn:hover:not(:disabled) {
          box-shadow: 0 20px 60px rgba(74, 158, 255, 0.5);
          transform: translateY(-1px);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
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

        .error-message {
          background: linear-gradient(135deg, rgba(244, 67, 54, 0.2) 0%, rgba(244, 67, 54, 0.1) 100%);
          border: 1px solid rgba(244, 67, 54, 0.5);
          color: #f44336;
          padding: 1.5rem;
          margin-bottom: 2.5rem;
          text-align: center;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 1px;
          box-shadow: 0 10px 30px rgba(244, 67, 54, 0.2);
          font-size: 0.9rem;
        }

        .map-section {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
          padding: 6rem 5%;
        }

        .map-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .map-header h2 {
          font-size: 4rem;
          margin-bottom: 1rem;
          font-weight: 300;
          letter-spacing: 8px;
          font-family: 'Cormorant Garamond', serif;
          color: white;
        }

        .map-header p {
          font-size: 1rem;
          color: rgba(255,255,255,0.7);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
        }

        .map-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          height: 500px;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 25px 70px rgba(0,0,0,0.5);
          overflow: hidden;
          position: relative;
        }

        .map-wrapper iframe {
          width: 100%;
          height: 100%;
          border: none;
          filter: grayscale(20%) brightness(0.9);
        }

        @media (max-width: 1024px) {
          .luxury-contact-hero {
            padding: 10rem 6%;
          }

          .hero-content h1 {
            font-size: 6.5rem;
            letter-spacing: 12px;
          }

          .luxury-section,
          .map-section {
            padding: 5rem 4%;
          }

          .section-title {
            font-size: 3.5rem;
            letter-spacing: 7px;
          }

          .contact-info-box,
          .contact-form-box {
            padding: 2.8rem 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 4rem;
            letter-spacing: 8px;
          }

          .luxury-contact-hero {
            padding: 8rem 5%;
            background-attachment: scroll !important;
            min-height: 80vh;
          }

          .section-title {
            font-size: 3rem;
            letter-spacing: 6px;
          }

          .section-label {
            font-size: 0.9rem;
            letter-spacing: 3px;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }

          .contact-info-box,
          .contact-form-box {
            padding: 2.5rem 2rem;
          }

          .contact-info-box h2,
          .contact-form-box h2 {
            font-size: 2rem;
            letter-spacing: 5px;
            margin-bottom: 2rem;
          }

          .form-subtitle {
            font-size: 0.85rem;
          }

          .contact-item {
            margin-bottom: 2rem;
            padding-bottom: 1.5rem;
          }

          .contact-item h3 {
            font-size: 1.1rem;
          }

          .contact-item p,
          .contact-item a {
            font-size: 1rem;
          }

          .map-header h2 {
            font-size: 3rem;
            letter-spacing: 6px;
          }

          .map-header p {
            font-size: 0.95rem;
          }

          .map-wrapper {
            height: 400px;
          }
        }

        @media (max-width: 599px) {
          .luxury-contact-hero {
            padding: 7rem 4%;
            min-height: 70vh;
          }

          .hero-content h1 {
            font-size: 3rem;
            letter-spacing: 6px;
          }

          .luxury-section {
            padding: 4rem 4%;
          }

          .section-label {
            font-size: 0.85rem;
            letter-spacing: 2px;
          }

          .section-title {
            font-size: 2.5rem;
            letter-spacing: 5px;
            margin-bottom: 1.5rem;
          }

          .contact-grid {
            gap: 3rem;
          }

          .contact-info-box,
          .contact-form-box {
            padding: 2rem 1.5rem;
          }

          .contact-info-box h2,
          .contact-form-box h2 {
            font-size: 1.8rem;
            letter-spacing: 4px;
            margin-bottom: 1.5rem;
          }

          .form-subtitle {
            font-size: 0.8rem;
            margin-bottom: 1.5rem;
          }

          .contact-item {
            margin-bottom: 1.8rem;
            padding-bottom: 1.2rem;
          }

          .contact-item h3 {
            font-size: 1rem;
            margin-bottom: 0.8rem;
          }

          .contact-item p,
          .contact-item a {
            font-size: 0.95rem;
          }

          .form-group {
            margin-bottom: 1.3rem;
          }

          .form-group label {
            font-size: 0.85rem;
            margin-bottom: 0.8rem;
          }

          .form-group input,
          .form-group select,
          .form-group textarea {
            padding: 0.9rem 1.1rem;
            font-size: 0.9rem;
          }

          .form-group textarea {
            min-height: 120px;
          }

          .submit-btn {
            padding: 1.2rem 2.5rem;
            font-size: 0.95rem;
            letter-spacing: 2.5px;
          }

          .map-section {
            padding: 4rem 4%;
          }

          .map-header {
            margin-bottom: 2.5rem;
          }

          .map-header h2 {
            font-size: 2.5rem;
            letter-spacing: 5px;
            margin-bottom: 0.8rem;
          }

          .map-header p {
            font-size: 0.9rem;
          }

          .map-wrapper {
            height: 350px;
          }
        }

        @media (max-width: 479px) {
          .luxury-contact-hero {
            padding: 6rem 4%;
            min-height: 60vh;
          }

          .hero-content h1 {
            font-size: 2.5rem;
            letter-spacing: 4px;
          }

          .luxury-section {
            padding: 3.5rem 4%;
          }

          .section-label {
            font-size: 0.8rem;
            letter-spacing: 2px;
            margin-bottom: 1.2rem;
          }

          .section-title {
            font-size: 2rem;
            letter-spacing: 4px;
            margin-bottom: 1.2rem;
          }

          .contact-grid {
            gap: 2.5rem;
          }

          .contact-info-box,
          .contact-form-box {
            padding: 1.8rem 1.2rem;
          }

          .contact-info-box h2,
          .contact-form-box h2 {
            font-size: 1.6rem;
            letter-spacing: 3px;
            margin-bottom: 1.3rem;
          }

          .form-subtitle {
            font-size: 0.75rem;
            margin-bottom: 1.3rem;
            line-height: 1.7;
          }

          .contact-item {
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
          }

          .contact-item h3 {
            font-size: 0.95rem;
            margin-bottom: 0.6rem;
            letter-spacing: 1.5px;
          }

          .contact-item p,
          .contact-item a {
            font-size: 0.9rem;
            line-height: 1.6;
          }

          .form-group {
            margin-bottom: 1.2rem;
          }

          .form-group label {
            font-size: 0.8rem;
            margin-bottom: 0.7rem;
            letter-spacing: 1.5px;
          }

          .form-group input,
          .form-group select {
            padding: 0.85rem 1rem;
            font-size: 0.85rem;
          }

          .form-group textarea {
            min-height: 110px;
            padding: 1rem 1.2rem;
            font-size: 0.85rem;
          }

          .submit-btn {
            padding: 1.1rem 2.2rem;
            font-size: 0.9rem;
            letter-spacing: 2px;
            margin-top: 1.2rem;
          }

          .success-message,
          .error-message {
            padding: 1.2rem;
            margin-bottom: 2rem;
            font-size: 0.85rem;
          }

          .map-section {
            padding: 3.5rem 4%;
          }

          .map-header {
            margin-bottom: 2rem;
          }

          .map-header h2 {
            font-size: 2rem;
            letter-spacing: 4px;
            margin-bottom: 0.6rem;
          }

          .map-header p {
            font-size: 0.85rem;
          }

          .map-wrapper {
            height: 300px;
          }
        }

        @media (max-width: 374px) {
          .luxury-contact-hero {
            padding: 5rem 3%;
            min-height: 55vh;
          }

          .hero-content h1 {
            font-size: 2rem;
            letter-spacing: 3px;
          }

          .luxury-section {
            padding: 3rem 3%;
          }

          .section-label {
            font-size: 0.75rem;
          }

          .section-title {
            font-size: 1.7rem;
            letter-spacing: 3px;
          }

          .contact-info-box,
          .contact-form-box {
            padding: 1.5rem 1rem;
          }

          .contact-info-box h2,
          .contact-form-box h2 {
            font-size: 1.4rem;
            letter-spacing: 2px;
          }

          .form-subtitle {
            font-size: 0.7rem;
          }

          .contact-item h3 {
            font-size: 0.9rem;
          }

          .contact-item p,
          .contact-item a {
            font-size: 0.85rem;
          }

          .form-group label {
            font-size: 0.75rem;
          }

          .form-group input,
          .form-group select,
          .form-group textarea {
            padding: 0.8rem 0.9rem;
            font-size: 0.8rem;
          }

          .submit-btn {
            padding: 1rem 2rem;
            font-size: 0.85rem;
          }

          .map-header h2 {
            font-size: 1.7rem;
            letter-spacing: 3px;
          }

          .map-header p {
            font-size: 0.8rem;
          }

          .map-wrapper {
            height: 280px;
          }

          .map-section {
            padding: 3rem 3%;
          }
        }

        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          .submit-btn,
          .contact-item a {
            min-height: 44px;
          }

          .form-group input,
          .form-group select {
            min-height: 44px;
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
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
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
                <p><a href="tel:+16494329988">+1 (649) 432-9988</a></p>
              </div>

              <div className="contact-item">
                <h3>Email</h3>
                <p><a href="mailto:info@evergreenmotor.tc">info@evergreenmotor.tc</a></p>
                <p><a href="mailto:sales@evergreenmotor.tc">sales@evergreenmotor.tc</a></p>
              </div>

              <div className="contact-item">
                <h3>Address</h3>
                <p>Evergreen Motors Headquarters</p>
                <p>Regent Village</p>
                <p>Grace Bay, Providenciales</p>
                <p>Turks & Caicos</p>
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
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && errorMessage && (
                <div className="error-message">
                  {errorMessage}
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
                    disabled={submitStatus === 'loading'}
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
                    disabled={submitStatus === 'loading'}
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
                    disabled={submitStatus === 'loading'}
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
                    disabled={submitStatus === 'loading'}
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
                    disabled={submitStatus === 'loading'}
                  />
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={submitStatus === 'loading'}
                >
                  {submitStatus === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="map-header">
          <h2>FIND US</h2>
          <p>Visit us at our Providenciales location</p>
        </div>
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8!2d-72.18076673136004!3d21.795217730892617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQ3JzQyLjgiTiA3MsKwMTAnNTAuOCJX!5e0!3m2!1sen!2s!4v1234567890"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Evergreen Motors Location"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;