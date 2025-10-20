export default function Rentals() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#252728', backgroundColor: '#ffffff' }}>
      <section style={{
        minHeight: '500px',
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '900px', color: '#ffffff' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '20px', lineHeight: '1.2' }}>
            BYD Vehicle Rentals
          </h1>
          <p style={{ fontSize: '20px', lineHeight: '1.6', marginBottom: '40px', opacity: '0.9' }}>
            Experience electric driving with flexible short-term rentals
          </p>
          <button style={{
            backgroundColor: '#ffffff', color: '#f5576c', padding: '16px 48px',
            fontSize: '16px', fontWeight: '600', border: 'none', borderRadius: '4px',
            cursor: 'pointer', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
          }}>
            Book Now
          </button>
        </div>
      </section>

      <section style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', textAlign: 'center', marginBottom: '60px', color: '#252728' }}>
            Rental Options
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {[
              { icon: '📅', title: 'Daily Rental', description: 'Perfect for short trips and weekend getaways', duration: 'From £89/day' },
              { icon: '📆', title: 'Weekly Rental', description: 'Great for extended vacations and business trips', duration: 'From £499/week' },
              { icon: '🗓️', title: 'Monthly Rental', description: 'Ideal for temporary relocations and long projects', duration: 'From £1,499/month' }
            ].map((option, index) => (
              <div key={index} style={{
                backgroundColor: '#ffffff', padding: '40px', borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)', textAlign: 'center', transition: 'all 0.3s ease'
              }}>
                <div style={{ fontSize: '64px', marginBottom: '20px' }}>{option.icon}</div>
                <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '12px', color: '#f5576c' }}>
                  {option.title}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#5f5f5f', marginBottom: '16px' }}>
                  {option.description}
                </p>
                <p style={{ fontSize: '20px', fontWeight: '700', color: '#252728' }}>
                  {option.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', textAlign: 'center', marginBottom: '60px', color: '#252728' }}>
            Available Vehicles
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            {[
              { model: 'BYD DOLPHIN', type: 'Compact Electric', daily: '£89', weekly: '£499', monthly: '£1,499' },
              { model: 'BYD ATTO 3', type: 'Electric SUV', daily: '£119', weekly: '£699', monthly: '£1,999' },
              { model: 'BYD SEAL', type: 'Executive Saloon', daily: '£149', weekly: '£899', monthly: '£2,499' }
            ].map((vehicle, index) => (
              <div key={index} style={{
                backgroundColor: '#f8f9fa', padding: '40px', borderRadius: '8px', border: '1px solid #e5e7eb'
              }}>
                <div style={{
                  backgroundColor: '#f5576c', color: '#ffffff', padding: '6px 12px',
                  borderRadius: '4px', fontSize: '13px', fontWeight: '600',
                  display: 'inline-block', marginBottom: '16px'
                }}>
                  {vehicle.type}
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px', color: '#252728' }}>
                  {vehicle.model}
                </h3>
                <div style={{ marginBottom: '24px' }}>
                  {[
                    { period: 'Daily Rate', price: vehicle.daily },
                    { period: 'Weekly Rate', price: vehicle.weekly },
                    { period: 'Monthly Rate', price: vehicle.monthly }
                  ].map((rate, idx) => (
                    <div key={idx} style={{
                      display: 'flex', justifyContent: 'space-between', padding: '12px 0',
                      borderBottom: idx < 2 ? '1px solid #e5e7eb' : 'none'
                    }}>
                      <span style={{ fontSize: '15px', color: '#5f5f5f' }}>{rate.period}:</span>
                      <span style={{ fontSize: '15px', fontWeight: '600', color: '#252728' }}>{rate.price}</span>
                    </div>
                  ))}
                </div>
                <button style={{
                  width: '100%', backgroundColor: '#f5576c', color: '#ffffff', padding: '14px',
                  fontSize: '15px', fontWeight: '600', border: 'none', borderRadius: '4px', cursor: 'pointer'
                }}>
                  Book This Vehicle
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', textAlign: 'center', marginBottom: '60px', color: '#252728' }}>
            What's Included
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              'Fully charged vehicle at pickup',
              'Comprehensive insurance coverage',
              '24/7 breakdown assistance',
              'Unlimited mileage on all rentals',
              'Free charging at BYD partner stations',
              'Flexible pickup and return locations'
            ].map((feature, index) => (
              <div key={index} style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                backgroundColor: '#ffffff', padding: '20px', borderRadius: '6px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5576c" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <p style={{ fontSize: '16px', color: '#252728', margin: 0 }}>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', textAlign: 'center', marginBottom: '60px', color: '#252728' }}>
            Rental Requirements
          </h2>
          <div style={{
            backgroundColor: '#f8f9fa', padding: '50px', borderRadius: '8px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Minimum age: 25 years old',
                'Valid UK driving licence held for at least 2 years',
                'Valid credit or debit card for security deposit',
                'Proof of address (utility bill or bank statement)',
                'Valid identification (passport or driving licence)',
                'Security deposit: £500-£1,000 (refundable)'
              ].map((req, index) => (
                <li key={index} style={{
                  fontSize: '16px', color: '#252728', padding: '12px 0',
                  borderBottom: index < 5 ? '1px solid #e5e7eb' : 'none'
                }}>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 20px', backgroundColor: '#f5576c', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', color: '#ffffff' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '20px', lineHeight: '1.2' }}>
            Ready to Rent?
          </h2>
          <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '40px', opacity: '0.9' }}>
            Book your BYD rental today and experience the future of driving
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              backgroundColor: '#ffffff', color: '#f5576c', padding: '16px 48px',
              fontSize: '16px', fontWeight: '600', border: 'none', borderRadius: '4px',
              cursor: 'pointer', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}>
              Book Now
            </button>
            <button style={{
              backgroundColor: 'transparent', color: '#ffffff', padding: '16px 48px',
              fontSize: '16px', fontWeight: '600', border: '2px solid #ffffff', borderRadius: '4px', cursor: 'pointer'
            }}>
              View Locations
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
