import React from 'react';

const ServiceCard = ({ title, description, icon, delay }) => (
  <div className="card" data-aos="fade-up" data-aos-delay={delay}>
    <div className="card-icon">{icon}</div>
    <h3 className="card-title mono-font">{title}</h3>
    <p className="card-text">{description}</p>
    <style>{`
      .card {
        background: #0d1117;
        padding: 2rem;
        border-radius: 8px;
        border: 1px solid var(--color-border);
        transition: transform var(--transition-fast), box-shadow var(--transition-fast);
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      .card:hover {
        transform: translateY(-5px);
        border-color: var(--color-primary);
        box-shadow: 0 10px 30px -10px rgba(255, 95, 31, 0.15);
      }
      .card-icon {
        font-size: 2rem;
        margin-bottom: 1.5rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        background: #161b22;
        border-radius: 8px;
        border: 1px solid var(--color-border);
      }
      .card-title {
        font-size: 1.1rem;
        margin-bottom: 1rem;
        color: var(--color-text);
      }
      .card-text {
        color: var(--color-text-muted);
        font-size: 0.9rem;
        line-height: 1.6;
        font-family: 'Inter', sans-serif; /* Keep body text readable */
      }
    `}</style>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="section bg-alt">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title mono-font">{'<'} Our_Services {'/>'}</h2>
          <p className="section-subtitle">Comprehensive technical solutions for scaling businesses.</p>
        </div>

        <div className="grid">
          <ServiceCard
            title="Software Development"
            description="Custom web and mobile applications built with robust architecture and modern maintainable code."
            icon="💻"
            delay="0"
          />
          <ServiceCard
            title="Product & SaaS"
            description="End-to-end product development from MVP to full-scale SaaS platforms focused on user experience."
            icon="🚀"
            delay="100"
          />
          <ServiceCard
            title="AI Tools & Automation"
            description="Integrating intelligent agents and automation workflows to streamline operations and unlock insights."
            icon="⚡"
            delay="200"
          />
        </div>
      </div>

      <style>{`
        .bg-alt {
          background-color: var(--color-bg-alt);
        }
        .section-header {
          margin-bottom: 3rem;
        }
        .section-title {
          font-size: 2.25rem;
          margin-bottom: 1rem;
        }
        .section-subtitle {
          color: var(--color-text-muted);
          font-size: 1.125rem;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
      `}</style>
    </section>
  );
};

export default Services;
