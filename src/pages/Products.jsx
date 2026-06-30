import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import neurocalmImage from '../assets/products/neurocalm-m.svg';
import nutravitaImage from '../assets/products/nutravita-d3.svg';
import cognisureImage from '../assets/products/cognisure-plus.svg';
import sleepviaImage from '../assets/products/sleepvia-nt.svg';
import heroBg from '../assets/hero_bg.png';
import './Products.css';

const products = [
  {
    name: 'Neurocalm-M',
    category: 'Neuro-psychiatry support',
    form: 'Tablets',
    visual: 'tablet',
    image: neurocalmImage,
    accent: '#004a9f',
    summary: 'A CNS-focused prescription support brand positioned for calm, consistency, and patient confidence.',
    details: ['Clinician-led positioning', 'Quality-focused supply', 'Patient-friendly pack design'],
  },
  {
    name: 'NutraVita-D3',
    category: 'Nutraceutical care',
    form: 'Softgel capsules',
    visual: 'softgel',
    image: nutravitaImage,
    accent: '#00a6c8',
    summary: 'A daily wellness nutraceutical concept created for bone, immunity, and general health support.',
    details: ['Daily supplementation range', 'Modern wellness identity', 'Accessible healthcare focus'],
  },
  {
    name: 'Cognisure Plus',
    category: 'CNS wellness',
    form: 'Capsules',
    visual: 'capsule',
    image: cognisureImage,
    accent: '#0f766e',
    summary: 'A neuro-wellness dummy product concept for memory, focus, and long-term brain-health communication.',
    details: ['Neuro-care brand family', 'Clear usage communication', 'Professional pharma presentation'],
  },
  {
    name: 'Sleepvia-NT',
    category: 'Neuro-care range',
    form: 'Tablets',
    visual: 'blister',
    image: sleepviaImage,
    accent: '#1d4ed8',
    summary: 'A responsible sleep-care concept designed for psychiatric practice communication and trust.',
    details: ['CNS segment alignment', 'Ethical brand messaging', 'Reliable product literature'],
  },
];

const ProductVisual = ({ product }) => (
  <div className="product-visual" style={{ '--accent': product.accent }}>
    <img className="product-image" src={product.image} alt={`${product.name} product pack`} />
  </div>
);

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="products-page">
      <section className="products-header" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="products-header-overlay"></div>
        <div className="container products-header-content fade-in">
          <span className="page-kicker">VNSUS Product Portfolio</span>
          <h1>Focused brands for CNS and nutraceutical care</h1>
          <p>
            Explore dummy product concepts created to represent VNSUS Lifesciences' focus on neuro-psychiatry,
            nutraceuticals, quality-led processes, and accessible healthcare.
          </p>
        </div>
      </section>

      <section className="products-intro section">
        <div className="container products-centered">
          <span className="section-eyebrow">Our range</span>
          <h2>Product concepts built around trust, clarity, and care.</h2>
          <p>
            These sample products are placeholders for presentation only. They are structured with realistic
            pharmaceutical categories, pack visuals, and product details so the website feels complete and professional.
          </p>
        </div>
      </section>

      <section className="products-list-section">
        <div className="container products-grid">
          {products.map((product, index) => (
            <article className="product-card slide-up" style={{ animationDelay: `${index * 0.1}s` }} key={product.name}>
              <ProductVisual product={product} />
              <div className="product-content">
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>
                <p>{product.summary}</p>
                <ul>
                  {product.details.map((detail) => (
                    <li key={detail}>
                      <CheckCircle2 size={18} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="product-quality section">
        <div className="container quality-grid">
          <div className="quality-panel">
            <ShieldCheck size={34} />
            <h2>Quality-first product thinking</h2>
            <p>
              Every product concept is presented with the same priorities VNSUS communicates across the site:
              patient relevance, responsible engagement, dependable quality, and professional healthcare access.
            </p>
          </div>
          <div className="quality-panel accent">
            <Sparkles size={34} />
            <h2>Need product information?</h2>
            <p>
              Connect with the VNSUS team for product inquiries, distribution discussions, or partnership support.
            </p>
            <Link className="btn btn-primary product-contact-btn" to="/contact">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;



