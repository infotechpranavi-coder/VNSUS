import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, ShieldPlus, Beaker, CheckCircle2 } from 'lucide-react';
import heroBg from '../assets/hero_bg.png';
import aboutImage from '../assets/about.png';
import './Home.css';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content fade-in">
            <div className="hero-kicker">
              <span className="hero-kicker-line"></span>
              VNSUS Lifesciences
            </div>
            <h1 className="hero-title">
              Advancing Healthcare for a Better Tomorrow
            </h1>
            <p className="hero-subtitle">
              A people and process-driven pharmaceutical company focused on trusted neuro-psychiatry and nutraceutical solutions.
            </p>
            <div className="hero-assurance" aria-label="Company strengths">
              <span><CheckCircle2 size={18} /> Quality-led processes</span>
              <span><CheckCircle2 size={18} /> Patient-focused brands</span>
              <span><CheckCircle2 size={18} /> Accessible healthcare</span>
            </div>
            <div className="hero-buttons">
              <Link to="/about" className="btn btn-primary hero-primary-btn">
                About Us <ArrowRight size={18} className="btn-icon" />
              </Link>
              <Link to="/contact" className="btn btn-outline hero-outline-btn">Contact Us</Link>
            </div>
            <div className="hero-metrics" aria-label="Company focus areas">
              <div>
                <strong>Neuro</strong>
                <span>Psychiatry focus</span>
              </div>
              <div>
                <strong>Nutra</strong>
                <span>Nutraceutical brands</span>
              </div>
              <div>
                <strong>India</strong>
                <span>Healthcare access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview - Overlapping the Hero */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card glass slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="feature-icon gradient-icon">
                <Activity size={32} />
              </div>
              <h3>Innovation</h3>
              <p>Developing innovative brands in neuro-psychiatry and nutraceuticals to address unmet medical needs.</p>
            </div>
            <div className="feature-card glass accent-card slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon solid-icon">
                <ShieldPlus size={32} />
              </div>
              <h3>Trust</h3>
              <p>Ensuring the highest standards of quality and safety in every product we deliver.</p>
            </div>
            <div className="feature-card glass slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="feature-icon gradient-icon">
                <Beaker size={32} />
              </div>
              <h3>Excellence</h3>
              <p>Driven by exceptional talent and efficient processes to make healthcare affordable and accessible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview section">
        <div className="container about-preview-container">
          <div className="about-preview-content slide-up">
            <h2 className="section-title">Who We <span className="text-gradient">Are</span></h2>
            <div className="title-underline"></div>
            <p className="section-text">
              We aspire to be a leading people and process-driven pharmaceutical company. We're the fastest-growing pharmaceutical company in the neuro-psychiatry segment in India with innovative brands in nutraceuticals also.
            </p>
            
            <h3 className="subsection-title">What We Do</h3>
            <p className="section-text">
              We believe everyone deserves access to world-class medicine. Through innovation, exceptional talent, and efficient processes, we make healthcare affordable and accessible to all.
            </p>
            
            <Link to="/about" className="btn btn-primary glow-btn read-more-btn">
              Read More <ArrowRight size={18} className="btn-icon" />
            </Link>
          </div>
          <div className="about-preview-image slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="image-wrapper glass-image-wrapper">
              <div className="vibrant-glow"></div>
              <img src={aboutImage} alt="Pharmaceutical research and lifesciences innovation" className="rounded-image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
