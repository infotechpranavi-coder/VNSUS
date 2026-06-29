import { useEffect } from 'react';
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import contactBanner from '../assets/contact.png';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = [
      `Name: ${formData.get('name')}`,
      `Email: ${formData.get('email')}`,
      `Phone: ${formData.get('phone') || 'Not provided'}`,
      '',
      formData.get('message'),
    ].join('\n');

    window.location.href = `mailto:vnsuslifesciences@gmail.com?subject=${encodeURIComponent(formData.get('subject'))}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="contact-page">
      <section className="page-header" style={{ backgroundImage: `url(${contactBanner})` }}>
        <div className="header-overlay"></div>
        <div className="container header-content fade-in">
          <span className="page-kicker">Contact VNSUS Lifesciences</span>
          <h1 className="header-title">Speak with our team</h1>
          <p className="header-subtitle">
            For product inquiries, partnerships, distribution, or general support, reach out and we will respond with clarity and care.
          </p>
        </div>
      </section>

      <section className="contact-cards-section">
        <div className="container">
          <div className="cards-grid">
            <div className="contact-card glass slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="icon-wrapper">
                <Phone size={28} />
              </div>
              <div className="card-content">
                <h3>Call Us</h3>
                <div className="contact-details">
                  <a href="tel:+918108352132">+91 8108352132</a>
                  <a href="tel:+919175883887">+91 9175883887</a>
                  <span>Monday to Saturday</span>
                </div>
              </div>
            </div>

            <div className="contact-card glass slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="icon-wrapper">
                <Mail size={28} />
              </div>
              <div className="card-content">
                <h3>Email Us</h3>
                <div className="contact-details">
                  <a href="mailto:vnsuslifesciences@gmail.com">vnsuslifesciences@gmail.com</a>
                  <span>Business and product inquiries</span>
                </div>
              </div>
            </div>

            <div className="contact-card glass slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="icon-wrapper">
                <MapPin size={28} />
              </div>
              <div className="card-content">
                <h3>Visit Us</h3>
                <div className="contact-details">
                  <span>Shop No. 9, Chamunda Co-op HSG Society</span>
                  <span>Opp. Kongaon Police Chowki</span>
                  <span>Kalyan-Bhiwandi Road, Thane - 421311</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="form-map-section section">
        <div className="container">
          <div className="form-map-grid">
            <div className="contact-form-container glass slide-up" style={{ animationDelay: '0.4s' }}>
              <span className="section-eyebrow">Get in touch</span>
              <h2 className="form-title">Send us a message</h2>
              <p className="form-subtitle">
                Share a few details and our team will get back to you as soon as possible.
              </p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Enter your full name" required />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="name@example.com" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="How can we help you?" required />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Please describe your inquiry" required></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>

            <div className="contact-side-panel slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="response-card">
                <Clock size={28} />
                <h3>Response time</h3>
                <p>We aim to respond to business inquiries within one working day.</p>
              </div>

              <div className="map-container glass">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.19207011933!2d73.1362621!3d19.2739268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7963df5697d7d%3A0x64f43cce1121d1b3!2sKongaon%20Police%20Chowki!5e0!3m2!1sen!2sin!4v1716500000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="VNSUS Lifesciences Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
