import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <div className="label">Unique Approach</div>
            <h2 className="section-title mono-font">{'<'} About_Us {'/>'}</h2>
            <p>
              At CodeBlazeLabs, we don't just write code; we build businesses.
              Our approach is rooted in clean engineering principles and scalable systems design.
            </p>
            <p>
              We believe in direct collaboration, eliminating the layers of management that slow
              down traditional agencies. This ensures your vision is translated directly into
              high-performance software that stands the test of time.
            </p>
            <ul className="feature-list">
              <li>✓ Direct Founder Communication</li>
              <li>✓ Scalable Architecture First</li>
              <li>✓ Rapid Iteration & Deployment</li>
            </ul>
          </div>
          <div className="about-visual" data-aos="fade-left" data-aos-delay="200">
            <div className="visual-card">
              <div className="code-snippet">
                <pre>
                  <code>
                    <span className="c-k">const</span> <span className="c-f">buildFuture</span> = () ={'>'} {'{'}{'\n'}
                    {'  '}<span className="c-k">return</span> <span className="c-s">"Innovation"</span>;{'\n'}
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
          gap: 4rem;
          align-items: center;
        }
        .label {
          color: var(--color-primary);
          font-weight: 600;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          font-size: 0.875rem;
        }
        .about-text p {
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
        }
        .feature-list {
          list-style: none;
          margin-top: 2rem;
        }
        .feature-list li {
          margin-bottom: 0.75rem;
          font-weight: 500;
        }
        .visual-card {
          background: #1e1e1e;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          transform: rotate(2deg);
        }
        .code-snippet {
          font-family: monospace;
          color: #d4d4d4;
        }
        .c-k { color: #569cd6; }
        .c-f { color: #dcdcaa; }
        .c-s { color: #ce9178; }
        
        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
