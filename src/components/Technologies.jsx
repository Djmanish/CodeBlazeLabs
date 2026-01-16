import React from 'react';

const TechCategory = ({ title, skills }) => (
  <div className="tech-category">
    <h4 className="tech-category-title">{title}</h4>
    <div className="tech-list">
      {skills.map((skill, index) => (
        <span key={index} className="tech-pill">{skill}</span>
      ))}
    </div>
  </div>
);

const Technologies = () => {
  return (
    <section id="technologies" className="section bg-tech">
      <div className="container">
        <div className="section-header text-center" data-aos="fade-up">
          <h2 className="section-title mono-font">{'<'} Tech_Stack {'/>'}</h2>
          <p className="section-subtitle">
            <span className="comment">// Core dependencies and dev tools</span>
          </p>
        </div>

        <div className="tech-grid" data-aos="fade-up">
          <TechCategory
            title="frontend"
            skills={['React', 'Next.js', 'TypeScript', 'Vite', 'Tailwind', 'Redux', 'Vue.js']}
          />
          <TechCategory
            title="backend"
            skills={['Node.js', 'Python', 'Django', 'FastAPI', 'Go', 'PostgreSQL', 'MongoDB']}
          />
          <TechCategory
            title="ai_data"
            skills={['LangChain', 'OpenAI', 'PyTorch', 'TensorFlow', 'Hugging Face', 'Pinecone']}
          />
          <TechCategory
            title="devops"
            skills={['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Netlify', 'Vercel', 'CI/CD']}
          />
        </div>
      </div>

      <style>{`
        .bg-tech {
          background-color: var(--color-bg);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        .tech-category {
          padding: 1.5rem;
          border: 1px solid var(--color-border);
          border-radius: 6px;
          background: #0d1117;
          position: relative;
        }
        .tech-category::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
          opacity: 0.5;
        }
        .tech-category-title {
          color: var(--color-accent);
          margin-bottom: 1rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 1rem;
        }
        .tech-category-title::before {
          content: '"';
          color: var(--color-text-muted);
        }
        .tech-category-title::after {
          content: '": [';
          color: var(--color-text-muted);
        }
        .tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          padding-left: 1rem;
        }
        .tech-pill {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          color: var(--color-code-string);
          transition: all var(--transition-fast);
          cursor: default;
        }
        .tech-pill::before {
          content: '"';
          color: var(--color-text-muted);
        }
        .tech-pill::after {
          content: '",';
          color: var(--color-text-muted);
        }
        .tech-pill:hover {
          color: var(--color-primary);
          text-shadow: 0 0 8px rgba(255, 95, 31, 0.4);
        }
        .section-subtitle {
           font-family: 'JetBrains Mono', monospace;
           color: var(--color-code-comment);
           font-size: 0.9rem;
        }
      `}</style>
    </section>
  );
};

export default Technologies;
