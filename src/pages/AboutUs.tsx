import { useEffect, useState, useRef } from 'react';
import { OptimizedBackground } from './ImageOptimizer';

const AboutUs = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

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

  // Lazy load video when hero is in view
  useEffect(() => {
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current && !videoLoaded) {
            setVideoLoaded(true);
            videoObserver.disconnect();
          }
        });
      },
      { rootMargin: '50px' }
    );

    if (videoRef.current) {
      videoObserver.observe(videoRef.current);
    }

    return () => videoObserver.disconnect();
  }, [videoLoaded]);

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
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .video-hero video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.8s ease;
        }

        .video-hero video.loaded {
          opacity: 1;
        }

        .video-placeholder {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.8s ease;
        }

        .video-placeholder.hidden {
          opacity: 0;
          pointer-events: none;
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
          position: relative;
          overflow: hidden;
          background-color: #e0e0e0;
        }

        .story-image:hover {
          transform: scale(1.03);
          box-shadow: 0 40px 100px rgba(0,0,0,0.3);
        }

        /* Image Background Sections - Text Overlay Style */
        .image-section {
          min-height: 140vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10rem 5%;
          position: relative;
          will-change: transform;
        }

        .image-section-content {
          max-width: 1000px;
          padding: 0;
          text-align: center;
          background: none;
          backdrop-filter: none;
          box-shadow: none;
        }

        .image-section-content h2 {
          font-size: 4.5rem;
          margin-bottom: 2.5rem;
          font-weight: 400;
          letter-spacing: 8px;
          font-family: 'Cormorant Garamond', serif;
          color: #ffffff;
          text-shadow: 
            3px 3px 6px rgba(0, 0, 0, 0.8),
            -1px -1px 2px rgba(0, 0, 0, 0.6),
            0 0 20px rgba(0, 0, 0, 0.5);
          line-height: 1.2;
        }

        .image-section-content p {
          font-size: 1.4rem;
          line-height: 2.2;
          color: #ffffff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          text-shadow: 
            2px 2px 5px rgba(0, 0, 0, 0.9),
            -1px -1px 2px rgba(0, 0, 0, 0.7),
            0 0 15px rgba(0, 0, 0, 0.6);
          max-width: 900px;
          margin: 0 auto;
        }

        /* Platform Section with 3 Images - IMPROVED */
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
          width: 100%;
        }

        .platform-image {
          background-size: cover;
          background-position: center;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
          transition: transform 0.5s ease, box-shadow 0.5s ease;
          background-color: #e0e0e0;
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 100%;
          min-height: 0;
          min-width: 0;
        }

        .platform-image:hover {
          transform: scale(1.05);
          box-shadow: 0 30px 80px rgba(0,0,0,0.25);
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
          margin-bottom: 1rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          color: #1a1a1a;
        }

        .platform-subtitle {
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 2.5rem;
          font-style: italic;
          font-family: 'Montserrat', sans-serif;
        }

        .platform-text p {
          font-size: 1.15rem;
          line-height: 2;
          color: #555;
          margin-bottom: 2.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .platform-text ul {
          list-style: none;
          padding: 0;
        }

        .platform-text ul li {
          font-size: 1.1rem;
          line-height: 1.9;
          color: #555;
          margin-bottom: 2rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          padding-left: 0;
        }

        .platform-text ul li strong {
          font-weight: 600;
          color: #333;
          display: block;
          margin-bottom: 0.5rem;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .section-title {
            font-size: 3.5rem;
            letter-spacing: 6px;
          }

          .story-item {
            gap: 4rem;
          }

          .story-content h3 {
            font-size: 2.5rem;
          }

          .platform-container {
            gap: 4rem;
          }

          .platform-text h2 {
            font-size: 3rem;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2.5rem;
            letter-spacing: 4px;
            margin-bottom: 3rem;
          }

          .story-item {
            grid-template-columns: 1fr;
            gap: 3rem;
            margin-bottom: 5rem;
          }

          .story-item:nth-child(even) {
            direction: ltr;
          }

          .story-content h3 {
            font-size: 2rem;
          }

          .story-content p {
            font-size: 1.1rem;
          }

          .story-image {
            height: 300px;
          }

          .luxury-section {
            padding: 5rem 5%;
          }

          .platform-section {
            padding: 5rem 5%;
          }

          .platform-container {
            grid-template-columns: 1fr;
            gap: 4rem;
          }

          .image-section {
            min-height: 100vh;
            padding: 6rem 5%;
          }

          .image-section-content {
            padding: 0;
          }

          .image-section-content h2 {
            font-size: 2.5rem;
            letter-spacing: 4px;
            margin-bottom: 1.5rem;
            text-shadow: 
              2px 2px 4px rgba(0, 0, 0, 0.9),
              -1px -1px 2px rgba(0, 0, 0, 0.7),
              0 0 10px rgba(0, 0, 0, 0.6);
          }

          .image-section-content p {
            font-size: 1.1rem;
            line-height: 1.9;
            text-shadow: 
              1px 1px 3px rgba(0, 0, 0, 0.9),
              -1px -1px 1px rgba(0, 0, 0, 0.7),
              0 0 10px rgba(0, 0, 0, 0.6);
          }

          .platform-images {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(3, 250px);
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

          .platform-text h2 {
            font-size: 2.5rem;
          }

          .platform-text p,
          .platform-text ul li {
            font-size: 1rem;
          }

          /* Disable parallax on mobile */
          .image-section {
            background-attachment: scroll !important;
          }
        }

        @media (max-width: 480px) {
          .image-section {
            min-height: 80vh;
            padding: 4rem 5%;
          }

          .image-section-content h2 {
            font-size: 2rem;
            letter-spacing: 3px;
          }

          .image-section-content p {
            font-size: 1rem;
            line-height: 1.8;
          }

          .platform-images {
            grid-template-rows: repeat(3, 200px);
          }

          .section-title {
            font-size: 2rem;
            letter-spacing: 3px;
          }

          .story-content h3 {
            font-size: 1.8rem;
          }

          .platform-text h2 {
            font-size: 2rem;
          }
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .image-section {
            background-attachment: scroll !important;
          }
          
          .fade-in-section,
          .story-image,
          .platform-image {
            transition: none !important;
          }
        }

        @media (max-width: 768px) {
          .video-hero,
          .video-hero video,
          .video-placeholder {
            display: none !important;
            height: 0;
            overflow: hidden;
          }
        }

      `}</style>

      <div className="video-hero" ref={videoRef}>
        {!videoLoaded && (
          <div className="video-placeholder">
            <div style={{ 
              color: 'white', 
              fontSize: '1.2rem', 
              fontFamily: 'Montserrat, sans-serif',
              letterSpacing: '2px'
            }}>
              Loading...
            </div>
          </div>
        )}
        {videoLoaded && (
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="loaded"
            preload="metadata"
            poster="/About.mp4?poster=true"
          >
            <source src="/About.mp4" type="video/mp4" />
          </video>
        )}
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
            <OptimizedBackground
              src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2000&auto=format&fit=crop"
              className="story-image"
              priority={false}
            />
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
            <OptimizedBackground
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop"
              className="story-image"
              priority={false}
            />
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
            <OptimizedBackground
              src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2000&auto=format&fit=crop"
              className="story-image"
              priority={false}
            />
          </div>
        </div>
      </section>

      <OptimizedBackground
        src="/BYD-2000_0.jpg"
        className="image-section fade-in-section"
        priority={false}
        style={{
          backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll'
        }}
      >
        <div className="image-section-content">
          <h2>Innovation in Motion</h2>
          <p>
            BYD's cutting-edge technology represents the pinnacle of electric vehicle engineering. 
            From advanced battery systems to intelligent drive platforms, every innovation is designed 
            to deliver exceptional performance while reducing environmental impact.
          </p>
        </div>
      </OptimizedBackground>

      <OptimizedBackground
        src="/b9f297e0-79c0-11ef-9dff-6e499e6c2dc7.png"
        className="image-section fade-in-section"
        priority={false}
        style={{
          backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll'
        }}
      >
        <div className="image-section-content">
          <h2>Sustainable Future</h2>
          <p>
            We're committed to building a transportation ecosystem that prioritizes sustainability 
            without compromise. Through strategic partnerships and technological advancement, we're 
            making electric mobility accessible to everyone.
          </p>
        </div>
      </OptimizedBackground>

      <section className="platform-section fade-in-section">
        <div className="platform-container">
          <div className="platform-images">
            <OptimizedBackground
              src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2000&auto=format&fit=crop"
              className="platform-image"
              priority={false}
            />
            <OptimizedBackground
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop"
              className="platform-image"
              priority={false}
            />
            <OptimizedBackground
              src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2000&auto=format&fit=crop"
              className="platform-image"
              priority={false}
            />
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