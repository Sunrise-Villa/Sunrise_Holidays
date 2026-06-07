import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import heroBgImg from '../assets/hero_bg.png';

export default function Hero() {
  return (
    <header className="hero-section" style={{ backgroundImage: `url(${heroBgImg})` }}>
      <div className="hero-overlay"></div>
      
      <div className="container hero-container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div className="hero-content" style={{ animation: 'fadeInUp 0.8s ease-out', textAlign: 'center', margin: '0 auto' }}>
          <span className="premium-glow-badge" style={{ 
            background: 'rgba(255, 255, 255, 0.1)', 
            border: '1px solid rgba(255, 255, 255, 0.2)', 
            color: '#ffffff', 
            fontWeight: 600,
            padding: '6px 16px',
            fontSize: '0.8rem',
            borderRadius: '9999px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '24px'
          }}>
            <Sparkles size={12} style={{ color: 'var(--primary)' }} />
            Shimla & Manali Tour Specialists Since 2011
          </span>
          <h1 className="hero-title" style={{ color: '#ffffff', fontSize: '4rem', fontWeight: 850, lineHeight: 1.15, marginBottom: '24px' }}>
            Crafting Your <br />
            <span className="accent-text" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, #ffffff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Himalayan Escape
            </span>
          </h1>
          <p className="hero-desc" style={{ color: '#f3f4f6', fontSize: '1.25rem', lineHeight: '1.6', marginBottom: '40px', maxWidth: '680px', margin: '0 auto 40px auto' }}>
            Discover snowy peaks, scenic cedar valleys, and cozy mountain retreats. We build tailor-made itineraries around your budget with trusted, verified local hospitality.
          </p>
          
          <div className="hero-actions" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/destinations" className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '1rem', fontWeight: 700 }}>
              Explore Destinations
            </Link>
            <Link to="/contact" className="btn btn-secondary" style={{ padding: '14px 28px', fontSize: '1rem', fontWeight: 700 }}>
              Plan Custom Trip
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
