import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section bg-alt contact-section">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info" data-aos="fade-right">
            <h2 className="section-title mono-font">{'<'} Contact_Us {'/>'}</h2>
            <p>
              Ready to start your project? Get in touch with us effectively.
              We're ready to bring your ideas to life.
            </p>
            <div className="info-item">
              <strong>Email</strong><br />
              hello@codeblazelabs.com
            </div>
            <div className="info-item">
              <strong>Location</strong><br />
              Remote / Global
            </div>
          </div>

          <div className="contact-form-wrapper" data-aos="fade-left" data-aos-delay="200">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              action="/success"
              id="contact-form"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="Your Name" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="your@email.com" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" required placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: #111827; /* Dark background for contact */
          color: white;
        }
        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        .contact-info .section-title {
          color: white; 
        }
        .contact-info p {
          color: #9CA3AF;
          margin-bottom: 2rem;
        }
        .contact-form-wrapper {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          color: var(--color-text);
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          font-size: 0.875rem;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid var(--color-border);
          border-radius: 6px;
          font-family: inherit;
          transition: border-color var(--transition-fast);
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 2px rgba(255, 69, 0, 0.1);
        }
        .btn-block {
          width: 100%;
        }
        .info-item {
          margin-bottom: 1.5rem;
        }
        .info-item strong {
          color: white;
        }
        
        @media (max-width: 768px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
