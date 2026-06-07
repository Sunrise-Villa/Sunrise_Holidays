import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Check, X, ArrowLeft, Send, Sparkles, ShieldCheck, MapPin, PhoneCall } from 'lucide-react';
const destRohtangImg = "https://cdn.jsdelivr.net/gh/Sunrise-Villa/Sunrise_Holidays@main/src/assets/Himachal_4.jpg";
import RouteMap from '../../../components/RouteMap';

const ROUTE_MAP_DATA = {
  title: "Shimla-Manali-Chandigarh 7N/8D from Delhi",
  stops: [
    { lat: 28.6421, lng: 77.2195, name: "Delhi Pickup", desc: "Pickup from New Delhi railway station or airport.", type: "pickup" },
    { lat: 30.7987, lng: 76.9182, name: "Pinjore Gardens", desc: "Mughal terraced garden en route to Shimla.", type: "nature" },
    { lat: 31.1186, lng: 77.1200, name: "Sunrise Villa, Shoghi", desc: "Stay at Sunrise Villa property in Shoghi.", type: "stay" },
    { lat: 31.0780, lng: 77.1130, name: "Tara Devi Temple", desc: "Panoramic hilltop temple.", type: "temple" },
    { lat: 31.0830, lng: 77.1350, name: "Sankat Mochan Temple", desc: "Revered Hanuman temple near Shimla.", type: "temple" },
    { lat: 31.1048, lng: 77.1734, name: "The Ridge & Mall Road", desc: "Shimla heritage walk.", type: "market" },
    { lat: 31.0989, lng: 77.2640, name: "Kufri", desc: "Snow slopes, yak rides.", type: "adventure" },
    { lat: 31.1500, lng: 77.1200, name: "Naldehra", desc: "Golf course in deodar forest.", type: "nature" },
    { lat: 31.7089, lng: 76.9320, name: "Mandi", desc: "Gateway to Kullu Valley.", type: "town" },
    { lat: 31.9579, lng: 77.1095, name: "Kullu", desc: "Beas river and shawl markets.", type: "market" },
    { lat: 32.2432, lng: 77.1543, name: "Hadimba Devi Temple", desc: "450-year-old cedarwood temple.", type: "temple" },
    { lat: 32.2611, lng: 77.1810, name: "Vashisht Hot Springs", desc: "Sulphur spring baths.", type: "springs" },
    { lat: 32.3722, lng: 77.2466, name: "Rohtang Pass", desc: "3978m glaciers. Sledge rides.", type: "mountain" },
    { lat: 30.7519, lng: 76.8025, name: "Chandigarh", desc: "Drive back to Chandigarh. Market visit.", type: "town" },
    { lat: 28.6421, lng: 77.2195, name: "Delhi Drop", desc: "Return drive to Delhi. Drop at station.", type: "drop" },
  ]
};

