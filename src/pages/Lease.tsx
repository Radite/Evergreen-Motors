import React from 'react';

const Lease: React.FC = () => {
  return (
    <div>
      <div className="page-header">
        <h1>Leasing Options</h1>
        <p>Drive a BYD with flexible lease terms</p>
      </div>

      <section className="section">
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <h2 style={{marginBottom: '2rem', color: '#4a9eff'}}>Why Lease?</h2>
          <ul className="info-list">
            <li><strong>Lower Monthly Payments:</strong> Pay less than traditional financing</li>
            <li><strong>Latest Technology:</strong> Upgrade to newer models every few years</li>
            <li><strong>Warranty Coverage:</strong> Most leases covered by manufacturer warranty</li>
            <li><strong>Tax Benefits:</strong> Potential business tax deductions</li>
            <li><strong>No Resale Hassle:</strong> Simply return the vehicle at lease end</li>
          </ul>

          <div style={{marginTop: '3rem'}}>
            <h3 style={{marginBottom: '1.5rem'}}>Typical Lease Terms</h3>
            <div className="cards-grid">
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title">24-Month Lease</h3>
                  <p className="card-description">Short-term flexibility with the latest models</p>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title">36-Month Lease</h3>
                  <p className="card-description">Most popular option, balanced payments</p>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title">48-Month Lease</h3>
                  <p className="card-description">Lowest monthly payments, extended term</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <p style={{fontSize: '1.1rem'}}>
              Contact us for lease quotes: <a href="mailto:lease@byd.com" style={{color: '#4a9eff'}}>lease@byd.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lease;
