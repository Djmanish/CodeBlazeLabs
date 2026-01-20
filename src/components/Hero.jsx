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
    <section className="hero section" id="home">
      {/* Background Elements */}
      <div className="hero-bg-grid"></div>
      <div className="hero-glow glow-1"></div>
      <div className="hero-glow glow-2"></div>

      <div className="container hero-container" data-aos="fade-up">

        {/* Left Content */}
        <div className="hero-content">
          <div className="tech-badge">
            <span className="badge-icon">★</span> IT Solutions & Technology
          </div>

          <h1 className="hero-title">
            Digital <span className="text-highlight">Solutions</span> <br />
            For Your Business
          </h1>

          <p className="hero-text">
            We transform ambitious ideas into scalable software and intelligent AI tools.
            Experience founder-led engineering designed for high-performance results.
          </p>

          <div className="hero-actions">
            <button onClick={scrollToContact} className="btn btn-primary">
              Start Project
            </button>
            <button className="btn btn-outline">
              View Services
            </button>
          </div>
        </div>

        {/* Right Visual - AI Neural Core */}
        <div className="hero-visual">
          <div className="ai-core-container">
            <div className="ai-orbit orbit-1"></div>
            <div className="ai-orbit orbit-2"></div>
            <div className="ai-orbit orbit-3"></div>

            <div className="central-globe">
              <div className="globe-grid"></div>
              <div className="globe-glow"></div>
            </div>

            {/* Floating Tech Icons/Nodes */}
            <div className="floating-node node-1">
              <span className="node-icon">SAAS</span>
            </div>
            <div className="floating-node node-2">
              <span className="node-icon">AI</span>
            </div>
            <div className="floating-node node-3">
              <span className="node-icon">Agentic AI</span>
            </div>
            <div className="floating-node node-4">
              <span className="node-icon">Services</span>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .hero {
          min-height: 85vh;
          display: flex;
          align-items: center;
          padding-top: 4rem;
          background: #0B192C;
          position: relative;
          overflow: hidden;
        }

        /* Background Effects */
        .hero-bg-grid {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          opacity: 0.5;
          pointer-events: none;
          mask-image: radial-gradient(circle at 50% 50%, black 40%, transparent 80%);
        }
        .hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          z-index: 0;
        }
        .glow-1 {
          width: 500px;
          height: 500px;
          background: #F97316; /* Orange */
          top: -100px;
          left: -100px;
          animation: float 10s infinite ease-in-out;
        }
        .glow-2 {
          width: 600px;
          height: 600px;
          background: #EA580C; /* Darker Orange */
          bottom: -150px;
          right: -100px;
          animation: float 14s infinite ease-in-out reverse;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        
        /* Left Content */
        .tech-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          color: var(--color-accent);
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .badge-icon { margin-right: 8px; }

        .hero-title {
          font-size: clamp(3rem, 5vw, 4.5rem);
          line-height: 1.1;
          color: white;
          margin-bottom: 2rem;
          font-family: var(--font-heading);
        }
        .text-highlight {
          color: var(--color-accent);
          display: inline-block;
          text-shadow: 0 0 30px rgba(255, 210, 93, 0.3);
        }
        
        .hero-text {
          font-size: 1.1rem;
          color: var(--color-text);
          margin-bottom: 3rem;
          max-width: 500px;
          line-height: 1.8;
        }

        .hero-actions { display: flex; gap: 1.5rem; }
        .btn-outline {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          color: white;
        }
        .btn-outline:hover {
          background: rgba(255,255,255,0.05);
          border-color: white;
        }

        /* Right Visual - Digital Earth */
        .hero-visual {
          position: relative;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
        }

        .ai-core-container {
          position: relative;
          width: 400px;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
        }

        /* Central Globe */
        .central-globe {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #FB923C, #EA580C, #0B192C);
          box-shadow: 0 0 60px rgba(249, 115, 22, 0.4);
          position: relative;
          z-index: 10;
          animation: pulse-glow 3s infinite ease-in-out;
          overflow: hidden;
        }

        .globe-grid {
          position: absolute;
          width: 200%;
          height: 100%;
          top: 0;
          left: 0;
          background: 
            repeating-linear-gradient(rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 20px),
            repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 20px);
          border-radius: 50%;
          animation: spin-globe 20s linear infinite;
        }
        
        /* Orbits */
        .ai-orbit {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transform-style: preserve-3d;
        }
        .orbit-1 { width: 260px; height: 260px; animation: spin-orbit 10s linear infinite; border-color: rgba(249, 115, 22, 0.3); }
        .orbit-2 { width: 340px; height: 340px; animation: spin-orbit 15s linear infinite reverse; border-color: rgba(255, 255, 255, 0.1); }
        .orbit-3 { width: 420px; height: 420px; animation: spin-orbit 20s linear infinite; border-style: dashed; }

        /* Floating Nodes */
        .floating-node {
          position: absolute;
          background: rgba(11, 25, 44, 0.8);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 8px 12px;
          border-radius: 8px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
          animation: float-node 6s ease-in-out infinite;
          z-index: 12;
        }
        .node-icon { font-family: var(--font-body); font-weight: 600; font-size: 14px; color: white; letter-spacing: 0.5px; }
        
        .node-1 { top: 15%; right: 10%; animation-delay: 0s; color: var(--color-primary); border-color: var(--color-primary); }
        .node-2 { bottom: 20%; left: 5%; animation-delay: 2s; color: var(--color-secondary); border-color: var(--color-secondary); }
        .node-3 { top: 5%; left: 25%; animation-delay: 4s; color: var(--color-accent); border-color: var(--color-accent); }
        .node-4 { bottom: 10%; right: 20%; animation-delay: 1.5s; color: #FB923C; border-color: #FB923C; }

        @keyframes spin-orbit {
          0% { transform: rotate3d(1, 1, 1, 0deg); }
          100% { transform: rotate3d(1, 1, 1, 360deg); }
        }
        
        @keyframes spin-globe {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 60px rgba(249, 115, 22, 0.4); transform: scale(1); }
          50% { box-shadow: 0 0 80px rgba(234, 88, 12, 0.5); transform: scale(1.05); }
        }

        @keyframes float-node {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @media (max-width: 900px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-text { margin: 0 auto 3rem; }
          .hero-actions { justify-content: center; }
          .hero-visual { display: none; }
          .hero-glow { width: 300px; height: 300px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