const PAGE_DETAILS = {
  title: "Shimla Manali Chandigarh 7N/8D package from Delhi",
  tagline: "Complete package with Kufri, Naldehra, Rohtang glaciers & Chandigarh Rock Garden stay",
  badge: "Premium Combo",
  image: destRohtangImg,
  price: "₹40,000",
  priceDetails: "Starts from ₹40,000 for two adults",
  duration: "7 Nights / 8 Days",
  category: "combo",
  
  overview: "Our ultimate 8-day package from Delhi. Explore Kufri and Naldehra around Shimla, Hadimba and Rohtang glaciers in Manali, check-in to Chandigarh for local garden sights, and return comfortably to Delhi.",
  
  itinerary: [
    {
      day: 1,
      title: "Delhi - Shimla Highway Drive",
      desc: "Pickup from Delhi Airport / Railway Station / Bus Stand by exclusive vehicle. Drive to Shimla, Shimla is 370 Kilometers from Delhi and will take 7:30-8:00 hours to reach. Enjoy the Scenic Himalayas from the window of your cab when you enter Himachal Pradesh. On the ways, stopover at Pinjore Garden and rope way at Timber Trail Resort if time permits. Cab will pass through Panipat, Kurukshetra, Ambala, Kalka, Parwanoo, Barog and Solan on the way to Shimla. Check in and overnight stay in Hotel."
    },
    {
      day: 2,
      title: "Shimla Local Sightseeing",
      desc: "After Breakfast, visit to the years old Tara Devi Temple, Sankat Mochan Temple, visit Indian Institute of advance Studies, Army Museum, Jakhoo temple. In the evening explore Shimla city on foot as vehicle entry is prohibited. You can see prime places of Shimla like, Lakkar Bazaar, Ridge, Church, Mall road, Scandal Point, Kali Bari temple etc. Ideal time for shopping and eating out at restaurants on the mall road."
    },
    {
      day: 3,
      title: "Shimla Kufri Naldehra",
      desc: "After Breakfast, visit to the famous picnic spots around Shimla which include Fagu, Kufri, Naldehra and Mashobra. Enjoy horse / Yak ride, see Himalayan national park at Kufri. See apple orchards at Mashobra, Golf course and Jungle walks in Naldehra."
    },
    {
      day: 4,
      title: "Shimla - Manali Drive",
      desc: "Morning check out from the Hotel & drive to Manali (7-8 Hours), valley of Gods, is a combination of natural splendour and rich cultural heritage. On the way stop a while at Pandoh and Kullu. Rest of the day at leisure. Night stay in Manali."
    },
    {
      day: 5,
      title: "Manali local sightseeing",
      desc: "Morning proceed to Visit the 450 years old Hadimba Devi Temple built in the tranquil and serene woods, the oldest temple in Manali, Tibetan center & monastery, Club House , Vanvihar , Mall Road Manali and Vashisht village, known for its hot Sulphur springs. Night stay in Manali."
    },
    {
      day: 6,
      title: "Manali Snow-point / Rohtang Pass Excursion",
      desc: "Early Morning proceed for full day tour of Rohtang Pass - The majesty of the mountains and the glaciers can be seen at their best After enjoying this snowy heaven, take a sledge ride down the slopes & try luck by climbing the little snow hills. On descending to Manali, halt at the Rahalla falls and Solang Valley. Also halt at Marhi, Ralha falls, Nehru Kund. Night stay in Manali."
    },
    {
      day: 7,
      title: "Manali - Chandigarh Drive",
      desc: "Checkout from Hotel and drive towards Chandigarh. Check-in at hotel. Chandigarh Market Visit in the evening if time permits."
    },
    {
      day: 8,
      title: "Chandigarh - Delhi Return",
      desc: "Checkout from Hotel and drive towards Delhi. Dropping at Delhi railway station / airport for onward journey. (250 Kms, 5 hours)"
    }
  ],
  
  inclusions: [
    "Welcome drink on arrival (non alcoholic)",
    "Breakfast and dinner included (Note: only vegetarian served in Sunrise Villa Shimla)",
    "Transport services by an exclusive private vehicle as per itinerary",
    "All applicable state permits, toll taxes, and driver allowance"
  ],
  
  exclusions: [
    "Honeymoon Package add-on (flower decoration, cake, candle light dinner) - extra Rs 1,000",
    "Activity charges, sledge rides, and pony rentals",
    "Lunches, laundry, and personal shopping"
  ]
};

export default function ShimlaManaliChandigarh7N8DDelhi() {
  const backPath = `/destinations/${PAGE_DETAILS.category}`;

  return (
    <div className="package-detail-page">
      {/* Hero Banner */}
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

      {/* Facts Dashboard */}
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

      {/* Content Layout */}
      <div className="container detail-content-container">
        <div className="detail-content-grid">
          <div className="detail-main-col">
            <div className="detail-overview-panel glass-panel">
              <h2 className="detail-section-title">
                <ShieldCheck size={24} className="section-title-icon" />
                <span>Tour Overview</span>
              </h2>
              <p className="detail-overview-text">{PAGE_DETAILS.overview}</p>
            </div>

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

          <div className="detail-sidebar-col">
            <div className="sidebar-sticky-panel">
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
