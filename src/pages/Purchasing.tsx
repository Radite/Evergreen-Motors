import React from 'react';
import { DollarSign, TrendingUp, CreditCard, Calendar, Shield, CheckCircle, Zap } from 'lucide-react';

export default function Purchasing() {
  return (
    <div style={{ fontFamily: 'Montserrat, Arial, sans-serif', color: '#252728', backgroundColor: '#fff' }}>
      {/* Hero Banner */}
      <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        <img 
          src="/Purchasing/Banner.jpg" 
          alt="EM Electric Vehicle Purchasing"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
          <h1 style={{ fontSize: '64px', fontWeight: 700, color: '#fff', margin: 0, textAlign: 'center', letterSpacing: '-1px' }}>
            Purchasing Menu
          </h1>
          <p style={{ fontSize: '22px', color: '#fff', marginTop: '20px', fontWeight: 300, maxWidth: '700px', textAlign: 'center', lineHeight: '1.6' }}>
            We have a range of flexible options to meet the needs of everyone looking to drive an electric vehicle, from short term visitors looking to rent for just a few days, to residents looking to own the planet's most advanced vehicles, to businesses looking to build a modern fleet of technologically advanced, reliable, and safe vehicles with ultra-low running costs.
          </p>
        </div>
      </div>

      {/* Cash Purchase Section */}
      <div id="cash-purchase" style={{ padding: '120px 20px', backgroundColor: '#fff', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '80px', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <img 
              src="/Purchasing/cash-purchase.jpg" 
              alt="Cash Purchase"
              style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '28px' }}>
              <div style={{ width: '56px', height: '56px', backgroundColor: '#252728', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <DollarSign size={28} color="#fff" />
              </div>
              <h2 style={{ fontSize: '44px', fontWeight: 700, margin: 0, letterSpacing: '-0.5px' }}>Purchasing with Cash</h2>
            </div>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#666', marginBottom: '35px' }}>
              Buying an electric vehicle with cash is the fastest and simplest option. It provides immediate ownership of the vehicle, with no restrictions on the type of insurance cover the owner must carry or the maximum mileage the vehicle can be driven. Cash purchases also avoid interest and finance charges, and there are often no delays in securing immediate use of the vehicle if the desired model and trim is in stock.
            </p>
            
            <div style={{ backgroundColor: '#f8f9fa', padding: '28px', borderRadius: '10px', marginBottom: '30px', border: '1px solid #e9ecef' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px', color: '#252728' }}>Key Benefits</h3>
              <ul style={{ fontSize: '16px', lineHeight: '2', color: '#252728', margin: 0, paddingLeft: '0', listStyle: 'none' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>Immediate ownership of the vehicle with no restrictions</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>No interest and finance charges</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>Fastest and simplest option</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>No delays in securing immediate use if model in stock</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bank Finance Section */}
      <div id="bank-finance" style={{ padding: '120px 20px', backgroundColor: '#f8f9fa', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '80px', alignItems: 'center', flexDirection: 'row-reverse' }}>
          <div style={{ flex: 1 }}>
            <img 
              src="/Purchasing/bank-finance.jpg" 
              alt="Bank Finance"
              style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '28px' }}>
              <div style={{ width: '56px', height: '56px', backgroundColor: '#252728', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TrendingUp size={28} color="#fff" />
              </div>
              <h2 style={{ fontSize: '44px', fontWeight: 700, margin: 0, letterSpacing: '-0.5px' }}>Purchasing with Bank Financing</h2>
            </div>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#666', marginBottom: '35px' }}>
              We have good working relationships with all the major retail banks, some of which provide one hundred percent financing to qualified borrowers. Buying an electric vehicle with bank financing provides immediate ownership and use of a vehicle (once the loan has been approved), there is also no maximum mileage the vehicle can be driven, and this option avoids purchasers having to use savings, which might not be available. It's a great way to get use and ownership of an advanced modern vehicle with little upfront costs.
            </p>
            
            <div style={{ backgroundColor: '#fff', padding: '28px', borderRadius: '10px', marginBottom: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px', color: '#252728' }}>Why Choose Bank Finance</h3>
              <ul style={{ fontSize: '16px', lineHeight: '2', color: '#252728', margin: 0, paddingLeft: '0', listStyle: 'none' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>Good working relationships with all major retail banks in TCI</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>Some banks provide one hundred percent financing to qualified borrowers</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>Immediate ownership and use once loan is approved</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>No maximum mileage restrictions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Dealer Finance Section */}
      <div id="dealer-finance" style={{ padding: '120px 20px', backgroundColor: '#fff', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '80px', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <img 
              src="/Purchasing/dealer-finance.jpg" 
              alt="Dealer Finance"
              style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '28px' }}>
              <div style={{ width: '56px', height: '56px', backgroundColor: '#252728', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CreditCard size={28} color="#fff" />
              </div>
              <h2 style={{ fontSize: '44px', fontWeight: 700, margin: 0, letterSpacing: '-0.5px' }}>Purchasing with Dealer Financing</h2>
            </div>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#666', marginBottom: '35px' }}>
              For established businesses that wish to finance the purchase of a vehicle, and who would rather do so other than through traditional bank financing, we offer dealer financing. Like bank financing, buying an electric vehicle with dealer financing provides immediate ownership and use of a vehicle (once the loan has been approved), there is no maximum mileage the vehicle can be driven, and this option also avoids purchasers having to use savings. It's also a great way for businesses to get use and ownership of an advanced modern vehicle with little upfront costs.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '35px' }}>
              <div style={{ padding: '24px', backgroundColor: '#f8f9fa', borderRadius: '10px', border: '1px solid #e9ecef' }}>
                <div style={{ fontSize: '13px', color: '#666', fontWeight: 600, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Flexibility</div>
                <div style={{ fontSize: '22px', fontWeight: 700, color: '#252728', marginBottom: '8px' }}>Three Options</div>
                <div style={{ fontSize: '13px', color: '#666' }}>Immediate ownership and use once loan approved</div>
              </div>
              <div style={{ padding: '24px', backgroundColor: '#f8f9fa', borderRadius: '10px', border: '1px solid #e9ecef' }}>
                <div style={{ fontSize: '13px', color: '#666', fontWeight: 600, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Structured</div>
                <div style={{ fontSize: '22px', fontWeight: 700, color: '#252728', marginBottom: '8px' }}>Clear Terms</div>
                <div style={{ fontSize: '13px', color: '#666' }}>No maximum mileage restrictions</div>
              </div>
              <div style={{ padding: '24px', backgroundColor: '#f8f9fa', borderRadius: '10px', border: '1px solid #e9ecef', gridColumn: '1 / -1' }}>
                <div style={{ fontSize: '13px', color: '#666', fontWeight: 600, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>End of Term Option</div>
                <div style={{ fontSize: '22px', fontWeight: 700, color: '#252728', marginBottom: '8px' }}>Complete Ownership</div>
                <div style={{ fontSize: '13px', color: '#666' }}>Vehicle becomes your property after loan is paid</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Lease Section */}
      <div id="lease" style={{ padding: '120px 20px', backgroundColor: '#f8f9fa', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '80px', alignItems: 'center', flexDirection: 'row-reverse' }}>
          <div style={{ flex: 1 }}>
            <img 
              src="/Purchasing/lease.jpg" 
              alt="Business Lease"
              style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '28px' }}>
              <div style={{ width: '56px', height: '56px', backgroundColor: '#252728', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Calendar size={28} color="#fff" />
              </div>
              <h2 style={{ fontSize: '44px', fontWeight: 700, margin: 0, letterSpacing: '-0.5px' }}>Business Leases</h2>
            </div>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#666', marginBottom: '35px' }}>
              This option is available to businesses who are willing to commit to using a vehicle for three to five years, who are able to make a small upfront payment on possession of the vehicle, of typically $5,000.00 to $10,000.00, who do not want the hassle of maintaining the vehicle, and who want the option of buying the vehicle or getting another new vehicle at the end of the term. The business has the option to buy the vehicle at the end the term for an amount that is typically a small portion of its value.
            </p>
            
            <div style={{ backgroundColor: '#fff', padding: '28px', borderRadius: '10px', marginBottom: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px', color: '#252728' }}>Business Advantages</h3>
              <ul style={{ fontSize: '16px', lineHeight: '2', color: '#252728', margin: 0, paddingLeft: '0', listStyle: 'none' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>Fixed monthly costs with no depreciation concerns</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>Flexible lease terms from 36 to 60 months</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>Option to purchase at end of term</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>No hassle maintaining the vehicle</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Rentals Section */}
      <div id="rental" style={{ padding: '120px 20px', backgroundColor: '#fff', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '80px', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <img 
              src="/Purchasing/rental.jpg" 
              alt="Rentals"
              style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '28px' }}>
              <div style={{ width: '56px', height: '56px', backgroundColor: '#252728', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Shield size={28} color="#fff" />
              </div>
              <h2 style={{ fontSize: '44px', fontWeight: 700, margin: 0, letterSpacing: '-0.5px' }}>Rentals</h2>
            </div>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#666', marginBottom: '35px' }}>
              This provides access to our vehicles for periods as short as three days, with no fixed commitment, for persons who wish to get a deeper and more meaningful experience driving an electric vehicle before they commit to a purchase. It's something we encourage interested purchasers to do, and it's a great way to get comfortable with a decision to purchase an electric vehicle. It's also great for persons who need transportation for a few days or for a short term without a commitment.
            </p>
            
            <div style={{ backgroundColor: '#f8f9fa', padding: '28px', borderRadius: '10px', marginBottom: '30px', border: '1px solid #e9ecef' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px', color: '#252728' }}>Rental Benefits</h3>
              <ul style={{ fontSize: '16px', lineHeight: '2', color: '#252728', margin: 0, paddingLeft: '0', listStyle: 'none' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>Access for periods as short as three days</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>No fixed commitment</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>No maintenance or insurance obligations</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>Complete refund if you return after three days</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>Restricted to persons over 25 years old</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Subscriptions Section */}
      <div id="subscriptions" style={{ padding: '120px 20px', backgroundColor: '#f8f9fa', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <div style={{ width: '56px', height: '56px', backgroundColor: '#252728', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={28} color="#fff" />
              </div>
            </div>
            <h2 style={{
              fontSize: '44px',
              fontWeight: 700,
              marginBottom: '20px',
              color: '#252728',
              letterSpacing: '-0.5px'
            }}>
              Subscriptions
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.8'
            }}>
              A subscription is a rental for periods of a month or more, on a month-to-month basis, or a quarter or more, on a quarter-to-quarter basis. There is no commitment other than to payment for the upcoming month or quarter, plus maintenance and insurance is included. It has most of the same benefits and disadvantages as a short-term rental. It differs in that the daily rates for a subscription are better than those for a short-term rental.
            </p>
          </div>

          <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '24px', color: '#252728' }}>Why Choose Subscriptions?</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
              <div style={{ paddingBottom: '24px', borderBottom: '1px solid #e9ecef' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <CheckCircle size={24} color="#22c55e" />
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#252728', margin: 0 }}>Better Daily Rates</h4>
                </div>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', margin: 0 }}>
                  Daily rates for subscriptions are better than short-term rentals, saving you money over longer periods.
                </p>
              </div>
              <div style={{ paddingBottom: '24px', borderBottom: '1px solid #e9ecef' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <CheckCircle size={24} color="#22c55e" />
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#252728', margin: 0 }}>Maintenance & Insurance Included</h4>
                </div>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', margin: 0 }}>
                  All maintenance and insurance is included in your monthly or quarterly payment.
                </p>
              </div>
              <div style={{ paddingBottom: '24px', borderBottom: '1px solid #e9ecef' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <CheckCircle size={24} color="#22c55e" />
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#252728', margin: 0 }}>Flexible Commitment</h4>
                </div>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', margin: 0 }}>
                  Only commitment is for the upcoming month or quarter - ideal for short-term needs.
                </p>
              </div>
              <div style={{ paddingBottom: '24px', borderBottom: '1px solid #e9ecef' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <CheckCircle size={24} color="#22c55e" />
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#252728', margin: 0 }}>Ideal for Businesses</h4>
                </div>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', margin: 0 }}>
                  Perfect for businesses with short-term employees or temporary transportation needs.
                </p>
              </div>
              <div style={{ paddingBottom: '24px', borderBottom: '1px solid #e9ecef' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <CheckCircle size={24} color="#22c55e" />
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#252728', margin: 0 }}>No Long-term Commitment</h4>
                </div>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', margin: 0 }}>
                  Unlike leases, you're not locked in for years - just the upcoming billing period.
                </p>
              </div>
              <div style={{ paddingBottom: '24px', borderBottom: '1px solid #e9ecef' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <CheckCircle size={24} color="#22c55e" />
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#252728', margin: 0 }}>Easy to Upgrade</h4>
                </div>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', margin: 0 }}>
                  Switch vehicles or upgrade to a different model when your next billing period begins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ padding: '120px 20px', background: 'linear-gradient(135deg, #252728 0%, #3d3f42 100%)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', color: '#fff' }}>
          <h3 style={{ fontSize: '44px', fontWeight: 700, marginBottom: '24px', color: '#fff', letterSpacing: '-0.5px' }}>
            Ready to Find Your Perfect Option?
          </h3>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            marginBottom: '45px',
            opacity: '0.95',
            maxWidth: '700px',
            margin: '0 auto 45px'
          }}>
            Contact us today and our team will help you find the perfect purchasing option for your needs and lifestyle.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="/contact"
              style={{
                display: 'inline-block',
                backgroundColor: '#fff',
                color: '#252728',
                padding: '18px 50px',
                fontSize: '16px',
                fontWeight: 600,
                textDecoration: 'none',
                borderRadius: '6px',
                transition: 'all 0.3s',
                fontFamily: 'Montserrat, Arial, sans-serif'
              }}
            >
              Contact Us Now
            </a>
            <a 
              href="/locations"
              style={{
                display: 'inline-block',
                backgroundColor: 'transparent',
                color: '#fff',
                padding: '18px 50px',
                fontSize: '16px',
                fontWeight: '600',
                textDecoration: 'none',
                border: '2px solid #fff',
                borderRadius: '6px',
                transition: 'all 0.3s',
                fontFamily: 'Montserrat, Arial, sans-serif'
              }}
            >
              Find a Location
            </a>
          </div>
        </div>
      </div>
    
      {/* Mobile Responsive Styles */}
      <style>{`
        /* Portrait Phones (< 600px) */
        @media (max-width: 599px) {
          /* Subscription cards */
          .subscription-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          
          /* General responsive */
          div[style*="display: flex"] {
            flex-direction: column !important;
          }
          h1 {
            font-size: 32px !important;
          }
          h2 {
            font-size: 28px !important;
          }
          h3 {
            font-size: 20px !important;
          }
          div[style*="padding: 120px"] {
            padding: 50px 16px !important;
          }
          div[style*="gap: 80px"] {
            gap: 30px !important;
          }
          div[style*="gridTemplateColumns: 'repeat(3, 1fr)'"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="gridTemplateColumns: 'repeat(2, 1fr)'"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="fontSize: '64px'"] {
            font-size: 32px !important;
          }
          div[style*="fontSize: '44px'"] {
            font-size: 26px !important;
          }
          div[style*="fontSize: '48px'"] {
            font-size: 36px !important;
          }
          div[style*="fontSize: '24px'"] {
            font-size: 20px !important;
          }
          div[style*="width: '56px'"] {
            width: 44px !important;
            height: 44px !important;
          }
          table {
            font-size: 11px !important;
          }
          th, td {
            padding: 10px 6px !important;
          }
        }

        /* Landscape Phones (600px - 767px) */
        @media (min-width: 600px) and (max-width: 767px) {
          /* Subscription cards */
          .subscription-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          
          /* General responsive */
          div[style*="display: flex"] {
            flex-direction: column !important;
          }
          h1 {
            font-size: 36px !important;
          }
          h2 {
            font-size: 30px !important;
          }
          h3 {
            font-size: 22px !important;
          }
          div[style*="padding: 120px"] {
            padding: 60px 24px !important;
          }
          div[style*="gap: 80px"] {
            gap: 35px !important;
          }
          div[style*="gridTemplateColumns: 'repeat(3, 1fr)'"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="gridTemplateColumns: 'repeat(2, 1fr)'"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="fontSize: '64px'"] {
            font-size: 36px !important;
          }
          div[style*="fontSize: '44px'"] {
            font-size: 28px !important;
          }
          div[style*="fontSize: '48px'"] {
            font-size: 38px !important;
          }
          div[style*="width: '56px'"] {
            width: 48px !important;
            height: 48px !important;
          }
          table {
            font-size: 12px !important;
          }
          th, td {
            padding: 12px 8px !important;
          }
        }

        /* Portrait Tablets (768px - 991px) */
        @media (min-width: 768px) and (max-width: 991px) {
          /* Subscription cards - 2 columns on portrait tablets */
          .subscription-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 28px !important;
          }
          
          /* General responsive */
          div[style*="display: flex"] {
            flex-direction: column !important;
          }
          h1 {
            font-size: 40px !important;
          }
          h2 {
            font-size: 32px !important;
          }
          h3 {
            font-size: 24px !important;
          }
          div[style*="padding: 120px"] {
            padding: 70px 32px !important;
          }
          div[style*="gap: 80px"] {
            gap: 40px !important;
          }
          div[style*="gridTemplateColumns: 'repeat(3, 1fr)'"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="gridTemplateColumns: 'repeat(2, 1fr)'"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="fontSize: '64px'"] {
            font-size: 40px !important;
          }
          div[style*="fontSize: '44px'"] {
            font-size: 30px !important;
          }
          div[style*="width: '56px'"] {
            width: 50px !important;
            height: 50px !important;
          }
          table {
            font-size: 13px !important;
          }
          th, td {
            padding: 14px 10px !important;
          }
        }

        /* Landscape Tablets (992px - 1199px) */
        @media (min-width: 992px) and (max-width: 1199px) {
          /* Subscription cards - 3 columns on landscape tablets */
          .subscription-cards-grid {
            gap: 24px !important;
          }
          
          div[style*="gap: 80px"] {
            gap: 50px !important;
          }
          div[style*="padding: 120px"] {
            padding: 90px 40px !important;
          }
        }
      `}</style>
    </div>
  );
}