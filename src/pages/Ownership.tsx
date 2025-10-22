import React, { useState } from 'react';
import { MapPin, Zap, Clock, Shield, Wrench, CreditCard, Phone, Navigation, CheckCircle, AlertCircle } from 'lucide-react';

const OwnershipPage: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const chargingStations = [
    { id: 1, name: 'Grace Bay Hub', address: 'Grace Bay Road', type: 'Fast Charge', power: '50kW', hours: '24/7', lat: 21.79535210953533, lng: -72.18081954423658 },
    { id: 2, name: 'Downtown Provo', address: 'Leeward Highway', type: 'Rapid Charge', power: '150kW', hours: '24/7', lat: 21.7814, lng: -72.2731 },
    { id: 3, name: 'Airport Point', address: 'PLS Airport', type: 'Fast Charge', power: '75kW', hours: '24/7', lat: 21.7736, lng: -72.2658 },
    { id: 4, name: 'Turtle Cove Marina', address: 'Turtle Cove', type: 'Standard', power: '22kW', hours: '6AM - 10PM', lat: 21.7923, lng: -72.2589 },
  ];

  return (
    <div style={{ fontFamily: 'Montserrat, Arial, sans-serif', color: '#252728', backgroundColor: '#fff' }}>
      {/* Hero Banner */}
      <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        <img 
          src="/Assistance/Banner.jpg" 
          alt="BYD Ownership"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
          <h1 style={{ fontSize: '64px', fontWeight: 700, color: '#fff', margin: 0, textAlign: 'center', letterSpacing: '-1px' }}>
            BYD Ownership
          </h1>
          <p style={{ fontSize: '22px', color: '#fff', marginTop: '20px', fontWeight: 300, maxWidth: '700px', textAlign: 'center', lineHeight: '1.6' }}>
            Complete care for your electric journey. From comprehensive warranty coverage to 24/7 roadside assistance, we're with you every mile.
          </p>
        </div>
      </div>

      {/* Warranty Section */}
<div id="warranty" style={{ padding: '120px 20px', backgroundColor: '#fff', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '80px', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <img 
              src="/Service-Maintenance/1.png" 
              alt="Warranty"
              style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '28px' }}>
              <div style={{ width: '56px', height: '56px', backgroundColor: '#252728', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Shield size={28} color="#fff" />
              </div>
              <h2 style={{ fontSize: '44px', fontWeight: 700, margin: 0, letterSpacing: '-0.5px' }}>Warranty Protection</h2>
            </div>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#666', marginBottom: '35px' }}>
              Industry-leading protection for your peace of mind. Our comprehensive warranty covers all key components including power battery, drive unit, and bodywork anti-corrosion. BYD stands behind every vehicle with coverage that exceeds industry standards.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '35px' }}>
              <div style={{ padding: '24px', backgroundColor: '#f8f9fa', borderRadius: '10px', border: '1px solid #e9ecef' }}>
                <div style={{ fontSize: '13px', color: '#666', fontWeight: 600, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Basic Coverage</div>
                <div style={{ fontSize: '22px', fontWeight: 700, color: '#252728' }}>6 years / 150,000 km</div>
                <div style={{ fontSize: '13px', color: '#666', marginTop: '8px' }}>Comprehensive vehicle protection</div>
              </div>
              <div style={{ padding: '24px', backgroundColor: '#f8f9fa', borderRadius: '10px', border: '1px solid #e9ecef' }}>
                <div style={{ fontSize: '13px', color: '#666', fontWeight: 600, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Power Battery</div>
                <div style={{ fontSize: '22px', fontWeight: 700, color: '#252728' }}>8 years / 250,000 km</div>
                <div style={{ fontSize: '13px', color: '#666', marginTop: '8px' }}>SOH 70% guarantee</div>
              </div>
              <div style={{ padding: '24px', backgroundColor: '#f8f9fa', borderRadius: '10px', border: '1px solid #e9ecef' }}>
                <div style={{ fontSize: '13px', color: '#666', fontWeight: 600, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Drive Unit</div>
                <div style={{ fontSize: '22px', fontWeight: 700, color: '#252728' }}>8 years / 150,000 km</div>
                <div style={{ fontSize: '13px', color: '#666', marginTop: '8px' }}>Motor & controller</div>
              </div>
              <div style={{ padding: '24px', backgroundColor: '#f8f9fa', borderRadius: '10px', border: '1px solid #e9ecef' }}>
                <div style={{ fontSize: '13px', color: '#666', fontWeight: 600, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Anti-Corrosion</div>
                <div style={{ fontSize: '22px', fontWeight: 700, color: '#252728' }}>12 years unlimited</div>
                <div style={{ fontSize: '13px', color: '#666', marginTop: '8px' }}>Bodywork protection</div>
              </div>
            </div>
            <p style={{ fontSize: '15px', color: '#666', marginBottom: '25px', lineHeight: '1.6' }}>
              All warranty coverage begins from the date of delivery. For complete terms, conditions, and exclusions, please review our comprehensive warranty policy document.
            </p>
            <a 
              href="/warranty-policy" 
              style={{
                display: 'inline-block',
                padding: '16px 45px',
                backgroundColor: '#252728',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '16px',
                borderRadius: '6px',
                transition: 'all 0.3s'
              }}
            >
              View Full Warranty Policy
            </a>
          </div>
        </div>
      </div>

      {/* Service & Maintenance Section */}
<div id="service-maintenance" style={{ padding: '120px 20px', backgroundColor: '#f8f9fa', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '80px', alignItems: 'center', flexDirection: 'row-reverse' }}>
          <div style={{ flex: 1 }}>
            <img 
              src="/Service-Maintenance/2.jpg" 
              alt="Service"
              style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '28px' }}>
              <div style={{ width: '56px', height: '56px', backgroundColor: '#252728', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Wrench size={28} color="#fff" />
              </div>
              <h2 style={{ fontSize: '44px', fontWeight: 700, margin: 0, letterSpacing: '-0.5px' }}>Service & Maintenance</h2>
            </div>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#666', marginBottom: '35px' }}>
              Expert care from certified BYD technicians who understand your vehicle inside and out. Our service centers use genuine BYD parts, advanced diagnostics, and specialized EV equipment to keep your vehicle running at peak performance. We make maintenance timely, accessible, and hassle-free.
            </p>
            
            <div style={{ backgroundColor: '#fff', padding: '28px', borderRadius: '10px', marginBottom: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px', color: '#252728' }}>What We Offer</h3>
              <ul style={{ fontSize: '16px', lineHeight: '2', color: '#252728', margin: 0, paddingLeft: '0', listStyle: 'none' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>Genuine BYD spare parts with competitive pricing and warranty</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>Factory-trained technicians specialized in electric vehicle care</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>Comprehensive diagnostic equipment and software updates</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>Regular maintenance schedules optimized for electric vehicles</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>Transparent pricing with detailed service reports</span>
                </li>
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <a 
                href="/owners-manual" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '16px 35px',
                  backgroundColor: '#252728',
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '16px',
                  borderRadius: '6px'
                }}
              >
                Owner's Manual
              </a>
              <a 
                href="/emergency-response" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '16px 35px',
                  backgroundColor: 'transparent',
                  border: '2px solid #252728',
                  color: '#252728',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '16px',
                  borderRadius: '6px'
                }}
              >
                Emergency Response Guide
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BYD Assistance Section */}
<div id="assistance" style={{ padding: '120px 20px', backgroundColor: '#fff', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '80px', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <img 
              src="/Assistance/1.jpg" 
              alt="Roadside Assistance"
              style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '28px' }}>
              <div style={{ width: '56px', height: '56px', backgroundColor: '#BB0A0A', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Phone size={28} color="#fff" />
              </div>
              <h2 style={{ fontSize: '44px', fontWeight: 700, margin: 0, letterSpacing: '-0.5px' }}>24/7 Roadside Assistance</h2>
            </div>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#666', marginBottom: '35px' }}>
              Part of our mobility promise — help is always available when you need it most. Whether it's a breakdown, accident, theft attempt, or fire, BYD Assistance will be there for you, 24 hours a day, 7 days a week, 365 days a year. Our pan-European assistance network ensures you're never stranded.
            </p>
            
            <div style={{ backgroundColor: '#fff5f5', padding: '32px', borderRadius: '12px', marginBottom: '35px', border: '2px solid #BB0A0A' }}>
              <div style={{ fontSize: '14px', color: '#666', marginBottom: '12px', fontWeight: 600 }}>EMERGENCY HOTLINE — AVAILABLE NOW</div>
              <a href="tel:00800-10203000" style={{ fontSize: '32px', fontWeight: 700, color: '#BB0A0A', textDecoration: 'none', display: 'block', marginBottom: '8px' }}>
                00800-10203000
              </a>
              <div style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>Free of charge | Pan-European coverage</div>
              <div style={{ fontSize: '14px', color: '#666', paddingTop: '10px', borderTop: '1px solid #ffdddd' }}>
                Alternative: <strong>+44 2033072546</strong> (if your provider charges for freephone numbers)
              </div>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '18px', color: '#252728' }}>Included Services</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                  <div style={{ width: '8px', height: '8px', backgroundColor: '#BB0A0A', borderRadius: '50%', flexShrink: 0 }} />
                  <span style={{ fontSize: '15px', fontWeight: 500 }}>Phone Support</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                  <div style={{ width: '8px', height: '8px', backgroundColor: '#BB0A0A', borderRadius: '50%', flexShrink: 0 }} />
                  <span style={{ fontSize: '15px', fontWeight: 500 }}>Roadside Repair</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                  <div style={{ width: '8px', height: '8px', backgroundColor: '#BB0A0A', borderRadius: '50%', flexShrink: 0 }} />
                  <span style={{ fontSize: '15px', fontWeight: 500 }}>Towing Service</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                  <div style={{ width: '8px', height: '8px', backgroundColor: '#BB0A0A', borderRadius: '50%', flexShrink: 0 }} />
                  <span style={{ fontSize: '15px', fontWeight: 500 }}>Replacement Vehicle</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                  <div style={{ width: '8px', height: '8px', backgroundColor: '#BB0A0A', borderRadius: '50%', flexShrink: 0 }} />
                  <span style={{ fontSize: '15px', fontWeight: 500 }}>Accommodation</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                  <div style={{ width: '8px', height: '8px', backgroundColor: '#BB0A0A', borderRadius: '50%', flexShrink: 0 }} />
                  <span style={{ fontSize: '15px', fontWeight: 500 }}>Repatriation</span>
                </div>
              </div>
            </div>

            <div style={{ fontSize: '14px', color: '#666', padding: '20px', backgroundColor: '#fff3f3', borderLeft: '4px solid #BB0A0A', borderRadius: '6px', lineHeight: '1.6' }}>
              <strong style={{ display: 'block', marginBottom: '8px', color: '#252728' }}>Coverage Period:</strong>
              EV Customers: 24 months + 24 months extension<br/>
              DM Customers: 12 months + 12 months extension<br/>
              <span style={{ fontSize: '13px', marginTop: '8px', display: 'block', fontStyle: 'italic' }}>From date of delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Charging Locations Section */}
<div id="charging-locations" style={{ padding: '120px 20px', backgroundColor: '#f8f9fa', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <h2 style={{ fontSize: '44px', fontWeight: 700, marginBottom: '20px', letterSpacing: '-0.5px' }}>Charging Locations</h2>
            <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
              Convenient access to fast and rapid charging stations across Turks & Caicos Islands. Power up wherever your journey takes you.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '60px' }}>
            {chargingStations.map((station) => (
              <div
                key={station.id}
                onClick={() => setSelectedLocation(station.id === selectedLocation ? null : station.id)}
                style={{
                  padding: '35px',
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  boxShadow: selectedLocation === station.id ? '0 8px 30px rgba(0,0,0,0.15)' : '0 4px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: selectedLocation === station.id ? '2px solid #252728' : '2px solid transparent'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>{station.name}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#666', fontSize: '14px' }}>
                      <MapPin size={16} />
                      <span>{station.address}</span>
                    </div>
                  </div>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: selectedLocation === station.id ? '#252728' : '#f8f9fa',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s'
                  }}>
                    <Zap size={22} color={selectedLocation === station.id ? '#fff' : '#252728'} />
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '20px', paddingTop: '20px', borderTop: '1px solid #e9ecef', marginBottom: selectedLocation === station.id ? '20px' : '0' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: '#666', fontWeight: 600, textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.5px' }}>Type</div>
                    <div style={{ fontSize: '15px', fontWeight: 600 }}>{station.type}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#666', fontWeight: 600, textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.5px' }}>Power</div>
                    <div style={{ fontSize: '15px', fontWeight: 600 }}>{station.power}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#666', fontWeight: 600, textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.5px' }}>Hours</div>
                    <div style={{ fontSize: '15px', fontWeight: 600 }}>{station.hours}</div>
                  </div>
                </div>

                {selectedLocation === station.id && (
                  <a
                    href={`https://maps.google.com/?q=${station.lat},${station.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 24px',
                      backgroundColor: '#252728',
                      color: '#fff',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '14px',
                      borderRadius: '6px',
                      transition: 'all 0.3s ease',
                      marginTop: '10px'
                    }}
                  >
                    <Navigation size={16} />
                    Get Directions
                  </a>
                )}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', padding: '50px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '42px', fontWeight: 700, color: '#252728', marginBottom: '10px' }}>{chargingStations.length}</div>
              <div style={{ fontSize: '14px', color: '#666', fontWeight: 500 }}>Charging Stations</div>
            </div>
            <div style={{ width: '1px', backgroundColor: '#e9ecef' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '42px', fontWeight: 700, color: '#252728', marginBottom: '10px' }}>24/7</div>
              <div style={{ fontSize: '14px', color: '#666', fontWeight: 500 }}>Always Available</div>
            </div>
            <div style={{ width: '1px', backgroundColor: '#e9ecef' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '42px', fontWeight: 700, color: '#252728', marginBottom: '10px' }}>150kW</div>
              <div style={{ fontSize: '14px', color: '#666', fontWeight: 500 }}>Rapid Charging</div>
            </div>
          </div>
        </div>
      </div>

      {/* Shell Charging Cards Section */}
<div id="shell-charging" style={{ padding: '120px 20px', backgroundColor: '#fff', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '80px', alignItems: 'center', flexDirection: 'row-reverse' }}>
          <div style={{ flex: 1 }}>
            <img 
              src="/Charge-Cards/2.jpg" 
              alt="Shell Charging"
              style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '28px' }}>
              <div style={{ width: '56px', height: '56px', backgroundColor: '#252728', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CreditCard size={28} color="#fff" />
              </div>
              <h2 style={{ fontSize: '44px', fontWeight: 700, margin: 0, letterSpacing: '-0.5px' }}>Shell EV Charging</h2>
            </div>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#666', marginBottom: '35px' }}>
              Experience the future of electric mobility with our exclusive BYD x Shell Recharge partnership. Access 850,000+ charging points across Europe with significant discounts and seamless integration with your BYD infotainment system. No subscription fees, just smart savings.
            </p>
            
            <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '12px', marginBottom: '30px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px', color: '#252728' }}>Exclusive BYD Benefits</h3>
              <div style={{ display: 'grid', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: 600, marginBottom: '4px' }}>Seamless Integration</div>
                    <div style={{ fontSize: '14px', color: '#666' }}>Shell Recharge app mirrors on your BYD screen via Android Auto or Apple CarPlay</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#fff9e6', padding: '20px', borderRadius: '8px', marginBottom: '30px', borderLeft: '4px solid #fbbf24' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <AlertCircle size={20} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#666' }}>
                  <strong style={{ color: '#252728' }}>How to register:</strong> Download the BYD App and follow the BYD x Shell Recharge link to activate your charge card. Discounts apply automatically when using the card at eligible stations.
                </div>
              </div>
            </div>

            <a 
              href="https://www.shell.co.uk/terms-and-conditions/terms-and-conditions-shell-recharge-x-byd-promotion.html" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '16px 45px',
                backgroundColor: '#252728',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '16px',
                borderRadius: '6px'
              }}
            >
              View Terms & Conditions
            </a>
          </div>
        </div>
      </div>

      {/* Customer Service Section */}
      <div style={{ padding: '100px 20px', backgroundColor: '#252728', color: '#fff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '44px', fontWeight: 700, marginBottom: '20px', letterSpacing: '-0.5px' }}>BYD Customer Service Center</h2>
            <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
              We're dedicated to hearing your voice and providing exceptional support. Contact our European customer service center for assistance beyond emergencies.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginBottom: '50px' }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '35px', borderRadius: '12px', backdropFilter: 'blur(10px)' }}>
              <MapPin size={32} color="#fff" style={{ marginBottom: '20px' }} />
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>Location</h3>
              <p style={{ fontSize: '16px', opacity: 0.9, lineHeight: '1.6' }}>
                Lublin, Poland<br/>
                European Service Hub
              </p>
            </div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '35px', borderRadius: '12px', backdropFilter: 'blur(10px)' }}>
              <Clock size={32} color="#fff" style={{ marginBottom: '20px' }} />
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>Service Hours</h3>
              <p style={{ fontSize: '16px', opacity: 0.9, lineHeight: '1.6' }}>
                Monday to Saturday<br/>
                9:00 AM - 6:00 PM CET
              </p>
            </div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '35px', borderRadius: '12px', backdropFilter: 'blur(10px)' }}>
              <div style={{ fontSize: '32px', marginBottom: '20px' }}>🌍</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>Languages</h3>
              <p style={{ fontSize: '16px', opacity: 0.9, lineHeight: '1.6' }}>
                English, German, French,<br/>
                Italian, Spanish & more
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', fontSize: '14px', opacity: 0.8, fontStyle: 'italic' }}>
            Additional language support coming soon
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div style={{ backgroundColor: '#f8f9fa', padding: '100px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '20px', color: '#252728', letterSpacing: '-0.5px' }}>
            Stay Connected with BYD
          </h3>
          <p style={{ fontSize: '17px', marginBottom: '45px', color: '#666', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 45px' }}>
            Get the latest updates on ownership benefits, charging network expansions, service promotions, and exclusive BYD news delivered to your inbox.
          </p>
          <div style={{ display: 'flex', gap: '15px', maxWidth: '700px', margin: '0 auto', marginBottom: '25px' }}>
            <input 
              type="text"
              placeholder="First Name"
              style={{
                flex: 1,
                padding: '18px 24px',
                border: '1px solid #e9ecef',
                fontSize: '16px',
                borderRadius: '6px',
                outline: 'none',
                fontFamily: 'Montserrat, Arial, sans-serif'
              }}
            />
            <input 
              type="email" 
              placeholder="Email Address"
              style={{
                flex: 1,
                padding: '18px 24px',
                border: '1px solid #e9ecef',
                fontSize: '16px',
                borderRadius: '6px',
                outline: 'none',
                fontFamily: 'Montserrat, Arial, sans-serif'
              }}
            />
          </div>
          <div style={{ textAlign: 'left', maxWidth: '700px', margin: '0 auto 30px' }}>
            <label style={{ display: 'flex', alignItems: 'flex-start', fontSize: '13px', gap: '12px', color: '#666' }}>
              <input type="checkbox" style={{ marginTop: '3px' }} />
              <span>
                I consent to my personal data being used to receive all relevant BYD email updates. 
                For more information, please see our <a href="/privacy" style={{ color: '#252728', textDecoration: 'underline', fontWeight: 600 }}>privacy policy</a>.
              </span>
            </label>
          </div>
          <button 
            style={{
              padding: '18px 60px',
              backgroundColor: '#252728',
              color: '#fff',
              border: 'none',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              borderRadius: '6px',
              fontFamily: 'Montserrat, Arial, sans-serif',
              transition: 'all 0.3s'
            }}
          >
            SUBSCRIBE NOW
          </button>
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style>{`
        @media (max-width: 991px) {
          div[style*="display: flex"] {
            flex-direction: column !important;
          }
          h1 {
            font-size: 36px !important;
          }
          h2 {
            font-size: 32px !important;
          }
          h3 {
            font-size: 20px !important;
          }
          div[style*="padding: 120px"] {
            padding: 60px 20px !important;
          }
          div[style*="padding: 100px"] {
            padding: 60px 20px !important;
          }
          div[style*="gap: 80px"] {
            gap: 40px !important;
          }
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="fontSize: '64px'"] {
            font-size: 36px !important;
          }
          div[style*="fontSize: '44px'"] {
            font-size: 28px !important;
          }
          div[style*="fontSize: '42px'"] {
            font-size: 28px !important;
          }
          div[style*="fontSize: '36px'"] {
            font-size: 26px !important;
          }
          div[style*="width: '56px'"] {
            width: 48px !important;
            height: 48px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default OwnershipPage;