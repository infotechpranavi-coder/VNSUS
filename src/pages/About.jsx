import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Beaker, Handshake, HeartPulse, ShieldCheck, Target, Users,
  Brain, Microscope, Dna, Pill, FlaskConical, CheckCircle2,
  ArrowRight, TrendingUp, Star, Globe, Stethoscope, Lightbulb, ClipboardList
} from 'lucide-react';
import aboutImage from '../assets/about.png';
import heroBg from '../assets/hero_bg.png';
import './About.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">

      {/* ── HERO HEADER ── */}
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

      {/* ── WHO WE ARE ── */}
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
                <ul className="about-checklist">
                  <li><CheckCircle2 size={18} /><span>Fastest-growing CNS pharmaceutical company in India</span></li>
                  <li><CheckCircle2 size={18} /><span>Dedicated to neuro-psychiatry and nutraceutical innovation</span></li>
                  <li><CheckCircle2 size={18} /><span>Patient-first approach in every brand we build</span></li>
                  <li><CheckCircle2 size={18} /><span>Ethical, transparent and responsible operations</span></li>
                </ul>
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

              {/* Quick stats beside image */}
              <div className="image-side-stats">
                <div className="side-stat">
                  <Brain size={22} />
                  <div>
                    <strong>CNS Focus</strong>
                    <span>Neuro-Psychiatry Expertise</span>
                  </div>
                </div>
                <div className="side-stat">
                  <TrendingUp size={22} />
                  <div>
                    <strong>Fastest Growing</strong>
                    <span>In India's CNS Segment</span>
                  </div>
                </div>
                <div className="side-stat">
                  <Globe size={22} />
                  <div>
                    <strong>Pan-India</strong>
                    <span>Healthcare Access Mission</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHARMA FACT STRIP ── */}
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
            <div className="fact-badge">
              <Stethoscope size={22} />
              <span><strong>Clinician-Led</strong> — trusted by healthcare professionals</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO (Therapeutic Focus) ── */}
      <section className="therapeutic-section section">
        <div className="container">
          <div className="therapeutic-header text-center slide-up">
            <span className="section-eyebrow">Therapeutic Focus</span>
            <h2 className="section-title">What we <span className="text-gradient">specialize in</span></h2>
            <p className="section-text therapeutic-sub">Our product portfolio is built around two core therapy areas, reflecting the greatest unmet needs in India's healthcare landscape.</p>
          </div>
          <div className="therapeutic-grid">
            <div className="therapeutic-card slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="therapeutic-icon">
                <Brain size={36} />
              </div>
              <h3>Neuro-Psychiatry</h3>
              <p>
                Mental health and neurological disorders remain among India's most underserved medical areas. VNSUS focuses on CNS care — from anxiety and depression management to cognitive wellness — with brands built for daily clinical use and long-term patient confidence.
              </p>
              <ul className="therapeutic-list">
                <li><CheckCircle2 size={16} /> Anxiety &amp; Depression management</li>
                <li><CheckCircle2 size={16} /> Cognitive health &amp; Memory support</li>
                <li><CheckCircle2 size={16} /> Sleep disorders &amp; Neurology</li>
                <li><CheckCircle2 size={16} /> Psychiatry-focused brand design</li>
              </ul>
            </div>
            <div className="therapeutic-card slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="therapeutic-icon nutra-icon">
                <Pill size={36} />
              </div>
              <h3>Nutraceuticals</h3>
              <p>
                Preventive wellness and nutritional supplementation are fast-growing areas of patient demand. VNSUS offers nutraceutical brands that bridge the gap between clinical recommendation and everyday wellness — formulated with scientific precision and positioned for trust.
              </p>
              <ul className="therapeutic-list">
                <li><CheckCircle2 size={16} /> Bone &amp; Immunity support</li>
                <li><CheckCircle2 size={16} /> Vitamin &amp; Mineral supplementation</li>
                <li><CheckCircle2 size={16} /> General wellness &amp; Vitality</li>
                <li><CheckCircle2 size={16} /> Clinician-recommended formulations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & COMMITMENT (with motifs) ── */}
      <section className="mission-section section mission-with-motifs">
        <div className="science-bg-motifs" aria-hidden="true">
          <Brain size={180} className="motif motif-1" />
          <Dna size={130} className="motif motif-2" />
          <Microscope size={150} className="motif motif-3" />
          <Pill size={110} className="motif motif-4" />
        </div>
        <div className="container">
          <div className="mission-header text-center slide-up">
            <span className="section-eyebrow">Our Purpose</span>
            <h2 className="section-title">Driven by <span className="text-gradient">mission</span>, guided by <span className="text-gradient">values</span></h2>
          </div>
          <div className="mission-grid">
            <div className="mission-panel slide-up">
              <Target size={32} />
              <span className="section-eyebrow">Our mission</span>
              <h2>Make reliable healthcare more accessible.</h2>
              <p>
                We work to bring quality, affordability, and clinical relevance together through focused brands, strong partnerships, and responsible business practices.
              </p>
              <ul className="mission-points">
                <li><CheckCircle2 size={16} /> Build brands doctors can trust and prescribe with confidence</li>
                <li><CheckCircle2 size={16} /> Make effective CNS therapies reachable across India</li>
                <li><CheckCircle2 size={16} /> Uphold the highest standard in every product we deliver</li>
              </ul>
            </div>
            <div className="mission-panel accent slide-up" style={{ animationDelay: '0.2s' }}>
              <Handshake size={32} />
              <span className="section-eyebrow">Our commitment</span>
              <h2>Earn trust at every touchpoint.</h2>
              <p>
                From doctors and distributors to patients and caregivers, we aim to build confidence through consistency, responsiveness, and ethical conduct.
              </p>
              <ul className="mission-points mission-points-light">
                <li><CheckCircle2 size={16} /> Transparent communication with all stakeholders</li>
                <li><CheckCircle2 size={16} /> Ethical market engagement with no compromise</li>
                <li><CheckCircle2 size={16} /> Consistent product quality across every supply chain step</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE OPERATE ── */}
      <section className="operations-section section">
        <div className="container">
          <div className="text-center slide-up">
            <span className="section-eyebrow">How We Work</span>
            <h2 className="section-title">Our <span className="text-gradient">operating principles</span></h2>
            <p className="section-text ops-sub">Every team, process, and partnership at VNSUS is shaped by a common philosophy: do it right, and do it with care.</p>
          </div>
          <div className="ops-grid">
            <div className="ops-card slide-up" style={{ animationDelay: '0.1s' }}>
              <Lightbulb size={28} className="ops-icon" />
              <h3>Innovation-Led Brands</h3>
              <p>We don't just sell medicine — we create brands with clear clinical positioning, meaningful pack designs, and compelling product stories that resonate with doctors and patients alike.</p>
            </div>
            <div className="ops-card slide-up" style={{ animationDelay: '0.2s' }}>
              <ClipboardList size={28} className="ops-icon" />
              <h3>Process-Driven Execution</h3>
              <p>From product selection to field execution, every step follows a structured, quality-reviewed process. This ensures consistency, predictability, and reliability across all our operations.</p>
            </div>
            <div className="ops-card slide-up" style={{ animationDelay: '0.3s' }}>
              <Stethoscope size={28} className="ops-icon" />
              <h3>Clinician-First Communication</h3>
              <p>Our field teams and brand materials are designed to communicate with healthcare professionals in a language they trust — clinical, evidence-informed, and respectful of their time.</p>
            </div>
            <div className="ops-card slide-up" style={{ animationDelay: '0.4s' }}>
              <Star size={28} className="ops-icon" />
              <h3>Patient Outcome Focus</h3>
              <p>Every product we launch, every brand we build, is evaluated against a single benchmark: does it genuinely improve the patient's health journey and access to quality care?</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Panel ── */}
      <section className="about-products-cta section">
        <div className="container about-products-panel slide-up">
          <span className="section-eyebrow">Products</span>
          <h2>See the brands behind our healthcare focus.</h2>
          <p>
            Our product portfolio represents the VNSUS commitment to CNS care, nutraceutical support, quality, and accessibility.
          </p>
          <Link to="/products" className="btn btn-primary about-products-btn">
            View Products <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
          </Link>
        </div>
      </section>

      {/* ── OUR STORY TIMELINE ── */}
      <section className="timeline-section section">
        <div className="container">
          <div className="text-center slide-up">
            <h2 className="section-title">Our <span className="text-gradient">Story</span></h2>
            <div className="title-underline center"></div>
          </div>

          <div className="timeline">
            <div className="timeline-line"></div>

            <div className="timeline-item slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="timeline-dot pulse-dot"></div>
              <div className="timeline-content glass">
                <div className="timeline-year text-gradient">2024</div>
                <h3 className="timeline-title">A Focused Beginning in CNS</h3>
                <p className="timeline-text">
                  VNSUS Lifesciences was founded with a clear focus on the Central Nervous System (CNS) segment. Working closely with healthcare professionals, we set out to address unmet needs in mental health and neuro-psychiatry across India.
                </p>
              </div>
            </div>

            <div className="timeline-item slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="timeline-dot pulse-dot"></div>
              <div className="timeline-content glass">
                <div className="timeline-year text-gradient">2024</div>
                <h3 className="timeline-title">First Brands Launched</h3>
                <p className="timeline-text">
                  Our first CNS and nutraceutical brands — including Neurocalm-M and NutraVita-D3 — were introduced to the market. Each product was designed with a distinct clinical identity, targeting specific patient needs within neuro-psychiatry and wellness care.
                </p>
              </div>
            </div>

            <div className="timeline-item slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="timeline-dot pulse-dot"></div>
              <div className="timeline-content glass">
                <div className="timeline-year text-gradient">2025</div>
                <h3 className="timeline-title">Growing Clinician Trust</h3>
                <p className="timeline-text">
                  Through consistent field presence, ethical engagement, and quality-first operations, VNSUS began building strong relationships with healthcare professionals across multiple regions. Doctor trust became our most valued metric.
                </p>
              </div>
            </div>

            <div className="timeline-item slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="timeline-dot pulse-dot"></div>
              <div className="timeline-content glass">
                <div className="timeline-year text-gradient">Future</div>
                <h3 className="timeline-title">Scaling Healthcare Access</h3>
                <p className="timeline-text">
                  Our roadmap focuses on expanding our CNS portfolio, deepening our nutraceutical range, and extending our reach to underserved regions across India — making world-class pharmaceutical care accessible to every patient who needs it.
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
