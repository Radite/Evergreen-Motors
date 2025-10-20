export default function FleetBusinessSolutions() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#252728', backgroundColor: '#ffffff' }}>
      <section style={{
        minHeight: '500px',
        background: 'linear-gradient(135deg, #1a2a6c 0%, #b21f1f 50%, #fdbb2d 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '900px', color: '#ffffff' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '20px', lineHeight: '1.2' }}>
            Fleet & Business Solutions
          </h1>
          <p style={{ fontSize: '20px', lineHeight: '1.6', marginBottom: '40px', opacity: '0.9' }}>
            Electrify your fleet with BYD's comprehensive business solutions
          </p>
          <button style={{
            backgroundColor: '#ffffff', color: '#1a2a6c', padding: '16px 48px',
            fontSize: '16px', fontWeight: '600', border: 'none', borderRadius: '4px',
            cursor: 'pointer', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
          }}>
            Get Fleet Quote
          </button>
        </div>
      </section>

      <section style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto 60px', textAlign: 'center' }}>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#5f5f5f' }}>
              Upgrade your business fleet to electric with BYD fleet cars - where innovation meets reliability. Our advanced vehicle lineup is built to support fleet operations with impressive range, low running costs, and class-leading technology. From the agile and practical BYD ATTO 3 EV to the versatile BYD SEAL U DM-i SUV plug-in hybrid, every BYD fleet model is designed for performance, comfort, and sustainability - without compromise.
            </p>
          </div>
          
          <h2 style={{ fontSize: '36px', fontWeight: '700', textAlign: 'center', marginBottom: '60px', color: '#252728' }}>
            Benefits of BYD Company Cars
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {[
              {
                icon: '⚡',
                title: 'Cutting-edge Electrification',
                description: 'Go further for longer thanks to BYD\'s industry-leading battery technology'
              },
              {
                icon: '💰',
                title: 'Cost Savings',
                description: 'Switch to all-electric or hybrid driving and reduce your company\'s spend on petrol and diesel'
              },
              {
                icon: '⭐',
                title: '5-star Euro NCAP Safety Ratings',
                description: 'Thanks to our advanced safety features and suite of driver assistance systems, your team can travel safely and without worry'
              },
              {
                icon: '🚗',
                title: 'Options for Everyone',
                description: 'Choose from a wide selection of electric and plug-in hybrid vehicles, to suit your fleet needs. Scalable solutions for fleets of any size'
              },
              {
                icon: '🛠️',
                title: 'Support When You Need It',
                description: 'Our team of experts provides comprehensive support, from help choosing a vehicle to ongoing maintenance'
              },
              {
                icon: '😊',
                title: 'Driver Satisfaction',
                description: 'High specification is standard giving your team an elevated driving experience'
              },
              {
                icon: '🛡️',
                title: 'Industry-Leading Warranty',
                description: 'As standard, your BYD fleet vehicle will be covered by a 6-year or 93,750-mile vehicle warranty and an 8-year or 155,350-mile battery warranty'
              },
              {
                icon: '🌱',
                title: 'ESG Alignment',
                description: 'Reduced emissions for ESG alignment and corporate sustainability goals'
              }
            ].map((benefit, index) => (
              <div key={index} style={{
                backgroundColor: '#f8f9fa', padding: '32px', borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)', transition: 'all 0.3s ease'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '20px', textAlign: 'center' }}>
                  {benefit.icon}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#1a2a6c' }}>
                  {benefit.title}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#5f5f5f' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', textAlign: 'center', marginBottom: '60px', color: '#252728' }}>
            Discover Our Models
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              {
                model: 'BYD DOLPHIN SURF',
                type: 'Compact Electric City Car',
                tag: 'All Electric'
              },
              {
                model: 'BYD DOLPHIN',
                type: 'Compact Electric Hatchback',
                tag: 'All Electric'
              },
              {
                model: 'BYD ATTO 2',
                type: 'Electric Small SUV',
                tag: 'All Electric'
              },
              {
                model: 'BYD ATTO 3',
                type: 'Electric Compact SUV',
                tag: 'All Electric'
              },
              {
                model: 'BYD SEAL',
                type: 'Executive Electric Saloon',
                tag: 'All Electric'
              },
              {
                model: 'BYD SEALION 7',
                type: 'Electric SUV',
                tag: 'All Electric'
              },
              {
                model: 'BYD SEAL U DM-i',
                type: 'Plug-in Hybrid SUV',
                tag: 'Plug-in Hybrid'
              }
            ].map((vehicle, index) => (
              <div key={index} style={{
                backgroundColor: '#ffffff', padding: '30px', borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)', transition: 'all 0.3s ease'
              }}>
                <div style={{
                  backgroundColor: vehicle.tag === 'All Electric' ? '#1a2a6c' : '#b21f1f',
                  color: '#ffffff', padding: '6px 12px', borderRadius: '4px',
                  fontSize: '12px', fontWeight: '600', display: 'inline-block', marginBottom: '16px'
                }}>
                  {vehicle.tag}
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '8px', color: '#252728' }}>
                  {vehicle.model}
                </h3>
                <p style={{ fontSize: '15px', color: '#5f5f5f', marginBottom: '24px' }}>
                  {vehicle.type}
                </p>
                <button style={{
                  width: '100%', backgroundColor: '#1a2a6c', color: '#ffffff', padding: '12px',
                  fontSize: '14px', fontWeight: '600', border: 'none', borderRadius: '4px',
                  cursor: 'pointer', marginBottom: '8px'
                }}>
                  Learn More
                </button>
                <button style={{
                  width: '100%', backgroundColor: '#ffffff', color: '#1a2a6c', padding: '12px',
                  fontSize: '14px', fontWeight: '600', border: '2px solid #1a2a6c', borderRadius: '4px', cursor: 'pointer'
                }}>
                  Request Fleet Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', textAlign: 'center', marginBottom: '60px', color: '#252728' }}>
            Our Fleet Services
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {[
              {
                title: 'Fleet Consultation',
                description: 'Expert advice on transitioning your fleet to electric vehicles'
              },
              {
                title: 'Volume Discounts',
                description: 'Competitive pricing for fleet orders of 5+ vehicles'
              },
              {
                title: 'Flexible Finance',
                description: 'Tailored finance packages including leasing and outright purchase'
              },
              {
                title: 'Maintenance Plans',
                description: 'Comprehensive service packages to keep your fleet running smoothly'
              },
              {
                title: 'Charging Solutions',
                description: 'Workplace charging infrastructure planning and installation'
              },
              {
                title: 'Fleet Management',
                description: 'Digital tools to monitor and manage your entire fleet'
              },
              {
                title: 'Driver Training',
                description: 'EV training programs for your drivers to maximize efficiency'
              },
              {
                title: 'Priority Support',
                description: 'Dedicated account manager and 24/7 business support'
              }
            ].map((service, index) => (
              <div key={index} style={{
                backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)', textAlign: 'center'
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#1a2a6c' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#5f5f5f' }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', textAlign: 'center', marginBottom: '20px', color: '#252728' }}>
            Get Started With BYD Fleet
          </h2>
          <p style={{ fontSize: '18px', textAlign: 'center', marginBottom: '50px', color: '#5f5f5f' }}>
            Tell us about your business and we'll create a tailored fleet solution
          </p>

          <div style={{
            backgroundColor: '#ffffff', padding: '50px', borderRadius: '8px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
          }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                  <label style={{
                    display: 'block', fontSize: '14px', fontWeight: '600',
                    marginBottom: '8px', color: '#252728'
                  }}>
                    Company Name *
                  </label>
                  <input type="text" style={{
                    width: '100%', padding: '12px 16px', fontSize: '16px',
                    border: '1px solid #d1d5db', borderRadius: '4px', boxSizing: 'border-box'
                  }} />
                </div>
                <div>
                  <label style={{
                    display: 'block', fontSize: '14px', fontWeight: '600',
                    marginBottom: '8px', color: '#252728'
                  }}>
                    Industry *
                  </label>
                  <select style={{
                    width: '100%', padding: '12px 16px', fontSize: '16px',
                    border: '1px solid #d1d5db', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#ffffff'
                  }}>
                    <option>Please select</option>
                    <option>Construction</option>
                    <option>Healthcare</option>
                    <option>Logistics & Transport</option>
                    <option>Professional Services</option>
                    <option>Retail</option>
                    <option>Technology</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                  <label style={{
                    display: 'block', fontSize: '14px', fontWeight: '600',
                    marginBottom: '8px', color: '#252728'
                  }}>
                    Full Name *
                  </label>
                  <input type="text" style={{
                    width: '100%', padding: '12px 16px', fontSize: '16px',
                    border: '1px solid #d1d5db', borderRadius: '4px', boxSizing: 'border-box'
                  }} />
                </div>
                <div>
                  <label style={{
                    display: 'block', fontSize: '14px', fontWeight: '600',
                    marginBottom: '8px', color: '#252728'
                  }}>
                    Job Title *
                  </label>
                  <input type="text" style={{
                    width: '100%', padding: '12px 16px', fontSize: '16px',
                    border: '1px solid #d1d5db', borderRadius: '4px', boxSizing: 'border-box'
                  }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                  <label style={{
                    display: 'block', fontSize: '14px', fontWeight: '600',
                    marginBottom: '8px', color: '#252728'
                  }}>
                    Email *
                  </label>
                  <input type="email" style={{
                    width: '100%', padding: '12px 16px', fontSize: '16px',
                    border: '1px solid #d1d5db', borderRadius: '4px', boxSizing: 'border-box'
                  }} />
                </div>
                <div>
                  <label style={{
                    display: 'block', fontSize: '14px', fontWeight: '600',
                    marginBottom: '8px', color: '#252728'
                  }}>
                    Phone Number *
                  </label>
                  <input type="tel" style={{
                    width: '100%', padding: '12px 16px', fontSize: '16px',
                    border: '1px solid #d1d5db', borderRadius: '4px', boxSizing: 'border-box'
                  }} />
                </div>
              </div>

              <div>
                <label style={{
                  display: 'block', fontSize: '14px', fontWeight: '600',
                  marginBottom: '8px', color: '#252728'
                }}>
                  Fleet Size *
                </label>
                <select style={{
                  width: '100%', padding: '12px 16px', fontSize: '16px',
                  border: '1px solid #d1d5db', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#ffffff'
                }}>
                  <option>Please select</option>
                  <option>5-10 vehicles</option>
                  <option>11-25 vehicles</option>
                  <option>26-50 vehicles</option>
                  <option>51-100 vehicles</option>
                  <option>100+ vehicles</option>
                </select>
              </div>

              <div>
                <label style={{
                  display: 'block', fontSize: '14px', fontWeight: '600',
                  marginBottom: '8px', color: '#252728'
                }}>
                  Your Requirements
                </label>
                <textarea rows={4} style={{
                  width: '100%', padding: '12px 16px', fontSize: '16px',
                  border: '1px solid #d1d5db', borderRadius: '4px', boxSizing: 'border-box',
                  fontFamily: 'Arial, sans-serif', resize: 'vertical'
                }} placeholder="Tell us about your fleet requirements..."></textarea>
              </div>

              <button type="submit" style={{
                backgroundColor: '#1a2a6c', color: '#ffffff', padding: '16px 48px',
                fontSize: '16px', fontWeight: '600', border: 'none', borderRadius: '4px',
                cursor: 'pointer', boxShadow: '0 4px 12px rgba(26, 42, 108, 0.3)', marginTop: '16px'
              }}>
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 20px', backgroundColor: '#1a2a6c', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', color: '#ffffff' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '20px', lineHeight: '1.2' }}>
            Ready to Electrify Your Fleet?
          </h2>
          <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '40px', opacity: '0.9' }}>
            Our fleet specialists are ready to help you transition to electric
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              backgroundColor: '#ffffff', color: '#1a2a6c', padding: '16px 48px',
              fontSize: '16px', fontWeight: '600', border: 'none', borderRadius: '4px',
              cursor: 'pointer', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}>
              Contact Fleet Team
            </button>
            <button style={{
              backgroundColor: 'transparent', color: '#ffffff', padding: '16px 48px',
              fontSize: '16px', fontWeight: '600', border: '2px solid #ffffff',
              borderRadius: '4px', cursor: 'pointer'
            }}>
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
