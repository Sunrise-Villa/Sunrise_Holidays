import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Check, X, ArrowLeft, Send, Sparkles, ShieldCheck, MapPin, PhoneCall } from 'lucide-react';
const destKufriImg = "https://cdn.jsdelivr.net/gh/Sunrise-Villa/Sunrise_Holidays@main/src/assets/Himachal_3.webp";
const destShimlaImg = "https://cdn.jsdelivr.net/gh/Sunrise-Villa/Sunrise_Holidays@main/src/assets/Shimla_1.webp";
const destManaliImg = "https://cdn.jsdelivr.net/gh/Sunrise-Villa/Sunrise_Holidays@main/src/assets/manali_1.webp";
const destRohtangImg = "https://cdn.jsdelivr.net/gh/Sunrise-Villa/Sunrise_Holidays@main/src/assets/Himachal_1.webp";
import RouteMap from '../../../components/RouteMap';

const imageMap = {
  destKufriImg,
  destShimlaImg,
  destManaliImg,
  destRohtangImg
};

const ROUTE_MAP_DATA = {
  title: "Shimla Manali Dharamshala Dalhousie Chandigarh 8N/9D package from Delhi",
  stops: [
    { lat: 28.6139, lng: 77.2090, name: "Delhi Pickup", desc: "Start journey from Delhi", type: "pickup" },
    { lat: 31.1186, lng: 77.1200, name: "Sunrise Villa, Shoghi", desc: "Stay at Sunrise Villa property", type: "stay" },
    { lat: 31.0989, lng: 77.2640, name: "Kufri", desc: "Snow viewpoint & park", type: "adventure" },
    { lat: 31.6700, lng: 77.0600, name: "Pandoh & Kullu", desc: "Scenic highway stops", type: "nature" },
    { lat: 32.2470, lng: 77.1820, name: "Hadimba Temple & Rohtang", desc: "Temples and high pass glaciers", type: "adventure" },
    { lat: 32.2190, lng: 76.3230, name: "Dharamshala", desc: "Dalai Lama residence", type: "landmark" },
    { lat: 32.5387, lng: 75.9710, name: "Dalhousie", desc: "Colonial town", type: "town" },
    { lat: 32.5540, lng: 76.0620, name: "Khajjiar", desc: "Switzerland of India Meadows", type: "nature" },
    { lat: 30.7422, lng: 76.8188, name: "Sukhna Lake, Chandigarh", desc: "Chandigarh lake and rock gardens", type: "nature" },
    { lat: 28.6139, lng: 77.2090, name: "Delhi Drop", desc: "Drop-off in Delhi", type: "drop" }
  ]
};

