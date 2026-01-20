import React from 'react';
import Logo from './Logo';
import FloatingNav from './FloatingNav';

const Layout = ({ children }) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="layout">

      <main>{children}</main>
      <FloatingNav />

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <Logo />
              <p className="footer-desc">
                Building the future of digital software with intelligent algorithms and scalable architecture.
              </p>
            </div>
            <div className="footer-links">
              <div className="link-col">
                <h4>Company</h4>
                <button onClick={() => scrollToSection('about')}>About</button>
                <button onClick={() => scrollToSection('services')}>Services</button>
                <button onClick={() => scrollToSection('contact')}>Contact</button>
              </div>
              <div className="link-col">
                <h4>Connect</h4>
                <a href="#linkedin">LinkedIn</a>
                <a href="#twitter">Twitter / X</a>
                <a href="#github">GitHub</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} CodeBlazeLabs. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style>{`
        .header {
          padding: 1rem 0;
          position: sticky;
          top: 0;
          background: rgba(11, 25, 44, 0.85); /* Navy transparent */
          backdrop-filter: blur(12px);
          z-index: 100;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-menu {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }
        .nav-link {
          font-family: var(--font-body);
          font-weight: 500;
          color: var(--color-text);
          font-size: 1rem;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: var(--color-accent);
        }
        
        .footer {
          background: var(--color-bg-alt);
          padding: 5rem 0 2rem;
          margin-top: 0;
          border-top: 1px solid var(--color-border);
        }
        .footer-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }
        .footer-brand {
          max-width: 400px;
        }
        .footer-desc {
          margin-top: 1.5rem;
          color: var(--color-text-muted);
        }
        .footer-links {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .link-col h4 {
          font-family: var(--font-heading);
          color: white;
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
        }
        .link-col button, .link-col a {
          display: block;
          background: none;
          border: none;
          color: var(--color-text-muted);
          margin-bottom: 0.8rem;
          cursor: pointer;
          font-size: 1rem;
          transition: color 0.2s;
          text-align: left;
          padding: 0;
        }
        .link-col button:hover, .link-col a:hover {
          color: var(--color-accent);
        }
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 2rem;
          text-align: center;
          color: var(--color-text-muted);
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .nav-menu {
            display: none; /* Mobile menu TODO */
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
