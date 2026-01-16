import React from 'react';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero section">
      <div className="overlay"></div>
      <div className="container text-center relative-z" data-aos="fade-up">
        {/* <div className="hero-badge mono-font"> {'<'} Startup-Focused Engineering {'/>'} </div> */}
        <div className="terminal-badge">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="badge-text">bash -v 2.0</span>
        </div>

        <h1 className="hero-title">
          <span className="typewriter">Building Software, Products, & <span className="text-gradient">AI Tools</span></span>
        </h1>

        <p className="hero-subtitle mono-font">
          <span className="prompt">$ </span> We transform ambitious ideas into scalable software and practical AI solutions.
          <br />
          <span className="prompt">$ </span> Founder-led execution for the modern web.
          <span className="cursor">_</span>
        </p>

        <div className="hero-actions">
          <button onClick={scrollToContact} className="btn btn-primary mono-font">
            ./start_project.sh
          </button>
        </div>
      </div>

      <style>{`
        .hero {
          padding-top: 8rem;
          padding-bottom: 8rem;
          position: relative;
          background-image: url(${heroBg});
          background-size: cover;
          background-position: center;
          color: white;
          overflow: hidden;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(5, 8, 16, 0.9); /* Darker overlay for code readability */
          z-index: 1;
          /* Matrix-like subtle grid */
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .relative-z {
          position: relative;
          z-index: 2;
        }
        .terminal-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(22, 27, 34, 0.8);
          border: 1px solid var(--color-border);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          margin-bottom: 2rem;
          backdrop-filter: blur(4px);
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-right: 6px;
        }
        .red { background: #ff5f56; }
        .yellow { background: #ffbd2e; }
        .green { background: #27c93f; }
        .badge-text {
          font-family: 'JetBrains Mono', monospace;
          color: var(--color-text-muted);
          font-size: 0.75rem;
          margin-left: 0.5rem;
        }

        .hero-title {
          font-size: 3rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
          text-shadow: 0 4px 20px rgba(0,0,0,0.5);
          font-family: 'JetBrains Mono', monospace;
        }
        
        /* Typewriter Animation Keyframes */
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        
        .hero-subtitle {
          font-size: 1.15rem;
          color: #c9d1d9; 
          max-width: 700px;
          margin: 0 auto 2.5rem;
          text-align: left;
          background: rgba(22, 27, 34, 0.6);
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid var(--color-border);
        }
        
        .prompt {
          color: var(--color-primary);
          margin-right: 0.5rem;
        }
        
        .cursor {
          display: inline-block;
          animation: blink 1s step-end infinite;
          color: var(--color-primary);
          font-weight: bold;
        }
        
        @keyframes blink {
          50% { opacity: 0; }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          .hero-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
