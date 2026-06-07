import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Check, X, ArrowLeft, Send, Sparkles, ShieldCheck, MapPin, PhoneCall } from 'lucide-react';
import destManaliImg from '../../../assets/manali_1.jpg';
import RouteMap from '../../../components/RouteMap';

const ROUTE_MAP_DATA = {
  title: "Manali 2N/3D from Chandigarh",
  stops: [
    { lat: 30.6680, lng: 76.8070, name: "Chandigarh Pickup", desc: "Pickup from Chandigarh railway station, airport, or bus stand.", type: "pickup" },
    { lat: 31.5265, lng: 76.9219, name: "Sundernagar", desc: "Scenic reservoir town on the Mandi highway.", type: "town" },
    { lat: 31.6630, lng: 77.0470, name: "Pandoh Dam", desc: "Dam on the Beas river. Panoramic photo stop.", type: "dam" },
    { lat: 31.7089, lng: 76.9320, name: "Mandi", desc: "Gateway to the Kullu Valley. Ancient temple town.", type: "heritage" },
    { lat: 31.9579, lng: 77.1095, name: "Kullu", desc: "Kullu shawl market and Beas river views.", type: "market" },
    { lat: 32.2432, lng: 77.1543, name: "Hadimba Devi Temple", desc: "450-year-old temple set in ancient cedar forest.", type: "temple" },
    { lat: 32.3722, lng: 77.2466, name: "Rohtang Pass", desc: "3978m glaciers. Full-day excursion with sledge rides.", type: "mountain" },
    { lat: 32.3154, lng: 77.1546, name: "Solang Valley", desc: "Paragliding, ski slopes, and Beas river views.", type: "adventure" },
    { lat: 32.2729, lng: 77.1741, name: "Nehru Kund", desc: "Natural spring named after Jawaharlal Nehru.", type: "nature" },
    { lat: 30.6680, lng: 76.8070, name: "Chandigarh Drop", desc: "Drop at Chandigarh airport or railway station.", type: "drop" },
  ]
};

const PAGE_DETAILS = {
  title: "Manali 2N/3D package from Chandigarh / Kalka",
  tagline: "Hadimba Devi temple, Rahalla falls, Solang Valley, Marhi & Nehru Kund excursion",
  badge: "Quick Escape",
  image: destManaliImg,
  price: "₹16,000",
  priceDetails: "Starts from ₹16,000 for two adults",
  duration: "2 Nights / 3 Days",
  category: "manali",
  
  overview: "Explore the valley of Gods with our Manali 2 Nights / 3 Days package. Enjoy scenic road transitions from Chandigarh or Kalka, visit the historic Hadimba temple, take in the glacial scenery at Rohtang Pass, Rahalla Falls, and adventure sports at Solang Valley.",
  
  itinerary: [
    {
      day: 1,
      title: "Chandigarh - Manali Drive",
      desc: "Pickup from Chandigarh Railway station / airport and drive to Manali the valley of Gods. Enjoy the Scenic Himalayas and the Beas river from the window of your cab. On the way you can have a stop over at Sunder Nagar Lake, Pandoh dam on river Beas and Kullu if time permits. It will take 8 to 10 hours to reach Manali and the distance is 310 Kms. The cab will pass through Bilaspur, Sundernagar, Mandi and Kullu on the way to Manali. Check in and overnight stay in Manali."
    },
    {
      day: 2,
      title: "Manali Snow-point / Rohtang Pass & Local sightseeing",
      desc: "Early Morning proceed for full day tour of Rohtang Pass after visiting Hadimba Devi temple first. The majesty of the mountains and the glaciers can be seen at their best on the way to Rohtang pass. After enjoying this snowy heaven, take a sledge ride down the slopes & try luck by climbing the little snow hills. On descending to Manali, halt at Rahalla falls, Marhi, Nehru Kund, and Solang Valley. Night stay in Manali."
    },
    {
      day: 3,
      title: "Manali - Chandigarh Departure",
      desc: "Checkout from Hotel and drive towards Chandigarh. Dropping at Chandigarh railway station / airport for onward journey."
    }
  ],
  
  inclusions: [
    "Welcome drink on arrival (non alcoholic)",
    "Vegetarian breakfast and dinner (Note: vegetarian meals served in Sunrise Villa Shimla)",
    "Transport services by an exclusive private vehicle as per itinerary",
    "All applicable state toll taxes, parking fees, and driver allowance"
  ],
  
  exclusions: [
    "Honeymoon Package add-on (flower decoration, cake, candle light dinner) - extra Rs 1,000",
    "Adventure rides, sledge rides, and local guides",
    "Lunch, laundry, and personal shopping"
  ]
};

