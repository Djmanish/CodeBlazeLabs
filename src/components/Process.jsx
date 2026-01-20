import React from 'react';

const Process = () => {
  return (
    <section id="process" className="section process-section">
      <div className="container">
        <div className="section-header text-center" data-aos="fade-up">
          <div className="tech-badge-center">
            <span className="badge-icon">⚙</span> How It Works
          </div>
          <h2 className="section-title">
            Our Execution <span className="text-highlight">Protocol</span>
          </h2>
        </div>

        <div className="process-steps">
          <div className="process-step" data-aos="fade-up" data-aos-delay="0">
            <div className="step-count">01</div>
            <div className="step-content">
              <h3>Discovery</h3>
              <p>We dive deep into your requirements, defining the technical specs and roadmap.</p>
            </div>
            <div className="step-arrow"></div>
          </div>

          <div className="process-step" data-aos="fade-up" data-aos-delay="100">
            <div className="step-count">02</div>
            <div className="step-content">
              <h3>Development</h3>
              <p>Agile sprints with weekly deliverables. You see progress in real-time.</p>
            </div>
            <div className="step-arrow"></div>
          </div>

          <div className="process-step" data-aos="fade-up" data-aos-delay="200">
            <div className="step-count">03</div>
            <div className="step-content">
              <h3>Launch</h3>
              <p>Automated deployment, load testing, and seamless handover to your team.</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .process-section {
          background-color: var(--color-bg-alt);
        }
        
        .tech-badge-center {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          padding: 8px 20px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          color: var(--color-accent);
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .process-steps {
          display: flex;
          justify-content: space-between;
          margin-top: 4rem;
          position: relative;
        }

        .process-step {
          flex: 1;
          text-align: center;
          padding: 0 2rem;
          position: relative;
        }

        .step-count {
          width: 80px;
          height: 80px;
          background: var(--color-bg);
          border: 2px solid var(--color-primary); /* Orange Border by default */
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-size: 1.5rem;
          color: var(--color-primary); /* Orange Text by default */
          margin: 0 auto 2rem;
          position: relative;
          z-index: 2;
          box-shadow: 0 0 0 10px var(--color-bg-alt);
          transition: all 0.3s;
        }
        
        .process-step:hover .step-count {
          border-color: var(--color-primary);
          background: var(--color-primary);
          color: white; /* White text on hover */
        }

        /* Connecting Line */
        .process-steps::before {
          content: '';
          position: absolute;
          top: 40px;
          left: 10%;
          right: 10%;
          height: 2px;
          background: rgba(255,255,255,0.1);
          z-index: 1;
        }

        .step-content h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: white;
        }
        .step-content p {
          color: var(--color-text-muted);
          font-size: 1rem;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .process-steps {
            flex-direction: column;
            gap: 3rem;
          }
          .process-steps::before {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Process;
