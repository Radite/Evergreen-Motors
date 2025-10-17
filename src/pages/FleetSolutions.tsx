import React from 'react';

const FleetSolutions: React.FC = () => {
  return (
    <div>
      <div className="page-header">
        <h1>Fleet & Business Solutions</h1>
        <p>Electric vehicle solutions for your business</p>
      </div>
      <section className="section">
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <h2 style={{marginBottom: '2rem', color: '#4a9eff'}}>Business Fleet Solutions</h2>
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '3rem', color: '#666'}}>
            Transform your business fleet with BYD electric vehicles. Reduce operational costs, lower emissions, and demonstrate your commitment to sustainability.
          </p>
          <div className="cards-grid">
            <div className="card">
              <div className="card-image">💼</div>
              <div className="card-content">
                <h3 className="card-title">Corporate Fleets</h3>
                <p className="card-description">Volume pricing and dedicated fleet management support</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">🚚</div>
              <div className="card-content">
                <h3 className="card-title">Commercial Vehicles</h3>
                <p className="card-description">Electric vans and trucks for delivery and logistics</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">🏢</div>
              <div className="card-content">
                <h3 className="card-title">Government Solutions</h3>
                <p className="card-description">Special programs for government and municipal fleets</p>
              </div>
            </div>
          </div>
          <div style={{marginTop: '3rem'}}>
            <h3>Benefits for Business</h3>
            <ul className="info-list">
              <li><strong>Lower Operating Costs:</strong> Reduced fuel and maintenance expenses</li>
              <li><strong>Tax Incentives:</strong> Federal and state EV tax credits</li>
              <li><strong>Sustainability Goals:</strong> Meet corporate environmental targets</li>
              <li><strong>Fleet Management:</strong> Comprehensive fleet management services</li>
            </ul>
          </div>
          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <p>Contact our fleet specialists: <a href="mailto:fleet@byd.com" style={{color: '#4a9eff'}}>fleet@byd.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FleetSolutions;
