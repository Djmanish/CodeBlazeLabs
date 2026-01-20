import React from 'react';
import Logo from './Logo';

const FloatingNav = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav className="floating-nav-container">
                <div className="floating-nav glass-panel">
                    <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <Logo />
                    </div>

                    <div className="nav-links">
                        <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
                        <button onClick={() => scrollToSection('process')} className="nav-link">Process</button>
                        <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
                    </div>

                    <button onClick={() => scrollToSection('contact')} className="btn btn-primary btn-sm">
                        Let's Talk
                    </button>
                </div>
            </nav>

            <style>{`
        .floating-nav-container {
          position: fixed;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          width: auto;
          max-width: 90vw;
        }

        .floating-nav {
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 10px 10px 10px 24px;
          border-radius: 100px;
          background: rgba(11, 25, 44, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }

        .floating-nav:hover {
          background: rgba(11, 25, 44, 0.95);
          border-color: rgba(249, 115, 22, 0.3);
          box-shadow: 0 15px 50px rgba(249, 115, 22, 0.1);
          transform: translateY(-2px);
        }

        .nav-logo {
          cursor: pointer;
          transform: scale(0.8);
          transition: transform 0.3s;
        }
        .nav-logo:hover {
          transform: scale(0.9);
        }

        .nav-links {
          display: flex;
          gap: 0.5rem;
        }

        .nav-link {
          background: transparent;
          border: none;
          color: var(--color-text-muted);
          padding: 8px 16px;
          border-radius: 20px;
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s;
        }

        .nav-link:hover {
          color: white;
          background: rgba(255, 255, 255, 0.05);
        }

        .btn-sm {
          padding: 10px 24px;
          font-size: 0.9rem;
          border-radius: 100px;
        }

        @media (max-width: 600px) {
          .floating-nav-container {
            bottom: 1.5rem;
            width: 90%;
          }
          .floating-nav {
            padding: 8px 8px 8px 16px;
            gap: 1rem;
            width: 100%;
            justify-content: space-between;
          }
          .nav-links {
            display: none; /* Hide links on mobile, keep CTA */
          }
          .nav-logo {
            transform: scale(0.7);
          }
        }
      `}</style>
        </>
    );
};

export default FloatingNav;
