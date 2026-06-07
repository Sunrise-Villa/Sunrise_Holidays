import React from 'react';
import { Sliders, Compass, Shield, Check, Star, Award } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    title: '100% Tailor-Made Trips',
    features: [
      'Custom itineraries built directly around your budget',
      'Select your own preferred hotel categories & room types',
      'Flexible day-by-day sightseeing pace with private cabs'
    ],
    icon: Sliders,
    color: 'var(--primary)'
  },
  {
    id: 2,
    title: 'Genuine Local Presence',
    features: [
      'Operational headquarters based in Shimla since 2011',
      'Experienced mountain drivers with certified local cabs',
      'Handpicked off-beat viewpoints and local guidance'
    ],
    icon: Compass,
    color: 'var(--secondary)'
  },
  {
    id: 3,
    title: 'Trusted Service Delivery',
    features: [
      'Own boutique property (Sunrise Villa Shimla) in Shimla',
      'Hassle-free direct service recovery & real-time helpdesk',
      'Registered with regional tourism authorities & verified partners'
    ],
    icon: Shield,
    color: 'var(--accent)'
  }
];

export default function Services() {
  return (
    <section id="services" className="section services-section bg-secondary-wrap" style={{ padding: '90px 0', backgroundColor: 'rgba(221,227,225,0.35)', position: 'relative' }}>
      <div className="mesh-bg">
        <div className="mesh-glow mesh-glow-1" style={{ top: '15%', right: '5%', background: 'var(--primary)', opacity: 0.05 }}></div>
      </div>

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '50px',
          alignItems: 'start',
          textAlign: 'left'
        }}>
          
          {/* Left Column: Brand Credibility Editorial & Ratings */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <span className="section-subtitle" style={{ color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, fontSize: '0.85rem' }}>
                Himalayan Quality Standards
              </span>
              <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '8px', lineHeight: '1.2' }}>
                Himalayan Travel Perfected
              </h2>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
              Sunrise Holidays has been planning personalized Himalayan vacations since 2011. Rather than copying standard tourist templates, we coordinate directly with verified local hotels and skilled drivers to make your trip safe, transparent, and completely customized.
            </p>

            {/* Ratings & Certifications Row */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '12px' }}>
              
              {/* Google Reviews */}
              <div style={{ 
                flex: '1 1 140px', 
                background: '#fff', 
                padding: '20px', 
                borderRadius: '16px', 
                border: '1px solid var(--border-color)', 
                boxShadow: '0 6px 20px rgba(31, 41, 55, 0.03)' 
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '6px' }}>
                  <Star size={16} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
                  <span style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)' }}>4.8 / 5</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Google Reviews Rating
                </span>
              </div>

              {/* Local Tenure */}
              <div style={{ 
                flex: '1 1 140px', 
                background: '#fff', 
                padding: '20px', 
                borderRadius: '16px', 
                border: '1px solid var(--border-color)', 
                boxShadow: '0 6px 20px rgba(31, 41, 55, 0.03)' 
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '6px' }}>
                  <Award size={16} style={{ color: 'var(--secondary)' }} />
                  <span style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)' }}>15+ Years</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Himalayan Experience
                </span>
              </div>

            </div>

            {/* Quote block */}
            <div style={{ 
              borderLeft: '4px solid var(--primary)', 
              paddingLeft: '18px', 
              fontStyle: 'italic', 
              color: 'var(--text-secondary)',
              fontSize: '0.95rem',
              lineHeight: '1.6',
              marginTop: '16px' 
            }}>
              "We believe a holiday is a long-term memory. Our local team in Shimla ensures every itinerary is optimized for driving times, scenery, and guest safety."
            </div>
          </div>

          {/* Right Column: Key Features Panels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {servicesData.map((service) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={service.id} 
                  className="service-card glass-panel glow-effect"
                  style={{
                    padding: '28px',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    background: 'rgba(255, 255, 255, 0.9)',
                    boxShadow: '0 10px 25px rgba(31, 41, 55, 0.03)',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                    <div style={{ 
                      width: '44px', 
                      height: '44px', 
                      borderRadius: '12px', 
                      background: 'rgba(79, 99, 184, 0.08)', 
                      color: 'var(--secondary)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <IconComponent size={22} />
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                      {service.title}
                    </h3>
                  </div>

                  <ul className="service-features" style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                        <Check size={14} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
