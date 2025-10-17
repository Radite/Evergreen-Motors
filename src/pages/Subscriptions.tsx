import React from 'react';

const Subscriptions: React.FC = () => {
  return (
    <div>
      <div className="page-header">
        <h1>Vehicle Subscriptions</h1>
        <p>All-inclusive vehicle access</p>
      </div>
      <section className="section">
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <h2 style={{marginBottom: '2rem', color: '#4a9eff'}}>Subscription Service</h2>
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#666'}}>
            Enjoy the flexibility of driving a BYD with our all-inclusive subscription service. Insurance, maintenance, and roadside assistance all included in one monthly payment.
          </p>
          <ul className="info-list">
            <li><strong>All-Inclusive:</strong> Insurance, maintenance, and registration included</li>
            <li><strong>No Long-Term Commitment:</strong> Month-to-month flexibility</li>
            <li><strong>Switch Models:</strong> Change vehicles as your needs evolve</li>
            <li><strong>Hassle-Free:</strong> No down payment or credit check required</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Subscriptions;
