import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-alt">
      <div className="container">
        <div className="section-header text-center" data-aos="fade-up">
          <h2 className="section-title mono-font">{'<'} Console_Logs {'/>'}</h2>
          <p className="section-subtitle">Output from our partners.</p>
        </div>

        <div className="grid">
          <div className="log-card" data-aos="fade-up">
            <div className="terminal-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
              <span>review.json</span>
            </div>
            <pre className="log-content">
              {`{
  "client": "TechStart Inc",
  "rating": 5.0,
  "comment": "CodeBlazeLabs delivered the MVP faster than expected. The code quality is exceptional."
}`}
            </pre>
          </div>

          <div className="log-card" data-aos="fade-up" data-aos-delay="100">
            <div className="terminal-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
              <span>feedback.log</span>
            </div>
            <pre className="log-content">
              {`[INFO] Project completed successfully
[INFO] Deployment: Zero downtime
[USER] "Detailed attention to backend architecture saved us months of scaling debt."`}
            </pre>
          </div>
        </div>
      </div>

      <style>{`
        .log-card {
          background: #0d1117;
          border: 1px solid var(--color-border);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          transition: transform 0.2s;
        }
        .log-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-primary);
        }
        .terminal-header {
          background: #161b22;
          padding: 0.5rem 1rem;
          display: flex;
          align-items: center;
          border-bottom: 1px solid var(--color-border);
        }
        .terminal-header span {
          margin-left: auto;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: var(--color-text-muted);
        }
        .log-content {
          padding: 1.5rem;
          color: #a5d6ff;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          white-space: pre-wrap;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
