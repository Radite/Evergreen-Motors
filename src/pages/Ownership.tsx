import { useEffect } from 'react';

const Ownership = () => {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    };

    scrollToHash();

    const handleHashChange = () => {
      scrollToHash();
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        .luxury-ownership-hero {
          height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)),
                      url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2400') center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          position: relative;
          background-attachment: fixed;
        }

        .hero-content {
          z-index: 1;
          max-width: 1000px;
          padding: 3rem;
          animation: heroFade 1.8s ease-out;
        }

        @keyframes heroFade {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-content h1 {
          font-size: 6rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 12px;
          font-family: 'Cormorant Garamond', serif;
          text-shadow: 2px 2px 20px rgba(0,0,0,0.5);
        }

        .hero-content .subtitle {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #4a9eff;
        }

        .hero-content p {
          font-size: 1.3rem;
          line-height: 1.8;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
          text-shadow: 1px 1px 10px rgba(0,0,0,0.5);
          max-width: 900px;
          margin: 0 auto;
        }

        .luxury-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 8rem 5%;
          background-attachment: fixed;
          scroll-margin-top: 80px;
        }

        .service-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        }

        .section-container {
          max-width: 1400px;
          width: 100%;
        }

        .service-header {
          text-align: center;
          margin-bottom: 6rem;
        }

        .service-header h2 {
          font-size: 4.5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          color: #333;
        }

        .service-subtitle {
          font-size: 1.4rem;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          margin-bottom: 5rem;
        }

        .service-card {
          background: white;
          border: 1px solid rgba(0,0,0,0.08);
          overflow: hidden;
          transition: all 0.5s ease;
          position: relative;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #4a9eff 0%, #00d4ff 100%);
          transform: scaleX(0);
          transition: transform 0.5s ease;
          z-index: 2;
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 30px 70px rgba(74, 158, 255, 0.2);
          border-color: rgba(74, 158, 255, 0.3);
        }

        .service-image {
          height: 250px;
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
          transition: transform 0.5s ease;
        }

        .service-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%);
        }

        .service-card:hover .service-image {
          transform: scale(1.05);
        }

        .service-content {
          padding: 2.5rem;
        }

        .service-title {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
          color: #333;
        }

        .service-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .service-intervals {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.05) 0%, rgba(53, 122, 189, 0.05) 100%);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(74, 158, 255, 0.2);
          padding: 4rem;
          margin-top: 5rem;
        }

        .service-intervals h3 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 3px;
          color: #4a9eff;
          text-align: center;
        }

        .intervals-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .interval-item {
          padding: 2rem;
          background: white;
          border: 1px solid rgba(74, 158, 255, 0.1);
          transition: all 0.3s ease;
        }

        .interval-item:hover {
          border-color: rgba(74, 158, 255, 0.3);
          transform: translateX(10px);
        }

        .interval-item strong {
          display: block;
          font-size: 1.4rem;
          color: #4a9eff;
          margin-bottom: 0.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
        }

        .interval-item span {
          font-size: 1.1rem;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .roadside-section {
          background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
          color: white;
        }

        .roadside-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .roadside-header h2 {
          font-size: 4.5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          background: linear-gradient(135deg, #4a9eff 0%, #00d4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .roadside-subtitle {
          font-size: 1.3rem;
          color: rgba(255,255,255,0.8);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .roadside-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          margin-bottom: 5rem;
        }

        .roadside-card {
          background: rgba(74, 158, 255, 0.05);
          border: 1px solid rgba(74, 158, 255, 0.2);
          overflow: hidden;
          transition: all 0.5s ease;
        }

        .roadside-card:hover {
          transform: translateY(-10px);
          background: rgba(74, 158, 255, 0.1);
          border-color: rgba(74, 158, 255, 0.4);
          box-shadow: 0 20px 60px rgba(74, 158, 255, 0.3);
        }

        .roadside-image {
          height: 200px;
          background-size: cover;
          background-position: center;
          position: relative;
          transition: transform 0.5s ease;
        }

        .roadside-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.5) 100%);
        }

        .roadside-card:hover .roadside-image {
          transform: scale(1.05);
        }

        .roadside-content {
          padding: 2.5rem;
          text-align: center;
        }

        .roadside-card h3 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
          color: #4a9eff;
        }

        .roadside-card p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.7);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .emergency-contact {
          text-align: center;
          padding: 4rem;
          background: rgba(74, 158, 255, 0.05);
          border: 2px solid rgba(74, 158, 255, 0.3);
        }

        .emergency-contact h3 {
          font-size: 2rem;
          margin-bottom: 2rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
          color: #4a9eff;
        }

        .emergency-number {
          font-size: 3rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 4px;
          color: white;
          margin-bottom: 1rem;
        }

        .emergency-number a {
          color: white;
          text-decoration: none;
          transition: color 0.3s;
        }

        .emergency-number a:hover {
          color: #4a9eff;
        }

        .emergency-availability {
          font-size: 1.2rem;
          color: rgba(255,255,255,0.6);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 2px;
        }

        .warranty-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 8rem 5%;
          scroll-margin-top: 80px;
        }

        .warranty-container {
          max-width: 1400px;
          width: 100%;
        }

        .warranty-header {
          text-align: center;
          margin-bottom: 6rem;
        }

        .warranty-header h2 {
          font-size: 4.5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          color: #333;
        }

        .warranty-header p {
          font-size: 1.4rem;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .warranty-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          margin-bottom: 5rem;
        }

        .warranty-card {
          background: white;
          border: 1px solid rgba(0,0,0,0.08);
          overflow: hidden;
          transition: all 0.5s ease;
          position: relative;
        }

        .warranty-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #4a9eff 0%, #00d4ff 100%);
          transform: scaleX(0);
          transition: transform 0.5s ease;
          z-index: 2;
        }

        .warranty-card:hover::before {
          transform: scaleX(1);
        }

        .warranty-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 30px 70px rgba(74, 158, 255, 0.2);
          border-color: rgba(74, 158, 255, 0.3);
        }

        .warranty-image {
          height: 200px;
          background-size: cover;
          background-position: center;
          position: relative;
          transition: transform 0.5s ease;
        }

        .warranty-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%);
        }

        .warranty-card:hover .warranty-image {
          transform: scale(1.05);
        }

        .warranty-content {
          padding: 2.5rem;
          text-align: center;
        }

        .warranty-card h3 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
          color: #333;
        }

        .warranty-period {
          display: block;
          font-size: 1.6rem;
          color: #4a9eff;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 500;
          letter-spacing: 2px;
          margin-bottom: 1.5rem;
        }

        .warranty-card p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .coverage-details {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.05) 0%, rgba(53, 122, 189, 0.05) 100%);
          border: 1px solid rgba(74, 158, 255, 0.2);
          padding: 4rem;
        }

        .coverage-details h3 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 3px;
          color: #4a9eff;
          text-align: center;
        }

        .coverage-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .coverage-item {
          padding: 2rem;
          background: white;
          border: 1px solid rgba(74, 158, 255, 0.1);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .coverage-item:hover {
          border-color: rgba(74, 158, 255, 0.3);
          transform: translateX(10px);
        }

        .coverage-item::before {
          content: '';
          display: inline-block;
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #4a9eff 0%, #00d4ff 100%);
          border-radius: 50%;
          flex-shrink: 0;
        }

        .coverage-item span {
          font-size: 1.1rem;
          color: #333;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
        }

        .membership-section {
          background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
          color: white;
        }

        .membership-header {
          text-align: center;
          margin-bottom: 6rem;
        }

        .membership-header h2 {
          font-size: 4.5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          background: linear-gradient(135deg, #4a9eff 0%, #00d4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .membership-subtitle {
          font-size: 1.3rem;
          color: rgba(255,255,255,0.8);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          margin-bottom: 5rem;
        }

        .benefit-card {
          background: rgba(74, 158, 255, 0.05);
          border: 1px solid rgba(74, 158, 255, 0.2);
          overflow: hidden;
          transition: all 0.5s ease;
        }

        .benefit-card:hover {
          transform: translateY(-10px);
          background: rgba(74, 158, 255, 0.1);
          border-color: rgba(74, 158, 255, 0.4);
          box-shadow: 0 20px 60px rgba(74, 158, 255, 0.3);
        }

        .benefit-image {
          height: 200px;
          background-size: cover;
          background-position: center;
          position: relative;
          transition: transform 0.5s ease;
        }

        .benefit-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.5) 100%);
        }

        .benefit-card:hover .benefit-image {
          transform: scale(1.05);
        }

        .benefit-content {
          padding: 2.5rem;
          text-align: center;
        }

        .benefit-card h3 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
          color: #4a9eff;
        }

        .benefit-card p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.7);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .charge-card-section {
          background: rgba(74, 158, 255, 0.05);
          border: 2px solid rgba(74, 158, 255, 0.3);
          padding: 4rem;
        }

        .charge-card-section h3 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 3px;
          color: #4a9eff;
          text-align: center;
        }

        .charge-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .charge-feature {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .charge-feature strong {
          font-size: 1.3rem;
          color: white;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
        }

        .charge-feature span {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.7);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .membership-contact {
          text-align: center;
          font-size: 1.2rem;
          color: rgba(255,255,255,0.8);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .membership-contact a {
          color: #4a9eff;
          text-decoration: none;
          transition: color 0.3s;
        }

        .membership-contact a:hover {
          color: #00d4ff;
        }

        .charging-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        }

        .charging-header {
          text-align: center;
          margin-bottom: 6rem;
        }

        .charging-header h2 {
          font-size: 4.5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          color: #333;
        }

        .charging-subtitle {
          font-size: 1.4rem;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .charging-options {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          margin-bottom: 5rem;
        }

        .charging-option {
          background: white;
          border: 1px solid rgba(0,0,0,0.08);
          overflow: hidden;
          transition: all 0.5s ease;
        }

        .charging-option:hover {
          transform: translateY(-15px);
          box-shadow: 0 30px 70px rgba(74, 158, 255, 0.2);
          border-color: rgba(74, 158, 255, 0.3);
        }

        .charging-image {
          height: 200px;
          background-size: cover;
          background-position: center;
          position: relative;
          transition: transform 0.5s ease;
        }

        .charging-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%);
        }

        .charging-option:hover .charging-image {
          transform: scale(1.05);
        }

        .charging-content {
          padding: 2.5rem;
          text-align: center;
        }

        .charging-option h3 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
          color: #333;
        }

        .charging-option p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .charging-specs {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.05) 0%, rgba(53, 122, 189, 0.05) 100%);
          border: 1px solid rgba(74, 158, 255, 0.2);
          padding: 4rem;
          margin-top: 5rem;
        }

        .charging-specs h3 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 3px;
          color: #4a9eff;
          text-align: center;
        }

        .specs-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .spec-item {
          padding: 2rem;
          background: white;
          border: 1px solid rgba(74, 158, 255, 0.1);
          text-align: center;
          transition: all 0.3s ease;
        }

        .spec-item:hover {
          border-color: rgba(74, 158, 255, 0.3);
          transform: translateY(-5px);
        }

        .spec-item strong {
          display: block;
          font-size: 1.3rem;
          color: #4a9eff;
          margin-bottom: 1rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
        }

        .spec-item span {
          font-size: 1rem;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .map-section {
          margin-top: 5rem;
          margin-bottom: 5rem;
        }

        .map-section h3 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 3px;
          color: #333;
          text-align: center;
        }

        .map-description {
          font-size: 1.2rem;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          text-align: center;
          max-width: 800px;
          margin: 0 auto 3rem auto;
          line-height: 1.8;
        }

        .map-container {
          background: white;
          border: 1px solid rgba(74, 158, 255, 0.2);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }

        .map-note {
          padding: 2rem;
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.05) 0%, rgba(53, 122, 189, 0.05) 100%);
          font-size: 1rem;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          text-align: center;
          line-height: 1.6;
          border-top: 1px solid rgba(74, 158, 255, 0.1);
        }

        .charging-locations-list {
          padding: 3rem;
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.03) 0%, rgba(53, 122, 189, 0.03) 100%);
        }

        .charging-locations-list h4 {
          font-size: 2rem;
          margin-bottom: 2rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 2px;
          color: #4a9eff;
          text-align: center;
        }

        .locations-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .location-item {
          padding: 1.5rem;
          background: white;
          border: 1px solid rgba(74, 158, 255, 0.1);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        .location-item:hover {
          border-color: rgba(74, 158, 255, 0.3);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(74, 158, 255, 0.15);
        }

        .location-item strong {
          font-size: 1.2rem;
          color: #333;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
        }

        .location-item span {
          font-size: 1rem;
          color: #4a9eff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
        }

        .location-address {
          font-size: 0.9rem;
          color: #999;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          margin-top: 0.5rem;
        }

        @media (max-width: 1024px) {
          .service-grid,
          .roadside-cards,
          .warranty-cards,
          .benefits-grid,
          .charging-options {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .intervals-grid,
          .coverage-grid,
          .charge-features,
          .specs-grid,
          .locations-grid {
            grid-template-columns: 1fr;
          }

          .hero-content h1 {
            font-size: 4rem;
            letter-spacing: 8px;
          }

          .service-header h2,
          .roadside-header h2,
          .warranty-header h2,
          .membership-header h2,
          .charging-header h2 {
            font-size: 3.5rem;
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 3rem;
            letter-spacing: 5px;
          }

          .luxury-section {
            padding: 4rem 5%;
          }
        }
      `}</style>

      <div className="luxury-ownership-hero">
        <div className="hero-content">
          <h1>OWNERSHIP</h1>
          <p className="subtitle">Premium Care for Your Investment</p>
          <p>
            Comprehensive service, unmatched warranty coverage, and 24/7 roadside assistance. 
            Experience ownership excellence with the most reliable electric vehicles on the planet.
          </p>
        </div>
      </div>

      <section id="service" className="luxury-section service-section">
        <div className="section-container">
          <div className="service-header">
            <h2>Service & Maintenance</h2>
            <p className="service-subtitle">
              Expert care from factory-trained technicians ensures your BYD maintains peak performance, 
              reliability, and value throughout its lifetime.
            </p>
          </div>

          <div className="service-grid">
            <div className="service-card">
              <div 
                className="service-image"
                style={{backgroundImage: 'url(https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1200)'}}
              ></div>
              <div className="service-content">
                <h3 className="service-title">Scheduled Maintenance</h3>
                <p className="service-description">
                  Comprehensive service intervals designed to keep your electric vehicle performing 
                  at its absolute best with minimal downtime.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div 
                className="service-image"
                style={{backgroundImage: 'url(https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=1200)'}}
              ></div>
              <div className="service-content">
                <h3 className="service-title">Battery Health Diagnostics</h3>
                <p className="service-description">
                  Advanced diagnostic systems monitor and optimize your Blade Battery's performance, 
                  ensuring maximum range and longevity.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div 
                className="service-image"
                style={{backgroundImage: 'url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200)'}}
              ></div>
              <div className="service-content">
                <h3 className="service-title">Software Updates</h3>
                <p className="service-description">
                  Regular over-the-air and in-service software updates deliver new features, 
                  enhanced performance, and the latest improvements.
                </p>
              </div>
            </div>
          </div>

          <div className="service-intervals">
            <h3>Maintenance Intervals</h3>
            <div className="intervals-grid">
              <div className="interval-item">
                <strong>First Service</strong>
                <span>6 months or 5,000 miles - Complimentary inspection</span>
              </div>
              <div className="interval-item">
                <strong>Regular Service</strong>
                <span>Every 12 months or 12,500 miles</span>
              </div>
              <div className="interval-item">
                <strong>Battery System Check</strong>
                <span>Annual comprehensive battery health assessment</span>
              </div>
              <div className="interval-item">
                <strong>Software Updates</strong>
                <span>As available - often delivered remotely</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="roadside" className="luxury-section roadside-section">
        <div className="section-container">
          <div className="roadside-header">
            <h2>24/7 Roadside Assistance</h2>
            <p className="roadside-subtitle">
              Complete peace of mind with comprehensive roadside support available 24 hours a day, 
              7 days a week, 365 days a year, wherever your journey takes you.
            </p>
          </div>

          <div className="roadside-cards">
            <div className="roadside-card">
              <div 
                className="roadside-image"
                style={{backgroundImage: 'url(https://images.unsplash.com/photo-1632823469883-726d32e7d499?q=80&w=1200)'}}
              ></div>
              <div className="roadside-content">
                <h3>Emergency Repairs</h3>
                <p>
                  On-site minor repairs and expert troubleshooting to get you back on the road 
                  quickly and safely.
                </p>
              </div>
            </div>

            <div className="roadside-card">
              <div 
                className="roadside-image"
                style={{backgroundImage: 'url(https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200)'}}
              ></div>
              <div className="roadside-content">
                <h3>Towing Service</h3>
                <p>
                  Complimentary towing to the nearest authorized service center whenever your 
                  vehicle needs professional attention.
                </p>
              </div>
            </div>

            <div className="roadside-card">
              <div 
                className="roadside-image"
                style={{backgroundImage: 'url(https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200)'}}
              ></div>
              <div className="roadside-content">
                <h3>Emergency Charging</h3>
                <p>
                  Mobile charging assistance delivered to your location if you unexpectedly 
                  run low on battery power.
                </p>
              </div>
            </div>
          </div>

          <div className="emergency-contact">
            <h3>Emergency Contact</h3>
            <div className="emergency-number">
              <a href="tel:+16494329988">+1 (649) 432-9988</a>
            </div>
            <p className="emergency-availability">Available 24/7/365</p>
          </div>
        </div>
      </section>

      <section id="warranty" className="warranty-section">
        <div className="warranty-container">
          <div className="warranty-header">
            <h2>Warranty Coverage</h2>
            <p>
              Industry-leading warranty protection backed by BYD's commitment to quality, 
              reliability, and your complete confidence in your investment.
            </p>
          </div>

          <div className="warranty-cards">
            <div className="warranty-card">
              <div 
                className="warranty-image"
                style={{backgroundImage: 'url(https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200)'}}
              ></div>
              <div className="warranty-content">
                <h3>Vehicle Warranty</h3>
                <span className="warranty-period">6 Years / 150,000 km</span>
                <p>
                  Comprehensive bumper-to-bumper coverage for the entire vehicle including 
                  all major components, systems, and workmanship.
                </p>
              </div>
            </div>

            <div className="warranty-card">
              <div 
                className="warranty-image"
                style={{backgroundImage: 'url(https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?q=80&w=1200)'}}
              ></div>
              <div className="warranty-content">
                <h3>Battery Warranty</h3>
                <span className="warranty-period">8 Years / 160,000 km</span>
                <p>
                  Blade Battery coverage with capacity guarantee ensuring the battery maintains 
                  at least 70% state of health throughout the warranty period.
                </p>
              </div>
            </div>

            <div className="warranty-card">
              <div 
                className="warranty-image"
                style={{backgroundImage: 'url(https://images.unsplash.com/photo-1617886322207-7cc22ce7a22a?q=80&w=1200)'}}
              ></div>
              <div className="warranty-content">
                <h3>Powertrain Warranty</h3>
                <span className="warranty-period">8 Years / 150,000 km</span>
                <p>
                  Electric motor, drive unit, and power electronics fully covered for exceptional 
                  long-term reliability and peace of mind.
                </p>
              </div>
            </div>
          </div>

          <div className="coverage-details">
            <h3>What's Covered</h3>
            <div className="coverage-grid">
              <div className="coverage-item">
                <span>Electric motor and drive system components</span>
              </div>
              <div className="coverage-item">
                <span>Battery pack and battery management system</span>
              </div>
              <div className="coverage-item">
                <span>Charging system and on-board charger</span>
              </div>
              <div className="coverage-item">
                <span>Power electronics and control units</span>
              </div>
              <div className="coverage-item">
                <span>Structural and body components</span>
              </div>
              <div className="coverage-item">
                <span>Interior systems and features</span>
              </div>
              <div className="coverage-item">
                <span>Advanced safety systems</span>
              </div>
              <div className="coverage-item">
                <span>12-year unlimited mileage anti-corrosion warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="membership" className="luxury-section membership-section">
        <div className="section-container">
          <div className="membership-header">
            <h2>Membership & Charge Cards</h2>
            <p className="membership-subtitle">
              Exclusive benefits, priority service, and comprehensive charging network access 
              designed to enhance every aspect of your ownership experience.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div 
                className="benefit-image"
                style={{backgroundImage: 'url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200)'}}
              ></div>
              <div className="benefit-content">
                <h3>Priority Service</h3>
                <p>
                  Skip the wait with priority scheduling and expedited service at our 
                  state-of-the-art facility.
                </p>
              </div>
            </div>

            <div className="benefit-card">
              <div 
                className="benefit-image"
                style={{backgroundImage: 'url(https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?q=80&w=1200)'}}
              ></div>
              <div className="benefit-content">
                <h3>Charging Benefits</h3>
                <p>
                  Access to our charging network with member-exclusive rates and 
                  convenient billing.
                </p>
              </div>
            </div>

            <div className="benefit-card">
              <div 
                className="benefit-image"
                style={{backgroundImage: 'url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200)'}}
              ></div>
              <div className="benefit-content">
                <h3>Exclusive Perks</h3>
                <p>
                  Member-only events, special offers, and early access to new models 
                  and features.
                </p>
              </div>
            </div>
          </div>

          <div className="charge-card-section">
            <h3>Charging Card Benefits</h3>
            <div className="charge-features">
              <div className="charge-feature">
                <strong>Network Access</strong>
                <span>Use at partner charging stations throughout TCI</span>
              </div>
              <div className="charge-feature">
                <strong>Mobile Integration</strong>
                <span>Find, reserve, and pay for charging seamlessly</span>
              </div>
              <div className="charge-feature">
                <strong>Consolidated Billing</strong>
                <span>One monthly statement for all charging sessions</span>
              </div>
              <div className="charge-feature">
                <strong>Usage Analytics</strong>
                <span>Track your sessions, costs, and environmental impact</span>
              </div>
            </div>
            <p className="membership-contact">
              Learn more: <a href="mailto:membership@evergreenmotor.tc">membership@evergreenmotor.tc</a>
            </p>
          </div>
        </div>
      </section>

      <section id="charging-locations" className="luxury-section charging-section">
        <div className="section-container">
          <div className="charging-header">
            <h2>Charging Solutions</h2>
            <p className="charging-subtitle">
              Convenient charging options throughout the Turks and Caicos Islands, with professional 
              installation support for home charging solutions.
            </p>
          </div>

          <div className="charging-options">
            <div className="charging-option">
              <div 
                className="charging-image"
                style={{backgroundImage: 'url(https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200)'}}
              ></div>
              <div className="charging-content">
                <h3>Fast Charging</h3>
                <p>
                  DC fast charging capability with 110kW charging speed, providing 30-80% 
                  charge in approximately 30 minutes.
                </p>
              </div>
            </div>

            <div className="charging-option">
              <div 
                className="charging-image"
                style={{backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200)'}}
              ></div>
              <div className="charging-content">
                <h3>Public Charging</h3>
                <p>
                  Level 2 charging stations at key locations throughout Providenciales 
                  and Grand Turk.
                </p>
              </div>
            </div>

            <div className="charging-option">
              <div 
                className="charging-image"
                style={{backgroundImage: 'url(https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1200)'}}
              ></div>
              <div className="charging-content">
                <h3>Home Charging</h3>
                <p>
                  Professional installation support for residential charging solutions with 
                  expert guidance and quality equipment.
                </p>
              </div>
            </div>
          </div>

          <div className="map-section">
            <h3>Charging Locations in Providenciales</h3>
            <p className="map-description">
              Find convenient charging stations throughout Providenciales, strategically located 
              at key destinations across the island.
            </p>
            <div className="map-container">
              <iframe
                title="Charging Locations in Providenciales, Turks and Caicos"
                width="100%"
                height="600"
                frameBorder="0"
                style={{border: 0, borderRadius: '8px'}}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60266.27257788948!2d-72.30557238398439!3d21.78465289045383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x894d15e4a5b6c7d8%3A0x3f4e5d6c7a8b9c1d!2sProvidenciales%2C%20Turks%20and%20Caicos%20Islands!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
                allowFullScreen
              ></iframe>
              <div className="charging-locations-list">
                <h4>Charging Station Locations</h4>
                <div className="locations-grid">
                  <div className="location-item">
                    <strong>Grace Bay Plaza</strong>
                    <span>Level 2 Charging - 7kW</span>
                    <p className="location-address">Grace Bay Road, Providenciales</p>
                  </div>
                  <div className="location-item">
                    <strong>Providenciales International Airport</strong>
                    <span>DC Fast Charging - 110kW</span>
                    <p className="location-address">Airport Road, Providenciales</p>
                  </div>
                  <div className="location-item">
                    <strong>Evergreen Motors Dealership</strong>
                    <span>DC Fast Charging - 110kW & Level 2</span>
                    <p className="location-address">Regent Village, Grace Bay</p>
                  </div>
                  <div className="location-item">
                    <strong>Blue Haven Resort & Marina</strong>
                    <span>Level 2 Charging - 7kW</span>
                    <p className="location-address">Leeward Highway, Providenciales</p>
                  </div>
                  <div className="location-item">
                    <strong>Beaches Resort - Grace Bay</strong>
                    <span>Level 2 Charging - 7kW</span>
                    <p className="location-address">Lower Bight Road, Grace Bay</p>
                  </div>
                </div>
              </div>
              <div className="map-note">
                Interactive map showing Providenciales with charging station locations marked. 
                Contact us at <a href="tel:+16494329988" style={{color: '#4a9eff', textDecoration: 'none'}}>+1 (649) 432-9988</a> for real-time availability, directions, and access details.
              </div>
            </div>
          </div>

          <div className="charging-specs">
            <h3>Charging Speed Reference</h3>
            <div className="specs-grid">
              <div className="spec-item">
                <strong>Level 1 (120V)</strong>
                <span>3-5 miles per hour</span>
              </div>
              <div className="spec-item">
                <strong>Level 2 (240V)</strong>
                <span>20-30 miles per hour</span>
              </div>
              <div className="spec-item">
                <strong>DC Fast Charging</strong>
                <span>30-80% in 30 minutes</span>
              </div>
              <div className="spec-item">
                <strong>110kW Charging</strong>
                <span>Up to 200 miles in 30 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ownership;