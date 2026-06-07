import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Sparkles, MapPin, ArrowRight, Heart, Users, Compass, Gem, Calendar } from 'lucide-react';
const destShimlaImg = "https://cdn.jsdelivr.net/gh/Sunrise-Villa/Sunrise_Holidays@main/src/assets/Shimla_1.jpg";
const destManaliImg = "https://cdn.jsdelivr.net/gh/Sunrise-Villa/Sunrise_Holidays@main/src/assets/manali_1.jpg";
const destRohtangImg = "https://cdn.jsdelivr.net/gh/Sunrise-Villa/Sunrise_Holidays@main/src/assets/Himachal_1.jpg";
const destKufriImg = "https://cdn.jsdelivr.net/gh/Sunrise-Villa/Sunrise_Holidays@main/src/assets/Shimla_2.jpg";
const honeymoonHeroImg = "https://cdn.jsdelivr.net/gh/Sunrise-Villa/Sunrise_Holidays@main/src/assets/honeymoon_hero.png";
import { packagesData, getPackageThemes } from '../../data/packages';

const themeMetadata = {
  honeymoon: {
    title: 'Honeymoon Special Packages',
    subtitle: 'Scenic Mountain Escapes',
    desc: 'Celebrate your journey together in private boutique cottages, with scenic balcony stays, candle-lit dinners, and dedicated private vehicle transfers.',
    icon: Heart,
    iconColor: '#e3262f'
  },
  family: {
    title: 'Family Holiday Packages',
    subtitle: 'Unforgettable Stays for All Generations',
    desc: 'Carefully paced itineraries covering comfortable hotel rooms, child-friendly sightseeing nodes, and exclusive safe private vehicles.',
    icon: Users,
    iconColor: '#4f63b8'
  },
  adventure: {
    title: 'Adventure & Explorer Packages',
    subtitle: 'High Altitude Thrills & Glacial Heights',
    desc: 'Excursions through high mountain paths, paragliding over Solang, trekking, and snow sliding down glaciers.',
    icon: Compass,
    iconColor: '#f4a316'
  },
  luxury: {
    title: 'Premium Luxury Packages',
    subtitle: 'Premium Stays & Exclusive Services',
    desc: 'Uncompromising comfort featuring luxury sedans (Innova/Crysta), 4-star boutique hotel bookings, and curated private tours.',
    icon: Gem,
    iconColor: '#10b981'
  },
  weekend: {
    title: 'Weekend Escape Packages',
    subtitle: 'Quick 2-3 Day Himalayan Getaways',
    desc: 'Short, fast-paced leisure trips en route to Shimla or Manali designed for quick corporate escapes and weekend relaxation.',
    icon: Calendar,
    iconColor: '#8b5cf6'
  },
  circuit: {
    title: 'Circuit Plans',
    subtitle: 'Shimla, Manali & Multi-Destination Combos',
    desc: 'Cover multiple destinations in a single scenic road trip. Experience the iconic Shimla-Manali route or explore extended Himalayan circuits with private drivers.',
    icon: Compass,
    iconColor: '#f4a316'
  }
};

const defaultMetadata = {
  shimla: {
    title: 'Shimla Tours',
    tagline: 'Cozy forest walks & heritage luxury',
    desc: 'Relax at Sunrise Villa in peaceful Shimla, take horse rides through Fagu apple orchards, and stroll Mall Road.',
    image: destShimlaImg,
    badge: 'Popular Choice',
    locationLabel: 'Shimla'
  },
  manali: {
    title: 'Manali Tours',
    tagline: 'Adventure valley & panoramic snow mountains',
    desc: 'Stay at premium river-view resorts, explore paragliding in Solang Valley, and experience snow at Rohtang Pass.',
    image: destManaliImg,
    badge: 'Best Seller',
    locationLabel: 'Manali'
  },
  'shimla-manali': {
    title: 'Shimla-Manali Combos',
    tagline: 'The complete Golden Route tour combo',
    desc: 'Experience both hill stations in one ultimate itinerary with private cab drivers.',
    image: destRohtangImg,
    badge: 'Best Selling Combo',
    locationLabel: 'Shimla + Manali'
  },
  himachal: {
    title: 'Himachal Circuit Tours',
    tagline: 'All-inclusive multi-destination tours',
    desc: 'Extended circuits covering Shimla, Manali, Dharamshala, Dalhousie, and Amritsar.',
    image: destKufriImg,
    badge: 'Grand Circuit',
    locationLabel: 'Multi-Destination'
  }
};

