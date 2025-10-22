import React, { useState } from 'react';
import { models } from '../pages/TestDrivePage/data/models'; // adjust path if needed

const Footer: React.FC = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const modelLinks = models.map((model) => ({
    label: model.name,
    href: `/models/${model.name.toLowerCase().replace(/\s+/g, '-')}`,
  }));

  const footerLinks = {
    Models: modelLinks,
    'About': [
      { label: 'About Evergreen Motors', href: '/about' },
    ],
    Technology: [{ label: 'NEVs', href: '/technology' }],
  Purchasing: [
    { label: 'Test Drive', href: '/test-drive' },
    { label: 'Cash Purchase', href: '/purchasing#cash-purchase' },
    { label: 'Bank Finance', href: '/purchasing#bank-finance' },
    { label: 'Dealer Finance (PCP)', href: '/purchasing#dealer-finance' },
    { label: 'Leasing', href: '/purchasing#leasing' },
    { label: 'Fleet & Business', href: '/purchasing#fleet-business' },
    { label: 'Rentals', href: '/purchasing#rentals' },
    { label: 'Subscriptions', href: '/purchasing#subscriptions' },
  ],
  Ownership: [
    { label: 'Warranty', href: '/ownership#warranty' },
    { label: 'Service & Maintenance', href: '/ownership#service-maintenance' },
    { label: '24/7 Assistance', href: '/ownership#assistance' },
    { label: 'Charging Locations', href: '/ownership#charging-locations' },
    { label: 'Shell Charging Cards', href: '/ownership#shell-charging' },
  ],
  };

  const linkStyle = (link: string) => ({
    color: isHovered === link ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.6)',
    textDecoration: 'none',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    fontSize: '0.875rem',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
  });

  return (
    <footer
      style={{
        background: '#252728',
        color: '#fff',
        padding: 0,
        margin: 0,
      }}
    >
      <div
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '4rem 2rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3
                style={{
                  fontWeight: 600,
                  fontSize: '1.125rem',
                  marginBottom: '1rem',
                  color: 'rgba(255,255,255,0.9)',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                }}
              >
                {section}
              </h3>

              {/* Models Section - 2 columns */}
              {section === 'Models' ? (
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, minmax(100px, 1fr))',
                    gap: '0.5rem 1rem',
                  }}
                >
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        style={linkStyle(link.label)}
                        onMouseEnter={() => setIsHovered(link.label)}
                        onMouseLeave={() => setIsHovered(null)}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {links.map((link) => (
                    <li key={link.label} style={{ marginBottom: '0.5rem' }}>
                      <a
                        href={link.href}
                        style={linkStyle(link.label)}
                        onMouseEnter={() => setIsHovered(link.label)}
                        onMouseLeave={() => setIsHovered(null)}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: 400,
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              FOLLOW US
            </span>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {/* Social icons here */}
            </div>
          </div>

          {/* Legal Links */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              fontSize: '0.875rem',
            }}
          >
            <a
              href="/privacy"
              style={linkStyle('privacy-link')}
              onMouseEnter={() => setIsHovered('privacy-link')}
              onMouseLeave={() => setIsHovered(null)}
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              style={linkStyle('terms-link')}
              onMouseEnter={() => setIsHovered('terms-link')}
              onMouseLeave={() => setIsHovered(null)}
            >
              Terms of Use
            </a>
            <a
              href="/cookies"
              style={linkStyle('cookies-link')}
              onMouseEnter={() => setIsHovered('cookies-link')}
              onMouseLeave={() => setIsHovered(null)}
            >
              Cookies
            </a>
            <a
              href="/contact"
              style={linkStyle('contact-link')}
              onMouseEnter={() => setIsHovered('contact-link')}
              onMouseLeave={() => setIsHovered(null)}
            >
              Contact
            </a>
          </div>
        </div>

        <div
          style={{
            textAlign: 'center',
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.5)',
            marginTop: '2rem',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 300,
          }}
        >
          © BYD Europe B.V. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
