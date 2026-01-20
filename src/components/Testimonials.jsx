import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-grid">
      <div className="container">
        <div className="section-header text-center" data-aos="fade-up">
          <h2 className="section-title">Trusted by <span className="text-gradient">Innovators</span></h2>
          <p className="section-subtitle">Partners who built their future with us.</p>
        </div>

        <div className="grid">
          <div className="review-card glass-panel" data-aos="fade-up">
            <div className="stars">★★★★★</div>
            <p className="review-text">
              "CodeBlazeLabs delivered the MVP faster than expected. The code quality is exceptional and the architecture is ready for scale."
            </p>
            <div className="reviewer">
              <div className="avatar">TI</div>
              <div className="info">
                <div className="name">TechStart Inc</div>
                <div className="role">CTO</div>
              </div>
            </div>
          </div>

          <div className="review-card glass-panel" data-aos="fade-up" data-aos-delay="100">
            <div className="stars">★★★★★</div>
            <p className="review-text">
              "Detailed attention to backend architecture saved us months of scaling debt. Their AI integration was seamless."
            </p>
            <div className="reviewer">
              <div className="avatar">JD</div>
              <div className="info">
                <div className="name">John Doe</div>
                <div className="role">Founder, SaaS Co.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .review-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          height: 100%;
          border: 1px solid var(--color-border);
          transition: transform 0.3s ease;
        }
        .review-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-border-hover);
        }
        .stars {
          color: var(--color-accent);
          margin-bottom: 1.5rem;
          font-size: 1.25rem;
          letter-spacing: 2px;
        }
        .review-text {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--color-text);
          margin-bottom: 2rem;
          flex-grow: 1;
        }
        .reviewer {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: white;
          font-size: 1.1rem;
        }
        .name {
          font-weight: 600;
          color: white;
          font-size: 1rem;
        }
        .role {
          font-size: 0.85rem;
          color: var(--color-text-muted);
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
