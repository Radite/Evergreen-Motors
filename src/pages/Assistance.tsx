import React from 'react';

const AssistancePage: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Montserrat, Arial, sans-serif', color: '#252728' }}>
      {/* Banner Section */}
      <div style={{ position: 'relative', width: '100%', height: '120VH', overflow: 'hidden' }}>
        <picture>
          <source media="(max-width: 991px)" srcSet="/images/assistance-banner-mob.jpg" />
          <img 
            src="/Assistance/Banner.jpg" 
            alt="BYD Assistance"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </picture>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '5%',
          transform: 'translateY(-50%)',
          color: '#fff',
          zIndex: 2
        }}>
          <h1 style={{ fontSize: '56px', fontWeight: 600, margin: 0 }}>
            BYD Assistance
          </h1>
        </div>
      </div>

      {/* Introduction Text */}
      <div style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '40px' }}>
          The BYD Assistance is part of our mobility promise – for example when it comes to breakdowns, 
          accidents, theft or vandalism, BYD Assistance will be there to help you, 24/7 365 days a year.
        </p>

        {/* Hotline Section */}
        <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', marginTop: '60px' }}>
          BYD Assistance Hotline Number.
        </h2>
        <p style={{ fontSize: '16px', marginBottom: '15px' }}>
          If you need immediate assistance please contact:
        </p>
        <p style={{ fontSize: '20px', fontWeight: 600, color: '#BB0A0A', marginBottom: '10px' }}>
          <a href="tel:00800-10203000" style={{ color: '#BB0A0A', textDecoration: 'none' }}>
            00800-10203000
          </a> (free of charge)
        </p>
        <p style={{ fontSize: '16px', marginBottom: '10px' }}>or</p>
        <p style={{ fontSize: '20px', fontWeight: 600, color: '#BB0A0A', marginBottom: '30px' }}>
          +44 2033072546
        </p>
        <p style={{ fontSize: '14px', color: '#666' }}>
          if your phone provider charges for freephone numbers.
        </p>

        {/* Coverage Section */}
        <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px', marginTop: '60px' }}>
          BYD Assistance Cover.
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>
          BYD Assistance is valid for a period of<br />
          EV Customers: <strong>24 months + 24 months</strong><br />
          DM Customers: <strong>24 months 12 months + 12 months</strong><br />
          from the date of delivery
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>
          We provide assistance when eligible events happen. "Eligible Events" means the driver of the 
          Vehicle is not allowed to continue driving as a result of <strong>a breakdown, accident, theft attempt, or fire</strong>.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
          Coverage: Pan-European Assistance
        </p>
      </div>

      {/* Service Cards Section */}
      <div style={{ maxWidth: '1600px', margin: '80px auto', padding: '0 20px' }}>
        {/* Roadside Assistance Card */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#FFF',
          padding: '64px',
          marginBottom: '40px',
          gap: '60px'
        }}>
          <div style={{ flex: 1 }}>
            <picture>
              <img 
                src="/Assistance/1.jpg" 
                alt="Roadside Assistance"
                style={{ width: '100%', height: 'auto' }}
              />
            </picture>
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>
              Roadside Assistance Benefits.
            </h2>
            <ul style={{ fontSize: '14px', lineHeight: '1.8', paddingLeft: '20px' }}>
              <li><strong>Help on the phone.</strong></li>
              <li><strong>Repair on Spot.</strong></li>
              <li><strong>Towage Services.</strong></li>
            </ul>
            <a 
              href="/assistance-pdf" 
              style={{
                display: 'inline-block',
                marginTop: '20px',
                padding: '10px 50px',
                backgroundColor: '#252728',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '16px',
                transition: 'all 0.3s'
              }}
            >
              Find out more
            </a>
          </div>
        </div>

        {/* Additional Benefits Card */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#FFF',
          padding: '64px',
          marginBottom: '40px',
          gap: '60px',
          flexDirection: 'row-reverse'
        }}>
          <div style={{ flex: 1 }}>
            <picture>
              <img 
                src="/Assistance/2.jpg" 
                alt="Additional Benefits"
                style={{ width: '100%', height: 'auto' }}
              />
            </picture>
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>
              Additional Benefits.
            </h2>
            <ul style={{ fontSize: '14px', lineHeight: '1.8', paddingLeft: '20px' }}>
              <li><strong>Replacement vehicle.</strong></li>
              <li><strong>Onward journey and accommodation.</strong></li>
              <li><strong>Transfer costs.</strong></li>
              <li><strong>Repatriation.</strong></li>
            </ul>
            <a 
              href="/assistance-pdf" 
              style={{
                display: 'inline-block',
                marginTop: '20px',
                padding: '10px 50px',
                backgroundColor: '#252728',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '16px'
              }}
            >
              Find out more
            </a>
          </div>
        </div>

        {/* Customer Service Center Card */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#FFF',
          padding: '64px',
          marginBottom: '40px',
          gap: '60px',
          flexDirection: 'row-reverse'
        }}>
          <div style={{ flex: 1 }}>
            <picture>
              <source media="(max-width: 991px)" srcSet="/images/customer-service-mob.jpg" />
              <img 
                src="/Assistance/3.jpg" 
                alt="Customer Service"
                style={{ width: '100%', height: 'auto' }}
              />
            </picture>
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>
              BYD Customer Service Center.
            </h2>
            <ul style={{ fontSize: '14px', lineHeight: '1.8', paddingLeft: '20px', listStyle: 'none' }}>
              <li style={{ marginBottom: '15px' }}>
                <strong>The BYD Customer Service Center is the efficient way to contact BYD directly. 
                BYD is much willing to know your voice.</strong>
              </li>
              <li style={{ marginBottom: '10px' }}><strong>Location: Lublin, Poland.</strong></li>
              <li style={{ marginBottom: '10px' }}>
                <strong>Service Hours: Monday to Saturday 9:00 AM-18:00 PM.</strong>
              </li>
              <li>
                <strong>Available Service Languages: English, German, French, Italian, Spanish 
                (More language service will be available soon).</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          In the case of events not listed above, we are still ready to be there for you by attempting 
          Help on the phone, Repair on Spot or towage services to the nearest Authorised BYD Repairer, 
          but you may need to provide payment for them.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
          To find out more details about BYD roadside assistance, please read the following document:
        </p>
        <p style={{ marginTop: '15px' }}>
          <a 
            href="/assistance-pdf" 
            style={{ 
              color: '#252728', 
              textDecoration: 'underline',
              fontWeight: 600,
              fontSize: '16px'
            }}
          >
            BYD Roadside Assistance Terms and Conditions
          </a>
        </p>
      </div>


      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 991px) {
          h1 {
            font-size: 32px !important;
          }
          h2 {
            font-size: 24px !important;
          }
          div[style*="flex"] {
            flex-direction: column !important;
          }
          div[style*="padding: 64px"] {
            padding: 30px 20px !important;
          }
          div[style*="gap: 60px"] {
            gap: 30px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AssistancePage;