import React, { useState } from 'react';

// Banner Component
const WarrantyBanner: React.FC = () => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden'
    }}>
      <img
        src="/Warranty/Banner.jpg"
        alt="Warranty Policy"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </div>
  );
};

// Vehicle Data Interface
interface VehicleData {
  title: string;
  content: string;
  vehicleType: string;
  year: string;
}

// Warranty Content Component
const WarrantyContent: React.FC = () => {
  const warrantyData: VehicleData[] = [
    {
      title: "Key Parts Warranty of BYD DOLPHIN SURF in European Market",
      vehicleType: "BYD DOLPHIN SURF",
      year: "2025",
      content: `
        <table>
          <thead>
            <tr>
              <th>Product Category</th>
              <th>Duration</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bodywork Anti-Corrosion</td>
              <td>12 years, unlimited mileage</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Power Battery</td>
              <td>8 years, 250,000 km (155,350 miles)</td>
              <td>SOH<sup>1</sup> 70%</td>
            </tr>
            <tr>
              <td>Drive Unit<sup>2</sup></td>
              <td>8 years, 150,000 km (93,750 miles)</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Basic Coverage</td>
              <td>6 years, 150,000 km (93,750 miles)</td>
              <td>/</td>
            </tr>
          </tbody>
        </table>
      `
    },
    {
      title: "Key Parts Warranty of BYD SEALION 7 in European Market",
      vehicleType: "BYD SEALION 7",
      year: "2025",
      content: `
        <table>
          <thead>
            <tr>
              <th>Product Category</th>
              <th>Duration</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bodywork Anti-Corrosion</td>
              <td>12 years, unlimited mileage</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Power Battery</td>
              <td>8 years, 250,000 km (155,350 miles)</td>
              <td>SOH<sup>1</sup> 70%</td>
            </tr>
            <tr>
              <td>Drive Unit<sup>2</sup></td>
              <td>8 years, 150,000 km (93,750 miles)</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Basic Coverage</td>
              <td>6 years, 150,000 km (93,750 miles)</td>
              <td>/</td>
            </tr>
          </tbody>
        </table>
      `
    },
    {
      title: "Key Parts Warranty of BYD SEAL U DM-i in European Market",
      vehicleType: "BYD SEAL U DM-i",
      year: "2024",
      content: `
        <table>
          <thead>
            <tr>
              <th>Product Category</th>
              <th>Duration</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bodywork Anti-Corrosion</td>
              <td>12 years, unlimited mileage</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Power Battery</td>
              <td>8 years, 250,000 km (155,350 miles)</td>
              <td>SOH<sup>1</sup> 70%</td>
            </tr>
            <tr>
              <td>Drive Unit<sup>2</sup></td>
              <td>8 years, 150,000 km (93,750 miles)</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Basic Coverage</td>
              <td>6 years, 150,000 km (93,750 miles)</td>
              <td>/</td>
            </tr>
          </tbody>
        </table>
      `
    },
    {
      title: "Key Parts Warranty of BYD ATTO 3 in European Market",
      vehicleType: "BYD ATTO 3",
      year: "2024",
      content: `
        <table>
          <thead>
            <tr>
              <th>Product Category</th>
              <th>Duration</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bodywork Anti-Corrosion</td>
              <td>12 years, unlimited mileage</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Power Battery</td>
              <td>8 years, 250,000 km (155,350 miles)</td>
              <td>SOH<sup>1</sup> 70%</td>
            </tr>
            <tr>
              <td>Drive Unit<sup>2</sup></td>
              <td>8 years, 150,000 km (93,750 miles)</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Basic Coverage</td>
              <td>6 years, 150,000 km (93,750 miles)</td>
              <td>/</td>
            </tr>
          </tbody>
        </table>
      `
    },
    {
      title: "Key Parts Warranty of BYD DOLPHIN in European Market",
      vehicleType: "BYD DOLPHIN",
      year: "2024",
      content: `
        <table>
          <thead>
            <tr>
              <th>Product Category</th>
              <th>Duration</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bodywork Anti-Corrosion</td>
              <td>12 years, unlimited mileage</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Power Battery</td>
              <td>8 years, 250,000 km (155,350 miles)</td>
              <td>SOH<sup>1</sup> 70%</td>
            </tr>
            <tr>
              <td>Drive Unit<sup>2</sup></td>
              <td>8 years, 150,000 km (93,750 miles)</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Basic Coverage</td>
              <td>6 years, 150,000 km (93,750 miles)</td>
              <td>/</td>
            </tr>
          </tbody>
        </table>
      `
    },
    {
      title: "Key Parts Warranty of BYD SEAL in European Market",
      vehicleType: "BYD SEAL",
      year: "2024",
      content: `
        <table>
          <thead>
            <tr>
              <th>Product Category</th>
              <th>Duration</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bodywork Anti-Corrosion</td>
              <td>12 years, unlimited mileage</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Power Battery</td>
              <td>8 years, 250,000 km (155,350 miles)</td>
              <td>SOH<sup>1</sup> 70%</td>
            </tr>
            <tr>
              <td>Drive Unit<sup>2</sup></td>
              <td>8 years, 150,000 km (93,750 miles)</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Basic Coverage</td>
              <td>6 years, 150,000 km (93,750 miles)</td>
              <td>/</td>
            </tr>
          </tbody>
        </table>
      `
    }
  ];

  const [selectedVehicle, setSelectedVehicle] = useState<string>('BYD SEAL U DM-i');
  const [selectedYear, setSelectedYear] = useState<string>('2024');
  const [showVehicleDropdown, setShowVehicleDropdown] = useState<boolean>(false);
  const [showYearDropdown, setShowYearDropdown] = useState<boolean>(false);

  // Get unique vehicle types and years
  const vehicleTypes = Array.from(new Set(warrantyData.map(item => item.vehicleType)));
  const years = Array.from(new Set(warrantyData.map(item => item.year))).sort((a, b) => parseInt(b) - parseInt(a));

  // Filter data based on selection
  const filteredData = warrantyData.find(
    item => item.vehicleType === selectedVehicle && item.year === selectedYear
  );

  return (
    <div style={{
      maxWidth: '1600px',
      margin: '0 auto',
      padding: '80px 96px',
      fontFamily: 'Montserrat, Arial, sans-serif'
    }}>
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: 600,
          color: '#252728',
          marginBottom: '40px'
        }}>
          Warranty Information
        </h2>
        
        <h3 style={{
          fontSize: '20px',
          fontWeight: 500,
          color: '#252728',
          marginBottom: '24px'
        }}>
          Please Select Vehicle Type
        </h3>

        <div style={{
          display: 'flex',
          gap: '24px',
          marginBottom: '40px'
        }}>
          {/* Vehicle Type Dropdown */}
          <div style={{ position: 'relative', flex: 1, maxWidth: '400px' }}>
            <input
              type="text"
              value={selectedVehicle}
              readOnly
              placeholder="Search Vehicle Type"
              onClick={() => setShowVehicleDropdown(!showVehicleDropdown)}
              style={{
                width: '100%',
                height: '48px',
                padding: '0 40px 0 16px',
                border: '1px solid #E7E7E7',
                fontSize: '16px',
                fontFamily: 'Montserrat, Arial, sans-serif',
                outline: 'none',
                cursor: 'pointer',
                backgroundColor: '#fff'
              }}
            />
            <div
              style={{
                position: 'absolute',
                right: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: 0,
                height: 0,
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderTop: '6px solid #252728',
                pointerEvents: 'none'
              }}
            />
            {showVehicleDropdown && (
              <div style={{
                position: 'absolute',
                top: '52px',
                left: 0,
                right: 0,
                backgroundColor: '#fff',
                border: '1px solid #E7E7E7',
                maxHeight: '300px',
                overflowY: 'auto',
                zIndex: 10,
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}>
                {vehicleTypes.map((vehicle, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedVehicle(vehicle);
                      setShowVehicleDropdown(false);
                    }}
                    style={{
                      padding: '12px 16px',
                      cursor: 'pointer',
                      fontSize: '16px',
                      color: '#252728',
                      fontFamily: 'Montserrat, Arial, sans-serif',
                      backgroundColor: vehicle === selectedVehicle ? '#f5f5f5' : '#fff'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = vehicle === selectedVehicle ? '#f5f5f5' : '#fff'}
                  >
                    {vehicle}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Year Dropdown */}
          <div style={{ position: 'relative', flex: 1, maxWidth: '400px' }}>
            <input
              type="text"
              value={selectedYear}
              readOnly
              placeholder="Search Year"
              onClick={() => setShowYearDropdown(!showYearDropdown)}
              style={{
                width: '100%',
                height: '48px',
                padding: '0 40px 0 16px',
                border: '1px solid #E7E7E7',
                fontSize: '16px',
                fontFamily: 'Montserrat, Arial, sans-serif',
                outline: 'none',
                cursor: 'pointer',
                backgroundColor: '#fff'
              }}
            />
            <div
              style={{
                position: 'absolute',
                right: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: 0,
                height: 0,
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderTop: '6px solid #252728',
                pointerEvents: 'none'
              }}
            />
            {showYearDropdown && (
              <div style={{
                position: 'absolute',
                top: '52px',
                left: 0,
                right: 0,
                backgroundColor: '#fff',
                border: '1px solid #E7E7E7',
                maxHeight: '300px',
                overflowY: 'auto',
                zIndex: 10,
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}>
                {years.map((year, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedYear(year);
                      setShowYearDropdown(false);
                    }}
                    style={{
                      padding: '12px 16px',
                      cursor: 'pointer',
                      fontSize: '16px',
                      color: '#252728',
                      fontFamily: 'Montserrat, Arial, sans-serif',
                      backgroundColor: year === selectedYear ? '#f5f5f5' : '#fff'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = year === selectedYear ? '#f5f5f5' : '#fff'}
                  >
                    {year}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Warranty Table Display */}
      {filteredData && (
        <div style={{
          backgroundColor: '#fff',
          padding: '40px',
          border: '1px solid #E7E7E7',
          borderRadius: '8px'
        }}>
          <h4 style={{
            fontSize: '24px',
            fontWeight: 600,
            color: '#252728',
            marginBottom: '32px',
            fontFamily: 'Montserrat, Arial, sans-serif'
          }}>
            {filteredData.title}
          </h4>

          <div style={{
            overflowX: 'auto'
          }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontFamily: 'Montserrat, Arial, sans-serif'
            }}>
              <thead>
                <tr>
                  <th style={{
                    padding: '16px',
                    textAlign: 'left',
                    borderBottom: '2px solid #252728',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#252728'
                  }}>Product Category</th>
                  <th style={{
                    padding: '16px',
                    textAlign: 'left',
                    borderBottom: '2px solid #252728',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#252728'
                  }}>Duration</th>
                  <th style={{
                    padding: '16px',
                    textAlign: 'left',
                    borderBottom: '2px solid #252728',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#252728'
                  }}>Remarks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{
                    padding: '16px',
                    borderBottom: '1px solid #E7E7E7',
                    fontSize: '14px',
                    color: '#252728'
                  }}>Bodywork Anti-Corrosion</td>
                  <td style={{
                    padding: '16px',
                    borderBottom: '1px solid #E7E7E7',
                    fontSize: '14px',
                    color: '#252728'
                  }}>12 years, unlimited mileage</td>
                  <td style={{
                    padding: '16px',
                    borderBottom: '1px solid #E7E7E7',
                    fontSize: '14px',
                    color: '#252728'
                  }}>/</td>
                </tr>
                <tr>
                  <td style={{
                    padding: '16px',
                    borderBottom: '1px solid #E7E7E7',
                    fontSize: '14px',
                    color: '#252728'
                  }}>Power Battery</td>
                  <td style={{
                    padding: '16px',
                    borderBottom: '1px solid #E7E7E7',
                    fontSize: '14px',
                    color: '#252728'
                  }}>8 years, 250,000 km (155,350 miles)</td>
                  <td style={{
                    padding: '16px',
                    borderBottom: '1px solid #E7E7E7',
                    fontSize: '14px',
                    color: '#252728'
                  }}>SOH<sup>1</sup> 70%</td>
                </tr>
                <tr>
                  <td style={{
                    padding: '16px',
                    borderBottom: '1px solid #E7E7E7',
                    fontSize: '14px',
                    color: '#252728'
                  }}>Drive Unit<sup>2</sup></td>
                  <td style={{
                    padding: '16px',
                    borderBottom: '1px solid #E7E7E7',
                    fontSize: '14px',
                    color: '#252728'
                  }}>8 years, 150,000 km (93,750 miles)</td>
                  <td style={{
                    padding: '16px',
                    borderBottom: '1px solid #E7E7E7',
                    fontSize: '14px',
                    color: '#252728'
                  }}>/</td>
                </tr>
                <tr>
                  <td style={{
                    padding: '16px',
                    borderBottom: '1px solid #E7E7E7',
                    fontSize: '14px',
                    color: '#252728'
                  }}>Basic Coverage</td>
                  <td style={{
                    padding: '16px',
                    borderBottom: '1px solid #E7E7E7',
                    fontSize: '14px',
                    color: '#252728'
                  }}>6 years, 150,000 km (93,750 miles)</td>
                  <td style={{
                    padding: '16px',
                    borderBottom: '1px solid #E7E7E7',
                    fontSize: '14px',
                    color: '#252728'
                  }}>/</td>
                </tr>
                <tr>
                  <td colSpan={3} style={{
                    padding: '16px',
                    borderBottom: '1px solid #E7E7E7'
                  }}>
                    <ul style={{
                      margin: 0,
                      paddingLeft: '20px',
                      fontSize: '12px',
                      color: '#252728',
                      lineHeight: '1.8'
                    }}>
                      <li><sup>1</sup>SOH: State of Health</li>
                      <li><sup>2</sup>Drive Unit: Includes Drive Motor and Drive Motor Controller.</li>
                      <li>Spare Part: If the warranty period of the spare part is shorter than the remaining basic coverage period of the parts on the complete vehicle, the warranty period of the part shall be extended until the remaining warranty period of basic coverage expires.</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} style={{
                    padding: '16px',
                    fontSize: '12px',
                    color: '#252728',
                    fontStyle: 'italic'
                  }}>
                    Note: For more warranty details, please contact the local BYD dealer.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

// Main Warranty Policy Page Component
const WarrantyPolicyPage: React.FC = () => {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <WarrantyBanner />
      <WarrantyContent />
    </div>
  );
};

export default WarrantyPolicyPage;