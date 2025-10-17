import React from 'react';

const Membership: React.FC = () => {
  return (
    <div>
      <div className="page-header">
        <h1>EM Membership & Charge Cards</h1>
        <p>Exclusive benefits for BYD owners</p>
      </div>
      <section className="section">
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <h2 style={{marginBottom: '2rem', color: '#4a9eff'}}>EM Membership Program</h2>
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '3rem', color: '#666'}}>
            Join the BYD EM Membership program and enjoy exclusive benefits, charging discounts, and priority service.
          </p>
          <div className="cards-grid">
            <div className="card">
              <div className="card-image">⭐</div>
              <div className="card-content">
                <h3 className="card-title">Priority Service</h3>
                <p className="card-description">Skip the line with priority service appointments</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">🔌</div>
              <div className="card-content">
                <h3 className="card-title">Charging Discounts</h3>
                <p className="card-description">Save up to 20% on public charging networks</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">🎁</div>
              <div className="card-content">
                <h3 className="card-title">Exclusive Perks</h3>
                <p className="card-description">Access to member-only events and offers</p>
              </div>
            </div>
          </div>
          <div style={{marginTop: '3rem'}}>
            <h3>Charge Card Benefits</h3>
            <ul className="info-list">
              <li><strong>Universal Access:</strong> Use at thousands of charging stations</li>
              <li><strong>Mobile App:</strong> Find, reserve, and pay for charging</li>
              <li><strong>Billing Integration:</strong> Consolidated monthly billing</li>
              <li><strong>Charging History:</strong> Track your charging sessions and costs</li>
            </ul>
          </div>
          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <p>Learn more: <a href="mailto:membership@byd.com" style={{color: '#4a9eff'}}>membership@byd.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
