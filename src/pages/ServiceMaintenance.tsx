import React from 'react';

const ServiceMaintenance: React.FC = () => {
  return (
    <div>
      <div className="page-header">
        <h1>Service & Maintenance</h1>
        <p>Keep your BYD running at peak performance</p>
      </div>
      <section className="section">
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <h2 style={{marginBottom: '2rem', color: '#4a9eff'}}>Comprehensive Service</h2>
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '3rem', color: '#666'}}>
            Our certified technicians provide expert service to keep your BYD electric vehicle in optimal condition.
          </p>
          <div className="cards-grid">
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">Regular Maintenance</h3>
                <p className="card-description">Scheduled service to ensure optimal performance</p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">Battery Service</h3>
                <p className="card-description">Expert battery diagnostics and maintenance</p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">Software Updates</h3>
                <p className="card-description">Latest software and system enhancements</p>
              </div>
            </div>
          </div>
          <div style={{marginTop: '3rem'}}>
            <h3>Service Schedule</h3>
            <ul className="info-list">
              <li><strong>First Service:</strong> 10,000 miles or 12 months</li>
              <li><strong>Regular Service:</strong> Every 10,000 miles or 12 months</li>
              <li><strong>Battery Check:</strong> Annual battery health assessment</li>
              <li><strong>Software Updates:</strong> As released by BYD</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceMaintenance;
