export default function Purchasing() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#252728', backgroundColor: '#ffffff' }}>
      <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        <img 
          src="/Purchasing/Banner.jpg" 
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
            Find Your Perfect Way to Own a BYD

          </h1>
          <p style={{ fontSize: '22px', color: '#fff', marginTop: '20px', fontWeight: 300, maxWidth: '700px', textAlign: 'center', lineHeight: '1.6' }}>
            From cash purchases to flexible subscriptions - discover the option that fits your lifestyle
          </p>
        </div>
      </div>

      {/* Cash Purchase */}
<section id="cash-purchase" style={{ padding: '80px 20px', backgroundColor: '#ffffff', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{
              fontSize: '42px',
              fontWeight: '700',
              marginBottom: '16px',
              color: '#252728'
            }}>
              Cash Purchase
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#5f5f5f',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Buy outright and own your BYD from day one with no monthly payments or interest charges
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginBottom: '40px'
          }}>
            {[
              { title: 'No Interest Charges', description: 'Avoid finance costs and save money' },
              { title: 'Immediate Ownership', description: 'The vehicle is yours from day one' },
              { title: 'Complete Freedom', description: 'No mileage or modification restrictions' },
              { title: 'Potential Discounts', description: 'Cash buyers may get special offers' }
            ].map((benefit, index) => (
              <div key={index} style={{
                backgroundColor: '#f8f9fa',
                padding: '28px',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  margin: '0 auto 16px',
                  backgroundColor: '#3276AE',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src={`https://placehold.co/60x60/3276AE/ffffff?text=${index + 1}`}
                    alt={benefit.title}
                    style={{ width: '60px', height: '60px' }}
                  />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#3276AE' }}>
                  {benefit.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#5f5f5f' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button style={{
              backgroundColor: '#3276AE',
              color: '#ffffff',
              padding: '14px 40px',
              fontSize: '16px',
              fontWeight: '600',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(50, 118, 174, 0.3)'
            }}>
              Contact Us for Cash Purchase
            </button>
          </div>
        </div>
      </section>

      {/* Bank Finance */}
<section id="bank-finance" style={{ padding: '80px 20px', backgroundColor: '#f8f9fa', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{
              fontSize: '42px',
              fontWeight: '700',
              marginBottom: '16px',
              color: '#252728'
            }}>
              Bank Finance
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#5f5f5f',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Flexible finance through trusted UK banks with competitive rates and immediate ownership
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginBottom: '40px'
          }}>
            {[
              { title: 'Competitive Rates', description: 'Access great rates from leading banks' },
              { title: 'Trusted Lenders', description: 'Work with established institutions' },
              { title: 'Own from Day One', description: 'You own the vehicle immediately' },
              { title: 'Simple Process', description: 'Quick application with fast decisions' }
            ].map((benefit, index) => (
              <div key={index} style={{
                backgroundColor: '#ffffff',
                padding: '28px',
                borderRadius: '8px',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  margin: '0 auto 16px',
                  backgroundColor: '#3276AE',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src={`https://placehold.co/60x60/3276AE/ffffff?text=${index + 1}`}
                    alt={benefit.title}
                    style={{ width: '60px', height: '60px' }}
                  />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#3276AE' }}>
                  {benefit.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#5f5f5f' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button style={{
              backgroundColor: '#3276AE',
              color: '#ffffff',
              padding: '14px 40px',
              fontSize: '16px',
              fontWeight: '600',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(50, 118, 174, 0.3)'
            }}>
              Contact Us for Finance Options
            </button>
          </div>
        </div>
      </section>

      {/* Dealer Finance (PCP) */}
<section id="dealer-finance" style={{ padding: '80px 20px', backgroundColor: '#ffffff', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{
              fontSize: '42px',
              fontWeight: '700',
              marginBottom: '16px',
              color: '#252728'
            }}>
              Personal Contract Purchase (PCP)
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#5f5f5f',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Lower monthly payments with flexibility to keep, return, or exchange your vehicle
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginBottom: '40px'
          }}>
            {[
              { title: 'Lower Payments', description: 'Reduced monthly costs with final payment' },
              { title: 'Multiple Options', description: 'Keep, return, or exchange at end of term' },
              { title: 'Guaranteed Value', description: 'Know your vehicle\'s future value upfront' },
              { title: 'Dealer Support', description: 'Expert guidance throughout your contract' }
            ].map((benefit, index) => (
              <div key={index} style={{
                backgroundColor: '#f8f9fa',
                padding: '28px',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  margin: '0 auto 16px',
                  backgroundColor: '#3276AE',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src={`https://placehold.co/60x60/3276AE/ffffff?text=${index + 1}`}
                    alt={benefit.title}
                    style={{ width: '60px', height: '60px' }}
                  />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#3276AE' }}>
                  {benefit.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#5f5f5f' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button style={{
              backgroundColor: '#3276AE',
              color: '#ffffff',
              padding: '14px 40px',
              fontSize: '16px',
              fontWeight: '600',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(50, 118, 174, 0.3)'
            }}>
              Contact Us for PCP Deals
            </button>
          </div>
        </div>
      </section>

      {/* Personal Contract Hire (Leasing) */}
<section id="leasing" style={{ padding: '80px 20px', backgroundColor: '#f8f9fa', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{
              fontSize: '42px',
              fontWeight: '700',
              marginBottom: '16px',
              color: '#252728'
            }}>
              Personal Contract Hire (Leasing)
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#5f5f5f',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Drive a brand new BYD with low fixed monthly payments and no ownership worries
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginBottom: '40px'
          }}>
            {[
              { title: 'Fixed Term', description: 'Choose 24-48 month lease periods' },
              { title: 'Low Payments', description: 'Affordable fixed monthly costs' },
              { title: 'Latest Models', description: 'Always drive the newest vehicles' },
              { title: 'Maintenance Options', description: 'Add service packages for peace of mind' }
            ].map((benefit, index) => (
              <div key={index} style={{
                backgroundColor: '#ffffff',
                padding: '28px',
                borderRadius: '8px',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  margin: '0 auto 16px',
                  backgroundColor: '#3276AE',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src={`https://placehold.co/60x60/3276AE/ffffff?text=${index + 1}`}
                    alt={benefit.title}
                    style={{ width: '60px', height: '60px' }}
                  />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#3276AE' }}>
                  {benefit.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#5f5f5f' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button style={{
              backgroundColor: '#3276AE',
              color: '#ffffff',
              padding: '14px 40px',
              fontSize: '16px',
              fontWeight: '600',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(50, 118, 174, 0.3)'
            }}>
              Contact Us for Lease Deals
            </button>
          </div>
        </div>
      </section>

      {/* Fleet & Business */}
<section id="fleet-business" style={{ padding: '80px 20px', backgroundColor: '#ffffff', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{
              fontSize: '42px',
              fontWeight: '700',
              marginBottom: '16px',
              color: '#252728'
            }}>
              Fleet & Business Solutions
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#5f5f5f',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              Comprehensive electric vehicle solutions for businesses of all sizes with volume discounts and dedicated support
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginBottom: '40px'
          }}>
            {[
              { title: 'Advanced Technology', description: 'Industry-leading battery and range' },
              { title: 'Cost Savings', description: 'Reduce fuel and maintenance costs' },
              { title: 'Volume Discounts', description: 'Special pricing for fleet orders 5+' },
              { title: 'Comprehensive Warranty', description: '6-year vehicle, 8-year battery warranty' },
              { title: 'Fleet Management', description: 'Digital tools and dedicated support' },
              { title: 'ESG Compliance', description: 'Meet sustainability goals' }
            ].map((benefit, index) => (
              <div key={index} style={{
                backgroundColor: '#f8f9fa',
                padding: '28px',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  margin: '0 auto 16px',
                  backgroundColor: '#1a2a6c',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src={`https://placehold.co/60x60/1a2a6c/ffffff?text=${index + 1}`}
                    alt={benefit.title}
                    style={{ width: '60px', height: '60px' }}
                  />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a2a6c' }}>
                  {benefit.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#5f5f5f' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button style={{
              backgroundColor: '#1a2a6c',
              color: '#ffffff',
              padding: '14px 40px',
              fontSize: '16px',
              fontWeight: '600',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(26, 42, 108, 0.3)'
            }}>
              Contact Fleet Specialists
            </button>
          </div>
        </div>
      </section>

      {/* Rentals */}
<section id="rentals" style={{ padding: '80px 20px', backgroundColor: '#f8f9fa', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{
              fontSize: '42px',
              fontWeight: '700',
              marginBottom: '16px',
              color: '#252728'
            }}>
              Short-Term Rentals
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#5f5f5f',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Experience electric driving with flexible daily, weekly, or monthly rental options
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            marginBottom: '40px'
          }}>
            {[
              { title: 'Daily Rental', price: 'From £89/day', description: 'Perfect for short trips' },
              { title: 'Weekly Rental', price: 'From £499/week', description: 'Great for vacations' },
              { title: 'Monthly Rental', price: 'From £1,499/month', description: 'Ideal for extended use' }
            ].map((option, index) => (
              <div key={index} style={{
                backgroundColor: '#ffffff',
                padding: '32px',
                borderRadius: '8px',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}>
                <div style={{ 
                  width: '100px', 
                  height: '100px', 
                  margin: '0 auto 16px',
                  backgroundColor: '#f5576c',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src={`https://placehold.co/80x80/f5576c/ffffff?text=${index + 1}`}
                    alt={option.title}
                    style={{ width: '80px', height: '80px' }}
                  />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px', color: '#f5576c' }}>
                  {option.title}
                </h3>
                <p style={{ fontSize: '24px', fontWeight: '700', color: '#252728', marginBottom: '8px' }}>
                  {option.price}
                </p>
                <p style={{ fontSize: '14px', color: '#5f5f5f' }}>
                  {option.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            padding: '30px',
            borderRadius: '8px',
            marginBottom: '30px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
          }}>
            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: '#252728', textAlign: 'center' }}>
              All Rentals Include:
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              {['Fully charged vehicle', 'Comprehensive insurance', '24/7 breakdown assistance', 'Unlimited mileage'].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5576c" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span style={{ fontSize: '14px', color: '#252728' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button style={{
              backgroundColor: '#f5576c',
              color: '#ffffff',
              padding: '14px 40px',
              fontSize: '16px',
              fontWeight: '600',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(245, 87, 108, 0.3)'
            }}>
              Contact Us for Rentals
            </button>
          </div>
        </div>
      </section>

      {/* Subscriptions */}
<section id="subscriptions" style={{ padding: '80px 20px', backgroundColor: '#ffffff', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{
              fontSize: '42px',
              fontWeight: '700',
              marginBottom: '16px',
              color: '#252728'
            }}>
              All-Inclusive Subscription
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#5f5f5f',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Ultimate flexibility with insurance, maintenance, and everything included in one monthly payment
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginBottom: '40px'
          }}>
            {[
              { plan: 'Starter', monthly: '£599', model: 'BYD DOLPHIN', mileage: '750 miles/month' },
              { plan: 'Premium', monthly: '£799', model: 'BYD ATTO 3', mileage: '1,000 miles/month', featured: true },
              { plan: 'Executive', monthly: '£999', model: 'BYD SEAL', mileage: '1,250 miles/month' }
            ].map((tier, index) => (
              <div key={index} style={{
                backgroundColor: tier.featured ? '#667eea' : '#f8f9fa',
                padding: '36px',
                borderRadius: '8px',
                border: tier.featured ? '3px solid #667eea' : '1px solid #e5e7eb',
                textAlign: 'center',
                position: 'relative',
                transform: tier.featured ? 'scale(1.05)' : 'scale(1)'
              }}>
                {tier.featured && (
                  <div style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#764ba2',
                    color: '#ffffff',
                    padding: '6px 20px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    MOST POPULAR
                  </div>
                )}
                <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', color: tier.featured ? '#ffffff' : '#252728' }}>
                  {tier.plan}
                </h3>
                <p style={{ fontSize: '48px', fontWeight: '700', marginBottom: '8px', color: tier.featured ? '#ffffff' : '#667eea' }}>
                  {tier.monthly}
                </p>
                <p style={{ fontSize: '14px', marginBottom: '20px', color: tier.featured ? 'rgba(255,255,255,0.8)' : '#6b7280' }}>
                  per month
                </p>
                <div style={{ marginBottom: '24px', textAlign: 'left' }}>
                  <p style={{ fontSize: '14px', marginBottom: '8px', color: tier.featured ? 'rgba(255,255,255,0.9)' : '#5f5f5f' }}>
                    <strong>Model:</strong> {tier.model}
                  </p>
                  <p style={{ fontSize: '14px', marginBottom: '8px', color: tier.featured ? 'rgba(255,255,255,0.9)' : '#5f5f5f' }}>
                    <strong>Mileage:</strong> {tier.mileage}
                  </p>
                  <p style={{ fontSize: '14px', color: tier.featured ? 'rgba(255,255,255,0.9)' : '#5f5f5f' }}>
                    <strong>Minimum:</strong> 6 months
                  </p>
                </div>
                <div style={{ marginBottom: '20px', paddingTop: '20px', borderTop: `1px solid ${tier.featured ? 'rgba(255,255,255,0.2)' : '#e5e7eb'}` }}>
                  <p style={{ fontSize: '13px', fontWeight: '600', marginBottom: '10px', color: tier.featured ? '#ffffff' : '#252728' }}>
                    Everything Included:
                  </p>
                  <p style={{ fontSize: '12px', lineHeight: '1.6', color: tier.featured ? 'rgba(255,255,255,0.85)' : '#5f5f5f' }}>
                    Vehicle • Insurance • Maintenance • Breakdown Cover • Vehicle Swaps • Digital Management
                  </p>
                </div>
                <button style={{
                  width: '100%',
                  backgroundColor: tier.featured ? '#ffffff' : '#667eea',
                  color: tier.featured ? '#667eea' : '#ffffff',
                  padding: '14px',
                  fontSize: '15px',
                  fontWeight: '600',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}>
                  Subscribe Now
                </button>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button style={{
              backgroundColor: '#667eea',
              color: '#ffffff',
              padding: '14px 40px',
              fontSize: '16px',
              fontWeight: '600',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
            }}>
              Contact Us About Subscriptions
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #2d3436 0%, #3276AE 100%)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', color: '#ffffff' }}>
          <h2 style={{
            fontSize: '40px',
            fontWeight: '700',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            Ready to Get Your BYD?
          </h2>
          <p style={{
            fontSize: '20px',
            lineHeight: '1.6',
            marginBottom: '40px',
            opacity: '0.95'
          }}>
            Contact us today and our team will help you find the perfect purchasing option for your needs
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              backgroundColor: '#ffffff',
              color: '#3276AE',
              padding: '16px 48px',
              fontSize: '16px',
              fontWeight: '600',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}>
              Contact Us Now
            </button>
            <button style={{
              backgroundColor: 'transparent',
              color: '#ffffff',
              padding: '16px 48px',
              fontSize: '16px',
              fontWeight: '600',
              border: '2px solid #ffffff',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              Find a Location
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}