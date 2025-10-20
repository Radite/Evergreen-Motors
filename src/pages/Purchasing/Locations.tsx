export default function Locations() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#252728', backgroundColor: '#ffffff' }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '400px',
        background: 'linear-gradient(135deg, #2d3436 0%, #3276AE 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '900px', color: '#ffffff' }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            Find a BYD Store
          </h1>
          <p style={{
            fontSize: '20px',
            lineHeight: '1.6',
            marginBottom: '40px',
            opacity: '0.9'
          }}>
            Visit us at one of our locations across the UK
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section style={{ padding: '60px 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            backgroundColor: '#ffffff',
            padding: '40px',
            borderRadius: '8px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: '600',
              marginBottom: '30px',
              color: '#252728',
              textAlign: 'center'
            }}>
              Search for Your Nearest Store
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input
                type="text"
                placeholder="Enter postcode or city"
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  fontSize: '16px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '4px',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.3s ease'
                }}
              />
              
              <select style={{
                width: '100%',
                padding: '16px 20px',
                fontSize: '16px',
                border: '2px solid #e5e7eb',
                borderRadius: '4px',
                boxSizing: 'border-box',
                backgroundColor: '#ffffff'
              }}>
                <option>All Services</option>
                <option>Sales</option>
                <option>Service & Maintenance</option>
                <option>Test Drives</option>
                <option>Parts</option>
              </select>

              <button style={{
                backgroundColor: '#3276AE',
                color: '#ffffff',
                padding: '16px 48px',
                fontSize: '16px',
                fontWeight: '600',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(50, 118, 174, 0.3)'
              }}>
                Search Locations
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section style={{ padding: '0', backgroundColor: '#e5e7eb', minHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', color: '#6b7280' }}>
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <p style={{ fontSize: '18px', marginTop: '20px' }}>Interactive Map</p>
        </div>
      </section>

      {/* Featured Locations */}
      <section style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '60px',
            color: '#252728'
          }}>
            Featured Locations
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px'
          }}>
            {[
              {
                name: 'BYD London Central',
                address: '123 Oxford Street, London, W1D 2HG',
                phone: '+44 20 7946 0958',
                services: ['Sales', 'Service', 'Test Drives', 'Parts']
              },
              {
                name: 'BYD Manchester',
                address: '456 Deansgate, Manchester, M3 2AY',
                phone: '+44 161 839 3456',
                services: ['Sales', 'Service', 'Test Drives']
              },
              {
                name: 'BYD Birmingham',
                address: '789 High Street, Birmingham, B1 1AA',
                phone: '+44 121 643 2000',
                services: ['Sales', 'Service', 'Test Drives', 'Parts']
              }
            ].map((location, index) => (
              <div key={index} style={{
                backgroundColor: '#f8f9fa',
                padding: '32px',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                transition: 'all 0.3s ease'
              }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  marginBottom: '20px',
                  color: '#3276AE'
                }}>
                  {location.name}
                </h3>

                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5f5f5f" strokeWidth="2" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <p style={{ fontSize: '15px', color: '#5f5f5f', lineHeight: '1.5', margin: 0 }}>
                      {location.address}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5f5f5f" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <p style={{ fontSize: '15px', color: '#5f5f5f', margin: 0 }}>
                      {location.phone}
                    </p>
                  </div>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <p style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#252728' }}>
                    Services Available:
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {location.services.map((service, idx) => (
                      <span key={idx} style={{
                        backgroundColor: '#3276AE',
                        color: '#ffffff',
                        padding: '6px 12px',
                        fontSize: '13px',
                        borderRadius: '4px',
                        fontWeight: '500'
                      }}>
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button style={{
                    flex: 1,
                    backgroundColor: '#3276AE',
                    color: '#ffffff',
                    padding: '12px',
                    fontSize: '14px',
                    fontWeight: '600',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}>
                    Get Directions
                  </button>
                  <button style={{
                    flex: 1,
                    backgroundColor: '#ffffff',
                    color: '#3276AE',
                    padding: '12px',
                    fontSize: '14px',
                    fontWeight: '600',
                    border: '2px solid #3276AE',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}>
                    Contact Store
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Services Section */}
      <section style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#252728'
          }}>
            What Our Stores Offer
          </h2>
          <p style={{
            fontSize: '18px',
            textAlign: 'center',
            marginBottom: '60px',
            color: '#5f5f5f'
          }}>
            Experience world-class service at every BYD location
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                title: 'Expert Sales Team',
                description: 'Knowledgeable staff to help you find the perfect BYD vehicle'
              },
              {
                title: 'Test Drive Center',
                description: 'State-of-the-art facilities for comprehensive test drives'
              },
              {
                title: 'Service & Maintenance',
                description: 'Certified technicians and genuine BYD parts'
              },
              {
                title: 'Customer Lounge',
                description: 'Comfortable waiting areas with complimentary refreshments'
              },
              {
                title: 'Charging Facilities',
                description: 'On-site charging stations for your convenience'
              },
              {
                title: 'Finance Advice',
                description: 'Expert guidance on financing and leasing options'
              }
            ].map((service, index) => (
              <div key={index} style={{
                backgroundColor: '#ffffff',
                padding: '30px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                textAlign: 'center'
              }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#3276AE'
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#5f5f5f'
                }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#3276AE',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', color: '#ffffff' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            Can't Find a Store Near You?
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.6',
            marginBottom: '40px',
            opacity: '0.9'
          }}>
            Contact our customer service team and we'll help you find the best solution
          </p>
          <button style={{
            backgroundColor: '#ffffff',
            color: '#3276AE',
            padding: '16px 48px',
            fontSize: '16px',
            fontWeight: '600',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
          }}>
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
