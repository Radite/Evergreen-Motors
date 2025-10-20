export default function FinanceDealer() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#252728', backgroundColor: '#ffffff' }}>
      <section style={{
        minHeight: '500px',
        background: 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '900px', color: '#ffffff' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '20px', lineHeight: '1.2' }}>
            BYD Dealer Finance
          </h1>
          <p style={{ fontSize: '20px', lineHeight: '1.6', marginBottom: '40px', opacity: '0.9' }}>
            Exclusive finance deals available through authorized BYD dealers
          </p>
          <button style={{
            backgroundColor: '#ffffff', color: '#3276AE', padding: '16px 48px',
            fontSize: '16px', fontWeight: '600', border: 'none', borderRadius: '4px',
            cursor: 'pointer', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
          }}>
            Find Your Deal
          </button>
        </div>
      </section>

      <section style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', textAlign: 'center', marginBottom: '60px', color: '#252728' }}>
            PCP Finance Options
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              { icon: '💰', title: 'Flexible Payments', description: 'Lower monthly payments with an optional final payment' },
              { icon: '🔄', title: 'Multiple Options', description: 'Keep, return, or exchange your vehicle at the end' },
              { icon: '📊', title: 'Guaranteed Value', description: 'Know your vehicle\'s guaranteed future value upfront' },
              { icon: '🎯', title: 'Competitive Rates', description: 'Access exclusive manufacturer-backed finance rates' }
            ].map((benefit, index) => (
              <div key={index} style={{
                backgroundColor: '#ffffff', padding: '32px', borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)', textAlign: 'center'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>{benefit.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#3276AE' }}>
                  {benefit.title}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#5f5f5f' }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', textAlign: 'center', marginBottom: '60px', color: '#252728' }}>
            Current PCP Offers
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            {[
              { model: 'BYD DOLPHIN', monthly: '£299', deposit: '£2,999', apr: '5.9%', term: '48 months' },
              { model: 'BYD ATTO 3', monthly: '£399', deposit: '£3,999', apr: '5.9%', term: '48 months' },
              { model: 'BYD SEAL', monthly: '£499', deposit: '£4,999', apr: '5.9%', term: '48 months' }
            ].map((offer, index) => (
              <div key={index} style={{
                backgroundColor: '#f8f9fa', padding: '40px', borderRadius: '8px', border: '2px solid #e5e7eb'
              }}>
                <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px', color: '#252728' }}>
                  {offer.model}
                </h3>
                <div style={{
                  backgroundColor: '#3276AE', color: '#ffffff', padding: '24px',
                  borderRadius: '6px', marginBottom: '24px', textAlign: 'center'
                }}>
                  <p style={{ fontSize: '14px', opacity: '0.9', marginBottom: '8px' }}>From</p>
                  <p style={{ fontSize: '48px', fontWeight: '700', margin: '0', lineHeight: '1' }}>{offer.monthly}</p>
                  <p style={{ fontSize: '14px', opacity: '0.9', marginTop: '8px' }}>per month</p>
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #e5e7eb' }}>
                    <span style={{ fontSize: '15px', color: '#5f5f5f' }}>Deposit:</span>
                    <span style={{ fontSize: '15px', fontWeight: '600', color: '#252728' }}>{offer.deposit}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #e5e7eb' }}>
                    <span style={{ fontSize: '15px', color: '#5f5f5f' }}>APR:</span>
                    <span style={{ fontSize: '15px', fontWeight: '600', color: '#252728' }}>{offer.apr}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0' }}>
                    <span style={{ fontSize: '15px', color: '#5f5f5f' }}>Term:</span>
                    <span style={{ fontSize: '15px', fontWeight: '600', color: '#252728' }}>{offer.term}</span>
                  </div>
                </div>
                <button style={{
                  width: '100%', backgroundColor: '#3276AE', color: '#ffffff', padding: '14px',
                  fontSize: '15px', fontWeight: '600', border: 'none', borderRadius: '4px', cursor: 'pointer'
                }}>
                  Get This Deal
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 20px', backgroundColor: '#3276AE', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', color: '#ffffff' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '20px', lineHeight: '1.2' }}>
            Find Your Perfect Finance Deal
          </h2>
          <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '40px', opacity: '0.9' }}>
            Speak to a dealer today for personalized finance options
          </p>
          <button style={{
            backgroundColor: '#ffffff', color: '#3276AE', padding: '16px 48px',
            fontSize: '16px', fontWeight: '600', border: 'none', borderRadius: '4px',
            cursor: 'pointer', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
          }}>
            Contact a Dealer
          </button>
        </div>
      </section>
    </div>
  );
}
