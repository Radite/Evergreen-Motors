import React from 'react';

const FinanceBank: React.FC = () => {
  return (
    <div>
      <div className="page-header">
        <h1>Bank Financing</h1>
        <p>Flexible financing options for your BYD</p>
      </div>

      <section className="section">
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <h2 style={{marginBottom: '2rem', color: '#4a9eff'}}>Bank Financing Options</h2>
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#666'}}>
            Partner with leading financial institutions to secure competitive rates for your BYD electric vehicle. 
            Our banking partners offer flexible terms tailored to your financial situation.
          </p>

          <div className="cards-grid">
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">💰 Competitive Rates</h3>
                <p className="card-description">
                  Access to preferential interest rates through our partner banks
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">📅 Flexible Terms</h3>
                <p className="card-description">
                  Choose repayment periods from 24 to 84 months
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">✅ Quick Approval</h3>
                <p className="card-description">
                  Fast pre-approval process, often within 24 hours
                </p>
              </div>
            </div>
          </div>

          <div style={{marginTop: '3rem', padding: '2rem', background: '#f5f5f5', borderRadius: '12px'}}>
            <h3 style={{marginBottom: '1rem'}}>Financing Process</h3>
            <ol style={{paddingLeft: '1.5rem', lineHeight: '2'}}>
              <li>Submit financing application to partner bank</li>
              <li>Receive pre-approval and rate quote</li>
              <li>Select your BYD vehicle</li>
              <li>Finalize loan terms and complete documentation</li>
              <li>Take delivery of your new BYD</li>
            </ol>
          </div>

          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <p style={{fontSize: '1.1rem'}}>
              For more information, contact: <a href="mailto:finance@byd.com" style={{color: '#4a9eff'}}>finance@byd.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinanceBank;
