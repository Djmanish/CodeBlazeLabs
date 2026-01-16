import React from 'react';
import Logo from './Logo';

const Layout = ({ children }) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="layout">
      <header className="header">
        <div className="container header-container">
          <Logo />
          <nav className="nav-menu">
            <button onClick={() => scrollToSection('root')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('technologies')} className="nav-link">Tech Stack</button>
            <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
            <button onClick={() => scrollToSection('contact')} className="btn btn-primary">
              Contact Us
            </button>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="container status-bar">
          <div className="status-item">
            <span className="status-indicator online"></span>
            <span>System Status: Operational</span>
          </div>
          <div className="status-item">
            <span>Branch: main</span>
          </div>
          <div className="status-item">
            © {new Date().getFullYear()} CodeBlazeLabs
          </div>
        </div>
      </footer>

      <style>{`
        .header {
          padding: 1.5rem 0;
          position: sticky;
          top: 0;
          background: rgba(13, 17, 23, 0.9);
          backdrop-filter: blur(10px);
          z-index: 100;
          border-bottom: 1px solid var(--color-border);
        }
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-menu {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .nav-link {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 500;
          color: var(--color-text);
          font-size: 0.85rem;
        }
        .nav-link:hover {
          color: var(--color-primary);
        }
        .footer {
          background: var(--color-bg-alt);
          border-top: 1px solid var(--color-border);
          padding: 0.5rem 0;
          margin-top: 4rem;
        }
        .status-bar {
          display: flex;
          justify-content: space-between;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: var(--color-text-muted);
        }
        .status-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .status-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #3fb950;
        }
      `}</style>
    </div>
  );
};

export default Layout;
