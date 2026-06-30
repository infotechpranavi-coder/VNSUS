import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, ShieldPlus, Beaker, CheckCircle2, PackageCheck, Brain, Microscope, Pill, Dna, HeartPulse, TrendingUp, Globe, Award, Users } from 'lucide-react';
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

      {/* Pharma Stats Trust Strip */}
      <section className="stats-strip">
        <div className="container stats-strip-grid">
          <div className="stat-item">
            <TrendingUp size={28} className="stat-icon" />
            <strong>Fastest Growing</strong>
            <span>CNS segment in India</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <Brain size={28} className="stat-icon" />
            <strong>Neuro-Psychiatry</strong>
            <span>Core therapeutic focus</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <Pill size={28} className="stat-icon" />
            <strong>Nutraceuticals</strong>
            <span>Innovative wellness brands</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <Globe size={28} className="stat-icon" />
            <strong>Pan-India</strong>
            <span>Healthcare access mission</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <Award size={28} className="stat-icon" />
            <strong>Quality-Led</strong>
            <span>Process-driven operations</span>
          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="why-us-section section">
        <div className="science-bg-motifs" aria-hidden="true">
          <Brain size={160} className="motif motif-1" />
          <Dna size={120} className="motif motif-2" />
          <Microscope size={140} className="motif motif-3" />
          <Pill size={100} className="motif motif-4" />
          <HeartPulse size={130} className="motif motif-5" />
        </div>
        <div className="container">
          <div className="why-us-header text-center slide-up">
            <span className="section-eyebrow">Why VNSUS</span>
            <h2 className="section-title">Built around <span className="text-gradient">patient outcomes</span></h2>
            <p className="section-text why-us-sub">Every decision we make — from product design to clinical communication — is anchored in what's best for the patient.</p>
          </div>
          <div className="why-us-grid">
            <div className="why-card slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="why-card-icon"><Brain size={28} /></div>
              <h3>Neuro-Psychiatry First</h3>
              <p>Deep focus on CNS care means sharper clinical relevance and stronger doctor trust.</p>
            </div>
            <div className="why-card slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="why-card-icon"><Microscope size={28} /></div>
              <h3>Research-Backed Quality</h3>
              <p>Products built on scientific rigor and responsible pharmaceutical standards.</p>
            </div>
            <div className="why-card slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="why-card-icon"><Users size={28} /></div>
              <h3>People-Driven Execution</h3>
              <p>Exceptional talent and field teams that build lasting healthcare relationships.</p>
            </div>
            <div className="why-card slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="why-card-icon"><HeartPulse size={28} /></div>
              <h3>Accessible Healthcare</h3>
              <p>Making world-class medicine affordable and reachable for every patient in India.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="products-preview section">
        <div className="container products-preview-container slide-up">
          <div className="products-preview-icon">
            <PackageCheck size={34} />
          </div>
          <span className="section-eyebrow">Product portfolio</span>
          <h2 className="section-title">Explore our focused <span className="text-gradient">healthcare brands</span></h2>
          <p className="section-text">
            View sample CNS and nutraceutical product concepts that reflect VNSUS Lifesciences' quality-led, patient-focused approach.
          </p>
          <Link to="/products" className="btn btn-primary products-preview-btn">
            View Products <ArrowRight size={18} className="btn-icon" />
          </Link>
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
