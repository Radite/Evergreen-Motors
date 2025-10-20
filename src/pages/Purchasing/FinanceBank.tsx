export default function FinanceBank() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#252728', backgroundColor: '#ffffff' }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '500px',
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #3276AE 100%)',
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
            Bank Finance Options
          </h1>
          <p style={{
            fontSize: '20px',
            lineHeight: '1.6',
            marginBottom: '40px',
            opacity: '0.9'
          }}>
            Flexible finance solutions through leading UK banks with competitive rates
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
            Calculate Your Finance
          </button>
        </div>
      </section>

      {/* Finance Calculator Section */}
      <section style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#252728'
          }}>
            Finance Calculator
          </h2>
          <p style={{
            fontSize: '18px',
            textAlign: 'center',
            marginBottom: '50px',
            color: '#5f5f5f'
          }}>
            See how much your monthly payments could be
          </p>

          <div style={{
            backgroundColor: '#ffffff',
            padding: '50px',
            borderRadius: '8px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#252728'
                }}>
                  Vehicle Price
                </label>
                <input
                  type="range"
                  min="20000"
                  max="60000"
                  defaultValue="35000"
                  style={{
                    width: '100%',
                    height: '6px',
                    borderRadius: '3px',
                    outline: 'none',
                    background: '#e5e7eb'
                  }}
                />
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '8px',
                  fontSize: '14px',
                  color: '#6b7280'
                }}>
                  <span>£20,000</span>
                  <span style={{ fontWeight: '700', fontSize: '20px', color: '#3276AE' }}>£35,000</span>
                  <span>£60,000</span>
                </div>
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#252728'
                }}>
                  Deposit Amount
                </label>
                <input
                  type="range"
                  min="0"
                  max="20000"
                  defaultValue="5000"
                  style={{
                    width: '100%',
                    height: '6px',
                    borderRadius: '3px',
                    outline: 'none',
                    background: '#e5e7eb'
                  }}
                />
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '8px',
                  fontSize: '14px',
                  color: '#6b7280'
                }}>
                  <span>£0</span>
                  <span style={{ fontWeight: '700', fontSize: '20px', color: '#3276AE' }}>£5,000</span>
                  <span>£20,000</span>
                </div>
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#252728'
                }}>
                  Loan Term
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '12px' }}>
                  {['24 months', '36 months', '48 months', '60 months'].map((term, index) => (
                    <button
                      key={index}
                      style={{
                        padding: '12px',
                        fontSize: '14px',
                        fontWeight: '600',
                        backgroundColor: index === 1 ? '#3276AE' : '#f8f9fa',
                        color: index === 1 ? '#ffffff' : '#252728',
                        border: index === 1 ? 'none' : '1px solid #e5e7eb',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{
                backgroundColor: '#f8f9fa',
                padding: '32px',
                borderRadius: '8px',
                border: '2px solid #3276AE'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{
                    fontSize: '16px',
                    color: '#5f5f5f',
                    marginBottom: '8px'
                  }}>
                    Estimated Monthly Payment
                  </p>
                  <p style={{
                    fontSize: '48px',
                    fontWeight: '700',
                    color: '#3276AE',
                    margin: '0'
                  }}>
                    £498
                  </p>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280',
                    marginTop: '12px'
                  }}>
                    Representative APR: 6.9% | Total amount payable: £34,928
                  </p>
                </div>
              </div>

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
                boxShadow: '0 4px 12px rgba(50, 118, 174, 0.3)',
                width: '100%'
              }}>
                Apply for Finance
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '60px',
            color: '#252728'
          }}>
            Benefits of Bank Finance
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                icon: '💳',
                title: 'Competitive Rates',
                description: 'Access to competitive interest rates from leading UK banks'
              },
              {
                icon: '🏦',
                title: 'Trusted Lenders',
                description: 'Work with established financial institutions you know and trust'
              },
              {
                icon: '⚖️',
                title: 'FCA Regulated',
                description: 'All lending partners are fully regulated by the Financial Conduct Authority'
              },
              {
                icon: '🔒',
                title: 'Immediate Ownership',
                description: 'You own the vehicle from day one with a personal loan'
              },
              {
                icon: '🔄',
                title: 'Flexibility',
                description: 'Choose your loan term and deposit amount to suit your budget'
              },
              {
                icon: '✅',
                title: 'Simple Process',
                description: 'Straightforward application with quick decisions'
              }
            ].map((benefit, index) => (
              <div key={index} style={{
                backgroundColor: '#f8f9fa',
                padding: '32px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>
                  {benefit.icon}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#3276AE'
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  fontSize: '15px',
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
            How Bank Finance Works
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px'
          }}>
            {[
              {
                number: '01',
                title: 'Choose Your Vehicle',
                description: 'Select your BYD and configure it to your preferences'
              },
              {
                number: '02',
                title: 'Get Pre-Approved',
                description: 'Complete a soft credit check to see your eligibility'
              },
              {
                number: '03',
                title: 'Compare Offers',
                description: 'Review finance options from multiple banks'
              },
              {
                number: '04',
                title: 'Complete Application',
                description: 'Submit your full application to your chosen lender'
              },
              {
                number: '05',
                title: 'Receive Funds',
                description: 'Once approved, the loan is paid directly to the dealer'
              },
              {
                number: '06',
                title: 'Drive Away',
                description: 'Collect your new BYD and start your journey'
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
                  fontSize: '48px',
                  fontWeight: '700',
                  color: '#e5e7eb',
                  lineHeight: '1'
                }}>
                  {step.number}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#252728',
                  position: 'relative',
                  zIndex: 1
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

      {/* Lending Partners */}
      <section style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#252728'
          }}>
            Our Lending Partners
          </h2>
          <p style={{
            fontSize: '18px',
            textAlign: 'center',
            marginBottom: '60px',
            color: '#5f5f5f'
          }}>
            We work with trusted UK banks to offer you the best rates
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
            alignItems: 'center'
          }}>
            {['Barclays', 'Santander', 'HSBC', 'Lloyds Bank', 'NatWest', 'TSB'].map((bank, index) => (
              <div key={index} style={{
                backgroundColor: '#f8f9fa',
                padding: '40px',
                borderRadius: '8px',
                textAlign: 'center',
                border: '1px solid #e5e7eb',
                transition: 'all 0.3s ease'
              }}>
                <p style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#252728',
                  margin: 0
                }}>
                  {bank}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '60px',
            color: '#252728'
          }}>
            Eligibility Requirements
          </h2>

          <div style={{
            backgroundColor: '#ffffff',
            padding: '50px',
            borderRadius: '8px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                'Be at least 18 years old',
                'UK resident with 3+ years address history',
                'Have a regular source of income',
                'Have a good credit history',
                'Pass affordability checks',
                'Hold a valid UK driving licence'
              ].map((requirement, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '6px'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3276AE" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <p style={{
                    fontSize: '16px',
                    color: '#252728',
                    margin: 0
                  }}>
                    {requirement}
                  </p>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: '40px',
              padding: '24px',
              backgroundColor: '#e8f4f8',
              borderRadius: '6px',
              borderLeft: '4px solid #3276AE'
            }}>
              <p style={{
                fontSize: '15px',
                color: '#252728',
                lineHeight: '1.6',
                margin: 0
              }}>
                <strong>Note:</strong> Meeting these criteria doesn't guarantee approval. All applications are subject to credit and affordability checks by the lender.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '60px',
            color: '#252728'
          }}>
            Common Questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              {
                question: 'Will applying affect my credit score?',
                answer: 'Initial soft searches won\'t affect your credit score. Only the final application involves a hard search which may impact your score.'
              },
              {
                question: 'Can I pay off my loan early?',
                answer: 'Yes, most banks allow early repayment. Some may charge an early settlement fee - check with your lender for specific terms.'
              },
              {
                question: 'What happens if I miss a payment?',
                answer: 'Contact your lender immediately if you anticipate payment difficulties. Late payments can affect your credit score and may incur charges.'
              },
              {
                question: 'Can I finance a used BYD?',
                answer: 'Yes, bank finance is available for both new and approved used BYD vehicles, subject to the lender\'s criteria.'
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
            Ready to Get Started?
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.6',
            marginBottom: '40px',
            opacity: '0.9'
          }}>
            Get a personalized finance quote in minutes with no impact on your credit score
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
              Apply Now
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
              Speak to an Advisor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
