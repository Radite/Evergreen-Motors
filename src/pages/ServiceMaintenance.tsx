import React from 'react';

const ServiceMaintenancePage: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Montserrat, Arial, sans-serif', color: '#252728' }}>
      {/* Banner Section */}
      <div style={{ position: 'relative', width: '100%', height: '80vh', overflow: 'hidden' }}>
        <picture>
          <source media="(max-width: 991px)" srcSet="/images/service-banner-mob.jpg" />
          <img 
            src="/Service-Maintenance/Banner.png" 
            alt="Service Banner"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </picture>

        <div style={{
          position: 'absolute',
          top: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#fff',
          zIndex: 2,
          textAlign: 'center',
          width: '90%',
          maxWidth: '1200px'
        }}>
          <h1 style={{ fontSize: '34px', fontWeight: 600, margin: 0 }}>
            BYD UK Service & Maintenance
          </h1>
          <p style={{ fontSize: '16px', marginTop: '20px' }}>
            To make sure everything runs smoothly, our service is specifically designed for you and your beloved car.
          </p>
        </div>
      </div>

      {/* Centered Overlapping Image */}
      <div style={{ 
        maxWidth: 'calc(100% - 80px)', 
        margin: '0 auto',
        marginLeft: '100px',
        marginRight: '100px',
        height: '80vh',
        position: 'relative',
        top: '-50vh',
        marginBottom: '-20vh',
        zIndex: 3
      }}>
        <img 
          src="/Service-Maintenance/Banner2.jpg" 
          alt="Service Overview"
          style={{ 
            width: '100%', 
            height: '100vh', 
            objectFit: 'cover',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
          }}
        />
      </div>

      {/* Service Cards Section */}
      <div style={{ maxWidth: '1600px', margin: '0px auto', padding: '0 20px' }}>
        {/* Warranty Card */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#F7F7F7',
          padding: '64px',
          marginBottom: '40px',
          gap: '60px'
        }}>
          <div style={{ flex: 1 }}>
            <picture>
              <source media="(max-width: 991px)" srcSet="/images/warranty-mob.png" />
              <img 
                src="/Service-Maintenance/1.png" 
                alt="Warranty"
                style={{ width: '100%', height: 'auto' }}
              />
            </picture>
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Warranty</h2>
            <ul style={{ fontSize: '14px', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li>A comprehensive warranty policy is in place for you. For more warranty details, please contact the local BYD dealer.</li>
            </ul>
            <a 
              href="/warranty-policy" 
              style={{
                display: 'inline-block',
                marginTop: '20px',
                padding: '10px 50px',
                backgroundColor: '#252728',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '16px',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.color = '#252728';
                e.currentTarget.style.border = '1px solid #252728';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#252728';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.border = 'none';
              }}
            >
              Warranty Policy
            </a>
          </div>
        </div>

        {/* Maintenance/Repair Card */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#F7F7F7',
          padding: '64px',
          marginBottom: '40px',
          gap: '60px',
          flexDirection: 'row-reverse'
        }}>
          <div style={{ flex: 1 }}>
            <picture>
              <img 
                src="/Service-Maintenance/2.jpg" 
                alt="Maintenance"
                style={{ width: '100%', height: 'auto' }}
              />
            </picture>
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Maintenance / Repair</h2>
            <ul style={{ fontSize: '14px', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li>A timely, accessible and enjoyable service, just for you.</li>
            </ul>
            <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
              <a 
                href="/owners-manual" 
                style={{
                  display: 'inline-block',
                  padding: '10px 50px',
                  backgroundColor: '#252728',
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '16px'
                }}
              >
                Owner's Manual
              </a>
              <a 
                href="/emergency-response" 
                style={{
                  display: 'inline-block',
                  padding: '10px 50px',
                  backgroundColor: '#252728',
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '16px'
                }}
              >
                Emergency Response Guide
              </a>
            </div>
          </div>
        </div>

        {/* Spare Parts Card */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#F7F7F7',
          padding: '64px',
          marginBottom: '40px',
          gap: '60px'
        }}>
          <div style={{ flex: 1 }}>
            <picture>
              <img 
                src="/Service-Maintenance/3.jpg" 
                alt="Spare Parts"
                style={{ width: '100%', height: 'auto' }}
              />
            </picture>
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Spare Parts</h2>
            <ul style={{ fontSize: '14px', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li>BYD genuine spare parts professionally provide efficient supply and reasonable price for your vehicles.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div style={{ backgroundColor: '#F7F7F7', padding: '64px 20px' }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '40px' }}>
            Stay up to date of the latest news from BYD
          </h3>
          <div style={{ maxWidth: '880px', margin: '0 auto' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', gap: '15px' }}>
                <input 
                  type="text" 
                  placeholder="First Name"
                  style={{
                    flex: 1,
                    padding: '15px',
                    border: '1px solid #E7E7E7',
                    fontSize: '16px',
                    outline: 'none'
                  }}
                />
                <input 
                  type="email" 
                  placeholder="Email Address"
                  style={{
                    flex: 1,
                    padding: '15px',
                    border: '1px solid #E7E7E7',
                    fontSize: '16px',
                    outline: 'none'
                  }}
                />
              </div>
              <div style={{ textAlign: 'left' }}>
                <label style={{ display: 'flex', alignItems: 'center', fontSize: '12px', gap: '10px' }}>
                  <input type="checkbox" />
                  <span>
                    I consent to my personal data being used to receive all relevant BYD email updates. 
                    For more information, please see our <a href="/privacy" style={{ color: '#252728', textDecoration: 'underline' }}>privacy policy</a>.
                  </span>
                </label>
              </div>
              <button 
                type="submit"
                style={{
                  padding: '12px 50px',
                  backgroundColor: '#252728',
                  color: '#fff',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  alignSelf: 'center'
                }}
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 991px) {
          h1 {
            font-size: 32px !important;
          }
          div[style*="flex"] {
            flex-direction: column !important;
          }
          div[style*="padding: 64px"] {
            padding: 30px 20px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceMaintenancePage;