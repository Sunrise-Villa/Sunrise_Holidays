import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Check, X, ArrowLeft, Send, Sparkles, ShieldCheck, MapPin, PhoneCall } from 'lucide-react';
import destKufriImg from '../../../assets/Shimla_2.jpg';
import RouteMap from '../../../components/RouteMap';

const ROUTE_MAP_DATA = {
  title: "Shimla 3N/4D from Chandigarh",
  stops: [
    { lat: 30.6680, lng: 76.8070, name: "Chandigarh Pickup", desc: "Pickup from Chandigarh railway station, airport, or bus stand.", type: "pickup" },
    { lat: 30.7987, lng: 76.9182, name: "Pinjore Gardens", desc: "Mughal-style heritage terraced garden. Optional en-route stop.", type: "nature" },
    { lat: 30.8372, lng: 76.9618, name: "Timber Trail, Parwanoo", desc: "Iconic ropeway resort above the Shivalik foothills.", type: "adventure" },
    { lat: 31.1186, lng: 77.1200, name: "Sunrise Villa, Shoghi", desc: "Stay at Sunrise Villa property in Shoghi.", type: "stay" },
    { lat: 31.0780, lng: 77.1130, name: "Tara Devi Temple", desc: "Hilltop temple with panoramic views of Shimla.", type: "temple" },
    { lat: 31.0830, lng: 77.1350, name: "Sankat Mochan Temple", desc: "Revered Hanuman temple near Shimla.", type: "temple" },
    { lat: 31.1125, lng: 77.1775, name: "Jakhoo Temple", desc: "Famous Hanuman temple atop Jakhu Hill with city views.", type: "temple" },
    { lat: 31.1048, lng: 77.1734, name: "The Ridge & Mall Road", desc: "Shimla's pedestrian promenade, churches, and bazaar.", type: "market" },
    { lat: 31.0989, lng: 77.2640, name: "Kufri", desc: "Snow slopes, Himalayan National Park, horse rides.", type: "adventure" },
    { lat: 31.1290, lng: 77.2250, name: "Mashobra", desc: "Apple orchards and scenic forest walks.", type: "nature" },
    { lat: 31.1500, lng: 77.1200, name: "Naldehra", desc: "India's oldest 18-hole golf course amid deodar forests.", type: "nature" },
    { lat: 30.6680, lng: 76.8070, name: "Chandigarh Drop", desc: "Drop at Chandigarh airport or railway station.", type: "drop" },
  ]
};

const PAGE_DETAILS = {
  title: "Shimla 3N/4D package from Chandigarh",
  tagline: "Colonial heritage museums, Jakhoo temple, Kufri, Naldehra golf course & Mashobra apple orchards",
  badge: "Best Seller",
  image: destKufriImg,
  price: "₹14,500",
  priceDetails: "Starts from ₹14,500 for two adults",
  duration: "3 Nights / 4 Days",
  category: "shimla",
  
  overview: "A complete four-day leisure tour covering Shimla heritage sites, Kufri snow parks, Mashobra apple orchards, and Naldehra forest walks, with custom pickups and drop-offs at Chandigarh.",
  
  itinerary: [
    {
      day: 1,
      title: "Chandigarh - Shimla Drive",
      desc: "Pickup from Chandigarh Airport / Railway Station / Bus Stand by exclusive vehicle. Drive to Shimla, Shimla is 117 Kilometers from Chandigarh and will take 2:30-3:00 hours to reach. Enjoy the Scenic Himalayas from the window of your cab. On the ways, stopover at Pinjore Garden and ropeway at Timber Trail Resort if time permits. Cab will pass through Kalka, Parwanoo, Barog and Solan on the way to Shimla. Check in and overnight stay in Hotel."
    },
    {
      day: 2,
      title: "Shimla Local Sightseeing",
      desc: "After Breakfast , visit to the years old Tara Devi Temple, Sankat Mochan Temple, visit Indian Institute of advance Studies, Army Museum, Jakhoo temple. In the evening explore Shimla city on foot as vehicle entry is prohibited . You can see prime places of Shimla like , Lakkar Bazaar, Ridge, Church, Mall road, Scandal Point, Kali Bari temple etc. Ideal time for shopping and eating out at restaurants on the mall road."
    },
    {
      day: 3,
      title: "Excursion to Kufri, Naldehra & Mashobra",
      desc: "After Breakfast , visit to the famous picnic spots around Shimla which include Fagu, Kufri, Naldehra and Mashobra. Enjoy horse / Yak ride, see Himalayan national park at Kufri. See apple orchards at Mashobra, Golf course and Jungle walks in Naldehra."
    },
    {
      day: 4,
      title: "Shimla - Chandigarh Departure",
      desc: "After breakfast check out from hotel and travel to Chandigarh and dropping at Airport / railway station. On the way stopover at Pinjore Garden and ropeway at Timber Trail Resort if time permits"
    }
  ],
  
  inclusions: [
    "Welcome drink on arrival (non alcoholic)",
    "Breakfast and dinner (Note: only vegetarian meals served in Sunrise Villa Shimla)",
    "Transport services by an exclusive vehicle as per itinerary.",
    "All applicable taxes"
  ],
  
  exclusions: [
    "Adventure rides, horse or yak rides at Kufri",
    "Golf course green fees or local guide charges at Naldehra",
    "Meals not specified (lunches), laundry, and shopping",
    "Tips to driver or hotel staff"
  ]
};

export default function Shimla3N4DChandigarh() {
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
                    <span>Breakfast & dinner included</span>
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
