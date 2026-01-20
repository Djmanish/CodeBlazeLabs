import React from 'react';

const TechItem = ({ name, icon }) => (
  <div className="tech-item" data-aos="zoom-in">
    <div className="tech-icon">{icon}</div>
    <span className="tech-name">{name}</span>
  </div>
);

const Technologies = () => {
  return (
    <section id="technologies" className="section tech-section">
      <div className="container">
        <div className="section-header text-center" data-aos="fade-up">
          <div className="tech-badge-center">
            <span className="badge-icon">⚡</span> Powering Your Growth
          </div>
          <h2 className="section-title">
            Our <span className="text-highlight">Technology</span> Stack
          </h2>
          <p className="section-subtitle">
            We use cutting-edge frameworks to build future-proof solutions.
          </p>
        </div>

        <div className="tech-groups">
          <div className="tech-group">
            <h3>Frontend</h3>
            <div className="tech-grid">
              <TechItem name="React" icon="⚛️" />
              <TechItem name="Next.js" icon="▲" />
              <TechItem name="TypeScript" icon="TS" />
              <TechItem name="Tailwind" icon="≋" />
            </div>
          </div>

          <div className="divider"></div>

          <div className="tech-group">
            <h3>Backend & AI</h3>
            <div className="tech-grid">
              <TechItem name="Node.js" icon="🟢" />
              <TechItem name="Python" icon="🐍" />
              <TechItem name="FastAPI" icon="⚡" />
              <TechItem name="OpenAI" icon="🧠" />
            </div>
          </div>

          <div className="divider"></div>

          <div className="tech-group">
            <h3>Cloud & DevOps</h3>
            <div className="tech-grid">
              <TechItem name="AWS" icon="☁️" />
              <TechItem name="Docker" icon="🐳" />
              <TechItem name="Kubernetes" icon="⚓" />
              <TechItem name="Vercel" icon="▲" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .tech-section {
          background-color: var(--color-bg);
          padding-bottom: 8rem;
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
        
        .tech-groups {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 3rem;
          margin-top: 4rem;
        }

        .tech-group h3 {
          text-align: center;
          font-size: 1.25rem;
          margin-bottom: 2rem;
          color: white;
          font-family: var(--font-heading);
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .divider {
          width: 1px;
          height: 200px;
          background: rgba(255,255,255,0.1);
          align-self: center;
        }

        .tech-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100px;
          height: 100px;
          background: var(--color-bg-alt);
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.05);
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .tech-item:hover {
          transform: translateY(-5px);
          border-color: var(--color-primary);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        .tech-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
        .tech-name {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          font-weight: 500;
        }

        @media (max-width: 900px) {
          .tech-groups {
            flex-direction: column;
            align-items: center;
          }
          .divider {
            width: 100px;
            height: 1px;
            background: rgba(255,255,255,0.1);
          }
        }
      `}</style>
    </section>
  );
};

export default Technologies;