const themeCardDetails = {
  shimla: {
    honeymoon: {
      tagline: 'Cozy forest walks & heritage luxury',
      desc: 'Relax at Sunrise Villa in peaceful Shimla, take horse rides through Fagu apple orchards, and stroll Mall Road at sunset.',
      badge: 'Best Seller'
    },
    family: {
      tagline: 'Heritage sights, toy train rides & parks',
      desc: 'Visit Fagu Valley picnic spots, Jakhoo temple, Shimla Reserve Forest, and enjoy Mall Road shopping.',
      badge: 'Multi-gen Friendly'
    },
    adventure: {
      tagline: 'Pine forest treks & high valleys',
      desc: 'Go pine jungle camping, golf on high slopes in Naldehra, and explore snow viewpoints at Kufri.',
      badge: 'Forest Trekking'
    },
    luxury: {
      tagline: 'Premium boutique stays & private drivers',
      desc: 'Relax at top-rated premium resort cottages, enjoy custom Mall Road walks, and tour Shimla museums.',
      badge: 'Boutique Resorts'
    },
    weekend: {
      tagline: 'Quick 2N/3D Mall Road & Kufri break',
      desc: 'Quick mountain drive from Chandigarh, sightseeing en route at Pinjore Gardens, and Mall Road heritage tours.',
      badge: 'Quick 3-Day Trip'
    }
  },
  manali: {
    honeymoon: {
      tagline: 'Adventure valley & panoramic snow mountains',
      desc: 'Stay at premium river-view resorts, explore paragliding in Solang Valley, and experience snow at Rohtang Pass.',
      badge: 'Scenic Balcony Views'
    },
    family: {
      tagline: 'Riverside picnics, hot springs & snow fun',
      desc: 'Explore ancient wood temples, soak in hot sulphur baths at Vashisht, and enjoy snow activities at Solang Valley.',
      badge: 'Kids & Elders Approved'
    },
    adventure: {
      tagline: 'Solang paragliding & Rohtang glaciers',
      desc: 'Glacial walks at Rohtang Pass, white-water rafting in river Beas, and paragliding excursions in Solang Valley.',
      badge: 'Snow Glaciers & Rafting'
    },
    luxury: {
      tagline: '5-star mountain view resorts & activities',
      desc: 'Stay at luxurious riverside retreats, take private guided tours of Solang Pass, and travel in ultimate comfort.',
      badge: 'Riverside Stays'
    },
    weekend: {
      tagline: 'Hadimba temple & Solang valley sights',
      desc: 'Brief getaway en route to Solang, hot springs, and Mall Road restaurants. Fits right into a long weekend.',
      badge: 'Long Weekend Special'
    }
  },
  'shimla-manali': {
    honeymoon: {
      tagline: 'The complete Golden Route tour combo',
      desc: 'Experience both hill stations in one ultimate itinerary with private cab drivers en route along Beas river valleys.',
      badge: 'Best Selling Combo'
    },
    family: {
      tagline: 'The complete golden holiday route',
      desc: 'Explore both regions with comfortable drives en route. Includes stopovers at Pandoh Dam and Kullu shawl markets.',
      badge: 'Most Popular Choice'
    },
    adventure: {
      tagline: 'The ultimate explorer road route',
      desc: 'Cover Fagu, Kufri slopes, Kullu valley paragliding spots, and Atal Tunnel excursions to frozen Lahaul Valley.',
      badge: 'High Altitude Tour'
    },
    luxury: {
      tagline: 'The premium golden route expedition',
      desc: 'Combine both mountain capitals with premium 4-star stays, private SUV transport, and curated dining experiences.',
      badge: 'Ultimate Comfort'
    },
    weekend: {
      tagline: 'Quick 4-day golden route sampler',
      desc: 'See the highlights of both hill stations with optimized travel schedules en route from Chandigarh station.',
      badge: 'Optimized Route'
    },
    circuit: {
      tagline: 'The classic 2-destination route',
      desc: 'Experience both Himalayan capitals with private transfers along the Beas river. Complete packages starting from 4 to 8 days.',
      badge: 'Classic Circuit'
    }
  },
  himachal: {
    honeymoon: {
      tagline: 'Grand circuit & multi-destination stays',
      desc: 'Explore Shimla, Manali, Dharamshala, and Dalhousie in a single, well-paced scenic road trip.',
      badge: 'Grand Circuit'
    },
    family: {
      tagline: 'Extended family holiday across Western Himalayas',
      desc: 'Perfect multi-destination loop covering Shimla, Manali, Dharamshala, and Dalhousie with paced family sightseeing.',
      badge: 'Family Grand Circuit'
    },
    adventure: {
      tagline: 'The ultimate Himachal explorer road trip',
      desc: 'Go rafting in Kullu, paragliding in Solang, and trek through Dalhousie and Dharamshala valleys.',
      badge: 'Himalayan Expedition'
    },
    luxury: {
      tagline: 'Premium multi-resort luxury circuit',
      desc: 'Stay at top-rated 4-star resorts in Shimla, Manali, Dharamshala, and Dalhousie with a private Innova Crysta SUV.',
      badge: 'Grand Luxury Tour'
    },
    weekend: {
      tagline: 'Extended weekend grand Himalayan sampler',
      desc: 'A paced tour designed to make the most of an extended holiday across Himachal\'s top valleys.',
      badge: 'Grand Escape'
    },
    circuit: {
      tagline: 'All-inclusive multi-destination tours',
      desc: 'Extended circuits covering Shimla, Manali, Dharamshala, Dalhousie, and Amritsar. The ultimate Western Himalayan exploration.',
      badge: 'Grand Circuit'
    }
  }
};

