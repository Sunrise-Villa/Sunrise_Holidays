import React, { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Clock, ArrowUpRight, Info, MapPin, Sparkles } from 'lucide-react';
import { packagesData, getPackageThemes } from '../data/packages';

const themeNames = {
  honeymoon: 'Honeymoon Special',
  family: 'Family Special',
  adventure: 'Adventure & Explorer',
  luxury: 'Premium Luxury',
  weekend: 'Weekend Escape',
  circuit: 'Circuit Plans'
};

const categoryDetails = {
  shimla: {
    title: 'Explore Shimla Destinations',
    subtitle: 'Queen of Hills & Summer Capital',
    desc: 'Wander through colonial pathways, enjoy scenic Kufri snow slopes, and witness traditional Himachali culture.',
    guideNotes: [
      'Pickups: Available from Delhi (340 km), Chandigarh Airport/Station (117 km), or Kalka by exclusive private vehicle.',
      'Meals: Includes daily breakfast and dinner (Note: only vegetarian meals are served in Sunrise Villa Shimla).',
      'Cost Factors: Tentative starting cost depends on your travel dates, cab vehicle choice, hotel tier, and group size.'
    ]
  },
  manali: {
    title: 'Explore Manali Destinations',
    subtitle: 'Himalayan Adventure Hub & Rohtang Pass',
    desc: 'Glacial treks, paragliding over Solang Valley, hot water springs, and beautiful ancient wood temples.',
    guideNotes: [
      'Adventure Activities: Solang Valley and Kullu offer paragliding, river rafting, and snow sliding.',
      'Rohtang Permit: Travel to Rohtang Pass is subject to government permit quotas and green tax rules.',
      'Pickups: Custom private pickups available from Delhi, Chandigarh, or Bhuntar Airport.'
    ]
  },
  combo: {
    title: 'Explore Shimla-Manali Combo Destinations',
    subtitle: 'The Golden Route Tour Combo',
    desc: 'The absolute complete tour covering both iconic hill stations with scenic riverside drives and local stays.',
    guideNotes: [
      'Transit Route: Drive between Shimla and Manali along the beautiful Beas river valley with stopovers in Kullu.',
      'Atal Tunnel Trip: Includes full-day excursion through the Atal Tunnel to explore frozen Lahaul Valley and Sissu waterfall.',
      'Flexible Planning: Itineraries can be fully customized for honeymooners, families, or group travellers.'
    ]
  },
  kasol: {
    title: 'Customize Your Kasol Trip',
    subtitle: 'The Parvati Valley Paradise',
    desc: 'Known for its scenic pine forests, riverside cafes, and offbeat trekking routes like Kheerganga. Since Kasol is best explored as a custom itinerary, use our Trip Planner to build your dream trip!',
    isCustomOnly: true,
    guideNotes: [
      'Route: Located 30 km from Bhuntar. Best reached via private cab en route to Manali or as a standalone retreat.',
      'Adventure: Ideal base for trekking to Chalal, Tosh, Pulga, and the sacred hot springs of Kheerganga.',
      'Custom Booking: We build tailored packages covering boutique cottages, transfers, and local trek guides.'
    ]
  },
  jibhi: {
    title: 'Customize Your Jibhi & Tirthan Trip',
    subtitle: 'Himachal\'s Hidden Valley Hamlet',
    desc: 'Explore freshwater streams, cozy pine wood cabins, Jalori Pass, and the famous Jibhi waterfall. Design a perfect Jibhi & Tirthan Valley tour using our interactive Trip Planner!',
    isCustomOnly: true,
    guideNotes: [
      'Offbeat Scenic: Excellent for nature lovers, trout fishing, and slow-paced mountain relaxation.',
      'Jalori Pass & Serolsar Lake: An essential day excursion offering panoramic Himalayan views.',
      'Custom Booking: Easily integrated with a Manali or Shimla tour. Let us design your custom stay and transport!'
    ]
  },
  spiti: {
    title: 'Customize Your Spiti Valley Expedition',
    subtitle: 'The Middle Land & High Altitude Desert',
    desc: 'Home to high altitude villages, Ki Monastery, Keylong, Pin Valley, and pristine Chandra Taal lake. An expedition to Spiti requires careful custom route planning - build yours in seconds!',
    isCustomOnly: true,
    guideNotes: [
      'High Altitude: Average elevation above 12,000 ft. Requires acclimatization stays in Shimla or Kalpa.',
      'Road Accessibility: Accessible via Shimla-Kinnaur route (open year-round) or Manali-Kaza route (summer only).',
      'Custom Booking: Requires specialized 4x4 vehicles, local homestays, and experienced Himalayan drivers.'
    ]
  }
};

