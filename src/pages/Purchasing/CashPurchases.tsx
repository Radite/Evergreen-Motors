export default function CashPurchases() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#252728', backgroundColor: '#ffffff' }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '500px',
        background: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
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
            Cash Purchase
          </h1>
          <p style={{
            fontSize: '20px',
            lineHeight: '1.6',
            marginBottom: '40px',
            opacity: '0.9'
          }}>
            Buy your BYD outright and own it from day one
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
            View Current Offers
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#252728'
          }}>
            Why Buy With Cash?
          </h2>
          <p style={{
            fontSize: '18px',
            textAlign: 'center',
            marginBottom: '60px',
            color: '#5f5f5f',
            maxWidth: '700px',
            margin: '0 auto 60px'
          }}>
            Purchasing your BYD with cash offers simplicity, ownership, and potential savings
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}>
            {[
              {
                icon: '💰',
                title: 'No Interest Charges',
                description: 'Avoid paying interest on finance agreements and save money over the lifetime of ownership'
              },
              {
                icon: '🔑',
                title: 'Immediate Ownership',
                description: 'The vehicle is yours from day one with no monthly payments or restrictions'
              },
              {
                icon: '✨',
                title: 'Complete Freedom',
                description: 'No mileage restrictions, modification limits, or early termination fees'
              },
              {
                icon: '📈',
                title: 'Better Resale Value',
                description: 'Sell your vehicle whenever you choose and keep 100% of the proceeds'
              },
              {
                icon: '⚡',
                title: 'Simplified Process',
                description: 'Straightforward purchase with minimal paperwork and faster delivery'
              },
              {
                icon: '🎯',
                title: 'Potential Discounts',
                description: 'Cash buyers may be eligible for special offers and dealer incentives'
              }
            ].map((benefit, index) => (
              <div key={index} style={{
                backgroundColor: '#f8f9fa',
                padding: '40px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>
                  {benefit.icon}
                </div>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: '#3276AE'
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: '#5f5f5f'
                }}>
                  {benefit.description}
                </p>
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
            Cash Purchase Process
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                step: '1',
                title: 'Choose Your BYD',
                description: 'Select your preferred model, trim level, and options from our range'
              },
              {
                step: '2',
                title: 'Get Your Quote',
                description: 'Receive a detailed quote including any available cash purchase incentives'
              },
              {
                step: '3',
                title: 'Reserve Your Vehicle',
                description: 'Pay a refundable deposit to secure your chosen BYD'
              },
              {
                step: '4',
                title: 'Complete Payment',
                description: 'Transfer the full balance via bank transfer or cleared funds'
              },
              {
                step: '5',
                title: 'Collection Day',
                description: 'Collect your new BYD and drive away with complete ownership'
              }
            ].map((step, index) => (
              <div key={index} style={{
                backgroundColor: '#ffffff',
                padding: '30px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                position: 'relative',
                paddingTop: '60px'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '30px',
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

      {/* Current Models */}
      <section style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#252728'
          }}>
            Available for Cash Purchase
          </h2>
          <p style={{
            fontSize: '18px',
            textAlign: 'center',
            marginBottom: '60px',
            color: '#5f5f5f'
          }}>
            All BYD models are available for cash purchase with competitive pricing
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                model: 'BYD DOLPHIN',
                price: 'From £26,000',
                type: 'Electric Hatchback'
              },
              {
                model: 'BYD ATTO 3',
                price: 'From £38,000',
                type: 'Electric SUV'
              },
              {
                model: 'BYD SEAL',
                price: 'From £45,000',
                type: 'Electric Saloon'
              },
              {
                model: 'BYD SEAL U DM-i',
                price: 'From £40,000',
                type: 'Plug-in Hybrid SUV'
              }
            ].map((vehicle, index) => (
              <div key={index} style={{
                backgroundColor: '#f8f9fa',
                padding: '30px',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  backgroundColor: '#3276AE',
                  color: '#ffffff',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  fontSize: '13px',
                  fontWeight: '600',
                  display: 'inline-block',
                  marginBottom: '16px'
                }}>
                  {vehicle.type}
                </div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#252728'
                }}>
                  {vehicle.model}
                </h3>
                <p style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  color: '#3276AE',
                  marginBottom: '24px'
                }}>
                  {vehicle.price}
                </p>
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
                  transition: 'all 0.3s ease',
                  marginBottom: '12px'
                }}>
                  Get Quote
                </button>
                <button style={{
                  width: '100%',
                  backgroundColor: '#ffffff',
                  color: '#3276AE',
                  padding: '14px',
                  fontSize: '15px',
                  fontWeight: '600',
                  border: '2px solid #3276AE',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#252728'
          }}>
            Payment Methods
          </h2>
          <p style={{
            fontSize: '18px',
            textAlign: 'center',
            marginBottom: '60px',
            color: '#5f5f5f'
          }}>
            We accept various secure payment methods for your convenience
          </p>

          <div style={{
            backgroundColor: '#ffffff',
            padding: '50px',
            borderRadius: '8px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                {
                  method: 'Bank Transfer (BACS)',
                  description: 'Secure electronic transfer directly from your bank account',
                  recommended: true
                },
                {
                  method: 'Debit Card',
                  description: 'Pay with your debit card (subject to daily limits)',
                  recommended: false
                },
                {
                  method: 'Cashier\'s Cheque',
                  description: 'Bank-guaranteed cheque (subject to clearance period)',
                  recommended: false
                },
                {
                  method: 'Building Society Cheque',
                  description: 'Guaranteed funds from a building society (subject to verification)',
                  recommended: false
                }
              ].map((payment, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '24px',
                  backgroundColor: payment.recommended ? '#e8f4f8' : '#f8f9fa',
                  borderRadius: '8px',
                  border: payment.recommended ? '2px solid #3276AE' : '1px solid #e5e7eb',
                  position: 'relative'
                }}>
                  {payment.recommended && (
                    <div style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '20px',
                      backgroundColor: '#3276AE',
                      color: '#ffffff',
                      padding: '4px 12px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>
                      RECOMMENDED
                    </div>
                  )}
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      marginBottom: '8px',
                      color: '#252728'
                    }}>
                      {payment.method}
                    </h4>
                    <p style={{
                      fontSize: '15px',
                      color: '#5f5f5f',
                      margin: 0
                    }}>
                      {payment.description}
                    </p>
                  </div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={payment.recommended ? '#3276AE' : '#9ca3af'} strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '60px',
            color: '#252728'
          }}>
            Frequently Asked Questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              {
                question: 'Can I negotiate the price when buying with cash?',
                answer: 'Yes, cash buyers may be eligible for special incentives. Contact your local BYD dealer to discuss available offers.'
              },
              {
                question: 'How long does the cash purchase process take?',
                answer: 'Once payment is confirmed, you can typically collect your vehicle within 3-5 business days, subject to availability.'
              },
              {
                question: 'Do I need to pay the full amount upfront?',
                answer: 'A refundable deposit secures your vehicle, with the balance due before collection. Payment terms can be discussed with your dealer.'
              },
              {
                question: 'What documentation do I need?',
                answer: 'You\'ll need valid identification, proof of address, and payment confirmation. Your dealer will guide you through the process.'
              }
            ].map((faq, index) => (
              <div key={index} style={{
                backgroundColor: '#f8f9fa',
                padding: '30px',
                borderRadius: '8px',
                border: '1px solid #e5e7eb'
              }}>
                <h4 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#252728'
                }}>
                  {faq.question}
                </h4>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: '#5f5f5f',
                  margin: 0
                }}>
                  {faq.answer}
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
            Ready to Buy Your BYD?
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.6',
            marginBottom: '40px',
            opacity: '0.9'
          }}>
            Get a personalized quote today and discover how affordable ownership can be
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
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}>
              Request Quote
            </button>
            <button style={{
              backgroundColor: 'transparent',
              color: '#ffffff',
              padding: '16px 48px',
              fontSize: '16px',
              fontWeight: '600',
              border: '2px solid #ffffff',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              Find a Dealer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
