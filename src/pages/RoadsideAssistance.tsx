import React from 'react';

const RoadsideAssistance: React.FC = () => {
  return (
    <div>
      <div className="page-header">
        <h1>EM Roadside Assistance</h1>
        <p>24/7 support when you need it</p>
      </div>
      <section className="section">
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <h2 style={{marginBottom: '2rem', color: '#4a9eff'}}>Always There for You</h2>
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '3rem', color: '#666'}}>
            BYD EM Roadside Assistance provides comprehensive support 24 hours a day, 7 days a week, ensuring peace of mind on every journey.
          </p>
          <div className="cards-grid">
            <div className="card">
              <div className="card-image">🔧</div>
              <div className="card-content">
                <h3 className="card-title">Emergency Repairs</h3>
                <p className="card-description">On-site minor repairs and troubleshooting</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">🚗</div>
              <div className="card-content">
                <h3 className="card-title">Towing Service</h3>
                <p className="card-description">Free towing to nearest BYD service center</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">🔋</div>
              <div className="card-content">
                <h3 className="card-title">Emergency Charging</h3>
                <p className="card-description">Mobile charging assistance if you run out of power</p>
              </div>
            </div>
          </div>
          <div style={{marginTop: '3rem', padding: '2rem', background: '#f5f5f5', borderRadius: '12px', textAlign: 'center'}}>
            <h3 style={{marginBottom: '1rem'}}>Emergency Contact</h3>
            <p style={{fontSize: '1.5rem', color: '#4a9eff', fontWeight: 'bold'}}>1-800-BYD-HELP</p>
            <p style={{color: '#666', marginTop: '1rem'}}>Available 24/7/365</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoadsideAssistance;
