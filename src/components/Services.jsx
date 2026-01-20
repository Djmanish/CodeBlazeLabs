import React from 'react';

const ServiceItem = ({ number, title, description, features, delay }) => (
  <div className="service-item" data-aos="fade-up" data-aos-delay={delay}>
    <div className="service-number text-outline">{number}</div>
    <div className="service-content">
      <h3 className="service-title">{title}</h3>
      <p className="service-desc">{description}</p>
      <ul className="service-features">
        {features.map((feature, index) => (
          <li key={index}>
            <span className="sc-icon">✦</span> {feature}
          </li>
        ))}
      </ul>
      <button className="btn-text">
        Read More <span className="arrow">→</span>
      </button>
    </div>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header text-center" data-aos="fade-up">
          <div className="tech-badge-center">
            <span className="badge-icon">❖</span> Our Expertise
          </div>
          <h2 className="section-title">
            High-End <span className="text-highlight">Services</span> <br />
            For Digital Growth
          </h2>
        </div>

        <div className="services-list">
          <ServiceItem
            number="01"
            title="Custom Software Development"
            description="We build robust, scalable, and secure software solutions tailored to your unique business needs."
            features={['Enterprise Application Architecture', 'Cloud-Native Solutions', 'Legacy System Modernization']}
            delay="0"
          />
          <ServiceItem
            number="02"
            title="AI & Machine Learning"
            description="Leverage the power of artificial intelligence to automate processes and gain actionable insights."
            features={['Predictive Analytics Models', 'Natural Language Processing', 'Computer Vision Systems']}
            delay="100"
          />
          <ServiceItem
            number="03"
            title="Product Design & Strategy"
            description="From concept to launch, we design user-centric products that drive engagement and retention."
            features={['UX/UI Design Systems', 'User Research & Testing', 'Product Roadmap Strategy']}
            delay="200"
          />
        </div>
      </div>

      <style>{`
        .services-section {
          background-color: var(--color-bg);
          position: relative;
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

        .section-title {
          font-size: 3rem;
          margin-bottom: 4rem;
        }
        
        .services-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .service-item {
          display: grid;
          grid-template-columns: 150px 1fr;
          gap: 3rem;
          padding: 4rem;
          background: var(--color-bg-alt);
          border-radius: 30px;
          transition: transform 0.3s ease, border-color 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.03);
          position: relative;
          overflow: hidden;
        }
        
        .service-item:hover {
          transform: translateY(-5px);
          border-color: rgba(96, 101, 212, 0.3);
          box-shadow: 0 20px 60px -10px rgba(0,0,0,0.3);
        }

        .service-features {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }
        .service-features li {
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--color-text);
          display: flex;
          align-items: center;
        }
        .sc-icon {
          color: var(--color-primary);
          margin-right: 12px;
          font-size: 1.2rem;
        }

        .service-number {
          font-family: var(--font-heading);
          font-size: 5rem;
          font-weight: 700;
          color: transparent;
          -webkit-text-stroke: 1px var(--color-primary);
          line-height: 1;
          transition: all 0.3s ease;
          opacity: 1; /* Fully visible orange by default */
        }
        .service-item:hover .service-number {
          text-shadow: 0 0 15px var(--color-primary), 0 0 30px var(--color-secondary);
          transform: scale(1.05); /* Subtle pop */
        }

        .btn-text {
          background: none;
          border: none;
          color: white;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.9rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          transition: color 0.3s;
          padding: 0;
          letter-spacing: 1px;
        }
        .btn-text .arrow {
          font-size: 1.2rem;
          transition: transform 0.3s;
        }
        .btn-text:hover {
          color: var(--color-primary);
        }
        .btn-text:hover .arrow {
          transform: translateX(5px);
        }

        @media (max-width: 900px) {
          .service-item {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 2.5rem;
          }
          .service-number {
            font-size: 3rem;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
