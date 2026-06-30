import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ExternalLink, Mail, MapPin, Phone, Send } from 'lucide-react';
import contactBanner from '../assets/hero_bg.png';
import './Contact.css';

const CONTACT_EMAIL = 'vnsuslifesciences@gmail.com';
const OFFICE_ADDRESS = 'Shop No. 9, Chamunda Co-op HSG Society, Opp. Kongaon Police Chowki, Kalyan-Bhiwandi Road, Thane - 421311';
const MAP_QUERY = encodeURIComponent(OFFICE_ADDRESS);

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const subject = String(formData.get('subject') || 'Website inquiry').trim();
    const message = String(formData.get('message') || '').trim();

    const emailSubject = `VNSUS Lifesciences Inquiry - ${subject}`;
    const body = [
      'Hello VNSUS Lifesciences Team,',
      '',
      'I would like to connect with you regarding the following inquiry:',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || 'Not provided'}`,
      `Subject: ${subject}`,
      '',
      'Message:',
      message,
      '',
      'Regards,',
      name,
    ].join('\n');

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="contact-page">
      <section className="page-header contact-header" style={{ backgroundImage: `url(${contactBanner})` }}>
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
                  <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('VNSUS Lifesciences Inquiry')}`}>
                    {CONTACT_EMAIL}
                  </a>
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


      <section className="contact-products-cta section">
        <div className="container contact-products-panel slide-up">
          <span className="section-eyebrow">Product inquiries</span>
          <h2>Looking for product information?</h2>
          <p>Browse the product portfolio first, then contact our team for business, distribution, or product support.</p>
          <Link to="/products" className="btn btn-primary contact-products-btn">View Products</Link>
        </div>
      </section>
      <section className="form-map-section section">
        <div className="container">
          <div className="form-map-grid">
            <div className="contact-form-container glass slide-up" style={{ animationDelay: '0.4s' }}>
              <span className="section-eyebrow">Get in touch</span>
              <h2 className="form-title">Send us a message</h2>
              <p className="form-subtitle">
                Fill in the details below and your email app will open with a ready-to-send message to VNSUS Lifesciences.
              </p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Enter your full name" autoComplete="name" required />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="name@example.com" autoComplete="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" autoComplete="tel" />
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
                  Send Email <Send size={18} />
                </button>
              </form>
            </div>

            <div className="contact-side-panel slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="response-card">
                <Clock size={28} />
                <h3>Response time</h3>
                <p>We aim to respond to business inquiries within one working day.</p>
                <a className="email-link" href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('VNSUS Lifesciences Inquiry')}`}>
                  Email directly <Mail size={16} />
                </a>
              </div>

              <div className="map-container glass">
                <iframe
                  src={`https://maps.google.com/maps?q=${MAP_QUERY}&z=16&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="VNSUS Lifesciences office location"
                ></iframe>
              </div>

              <a
                className="directions-link"
                href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
                target="_blank"
                rel="noreferrer"
              >
                Open directions <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;