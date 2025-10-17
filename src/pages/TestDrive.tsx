import React from 'react';
import { Link } from 'react-router-dom';

const TestDrive: React.FC = () => {
  return (
    <div>
      <div className="page-header">
        <h1>Schedule a Test Drive</h1>
        <p>Experience BYD innovation firsthand</p>
      </div>

      <section className="section">
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <h2 style={{marginBottom: '2rem', color: '#4a9eff'}}>Why Test Drive a BYD?</h2>
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#666'}}>
            There's no better way to understand the advanced technology and superior performance of BYD electric 
            vehicles than experiencing them yourself. Schedule a test drive at any of our locations and discover 
            why millions of drivers worldwide have chosen BYD.
          </p>

          <div className="cards-grid" style={{margin: '3rem 0'}}>
            <div className="card">
              <div className="card-image">⚡</div>
              <div className="card-content">
                <h3 className="card-title">Instant Torque</h3>
                <p className="card-description">
                  Feel the immediate power delivery of electric motors.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">🔇</div>
              <div className="card-content">
                <h3 className="card-title">Quiet Operation</h3>
                <p className="card-description">
                  Enjoy the peaceful, refined driving experience.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">🎯</div>
              <div className="card-content">
                <h3 className="card-title">Advanced Features</h3>
                <p className="card-description">
                  Test our intelligent cockpit and driver assistance systems.
                </p>
              </div>
            </div>
          </div>

          <div style={{textAlign: 'center', padding: '3rem 0'}}>
            <h3 style={{marginBottom: '1.5rem'}}>Ready to Schedule?</h3>
            <p style={{marginBottom: '2rem', fontSize: '1.1rem', color: '#666'}}>
              Contact us at <a href="tel:+1234567890" style={{color: '#4a9eff'}}>+1 (234) 567-890</a> or 
              email <a href="mailto:testdrive@byd.com" style={{color: '#4a9eff'}}>testdrive@byd.com</a>
            </p>
            <Link to="/locations" className="cta-button">Find a Location</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestDrive;