export default function Manali2N3DChandigarh() {
  const backPath = `/destinations/${PAGE_DETAILS.category}`;

  return (
    <div className="package-detail-page">
      {/* Full-width Premium Hero Banner */}
      <div 
        className="detail-hero-banner"
        style={{ backgroundImage: `url(${PAGE_DETAILS.image})` }}
      >
        <div className="detail-hero-overlay"></div>
        <div className="container detail-hero-container">
          <Link to={backPath} className="detail-back-btn-pill">
            <ArrowLeft size={16} />
            <span>Back to {PAGE_DETAILS.category === 'combo' ? 'Combo' : PAGE_DETAILS.category.toUpperCase()} Destinations</span>
          </Link>
          
          <div className="detail-hero-content-box">
            {PAGE_DETAILS.badge && (
              <span className="premium-glow-badge">
                <Sparkles size={12} className="sparkle-icon" />
                {PAGE_DETAILS.badge}
              </span>
            )}
            <h1 className="detail-hero-title">{PAGE_DETAILS.title}</h1>
            <p className="detail-hero-tagline">{PAGE_DETAILS.tagline}</p>
          </div>
        </div>
      </div>

      {/* Overlapping Quick Facts Dashboard */}
      <div className="container facts-dashboard-wrapper">
        <div className="detail-facts-dashboard glass-panel glow-effect">
          <div className="detail-fact-item">
            <div className="fact-icon-circle accent-glow">
              <Sparkles size={20} style={{ color: 'var(--primary)' }} />
            </div>
            <div className="fact-text-group">
              <span className="detail-fact-label">Budget Range</span>
              <strong className="detail-fact-val">{PAGE_DETAILS.price}</strong>
              <span className="detail-fact-sub">{PAGE_DETAILS.priceDetails}</span>
            </div>
          </div>
          
          <div className="dashboard-vertical-divider"></div>
          
          <div className="detail-fact-item">
            <div className="fact-icon-circle secondary-glow">
              <Clock size={20} style={{ color: 'var(--secondary)' }} />
            </div>
            <div className="fact-text-group">
              <span className="detail-fact-label">Duration</span>
              <strong className="detail-fact-val">{PAGE_DETAILS.duration}</strong>
              <span className="detail-fact-sub">Total Days & Nights</span>
            </div>
          </div>
          
          <div className="dashboard-vertical-divider"></div>
          
          <div className="detail-fact-item">
            <div className="fact-icon-circle primary-glow">
              <Sparkles size={20} style={{ color: 'var(--primary)', fill: 'var(--primary)' }} />
            </div>
            <div className="fact-text-group">
              <span className="detail-fact-label">Itinerary</span>
              <strong className="detail-fact-val">Customizable</strong>
              <span className="detail-fact-sub">Tailored to Your Pace</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container detail-content-container">
        <div className="detail-content-grid">
          
          {/* Left Main Column */}
          <div className="detail-main-col">
            {/* Overview Panel */}
            <div className="detail-overview-panel glass-panel">
              <h2 className="detail-section-title">
                <ShieldCheck size={24} className="section-title-icon" />
                <span>Tour Overview</span>
              </h2>
              <p className="detail-overview-text">{PAGE_DETAILS.overview}</p>
            </div>

            {/* Day by Day Itinerary */}
            <div className="detail-itinerary-panel">
              <h2 className="detail-section-title" style={{ marginBottom: '32px' }}>
                <MapPin size={24} className="section-title-icon" />
                <span>Day-by-Day Itinerary</span>
              </h2>
              
              <div className="timeline-list">
                {PAGE_DETAILS.itinerary.map((dayItem, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-dot-circle">
                      <span>{dayItem.day}</span>
                    </div>
                    <div className="timeline-card glass-panel glow-effect">
                      <div className="timeline-card-header">
                        <span className="timeline-day-tag">Day {dayItem.day}</span>
                        <h3 className="timeline-card-title">{dayItem.title}</h3>
                      </div>
                      <p className="timeline-card-desc">{dayItem.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sticky Sidebar Column */}
          <div className="detail-sidebar-col">
            <div className="sidebar-sticky-panel">
              {/* Inquiry & Cost Summary Card */}
              <div className="sidebar-card glass-panel booking-card glow-effect">
                <div className="booking-card-header">
                  <span className="booking-sub">Estimated Tour Cost</span>
                  <div className="booking-price-row">
                    <span className="booking-price">{PAGE_DETAILS.price}</span>
                    <span className="booking-per">Package Price</span>
                  </div>
                  <p className="booking-price-details">{PAGE_DETAILS.priceDetails}</p>
                </div>

                <div className="booking-features-list">
                  <div className="booking-feature-item">
                    <Check size={16} className="feature-check" />
                    <span>Private dedicated vehicle for all sightseeing</span>
                  </div>
                  <div className="booking-feature-item">
                    <Check size={16} className="feature-check" />
                    <span>Premium hotels recommended by our experts</span>
                  </div>
                  <div className="booking-feature-item">
                    <Check size={16} className="feature-check" />
                    <span>Vegetarian breakfast & dinner included</span>
                  </div>
                </div>

                <Link 
                  to="/contact" 
                  state={{ selectedPackage: PAGE_DETAILS.title }}
                  className="btn btn-accent booking-cta-btn"
                >
                  <span>Inquire / Customize Now</span>
                  <Send size={16} />
                </Link>
              </div>

              {/* Inclusions & Exclusions Card */}
              <div className="sidebar-card glass-panel inclusions-card">
                <h3 className="sidebar-card-title">Inclusions & Exclusions</h3>
                
                <div className="inc-exc-section">
                  <span className="inc-exc-heading inc-color">What's Included</span>
                  <ul className="inc-exc-list">
                    {PAGE_DETAILS.inclusions.map((inc, i) => (
                      <li key={i} className="inc-exc-item">
                        <Check size={14} className="inc-icon" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="inc-exc-divider"></div>

                <div className="inc-exc-section">
                  <span className="inc-exc-heading exc-color">What's Excluded</span>
                  <ul className="inc-exc-list">
                    {PAGE_DETAILS.exclusions.map((exc, i) => (
                      <li key={i} className="inc-exc-item">
                        <X size={14} className="exc-icon" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Company Trust Section */}
              <div className="sidebar-card glass-panel trust-card">
                <h3 className="sidebar-card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={18} style={{ color: 'var(--secondary)' }} />
                  <span>Sunrise Travels Promise</span>
                </h3>
                <div className="trust-items-list">
                  <div className="trust-item">
                    <strong>100% Tailor-Made</strong>
                    <p>Custom itineraries built around your budget & pace.</p>
                  </div>
                  <div className="trust-item">
                    <strong>Local Expertise</strong>
                    <p>Based in Shimla since 2011. Local drivers & guides.</p>
                  </div>
                  <div className="trust-item">
                    <strong>Trusted Service</strong>
                    <p>Own Sunrise Villa in Shimla & hotel associations. Approved by HP Tourism.</p>
                  </div>
                </div>
                <div className="trust-support-footer" style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid rgba(79, 99, 184, 0.15)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', fontWeight: '700', color: 'var(--secondary)' }}>
                    <PhoneCall size={14} />
                    <span>Travel Helpdesk: +91 89887 94801</span>
                  </div>
                  <span style={{ fontSize: '0.78rem', opacity: 0.8, color: 'var(--text-muted)' }}>Landline: 0177-2661991</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Interactive Route Map */}
      <RouteMap routeData={ROUTE_MAP_DATA} />
    </div>
  );
}
