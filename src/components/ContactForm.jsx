import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle, Calendar, User, PhoneCall, RefreshCw, Users, Baby } from 'lucide-react';
import { packagesData } from '../data/packages';

// Simple, friendly message template generator (No Price info included)
const generateDefaultMessage = (pkg, timeframeLabel, peopleCount, childrenCount) => {
  const timeframeText = timeframeLabel ? ` (Planning to travel: ${timeframeLabel})` : '';
  const adultsNum = parseInt(peopleCount) || 0;
  const childrenNum = parseInt(childrenCount) || 0;
  const totalText = adultsNum > 0
    ? ` for ${adultsNum} adult${adultsNum !== 1 ? 's' : ''}${childrenNum > 0 ? ` and ${childrenNum} child${childrenNum !== 1 ? 'ren' : ''}` : ''}`
    : '';
  if (!pkg) {
    return `Hi Travel Helpdesk,\n\nPlease call or WhatsApp me. I would like your help to design a custom Himachal tour package${timeframeText}${totalText}.`;
  }
  return `Hi Travel Helpdesk,\n\nI am interested in the "${pkg.title}" (${pkg.duration})${timeframeText}${totalText}. Please contact me to plan this trip.`;
};

const TIMEFRAME_OPTIONS = [
  { value: 'not_decided',      label: 'Flexible / Undecided' },
  { value: 'this_month',       label: 'This Month' },
  { value: 'next_month',       label: 'Next Month' },
  { value: 'within_3_months',  label: 'Within 3 Months' },
  { value: 'within_6_months',  label: 'Within 6 Months' },
  { value: 'specific_date',    label: 'Specific Date...' }
];

export default function ContactForm() {
  const location = useLocation();

  const [formData, setFormData] = useState(() => {
    const initialState = {
      name:           '',
      phone:          '',
      packageSlug:    'custom',
      travelTimeframe:'not_decided',
      travelDate:     '',
      message:        '',
      peopleCount:    '2',
      childrenCount:  '0',
    };

    if (location.state) {
      const { selectedPackage, travelTimeframe, customMessage, peopleCount, adults, children } = location.state;

      // Custom Trip Builder sends a fully pre-built message - use it directly
      if (customMessage) {
        initialState.packageSlug = 'custom';
        initialState.message = customMessage;
        if (adults != null) {
          initialState.peopleCount = String(adults);
        } else if (peopleCount) {
          initialState.peopleCount = String(peopleCount);
        }
        if (children != null) {
          initialState.childrenCount = String(children);
        }
        return initialState;
      }

      let matchedPkg = null;
      let pkgSlug    = 'custom';
      let honeymoonPrefill = {};
      if (selectedPackage) {
        matchedPkg = packagesData.find(p => p.title === selectedPackage || p.slug === selectedPackage);
        if (matchedPkg) {
          pkgSlug = matchedPkg.slug;
          if (matchedPkg.title.toLowerCase().includes('honeymoon') || matchedPkg.slug.toLowerCase().includes('honeymoon')) {
            honeymoonPrefill = { peopleCount: '2', childrenCount: '0' };
          }
        }
      }

      initialState.packageSlug = pkgSlug;
      initialState.travelTimeframe = travelTimeframe || initialState.travelTimeframe;
      Object.assign(initialState, honeymoonPrefill);
      if (peopleCount) {
        initialState.peopleCount = String(peopleCount);
      }

      const tfLabel = TIMEFRAME_OPTIONS.find(o => o.value === initialState.travelTimeframe)?.label;
      initialState.message = generateDefaultMessage(
        matchedPkg,
        tfLabel,
        initialState.peopleCount,
        initialState.childrenCount
      );
      return initialState;
    }

    // Default message when no location state
    const tfLabel = TIMEFRAME_OPTIONS.find(o => o.value === initialState.travelTimeframe)?.label;
    initialState.message = generateDefaultMessage(null, tfLabel, initialState.peopleCount, initialState.childrenCount);
    return initialState;
  });

  const [isSubmitted,            setIsSubmitted]            = useState(false);
  const [isSubmitting,           setIsSubmitting]           = useState(false);
  const [isMessageManuallyEdited,setIsMessageManuallyEdited]= useState(() => {
    return !!(location.state && location.state.customMessage);
  });
  const [isPackageDropdownOpen,  setIsPackageDropdownOpen]  = useState(false);

  const getTimeframeLabel = (val) => {
    if (val === 'specific_date' && formData.travelDate) return formData.travelDate;
    return TIMEFRAME_OPTIONS.find(o => o.value === val)?.label || '';
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isPackageDropdownOpen && !e.target.closest('#custom-package-dropdown')) {
        setIsPackageDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isPackageDropdownOpen]);

  const updateMessage = (updatedData) => {
    if (isMessageManuallyEdited) return updatedData.message;
    const pkg = updatedData.packageSlug !== 'custom'
      ? packagesData.find(p => p.slug === updatedData.packageSlug) : null;
    const tfLabel = updatedData.travelTimeframe === 'specific_date'
      ? updatedData.travelDate
      : TIMEFRAME_OPTIONS.find(o => o.value === updatedData.travelTimeframe)?.label;
    return generateDefaultMessage(pkg, tfLabel, updatedData.peopleCount, updatedData.childrenCount);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === 'name')         value = value.replace(/[0-9]/g, '');
    if (name === 'phone')        value = value.replace(/[a-zA-Z]/g, '');
    if (name === 'peopleCount' || name === 'childrenCount') value = value.replace(/[^0-9]/g, '');

    setFormData(prev => {
      const nextData = { ...prev, [name]: value };
      if (name === 'packageSlug') {
        if (value === 'custom') {
          setIsMessageManuallyEdited(false);
        } else {
          const pkg = packagesData.find(p => p.slug === value);
          if (pkg && (pkg.title.toLowerCase().includes('honeymoon') || pkg.slug.toLowerCase().includes('honeymoon'))) {
            nextData.peopleCount = '2';
            nextData.childrenCount = '0';
          }
        }
      }
      nextData.message = updateMessage(nextData);
      return nextData;
    });
  };

  const handleMessageChange = (e) => {
    setFormData(prev => ({ ...prev, message: e.target.value }));
    setIsMessageManuallyEdited(true);
  };

  const handleResetMessage = () => {
    const pkg = formData.packageSlug !== 'custom'
      ? packagesData.find(p => p.slug === formData.packageSlug) : null;
    const tfLabel = formData.travelTimeframe === 'specific_date'
      ? formData.travelDate
      : TIMEFRAME_OPTIONS.find(o => o.value === formData.travelTimeframe)?.label;
    setFormData(prev => ({
      ...prev,
      message: generateDefaultMessage(pkg, tfLabel, prev.peopleCount, prev.childrenCount)
    }));
    setIsMessageManuallyEdited(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); setIsSubmitted(true); }, 1000);
  };

  const selectedPkgDetails = formData.packageSlug !== 'custom'
    ? packagesData.find(p => p.slug === formData.packageSlug) : null;

  const totalTravelers = (parseInt(formData.peopleCount) || 0) + (parseInt(formData.childrenCount) || 0);

  return (
    <section id="contact" className="section contact-section" style={{ padding: '60px 0' }}>
      <div className="mesh-bg">
        <div className="mesh-glow mesh-glow-1" style={{ top: '30%', background: 'var(--accent)', opacity: 0.12 }}></div>
      </div>

      <div className="container">
        <div className="contact-grid">

          {/* ── Left Info Panel ── */}
          <div className="contact-info">
            <span className="section-subtitle">Get in Touch</span>
            <h2 className="section-title text-left" style={{ marginBottom: '20px', lineHeight: '1.2' }}>
              Let's Plan Your Himalayan Getaway
            </h2>
            <p className="contact-desc" style={{ marginBottom: '36px', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Have questions about custom Shimla-Manali itineraries, hotel selections, or transport packages?
              Send us a message and our local travel planners will get back to you shortly.
            </p>

            <div className="info-items" style={{ gap: '20px' }}>
              <div className="info-item">
                <div className="info-icon-wrapper" style={{ width: '48px', height: '48px', borderRadius: '14px' }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '4px' }}>Our Office Address</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Sunrise Villa, Shimla, Himachal Pradesh, India - Pin 171219
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-wrapper" style={{ width: '48px', height: '48px', borderRadius: '14px' }}>
                  <Phone size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '4px' }}>Call Our Executive</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    <strong>Travel Helpdesk:</strong> +91 89887 94801 <br />
                    <strong>Landline:</strong> 0177-2661991
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-wrapper" style={{ width: '48px', height: '48px', borderRadius: '14px' }}>
                  <Mail size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '4px' }}>Email Us Directly</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    info@sunrisetravels.in <br />
                    sales@sunrisetravels.in
                  </p>
                </div>
              </div>
            </div>

            {/* Trust strip - subtle, not a heavy card */}
            <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', gap: '24px', marginBottom: '16px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1 }}>Since 2011</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '3px' }}>Trusted Agency</div>
                </div>
                <div style={{ width: '1px', background: 'var(--border-color)' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#f59e0b', lineHeight: 1 }}>⭐ 4.8</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '3px' }}>Google Rating</div>
                </div>
                <div style={{ width: '1px', background: 'var(--border-color)' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--secondary)', lineHeight: 1 }}>✓ Local</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '3px' }}>Shimla-based</div>
                </div>
              </div>
              <ul style={{ paddingLeft: '16px', fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '5px', lineHeight: '1.5', margin: 0 }}>
                <li>Regulated by regional authorities · Verified travel partner</li>
                <li>Handcrafted itineraries with on-ground local coordinators</li>
                <li>Thousands of happy travelers since 2011</li>
              </ul>
            </div>
          </div>

          {/* ── Right Form Card ── */}
          <div className="contact-form-wrapper glass-panel" style={{ border: '1px solid var(--border-hover)', borderRadius: '24px' }}>
            {isSubmitted ? (
              <div className="success-state" style={{ padding: '20px 0' }}>
                <CheckCircle className="success-icon" size={64} style={{ color: '#10b981', marginBottom: '20px' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '12px' }}>Inquiry Submitted!</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '1.05rem', lineHeight: '1.5' }}>
                  Thank you, <strong>{formData.name}</strong>. Your holiday details have been successfully sent to Travel Helpdesk at Sunrise Travels.
                </p>

                <div className="glass-panel" style={{ padding: '20px', textAlign: 'left', marginBottom: '24px', background: 'rgba(255,255,255,0.4)', border: '1px solid rgba(31,41,55,0.05)', borderRadius: '16px' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Summary of Selection:
                  </h4>
                  <table style={{ width: '100%', fontSize: '0.95rem', borderCollapse: 'collapse' }}>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                        <td style={{ padding: '8px 0', color: 'var(--text-muted)' }}>Package:</td>
                        <td style={{ padding: '8px 0', fontWeight: '600' }}>{formData.packageSlug === 'custom' ? 'Custom Tour / Not Sure' : selectedPkgDetails?.title}</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                        <td style={{ padding: '8px 0', color: 'var(--text-muted)' }}>Travel Time:</td>
                        <td style={{ padding: '8px 0', fontWeight: '600' }}>{getTimeframeLabel(formData.travelTimeframe)}</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                        <td style={{ padding: '8px 0', color: 'var(--text-muted)' }}>Adults:</td>
                        <td style={{ padding: '8px 0', fontWeight: '600' }}>{formData.peopleCount}</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                        <td style={{ padding: '8px 0', color: 'var(--text-muted)' }}>Children:</td>
                        <td style={{ padding: '8px 0', fontWeight: '600' }}>{formData.childrenCount || '0'}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 0', color: 'var(--text-muted)' }}>Contact Phone:</td>
                        <td style={{ padding: '8px 0', fontWeight: '600' }}>{formData.phone}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  Travel Helpdesk will call or text you shortly on <strong>{formData.phone}</strong> to finalise your itinerary.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn btn-secondary"
                  style={{ marginTop: '24px', padding: '10px 24px', fontSize: '0.9rem' }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" style={{ gap: '16px' }}>

                {/* Header */}
                <div style={{ marginBottom: '2px' }}>
                  <h3 className="form-title" style={{ marginBottom: '4px', fontSize: '1.3rem' }}>Send Holiday Inquiry</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                    Fill in the details - our team will call you to plan everything.
                  </p>
                </div>

                {/* Name + Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label htmlFor="name" style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px', display: 'block' }}>Full Name</label>
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '13px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', display: 'flex' }}>
                        <User size={15} />
                      </span>
                      <input type="text" id="name" name="name" placeholder="Rahul Sharma"
                        value={formData.name} onChange={handleChange}
                        style={{ paddingLeft: '38px', height: '44px', fontSize: '0.92rem' }} required />
                    </div>
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label htmlFor="phone" style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px', display: 'block' }}>Phone / WhatsApp</label>
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '13px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', display: 'flex' }}>
                        <PhoneCall size={15} />
                      </span>
                      <input type="tel" id="phone" name="phone" placeholder="98765 43210"
                        value={formData.phone} onChange={handleChange}
                        style={{ paddingLeft: '38px', height: '44px', fontSize: '0.92rem' }} required />
                    </div>
                  </div>
                </div>

                {/* Adults + Children */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label htmlFor="peopleCount" style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px', display: 'block' }}>
                      Adults <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>(12+ yrs)</span>
                    </label>
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '13px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', display: 'flex' }}>
                        <Users size={15} />
                      </span>
                      <input type="number" id="peopleCount" name="peopleCount" min="1" max="100"
                        value={formData.peopleCount} onChange={handleChange}
                        style={{ paddingLeft: '38px', height: '44px', fontSize: '0.92rem' }} required />
                    </div>
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label htmlFor="childrenCount" style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px', display: 'block' }}>
                      Children <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>(below 12)</span>
                    </label>
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '13px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', display: 'flex' }}>
                        <Baby size={15} />
                      </span>
                      <input type="number" id="childrenCount" name="childrenCount" min="0" max="50"
                        value={formData.childrenCount} onChange={handleChange}
                        style={{ paddingLeft: '38px', height: '44px', fontSize: '0.92rem' }} />
                    </div>
                  </div>
                </div>

                {/* Group size hint */}
                {totalTravelers > 0 && (
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '-4px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Users size={12} />
                    Total: <strong>{totalTravelers} traveller{totalTravelers !== 1 ? 's' : ''}</strong>
                    {parseInt(formData.childrenCount) > 0 && <span style={{ color: 'var(--primary)' }}>· children under 5 travel free</span>}
                  </p>
                )}

                {/* Package - single unified dropdown */}
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px', display: 'block' }}>Holiday Package</label>
                  <div id="custom-package-dropdown" style={{ position: 'relative' }}>
                    <div
                      onClick={() => setIsPackageDropdownOpen(!isPackageDropdownOpen)}
                      style={{
                        padding: '12px 16px', paddingLeft: '42px', position: 'relative',
                        background: '#fff', border: `1.5px solid ${isPackageDropdownOpen ? 'var(--secondary)' : 'var(--border-color)'}`,
                        borderRadius: '12px', cursor: 'pointer', display: 'flex',
                        alignItems: 'center', justifyContent: 'space-between',
                        fontSize: '0.92rem', transition: 'border-color 0.15s',
                        color: formData.packageSlug === 'custom' ? 'var(--text-secondary)' : 'var(--text-primary)',
                      }}
                    >
                      <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', display: 'flex' }}>
                        <MapPin size={16} />
                      </span>
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>
                        {formData.packageSlug === 'custom'
                          ? '✨ Personalized Recommendation - let us plan'
                          : packagesData.find(p => p.slug === formData.packageSlug)?.title}
                      </span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem', marginLeft: '8px', flexShrink: 0 }}>
                        {isPackageDropdownOpen ? '▲' : '▼'}
                      </span>
                    </div>

                    {isPackageDropdownOpen && (
                      <div style={{
                        position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0,
                        maxHeight: '280px', overflowY: 'auto', zIndex: 100,
                        background: '#fff', border: '1.5px solid var(--secondary)',
                        borderRadius: '14px', boxShadow: '0 8px 28px rgba(31,41,55,0.10)'
                      }}>
                        <div
                          onClick={() => { handleChange({ target: { name: 'packageSlug', value: 'custom' } }); setIsPackageDropdownOpen(false); }}
                          style={{
                            padding: '11px 16px', cursor: 'pointer', fontSize: '0.88rem',
                            background: formData.packageSlug === 'custom' ? 'rgba(79,99,184,0.07)' : 'transparent',
                            borderBottom: '1px solid rgba(0,0,0,0.06)',
                            fontWeight: formData.packageSlug === 'custom' ? 700 : 500,
                            color: 'var(--secondary)', transition: 'background 0.15s',
                          }}
                          onMouseEnter={e => e.currentTarget.style.background = 'rgba(79,99,184,0.05)'}
                          onMouseLeave={e => e.currentTarget.style.background = formData.packageSlug === 'custom' ? 'rgba(79,99,184,0.07)' : 'transparent'}
                        >
                          ✨ Personalized Recommendation - let our team plan for you
                        </div>
                        {packagesData.map(p => (
                          <div
                            key={p.slug}
                            onClick={() => { handleChange({ target: { name: 'packageSlug', value: p.slug } }); setIsPackageDropdownOpen(false); }}
                            style={{
                              padding: '10px 16px', cursor: 'pointer', fontSize: '0.88rem',
                              color: 'var(--text-primary)',
                              background: formData.packageSlug === p.slug ? 'rgba(79,99,184,0.07)' : 'transparent',
                              borderBottom: '1px solid rgba(0,0,0,0.03)',
                              transition: 'background 0.15s',
                              display: 'flex', flexDirection: 'column', gap: '1px'
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(79,99,184,0.04)'}
                            onMouseLeave={e => e.currentTarget.style.background = formData.packageSlug === p.slug ? 'rgba(79,99,184,0.07)' : 'transparent'}
                          >
                            <span style={{ fontWeight: formData.packageSlug === p.slug ? 700 : 500 }}>{p.title}</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{p.duration}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Travel timing - compact pill row */}
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px', display: 'block' }}>When are you planning to travel?</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                    {TIMEFRAME_OPTIONS.map(o => {
                      const isSelected = formData.travelTimeframe === o.value;
                      return (
                        <button
                          key={o.value} type="button"
                          onClick={() => handleChange({ target: { name: 'travelTimeframe', value: o.value } })}
                          style={{
                            padding: '6px 13px', borderRadius: '999px', fontSize: '0.8rem',
                            border: isSelected ? '1.5px solid var(--secondary)' : '1px solid var(--border-color)',
                            background: isSelected ? 'var(--secondary)' : 'rgba(255,255,255,0.7)',
                            color: isSelected ? '#fff' : 'var(--text-secondary)',
                            fontWeight: isSelected ? 700 : 400, cursor: 'pointer',
                            transition: 'all 0.15s', whiteSpace: 'nowrap',
                          }}
                        >
                          {o.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Specific date */}
                {formData.travelTimeframe === 'specific_date' && (
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', display: 'flex' }}>
                      <Calendar size={16} />
                    </span>
                    <input
                      type="date" id="travelDate" name="travelDate"
                      value={formData.travelDate} onChange={handleChange}
                      style={{ paddingLeft: '42px', border: '1.5px solid var(--secondary)', borderRadius: '10px', width: '100%', height: '44px', fontSize: '0.92rem', color: 'var(--text-primary)', background: '#fff' }}
                      required autoFocus
                    />
                  </div>
                )}

                {/* Message */}
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <label htmlFor="message" style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Message</label>
                    {isMessageManuallyEdited && (
                      <button type="button" onClick={handleResetMessage}
                        style={{ fontSize: '0.72rem', color: 'var(--secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '3px', fontWeight: 600, background: 'none', border: 'none' }}>
                        <RefreshCw size={10} /> Reset
                      </button>
                    )}
                  </div>
                  <textarea
                    id="message" name="message" rows="10"
                    value={formData.message} onChange={handleMessageChange}
                    style={{ fontSize: '0.92rem', lineHeight: '1.65', borderRadius: '12px', minHeight: '220px', resize: 'vertical', width: '100%' }}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center', height: '52px', borderRadius: 'var(--radius-full)', fontSize: '1rem', fontWeight: 700 }}
                >
                  {isSubmitting
                    ? <span>Sending...</span>
                    : <><span>Submit Holiday Inquiry</span><Send size={17} /></>
                  }
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

