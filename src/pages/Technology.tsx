import React, { useState } from 'react';
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

  const nevTypes = [
    {
      title: 'Battery Electric Vehicle (BEV)',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop',
      points: [
        'Battery-electric vehicles are all-electric. They are powered solely by a battery that powers an electric motor to make the car move. This battery is charged externally by plugging the vehicle into a charger installed at your home or in public. Because it doesn\'t have an engine, it doesn\'t release exhaust emissions into the atmosphere.'
      ]
    },
    {
      title: 'Plug-in Hybrid Electric Vehicles (PHEV)',
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&h=400&fit=crop',
      points: [
        'A PHEV is another type of NEV. Plug-in electric vehicles combine an internal combustion engine with an electric motor. This type of NEV will primarily run on electricity until it runs out of charge. This is when the internal combustion engine will kick in. PHEVs can be charged externally with a home charger or at a public charging station.',
        'BYD has developed a hybrid technology unlike any other. Super DM Technology is the driving force behind our PHEVs. It boasts a range of benefits including enhanced driving performance and low fuel consumption.'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Environmental impact:',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop',
      description: 'NEVs can be used to reduce emissions on the road. NEVs including battery-electric and plug-in hybrid vehicles all produce less greenhouse gas emissions and less air pollution than fuel-powered vehicles.'
    },
    {
      title: 'Energy Efficiency:',
      image: 'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=600&h=400&fit=crop',
      description: 'NEVs are incredibly energy-efficient, especially BEVs. They are approximately 85-90% efficient compared to an internal combustion engine\'s 17-21% efficiency.'
    },
    {
      title: 'Economic benefits:',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop',
      description: 'NEVs offer drivers a range of economic benefits including costing less to charge your car than to fill up with fuel. Fewer parts in NEVs mean less to spend on upkeep.'
    },
    {
      title: 'Advanced technology:',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      description: 'Many NEVs including BYD electric cars feature some of the most advanced technology to make driving safer and more comfortable.'
    }
  ];

  const differences = [
    {
      title: 'Extra energy efficiency',
      content: 'NEVs are more energy efficient than fuel-powered vehicles. New energy vehicles get you further by using less energy.'
    },
    {
      title: 'Quiet driving experience',
      content: 'NEVs are quieter when on the road. They make less noise for a smooth drive compared to cars with internal combustion engines.'
    },
    {
      title: 'Exhilarating, Responsive and Dynamic',
      content: 'NEVs offer instant torque, making them fun to drive!'
    },
    {
      title: 'Lower running costs',
      content: 'One of the main advantages of NEVs is being able to top-up at home. Not only do you not need to visit a petrol station, but you can save money too.'
    }
  ];

  const handleSubmit = () => {
    if (formData.firstName && formData.email && formData.consent) {
      setFormSubmitted(true);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'Montserrat, Arial, sans-serif' }}>
      {/* Hero Section */}
      <section style={{ position: 'relative', height: '414px', overflow: 'hidden' }}>
        <img
          src="/Technology/Banner.png"
          alt="BYD NEV Hero"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          display: 'flex', 
          alignItems: 'center', 
          padding: '0 2rem',
        }}>
          <h1 style={{ 
            color: 'white', 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
            fontWeight: '700',
            lineHeight: '1.2'
          }}>
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section style={{ maxWidth: '56rem', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ fontSize: '1rem', lineHeight: '1.75', color: '#1f2937' }}>
          <p style={{ marginBottom: '1rem' }}>
            Over the last few years, electric cars have become more popular with more of them appearing on our roads. Typically, these are referred to as EVs. But there is another term that you may not be familiar with — NEV.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Not to be confused with 'neighbourhood electric vehicle', NEV stands for 'New Energy Vehicle' and is a term used to describe all types of electric vehicles, from battery-powered fully electric vehicles to plug-in hybrid cars.
          </p>
          <p>
            BYD is the No.1 NEV Maker, so we're well placed to explain everything you need to know about NEVs. Below, we'll take a closer look at different types of NEVs and the benefits of these vehicles.
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
          Types of NEVs
        </h2>
        <p style={{ 
          fontSize: '1rem', 
          color: '#374151', 
          textAlign: 'center', 
          marginBottom: '2rem', 
          maxWidth: '48rem', 
          marginLeft: 'auto', 
          marginRight: 'auto' 
        }}>
          NEV is an all-encompassing term used to describe vehicles that are powered by alternatives to fossil fuels — like electricity. Some of the most common types of NEVs include:
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
          {nevTypes.map((type, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              style={{
                padding: '0.75rem 2rem',
                fontWeight: '600',
                transition: 'all 0.3s',
                backgroundColor: activeTab === index ? '#111827' : '#ffffff',
                color: activeTab === index ? '#ffffff' : '#111827',
                border: '1px solid #111827',
                cursor: 'pointer',
                fontSize: '0.875rem'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== index) {
                  e.currentTarget.style.backgroundColor = '#111827';
                  e.currentTarget.style.color = '#ffffff';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== index) {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.color = '#111827';
                }
              }}
            >
              {type.title}
            </button>
          ))}
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
          gap: '2rem', 
          alignItems: 'center' 
        }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', marginBottom: '1rem' }}>
              {nevTypes[activeTab].title}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {nevTypes[activeTab].points.map((point, idx) => (
                <li key={idx} style={{ display: 'flex', gap: '0.5rem', color: '#374151', fontSize: '0.875rem', lineHeight: '1.75', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.5rem', lineHeight: '1' }}>•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src={nevTypes[activeTab].image}
              alt={nevTypes[activeTab].title}
              style={{ width: '100%', height: 'auto', borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
            />
          </div>
        </div>
      </section>

      {/* NEV Benefits */}
      <section style={{ backgroundColor: '#f9fafb', padding: '4rem 0' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ 
            fontSize: 'clamp(1.875rem, 4vw, 2.5rem)', 
            fontWeight: '700', 
            color: '#111827', 
            textAlign: 'center', 
            marginBottom: '1rem' 
          }}>
            NEV Benefits
          </h2>
          <p style={{ 
            fontSize: '1rem', 
            color: '#374151', 
            textAlign: 'center', 
            marginBottom: '3rem', 
            maxWidth: '48rem', 
            marginLeft: 'auto', 
            marginRight: 'auto' 
          }}>
            There's a range of benefits that come with NEVs, resulting in these cars becoming more popular on our roads.
          </p>

          <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: window.innerWidth >= 768 ? (index % 2 === 1 ? 'row-reverse' : 'row') : 'column',
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
                <div style={{ flex: 1, padding: window.innerWidth >= 768 ? '0 2rem' : '0' }}>
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
      <section style={{ maxWidth: '56rem', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 2.5rem)', fontWeight: '700', color: '#111827', marginBottom: '1rem' }}>
          What's the difference between NEV and fuel-powered cars?
        </h2>
        <p style={{ fontSize: '1rem', color: '#374151', marginBottom: '2rem' }}>
          The primary difference between New Energy Vehicles and fuel-powered cars with internal combustion engines is the way they are fuelled — NEVs on electricity and ICE cars on petrol or diesel.
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

      {/* CTA Section */}
      <section style={{ backgroundColor: '#f3f4f6', padding: '4rem 0' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <p style={{ fontSize: '1rem', color: '#374151', marginBottom: '1.5rem', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto' }}>
            With a range of NEVs to choose from, whether that's fully electric or plug-in hybrid, new energy vehicles give drivers the option to reduce their carbon footprint in a way that suits their lifestyle.
          </p>
          <a 
            href="/models"
            style={{
              display: 'inline-block',
              backgroundColor: '#111827',
              color: '#ffffff',
              padding: '0.75rem 2rem',
              fontWeight: '600',
              border: '1px solid #111827',
              cursor: 'pointer',
              transition: 'all 0.3s',
              fontSize: '0.875rem',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = '#111827';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#111827';
              e.currentTarget.style.color = '#ffffff';
            }}
          >
            Discover BYD's NEV models
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#111827', color: '#ffffff', padding: '3rem 0' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(4, 1fr)' : '1fr',
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
              flexDirection: window.innerWidth >= 768 ? 'row' : 'column',
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