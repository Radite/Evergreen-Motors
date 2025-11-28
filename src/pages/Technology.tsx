import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Technology = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedFold, setExpandedFold] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    consent: false
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nevTypes = [
    {
      title: 'Battery Electric Vehicle (BEV)',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop',
      points: [
        'Battery or pure-electric vehicles are all-electric. They are powered by a battery that spins an electric motor, which makes the car move. The battery in turn is typically charged by a charger at the owner\'s home, but for long trips in countries where the distance between one point to another might be hundreds of miles, at a public charging station. Because EVs do not have an engine they do not release exhaust emissions into the air.'
      ]
    },
    {
      title: 'Plug-in Hybrid Electric Vehicles (PHEV)',
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&h=400&fit=crop',
      points: [
        'A PHEV is another type of electric vehicle. Plug-in hybrid electric vehicles combine an internal combustion engine with an electric motor. They typically have a number of operating modes, permitting the driver to choose between electricity or gas, or by using electric as the primary source of energy until the vehicles run out of charge (when the internal combustion engine will then kick in), or by switching between the two sources of energy depending on the task the vehicles is undertaking. PHEVs can be charged with a home charger or at a public charging station. They also require gas for their engines.',
        'EM has developed hybrid technology with exceptional features. The technology is found in some of the trucks and off-road vehicles because of its enhanced driving performance and low fuel consumption.'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Environmental impact:',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop',
      description: 'Battery Electric Vehicles produce no exhaust, and hybrid vehicles typically produce far less than pure gas-powered vehicles, so their take-up reduces vehicle road emissions and air pollution.'
    },
    {
      title: 'Energy Efficiency:',
      image: 'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=600&h=400&fit=crop',
      description: 'Electric Vehicles are energy-efficient, especially BEVs. They are typically 85-90% energy efficient compared with 17-21% efficiency for an internal combustion engine.'
    },
    {
      title: 'Economic benefits:',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop',
      description: 'It costs much less to fully charge an electric vehicle than to fill up an equivalent gas engine model with fuel, to travel the same distance. Typically, it costs one third of the cost to operate a gas engine vehicle in the TCI. Electrical vehicles also have far fewer parts, which means they typically have far less to go wrong and far less to upkeep. Maintenance costs are therefore lower.'
    },
    {
      title: 'Advanced technology:',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      description: 'Today\'s electric cars, including all the models that we sell, feature some of the most advanced technology in their respective classes, making driving safer and more comfortable compared to a typical gas-powered vehicle.'
    }
  ];

  const differences = [
    {
      title: 'Extra energy efficiency',
      content: 'Electric vehicles get you further using the same amount of energy, or they use less energy to get you the same distance as a gas-powered vehicle. They are technologically more energy efficient than fuel-powered vehicles.'
    },
    {
      title: 'Quiet driving experience',
      content: 'Electric vehicles are much quieter on roads than gas vehicles, creating less noise for communities near busy roadways, along with a more pleasant driving experience for other road users.'
    },
    {
      title: 'Exhilarating, Responsive and Dynamic',
      content: 'Electric Vehicle motors generate instant torque, making them exponentially more responsive, and a lot more fun to drive!'
    },
    {
      title: 'Convenience and lower running costs',
      content: 'One of the main advantages of an Electric Vehicle is the convenience of being able to charge overnight, once a week or so, at home while you sleep, and not having to visit a petrol station again. A second significant advantage is the savings compared with the cost of gas to travel the same distance in an equivalent size vehicle.'
    }
  ];

  const handleSubmit = () => {
    if (formData.firstName && formData.email && formData.consent) {
      setFormSubmitted(true);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'Montserrat, Arial, sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        .hero-section {
          height: 110vh;
          background: url('/Technology/Banner.jpg') center/cover;
          display: flex;
          align-items: center;
          padding-left: 8%;
          color: white;
          position: relative;
        }

        .hero-title {
          font-size: 6rem;
          font-weight: 300;
          letter-spacing: 8px;
          font-family: 'Cormorant Garamond', serif;
          text-shadow: 2px 2px 30px rgba(0,0,0,0.7);
          margin: 0;
        }

        /* Portrait Phones (< 600px) */
        @media (max-width: 599px) {
          .hero-section {
            padding-left: 5%;
            height: 80vh;
          }

          .hero-title {
            font-size: 2.5rem !important;
            letter-spacing: 3px !important;
          }
        }

        /* Landscape Phones (600px - 767px) */
        @media (min-width: 600px) and (max-width: 767px) {
          .hero-section {
            padding-left: 6%;
            height: 85vh;
          }

          .hero-title {
            font-size: 3rem !important;
            letter-spacing: 4px !important;
          }
        }

        /* Portrait Tablets (768px - 991px) */
        @media (min-width: 768px) and (max-width: 991px) {
          .hero-section {
            padding-left: 7%;
            height: 90vh;
          }

          .hero-title {
            font-size: 4rem !important;
            letter-spacing: 5px !important;
          }
        }

        /* Landscape Tablets (992px - 1199px) */
        @media (min-width: 992px) and (max-width: 1199px) {
          .hero-section {
            padding-left: 7%;
          }

          .hero-title {
            font-size: 5rem !important;
            letter-spacing: 6px !important;
          }
        }
      `}</style>

      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">What is NEV?</h1>
      </div>

      {/* Introduction */}
      <section style={{ maxWidth: '80rem', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ fontSize: '1rem', lineHeight: '1.75', color: '#1f2937' }}>
          <p style={{ marginBottom: '1rem' }}>
            The overwhelming majority of global automakers agree that electric vehicles are the future of transportation. What they disagree about is how far off that future is, generally because the speed of take up is heavily influenced by geopolitics, so the pace of adoption and rates of penetration are uneven, but it is already more than 50% of new car purchases in a number of forward-thinking countries, so the future is here, and EM aims to hasten its progress in the TCI.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            The current electric vehicle technological landscape broadly includes pure electric vehicles, or battery electric vehicles as they are also called, and hybrid vehicles, which themselves come in a number of variants. EM overwhelmingly sells pure, or battery electric vehicles, plus less than a handful of exceptional hybrid vehicles, mainly because of their market niches and exceptional features. EM does not sell any purely internal combustion engine vehicles.
          </p>
        </div>
      </section>

      {/* Types of NEVs */}
      <section style={{ maxWidth: '80rem', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <h2 style={{ 
          fontSize: 'clamp(1.875rem, 4vw, 2.5rem)', 
          fontWeight: '700', 
          color: '#111827', 
          textAlign: 'center', 
          marginBottom: '1rem' 
        }}>
          Types of Electric Vehicles
        </h2>
        <p style={{ 
          fontSize: '1rem', 
          color: '#374151', 
          textAlign: 'center', 
          marginBottom: '2rem', 
          maxWidth: '64rem', 
          marginLeft: 'auto', 
          marginRight: 'auto' 
        }}>
          Below is a brief overview of the technology of the vehicles that we sell.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
          {nevTypes.map((type, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              style={{
                padding: '0.75rem 2rem',
                border: activeTab === index ? '2px solid #111827' : '2px solid #d1d5db',
                borderRadius: '9999px',
                backgroundColor: activeTab === index ? '#111827' : 'transparent',
                color: activeTab === index ? '#ffffff' : '#374151',
                fontSize: '0.875rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== index) {
                  e.currentTarget.style.borderColor = '#374151';
                  e.currentTarget.style.color = '#111827';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== index) {
                  e.currentTarget.style.borderColor = '#d1d5db';
                  e.currentTarget.style.color = '#374151';
                }
              }}
            >
              {type.title}
            </button>
          ))}
        </div>

        <div style={{ 
          display: 'flex',
          flexDirection: isDesktop ? 'row' : 'column',
          gap: '2rem', 
          alignItems: 'center' 
        }}>
          <div style={{ flex: 1 }}>
            <img
              src={nevTypes[activeTab].image}
              alt={nevTypes[activeTab].title}
              style={{ width: '100%', height: 'auto', borderRadius: '0rem', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            />
          </div>
          <div style={{ flex: 1, padding: isDesktop ? '0 2rem' : '0' }}>
            <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: '700', color: '#111827', marginBottom: '1rem' }}>
              {nevTypes[activeTab].title}
            </h3>
            {nevTypes[activeTab].points.map((point, i) => (
              <p key={i} style={{ fontSize: '0.875rem', color: '#374151', lineHeight: '1.75', marginBottom: '1rem' }}>
                {point}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ maxWidth: '80rem', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 2.5rem)', fontWeight: '700', color: '#111827', marginBottom: '1rem' }}>
          Electric Vehicle Benefits
        </h2>
        <p style={{ fontSize: '1rem', color: '#374151', marginBottom: '3rem' }}>
          There are a number of significant benefits that come with Electric Vehicles, which is driving the rapid global take-up and investment in these vehicles.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <div>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: isDesktop ? (index % 2 === 0 ? 'row' : 'row-reverse') : 'column',
                  gap: '2rem',
                  alignItems: 'center',
                  marginBottom: '3rem'
                }}
              >
                <div style={{ flex: 1 }}>
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    style={{ width: '100%', height: 'auto', borderRadius: '0rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  />
                </div>
                <div style={{ flex: 1, padding: isDesktop ? '0 2rem' : '0' }}>
                  <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: '700', color: '#111827', marginBottom: '1rem' }}>
                    {benefit.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#374151', lineHeight: '1.75' }}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differences - Accordion */}
      <section style={{ maxWidth: '80rem', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 2.5rem)', fontWeight: '700', color: '#111827', marginBottom: '1rem' }}>
          What's the difference between Electric Vehicle and fuel-powered car?
        </h2>
        <p style={{ fontSize: '1rem', color: '#374151', marginBottom: '2rem' }}>
          The core difference between an electric vehicle and an internal combustion engine vehicle is that an electric vehicle is powered by electricity, which produce no emissions, and an Internal Combustion Engine is powered by gas or diesel, which produces greenhouse gasses and poisonous toxins.
        </p>

        <div style={{ borderTop: '1px solid #e5e7eb' }}>
          {differences.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => setExpandedFold(expandedFold === index ? null : index)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem',
                  textAlign: 'left',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827' }}>
                  {item.title}
                </h3>
                <ChevronDown
                  style={{
                    width: '1.25rem',
                    height: '1.25rem',
                    color: '#4b5563',
                    transition: 'transform 0.3s',
                    transform: expandedFold === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                />
              </button>
              {expandedFold === index && (
                <div style={{ padding: '0 1rem 1rem 1rem' }}>
                  <p style={{ fontSize: '0.875rem', color: '#374151', lineHeight: '1.75' }}>
                    {item.content}
                  </p>
                </div>
              )}
              <div style={{ borderTop: '1px solid #e5e7eb' }}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#111827', color: '#ffffff', padding: '3rem 0' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isDesktop ? 'repeat(4, 1fr)' : '1fr',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div>
              <h4 style={{ fontWeight: '600', marginBottom: '1rem' }}>Models</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['BYD DOLPHIN SURF', 'BYD DOLPHIN', 'BYD ATTO 2', 'BYD ATTO 3', 'BYD SEAL', 'BYD SEAL U DM-i', 'BYD SEALION 7'].map((model, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>
                    <a href="#" style={{ fontSize: '0.875rem', color: '#d1d5db', textDecoration: 'none' }}
                       onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                       onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
                    >{model}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: '600', marginBottom: '1rem' }}>About BYD</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['About BYD', 'News'].map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>
                    <a href="#" style={{ fontSize: '0.875rem', color: '#d1d5db', textDecoration: 'none' }}
                       onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                       onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
                    >{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: '600', marginBottom: '1rem' }}>Purchasing</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Test Drive', 'Find a BYD Store', 'PCP Offers', 'Fleet Solutions'].map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>
                    <a href="#" style={{ fontSize: '0.875rem', color: '#d1d5db', textDecoration: 'none' }}
                       onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                       onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
                    >{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: '600', marginBottom: '1rem' }}>Ownership</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Service Maintenance', 'BYD Assistance', 'Privacy & Data'].map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>
                    <a href="#" style={{ fontSize: '0.875rem', color: '#d1d5db', textDecoration: 'none' }}
                       onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                       onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
                    >{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div style={{ borderTop: '1px solid #374151', paddingTop: '2rem' }}>
            <div style={{
              display: 'flex',
              flexDirection: isDesktop ? 'row' : 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
                © BYD Europe B.V. All rights reserved.
              </div>
              <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem', color: '#9ca3af' }}>
                {['Privacy Policy', 'Terms of Use', 'Cookies', 'Contact'].map((item, i) => (
                  <a key={i} href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}
                     onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                     onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                  >{item}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Technology;