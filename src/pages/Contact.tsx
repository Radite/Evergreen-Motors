import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
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
  };

  return (
    <div>
      <style>{`
        .luxury-contact-hero {
          min-height: 60vh;
          background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
                      url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2000') center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          background-attachment: fixed;
        }

        .hero-content h1 {
          font-size: 4.5rem;
          margin-bottom: 1.5rem;
          font-weight: 300;
          font-family: 'Montserrat', sans-serif;
          letter-spacing: 3px;
          text-shadow: 1px 1px 10px rgba(0,0,0,0.5);
        }

        .hero-content p {
          font-size: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 3px;
          text-shadow: 1px 1px 10px rgba(0,0,0,0.5);
        }

        .luxury-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 8rem 5%;
          background-attachment: fixed;
        }

        .contact-info-section {
          background: linear-gradient(rgba(255,255,255,0.97), rgba(255,255,255,0.97)),
                      url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000') center/cover;
        }

        .reasons-section {
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
                      url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000') center/cover;
          color: white;
        }

        .section-content {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
        }

        .contact-info-box {
          background: rgba(255,255,255,0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0,0,0,0.05);
          padding: 4rem;
        }

        .contact-info-box h2 {
          font-size: 3rem;
          margin-bottom: 3rem;
          font-weight: 300;
          letter-spacing: 4px;
          font-family: 'Cormorant Garamond', serif;
          color: #4a9eff;
        }

        .contact-item {
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }

        .contact-item:last-child {
          border-bottom: none;
        }

        .contact-item h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: #333;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 2px;
        }

        .contact-item p,
        .contact-item a {
          font-size: 1.1rem;
          color: #666;
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
          background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(250,250,255,0.95) 100%);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(74, 158, 255, 0.15);
          padding: 4rem;
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
        }

        .contact-form-box h2 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 300;
          letter-spacing: 4px;
          font-family: 'Cormorant Garamond', serif;
          color: #4a9eff;
        }

        .form-subtitle {
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 3rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
        }

        .form-group {
          margin-bottom: 2.5rem;
          position: relative;
        }

        .form-group label {
          display: block;
          font-size: 0.95rem;
          margin-bottom: 0.8rem;
          color: #333;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 1.2rem 1.8rem;
          font-size: 1.05rem;
          border: none;
          border-bottom: 2px solid rgba(0,0,0,0.1);
          background: transparent;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          transition: all 0.4s ease;
          color: #333;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-bottom-color: #4a9eff;
          background: rgba(74, 158, 255, 0.03);
          padding-left: 2rem;
        }

        .form-group textarea {
          min-height: 180px;
          resize: vertical;
          border: 2px solid rgba(0,0,0,0.1);
          padding: 1.5rem 1.8rem;
        }

        .form-group textarea:focus {
          border-color: #4a9eff;
          padding-left: 1.8rem;
        }

        .form-group select {
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%234a9eff' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1.5rem center;
          padding-right: 3rem;
        }

        .submit-btn {
          width: 100%;
          padding: 1.5rem;
          background: linear-gradient(135deg, #4a9eff 0%, #357abd 100%);
          color: white;
          border: none;
          font-size: 1.1rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 10px 30px rgba(74, 158, 255, 0.3);
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
          box-shadow: 0 15px 40px rgba(74, 158, 255, 0.5);
        }

        .submit-btn:active {
          transform: translateY(-1px);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .success-message {
          background: linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.05) 100%);
          border: 1px solid rgba(76, 175, 80, 0.3);
          color: #2e7d32;
          padding: 1.5rem;
          margin-bottom: 2.5rem;
          text-align: center;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 1px;
          transition: all 0.4s ease;
          box-shadow: 0 5px 15px rgba(76, 175, 80, 0.1);
        }

        .map-box {
          height: 100%;
          min-height: 600px;
          background: rgba(0,0,0,0.05);
          overflow: hidden;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .section-title {
          font-size: 4rem;
          text-align: center;
          margin-bottom: 4rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
        }

        .luxury-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
        }

        .luxury-card {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 3rem;
          transition: all 0.5s ease;
          cursor: pointer;
        }

        .luxury-card:hover {
          transform: translateY(-15px);
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.3);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }

        .card-title {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 2px;
        }

        .card-description {
          line-height: 1.8;
          opacity: 0.85;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 3rem;
          }
          
          .section-title {
            font-size: 2.5rem;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }

          .luxury-cards-grid {
            grid-template-columns: 1fr;
          }

          .contact-info-box,
          .contact-form-box {
            padding: 2rem;
          }
        }
      `}</style>

      <div className="luxury-contact-hero">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with BYD</p>
        </div>
      </div>

      <section className="luxury-section contact-info-section">
        <div className="section-content">
          <div className="contact-grid">
            <div className="contact-info-box">
              <h2>Get In Touch</h2>
              
              <div className="contact-item">
                <h3>📞 Phone</h3>
                <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
              </div>

              <div className="contact-item">
                <h3>📧 Email</h3>
                <p><a href="mailto:info@byd.com">info@byd.com</a></p>
                <p><a href="mailto:sales@byd.com">sales@byd.com</a></p>
              </div>

              <div className="contact-item">
                <h3>📍 Address</h3>
                <p>BYD Headquarters</p>
                <p>3009 BYD Road</p>
                <p>Shenzhen, Guangdong</p>
                <p>China</p>
              </div>

              <div className="contact-item">
                <h3>🕒 Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="contact-form-box">
              <h2>Send a Message</h2>
              <p className="form-subtitle">We'd love to hear from you. Fill out the form below and we'll be in touch shortly.</p>
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  ✓ Thank you! Your message has been sent successfully.
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

      <section className="luxury-section reasons-section">
        <div className="section-content">
          <h2 className="section-title">Why Contact Us?</h2>
          <div className="luxury-cards-grid">
            <div className="luxury-card">
              <h3 className="card-title">🚗 Vehicle Inquiries</h3>
              <p className="card-description">
                Learn more about our electric vehicle lineup and find the perfect model for your needs.
              </p>
            </div>
            <div className="luxury-card">
              <h3 className="card-title">💼 Business Partnerships</h3>
              <p className="card-description">
                Explore fleet solutions and business partnership opportunities with BYD.
              </p>
            </div>
            <div className="luxury-card">
              <h3 className="card-title">🔧 Service Support</h3>
              <p className="card-description">
                Get assistance with service, maintenance, and technical support for your BYD vehicle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;