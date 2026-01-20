import React from 'react';

const ServiceItem = ({ number, title, description, features }) => (
  <div className="service-item-row" data-aos="fade-up">
    <div className="service-header">
      <span className="service-num">{number}</span>
      <h3 className="service-title-large">{title}</h3>
      <span className="service-arrow">→</span>
    </div>

    <div className="service-body">
      <p className="service-desc-large">{description}</p>
      <div className="service-tags">
        {features.map((feature, index) => (
          <span key={index} className="service-tag">{feature}</span>
        ))}
      </div>
    </div>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="section services-section">
      <div className="services-vignette"></div>

      <div className="container">
        <div className="section-header text-center" data-aos="fade-up">
          <div className="tech-badge-center">
            <span className="badge-icon">❖</span> Our Expertise
          </div>
          <h2 className="section-title-large">
            HIGH-END <span className="text-stroke">SERVICES</span>
          </h2>
        </div>

        <div className="services-list-container">
          <ServiceItem
            number="01"
            title="CUSTOM SOFTWARE"
            description="Robust, scalable, and secure software solutions tailored to your unique business needs."
            features={['Enterprise Architecture', 'Cloud-Native', 'Legacy Modernization']}
          />
          <ServiceItem
            number="02"
            title="AI & MACHINE LEARNING"
            description="Automate processes and gain actionable insights with cutting-edge AI integration."
            features={['Predictive Analytics', 'NLP Models', 'Computer Vision']}
          />
          <ServiceItem
            number="03"
            title="PRODUCT STRATEGY"
            description="User-centric product design that drives engagement, retention, and growth."
            features={['UX/UI Design', 'User Research', 'Roadmap Strategy']}
          />
          <ServiceItem
            number="04"
            title="AGENTIC AI SYSTEMS"
            description="Next-generation autonomous agents that perform complex tasks with minimal oversight."
            features={['Autonomous Workflows', 'Multi-Agent Systems', 'Cognitive Automation']}
          />
        </div>
      </div>

      <style>{`
        .services-section {
          background-color: #050A14;
          padding: 8rem 0;
          position: relative;
          color: white;
          overflow: hidden;
        }
        
        .services-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 20%, #050A14 90%);
          pointer-events: none;
        }

        .section-title-large {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(3rem, 6vw, 6rem);
          text-transform: uppercase;
          line-height: 0.9;
          margin-bottom: 4rem;
          position: relative;
          z-index: 2;
        }

        .services-list-container {
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 2;
        }

        /* List Item Styling */
        .service-item-row {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 3rem 0;
          transition: all 0.4s ease;
          cursor: pointer;
        }
        .service-item-row:last-child {
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .service-item-row:hover {
          background: rgba(249, 115, 22, 0.03); /* Subtle orange tint */
          padding-left: 2rem; /* Slide effect */
          border-color: rgba(249, 115, 22, 0.4);
        }

        .service-header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .service-num {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          color: var(--color-primary);
          margin-right: 2rem;
          opacity: 0.7;
        }

        .service-title-large {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 700;
          color: white;
          flex-grow: 1;
          margin: 0;
          transition: color 0.3s;
        }
        
        .service-item-row:hover .service-title-large {
          color: var(--color-primary); /* Turn orange on hover */
        }

        .service-arrow {
          font-size: 2rem;
          color: var(--color-text-muted);
          transform: rotate(-45deg);
          transition: transform 0.4s, color 0.4s;
        }
        .service-item-row:hover .service-arrow {
          transform: rotate(0deg);
          color: var(--color-primary);
        }

        /* Body (Description & Tags) */
        .service-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          padding-left: 4rem; /* Align with title */
          opacity: 0.6;
          transition: opacity 0.4s;
        }
        .service-item-row:hover .service-body {
          opacity: 1;
        }

        .service-desc-large {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--color-text-muted);
        }

        .service-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: flex-end;
        }

        .service-tag {
          font-size: 0.85rem;
          border: 1px solid rgba(255,255,255,0.2);
          padding: 6px 16px;
          border-radius: 100px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--color-text-muted);
          transition: all 0.3s;
        }
        .service-item-row:hover .service-tag {
          border-color: var(--color-primary);
          color: white;
          background: rgba(249, 115, 22, 0.1);
        }

        @media (max-width: 900px) {
          .service-body {
            grid-template-columns: 1fr;
            padding-left: 0;
            gap: 1.5rem;
          }
          .service-tags {
            justify-content: flex-start;
          }
          .service-item-row:hover {
            padding-left: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
