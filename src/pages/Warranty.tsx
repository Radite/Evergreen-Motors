import React from 'react';

const Warranty: React.FC = () => {
  return (
    <div>
      <div className="page-header">
        <h1>Warranty Coverage</h1>
        <p>Comprehensive protection for your BYD</p>
      </div>
      <section className="section">
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <h2 style={{marginBottom: '2rem', color: '#4a9eff'}}>Industry-Leading Warranty</h2>
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '3rem', color: '#666'}}>
            BYD offers one of the most comprehensive warranty programs in the electric vehicle industry, giving you confidence and peace of mind.
          </p>
          <div className="cards-grid">
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">Vehicle Warranty</h3>
                <p className="card-description">
                  <strong>6 years / 150,000 miles</strong><br/>
                  Comprehensive coverage for the entire vehicle
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">Battery Warranty</h3>
                <p className="card-description">
                  <strong>8 years / 150,000 miles</strong><br/>
                  Blade Battery coverage with capacity guarantee
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">Powertrain Warranty</h3>
                <p className="card-description">
                  <strong>8 years / 150,000 miles</strong><br/>
                  Electric motor and drivetrain coverage
                </p>
              </div>
            </div>
          </div>
          <div style={{marginTop: '3rem'}}>
            <h3>What's Covered</h3>
            <ul className="info-list">
              <li>Electric motor and power electronics</li>
              <li>Battery pack and battery management system</li>
              <li>Charging system components</li>
              <li>Structural and body components</li>
              <li>Interior components and systems</li>
              <li>Safety systems and features</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Warranty;
