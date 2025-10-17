import React from 'react';

const FinanceDealer: React.FC = () => {
  return (
    <div>
      <div className="page-header">
        <h1>Dealer Financing</h1>
        <p>In-house financing solutions</p>
      </div>
      <section className="section">
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <h2 style={{marginBottom: '2rem', color: '#4a9eff'}}>Dealer Financing Benefits</h2>
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#666'}}>
            Our dealerships offer convenient in-house financing with competitive rates and personalized service.
          </p>
          <div className="cards-grid" style={{marginTop: '3rem'}}>
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">One-Stop Shopping</h3>
                <p className="card-description">Complete your purchase and financing in one place</p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">Special Promotions</h3>
                <p className="card-description">Access exclusive dealer financing offers</p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">Personalized Service</h3>
                <p className="card-description">Work directly with our financing specialists</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinanceDealer;
