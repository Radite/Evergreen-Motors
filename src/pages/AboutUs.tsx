import React, { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease, transform 1s ease;
        }

        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .video-hero {
          height: 100vh;
          position: relative;
          overflow: hidden;
        }

        .video-hero video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .luxury-section {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 8rem 5%;
        }

        /* Story Section */
        .story-section {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        .section-content {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .section-title {
          font-size: 4.5rem;
          text-align: center;
          margin-bottom: 5rem;
          font-weight: 300;
          letter-spacing: 8px;
          font-family: 'Cormorant Garamond', serif;
          color: #1a1a1a;
        }

        .story-item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
          margin-bottom: 8rem;
        }

        .story-item:last-child {
          margin-bottom: 0;
        }

        .story-item:nth-child(even) {
          direction: rtl;
        }

        .story-item:nth-child(even) > * {
          direction: ltr;
        }

        .story-content h3 {
          font-size: 3rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 4px;
          font-family: 'Cormorant Garamond', serif;
          color: #1a1a1a;
        }

        .story-content p {
          font-size: 1.2rem;
          line-height: 2;
          color: #555;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .story-image {
          height: 450px;
          background-size: cover;
          background-position: center;
          box-shadow: 0 30px 80px rgba(0,0,0,0.2);
          transition: all 0.6s ease;
        }

        .story-image:hover {
          transform: scale(1.03);
          box-shadow: 0 40px 100px rgba(0,0,0,0.3);
        }

        /* Image Background Sections */
        .image-section {
          min-height: 120vh;
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8rem 5%;
          position: relative;
        }

        .image-section-content {
          max-width: 900px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 4rem;
          box-shadow: 0 30px 80px rgba(0,0,0,0.3);
        }

        .image-section-content h2 {
          font-size: 3.5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          color: #1a1a1a;
        }

        .image-section-content p {
          font-size: 1.2rem;
          line-height: 2;
          color: #555;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        /* Platform Section with 3 Images */
        .platform-section {
          background: white;
          padding: 8rem 5%;
          min-height: 80vh;
          display: flex;
          align-items: center;
        }

        .platform-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .platform-images {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 1.5rem;
          height: 600px;
        }

        .platform-image {
          background-size: cover;
          background-position: center;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
          transition: transform 0.5s ease;
        }

        .platform-image:hover {
          transform: scale(1.05);
        }

        .platform-image:first-child {
          grid-column: 1 / 2;
          grid-row: 1 / 3;
        }

        .platform-image:nth-child(2) {
          grid-column: 2 / 3;
          grid-row: 1 / 2;
        }

        .platform-image:nth-child(3) {
          grid-column: 2 / 3;
          grid-row: 2 / 3;
        }

        .platform-text h2 {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          color: #1a1a1a;
        }

        .platform-subtitle {
          font-size: 1.3rem;
          margin-bottom: 2.5rem;
          color: #4a9eff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 2px;
        }

        .platform-text p {
          font-size: 1.15rem;
          line-height: 2;
          color: #555;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          margin-bottom: 2rem;
        }

        .platform-text ul {
          list-style: none;
          padding: 0;
        }

        .platform-text li {
          font-size: 1.05rem;
          line-height: 2;
          color: #555;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          margin-bottom: 1rem;
          padding-left: 2rem;
          position: relative;
        }

        .platform-text li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: #4a9eff;
          font-weight: 600;
        }

        .platform-text strong {
          color: #1a1a1a;
          font-weight: 500;
        }

        @media (max-width: 1024px) {
          .section-title {
            font-size: 3rem;
          }

          .story-item, .platform-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .story-item:nth-child(even) {
            direction: ltr;
          }

          .platform-images {
            height: 500px;
          }
        }

        @media (max-width: 768px) {
          .luxury-section {
            padding: 5rem 5%;
          }

          .section-title {
            font-size: 2.5rem;
            letter-spacing: 4px;
          }

          .image-section-content {
            padding: 3rem 2rem;
          }

          .image-section-content h2 {
            font-size: 2.5rem;
          }

          .platform-images {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(3, 200px);
            height: auto;
          }

          .platform-image:first-child {
            grid-column: 1;
            grid-row: 1;
          }

          .platform-image:nth-child(2) {
            grid-column: 1;
            grid-row: 2;
          }

          .platform-image:nth-child(3) {
            grid-column: 1;
            grid-row: 3;
          }
        }
      `}</style>

      <div className="video-hero">
        <video autoPlay loop muted playsInline>
          <source src="/About.mp4" type="video/mp4" />
        </video>
      </div>

      <section className="luxury-section story-section fade-in-section">
        <div className="section-content">
          <h2 className="section-title">Our Story</h2>
          
          <div className="story-item">
            <div className="story-content">
              <h3>The Beginning</h3>
              <p>
                Evergreen Motors was founded on a simple belief: that the future of transportation should 
                be sustainable without sacrificing the driving experience. We saw an opportunity to bridge 
                the gap between environmental responsibility and automotive excellence.
              </p>
            </div>
            <div 
              className="story-image" 
              style={{background: "url('https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2000') center/cover"}}
            ></div>
          </div>

          <div className="story-item">
            <div className="story-content">
              <h3>Growth & Innovation</h3>
              <p>
                As we expanded, we remained committed to our core values. Each new location, each partnership, 
                and each customer relationship has been built on trust, transparency, and a shared vision 
                for a sustainable future.
              </p>
            </div>
            <div 
              className="story-image" 
              style={{background: "url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000') center/cover"}}
            ></div>
          </div>

          <div className="story-item">
            <div className="story-content">
              <h3>Looking Forward</h3>
              <p>
                Today, we're proud to be at the forefront of the electric vehicle revolution. But we're 
                not done yet. We continue to innovate, expand, and refine our offerings to ensure that 
                every customer experiences the future of driving.
              </p>
            </div>
            <div 
              className="story-image" 
              style={{background: "url('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2000') center/cover"}}
            ></div>
          </div>
        </div>
      </section>

      <section className="image-section fade-in-section" style={{backgroundImage: "url('/BYD-2000_0.jpg')"}}>
        <div className="image-section-content">
          <h2>Innovation in Motion</h2>
          <p>
            BYD's cutting-edge technology represents the pinnacle of electric vehicle engineering. 
            From advanced battery systems to intelligent drive platforms, every innovation is designed 
            to deliver exceptional performance while reducing environmental impact.
          </p>
        </div>
      </section>

      <section className="image-section fade-in-section" style={{backgroundImage: "url('/b9f297e0-79c0-11ef-9dff-6e499e6c2dc7.png')"}}>
        <div className="image-section-content">
          <h2>Sustainable Future</h2>
          <p>
            We're committed to building a transportation ecosystem that prioritizes sustainability 
            without compromise. Through strategic partnerships and technological advancement, we're 
            making electric mobility accessible to everyone.
          </p>
        </div>
      </section>

      <section className="platform-section fade-in-section">
        <div className="platform-container">
          <div className="platform-images">
            <div className="platform-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2000')"}}></div>
            <div className="platform-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000')"}}></div>
            <div className="platform-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2000')"}}></div>
          </div>
          <div className="platform-text">
            <h2>Yisifang Platform</h2>
            <p className="platform-subtitle">(also known as the e⁴ platform)</p>
            <p>
              The innovative distributed drive structure in the new energy vehicle industry reforms the 
              traditional automotive power system from three dimensions: perception, decision-making, and execution.
            </p>
            <ul>
              <li>
                <strong>Full integration of vehicle perception:</strong> Integrating vehicle sensors and 
                intelligent driving sensors to achieve comprehensive perception of the vehicle environment.
              </li>
              <li>
                <strong>Four-motor independent drive structure:</strong> Self-developed, with four motors 
                enabling independent control of each wheel, applicable to pure electric and hybrid platforms.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;