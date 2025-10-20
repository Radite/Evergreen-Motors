export default function Lease() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#252728', backgroundColor: '#ffffff' }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '500px',
        background: 'linear-gradient(135deg, #0a192f 0%, #112240 50%, #3276AE 100%)',
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
            Personal Contract Hire (PCH)
          </h1>
          <p style={{
            fontSize: '20px',
            lineHeight: '1.6',
            marginBottom: '40px',
            opacity: '0.9'
          }}>
            Drive a brand new BYD with low fixed monthly payments
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
            View Lease Deals
          </button>
        </div>
      </section>

      {/* What is PCH */}
      <section style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#252728'
          }}>
            What is Personal Contract Hire?
          </h2>
          <p style={{
            fontSize: '18px',
            textAlign: 'center',
            marginBottom: '60px',
            color: '#5f5f5f',
            maxWidth: '800px',
            margin: '0 auto 60px'
          }}>
            PCH is a flexible leasing option that lets you drive a new BYD for a fixed monthly payment without owning the vehicle
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                icon: '📅',
                title: 'Fixed Term',
                description: 'Choose a lease period from 24 to 48 months'
              },
              {
                icon: '💷',
                title: 'Low Monthly Payments',
                description: 'Affordable fixed payments throughout the contract'
              },
              {
                icon: '🚗',
                title: 'New Vehicle',
                description: 'Drive the latest BYD models with the newest technology'
              },
              {
                icon: '🔧',
                title: 'Maintenance Options',
                description: 'Add a maintenance package for complete peace of mind'
              }
            ].map((feature, index) => (
              <div key={index} style={{
                backgroundColor: '#ffffff',
                padding: '32px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#3276AE'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#5f5f5f'
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Lease Offers */}
      <section style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '60px',
            color: '#252728'
          }}>
            Current Lease Offers
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                model: 'BYD DOLPHIN',
                monthly: '£289',
                deposit: '£2,601',
                term: '36 months',
                mileage: '8,000 miles/year'
              },
              {
                model: 'BYD ATTO 3',
                monthly: '£379',
                deposit: '£3,411',
                term: '36 months',
                mileage: '8,000 miles/year'
              },
              {
                model: 'BYD SEAL',
                monthly: '£449',
                deposit: '£4,041',
                term: '36 months',
                mileage: '8,000 miles/year'
              }
            ].map((offer, index) => (
              <div key={index} style={{
                backgroundColor: '#f8f9fa',
                padding: '40px',
                borderRadius: '8px',
                border: '2px solid #e5e7eb',
                transition: 'all 0.3s ease'
              }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  marginBottom: '24px',
                  color: '#252728'
                }}>
                  {offer.model}
                </h3>
                
                <div style={{
                  backgroundColor: '#3276AE',
                  color: '#ffffff',
                  padding: '24px',
                  borderRadius: '6px',
                  marginBottom: '24px',
                  textAlign: 'center'
                }}>
                  <p style={{
                    fontSize: '14px',
                    opacity: '0.9',
                    marginBottom: '8px'
                  }}>
                    From
                  </p>
                  <p style={{
                    fontSize: '48px',
                    fontWeight: '700',
                    margin: '0',
                    lineHeight: '1'
                  }}>
                    {offer.monthly}
                  </p>
                  <p style={{
                    fontSize: '14px',
                    opacity: '0.9',
                    marginTop: '8px'
                  }}>
                    per month
                  </p>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '12px 0',
                    borderBottom: '1px solid #e5e7eb'
                  }}>
                    <span style={{ fontSize: '15px', color: '#5f5f5f' }}>Initial Payment:</span>
                    <span style={{ fontSize: '15px', fontWeight: '600', color: '#252728' }}>{offer.deposit}</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '12px 0',
                    borderBottom: '1px solid #e5e7eb'
                  }}>
                    <span style={{ fontSize: '15px', color: '#5f5f5f' }}>Contract Length:</span>
                    <span style={{ fontSize: '15px', fontWeight: '600', color: '#252728' }}>{offer.term}</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '12px 0'
                  }}>
                    <span style={{ fontSize: '15px', color: '#5f5f5f' }}>Annual Mileage:</span>
                    <span style={{ fontSize: '15px', fontWeight: '600', color: '#252728' }}>{offer.mileage}</span>
                  </div>
                </div>

                <button style={{
                  width: '100%',
                  backgroundColor: '#3276AE',
                  color: '#ffffff',
                  padding: '14px',
                  fontSize: '15px',
                  fontWeight: '600',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  Get This Deal
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '60px',
            color: '#252728'
          }}>
            How PCH Works
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                step: '1',
                title: 'Choose Your Vehicle',
                description: 'Select your BYD model, lease term, and annual mileage'
              },
              {
                step: '2',
                title: 'Pay Initial Deposit',
                description: 'Make your initial payment (typically 3-9 months\' payments)'
              },
              {
                step: '3',
                title: 'Drive & Enjoy',
                description: 'Drive your new BYD with fixed monthly payments'
              },
              {
                step: '4',
                title: 'Return the Vehicle',
                description: 'At the end of the term, simply return the vehicle'
              }
            ].map((step, index) => (
              <div key={index} style={{
                backgroundColor: '#ffffff',
                padding: '32px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                position: 'relative',
                paddingTop: '70px'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '24px',
                  left: '32px',
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#3276AE',
                  color: '#ffffff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: '700'
                }}>
                  {step.step}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#252728'
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#5f5f5f'
                }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits vs Buying */}
      <section style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '60px',
            color: '#252728'
          }}>
            Why Choose PCH?
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              {
                title: 'Lower Monthly Costs',
                description: 'PCH typically offers lower monthly payments compared to other finance options'
              },
              {
                title: 'No Depreciation Worry',
                description: 'You don\'t own the vehicle, so depreciation isn\'t your concern'
              },
              {
                title: 'Drive New Cars Regularly',
                description: 'Upgrade to the latest models every few years without the hassle of selling'
              },
              {
                title: 'Fixed Budgeting',
                description: 'Know exactly what you\'ll pay each month for the entire contract'
              },
              {
                title: 'Optional Maintenance',
                description: 'Add a maintenance package to cover servicing and repairs'
              },
              {
                title: 'Road Tax Included',
                description: 'Many PCH deals include road tax for the duration of the contract'
              }
            ].map((benefit, index) => (
              <div key={index} style={{
                display: 'flex',
                gap: '20px',
                padding: '24px',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                border: '1px solid #e5e7eb'
              }}>
                <div style={{
                  flexShrink: 0,
                  width: '24px',
                  height: '24px',
                  marginTop: '2px'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3276AE" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    marginBottom: '8px',
                    color: '#252728'
                  }}>
                    {benefit.title}
                  </h4>
                  <p style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#5f5f5f',
                    margin: 0
                  }}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Considerations */}
      <section style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#252728'
          }}>
            Important Considerations
          </h2>
          <p style={{
            fontSize: '18px',
            textAlign: 'center',
            marginBottom: '60px',
            color: '#5f5f5f'
          }}>
            Things to know before leasing
          </p>

          <div style={{
            backgroundColor: '#ffffff',
            padding: '50px',
            borderRadius: '8px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{
                padding: '20px',
                backgroundColor: '#fff3cd',
                borderRadius: '6px',
                borderLeft: '4px solid #ffc107'
              }}>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '8px',
                  color: '#252728'
                }}>
                  Mileage Limits
                </h4>
                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#5f5f5f',
                  margin: 0
                }}>
                  Exceeding your agreed annual mileage will result in excess mileage charges. Choose your mileage allowance carefully.
                </p>
              </div>

              <div style={{
                padding: '20px',
                backgroundColor: '#fff3cd',
                borderRadius: '6px',
                borderLeft: '4px solid #ffc107'
              }}>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '8px',
                  color: '#252728'
                }}>
                  Vehicle Condition
                </h4>
                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#5f5f5f',
                  margin: 0
                }}>
                  You must return the vehicle in good condition. Damage beyond fair wear and tear may incur charges.
                </p>
              </div>

              <div style={{
                padding: '20px',
                backgroundColor: '#fff3cd',
                borderRadius: '6px',
                borderLeft: '4px solid #ffc107'
              }}>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '8px',
                  color: '#252728'
                }}>
                  Early Termination
                </h4>
                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#5f5f5f',
                  margin: 0
                }}>
                  Ending a lease early can be expensive. Make sure you can commit to the full term before signing.
                </p>
              </div>

              <div style={{
                padding: '20px',
                backgroundColor: '#fff3cd',
                borderRadius: '6px',
                borderLeft: '4px solid #ffc107'
              }}>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '8px',
                  color: '#252728'
                }}>
                  No Ownership
                </h4>
                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#5f5f5f',
                  margin: 0
                }}>
                  You never own the vehicle with PCH. If ownership is important to you, consider other finance options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Ready to Lease Your BYD?
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.6',
            marginBottom: '40px',
            opacity: '0.9'
          }}>
            Get a personalized lease quote and start driving your dream BYD today
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
            Get Your Quote
          </button>
        </div>
      </section>
    </div>
  );
}
