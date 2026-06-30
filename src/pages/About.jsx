import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Beaker, Handshake, HeartPulse, ShieldCheck, Target, Users, Brain, Microscope, Dna, Pill, FlaskConical } from 'lucide-react';
import aboutImage from '../assets/about.png';
import heroBg from '../assets/hero_bg.png';
import './About.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <section className="page-header" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="header-overlay"></div>
        <div className="container header-container">
          <div className="header-content fade-in">
            <span className="page-kicker">VNSUS Lifesciences</span>
            <h1 className="header-title">Purpose-led pharmaceutical care</h1>
            <p className="header-subtitle">
              Building trusted neuro-psychiatry and nutraceutical brands through disciplined processes, quality focus, and patient-first thinking.
            </p>
          </div>
        </div>
      </section>

      <section className="about-main section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text-column">
              <div className="about-text-card slide-up">
                <span className="section-eyebrow">Who we are</span>
                <h2 className="section-title">A focused lifesciences company with a clear healthcare mission</h2>
                <div className="title-underline"></div>
                <p className="section-text">
                  VNSUS Lifesciences is a people and process-driven pharmaceutical company committed to improving access to dependable healthcare. Our work is centered on the neuro-psychiatry segment, supported by innovative nutraceutical brands that respond to evolving patient and clinician needs.
                </p>
                <p className="section-text">
                  We combine responsible market execution, ethical engagement, and consistent quality standards so healthcare professionals can recommend our products with confidence.
                </p>
              </div>

              <div className="values-grid slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="value-item">
                  <ShieldCheck size={26} />
                  <h3>Quality</h3>
                  <p>Process-led operations and careful product selection guide every decision.</p>
                </div>
                <div className="value-item">
                  <HeartPulse size={26} />
                  <h3>Care</h3>
                  <p>Our focus remains on therapies that support meaningful patient outcomes.</p>
                </div>
                <div className="value-item">
                  <Users size={26} />
                  <h3>People</h3>
                  <p>We invest in skilled teams, transparent communication, and lasting relationships.</p>
                </div>
                <div className="value-item">
                  <Beaker size={26} />
                  <h3>Innovation</h3>
                  <p>We continue to build relevant brands for CNS and nutraceutical care.</p>
                </div>
              </div>
            </div>

            <div className="about-image-container slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="image-card glass-image-wrapper">
                <div className="vibrant-glow"></div>
                <img src={aboutImage} alt="Scientists in Laboratory" className="rounded-image" />
                <div className="experience-badge glow-badge">
                  <span className="badge-title">Driven by</span>
                  <span className="badge-value">Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section section">
        <div className="container mission-grid">
          <div className="mission-panel slide-up">
            <Target size={32} />
            <span className="section-eyebrow">Our mission</span>
            <h2>Make reliable healthcare more accessible.</h2>
            <p>
              We work to bring quality, affordability, and clinical relevance together through focused brands, strong partnerships, and responsible business practices.
            </p>
          </div>
          <div className="mission-panel accent slide-up" style={{ animationDelay: '0.2s' }}>
            <Handshake size={32} />
            <span className="section-eyebrow">Our commitment</span>
            <h2>Earn trust at every touchpoint.</h2>
            <p>
              From doctors and distributors to patients and caregivers, we aim to build confidence through consistency, responsiveness, and ethical conduct.
            </p>
          </div>
        </div>
      </section>

      {/* Pharma Fact Strip */}
      <section className="pharma-fact-strip">
        <div className="container">
          <div className="fact-strip-inner">
            <div className="fact-badge">
              <Brain size={22} />
              <span><strong>CNS &amp; Mental Health</strong> — our core area of expertise</span>
            </div>
            <div className="fact-badge">
              <FlaskConical size={22} />
              <span><strong>Nutraceuticals</strong> — science-backed wellness solutions</span>
            </div>
            <div className="fact-badge">
              <ShieldCheck size={22} />
              <span><strong>Quality First</strong> — every batch, every brand</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section section mission-with-motifs">
        <div className="science-bg-motifs" aria-hidden="true">
          <Brain size={180} className="motif motif-1" />
          <Dna size={130} className="motif motif-2" />
          <Microscope size={150} className="motif motif-3" />
          <Pill size={110} className="motif motif-4" />
        </div>
        <div className="container mission-grid">
          <div className="mission-panel slide-up">
            <Target size={32} />
            <span className="section-eyebrow">Our mission</span>
            <h2>Make reliable healthcare more accessible.</h2>
            <p>
              We work to bring quality, affordability, and clinical relevance together through focused brands, strong partnerships, and responsible business practices.
            </p>
          </div>
          <div className="mission-panel accent slide-up" style={{ animationDelay: '0.2s' }}>
            <Handshake size={32} />
            <span className="section-eyebrow">Our commitment</span>
            <h2>Earn trust at every touchpoint.</h2>
            <p>
              From doctors and distributors to patients and caregivers, we aim to build confidence through consistency, responsiveness, and ethical conduct.
            </p>
          </div>
        </div>
      </section>

      <section className="about-products-cta section">
        <div className="container about-products-panel slide-up">
          <span className="section-eyebrow">Products</span>
          <h2>See the brands behind our healthcare focus.</h2>
          <p>
            Our product portfolio represents the VNSUS commitment to CNS care, nutraceutical support, quality, and accessibility.
          </p>
          <Link to="/products" className="btn btn-primary about-products-btn">View Products</Link>
        </div>
      </section>

      <section className="timeline-section section">
        <div className="container">
          <div className="text-center slide-up">
            <h2 className="section-title">Our <span className="text-gradient">Story</span></h2>
            <div className="title-underline center"></div>
          </div>

          <div className="timeline">
            <div className="timeline-line"></div>
            <div className="timeline-item slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="timeline-dot pulse-dot"></div>
              <div className="timeline-content glass">
                <div className="timeline-year text-gradient">2024</div>
                <h3 className="timeline-title">A Focused Beginning in CNS</h3>
                <p className="timeline-text">
                  VNSUS Lifesciences was founded with a clear focus on the Central Nervous System (CNS) segment. Working closely with healthcare professionals, we set out to address unmet needs in mental health and neuro-psychiatry across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
