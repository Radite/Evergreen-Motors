export default function Subscriptions() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#252728', backgroundColor: '#ffffff' }}>
      <section style={{
        minHeight: '500px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '900px', color: '#ffffff' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '20px', lineHeight: '1.2' }}>
            BYD Subscription Service
          </h1>
          <p style={{ fontSize: '20px', lineHeight: '1.6', marginBottom: '40px', opacity: '0.9' }}>
            All-inclusive car subscription with ultimate flexibility
          </p>
          <button style={{
            backgroundColor: '#ffffff', color: '#667eea', padding: '16px 48px',
            fontSize: '16px', fontWeight: '600', border: 'none', borderRadius: '4px',
            cursor: 'pointer', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
          }}>
            Explore Plans
          </button>
        </div>
      </section>

      <section style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', textAlign: 'center', marginBottom: '20px', color: '#252728' }}>
            What's Included
          </h2>
          <p style={{ fontSize: '18px', textAlign: 'center', marginBottom: '60px', color: '#5f5f5f', maxWidth: '700px', margin: '0 auto 60px' }}>
            Everything you need in one simple monthly payment
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            {[
              { icon: '🚗', title: 'Vehicle', description: 'Brand new BYD of your choice' },
              { icon: '🔧', title: 'Maintenance', description: 'All servicing and repairs included' },
              { icon: '🛡️', title: 'Insurance', description: 'Comprehensive cover included' },
              { icon: '🚚', title: 'Breakdown Cover', description: '24/7 roadside assistance' },
              { icon: '🔄', title: 'Vehicle Swaps', description: 'Change your vehicle as needed' },
              { icon: '📱', title: 'Digital Management', description: 'Manage everything via app' }
            ].map((item, index) => (
              <div key={index} style={{
                backgroundColor: '#ffffff', padding: '30px', borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)', textAlign: 'center'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#667eea' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#5f5f5f' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', textAlign: 'center', marginBottom: '60px', color: '#252728' }}>
            Subscription Plans
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {[
              { plan: 'Starter', monthly: '£599', models: 'BYD DOLPHIN', mileage: '750 miles/month', commitment: '6 months minimum' },
              { plan: 'Premium', monthly: '£799', models: 'BYD ATTO 3', mileage: '1,000 miles/month', commitment: '6 months minimum', featured: true },
              { plan: 'Executive', monthly: '£999', models: 'BYD SEAL', mileage: '1,250 miles/month', commitment: '6 months minimum' }
            ].map((tier, index) => (
              <div key={index} style={{
                backgroundColor: tier.featured ? '#667eea' : '#f8f9fa',
                padding: '40px', borderRadius: '8px',
                border: tier.featured ? '3px solid #667eea' : '1px solid #e5e7eb',
                position: 'relative', transform: tier.featured ? 'scale(1.05)' : 'scale(1)'
              }}>
                {tier.featured && (
                  <div style={{
                    position: 'absolute', top: '-16px', left: '50%', transform: 'translateX(-50%)',
                    backgroundColor: '#764ba2', color: '#ffffff', padding: '6px 20px',
                    borderRadius: '20px', fontSize: '13px', fontWeight: '600'
                  }}>
                    MOST POPULAR
                  </div>
                )}
                <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '20px', color: tier.featured ? '#ffffff' : '#252728' }}>
                  {tier.plan}
                </h3>
                <p style={{ fontSize: '48px', fontWeight: '700', marginBottom: '8px', color: tier.featured ? '#ffffff' : '#667eea' }}>
                  {tier.monthly}
                </p>
                <p style={{ fontSize: '14px', marginBottom: '30px', color: tier.featured ? 'rgba(255,255,255,0.8)' : '#6b7280' }}>
                  per month
                </p>
                <div style={{ marginBottom: '30px' }}>
                  {[
                    { label: 'Models', value: tier.models },
                    { label: 'Monthly Mileage', value: tier.mileage },
                    { label: 'Commitment', value: tier.commitment }
                  ].map((detail, idx) => (
                    <div key={idx} style={{
                      display: 'flex', justifyContent: 'space-between', padding: '12px 0',
                      borderBottom: idx < 2 ? `1px solid ${tier.featured ? 'rgba(255,255,255,0.2)' : '#e5e7eb'}` : 'none'
                    }}>
                      <span style={{ fontSize: '14px', color: tier.featured ? 'rgba(255,255,255,0.8)' : '#5f5f5f' }}>
                        {detail.label}
                      </span>
                      <span style={{ fontSize: '14px', fontWeight: '600', color: tier.featured ? '#ffffff' : '#252728' }}>
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
                <button style={{
                  width: '100%', backgroundColor: tier.featured ? '#ffffff' : '#667eea',
                  color: tier.featured ? '#667eea' : '#ffffff', padding: '14px',
                  fontSize: '15px', fontWeight: '600', border: 'none', borderRadius: '4px', cursor: 'pointer'
                }}>
                  Subscribe Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', textAlign: 'center', marginBottom: '60px', color: '#252728' }}>
            How It Works
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {[
              { step: '1', title: 'Choose Your Plan', description: 'Select the subscription tier that matches your needs and budget' },
              { step: '2', title: 'Complete Setup', description: 'Quick online application with instant approval' },
              { step: '3', title: 'Receive Your BYD', description: 'Vehicle delivered to your door within 7-14 days' },
              { step: '4', title: 'Drive & Enjoy', description: 'Unlimited flexibility with all costs included' }
            ].map((step, index) => (
              <div key={index} style={{
                display: 'flex', gap: '30px', alignItems: 'center',
                backgroundColor: '#ffffff', padding: '30px', borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}>
                <div style={{
                  width: '60px', height: '60px', flexShrink: 0,
                  backgroundColor: '#667eea', color: '#ffffff', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '28px', fontWeight: '700'
                }}>
                  {step.step}
                </div>
                <div>
                  <h4 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px', color: '#252728' }}>
                    {step.title}
                  </h4>
                  <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#5f5f5f', margin: 0 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 20px', backgroundColor: '#667eea', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', color: '#ffffff' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '20px', lineHeight: '1.2' }}>
            Ready to Subscribe?
          </h2>
          <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '40px', opacity: '0.9' }}>
            Get started with the most flexible way to drive a BYD
          </p>
          <button style={{
            backgroundColor: '#ffffff', color: '#667eea', padding: '16px 48px',
            fontSize: '16px', fontWeight: '600', border: 'none', borderRadius: '4px',
            cursor: 'pointer', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
          }}>
            Start Your Subscription
          </button>
        </div>
      </section>
    </div>
  );
}
