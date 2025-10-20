import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const footerLinks = {
    Models: [
      { label: 'BYD DOLPHIN SURF', href: '/electric-cars/dolphin-surf' },
      { label: 'BYD DOLPHIN', href: '/electric-cars/dolphin' },
      { label: 'BYD ATTO 2', href: '/electric-cars/atto-2' },
      { label: 'BYD ATTO 3', href: '/electric-cars/atto3' },
      { label: 'BYD SEAL', href: '/electric-cars/seal' },
      { label: 'BYD SEAL U DM-i', href: '/hybrid-cars/seal-u-dm-i' },
      { label: 'BYD SEALION 7', href: '/electric-cars/sealion-7' },
    ],
    'About BYD': [
      { label: 'About BYD', href: '/about' },
      { label: 'News', href: '/news-list' },
    ],
    Technology: [{ label: 'Super DM', href: '/technology/super-dm' }],
    Purchasing: [
      { label: 'Test Drive', href: '/test-drive' },
      { label: 'Find a BYD Store', href: '/find-store' },
      { label: 'PCP Offers', href: '/purchase/pcp-uk' },
      { label: 'Motability', href: '/purchase/motability' },
    ],
    Ownership: [
      { label: 'Service Maintenance', href: '/service-maintenance' },
      { label: 'BYD Assistance', href: '/assistance' },
    ],
  };

  const socialIconStyle = (icon: string) => ({
    width: '44px',
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '50%',
    fontSize: '1.1rem',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    color: isHovered === icon ? '#fff' : 'rgba(255,255,255,0.7)',
    borderColor: isHovered === icon ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)',
    transform: isHovered === icon ? 'scale(1.1)' : 'scale(1)',
    cursor: 'pointer'
  });

  const linkStyle = (link: string) => ({
    color: isHovered === link ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.6)',
    textDecoration: 'none',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    fontSize: '0.875rem',
    transition: 'color 0.3s ease',
    cursor: 'pointer'
  });

  return (
    <footer style={{
      background: '#252728',
      color: '#fff',
      padding: 0,
      margin: 0
    }}>
      <div style={{
        maxWidth: '1600px',
        margin: '0 auto',
        padding: '4rem 2rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 style={{
                fontWeight: 600,
                fontSize: '1.125rem',
                marginBottom: '1rem',
                color: 'rgba(255,255,255,0.9)',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}>{section}</h3>
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
            </div>
          ))}
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            <span style={{
              color: 'rgba(255,255,255,0.7)',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 400,
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              FOLLOW US
            </span>
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              <a 
                href="#" 
                style={socialIconStyle('facebook')}
                onMouseEnter={() => setIsHovered('facebook')}
                onMouseLeave={() => setIsHovered(null)}
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="#" 
                style={socialIconStyle('twitter')}
                onMouseEnter={() => setIsHovered('twitter')}
                onMouseLeave={() => setIsHovered(null)}
                aria-label="X"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="#" 
                style={socialIconStyle('instagram')}
                onMouseEnter={() => setIsHovered('instagram')}
                onMouseLeave={() => setIsHovered(null)}
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#" 
                style={socialIconStyle('tiktok')}
                onMouseEnter={() => setIsHovered('tiktok')}
                onMouseLeave={() => setIsHovered(null)}
                aria-label="TikTok"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href="#" 
                style={socialIconStyle('youtube')}
                onMouseEnter={() => setIsHovered('youtube')}
                onMouseLeave={() => setIsHovered(null)}
                aria-label="YouTube"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            fontSize: '0.875rem'
          }}>
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

        <div style={{
          textAlign: 'center',
          fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.5)',
          marginTop: '2rem',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontWeight: 300
        }}>
          © BYD Europe B.V. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;