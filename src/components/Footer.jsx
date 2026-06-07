import React, { useState } from 'react';
import { Phone, Camera, Share2, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';

export default function Footer() {
  const [openSection, setOpenSection] = useState({
    quickLinks: false,
    popularPlaces: false
  });

  const toggleSection = (section) => {
    setOpenSection((prev) => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleShare = (e) => {
    e.preventDefault();
    if (navigator.share) {
      navigator.share({
        title: 'Sunrise Holidays | Shimla & Manali Tour Specialist',
        text: 'Plan your perfect custom holiday to Shimla & Manali with Sunrise Holidays!',
        url: window.location.origin,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.origin)
        .then(() => alert('Website link copied to clipboard! Share it with your friends.'))
        .catch(console.error);
    }
  };

  return (
    <footer className="footer glass-panel">
      <div className="container footer-container">
        
        {/* Brand Col */}
        <div className="footer-brand">
          <Link to="/" className="nav-logo footer-logo">
            <img src={logoImg} alt="Sunrise Holidays" className="footer-logo-img" />
          </Link>
          <p className="footer-tagline">
            Crafting customized, budget-friendly trips to Shimla & Manali with local expertise and trusted services since 2011.
          </p>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            background: 'rgba(255, 255, 255, 0.04)', 
            padding: '10px 14px', 
            borderRadius: '12px', 
            border: '1px solid rgba(255,255,255,0.08)',
            fontSize: '0.85rem',
            color: '#f3f4f6',
            marginTop: '4px',
            alignSelf: 'flex-start'
          }}>
            <span style={{ fontWeight: 700 }}>🏆 Trusted Since 2011</span>
            <span style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.15)' }}></span>
            <span style={{ fontWeight: 700, color: '#f59e0b' }}>⭐ 4.8 Google Rating</span>
          </div>
          <div className="social-links">
            <a 
              href="tel:+918988794801" 
              className="social-link" 
              aria-label="Call Travel Helpdesk"
            >
              <Phone size={18} />
            </a>
            <a 
              href="https://www.instagram.com/sunriseholidays9/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link" 
              aria-label="Instagram"
            >
              <Camera size={18} />
            </a>
            <button 
              onClick={handleShare} 
              className="social-link" 
              aria-label="Share Website"
              style={{ cursor: 'pointer' }}
            >
              <Share2 size={18} />
            </button>
          </div>
        </div>

        {/* Links Col 1 - Quick Links */}
        <div className={`footer-col ${openSection.quickLinks ? 'is-open' : ''}`}>
          <h4 className="footer-col-header" onClick={() => toggleSection('quickLinks')}>
            <span>Quick Links</span>
            <span className="mobile-chevron">
              {openSection.quickLinks ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </span>
          </h4>
          <div className="footer-col-content">
            <Link to="/destinations/shimla">Shimla Destinations</Link>
            <Link to="/destinations/manali">Manali Destinations</Link>
            <Link to="/destinations/combo?sub=shimla-manali">Shimla-Manali Combo</Link>
            <Link to="/custom-trip">Custom Trip Builder</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>

        {/* Links Col 2 - Popular Places */}
        <div className={`footer-col ${openSection.popularPlaces ? 'is-open' : ''}`}>
          <h4 className="footer-col-header" onClick={() => toggleSection('popularPlaces')}>
            <span>Popular Places</span>
            <span className="mobile-chevron">
              {openSection.popularPlaces ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </span>
          </h4>
          <div className="footer-col-content">
            <Link to="/destinations">Shimla Heritage Walk</Link>
            <Link to="/destinations">Manali Adventure Special</Link>
            <Link to="/destinations">Kufri & Chail Snow Escape</Link>
            <Link to="/destinations">Rohtang Pass Glacial Heights</Link>
          </div>
        </div>

      </div>

      <div className="container footer-bottom">
        <div className="footer-divider"></div>
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Sunrise Holidays. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/about">About Us</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/complaints">Complaints & Redressal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
