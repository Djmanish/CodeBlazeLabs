import React from 'react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero section" id="home">
      {/* Atmosphere Effects */}
      <div className="hero-vignette"></div>
      <div className="hero-glow-ambient"></div>

      <div className="container hero-container" data-aos="fade-up">

        {/* Background Visual Layer */}
        <div className="hero-visual-layer">
          <div className="central-globe-large">
            <div className="globe-grid"></div>
            <div className="globe-glow"></div>
            {/* Orbits */}
            <div className="ai-orbit orbit-1"></div>
            <div className="ai-orbit orbit-2"></div>
          </div>
        </div>

        {/* Foreground Content Layer */}
        <div className="hero-content-center">
          <div className="tech-badge-center">
            <span className="badge-icon">★</span> PREMIUM SOFTWARE STUDIO
          </div>

          <h1 className="hero-title-massive">
            DIGITAL<br />
            <span className="text-stroke">SOLUTIONS</span>
          </h1>

          <p className="hero-text-center">
            We transform ambitious ideas into scalable software and intelligent AI tools.
          </p>

          <div className="hero-cta-group">
            <button onClick={scrollToContact} className="btn btn-primary btn-lg">
              Start Project
            </button>
          </div>
        </div>

      </div>

      {/* Marquee Strip */}
      <div className="marquee-strip">
        <div className="marquee-content">
          <span>STRATEGY • UI/UX DESIGN • WEB DEVELOPMENT • AI INTEGRATION • MOBILE APPS • CLOUD ARCHITECTURE • </span>
          <span>STRATEGY • UI/UX DESIGN • WEB DEVELOPMENT • AI INTEGRATION • MOBILE APPS • CLOUD ARCHITECTURE • </span>
        </div>
      </div>

      <style>{`
        .hero {
          min-height: 100vh; /* Full viewport height */
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #050A14; /* Deepest Navy/Black */
          position: relative;
          overflow: hidden;
          padding-top: 0;
        }

        /* Vignette & Atmosphere */
        .hero-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 30%, #050A14 90%);
          z-index: 2;
          pointer-events: none;
        }
        .hero-glow-ambient {
          position: absolute;
          width: 80%;
          height: 60%;
          background: var(--color-primary);
          filter: blur(150px);
          opacity: 0.15;
          border-radius: 50%;
          top: 20%;
          left: 10%;
          z-index: 0;
          animation: pulse-ambient 8s infinite ease-in-out;
        }

        .hero-container {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          padding-bottom: 80px; /* Space for marquee */
        }

        /* Massive Typography */
        .hero-title-massive {
          font-family: 'Space Grotesk', sans-serif; /* Using a bold sans-serif */
          font-size: clamp(4rem, 13vw, 15rem);
          font-weight: 800;
          line-height: 0.85;
          text-align: center;
          color: white;
          letter-spacing: -0.04em;
          margin: 1rem 0 2rem;
          text-transform: uppercase;
        }
        
        .text-stroke {
          color: transparent;
          -webkit-text-stroke: 2px rgba(255,255,255,0.8);
          position: relative;
        }

        .hero-text-center {
          text-align: center;
          max-width: 600px;
          color: var(--color-text-muted);
          font-size: 1.2rem;
          margin: 0 auto 3rem; /* Centering margin */
          line-height: 1.6;
        }

        .hero-content-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          text-align: center;
        }

        .tech-badge-center {
          margin: 60px auto 1.5rem;
          display: inline-flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 8px 20px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 2px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hero-cta-group {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .hero-cta-group {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .btn-lg {
          padding: 18px 48px;
          font-size: 1.1rem;
          letter-spacing: 1px;
        }

        /* Visual Layer (Behind Text) */
        .hero-visual-layer {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1; /* Behind text (3) and vignette (2) */
          opacity: 0.6;
          pointer-events: none;
        }

        .central-globe-large {
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #FB923C, #EA580C, transparent 70%);
          position: relative;
          filter: blur(60px); /* Artistic blur */
        }
        
        .globe-grid {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: repeating-linear-gradient(rgba(255,255,255,0.1) 0px, transparent 1px, transparent 40px);
          animation: spin-globe 60s linear infinite;
          opacity: 0.3;
        }

        .ai-orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .orbit-1 { width: 800px; height: 800px; border-color: rgba(249, 115, 22, 0.2); transform: translate(-50%, -50%) rotateX(60deg) rotateY(20deg); }
        .orbit-2 { width: 1000px; height: 1000px; border-style: dashed; opacity: 0.2; }


        /* Marquee */
        .marquee-strip {
          position: absolute;
          bottom: 120px; /* Above floating nav */
          width: 100%;
          background: rgba(255,255,255,0.02);
          border-top: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding: 15px 0;
          z-index: 10;
          overflow: hidden;
        }
        .marquee-content {
          display: flex;
          white-space: nowrap;
          animation: marquee-scroll 40s linear infinite;
        }
        .marquee-content span {
          font-family: var(--font-heading);
          font-size: 1rem;
          color: var(--color-text-muted);
          letter-spacing: 3px;
          margin-right: 2rem;
          font-weight: 500;
          text-transform: uppercase;
        }

        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pulse-ambient {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.1); }
        }
        @keyframes spin-globe {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 900px) {
          .hero-title-massive { font-size: 16vw; }
          .central-globe-large { width: 300px; height: 300px; }
          .marquee-strip { bottom: 100px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
