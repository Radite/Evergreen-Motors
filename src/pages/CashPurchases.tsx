import React from 'react';

const CashPurchases: React.FC = () => {
  return (
    <div>
      <div className="page-header">
        <h1>Cash Purchases</h1>
        <p>Simple, straightforward vehicle ownership</p>
      </div>

      <section className="section">
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <h2 style={{marginBottom: '2rem', color: '#4a9eff'}}>Benefits of Cash Purchase</h2>
          <ul className="info-list">
            <li><strong>No Interest Payments:</strong> Own your vehicle outright without financing charges</li>
            <li><strong>Immediate Ownership:</strong> Full ownership from day one with no monthly payments</li>
            <li><strong>Simplified Process:</strong> Faster purchase process with less paperwork</li>
            <li><strong>No Credit Checks:</strong> Purchase without credit approval requirements</li>
            <li><strong>Negotiating Power:</strong> Potential for better pricing with cash payment</li>
          </ul>

          <div style={{marginTop: '3rem', padding: '2rem', background: '#f5f5f5', borderRadius: '12px'}}>
            <h3 style={{marginBottom: '1rem'}}>How to Purchase</h3>
            <ol style={{paddingLeft: '1.5rem', lineHeight: '2'}}>
              <li>Select your preferred BYD model</li>
              <li>Visit a dealership or contact us for pricing</li>
              <li>Complete the purchase agreement</li>
              <li>Arrange payment via bank transfer or certified check</li>
              <li>Complete registration and take delivery</li>
            </ol>
          </div>

          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <p style={{fontSize: '1.1rem', marginBottom: '1rem'}}>Ready to purchase?</p>
            <p>Contact our sales team at <a href="mailto:sales@byd.com" style={{color: '#4a9eff'}}>sales@byd.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CashPurchases;
