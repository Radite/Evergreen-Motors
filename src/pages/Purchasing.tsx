import React from 'react';
import { DollarSign, TrendingUp, CreditCard, Calendar, Shield, CheckCircle, Zap } from 'lucide-react';

export default function Purchasing() {
  return (
    <div style={{ fontFamily: 'Montserrat, Arial, sans-serif', color: '#252728', backgroundColor: '#fff' }}>
      {/* Hero Banner */}
      <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        <img 
          src="/Purchasing/Banner.jpg" 
          alt="BYD Purchasing"
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
            Find Your Perfect Way to Own a BYD
          </h1>
          <p style={{ fontSize: '22px', color: '#fff', marginTop: '20px', fontWeight: 300, maxWidth: '700px', textAlign: 'center', lineHeight: '1.6' }}>
            From cash purchases to flexible subscriptions - discover the option that fits your lifestyle
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
              <h2 style={{ fontSize: '44px', fontWeight: 700, margin: 0, letterSpacing: '-0.5px' }}>Cash Purchase</h2>
            </div>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#666', marginBottom: '35px' }}>
              Buy outright and own your BYD from day one with no monthly payments or interest charges. Cash purchase offers complete freedom with immediate ownership, no mileage restrictions, and the potential for exclusive cash buyer incentives.
            </p>
            
            <div style={{ backgroundColor: '#f8f9fa', padding: '28px', borderRadius: '10px', marginBottom: '30px', border: '1px solid #e9ecef' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px', color: '#252728' }}>Key Benefits</h3>
              <ul style={{ fontSize: '16px', lineHeight: '2', color: '#252728', margin: 0, paddingLeft: '0', listStyle: 'none' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>No interest charges - avoid finance costs and save money</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>Immediate ownership - the vehicle is yours from day one</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>Complete freedom - no mileage or modification restrictions</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>Potential discounts - cash buyers may receive special offers</span>
                </li>
              </ul>
            </div>
            
            <a 
              href="/contact" 
              style={{
                display: 'inline-block',
                padding: '16px 45px',
                backgroundColor: '#252728',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '16px',
                borderRadius: '6px',
                transition: 'all 0.3s'
              }}
            >
              Contact Us for Cash Purchase
            </a>
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
              <h2 style={{ fontSize: '44px', fontWeight: 700, margin: 0, letterSpacing: '-0.5px' }}>Bank Finance</h2>
            </div>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#666', marginBottom: '35px' }}>
              Flexible finance through trusted UK banks with competitive rates and immediate ownership. Bank finance allows you to spread the cost while owning the vehicle from day one, with straightforward terms from established financial institutions.
            </p>
            
            <div style={{ backgroundColor: '#fff', padding: '28px', borderRadius: '10px', marginBottom: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px', color: '#252728' }}>Why Choose Bank Finance</h3>
              <ul style={{ fontSize: '16px', lineHeight: '2', color: '#252728', margin: 0, paddingLeft: '0', listStyle: 'none' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>Competitive rates from leading UK banks and lenders</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>Work with trusted, established financial institutions</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>Own the vehicle immediately with no balloon payments</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>Simple application process with fast approval decisions</span>
                </li>
              </ul>
            </div>
            
            <a 
              href="/contact" 
              style={{
                display: 'inline-block',
                padding: '16px 45px',
                backgroundColor: '#252728',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '16px',
                borderRadius: '6px',
                transition: 'all 0.3s'
              }}
            >
              Contact Us for Finance Options
            </a>
          </div>
        </div>
      </div>

      {/* Dealer Finance (PCP) Section */}
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
              <h2 style={{ fontSize: '44px', fontWeight: 700, margin: 0, letterSpacing: '-0.5px' }}>Dealer Finance (PCP)</h2>
            </div>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#666', marginBottom: '35px' }}>
              Personal Contract Purchase offers lower monthly payments with flexibility at the end of your term. Drive your BYD with manageable monthly costs and choose to own, return, or upgrade when your agreement ends.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '35px' }}>
              <div style={{ padding: '24px', backgroundColor: '#f8f9fa', borderRadius: '10px', border: '1px solid #e9ecef' }}>
                <div style={{ fontSize: '13px', color: '#666', fontWeight: 600, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Lower Payments</div>
                <div style={{ fontSize: '22px', fontWeight: 700, color: '#252728', marginBottom: '8px' }}>Affordable Monthly</div>
                <div style={{ fontSize: '13px', color: '#666' }}>Smaller payments than traditional loans</div>
              </div>
              <div style={{ padding: '24px', backgroundColor: '#f8f9fa', borderRadius: '10px', border: '1px solid #e9ecef' }}>
                <div style={{ fontSize: '13px', color: '#666', fontWeight: 600, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Flexibility</div>
                <div style={{ fontSize: '22px', fontWeight: 700, color: '#252728', marginBottom: '8px' }}>Three Options</div>
                <div style={{ fontSize: '13px', color: '#666' }}>Keep, return, or upgrade your vehicle</div>
              </div>
              <div style={{ padding: '24px', backgroundColor: '#f8f9fa', borderRadius: '10px', border: '1px solid #e9ecef' }}>
                <div style={{ fontSize: '13px', color: '#666', fontWeight: 600, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>GAP Insurance</div>
                <div style={{ fontSize: '22px', fontWeight: 700, color: '#252728', marginBottom: '8px' }}>Protection</div>
                <div style={{ fontSize: '13px', color: '#666' }}>Optional coverage available</div>
              </div>
              <div style={{ padding: '24px', backgroundColor: '#f8f9fa', borderRadius: '10px', border: '1px solid #e9ecef' }}>
                <div style={{ fontSize: '13px', color: '#666', fontWeight: 600, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Structured</div>
                <div style={{ fontSize: '22px', fontWeight: 700, color: '#252728', marginBottom: '8px' }}>Clear Terms</div>
                <div style={{ fontSize: '13px', color: '#666' }}>Transparent agreement details</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#f8f9fa', padding: '24px', borderRadius: '10px', marginBottom: '30px', border: '1px solid #e9ecef' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '15px', color: '#252728' }}>End of Term Options</h3>
              <div style={{ fontSize: '15px', color: '#666', lineHeight: '1.8' }}>
                <div style={{ marginBottom: '10px' }}>
                  <strong style={{ color: '#252728' }}>1. Part Exchange:</strong> Upgrade to a new BYD model
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <strong style={{ color: '#252728' }}>2. Purchase:</strong> Pay the final payment and keep your vehicle
                </div>
                <div>
                  <strong style={{ color: '#252728' }}>3. Return:</strong> Simply hand back the vehicle with nothing more to pay
                </div>
              </div>
            </div>
            
            <a 
              href="/contact" 
              style={{
                display: 'inline-block',
                padding: '16px 45px',
                backgroundColor: '#252728',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '16px',
                borderRadius: '6px',
                transition: 'all 0.3s'
              }}
            >
              Explore PCP Options
            </a>
          </div>
        </div>
      </div>

      {/* Lease Section */}
      <div id="lease" style={{ padding: '120px 20px', backgroundColor: '#f8f9fa', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '80px', alignItems: 'center', flexDirection: 'row-reverse' }}>
          <div style={{ flex: 1 }}>
            <img 
              src="/Purchasing/lease.jpg" 
              alt="Lease"
              style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '28px' }}>
              <div style={{ width: '56px', height: '56px', backgroundColor: '#252728', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Calendar size={28} color="#fff" />
              </div>
              <h2 style={{ fontSize: '44px', fontWeight: 700, margin: 0, letterSpacing: '-0.5px' }}>Business Lease</h2>
            </div>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#666', marginBottom: '35px' }}>
              Perfect for business users seeking predictable monthly costs with potential tax benefits. Business lease provides fixed-term vehicle access with maintenance options and no depreciation risk, ideal for fleet and corporate requirements.
            </p>
            
            <div style={{ backgroundColor: '#fff', padding: '28px', borderRadius: '10px', marginBottom: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px', color: '#252728' }}>Business Advantages</h3>
              <ul style={{ fontSize: '16px', lineHeight: '2', color: '#252728', margin: 0, paddingLeft: '0', listStyle: 'none' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>Potential tax benefits and VAT reclaim opportunities</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>Fixed monthly costs with no depreciation concerns</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>Flexible lease terms from 24 to 48 months</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>Optional maintenance packages for complete peace of mind</span>
                </li>
              </ul>
            </div>

            <p style={{ fontSize: '15px', color: '#666', marginBottom: '25px', lineHeight: '1.6', fontStyle: 'italic' }}>
              Note: Speak with your accountant about the specific tax implications for your business. Terms and availability may vary based on credit approval.
            </p>
            
            <a 
              href="/contact" 
              style={{
                display: 'inline-block',
                padding: '16px 45px',
                backgroundColor: '#252728',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '16px',
                borderRadius: '6px',
                transition: 'all 0.3s'
              }}
            >
              Contact Us for Business Lease
            </a>
          </div>
        </div>
      </div>

      {/* Rental Section */}
      <div id="rental" style={{ padding: '120px 20px', backgroundColor: '#fff', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '80px', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <img 
              src="/Purchasing/rental.jpg" 
              alt="Rental"
              style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '28px' }}>
              <div style={{ width: '56px', height: '56px', backgroundColor: '#252728', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Shield size={28} color="#fff" />
              </div>
              <h2 style={{ fontSize: '44px', fontWeight: 700, margin: 0, letterSpacing: '-0.5px' }}>Short-Term Rental</h2>
            </div>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#666', marginBottom: '35px' }}>
              Experience a BYD before committing to ownership or rent for temporary needs. Our short-term rental service provides flexible access to BYD vehicles for test drives, business trips, or temporary transportation requirements.
            </p>
            
            <div style={{ backgroundColor: '#f8f9fa', padding: '28px', borderRadius: '10px', marginBottom: '30px', border: '1px solid #e9ecef' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px', color: '#252728' }}>Rental Features</h3>
              <ul style={{ fontSize: '16px', lineHeight: '2', color: '#252728', margin: 0, paddingLeft: '0', listStyle: 'none' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>Daily, weekly, and monthly rental options available</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>Full insurance coverage included in the rental price</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>24/7 roadside assistance throughout your rental period</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span>Perfect for trying before buying or temporary vehicle needs</span>
                </li>
              </ul>
            </div>
            
            <a 
              href="/contact" 
              style={{
                display: 'inline-block',
                padding: '16px 45px',
                backgroundColor: '#252728',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '16px',
                borderRadius: '6px',
                transition: 'all 0.3s'
              }}
            >
              Contact Us for Rentals
            </a>
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
              All-Inclusive Subscription
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.8'
            }}>
              Ultimate flexibility with insurance, maintenance, and everything included in one monthly payment. No long-term commitments, just pure driving enjoyment.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
            marginBottom: '50px'
          }}>
            {[
              { plan: 'Starter', monthly: '£599', model: 'BYD DOLPHIN', mileage: '750 miles/month', description: 'Perfect for city driving and daily commutes' },
              { plan: 'Premium', monthly: '£799', model: 'BYD ATTO 3', mileage: '1,000 miles/month', description: 'Ideal for families and weekend adventures' },
              { plan: 'Executive', monthly: '£999', model: 'BYD SEAL', mileage: '1,250 miles/month', description: 'Premium experience for discerning drivers' }
            ].map((tier, index) => (
              <div key={index} style={{
                backgroundColor: '#fff',
                padding: '36px',
                borderRadius: '12px',
                border: '2px solid #e9ecef',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
              }}>
                <div style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid #e9ecef' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#252728' }}>
                    {tier.plan}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                    {tier.description}
                  </p>
                </div>

                <div style={{ marginBottom: '28px' }}>
                  <div style={{ fontSize: '48px', fontWeight: 700, color: '#252728', marginBottom: '8px' }}>
                    {tier.monthly}
                  </div>
                  <div style={{ fontSize: '14px', color: '#666' }}>per month</div>
                </div>

                <div style={{ marginBottom: '28px' }}>
                  <div style={{ padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '8px', marginBottom: '12px' }}>
                    <div style={{ fontSize: '12px', color: '#666', fontWeight: 600, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Model</div>
                    <div style={{ fontSize: '16px', fontWeight: 600, color: '#252728' }}>{tier.model}</div>
                  </div>
                  <div style={{ padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '8px', marginBottom: '12px' }}>
                    <div style={{ fontSize: '12px', color: '#666', fontWeight: 600, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Mileage Allowance</div>
                    <div style={{ fontSize: '16px', fontWeight: 600, color: '#252728' }}>{tier.mileage}</div>
                  </div>
                  <div style={{ padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                    <div style={{ fontSize: '12px', color: '#666', fontWeight: 600, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Minimum Term</div>
                    <div style={{ fontSize: '16px', fontWeight: 600, color: '#252728' }}>6 months</div>
                  </div>
                </div>

                <div style={{ marginBottom: '28px', paddingTop: '24px', borderTop: '1px solid #e9ecef' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '16px', color: '#252728', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Everything Included
                  </h4>
                  <ul style={{ fontSize: '14px', lineHeight: '2', color: '#666', margin: 0, paddingLeft: '0', listStyle: 'none' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <CheckCircle size={16} color="#22c55e" style={{ flexShrink: 0 }} />
                      <span>Vehicle Access</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <CheckCircle size={16} color="#22c55e" style={{ flexShrink: 0 }} />
                      <span>Full Insurance</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <CheckCircle size={16} color="#22c55e" style={{ flexShrink: 0 }} />
                      <span>Maintenance & Servicing</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <CheckCircle size={16} color="#22c55e" style={{ flexShrink: 0 }} />
                      <span>Breakdown Cover</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <CheckCircle size={16} color="#22c55e" style={{ flexShrink: 0 }} />
                      <span>Vehicle Swap Options</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <CheckCircle size={16} color="#22c55e" style={{ flexShrink: 0 }} />
                      <span>Digital Management</span>
                    </li>
                  </ul>
                </div>

                <button style={{
                  width: '100%',
                  backgroundColor: '#252728',
                  color: '#fff',
                  padding: '16px',
                  fontSize: '15px',
                  fontWeight: 600,
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontFamily: 'Montserrat, Arial, sans-serif',
                  transition: 'all 0.3s'
                }}>
                  Subscribe Now
                </button>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '15px', color: '#666', marginBottom: '25px', lineHeight: '1.6' }}>
              All subscriptions include comprehensive insurance, scheduled maintenance, breakdown assistance, and the flexibility to upgrade or cancel with just 30 days notice.
            </p>
            <a 
              href="/contact" 
              style={{
                display: 'inline-block',
                padding: '16px 45px',
                backgroundColor: '#252728',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '16px',
                borderRadius: '6px',
                transition: 'all 0.3s'
              }}
            >
              Learn More About Subscriptions
            </a>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div style={{ padding: '120px 20px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '44px',
              fontWeight: 700,
              marginBottom: '20px',
              color: '#252728',
              letterSpacing: '-0.5px'
            }}>
              Compare Your Options
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.8'
            }}>
              Find the perfect purchasing solution for your needs and budget
            </p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', borderRadius: '12px', overflow: 'hidden' }}>
              <thead>
                <tr style={{ backgroundColor: '#252728', color: '#fff' }}>
                  <th style={{ padding: '20px', textAlign: 'left', fontSize: '16px', fontWeight: 600 }}>Feature</th>
                  <th style={{ padding: '20px', textAlign: 'center', fontSize: '16px', fontWeight: 600 }}>Cash</th>
                  <th style={{ padding: '20px', textAlign: 'center', fontSize: '16px', fontWeight: 600 }}>Bank Finance</th>
                  <th style={{ padding: '20px', textAlign: 'center', fontSize: '16px', fontWeight: 600 }}>PCP</th>
                  <th style={{ padding: '20px', textAlign: 'center', fontSize: '16px', fontWeight: 600 }}>Lease</th>
                  <th style={{ padding: '20px', textAlign: 'center', fontSize: '16px', fontWeight: 600 }}>Rental</th>
                  <th style={{ padding: '20px', textAlign: 'center', fontSize: '16px', fontWeight: 600 }}>Subscription</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Immediate Ownership', values: ['✓', '✓', '×', '×', '×', '×'] },
                  { feature: 'Lower Monthly Costs', values: ['×', '○', '✓', '✓', '✓', '✓'] },
                  { feature: 'No Interest Charges', values: ['✓', '×', '×', '×', '○', '○'] },
                  { feature: 'Flexibility to Return', values: ['×', '×', '✓', '○', '✓', '✓'] },
                  { feature: 'Tax Benefits (Business)', values: ['×', '×', '×', '✓', '×', '○'] },
                  { feature: 'Insurance Included', values: ['×', '×', '×', '×', '○', '✓'] },
                  { feature: 'Maintenance Included', values: ['×', '×', '×', '○', '×', '✓'] }
                ].map((row, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid #e9ecef', backgroundColor: index % 2 === 0 ? '#fff' : '#f8f9fa' }}>
                    <td style={{ padding: '20px', fontSize: '15px', color: '#252728', fontWeight: 600 }}>{row.feature}</td>
                    {row.values.map((value, i) => (
                      <td key={i} style={{ padding: '20px', textAlign: 'center', fontSize: '18px', color: value === '✓' ? '#22c55e' : value === '×' ? '#666' : '#252728' }}>
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>
              ✓ = Included  •  ○ = Optional or Available  •  × = Not Available
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ padding: '120px 20px', background: 'linear-gradient(135deg, #252728 0%, #3d3f42 100%)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', color: '#fff' }}>
          <h3 style={{ fontSize: '44px', fontWeight: 700, marginBottom: '24px', color: '#fff', letterSpacing: '-0.5px' }}>
            Ready to Get Your BYD?
          </h3>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            marginBottom: '45px',
            opacity: '0.95',
            maxWidth: '700px',
            margin: '0 auto 45px'
          }}>
            Contact us today and our team will help you find the perfect purchasing option for your needs. We're here to guide you through every step of your BYD ownership journey.
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
        @media (max-width: 991px) {
          div[style*="display: flex"] {
            flex-direction: column !important;
          }
          h1 {
            font-size: 36px !important;
          }
          h2 {
            font-size: 32px !important;
          }
          h3 {
            font-size: 20px !important;
          }
          div[style*="padding: 120px"] {
            padding: 60px 20px !important;
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
            font-size: 36px !important;
          }
          div[style*="fontSize: '44px'"] {
            font-size: 28px !important;
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
      `}</style>
    </div>
  );
}