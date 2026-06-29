import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <Link to="/" className="footer-logo">
            <span className="logo-vnsus text-gradient">VNSUS</span>
            <span className="logo-lifesciences">LIFESCIENCES</span>
          </Link>
          <p className="footer-description">
            A leading people and process-driven pharmaceutical company focused on making healthcare affordable and accessible.
          </p>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="footer-contact">
            <li>
              <Phone size={18} />
              <div>
                <span>+91 8108352132</span><br/>
                <span>+91 9175883887</span>
              </div>
            </li>
            <li>
              <Mail size={18} />
              <span>vnsuslifesciences@gmail.com</span>
            </li>
            <li>
              <MapPin size={18} />
              <span>
                Shop No. 9, Chamunda Co-op HSG Society,<br/>
                Opp. Kongaon Police Chowki,<br/>
                Kalyan–Bhiwandi Road, Thane – 421311
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} VNSUS LIFESCIENCES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
