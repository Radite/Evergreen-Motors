import React, { useState } from 'react';
import { MapPin, Zap, Clock, Navigation } from 'lucide-react';

const ChargingLocationsPage: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const chargingStations = [
    { id: 1, name: 'Grace Bay Hub', island: 'Providenciales', address: 'Grace Bay Road', type: 'Fast Charge', power: '50kW', hours: '24/7', lat: 21.79535210953533, lng: -72.18081954423658 },
    { id: 2, name: 'Downtown Provo Station', island: 'Providenciales', address: 'Leeward Highway', type: 'Rapid Charge', power: '150kW', hours: '24/7', lat: 21.7814, lng: -72.2731 },
    { id: 3, name: 'Airport Charging Point', island: 'Providenciales', address: 'PLS International Airport', type: 'Fast Charge', power: '75kW', hours: '24/7', lat: 21.7736, lng: -72.2658 },
    { id: 4, name: 'Turtle Cove Marina', island: 'Providenciales', address: 'Turtle Cove', type: 'Standard Charge', power: '22kW', hours: '6AM - 10PM', lat: 21.7923, lng: -72.2589 },
    { id: 5, name: 'Grand Turk Port', island: 'Grand Turk', address: 'Cockburn Town', type: 'Fast Charge', power: '50kW', hours: '24/7', lat: 21.4664, lng: -71.1363 },
  ];

  // Create Google Maps URL with all markers
  const createMapUrl = () => {
    const center = '21.7941,-72.2052'; // Center on Turks & Caicos
    const markers = chargingStations.map(station => 
      `markers=color:red%7C${station.lat},${station.lng}`
    ).join('&');
    return `https://maps.googleapis.com/maps/api/staticmap?center=${center}&zoom=10&size=800x600&maptype=roadmap&${markers}&key=AIzaSyBrJ33q-qW0O4Ey5W_WUJmUUNwPCmS3cvM`;
  };

  return (
    <div style={{ fontFamily: 'Montserrat, Arial, sans-serif', color: '#252728', backgroundColor: '#fff' }}>
      {/* Hero Section */}
      <div style={{ position: 'relative', width: '100%', height: '120vh', overflow: 'hidden' }}>
        <img 
          src="/Charging-Locations/Banner.jpeg" 
          alt="Charging Locations Banner"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1
        }} />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#fff',
          textAlign: 'center',
          zIndex: 2,
          width: '90%',
          maxWidth: '1200px'
        }}>
          <h1 style={{ fontSize: '64px', fontWeight: 700, margin: 0, letterSpacing: '-1px' }}>
            Charging Locations
          </h1>
          <p style={{ fontSize: '20px', marginTop: '24px', fontWeight: 300, opacity: 0.9 }}>
            Power up across Turks & Caicos Islands
          </p>
          <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', marginTop: '40px', fontSize: '14px', fontWeight: 500 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Zap size={20} />
              <span>{chargingStations.length} Stations</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MapPin size={20} />
              <span>2 Islands</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Clock size={20} />
              <span>Most 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Map & Locations Section */}
      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '80px 20px' }}>
        <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
          
          {/* Map Container */}
          <div style={{ flex: '1.2', position: 'sticky', top: '20px' }}>
            <div style={{
              position: 'relative',
              width: '100%',
              height: '600px',
              backgroundColor: '#f0f4f8',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
            }}>
              {/* Embedded Google Map */}
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=21.7941,-72.2052&zoom=11&maptype=roadmap`}
              ></iframe>
              
              {/* Legend */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                backgroundColor: 'rgba(255,255,255,0.95)',
                padding: '15px 20px',
                borderRadius: '8px',
                fontSize: '13px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                zIndex: 10
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div style={{ width: '12px', height: '12px', backgroundColor: '#e63946', borderRadius: '50%' }} />
                  <span style={{ fontWeight: 600 }}>Charging Station</span>
                </div>
                <div style={{ fontSize: '11px', color: '#666', marginTop: '4px' }}>
                  Click stations below for details
                </div>
              </div>
            </div>
          </div>

          {/* Locations List */}
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '10px', letterSpacing: '-0.5px' }}>
              All Charging Stations
            </h2>
            
            {chargingStations.map((station) => (
              <div
                key={station.id}
                onClick={() => setSelectedLocation(station.id === selectedLocation ? null : station.id)}
                style={{
                  padding: '28px',
                  backgroundColor: selectedLocation === station.id ? '#f8f9fa' : '#fff',
                  border: selectedLocation === station.id ? '2px solid #252728' : '1px solid #e9ecef',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: selectedLocation === station.id ? '0 8px 24px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.04)'
                }}
                onMouseEnter={(e) => {
                  if (selectedLocation !== station.id) {
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)';
                    e.currentTarget.style.borderColor = '#dee2e6';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedLocation !== station.id) {
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                    e.currentTarget.style.borderColor = '#e9ecef';
                  }
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>
                      {station.name}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '14px', marginBottom: '12px' }}>
                      <MapPin size={16} />
                      <span>{station.address}, {station.island}</span>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '20px', marginTop: '16px', flexWrap: 'wrap' }}>
                      <div>
                        <div style={{ fontSize: '11px', color: '#666', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Type</div>
                        <div style={{ fontSize: '15px', fontWeight: 600, marginTop: '4px', color: '#252728' }}>{station.type}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '11px', color: '#666', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Power</div>
                        <div style={{ fontSize: '15px', fontWeight: 600, marginTop: '4px', color: '#252728' }}>{station.power}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '11px', color: '#666', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Hours</div>
                        <div style={{ fontSize: '15px', fontWeight: 600, marginTop: '4px', color: '#252728' }}>{station.hours}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: selectedLocation === station.id ? '#252728' : '#f8f9fa',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}>
                    <Zap size={20} color={selectedLocation === station.id ? '#fff' : '#252728'} />
                  </div>
                </div>
                
                {selectedLocation === station.id && (
                  <div style={{ 
                    marginTop: '20px', 
                    paddingTop: '20px', 
                    borderTop: '1px solid #dee2e6'
                  }}>
                    <a
                      href={`https://maps.google.com/?q=${station.lat},${station.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '12px 28px',
                        backgroundColor: '#252728',
                        color: '#fff',
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '14px',
                        borderRadius: '6px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#3a3b3d';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#252728';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <Navigation size={16} />
                      Get Directions
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div style={{ backgroundColor: '#f8f9fa', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '50px', textAlign: 'center', letterSpacing: '-0.5px' }}>
            Charging Made Simple
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '40px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
              <div style={{ width: '50px', height: '50px', backgroundColor: '#252728', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Zap size={24} color="#fff" />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>Fast Charging</h3>
              <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#666' }}>
                Most stations offer fast charging capabilities, getting you back on the road quickly.
              </p>
            </div>
            <div style={{ padding: '40px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
              <div style={{ width: '50px', height: '50px', backgroundColor: '#252728', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Clock size={24} color="#fff" />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>24/7 Access</h3>
              <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#666' }}>
                Many charging stations are available around the clock for your convenience.
              </p>
            </div>
            <div style={{ padding: '40px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
              <div style={{ width: '50px', height: '50px', backgroundColor: '#252728', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <MapPin size={24} color="#fff" />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>Strategic Locations</h3>
              <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#666' }}>
                Conveniently located near popular destinations and key areas across the islands.
              </p>
            </div>
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', gap: '15px' }}>
                <input 
                  type="text" 
                  placeholder="First Name"
                  style={{
                    flex: 1,
                    padding: '15px',
                    border: '1px solid #E7E7E7',
                    fontSize: '16px',
                    outline: 'none',
                    borderRadius: '4px'
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
                    outline: 'none',
                    borderRadius: '4px'
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
                type="button"
                style={{
                  padding: '12px 50px',
                  backgroundColor: '#252728',
                  color: '#fff',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  alignSelf: 'center',
                  borderRadius: '4px'
                }}
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 991px) {
          h1 {
            font-size: 36px !important;
          }
          h2 {
            font-size: 28px !important;
          }
          div[style*="display: flex"] {
            flex-direction: column !important;
          }
          div[style*="position: sticky"] {
            position: relative !important;
            top: auto !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ChargingLocationsPage;