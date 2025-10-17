import React from 'react';

interface Location {
  name: string;
  address: string;
  phone: string;
  hours: string;
}

const Locations: React.FC = () => {
  const locations: Location[] = [
    {
      name: 'BYD Downtown Showroom',
      address: '123 Main Street, City Center',
      phone: '+1 (234) 567-8901',
      hours: 'Mon-Sat: 9AM-7PM, Sun: 10AM-5PM'
    },
    {
      name: 'BYD North Branch',
      address: '456 North Avenue, Uptown',
      phone: '+1 (234) 567-8902',
      hours: 'Mon-Sat: 9AM-7PM, Sun: Closed'
    },
    {
      name: 'BYD South Dealership',
      address: '789 South Boulevard, Southside',
      phone: '+1 (234) 567-8903',
      hours: 'Mon-Fri: 9AM-6PM, Sat-Sun: 10AM-4PM'
    },
    {
      name: 'BYD East Service Center',
      address: '321 East Road, Eastville',
      phone: '+1 (234) 567-8904',
      hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-3PM'
    }
  ];

  return (
    <div>
      <div className="page-header">
        <h1>Our Locations</h1>
        <p>Find a BYD dealership near you</p>
      </div>

      <section className="section">
        <div className="map-container" style={{height: '400px', marginBottom: '4rem'}}>
          <iframe
            title="BYD Locations Map"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{border: 0}}
            src="https://www.openstreetmap.org/export/embed.html?bbox=-74.1%2C40.6%2C-73.9%2C40.8&layer=mapnik"
            allowFullScreen
          ></iframe>
        </div>

        <h2 className="section-title">Dealership Locations</h2>
        <div className="cards-grid">
          {locations.map((location: Location, index: number) => (
            <div key={index} className="card">
              <div className="card-content">
                <h3 className="card-title">{location.name}</h3>
                <div className="contact-item">
                  <p><strong>📍 Address:</strong></p>
                  <p>{location.address}</p>
                </div>
                <div className="contact-item">
                  <p><strong>📞 Phone:</strong></p>
                  <p><a href={`tel:${location.phone}`}>{location.phone}</a></p>
                </div>
                <div className="contact-item">
                  <p><strong>🕒 Hours:</strong></p>
                  <p>{location.hours}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-dark">
        <h2 className="section-title">What to Expect</h2>
        <div className="cards-grid">
          <div className="card card-dark">
            <div className="card-image">👥</div>
            <div className="card-content">
              <h3 className="card-title">Expert Staff</h3>
              <p className="card-description">
                Our knowledgeable team is ready to answer all your questions about BYD vehicles.
              </p>
            </div>
          </div>
          <div className="card card-dark">
            <div className="card-image">🚗</div>
            <div className="card-content">
              <h3 className="card-title">Test Drives</h3>
              <p className="card-description">
                Experience the power and efficiency of BYD electric vehicles firsthand.
              </p>
            </div>
          </div>
          <div className="card card-dark">
            <div className="card-image">🔧</div>
            <div className="card-content">
              <h3 className="card-title">Service Center</h3>
              <p className="card-description">
                Full-service facilities with certified technicians for all your maintenance needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;
