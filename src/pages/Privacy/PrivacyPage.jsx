import React from 'react';
import { ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';

export default function PrivacyPage() {
  const sections = [
    { id: 'promise', label: 'Privacy Promise' },
    { id: 'collect', label: 'Information We Collect' },
    { id: 'usage', label: 'How We Use Data' },
    { id: 'cookies', label: 'Cookies & Trackers' },
    { id: 'security', label: 'Server Security' },
    { id: 'transfer', label: 'Data Transfers' },
    { id: 'changes', label: 'Policy Changes' }
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="privacy-page" style={{ paddingBottom: '100px', backgroundColor: 'var(--bg-primary)', minHeight: '90vh' }}>
      
      {/* Decorative Gradients */}
      <div className="mesh-bg">
        <div className="mesh-glow mesh-glow-1" style={{ top: '10%', background: 'var(--secondary)', opacity: 0.1 }}></div>
        <div className="mesh-glow mesh-glow-2" style={{ bottom: '20%', background: 'var(--primary)', opacity: 0.1 }}></div>
      </div>

      {/* Mini Hero Header */}
      <div style={{
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
        padding: '60px 0 80px 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '0 0 var(--radius-lg) var(--radius-lg)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
        marginBottom: '40px'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 70%, rgba(79,99,184,0.15) 0%, transparent 60%)', pointerEvents: 'none' }}></div>
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
            🔒 Safe & Secure Client Data
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px', lineHeight: '1.2', color: '#ffffff' }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#e5e7eb', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            Learn how Sunrise Holidays safeguards, collects, and treats your personal information in compliance with strict privacy standards.
          </p>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 240px) 1fr',
          gap: '40px',
          alignItems: 'start'
        }}>
          
          {/* Left Sidebar Table of Contents (Sticky on Desktop, hidden on mobile/tablet) */}
          <div style={{
            position: 'sticky',
            top: '120px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            padding: '24px',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.6)',
            background: 'rgba(255, 255, 255, 0.8)',
            boxShadow: '0 8px 30px rgba(31, 41, 55, 0.04)',
            textAlign: 'left'
          }}>
            <h4 style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
              Table of Contents
            </h4>
            {sections.map(sec => (
              <button
                key={sec.id}
                onClick={() => handleScroll(sec.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 0',
                  transition: 'color var(--transition-fast)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--secondary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                <ChevronRight size={14} style={{ opacity: 0.5 }} />
                <span>{sec.label}</span>
              </button>
            ))}
          </div>

          {/* Right Main Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', textAlign: 'left' }}>
            
            {/* General Intro */}
            <div className="glass-panel" style={{ padding: '32px', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.7)', background: 'rgba(255, 255, 255, 0.95)' }}>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.8', margin: 0 }}>
                <strong>Sunrise Holidays Shimla</strong> is committed to maintaining the privacy of personal information that you provide to us when using our services. This Privacy Policy describes how we treat personal information received about you when you visit our website at <a href="https://www.sunriseholidays.net" style={{ color: 'var(--secondary)', fontWeight: 600 }}>www.sunriseholidays.net</a>.
              </p>
            </div>

            {/* Privacy Promise Section */}
            <section id="promise" className="glass-panel" style={{ padding: '36px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.95)', borderLeft: '4px solid #10b981' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={22} style={{ color: '#10b981' }} />
                <span>Our Privacy Promise</span>
              </h3>
              <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '20px' }}>
                While information is the cornerstone of our ability to provide superior service, our most important asset is our clients’ trust. Keeping client information secure, and using it only as our clients would want us to, is a top priority for all of us at Sunrise Holidays Shimla. Here is our promise to our individual customers:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: 0, listStyle: 'none' }}>
                {[
                  "We will safeguard, according to strict standards of security and confidentiality, any information our customers share with us.",
                  "We will limit the collection and use of customer information to the minimum we require to deliver superior service to our customers, which includes advising our customers about our products, services, and opportunities.",
                  "We will permit only authorized employees, who are trained in the proper handling of customer information, to have access to that information. Employees who violate our Privacy Promise will be subject to disciplinary action.",
                  "We will not reveal customer information to any external organization unless we have previously informed the customer in disclosures or agreements, or are required by law.",
                  "We will always maintain control over the confidentiality of our customer information. We may, however, share customer information with reputable companies when a customer has expressed interest in their service or product.",
                  "Whenever we hire other organizations to provide support services, we will require them to conform to our privacy standards and allow us to audit them for compliance.",
                  "We will attempt to keep customer files complete, up-to-date, and accurate. We will tell our customers how and where to conveniently access their information and how to notify us about errors which we will promptly correct."
                ].map((promise, i) => (
                  <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    <CheckCircle2 size={16} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                    <span>{promise}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Information We Collect */}
            <section id="collect" className="glass-panel" style={{ padding: '36px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.95)', borderLeft: '4px solid var(--secondary)' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>
                Information We Collect
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <h4 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>General Information</h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    When you register, and at other times, we may collect personally identifiable information from you that may include your name, address, telephone number, e-mail address, and facts about your computer. We do not knowingly collect personal information from children under the age of thirteen. In addition, if a user is under 18, parental consent is required to provide personal information.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>Web Site Usage Information</h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    We automatically collect IP addresses and Web site usage information from you when you visit our Web site. This information helps us evaluate how our visitors and customers use and navigate our Web site on an aggregate basis, including the number and frequency of visitors and customers to each Web page, and the length of their visits.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Data */}
            <section id="usage" className="glass-panel" style={{ padding: '36px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.95)', borderLeft: '4px solid var(--secondary)' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>
                How We Use Information Collected
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '12px' }}>
                We may use information in the following ways:
              </p>
              <ul style={{ paddingLeft: '20px', fontSize: '0.92rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '8px', lineHeight: '1.5' }}>
                <li>For the purposes for which you specifically provided the information.</li>
                <li>To send you e-mail notifications about our new or existing products and services, special offers, or to otherwise contact you.</li>
                <li>To enhance existing features or develop new features, products and services.</li>
                <li>To allow us to personalize the content and advertising that you and others see based on personal characteristics or preferences.</li>
                <li>We may combine the information that we collect from you with information that you provide to us in connection with your use of our other products, services and websites.</li>
                <li>We may disclose and use personally identifiable information in special circumstances where it is necessary to enforce our Terms of Use or when we, in good faith, believe that the law requires us to do so.</li>
              </ul>
            </section>

            {/* Cookies */}
            <section id="cookies" className="glass-panel" style={{ padding: '36px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.95)', borderLeft: '4px solid var(--secondary)' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>
                Cookies & Trackers
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                We employ cookie technology to help visitors and customers move faster through our site. When you sign on to our Web site or take advantage of several key features, we may pass cookies to your computer. A cookie is a string of information that is sent by a Web site and stored on your hard drive or temporarily in your computer’s memory.
              </p>
            </section>

            {/* Security */}
            <section id="security" className="glass-panel" style={{ padding: '36px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.95)', borderLeft: '4px solid var(--secondary)' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>
                Server Security
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                The personally identifiable information we collect about you is stored in limited access servers. We will maintain safeguards to protect the security of these servers and your personally identifiable information.
              </p>
            </section>

            {/* Internet-based Transfers */}
            <section id="transfer" className="glass-panel" style={{ padding: '36px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.95)', borderLeft: '4px solid var(--secondary)' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>
                Internet-based Transfers
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                Given that the Internet is a global environment, using the Internet to collect and process personal data necessarily involves the transmission of data on an international basis. Therefore, by browsing our website and communicating electronically with us you acknowledge and agree to our processing of personal data in this way.
              </p>
            </section>

            {/* Changes */}
            <section id="changes" className="glass-panel" style={{ padding: '36px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.95)', borderLeft: '4px solid var(--secondary)' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>
                Policy Modifications
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                We may change this Privacy Policy from time to time. We will post any changes here, so be sure to check back periodically. However, please be assured that if the Privacy Policy changes in the future, we will not use the personal information you have submitted to us under this Privacy Policy in a manner that is materially inconsistent with this Privacy Policy, without your prior consent.
              </p>
            </section>

          </div>

        </div>
      </div>
    </div>
  );
}