export default function Destinations() {
  const { category } = useParams();
  const [filter, setFilter] = useState('all');
  const [pickupFilter, setPickupFilter] = useState('chandigarh');
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const theme = searchParams.get('theme');
  const sub = searchParams.get('sub');

  const currentCategory = category ? categoryDetails[category] : null;
  const activeFilter = category || filter;
  const themeName = theme ? themeNames[theme.toLowerCase()] || theme : '';

  let filteredDestinations = activeFilter === 'all' 
    ? packagesData 
    : packagesData.filter(d => d.category === activeFilter);

  if (theme) {
    filteredDestinations = filteredDestinations.filter(d => {
      const themes = getPackageThemes(d);
      return themes.includes(theme.toLowerCase());
    });
  }

  // Filter by sub-category for combos (classic Shimla-Manali vs multi-destination Himachal)
  if (activeFilter === 'combo' && sub) {
    if (sub === 'shimla-manali') {
      filteredDestinations = filteredDestinations.filter(d => 
        d.title.toLowerCase().includes('shimla') && 
        d.title.toLowerCase().includes('manali') && 
        !d.title.toLowerCase().includes('dharamshala') && 
        !d.title.toLowerCase().includes('dalhousie') &&
        !d.title.toLowerCase().includes('himachal')
      );
    } else if (sub === 'himachal') {
      filteredDestinations = filteredDestinations.filter(d => 
        d.title.toLowerCase().includes('himachal') || 
        d.title.toLowerCase().includes('dharamshala') || 
        d.title.toLowerCase().includes('dalhousie')
      );
    }
  }

  // Filter by pickup location selection
  if (pickupFilter === 'chandigarh') {
    filteredDestinations = filteredDestinations.filter(d => 
      d.slug.toLowerCase().endsWith('chandigarh')
    );
  } else if (pickupFilter === 'delhi') {
    filteredDestinations = filteredDestinations.filter(d => 
      d.slug.toLowerCase().endsWith('delhi')
    );
  }

  // Generate dynamic heading and description based on theme
  let categoryTitle = currentCategory ? currentCategory.title : 'All Destinations';
  if (category === 'combo' && theme === 'circuit' && sub) {
    if (sub === 'shimla-manali') {
      categoryTitle = 'Shimla-Manali Combo Tour Plans';
    } else if (sub === 'himachal') {
      categoryTitle = 'Shimla-Manali-Dharamshala-Dalhousie-Amritsar Tour Plans';
    }
  }

  const displayTitle = theme 
    ? (category === 'combo' && theme === 'circuit' && sub ? categoryTitle : categoryTitle.replace('Destinations', `${themeName} Destinations`))
    : categoryTitle;

  return (
    <section id="destinations" className="section destinations-section">
      <div className="mesh-bg">
        <div className="mesh-glow mesh-glow-1"></div>
        <div className="mesh-glow mesh-glow-2"></div>
      </div>

      <div className="container">
        {/* Dynamic Header */}
        {currentCategory ? (
          <div className="destination-hero-banner">
            <span className="section-subtitle">
              <MapPin size={14} style={{ marginRight: '4px' }} />
              {currentCategory.subtitle}
            </span>
            <h1 className="section-title">{displayTitle}</h1>
            <p className="section-desc">
              {theme 
                ? `Specialized ${themeName.toLowerCase()} itineraries hand-crafted for this region. ${currentCategory.desc}`
                : currentCategory.desc
              }
            </p>
            
            {/* Quick Details Bar - Only show if not custom-only */}
            {!currentCategory.isCustomOnly && (
              <div className="destination-stats-bar">
                <div className="destination-stat-item">
                  <Clock size={16} />
                  <span>Duration: 2 to 8 Days</span>
                </div>
                <div className="destination-stat-item">
                  <MapPin size={16} />
                  <span>Pickups: Delhi & Chandigarh</span>
                </div>
                <div className="destination-stat-item">
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>★</span>
                  <span>Premium Hotels & Cabs Included</span>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="section-header">
            <span className="section-subtitle">Featured Destinations</span>
            <h2 className="section-title">
              {theme ? `Explore Our Top ${themeName} Destinations` : 'Explore Our Top Destinations'}
            </h2>
            <p className="section-desc">
              {theme
                ? `Browse our top-rated ${themeName.toLowerCase()} itineraries customized for comfort, mountain sightseeing, and memorable local experiences.`
                : 'Carefully curated itineraries designed by Shimla-Manali locals to offer the ultimate blend of comfort, mountain adventure, and local Himalayan hospitality.'
              }
            </p>
          </div>
        )}

        {/* Filter Controls - Only show if not on a specific category page */}
        {!category && (
          <div className="filter-controls">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Destinations
            </button>
            <button 
              className={`filter-btn ${filter === 'shimla' ? 'active' : ''}`}
              onClick={() => setFilter('shimla')}
            >
              Shimla Tours
            </button>
            <button 
              className={`filter-btn ${filter === 'manali' ? 'active' : ''}`}
              onClick={() => setFilter('manali')}
            >
              Manali Tours
            </button>
            <button 
              className={`filter-btn ${filter === 'combo' ? 'active' : ''}`}
              onClick={() => setFilter('combo')}
            >
              Combo Tours
            </button>
          </div>
        )}

        {/* Custom Only Banner */}
        {currentCategory?.isCustomOnly ? (
          <div style={{ marginTop: '40px', animation: 'fadeInUp 0.6s ease-out' }}>
            <div className="glass-panel" style={{ padding: '48px 32px', textAlign: 'center', border: '1px solid rgba(79, 99, 184, 0.2)', background: 'rgba(255, 255, 255, 0.8)' }}>
              <div style={{
                width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(79, 99, 184, 0.1)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'var(--secondary)'
              }}>
                <Sparkles size={32} />
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '16px', color: 'var(--text-primary)' }}>
                Design a Customized {currentCategory.title.replace('Customize Your ', '').replace(' Trip', '').replace(' Expedition', '')} Itinerary
              </h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto 32px auto', lineHeight: '1.6' }}>
                We specialize in tailor-made Himachal tours. Since {category.toUpperCase()} is best experienced via custom routes, our interactive Trip Planner lets you select pickup/drop cities, add sightseeing nodes, set durations, and send it directly to our travel desk.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/custom-trip" className="btn btn-secondary" style={{ padding: '14px 28px', fontWeight: 700 }}>
                  <Sparkles size={16} />
                  <span>Launch Custom Trip Planner</span>
                </Link>
                <Link to="/contact" className="btn btn-primary" style={{ padding: '14px 28px', fontWeight: 700 }}>
                  <span>Speak with local travel expert</span>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Pickup Location Selector */}
            {!currentCategory?.isCustomOnly && (
              <div className="pickup-filter-container" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '12px',
                margin: '0 auto 32px auto',
                padding: '12px 24px',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.45)',
                border: '1px solid var(--border-color)',
                width: 'fit-content',
                boxShadow: 'var(--glass-shadow)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                zIndex: 10
              }}>
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Filter by Pickup Location:
                </span>
                <select
                  value={pickupFilter}
                  onChange={(e) => setPickupFilter(e.target.value)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    background: '#fff',
                    color: 'var(--text-primary)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    outline: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                  }}
                >
                  <option value="all">All Pickups (Delhi & Chandigarh)</option>
                  <option value="chandigarh">Chandigarh Pickup</option>
                  <option value="delhi">Delhi Pickup</option>
                </select>
              </div>
            )}

            {/* Grid */}
            <div className="destinations-grid">
          {filteredDestinations.map((dest) => {
            const isDelhi = dest.title.toLowerCase().includes('delhi');
            const pickupText = isDelhi ? 'Delhi Pickup' : 'Chandigarh Pickup';

            return (
              <Link 
                key={dest.id} 
                to={`/package/${dest.slug}`} 
                className="destination-card glass-panel glow-effect clickable-card"
                style={{ display: 'flex', flexDirection: 'column', color: 'inherit' }}
              >
                <div className="card-image-wrapper">
                  <img src={dest.image} alt={dest.title} className="card-image" width="600" height="400" loading="lazy" />
                  <div className="card-badges">
                    <span className="badge badge-primary card-badge">{dest.badge}</span>
                    <span className="card-price">{dest.price}</span>
                  </div>
                </div>

                <div className="card-content" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div className="card-meta">
                    <span className="meta-item duration-badge">
                      <Clock size={14} />
                      {dest.duration}
                    </span>
                    <span className="meta-item pickup-badge">
                      <MapPin size={14} />
                      {pickupText}
                    </span>
                  </div>
                  
                  <h3 className="card-title">{dest.title}</h3>
                  
                  {/* Tagline tag pills */}
                  {dest.tagline && (
                    <div className="card-tags">
                      {dest.tagline.split(/,|&/).map((tag, idx) => {
                        const cleaned = tag.trim().replace(/^and\s+/i, '');
                        if (!cleaned) return null;
                        return (
                          <span key={idx} className="card-tag-pill">
                            {cleaned}
                          </span>
                        );
                      })}
                    </div>
                  )}
                  
                  <div className="card-link">
                    <span>View Itinerary</span>
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </Link>
            );
          })}
            </div>
          </>
        )}

        {/* Placeholder Info Card */}
        {category && currentCategory && (
          <div className="guide-notes-panel">
            <div className="guide-notes-icon-wrapper">
              <Info size={24} />
            </div>
            <div className="guide-notes-content">
              <h3 className="guide-notes-title">
                Common Travel Info & Guide Notes
              </h3>
              <ul className="guide-notes-grid">
                {currentCategory.guideNotes.map((note, idx) => (
                  <li key={idx} className="guide-note-item">
                    <span className="guide-note-bullet">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
