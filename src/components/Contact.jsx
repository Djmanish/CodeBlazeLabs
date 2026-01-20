import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-wrapper">
          {/* Contact Info Side */}
          <div className="contact-info" data-aos="fade-right">
            <div className="tech-badge">
              <span className="badge-icon">✉</span> Contact Us
            </div>
            <h2 className="section-title">
              Let's Start A <span className="text-highlight">Project</span>
            </h2>
            <p className="contact-desc">
              We help ambitious companies scale. Tell us about your project and we'll get back to you within 24 hours.
            </p>

            <div className="contact-details">
              <div className="detail-item">
                <div className="detail-icon">@</div>
                <div>
                  <span className="detail-label">Email Support</span>
                  <p className="detail-value">hello@codeblazelabs.com</p>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon">#</div>
                <div>
                  <span className="detail-label">Work Hours</span>
                  <p className="detail-value">Mon - Fri: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="contact-form-container" data-aos="fade-left">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" className="form-input" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" className="form-input" required />
              </div>
              <div className="form-group">
                <select className="form-input">
                  <option>Select Service</option>
                  <option>Software Development</option>
                  <option>AI Solutions</option>
                  <option>Consulting</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Project Details" rows="4" className="form-input" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--color-bg-alt);
          padding-bottom: 6rem;
        }
        
        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 6rem;
          align-items: center;
        }

        .tech-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.05);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          color: var(--color-accent);
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .badge-icon { margin-right: 8px; }

        .section-title {
           font-size: 3rem;
           margin-bottom: 1.5rem;
        }

        .contact-desc {
          color: var(--color-text-muted);
          font-size: 1.1rem;
          margin-bottom: 3rem;
          max-width: 450px;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .detail-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .detail-icon {
          width: 50px;
          height: 50px;
          background: var(--color-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-size: 1.5rem;
          color: white;
        }
        .detail-label {
          display: block;
          font-size: 0.85rem;
          color: var(--color-text-muted);
          margin-bottom: 0.2rem;
        }
        .detail-value {
          font-size: 1.1rem;
          color: white;
          font-weight: 500;
        }

        /* Form */
        .contact-form-container {
          background: var(--color-bg);
          padding: 3rem;
          border-radius: 30px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
          border: 1px solid rgba(255,255,255,0.05);
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-input {
          width: 100%;
          background: var(--color-bg-alt);
          border: 1px solid rgba(255,255,255,0.05);
          padding: 1rem 1.5rem;
          border-radius: 12px;
          color: white;
          font-family: var(--font-body);
          font-size: 1rem;
          transition: all 0.3s;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--color-primary);
          background: rgba(255,255,255,0.05);
        }
        .form-input::placeholder {
          color: rgba(255,255,255,0.3);
        }
        
        select.form-input {
           appearance: none;
        }

        @media (max-width: 900px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .contact-form-container {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