function getPackageSubCategory(pkg) {
  if (pkg.category !== 'combo') return null;
  const titleLower = pkg.title.toLowerCase();
  if (
    titleLower.includes('himachal') || 
    titleLower.includes('dharamshala') || 
    titleLower.includes('dalhousie')
  ) {
    return 'himachal';
  }
  if (titleLower.includes('shimla') && titleLower.includes('manali')) {
    return 'shimla-manali';
  }
  return 'other-combo';
}

function getCategoryMetadata(categoryKey, themeName, themeId) {
  const defaults = defaultMetadata[categoryKey] || {
    title: `${categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)} Packages`,
    tagline: `Explore pristine beauty in ${categoryKey}`,
    desc: `Customized packages for ${categoryKey} featuring hand-picked stays and scenic transfers.`,
    image: destShimlaImg,
    badge: 'New Destination',
    locationLabel: categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)
  };

  const themeSpecific = themeCardDetails[categoryKey]?.[themeId] || {};

  const themeNameClean = themeName.replace(' Packages', '').replace(' Plans', '').replace(' Special', '').replace(' Holiday', '');
  let displayTitle = defaults.title;
  if (categoryKey === 'shimla') {
    displayTitle = `Shimla ${themeNameClean} Packages`;
  } else if (categoryKey === 'manali') {
    displayTitle = `Manali ${themeNameClean} Packages`;
  } else if (categoryKey === 'shimla-manali') {
    displayTitle = `Shimla-Manali ${themeNameClean} Combos`;
  } else if (categoryKey === 'himachal') {
    displayTitle = `Himachal Circuit ${themeNameClean} Tours`;
  } else {
    displayTitle = `${defaults.locationLabel} ${themeNameClean} Tours`;
  }

  let link = `/destinations/${categoryKey}?theme=${themeId}`;
  if (categoryKey === 'shimla-manali') {
    link = `/destinations/combo?theme=${themeId}&sub=shimla-manali`;
  } else if (categoryKey === 'himachal') {
    link = `/destinations/combo?theme=${themeId}&sub=himachal`;
  }

  let browseText = `Browse ${categoryKey.toUpperCase()} Packages`;
  if (categoryKey.includes('combo') || categoryKey === 'himachal' || categoryKey === 'shimla-manali') {
    browseText = 'Browse Combos';
  }

  return {
    id: categoryKey,
    title: displayTitle,
    tagline: themeSpecific.tagline || defaults.tagline,
    desc: themeSpecific.desc || defaults.desc,
    image: defaults.image,
    badge: themeSpecific.badge || defaults.badge,
    locationLabel: defaults.locationLabel,
    link: link,
    browseText: browseText
  };
}