const PAGE_DETAILS = {
  title: "Shimla Manali Dharamshala Dalhousie Chandigarh 8N/9D package from Delhi",
  tagline: "Comprehensive tour including scenic Shimla-Manali roads and Chandigarh city tour",
  badge: "Himalayan Explorer",
  image: imageMap.destKufriImg,
  price: "₹47,000",
  priceDetails: "Starts from ₹47,000 for two adults",
  duration: "8 Nights / 9 Days",
  category: "combo",
  
  overview: "A complete Himalayan Grand tour ending with Chandigarh sightseeing. Drive through mountain paths to Shimla and Kufri, transit to Manali valley of gods, visit McLeodganj spiritual centres, explore Khajjiar saucer lake, check into Chandigarh to visit the Sukhna Lake and Rock Garden, and drop off in Delhi.",
  
  itinerary: [
    {
      day: 1,
      title: "Delhi - Shimla Drive",
      desc: "Pickup from Delhi Airport / Railway Station / Bus Stand by exclusive vehicle. Drive to Shimla, Shimla is 370 Kilometers from Delhi and will take 7:30-8:00 hours to reach. Enjoy the Scenic Himalayas from the window of your cab when you enter Himachal Pradesh . On the ways, stopover at Pinjore Garden and rope way at Timber Trail Resort if time permits. Cab will pass through Panipat, Kurukshetra, Ambala, Kalka, Parwanoo, Barog and Solan on the way to Shimla. Check in and overnight stay in Hotel."
    },
    {
      day: 2,
      title: "Kufri Shimla Local",
      desc: "After Breakfast Travel towards the famous hill spot of Kufri. Stop over at Sankat Mochan Temple on the way. Get yourself free to enjoy the scenic beauty of Wild Flower Hall, Kufri. Fagu, and Indira Gandhi Holiday Home. Enjoy horse riding (optional) in the apple orchards Optional). In the evening explore Shimla city on foot as vehicle entry is prohibited. You can see prime places of Shimla like Lakkar Bazaar, Ridge, Church, Mall road, Scandal Point, Kali Bari temple etc. Ideal time for shopping and eating out at restaurants on the mall road."
    },
    {
      day: 3,
      title: "Shimla - Manali Drive",
      desc: "Morning check out from the Hotel & drive to Manali (7-8 Hours), valley of Gods, is a combination of natural splendour and rich cultural heritage. On the way stop a while at Pandoh and Kullu. Rest of the day at leisure. Night stay in Manali."
    },
    {
      day: 4,
      title: "Manali Snow-point / Rohtang Pass",
      desc: "Early Morning proceed for full day tour of Rohtang Pass after visiting Hadimba Devi Temple. The majesty of the mountains and the glaciers can be seen at their best on the way to Rohtang pass. After enjoying this snowy heaven, take a sledge ride down the slopes & try luck by climbing the little snow hills. On descending to Manali, halt at the Rahalla falls and Solang Valley. The Magnificent views and natural beauty are a never-ending source of delight. Also halt at Marhi, Ralha falls, Nehru Kund. Night stay in Manali."
    },
    {
      day: 5,
      title: "Manali - Dharamshala Drive",
      desc: "After breakfast check out from the Hotel & drive to Dharamshala. Dharamshala is 235 kms from Manali and journey time is five to six hours. Arrive & transfer to hotel. Rest of the day at leisure. Night stay in Dharamshala."
    },
    {
      day: 6,
      title: "Dharamshala - Dalhousie Drive",
      desc: "Sightseeing of Dharamshala covering Official residence of Dalai Lama the exiled Tibetan Leader, McLeodganj, Dal lake etc.  Drive to Dalhousie (4 hrs. 115 kms), situated at 2039 mts in the outer slopes of the Dhaula Dhar range with its natural beauty and natural surroundings. Arrive & transfer to hotel. Rest of the day at leisure. Night stay in Dalhousie."
    },
    {
      day: 7,
      title: "Dalhousie - Khajjiar Excursion",
      desc: "Morning drive to Khajjiar, one of the most scenic saucer shaped Plateau and is surrounded by dense pine and deodar forests, its beauty has further been enhanced by a small lake in the center. This place is also called the Switzerland of India and a stone brought from Switzerland has been installed here.  Return to Dalhousie in the evening."
    },
    {
      day: 8,
      title: "Dalhousie - Chandigarh Drive",
      desc: "Morning Checkout from Dalhousie and drive to Chandigarh. The journey  time is about 7 hours ( 321 kilometers).  Visit Sector 17 plaza in the evening. Check at Hotel in Chandigarh"
    },
    {
      day: 9,
      title: "Chandigarh Sightseeing & Delhi Drop-off",
      desc: "Sight seeing at Chandigarh which includes Sukhna Lake and Rock Garden . After that Drive to Delhi and  the cab will drop you  New Delhi Railway Station / bus station / Airport.  Chandigarh Delhi travel time is 5  hours (250 Kilometers)"
    }
  ],
  
  inclusions: [
    "Welcome drink on arrival (non alcoholic)",
    "Breakfast and dinner. (only vegetarian meals served in Sunrise Villa Shimla)",
    "Transport services by an exclusive vehicle as per itinerary.",
    "All applicable taxes",
    "Honeymoon Package add-on like flower decoration, honeymoon cake, candle light dinner etc. will cost Rs 1000 extra"
  ],
  
  exclusions: [
    "Monument entry fees and camera tickets",
    "Adventure rides, horse or yak rides at Kufri",
    "Meals not specified (lunches), laundry, and shopping",
    "Tips to driver or hotel staff"
  ]
};

export default function ShimlaManaliDharamshalaDalhousieChandigarh8n9dDelhi() {
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
