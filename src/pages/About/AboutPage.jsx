import React from 'react';
import { Calendar, Star, Heart, Award, ArrowUpRight, Globe, Hotel, Compass } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="about-page" style={{ paddingBottom: '100px', backgroundColor: 'var(--bg-primary)', minHeight: '90vh' }}>
      
      {/* Decorative Gradients */}
      <div className="mesh-bg">
        <div className="mesh-glow mesh-glow-1" style={{ top: '5%', background: 'var(--primary)', opacity: 0.12 }}></div>
        <div className="mesh-glow mesh-glow-2" style={{ bottom: '25%', background: 'var(--secondary)', opacity: 0.12 }}></div>
      </div>

      {/* Mini Hero Header */}
      <div style={{
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
        padding: '80px 0 100px 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '0 0 var(--radius-lg) var(--radius-lg)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
      }}>
        {/* Subtle mesh pattern overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 30%, rgba(244,163,22,0.1) 0%, transparent 60%)', pointerEvents: 'none' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <span className="premium-glow-badge" style={{ 
            background: 'rgba(255, 255, 255, 0.1)', 
            border: '1px solid rgba(255,255,255,0.2)', 
            color: '#ffffff', 
            fontWeight: 600,
            padding: '6px 16px',
            fontSize: '0.8rem',
            borderRadius: '9999px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '16px' 
          }}>
            ✨ Himachali Hospitality Since 2011
          </span>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px', lineHeight: '1.2', color: '#ffffff' }}>
            About Sunrise Holidays
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#e5e7eb', maxWidth: '650px', margin: '0 auto', lineHeight: '1.6' }}>
            We craft customized, memorable travel experiences in Shimla and Manali, combining local presence with exceptional value.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container" style={{ marginTop: '-45px', position: 'relative', zIndex: 20 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px'
        }}>
          {[
            { value: '10+', label: 'Years of Trust', desc: 'Crafting smiles in Himachal', icon: <Calendar size={22} style={{ color: 'var(--primary)' }} /> },
            { value: '100+', label: 'TripAdvisor Reviews', desc: 'Verified client support', icon: <Star size={22} style={{ color: 'var(--secondary)' }} /> },
            { value: 'Top 10', label: 'Hotel Status', desc: 'Retained by Sunrise Villa', icon: <Award size={22} style={{ color: '#10b981' }} /> },
            { value: '100%', label: 'Value Focus', desc: 'No compromise on quality', icon: <Heart size={22} style={{ color: 'var(--accent)' }} /> }
          ].map((stat, idx) => (
            <div key={idx} className="glass-panel glow-effect" style={{
              padding: '24px',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              background: 'rgba(255, 255, 255, 0.9)',
              boxShadow: '0 12px 30px rgba(31, 41, 55, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              textAlign: 'left'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>{stat.value}</span>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(255,255,255,0.7)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {stat.icon}
                </div>
              </div>
              <strong style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-secondary)' }}>{stat.label}</strong>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{stat.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Narrative */}
      <div className="container" style={{ marginTop: '50px' }}>
        <div className="glass-panel" style={{
          padding: '40px',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          background: 'rgba(255, 255, 255, 0.65)',
          textAlign: 'left',
          marginBottom: '40px'
        }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Compass size={24} style={{ color: 'var(--secondary)' }} />
            <span>Our Core Philosophy</span>
          </h2>
          <p style={{ fontSize: '1.08rem', color: 'var(--text-secondary)', lineHeight: '1.8', margin: 0 }}>
            Sunrise Holidays is a dedicated travel agency based directly in Shimla, Himachal Pradesh. Over the past decade, we have made it our mission to deliver premium-quality travel packages that are highly customizable and aligned with our guests' budgets.
            <br /><br />
            We believe that guest satisfaction is our primary goal. We achieve this through a continuous loop of learning, active feedback collection, and refinement of our itineraries. Our travel packages may not be the cheapest in the market, but they represent the absolute best value for your hard-earned money.
          </p>
        </div>

        {/* Division Grid */}
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '24px', textAlign: 'left' }}>
          Our Specialized Divisions
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px'
        }}>
          {[
            {
              title: 'Sunrise Holidays',
              desc: 'Our travel operations division. We design custom tour itineraries, organize dedicated private vehicles, arrange local drivers/guides, and supervise meals and tours directly.',
              icon: <Compass size={24} />,
              tag: 'Tours & Travels'
            },
            {
              title: 'Sunrise Villa Shimla',
              desc: 'Our own boutique guest property located in Shimla. Renowned for its scenic Himalayan views, peaceful surroundings, and pure vegetarian cuisine, it is consistently ranked among TripAdvisor\'s top 10 hotels.',
              icon: <Hotel size={24} />,
              tag: 'Premium Hospitality'
            },
            {
              title: 'Sunrise Internet Solutions',
              desc: 'Our technology arm. We manage nationwide travel portals, as well as digital platforms in finance, education, technology, lifestyle, and web engineering. Visit us at sunrise.org.in.',
              icon: <Globe size={24} />,
              tag: 'Web & Portals',
              link: 'http://sunrise.org.in'
            }
          ].map((div, i) => (
            <div key={i} className="glass-panel glow-effect" style={{
              padding: '32px',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.7)',
              background: 'rgba(255, 255, 255, 0.85)',
              boxShadow: '0 12px 36px rgba(31, 41, 55, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              textAlign: 'left',
              transition: 'transform var(--transition-normal)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(79, 99, 184, 0.1)', border: '1px solid rgba(79, 99, 184, 0.15)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {div.icon}
                </div>
                <span className="badge badge-primary" style={{ fontSize: '0.65rem', padding: '2px 8px', background: 'rgba(79, 99, 184, 0.08)', color: 'var(--secondary)' }}>
                  {div.tag}
                </span>
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>{div.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>{div.desc}</p>
              </div>
              {div.link && (
                <a href={div.link} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--secondary)', marginTop: 'auto', alignSelf: 'flex-start', textDecoration: 'none' }}>
                  <span>Visit Platform</span>
                  <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
