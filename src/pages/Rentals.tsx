import React from 'react';

const Rentals: React.FC = () => {
  return (
    <div>
      <div className="page-header">
        <h1>Vehicle Rentals</h1>
        <p>Short-term BYD electric vehicle rentals</p>
      </div>
      <section className="section">
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <h2 style={{marginBottom: '2rem', color: '#4a9eff'}}>Rent a BYD</h2>
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginBottom: '2rem'}}>
            Experience BYD electric vehicles for short-term needs, from daily rentals to extended weekly rates.
          </p>
          <div className="cards-grid">
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">Daily Rentals</h3>
                <p className="card-description">Perfect for test driving or short trips</p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">Weekly Rentals</h3>
                <p className="card-description">Extended rates for longer adventures</p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">Monthly Rentals</h3>
                <p className="card-description">Flexible month-to-month options</p>
              </div>
            </div>
          </div>
          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <p>Contact: <a href="mailto:rentals@byd.com" style={{color: '#4a9eff'}}>rentals@byd.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rentals;
