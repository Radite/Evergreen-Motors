import React from 'react';

const ChargingLocations: React.FC = () => {
  return (
    <div>
      <div className="page-header">
        <h1>Charging Locations</h1>
        <p>Find charging stations near you</p>
      </div>

      <section className="section">
        <div className="map-container" style={{height: '400px', marginBottom: '4rem'}}>
          <iframe
            title="Charging Locations Map"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{border: 0}}
            src="https://www.openstreetmap.org/export/embed.html?bbox=-74.1%2C40.6%2C-73.9%2C40.8&layer=mapnik"
            allowFullScreen
          ></iframe>
        </div>

        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <h2 style={{marginBottom: '2rem', color: '#4a9eff'}}>Charging Network</h2>
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '3rem', color: '#666'}}>
            Access thousands of charging stations nationwide through our partnerships with major charging networks.
          </p>

          <div className="cards-grid">
            <div className="card">
              <div className="card-image">⚡</div>
              <div className="card-content">
                <h3 className="card-title">Fast Charging</h3>
                <p className="card-description">
                  DC fast charging stations for quick top-ups on the go
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">🏢</div>
              <div className="card-content">
                <h3 className="card-title">Destination Charging</h3>
                <p className="card-description">
                  Level 2 chargers at hotels, restaurants, and shopping centers
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">🏠</div>
              <div className="card-content">
                <h3 className="card-title">Home Charging</h3>
                <p className="card-description">
                  Installation support for home charging solutions
                </p>
              </div>
            </div>
          </div>

          <div style={{marginTop: '3rem'}}>
            <h3>Charging Options</h3>
            <ul className="info-list">
              <li><strong>Level 1 (120V):</strong> 3-5 miles of range per hour</li>
              <li><strong>Level 2 (240V):</strong> 20-30 miles of range per hour</li>
              <li><strong>DC Fast Charging:</strong> 80% charge in 30-45 minutes</li>
              <li><strong>Ultra-Fast Charging:</strong> 200+ miles in 15 minutes</li>
            </ul>
          </div>

          <div style={{textAlign: 'center', marginTop: '3rem', padding: '2rem', background: '#f5f5f5', borderRadius: '12px'}}>
            <h3>Download Our Charging App</h3>
            <p style={{color: '#666', marginBottom: '1rem'}}>Find and navigate to charging stations with real-time availability</p>
            <p>Available on iOS and Android</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChargingLocations;