function HoneymoonLandingPage({ meta, cards, activeTheme }) {
  return (
    <div className="honeymoon-landing page-padding-top">
      {/* Hero Section */}
      <section 
        className="honeymoon-hero" 
        style={{ backgroundImage: `url(${honeymoonHeroImg})` }}
      >
        <div className="honeymoon-hero-overlay"></div>
        <div className="container honeymoon-hero-content">
          <span className="honeymoon-hero-badge">
            <Heart size={14} style={{ fill: 'currentColor' }} />
            Exclusive Honeymoon Collection
          </span>
          <h1 className="honeymoon-hero-title">
            Begin Your Journey in the <span>Himalayan Peaks</span>
          </h1>
          <p className="honeymoon-hero-subtitle">
            Experience the scenic valleys of Shimla and Manali with completely private vehicle transfers, personalized travel pacing, and handpicked local stays.
          </p>
          <div className="honeymoon-hero-actions">
            <a href="#honeymoon-packages" className="btn btn-primary">
              View Packages
            </a>
            <Link to="/custom-trip" className="btn btn-secondary">
              <Sparkles size={16} />
              Customize Your Trip
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Benefits Bar */}
      <div className="honeymoon-trust-bar">
        <div className="container">
          <div className="honeymoon-trust-grid">
            <div className="honeymoon-trust-item">
              <div className="honeymoon-trust-icon">
                <Users size={20} />
              </div>
              <div className="honeymoon-trust-text">
                <h4>100% Private Cars</h4>
                <p>No sharing, only for you two</p>
              </div>
            </div>
            <div className="honeymoon-trust-item">
              <div className="honeymoon-trust-icon">
                <MapPin size={20} />
              </div>
              <div className="honeymoon-trust-text">
                <h4>Bespoke Itineraries</h4>
                <p>Tailored sightseeing routes</p>
              </div>
            </div>
            <div className="honeymoon-trust-item">
              <div className="honeymoon-trust-icon">
                <Sparkles size={20} />
              </div>
              <div className="honeymoon-trust-text">
                <h4>Dedicated Support</h4>
                <p>24/7 travel desk assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Honeymoon Packages */}
      <section id="honeymoon-packages" className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '50px', textAlign: 'center' }}>
            <span className="section-subtitle">Select Your Package</span>
            <h2 className="section-title">Handcrafted Packages</h2>
            <p className="section-desc" style={{ maxWidth: '640px', margin: '0 auto' }}>
              Explore the perfect combination of heritage towns, pine forests, and high altitude snow points.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            marginTop: '40px'
          }}>
            {cards.map((card) => (
              <Link 
                key={card.id} 
                to={card.link}
                className="destination-card glass-panel glow-effect clickable-card"
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  color: 'inherit',
                  borderRadius: '24px',
                  background: 'rgba(255, 255, 255, 0.85)',
                  border: '1px solid rgba(255,255,255,0.7)',
                  boxShadow: '0 12px 30px rgba(31,41,55,0.04)'
                }}
              >
                <div className="card-image-wrapper" style={{ height: '240px' }}>
                  <img src={card.image} alt={card.title} className="card-image" style={{ height: '100%', width: '100%', objectFit: 'cover' }} loading="lazy" />
                  <div className="card-badges">
                    <span className="badge badge-primary card-badge" style={{ padding: '6px 12px', fontSize: '0.75rem' }}>{card.badge}</span>
                  </div>
                </div>

                <div className="card-content" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, padding: '28px', textAlign: 'left' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                    <MapPin size={12} />
                    <span>{card.locationLabel}</span>
                  </div>
                  
                  <h3 className="card-title" style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '10px' }}>{card.title}</h3>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 700, display: 'block', marginBottom: '8px' }}>{card.tagline}</strong>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>{card.desc}</p>
                  
                  <div className="card-link" style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '0.92rem' }}>
                    <span>{card.browseText}</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Perks Inclusions Section */}
      <section className="honeymoon-perks-section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-subtitle">What's Included</span>
            <h2 className="section-title">Included Services</h2>
            <p className="section-desc" style={{ maxWidth: '640px', margin: '0 auto' }}>
              We manage the transportation, local coordination, and lodging so you can explore Himachal comfortably.
            </p>
          </div>

          <div className="honeymoon-perks-grid">
            <div className="honeymoon-perk-card">
              <div className="honeymoon-perk-icon-wrapper">
                <Users size={24} />
              </div>
              <h3>100% Private Transfers</h3>
              <p>Exclusive private SUV or Sedan with professional drivers dedicated only to you for the entire tour.</p>
            </div>
            <div className="honeymoon-perk-card">
              <div className="honeymoon-perk-icon-wrapper">
                <MapPin size={24} />
              </div>
              <h3>Curated Handpicked Hotels</h3>
              <p>Comfortable stays chosen for quality service, excellent reviews, and cozy mountain atmospheres.</p>
            </div>
            <div className="honeymoon-perk-card">
              <div className="honeymoon-perk-icon-wrapper">
                <Sparkles size={24} />
              </div>
              <h3>Flexible Travel Pace</h3>
              <p>No rushed tour groups. Relax, take photos, and explore scenic viewpoints at your own comfortable pace.</p>
            </div>
            <div className="honeymoon-perk-card">
              <div className="honeymoon-perk-icon-wrapper">
                <Calendar size={24} />
              </div>
              <h3>24/7 Travel Desk</h3>
              <p>Direct contact with our local team throughout your journey for seamless pickups and adjustments.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ThemePage() {
  const { theme } = useParams();
  const activeTheme = theme ? theme.toLowerCase() : 'honeymoon';
  const meta = themeMetadata[activeTheme] || themeMetadata.honeymoon;

  const IconComponent = meta.icon;

  // Filter packages matching activeTheme
  const matchingPkgs = packagesData.filter(pkg => {
    const themes = getPackageThemes(pkg);
    return themes.includes(activeTheme);
  });

  // Collect distinct category / sub-category keys
  const presentKeys = new Set();
  matchingPkgs.forEach(pkg => {
    if (pkg.category === 'combo') {
      const sub = getPackageSubCategory(pkg);
      if (sub) presentKeys.add(sub);
    } else {
      presentKeys.add(pkg.category);
    }
  });

  // Define preferred/default order of keys
  const orderedCategoryKeys = ['shimla', 'manali', 'shimla-manali', 'himachal'];
  const finalKeys = [];

  orderedCategoryKeys.forEach(key => {
    if (presentKeys.has(key)) {
      finalKeys.push(key);
    }
  });

  presentKeys.forEach(key => {
    if (!orderedCategoryKeys.includes(key)) {
      finalKeys.push(key);
    }
  });

  // Map keys to metadata cards
  const cards = finalKeys.map(key => getCategoryMetadata(key, meta.title, activeTheme));

  if (activeTheme === 'honeymoon') {
    return (
      <HoneymoonLandingPage 
        meta={meta} 
        cards={cards} 
        activeTheme={activeTheme} 
      />
    );
  }

  return (
    <div className="destinations-page page-padding-top">
      <section className="section theme-packages-section">
        <div className="mesh-bg">
          <div className="mesh-glow mesh-glow-1" style={{ opacity: 0.08 }}></div>
          <div className="mesh-glow mesh-glow-2" style={{ opacity: 0.08 }}></div>
        </div>

        <div className="container">
          {/* Header */}
          <div className="section-header" style={{ marginBottom: '50px', textAlign: 'center' }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,255,255,0.7)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px',
              border: '1px solid rgba(31, 41, 55, 0.08)', boxShadow: '0 4px 12px rgba(31, 41, 55, 0.05)',
              color: meta.iconColor
            }}>
              <IconComponent size={28} />
            </div>
            <span className="section-subtitle">{meta.subtitle}</span>
            <h1 className="section-title">{meta.title}</h1>
            <p className="section-desc" style={{ maxWidth: '720px', margin: '0 auto' }}>
              {meta.desc}
            </p>
          </div>

          {/* Grid Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            marginTop: '40px'
          }}>
            {cards.map((card) => (
              <Link 
                key={card.id} 
                to={card.link}
                className="destination-card glass-panel glow-effect clickable-card"
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  color: 'inherit',
                  borderRadius: '24px',
                  background: 'rgba(255,255,255,0.85)',
                  border: '1px solid rgba(255,255,255,0.7)',
                  boxShadow: '0 12px 30px rgba(31,41,55,0.04)'
                }}
              >
                <div className="card-image-wrapper" style={{ height: '240px' }}>
                  <img src={card.image} alt={card.title} className="card-image" style={{ height: '100%', width: '100%', objectFit: 'cover' }} loading="lazy" />
                  <div className="card-badges">
                    <span className="badge badge-primary card-badge" style={{ padding: '6px 12px', fontSize: '0.75rem' }}>{card.badge}</span>
                  </div>
                </div>

                <div className="card-content" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, padding: '28px', textAlign: 'left' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                    <MapPin size={12} />
                    <span>{card.locationLabel}</span>
                  </div>
                  
                  <h3 className="card-title" style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '10px' }}>{card.title}</h3>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 700, display: 'block', marginBottom: '8px' }}>{card.tagline}</strong>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>{card.desc}</p>
                  
                  <div className="card-link" style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '0.92rem' }}>
                    <span>{card.browseText}</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Guide Note */}
          <div className="guide-notes-panel" style={{ marginTop: '50px' }}>
            <div className="guide-notes-icon-wrapper">
              <Sparkles size={24} style={{ color: 'var(--primary)' }} />
            </div>
            <div className="guide-notes-content">
              <h3 className="guide-notes-title">
                Customizing Your {meta.title.replace(' Packages', '')}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginTop: '6px' }}>
                All of our theme packages are fully flexible. You can add extra nights, request specific hotel options (luxury resort, boutique forest stay, or local homestay), and choose your pickup vehicle. Launch our <strong>Trip Planner</strong> to custom build your exact itinerary!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
