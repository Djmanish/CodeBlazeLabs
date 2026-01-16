import React from 'react';

const Process = () => {
  return (
    <section id="process" className="section">
      <div className="container">
        <div className="section-header text-center" data-aos="fade-up">
          <h2 className="section-title mono-font">{'<'} The_Algorithm {'/>'}</h2>
          <p className="section-subtitle">Our iterative execution process.</p>
        </div>

        <div className="process-flow">
          <div className="step" data-aos="fade-up" data-aos-delay="0">
            <div className="step-number">01</div>
            <h3 className="step-title">Discovery & Spec</h3>
            <div className="code-block">
              <span className="var">const</span> <span className="def">requirements</span> = <span className="keyword">await</span> client.vision();
            </div>
            <p>We analyze your needs and define the technical specification.</p>
          </div>

          <div className="connector"></div>

          <div className="step" data-aos="fade-up" data-aos-delay="100">
            <div className="step-number">02</div>
            <h3 className="step-title">Agile Build</h3>
            <div className="code-block">
              <span className="keyword">while</span>(<span className="def">!perfect</span>) {'{'}<br />
              &nbsp;&nbsp;code.refactor();<br />
              {'}'}
            </div>
            <p>Rapid development cycles with continuous feedback.</p>
          </div>

          <div className="connector"></div>

          <div className="step" data-aos="fade-up" data-aos-delay="200">
            <div className="step-number">03</div>
            <h3 className="step-title">Deploy & Scale</h3>
            <div className="code-block">
              <span className="def">production</span>.<span className="keyword">launch</span>(🚀);
            </div>
            <p>Automated CI/CD deployment to global edge networks.</p>
          </div>
        </div>
      </div>

      <style>{`
        .process-flow {
          display: flex;
          justify-content: space-between;
          margin-top: 3rem;
          gap: 2rem;
          position: relative;
        }
        .step {
          flex: 1;
          background: var(--color-bg-alt);
          padding: 2rem;
          border-radius: 8px;
          border: 1px solid var(--color-border);
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
        }
        .step-number {
          font-family: 'JetBrains Mono', monospace;
          font-size: 3rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.05);
          position: absolute;
          top: 1rem;
          right: 1.5rem;
        }
        .step-title {
          color: var(--color-primary);
          margin-bottom: 1rem;
        }
        .code-block {
          background: #000;
          padding: 1rem;
          border-radius: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          margin-bottom: 1rem;
          border-left: 3px solid var(--color-primary);
          color: #d4d4d4;
        }
        .var { color: #569cd6; }
        .def { color: #dcdcaa; }
        .keyword { color: #c586c0; }
        
        @media (max-width: 768px) {
          .process-flow {
            flex-direction: column;
          }
          .connector {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Process;
