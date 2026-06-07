import React from 'react';
import { ShieldCheck, Clock, Utensils, Hotel, CloudSnow, MessageSquare, AlertCircle } from 'lucide-react';

export default function ComplaintsPage() {
  const guidelines = [
    {
      title: 'Late Check-In & Early Check-Out Dining',
      icon: <Clock size={22} />,
      tag: 'Meals & Timings',
      context: 'Standard kitchen operational hours in Himachal hotels are typically 8:00 AM - 10:00 AM for breakfast and 8:00 PM - 10:00 PM for dinner. Hotels generally cannot extend kitchen hours due to staff scheduling.',
      action: 'If you expect a late arrival, please notify our helpline during the day. We will coordinate with the hotel to keep standard dinner items ready, arrange a packed dinner, or suggest verified dining options along your travel route. For early morning departures, inform the reception by 8:00 PM the previous night to arrange a packed breakfast.'
    },
    {
      title: 'Dining Experience & Food Preferences',
      icon: <Utensils size={22} />,
      tag: 'Catering Quality',
      context: 'Culinary preparation styles vary across regions, and tastes can be subjective. We partner only with hotels maintaining high hygiene ratings, though specific menu choices and regional flavors may differ from home styles.',
      action: 'If any meal is unsatisfactory, contact our travel helpdesk immediately. We will coordinate directly with the hotel’s head chef to modify preparations to your preference or recommend certified alternative dining options nearby to ensure your comfort.'
    },
    {
      title: 'Room Standards & Lodging Services',
      icon: <Hotel size={22} />,
      tag: 'Accommodation',
      context: 'Daily maintenance issues like water heating, room heating, cleanliness, or linen changes can occasionally require on-the-spot attention by the hotel service staff.',
      action: 'We advise raising any room maintenance request directly with hotel reception for immediate service. If the issue persists for more than an hour, let our helpline know. We will coordinate with hotel management to rectify the service deficiency, request a room change, or arrange relocation to a comparable property.'
    },
    {
      title: 'Weather Disruption & Mountain Road Closures',
      icon: <CloudSnow size={22} />,
      tag: 'Transit & Route',
      context: 'Heavy snowfall, landslips, or icy roads in high-altitude zones like Rohtang Pass or Solang Valley may lead to administrative road blocks. Vehicle safety and local regulations determine accessible routes.',
      action: 'Our experienced drivers will recommend safe alternative routes or comparable sightseeing spots if safety concerns arise. If special local transit vehicles (like 4x4 jeeps or snow-chain vehicles) are required by local authorities to proceed, we will assist you in coordinating bookings with authorized local operators.'
    }
  ];

  return (
    <div className="complaints-page" style={{ paddingBottom: '100px', backgroundColor: 'var(--bg-primary)', minHeight: '90vh' }}>
      
      {/* Decorative subtle background glows */}
      <div className="mesh-bg">
        <div className="mesh-glow mesh-glow-1" style={{ top: '5%', background: 'var(--accent)', opacity: 0.06 }}></div>
        <div className="mesh-glow mesh-glow-2" style={{ bottom: '20%', background: 'var(--secondary)', opacity: 0.06 }}></div>
      </div>

      {/* Hero Header Block */}
      <div style={{
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
        padding: '70px 0 90px 0',
        textAlign: 'center',
        position: 'relative',
        borderRadius: '0 0 var(--radius-lg) var(--radius-lg)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
        marginBottom: '40px'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(79, 99, 184, 0.12) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
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
            gap: '8px',
            marginBottom: '18px'
          }}>
            <ShieldCheck size={14} style={{ color: '#10b981' }} />
            Quality Assurance & Redressal
          </span>
          <h1 style={{ 
            fontSize: '2.8rem', 
            fontWeight: 800, 
            letterSpacing: '-0.02em', 
            marginBottom: '16px', 
            lineHeight: '1.2',
            color: '#ffffff' /* Highly readable white heading */
          }}>
            Service Redressal Policy
          </h1>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#e5e7eb', /* Highly readable contrast text */
            maxWidth: '650px', 
            margin: '0 auto', 
            lineHeight: '1.6' 
          }}>
            We are dedicated to delivering smooth and memorable holidays. Below is our framework for addressing and resolving service anomalies during your stay.
          </p>
        </div>
      </div>

      {/* Main Content Layout - Editorial Two-Column Structure */}
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'start',
          textAlign: 'left'
        }}>
          
          {/* Column 1: Core Policy & Guidelines */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: '12px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                Resolution Framework
              </h2>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                How we assist you with standard service touchpoints.
              </p>
            </div>

            {guidelines.map((item, idx) => (
              <div key={idx} className="glass-panel" style={{
                padding: '28px',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.7)',
                background: 'rgba(255, 255, 255, 0.85)',
                boxShadow: '0 8px 24px rgba(31, 41, 55, 0.04)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ 
                    width: '44px', 
                    height: '44px', 
                    borderRadius: '12px', 
                    background: 'rgba(79, 99, 184, 0.1)', 
                    color: 'var(--secondary)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <div style={{ margin: 'auto' }}>{item.icon}</div>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                      {item.title}
                    </h3>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                    <strong>Context:</strong> {item.context}
                  </p>
                  <div style={{ 
                    padding: '16px', 
                    background: 'rgba(79, 99, 184, 0.03)', 
                    borderLeft: '3px solid var(--secondary)', 
                    borderRadius: '0 8px 8px 0' 
                  }}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: '1.6', margin: 0 }}>
                      <strong>Our Support Plan:</strong> {item.action}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2: Editorial Context, FAQ & Red-line Guidelines */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', position: 'sticky', top: '100px' }}>
            
            {/* Editorial Commitment Note */}
            <div className="glass-panel" style={{
              padding: '32px',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              background: 'rgba(255, 255, 255, 0.92)',
              boxShadow: '0 10px 30px rgba(31, 41, 55, 0.05)'
            }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MessageSquare size={20} style={{ color: 'var(--secondary)' }} />
                Real-Time Assistance
              </h3>
              <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: '1.7', margin: 0 }}>
                Sunrise Holidays works closely with regional hotel operators, experienced local guides, and transport unions. Our priority is to provide immediate, on-site service recovery. 
                <br /><br />
                We encourage all guests to communicate directly with our helpline as soon as any gap in expectations is noticed, so that we can correct the situation while you are on tour.
              </p>
            </div>

            {/* Time-Limit Red Line Notice */}
            <div style={{
              padding: '28px',
              background: 'rgba(227, 38, 47, 0.04)',
              borderRadius: '20px',
              border: '1.5px solid rgba(227, 38, 47, 0.15)',
              display: 'flex',
              gap: '16px'
            }}>
              <AlertCircle size={24} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px' }}>
                  Important Timeframe Guidelines
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                  To ensure a fair and effective resolution, any service issue must be reported to our helpline **during the tour** at the time of occurrence. 
                  <br /><br />
                  Issues or complaints submitted after the completion of the tour, or during your return journey, cannot be verified or resolved retroactively.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
