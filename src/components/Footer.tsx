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
      <style>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)) !important;
            gap: 1.8rem !important;
          }
        }

        @media (max-width: 768px) {
          .footer-container {
            padding: 3rem 1.5rem !important;
          }

          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2.5rem !important;
          }

          .footer-section-title {
            font-size: 1rem !important;
          }

          .footer-link {
            font-size: 0.8rem !important;
          }

          .footer-bottom {
            flex-direction: column !important;
            gap: 1.5rem !important;
            text-align: center !important;
          }

          .footer-social {
            justify-content: center !important;
          }

          .footer-legal {
            justify-content: center !important;
          }
        }

        @media (max-width: 599px) {
          .footer-container {
            padding: 2.5rem 1.2rem !important;
          }

          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }

          .models-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 479px) {
          .footer-container {
            padding: 2rem 1rem !important;
          }

          .footer-section-title {
            font-size: 0.95rem !important;
            margin-bottom: 0.8rem !important;
          }

          .footer-link {
            font-size: 0.75rem !important;
          }

          .models-grid {
            gap: 0.4rem 0.8rem !important;
          }

          .footer-copyright {
            font-size: 0.75rem !important;
          }

          .footer-legal {
            gap: 1rem !important;
            font-size: 0.75rem !important;
          }
        }
      `}</style>
      <div
        className="footer-container"
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '4rem 2rem',
        }}
      >
        <div
          className="footer-grid"
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
                className="footer-section-title"
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
                  className="models-grid"
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
                        className="footer-link"
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
                        className="footer-link"
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
          className="footer-bottom"
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
            className="footer-social"
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
            className="footer-legal"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              fontSize: '0.875rem',
            }}
          >
            <a
              className="footer-link"
              href="/privacy"
              style={linkStyle('privacy-link')}
              onMouseEnter={() => setIsHovered('privacy-link')}
              onMouseLeave={() => setIsHovered(null)}
            >
              Privacy Policy
            </a>
            <a
              className="footer-link"
              href="/terms"
              style={linkStyle('terms-link')}
              onMouseEnter={() => setIsHovered('terms-link')}
              onMouseLeave={() => setIsHovered(null)}
            >
              Terms of Use
            </a>
            <a
              className="footer-link"
              href="/cookies"
              style={linkStyle('cookies-link')}
              onMouseEnter={() => setIsHovered('cookies-link')}
              onMouseLeave={() => setIsHovered(null)}
            >
              Cookies
            </a>
            <a
              className="footer-link"
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
          className="footer-copyright"
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
