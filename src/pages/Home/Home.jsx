import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import { ArrowRight } from 'lucide-react';
const destShimlaImg = "https://cdn.jsdelivr.net/gh/Sunrise-Villa/Sunrise_Holidays@main/src/assets/Shimla_1.jpg";
const destManaliImg = "https://cdn.jsdelivr.net/gh/Sunrise-Villa/Sunrise_Holidays@main/src/assets/manali_1.jpg";
const destRohtangImg = "https://cdn.jsdelivr.net/gh/Sunrise-Villa/Sunrise_Holidays@main/src/assets/Himachal_1.jpg";

const categoryCards = [
  {
    id: 1,
    title: 'Explore Shimla Destinations',
    tagline: 'Colonial heritage walks, Jakhoo Hill vistas, and Kufri winter snow fun.',
    image: destShimlaImg,
    category: 'shimla',
    badge: 'Heritage & Snow'
  },
  {
    id: 2,
    title: 'Explore Manali Destinations',
    tagline: 'Solang valley adventure sports, paragliding, and snow glaciers at Rohtang Pass.',
    image: destManaliImg,
    category: 'manali',
    badge: 'Adventure Hub'
  },
  {
    id: 3,
    title: 'Explore Shimla & Manali Combo',
    tagline: 'The ultimate golden route combining the scenic beauty of both historic valleys.',
    image: destRohtangImg,
    category: 'combo',
    badge: 'Himalayan Combo'
  }
];

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      
      {/* Signature Destination Categories */}
      <section className="section home-teaser" style={{ padding: '80px 0' }}>
        <div className="mesh-bg">
          <div className="mesh-glow mesh-glow-1" style={{ top: '10%', background: 'var(--primary)', opacity: 0.08 }}></div>
        </div>
        
        <div className="container">
          <div className="section-header" style={{ marginBottom: '50px' }}>
            <span className="section-subtitle">Sunrise Signatures</span>
            <h2 className="section-title">Select Your Himalayan Region</h2>
            <p className="section-desc">
              We specialize in custom itineraries to the highest peaks and oldest pine valleys of Himachal. Browse tour plans by region.
            </p>
          </div>
          
          {/* Asymmetric / Staggered Dest Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px'
          }}>
            {categoryCards.map((card, idx) => {
              const isFullWidthMobile = idx === 2;
              return (
                <Link 
                  key={card.id} 
                  to={`/destinations/${card.category}`} 
                  className="destination-card glass-panel glow-effect clickable-card"
                  style={{ 
                    cursor: 'pointer', 
                    display: 'flex', 
                    flexDirection: 'column',
                    gridColumn: isFullWidthMobile ? 'span 1' : 'auto',
                    border: '1px solid rgba(255, 255, 255, 0.7)',
                    background: 'rgba(255, 255, 255, 0.85)',
                    borderRadius: '24px',
                    boxShadow: '0 12px 30px rgba(31,41,55,0.04)'
                  }}
                >
                  <div className="card-image-wrapper" style={{ height: '250px' }}>
                    <img src={card.image} alt={card.title} className="card-image" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                    <div className="card-badges">
                      <span className="badge badge-primary card-badge" style={{ padding: '6px 12px', fontSize: '0.75rem' }}>{card.badge}</span>
                    </div>
                  </div>

                  <div className="card-content" style={{ display: 'flex', flexDirection: 'column', flexGrow: '1', textAlign: 'left', padding: '28px' }}>
                    <h3 className="card-title" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>{card.title}</h3>
                    
                    {/* Highlight tags */}
                    {card.tagline && (
                      <div className="card-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                        {card.tagline.split(/,|&/).map((tag, tIdx) => {
                          const cleaned = tag.trim().replace(/^and\s+/i, '').replace(/\.$/, '');
                          if (!cleaned) return null;
                          return (
                            <span key={tIdx} className="card-tag-pill" style={{ 
                              fontSize: '0.75rem', 
                              padding: '4px 10px', 
                              borderRadius: '8px', 
                              background: 'rgba(79, 99, 184, 0.06)', 
                              color: 'var(--secondary)',
                              fontWeight: 600
                            }}>
                              {cleaned}
                            </span>
                          );
                        })}
                      </div>
                    )}
                    
                    <div className="card-link" style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '0.92rem' }}>
                      <span>Browse Destinations</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />
    </div>
  );
}
