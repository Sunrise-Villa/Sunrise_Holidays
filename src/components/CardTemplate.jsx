import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowUpRight } from 'lucide-react';

/* 
  SUNRISE HOLIDAYS - PREMIUM ITINERARY CARD BLUEPRINT TEMPLATE
  ------------------------------------------------------------
  This component serves as a template and blueprint for the premium 
  fully-clickable card design. It uses standard Lucide-react icons, 
  React Router Link, and index.css classes for animations/contrast.
  
  Usage (Copy-Paste or Direct Component Import):
  
  import CardTemplate from '../components/CardTemplate';
  
  <CardTemplate
    slug="shimla-2n-3d"
    image={imageAsset}
    badge="Short Escape"
    price="₹10,500"
    duration="2 Nights / 3 Days"
    title="Shimla quick weekend getaway"
    tagline="Pinjore Gardens, Timber Trail ropeway, and Kufri snow slopes"
  />
*/

export default function CardTemplate({ 
  slug, 
  image, 
  badge, 
  price, 
  duration, 
  title, 
  tagline 
}) {
  return (
    <Link 
      to={`/package/${slug}`} 
      className="destination-card glass-panel glow-effect clickable-card"
      style={{ display: 'flex', flexDirection: 'column', color: 'inherit' }}
    >
      {/* 1. Header Media Block */}
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" width="600" height="400" loading="lazy" />
        <div className="card-badges">
          {/* Solid Sunrise Orange Badge (High-Contrast) */}
          <span className="badge badge-primary card-badge">{badge}</span>
          {/* Travel Blue Price Tag */}
          <span className="card-price">{price}</span>
        </div>
      </div>

      {/* 2. Text & Meta Information Block */}
      <div className="card-content" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div className="card-meta">
          <span className="card-duration" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={16} />
            {duration}
          </span>
        </div>
        
        <h3 className="card-title">{title}</h3>
        <p className="card-tagline" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '16px', flexGrow: '1' }}>
          {tagline}
        </p>
        
        {/* 3. Action Indicator Block (Arrow rotates/shifts on card hover) */}
        <div className="card-link">
          <span>View Itinerary</span>
          <ArrowUpRight size={18} className="lucide-arrow-up-right" />
        </div>
      </div>
    </Link>
  );
}
