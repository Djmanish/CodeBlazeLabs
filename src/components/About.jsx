import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <div className="tech-pill-small mb-4">WHO WE ARE</div>
            <h2 className="section-title">Engineering <span className="text-gradient">Excellence</span></h2>
            <p className="about-description">
              At CodeBlazeLabs, we don't just write code; we build businesses.
              Our approach is rooted in clean engineering principles and scalable systems design.
            </p>
            <p className="about-description">
              We believe in direct collaboration, eliminating the layers of management that slow
              down traditional agencies. This ensures your vision is translated directly into
              high-performance software.
            </p>

            <ul className="feature-list">
              <li className="feature-item">
                <span className="checkbox">✓</span> Direct Founder Communication
              </li>
              <li className="feature-item">
                <span className="checkbox">✓</span> Scalable Architecture First
              </li>
              <li className="feature-item">
                <span className="checkbox">✓</span> Rapid Iteration & Deployment
              </li>
            </ul>
          </div>

          <div className="about-visual" data-aos="fade-left" data-aos-delay="200">
            <div className="visual-card glass-panel">
              <div className="card-glow"></div>
              <div className="terminal-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="term-title">innovation.js</span>
              </div>
              <div className="code-snippet">
                <pre>
                  <code>
                    <span className="c-k">const</span> <span className="c-f">buildFuture</span> = (<span className="c-a">vision</span>) ={'>'} {'{'}{'\n'}
                    {'  '}<span className="c-k">await</span> <span className="c-f">analyze</span>(<span className="c-a">vision</span>);{'\n'}
                    {'  '}<span className="c-k">return</span> <span className="c-s">"Scalable Reality"</span>;{'\n'}
                    {'}'}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }
        .tech-pill-small {
          display: inline-block;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: var(--color-primary);
          padding: 0.25rem 0.75rem;
          border: 1px solid rgba(255, 95, 31, 0.3);
          border-radius: 99px;
          margin-bottom: 1.5rem;
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }
        .about-description {
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
          font-size: 1.05rem;
          line-height: 1.7;
        }
        .feature-list {
          list-style: none;
          margin-top: 2.5rem;
        }
        .feature-item {
          margin-bottom: 1rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          font-size: 1.05rem;
        }
        .checkbox {
          color: var(--color-primary);
          margin-right: 1rem;
          font-weight: bold;
        }
        .visual-card {
          padding: 0;
          border-radius: 12px;
          box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.5);
          transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
          transition: transform 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .visual-card:hover {
          transform: perspective(1000px) rotateY(0) rotateX(0);
        }
        .card-glow {
          position: absolute;
          top: -50px;
          right: -50px;
          width: 100px;
          height: 100px;
          background: var(--color-primary);
          filter: blur(60px);
          opacity: 0.4;
        }
        .terminal-header {
          display: flex;
          align-items: center;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(0, 0, 0, 0.2);
        }
        .term-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: var(--color-text-muted);
          margin-left: 1rem;
        }
        .code-snippet {
          padding: 2rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.9rem;
          line-height: 1.6;
        }
        .c-k { color: #ff7b72; }
        .c-f { color: #d2a8ff; }
        .c-s { color: #a5d6ff; }
        .c-a { color: #79c0ff; }
        
        @media (max-width: 968px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .visual-card {
             transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
