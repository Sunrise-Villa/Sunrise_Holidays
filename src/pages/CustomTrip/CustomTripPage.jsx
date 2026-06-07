import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Plus, Trash2, GripVertical, MapPin, Compass, Star, Phone, Send, X,
  Sun, Moon, Info, ChevronRight, CheckCircle2, AlertCircle, Users,
  ChevronDown, ChevronUp, Navigation, ArrowRight, Clock,
  TreePine, Landmark, Mountain,
  Baby, UserCheck, Heart, Gem, Calendar
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────
   PICKUP / DROP POINTS
   ───────────────────────────────────────────────────────────────── */
const PICKUP_POINTS = [
  { id: 'chandigarh', label: 'Chandigarh', detail: 'ISBT / Railway Station / Airport' },
  { id: 'delhi',      label: 'Delhi',      detail: 'ISBT Kashmere Gate / IGI Airport' },
  { id: 'kalka',      label: 'Kalka',      detail: 'Kalka Railway Station' },
];

/* ─────────────────────────────────────────────────────────────────
   TRIP THEMES
   ───────────────────────────────────────────────────────────────── */
const THEMES = [
  { id: 'family',    label: 'Family Holiday', icon: Users,      color: '#4F63B8' },
  { id: 'honeymoon', label: 'Honeymoon',      icon: Heart,      color: '#E3262F' },
  { id: 'adventure', label: 'Adventure',      icon: Compass,    color: '#F4A316' },
  { id: 'luxury',    label: 'Luxury',         icon: Gem,        color: '#10B981' },
  { id: 'weekend',   label: 'Weekend Escape', icon: Calendar,   color: '#8B5CF6' }
];

/* ─────────────────────────────────────────────────────────────────
   DESTINATION CATALOGUE  - each spot has a type for icon mapping
───────────────────────────────────────────────────────────────── */
const DESTINATION_CATALOG = [
  {
    id: 'shimla',
    name: 'Shimla',
    region: 'Himachal Pradesh',
    tag: 'Heritage & Colonial',
    color: '#4F63B8',
    desc: 'Queen of Hills - Mall Road, Ridge, Kufri',
    sightseeing: [
      { id: 'mall-road',          name: 'Mall Road & Scandal Point',    duration: '2-3 hrs',   type: 'landmark' },
      { id: 'jakhoo-hill',        name: 'Jakhoo Hill Temple',           duration: 'Half Day',  type: 'landmark' },
      { id: 'kufri',              name: 'Kufri Snow Point',             duration: 'Full Day',  type: 'mountain' },
      { id: 'chail',              name: 'Chail Palace & Wildlife Sanctuary', duration: 'Full Day', type: 'nature' },
      { id: 'naldehra',           name: 'Naldehra Golf Course',         duration: '3-4 hrs',   type: 'nature' },
      { id: 'christ-church',      name: 'Christ Church & The Ridge',    duration: '1-2 hrs',   type: 'landmark' },
      { id: 'viceregal-lodge',    name: 'Viceregal Lodge (IIAS)',       duration: '2 hrs',     type: 'landmark' },
      { id: 'chadwick-falls',     name: 'Chadwick Falls',               duration: '2 hrs',     type: 'nature' },
      { id: 'tara-devi',          name: 'Tara Devi Temple',             duration: '1-2 hrs',   type: 'landmark' },
      { id: 'jakhu-ropeway',      name: 'Jakhu Ropeway Ride',           duration: '1 hr',      type: 'landmark' },
    ]
  },
  {
    id: 'manali',
    name: 'Manali',
    region: 'Himachal Pradesh',
    tag: 'Adventure Hub',
    color: '#b45309',
    desc: 'Solang Valley, Rohtang Pass, River Beas',
    sightseeing: [
      { id: 'solang-valley',    name: 'Solang Valley (Snow/Adventure)', duration: 'Full Day',  type: 'mountain' },
      { id: 'rohtang-pass',     name: 'Rohtang Pass (Permit Required)', duration: 'Full Day',  type: 'mountain' },
      { id: 'hadimba-temple',   name: 'Hadimba Devi Temple',            duration: '1-2 hrs',   type: 'landmark' },
      { id: 'old-manali',       name: 'Old Manali Village & Manu Temple', duration: '2-3 hrs', type: 'landmark' },
      { id: 'vashisht',         name: 'Vashisht Hot Springs & Temple',  duration: '2 hrs',     type: 'nature' },
      { id: 'sissu',            name: 'Sissu Village & Lahaul Valley',  duration: 'Full Day',  type: 'nature' },
      { id: 'naggar-castle',    name: 'Naggar Castle & Art Gallery',    duration: '3 hrs',     type: 'landmark' },
      { id: 'beas-kund',        name: 'Beas Kund Trek',                 duration: 'Full Day',  type: 'mountain' },
      { id: 'club-house',       name: 'Van Vihar & Club House',         duration: '2 hrs',     type: 'nature' },
      { id: 'tibetan-monastery',name: 'Tibetan Monastery Market',       duration: '2 hrs',     type: 'landmark' },
    ]
  },
  {
    id: 'kasol',
    name: 'Kasol & Parvati Valley',
    region: 'Himachal Pradesh',
    tag: 'Nature & Trekking',
    color: '#16a34a',
    desc: 'Parvati Valley, Kheerganga Trek, Manikaran',
    sightseeing: [
      { id: 'kheerganga',     name: 'Kheerganga Trek (Hot Spring)',   duration: 'Full Day',  type: 'mountain' },
      { id: 'chalal',         name: 'Chalal Forest Village Walk',     duration: '3 hrs',     type: 'nature' },
      { id: 'manikaran',      name: 'Manikaran Gurudwara & Hot Spring', duration: '2-3 hrs', type: 'landmark' },
      { id: 'tosh',           name: 'Tosh Village (Remote)',          duration: 'Full Day',  type: 'nature' },
      { id: 'rasol',          name: 'Rasol Trek',                     duration: 'Full Day',  type: 'mountain' },
      { id: 'grahan',         name: 'Grahan Village Trek',            duration: 'Full Day',  type: 'mountain' },
    ]
  },
  {
    id: 'dharamshala',
    name: 'Dharamshala & McLeod Ganj',
    region: 'Himachal Pradesh',
    tag: 'Spiritual & Scenic',
    color: '#7c3aed',
    desc: 'McLeod Ganj, Dalai Lama Temple, Triund Trek',
    sightseeing: [
      { id: 'mcleod-ganj',      name: 'McLeod Ganj Market & Cafés',    duration: '3-4 hrs',   type: 'landmark' },
      { id: 'triund',           name: 'Triund Trek (Overnight Option)',  duration: 'Full Day',  type: 'mountain' },
      { id: 'dalai-lama-temple',name: 'Namgyal Monastery (Dalai Lama)', duration: '2 hrs',     type: 'landmark' },
      { id: 'bhagsu-nag',       name: 'Bhagsu Nag Waterfall & Temple',  duration: '3 hrs',     type: 'nature' },
      { id: 'dharamkot',        name: 'Dharamkot Village',              duration: '2-3 hrs',   type: 'nature' },
      { id: 'war-memorial',     name: 'War Memorial & Cricket Ground',  duration: '1 hr',      type: 'landmark' },
      { id: 'kangra-fort',      name: 'Kangra Fort',                    duration: '2-3 hrs',   type: 'landmark' },
    ]
  },
  {
    id: 'jibhi',
    name: 'Jibhi & Tirthan Valley',
    region: 'Himachal Pradesh',
    tag: 'Offbeat Forest Escape',
    color: '#0891b2',
    desc: 'Pine forests, Jalori Pass, Tirthan River',
    sightseeing: [
      { id: 'jalori-pass',      name: 'Jalori Pass (via Aut)',          duration: 'Full Day',  type: 'mountain' },
      { id: 'serolsar-lake',    name: 'Serolsar Lake Trek',             duration: 'Full Day',  type: 'mountain' },
      { id: 'jibhi-waterfall',  name: 'Jibhi Waterfall',               duration: '2 hrs',     type: 'nature' },
      { id: 'tirthan-river',    name: 'Tirthan River Fishing & Walk',   duration: '3 hrs',     type: 'nature' },
      { id: 'chhoie-waterfall', name: 'Chhoie Waterfall Trek',         duration: '4 hrs',     type: 'nature' },
    ]
  },
  {
    id: 'spiti',
    name: 'Spiti Valley',
    region: 'Himachal Pradesh',
    tag: 'Remote High-Altitude',
    color: '#9f1239',
    desc: 'Key Monastery, Chandratal Lake, Kaza village',
    sightseeing: [
      { id: 'key-monastery',    name: 'Key (Ki) Monastery',             duration: '3 hrs',     type: 'landmark' },
      { id: 'chandratal',       name: 'Chandratal Lake',                duration: 'Full Day',  type: 'nature' },
      { id: 'kaza-market',      name: 'Kaza Town & Local Market',       duration: '3 hrs',     type: 'landmark' },
      { id: 'kibber',           name: 'Kibber Village & Wildlife',      duration: 'Full Day',  type: 'nature' },
      { id: 'langza',           name: 'Langza Fossil Village',          duration: '3 hrs',     type: 'landmark' },
      { id: 'kunzum-pass',      name: 'Kunzum Pass',                    duration: '3 hrs',     type: 'mountain' },
      { id: 'dhankar',          name: 'Dhankar Monastery & Lake',       duration: 'Full Day',  type: 'landmark' },
    ]
  },
  {
    id: 'dalhousie',
    name: 'Dalhousie & Khajjiar',
    region: 'Himachal Pradesh',
    tag: 'Colonial Hill Station',
    color: '#0f766e',
    desc: 'Mini Switzerland, Kalatop Wildlife, Chamba Valley',
    sightseeing: [
      { id: 'khajjiar',         name: 'Khajjiar - Mini Switzerland',    duration: 'Full Day',  type: 'nature' },
      { id: 'dainkund-peak',    name: 'Dainkund Peak Trek',             duration: 'Full Day',  type: 'mountain' },
      { id: 'kalatop',          name: 'Kalatop Wildlife Sanctuary',     duration: '3-4 hrs',   type: 'nature' },
      { id: 'satdhara-falls',   name: 'Satdhara Falls',                 duration: '2 hrs',     type: 'nature' },
      { id: 'chamba-town',      name: 'Chamba Town & Bhuri Singh Museum',duration: '3 hrs',    type: 'landmark' },
    ]
  },
];

/* ─────────────────────────────────────────────────────────────────
   REALISTIC CONSTRAINTS
   Transit hours between destinations (one-way, approximate).
   Key format: 'fromId-toId' - symmetric lookup below.
───────────────────────────────────────────────────────────────── */
const TRANSIT_HOURS = {
  'chandigarh-shimla':    3.5,
  'chandigarh-manali':    8.0,
  'chandigarh-kasol':     6.5,
  'chandigarh-dharamshala': 5.0,
  'chandigarh-jibhi':     6.0,
  'chandigarh-spiti':     12.0,
  'chandigarh-dalhousie': 6.0,
  'delhi-shimla':         7.0,
  'delhi-manali':         12.0,
  'delhi-kasol':          10.0,
  'delhi-dharamshala':    9.0,
  'delhi-jibhi':          10.0,
  'delhi-spiti':          16.0,
  'delhi-dalhousie':      10.0,
  'kalka-shimla':         3.0,
  'kalka-manali':         8.5,
  'kalka-kasol':          7.0,
  'kalka-dharamshala':    5.5,
  'kalka-jibhi':          6.5,
  'kalka-spiti':          13.0,
  'kalka-dalhousie':      6.5,
  'shimla-manali':        7.5,
  'shimla-kasol':         5.5,
  'shimla-dharamshala':   9.0,
  'shimla-jibhi':         5.5,
  'shimla-spiti':         12.0,
  'shimla-dalhousie':     7.0,
  'manali-kasol':         5.5,
  'manali-dharamshala':   9.0,
  'manali-jibhi':         5.0,
  'manali-spiti':         8.0,
  'manali-dalhousie':     10.0,
  'kasol-dharamshala':    6.5,
  'kasol-jibhi':          4.0,
  'kasol-spiti':          11.0,
  'kasol-dalhousie':      7.0,
  'dharamshala-jibhi':    5.0,
  'dharamshala-spiti':    14.0,
  'dharamshala-dalhousie':3.0,
  'jibhi-spiti':          11.0,
  'jibhi-dalhousie':      8.0,
  'spiti-dalhousie':      16.0,
};

// Get transit hours between any two place IDs (destinations or pickup points)
const getTransitHrs = (a, b) => {
  if (!a || !b || a === b) return 0;
  return TRANSIT_HOURS[`${a}-${b}`] || TRANSIT_HOURS[`${b}-${a}`] || 4;
};

// Minimum recommended nights per destination
const MIN_NIGHTS = {
  spiti:       4,
  kasol:       2,
  dharamshala: 2,
  jibhi:       2,
  dalhousie:   2,
  manali:      3,
  shimla:      2,
};

// Convert a duration string to approximate hours
const durationHrs = (dur = '') => {
  const d = dur.toLowerCase();
  if (d.includes('full day')) return 7;
  if (d.includes('half day')) return 4;
  const range = d.match(/(\d+)[\s–-]+(\d+)\s*hr/);
  if (range) return (parseInt(range[1]) + parseInt(range[2])) / 2;
  const single = d.match(/(\d+)\s*hr/);
  if (single) return parseInt(single[1]);
  return 2;
};

// How many usable sightseeing hours does a given day have?
// stopIdx = position in timeline (0-based), dayIdx = day within stop
const getDayCapacity = (stopIdx, dayIdx, totalDays, timeline, pickup) => {
  const isFirstDay  = stopIdx === 0 && dayIdx === 0;
  const isLastDay   = stopIdx === timeline.length - 1 && dayIdx === totalDays - 1;
  const isTransitIn = dayIdx === 0 && stopIdx > 0;

  if (isFirstDay) {
    // Arrive from pickup point - typically afternoon arrival
    const hrs = getTransitHrs(pickup, timeline[0]?.destId);
    if (hrs >= 7) return 1;   // very long drive - rest only
    if (hrs >= 4) return 2;   // 4-7 hr drive - 1-2 light spots
    return 4;                 // short drive - comfortable half-day
  }
  if (isTransitIn) {
    // Transit from previous destination
    const hrs = getTransitHrs(timeline[stopIdx - 1]?.destId, timeline[stopIdx]?.destId);
    if (hrs >= 8) return 0;   // brutal drive - no sightseeing
    if (hrs >= 6) return 1;   // long drive - 1 easy spot max
    if (hrs >= 4) return 2.5; // moderate drive - light afternoon
    return 4;                 // short hop
  }
  if (isLastDay) {
    // Check-out & travel back
    return 3; // Morning only
  }
  return 7; // Full free day
};

// Sum hours of selected spots on a day
const usedHrs = (spots, catalog) =>
  spots.reduce((acc, sid) => {
    const spot = catalog?.sightseeing.find(x => x.id === sid);
    return acc + durationHrs(spot?.duration);
  }, 0);

// Human-readable capacity label
const capacityLabel = (hrs) => {
  if (hrs === 0) return 'Rest / Arrival Only';
  if (hrs <= 1)  return '~1 hr free';
  if (hrs <= 2)  return '~2 hrs free';
  if (hrs <= 3)  return 'Morning only';
  if (hrs <= 4)  return 'Half day free';
  return 'Full day free';
};


/* ─────────────────────────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────────────────────────── */
const uid = () => Math.random().toString(36).slice(2, 9);
const getCatalog = (id) => DESTINATION_CATALOG.find(d => d.id === id);

// Map type → lucide icon
const typeIcon = (type, sz = 14) => {
  if (type === 'mountain') return <Mountain size={sz} />;
  if (type === 'nature')   return <TreePine size={sz} />;
  if (type === 'landmark') return <Landmark size={sz} />;
  return <MapPin size={sz} />;
};

export default function CustomTripPage() {
  /* ── Trip meta ── */
  const [pickup, setPickup]     = useState('chandigarh');
  const [drop, setDrop]         = useState('chandigarh');
  const [theme, setTheme]       = useState('family');
  const [adults, setAdults]     = useState(2);
  const [children, setChildren] = useState(0);

  /* ── Timeline: { id, destId, nights, days:[{id, spots:[spotId]}] } ── */
  const buildDays = (destId, nights) =>
    Array.from({ length: nights + 1 }, (_, i) => ({
      id: uid(),
      label: `Day ${i + 1}`,
      spots: []
    }));

  const [timeline, setTimeline] = useState([
    { id: uid(), destId: 'shimla', nights: 2, days: buildDays('shimla', 2) },
    { id: uid(), destId: 'manali', nights: 3, days: buildDays('manali', 3) },
  ]);

  const [showCatalog, setShowCatalog] = useState(false);
  const [expandedStop, setExpandedStop] = useState(null);
  const [dragIndex, setDragIndex] = useState(null);


  /* ─── Timeline mutations ─── */
  const addStop = (destId) => {
    const nights = 2;
    setTimeline(prev => [...prev, { id: uid(), destId, nights, days: buildDays(destId, nights) }]);
    setShowCatalog(false);
  };

  const removeStop = (stopId) => {
    setTimeline(prev => prev.filter(s => s.id !== stopId));
    if (expandedStop === stopId) setExpandedStop(null);
  };

  const updateNights = (stopId, delta) => {
    setTimeline(prev => prev.map(s => {
      if (s.id !== stopId) return s;
      const next = Math.max(1, Math.min(14, s.nights + delta));
      const totalDayCount = next + 1;
      let days = [...s.days];
      while (days.length < totalDayCount) days.push({ id: uid(), label: `Day ${days.length + 1}`, spots: [] });
      if (days.length > totalDayCount) days = days.slice(0, totalDayCount);
      return { ...s, nights: next, days };
    }));
  };

  const toggleSpot = (stopId, dayId, spotId) => {
    setTimeline(prev => prev.map(s => {
      if (s.id !== stopId) return s;
      return {
        ...s,
        days: s.days.map(d => {
          if (d.id !== dayId) return d;
          const has = d.spots.includes(spotId);
          return { ...d, spots: has ? d.spots.filter(x => x !== spotId) : [...d.spots, spotId] };
        })
      };
    }));
  };

  /* ─── Drag & drop ─── */
  const handleDragStart = (e, idx) => {
    setDragIndex(idx);
    e.dataTransfer.effectAllowed = 'move';
  };
  const handleDragEnter = (idx) => {
    if (dragIndex === null || dragIndex === idx) return;
    setTimeline(prev => {
      const next = [...prev];
      const [moved] = next.splice(dragIndex, 1);
      next.splice(idx, 0, moved);
      setDragIndex(idx);
      return next;
    });
  };
  const handleDragEnd = () => setDragIndex(null);

  /* ─── Derived stats ─── */
  const totalNights  = timeline.reduce((s, d) => s + d.nights, 0);
  const totalDays    = totalNights + 1;
  const totalPeople  = adults + children;

  const navigate = useNavigate();

  const buildContactMessage = () => {
    const pickupLabel = PICKUP_POINTS.find(p => p.id === pickup)?.label;
    const dropLabel   = PICKUP_POINTS.find(p => p.id === drop)?.label;
    const themeLabel  = THEMES.find(t => t.id === theme)?.label || 'Family Holiday';
    const stopLines = timeline.map((s, i) => {
      const cat = getCatalog(s.destId);
      const spotLines = s.days.map((d) => {
        const spots = d.spots.map(sid => cat?.sightseeing.find(x => x.id === sid)?.name).filter(Boolean);
        return spots.length ? `  ${d.label}: ${spots.join(', ')}` : `  ${d.label}: Leisure / Travel`;
      }).join('\n');
      return `Stop ${i + 1}: ${cat?.name} - ${s.nights} Night${s.nights !== 1 ? 's' : ''}\n${spotLines}`;
    });
    return `Hi Travel Helpdesk,

I have designed a custom Himachal trip using the Trip Builder:

Pickup: ${pickupLabel}
Drop: ${dropLabel}
Theme: ${themeLabel}
Adults: ${adults}${children > 0 ? `\nChildren: ${children}` : ''}
Total Duration: ${totalDays} Days / ${totalNights} Nights

--- MY ITINERARY ---
${stopLines.join('\n\n')}

Please help me finalise and book this trip.`;
  };

  const navigateToContact = () => {
    if (timeline.length === 0) return;
    navigate('/contact', {
      state: {
        customMessage: buildContactMessage(),
        adults,
        children,
        peopleCount: adults + children
      }
    });
  };

  /* ─── Shared style helpers ─── */
  const card = (extra = {}) => ({
    background: 'rgba(255,255,255,0.88)',
    border: '1px solid rgba(255,255,255,0.9)',
    borderRadius: '16px',
    boxShadow: '0 2px 12px rgba(31,41,55,0.06)',
    ...extra
  });

  const fieldLabel = {
    display: 'block', fontWeight: 600, fontSize: '0.8rem',
    color: 'var(--text-secondary)', marginBottom: '2px'
  };

  const counterBtn = (sm) => ({
    width: sm ? '26px' : '30px', height: sm ? '26px' : '30px',
    borderRadius: '8px', border: '1px solid rgba(31,41,55,0.12)',
    background: 'rgba(255,255,255,0.9)', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)',
    transition: 'background 0.15s'
  });

  /* ════════════════════════════════════════════════════════════
     RENDER
  ════════════════════════════════════════════════════════════ */
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', fontFamily: 'var(--font-body)' }}>

      {/* ── HERO ── */}
      <div style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #1a2744 100%)',
        padding: '72px 0 88px', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position:'absolute', top:'-100px', right:'-80px', width:'500px', height:'500px', borderRadius:'50%', background:'radial-gradient(circle, rgba(244,163,22,0.12) 0%, transparent 70%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'-80px', left:'-60px', width:'360px', height:'360px', borderRadius:'50%', background:'radial-gradient(circle, rgba(79,99,184,0.13) 0%, transparent 70%)', pointerEvents:'none' }} />

        <div className="container" style={{ position:'relative', zIndex:1, textAlign:'center' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:'rgba(244,163,22,0.12)', border:'1px solid rgba(244,163,22,0.28)', borderRadius:'999px', padding:'6px 18px', marginBottom:'22px' }}>
            <Compass size={14} style={{ color:'#F4A316' }} />
            <span style={{ color:'#F4A316', fontSize:'0.78rem', fontWeight:700, letterSpacing:'0.07em' }}>BUILD YOUR ITINERARY</span>
          </div>

          <h1 style={{ fontSize:'clamp(1.9rem, 4.5vw, 3.2rem)', fontFamily:'var(--font-heading)', fontWeight:700, color:'#fff', lineHeight:1.15, marginBottom:'16px' }}>
            Design Your <span style={{ color:'#F4A316' }}>Custom Himachal</span> Journey
          </h1>
          <p style={{ fontSize:'clamp(0.95rem, 1.8vw, 1.1rem)', color:'#94a3b8', maxWidth:'560px', margin:'0 auto 36px', lineHeight:1.75 }}>
            Select pickup & drop points, add destinations, plan day-wise sightseeing, then send your itinerary directly to our experts.
          </p>

          {/* Trust strip */}
          <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'24px', padding:'16px 24px', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'14px', maxWidth:'640px', margin:'0 auto' }}>
            {[
              { icon:<UserCheck size={15}/>, label:'Trusted Since 2011' },
              { icon:<Star size={15} fill="#F4A316" style={{color:'#F4A316'}}/>, label:'4.8 Google Rating' },
              { icon:<CheckCircle2 size={15}/>, label:'Verified Travel Partner' },
              { icon:<Phone size={15}/>, label:'Expert Helpdesk' },
            ].map((t,i) => (
              <div key={i} style={{ display:'flex', alignItems:'center', gap:'7px' }}>
                <span style={{ color:'#64748b' }}>{t.icon}</span>
                <span style={{ color:'#e2e8f0', fontSize:'0.83rem', fontWeight:600 }}>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN GRID ── */}
      <div className="container" style={{ padding:'48px 20px 80px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'minmax(0,1fr) 340px', gap:'36px', alignItems:'start' }} className="custom-trip-grid">

          {/* ════ LEFT COLUMN ════ */}
          <div style={{ display:'flex', flexDirection:'column', gap:'20px' }}>

            {/* ── SECTION 1: Pickup & Drop ── */}
            <div style={card({ padding:'24px' })}>
              <SectionLabel icon={<Navigation size={15}/>} text="Pickup & Drop Points" />

              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px', marginTop:'16px' }}>
                {/* Pickup */}
                <div>
                  <p style={fieldLabel}>Pickup Point</p>
                  <div style={{ display:'flex', flexDirection:'column', gap:'8px', marginTop:'8px' }}>
                    {PICKUP_POINTS.map(p => (
                      <button key={p.id} onClick={() => setPickup(p.id)}
                        style={{
                          padding:'11px 14px', borderRadius:'10px', textAlign:'left', cursor:'pointer', width:'100%',
                          border: `1.5px solid ${pickup===p.id ? 'var(--secondary)' : 'rgba(31,41,55,0.12)'}`,
                          background: pickup===p.id ? 'rgba(79,99,184,0.07)' : 'rgba(248,250,252,0.8)',
                          transition:'all 0.18s'
                        }}>
                        <div style={{ fontWeight:700, fontSize:'0.88rem', color: pickup===p.id ? 'var(--secondary)' : 'var(--text-primary)' }}>{p.label}</div>
                        <div style={{ fontSize:'0.73rem', color:'var(--text-muted)', marginTop:'2px' }}>{p.detail}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Drop */}
                <div>
                  <p style={fieldLabel}>Drop Point</p>
                  <div style={{ display:'flex', flexDirection:'column', gap:'8px', marginTop:'8px' }}>
                    {PICKUP_POINTS.map(p => (
                      <button key={p.id} onClick={() => setDrop(p.id)}
                        style={{
                          padding:'11px 14px', borderRadius:'10px', textAlign:'left', cursor:'pointer', width:'100%',
                          border: `1.5px solid ${drop===p.id ? 'var(--primary)' : 'rgba(31,41,55,0.12)'}`,
                          background: drop===p.id ? 'rgba(244,163,22,0.07)' : 'rgba(248,250,252,0.8)',
                          transition:'all 0.18s'
                        }}>
                        <div style={{ fontWeight:700, fontSize:'0.88rem', color: drop===p.id ? 'var(--primary)' : 'var(--text-primary)' }}>{p.label}</div>
                        <div style={{ fontSize:'0.73rem', color:'var(--text-muted)', marginTop:'2px' }}>{p.detail}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Route preview */}
              <div style={{ marginTop:'16px', display:'flex', alignItems:'center', gap:'10px', padding:'10px 14px', background:'rgba(31,41,55,0.04)', borderRadius:'10px' }}>
                <span style={{ fontWeight:700, fontSize:'0.85rem', color:'var(--secondary)' }}>{PICKUP_POINTS.find(p=>p.id===pickup)?.label}</span>
                <ArrowRight size={14} style={{ color:'var(--text-muted)' }}/>
                <span style={{ fontSize:'0.82rem', color:'var(--text-muted)', flex:1 }}>Himachal Pradesh</span>
                <ArrowRight size={14} style={{ color:'var(--text-muted)' }}/>
                <span style={{ fontWeight:700, fontSize:'0.85rem', color:'var(--primary)' }}>{PICKUP_POINTS.find(p=>p.id===drop)?.label}</span>
              </div>
            </div>

            {/* ── SECTION 2: Passengers ── */}
            <div style={card({ padding:'24px' })}>
              <SectionLabel icon={<Users size={15}/>} text="Passengers" />

              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px', marginTop:'16px' }}>
                <CounterField
                  label="Adults"
                  sublabel="12+ years"
                  value={adults}
                  onDec={() => setAdults(a => Math.max(1, a - 1))}
                  onInc={() => setAdults(a => Math.min(30, a + 1))}
                  icon={<Users size={16} style={{ color:'var(--secondary)' }}/>}
                />
                <CounterField
                  label="Children"
                  sublabel="Below 12 years"
                  value={children}
                  onDec={() => setChildren(c => Math.max(0, c - 1))}
                  onInc={() => setChildren(c => Math.min(20, c + 1))}
                  icon={<Baby size={16} style={{ color:'var(--primary)' }}/>}
                />
              </div>

              <div style={{ marginTop:'12px', padding:'10px 14px', background:'rgba(79,99,184,0.04)', borderRadius:'10px', border:'1px solid rgba(79,99,184,0.1)', fontSize:'0.8rem', color:'var(--text-secondary)' }}>
                <Info size={13} style={{ display:'inline', marginRight:'6px', color:'var(--secondary)', verticalAlign:'middle' }}/>
                Children under 5 years travel free of charge. Rates for 5-11 years are discounted.
              </div>
            </div>

            {/* ── SECTION 2.5: Trip Theme ── */}
            <div style={card({ padding:'24px' })}>
              <SectionLabel icon={<Compass size={15}/>} text="Trip Theme" />
              <div style={{ display:'flex', flexWrap:'wrap', gap:'10px', marginTop:'16px' }}>
                {THEMES.map(t => {
                  const ThemeIcon = t.icon;
                  const isActive = theme === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => {
                        setTheme(t.id);
                        if (t.id === 'honeymoon') {
                          setAdults(2);
                          setChildren(0);
                        }
                      }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 16px',
                        borderRadius: '12px',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        transition: 'all 0.18s',
                        border: `1.5px solid ${isActive ? t.color : 'rgba(31,41,55,0.12)'}`,
                        background: isActive ? `${t.color}10` : 'rgba(255,255,255,0.9)',
                        color: isActive ? t.color : 'var(--text-secondary)'
                      }}
                    >
                      <ThemeIcon size={14} style={{ color: isActive ? t.color : 'var(--text-muted)' }} />
                      <span>{t.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── SECTION 3: Trip Timeline ── */}
            <div>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'16px', flexWrap:'wrap', gap:'10px' }}>
                <div>
                  <h2 style={{ fontFamily:'var(--font-heading)', fontSize:'1.25rem', fontWeight:700, color:'var(--text-primary)', marginBottom:'2px' }}>Trip Timeline</h2>
                  <p style={{ color:'var(--text-muted)', fontSize:'0.82rem' }}>Drag the grip handle to reorder stops</p>
                </div>
                <button onClick={() => setShowCatalog(true)} style={{
                  display:'flex', alignItems:'center', gap:'7px',
                  background:'var(--primary)', color:'#fff', border:'none', borderRadius:'10px',
                  padding:'9px 18px', fontWeight:700, fontSize:'0.88rem', cursor:'pointer',
                  boxShadow:'0 4px 14px rgba(244,163,22,0.28)', transition:'all 0.18s'
                }}>
                  <Plus size={16}/> Add Destination
                </button>
              </div>

              {/* Empty state */}
              {timeline.length === 0 && (
                <div style={{ ...card(), padding:'48px 24px', textAlign:'center' }}>
                  <Mountain size={36} style={{ color:'rgba(79,99,184,0.3)', margin:'0 auto 14px' }}/>
                  <p style={{ color:'var(--text-muted)', fontWeight:600 }}>Your timeline is empty</p>
                  <p style={{ color:'var(--text-muted)', fontSize:'0.83rem', marginTop:'4px' }}>Click <strong>Add Destination</strong> above to get started</p>
                </div>
              )}

              {/* Timeline stops */}
              <div style={{ display:'flex', flexDirection:'column', gap:0 }}>
                {timeline.map((stop, idx) => {
                  const cat       = getCatalog(stop.destId);
                  const isOpen    = expandedStop === stop.id;
                  const isDragging = dragIndex === idx;
                  const totalSpotsSelected = stop.days.reduce((acc, d) => acc + d.spots.length, 0);

                  return (
                    <div key={stop.id} style={{ display:'flex', gap:0, alignItems:'stretch' }}>

                      {/* Vertical connector */}
                      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', width:'36px', flexShrink:0 }}>
                        <div style={{
                          width:'32px', height:'32px', borderRadius:'50%',
                          background: cat?.color || 'var(--secondary)',
                          display:'flex', alignItems:'center', justifyContent:'center',
                          boxShadow:`0 0 0 3px rgba(255,255,255,0.95)`,
                          marginTop:'18px', flexShrink:0, zIndex:1
                        }}>
                          <MapPin size={14} style={{ color:'#fff' }}/>
                        </div>
                        {idx < timeline.length - 1 && (
                          <div style={{ width:'2px', flex:1, background:`${cat?.color}30`, minHeight:'18px', margin:'3px 0' }}/>
                        )}
                      </div>

                      {/* Stop card */}
                      <div
                        data-stop="true"
                        draggable
                        onDragStart={e => handleDragStart(e, idx)}
                        onDragEnter={() => handleDragEnter(idx)}
                        onDragEnd={handleDragEnd}
                        onDragOver={e => e.preventDefault()}
                        style={{
                          flex:1, marginLeft:'14px',
                          marginBottom: idx < timeline.length - 1 ? '10px' : 0,
                          marginTop:'8px',
                          background:'rgba(255,255,255,0.9)',
                          border:`1.5px solid ${isDragging ? cat?.color : 'rgba(255,255,255,0.9)'}`,
                          borderLeft: `3px solid ${cat?.color}`,
                          borderRadius:'14px',
                          boxShadow: isDragging ? '0 14px 36px rgba(0,0,0,0.1)' : '0 2px 10px rgba(31,41,55,0.06)',
                          opacity: isDragging ? 0.7 : 1,
                          overflow:'hidden', transition:'all 0.2s'
                        }}
                      >
                        {/* Card header */}
                        <div style={{ display:'flex', alignItems:'center', gap:'10px', padding:'14px 16px', borderBottom: isOpen ? '1px solid rgba(31,41,55,0.07)' : 'none' }}>
                          {/* Drag handle */}
                          <div style={{ cursor:'grab', color:'#c0c8d8', flexShrink:0, display:'flex', padding:'2px' }} title="Drag to reorder">
                            <GripVertical size={17}/>
                          </div>

                          {/* Stop number */}
                          <div style={{ width:'24px', height:'24px', borderRadius:'6px', background:`${cat?.color}15`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                            <span style={{ fontSize:'0.72rem', fontWeight:800, color: cat?.color }}>{idx + 1}</span>
                          </div>

                          {/* Destination info */}
                          <div style={{ flex:1 }}>
                            <div style={{ display:'flex', alignItems:'center', gap:'8px', flexWrap:'wrap' }}>
                              <span style={{ fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'0.97rem', color:'var(--text-primary)' }}>{cat?.name}</span>
                              <span style={{ fontSize:'0.68rem', fontWeight:700, padding:'2px 7px', borderRadius:'5px', background:`${cat?.color}15`, color:cat?.color }}>{cat?.tag}</span>
                              {totalSpotsSelected > 0 && (
                                <span style={{ fontSize:'0.7rem', color:'var(--text-muted)', fontWeight:500 }}>{totalSpotsSelected} place{totalSpotsSelected !== 1 ? 's' : ''} selected</span>
                              )}
                            </div>
                            <div style={{ color:'var(--text-muted)', fontSize:'0.78rem', marginTop:'2px' }}>{cat?.desc}</div>
                          </div>

                          {/* Nights stepper */}
                          <div style={{ display:'flex', alignItems:'center', gap:'5px', background:'rgba(31,41,55,0.04)', borderRadius:'9px', padding:'5px 9px', flexShrink:0 }}>
                            <Moon size={12} style={{ color:'var(--secondary)' }}/>
                            <button onClick={() => updateNights(stop.id, -1)} style={counterBtn(true)}>−</button>
                            <span style={{ minWidth:'26px', textAlign:'center', fontWeight:700, fontSize:'0.88rem', color:'var(--text-primary)' }}>{stop.nights}N</span>
                            <button onClick={() => updateNights(stop.id, +1)} style={counterBtn(true)}>+</button>
                          </div>

                          {/* Expand / delete */}
                          <button onClick={() => setExpandedStop(isOpen ? null : stop.id)}
                            style={{ background:'rgba(79,99,184,0.07)', border:'none', borderRadius:'7px', padding:'6px', cursor:'pointer', color:'var(--secondary)', display:'flex' }}>
                            {isOpen ? <ChevronUp size={15}/> : <ChevronDown size={15}/>}
                          </button>
                          <button onClick={() => removeStop(stop.id)}
                            style={{ background:'rgba(227,38,47,0.07)', border:'none', borderRadius:'7px', padding:'6px', cursor:'pointer', color:'#E3262F', display:'flex' }}>
                            <Trash2 size={14}/>
                          </button>
                        </div>

                        {/* Expanded: Day-wise sightseeing planner */}
                        {isOpen && cat && (() => {
                          // Per-stop advisory (min nights check)
                          const minN = MIN_NIGHTS[stop.destId] || 1;
                          const nightsWarning = stop.nights < minN
                            ? `${cat.name} needs at least ${minN} nights to cover travel & sightseeing comfortably.`
                            : null;

                          return (
                            <div style={{ padding:'16px', background:'rgba(248,250,252,0.7)' }}>
                              <p style={{ fontSize:'0.72rem', fontWeight:700, color:'var(--text-muted)', letterSpacing:'0.07em', textTransform:'uppercase', marginBottom:'14px' }}>
                                Plan Sightseeing by Day ({stop.nights + 1} days)
                              </p>

                              {/* Nights advisory */}
                              {nightsWarning && (
                                <div style={{ display:'flex', gap:'8px', alignItems:'flex-start', padding:'10px 12px', background:'rgba(245,158,11,0.08)', border:'1px solid rgba(245,158,11,0.25)', borderRadius:'9px', marginBottom:'14px' }}>
                                  <AlertCircle size={14} style={{ color:'#d97706', flexShrink:0, marginTop:'1px' }}/>
                                  <p style={{ fontSize:'0.77rem', color:'#92400e', lineHeight:1.55 }}>{nightsWarning}</p>
                                </div>
                              )}

                              {stop.days.map((day, di) => {
                                const capacity = getDayCapacity(idx, di, stop.days.length, timeline, pickup);
                                const used     = usedHrs(day.spots, cat);
                                const pct      = capacity > 0 ? Math.min(100, Math.round((used / capacity) * 100)) : 100;
                                const isOver   = used > capacity;
                                const isNear   = !isOver && pct >= 80;
                                const isRestDay = capacity === 0;

                                // Determine day type label
                                const isFirstDayOfFirstStop = idx === 0 && di === 0;
                                const isTransitIn = di === 0 && idx > 0;
                                const isLastDayOfLastStop = idx === timeline.length - 1 && di === stop.days.length - 1;
                                const transitHrsVal = isTransitIn
                                  ? getTransitHrs(timeline[idx-1]?.destId, stop.destId)
                                  : isFirstDayOfFirstStop
                                    ? getTransitHrs(pickup, stop.destId)
                                    : 0;

                                let dayTypeLabel = null;
                                if (isFirstDayOfFirstStop) dayTypeLabel = `Arrival from ${PICKUP_POINTS.find(p=>p.id===pickup)?.label} (~${transitHrsVal}h drive)`;
                                else if (isTransitIn) dayTypeLabel = `Transit from ${getCatalog(timeline[idx-1]?.destId)?.name} (~${transitHrsVal}h drive)`;
                                else if (isLastDayOfLastStop) dayTypeLabel = 'Check-out & return journey';
                                else if (di === stop.days.length - 1 && idx < timeline.length - 1) dayTypeLabel = 'Last morning - next stop departure';

                                return (
                                  <div key={day.id} style={{
                                    marginBottom: di < stop.days.length - 1 ? '18px' : 0,
                                    paddingBottom: di < stop.days.length - 1 ? '18px' : 0,
                                    borderBottom: di < stop.days.length - 1 ? '1px solid rgba(31,41,55,0.06)' : 'none'
                                  }}>
                                    {/* Day header row */}
                                    <div style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'8px', flexWrap:'wrap' }}>
                                      <div style={{ display:'flex', alignItems:'center', gap:'5px', padding:'3px 10px', background:`${cat.color}12`, borderRadius:'6px' }}>
                                        <Sun size={12} style={{ color: cat.color }}/>
                                        <span style={{ fontSize:'0.75rem', fontWeight:700, color: cat.color }}>{day.label}</span>
                                      </div>

                                      {dayTypeLabel && (
                                        <span style={{ fontSize:'0.71rem', color:'var(--text-muted)', fontStyle:'italic' }}>{dayTypeLabel}</span>
                                      )}

                                      {/* Hours used / capacity pill */}
                                      {day.spots.length > 0 && (
                                        <span style={{
                                          marginLeft:'auto', fontSize:'0.69rem', fontWeight:700,
                                          padding:'2px 8px', borderRadius:'6px',
                                          background: isOver ? 'rgba(220,38,38,0.1)' : isNear ? 'rgba(245,158,11,0.1)' : 'rgba(31,41,55,0.06)',
                                          color: isOver ? '#dc2626' : isNear ? '#d97706' : 'var(--text-muted)'
                                        }}>
                                          {used.toFixed(1)}h / {capacity > 0 ? `${capacity}h` : 'Rest day'}
                                        </span>
                                      )}
                                    </div>

                                    {/* Capacity bar */}
                                    {capacity > 0 && (
                                      <div style={{ marginBottom:'10px' }}>
                                        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'4px' }}>
                                          <span style={{ fontSize:'0.67rem', color:'var(--text-muted)' }}>
                                            Available: {capacityLabel(capacity)}
                                          </span>
                                        </div>
                                        <div style={{ height:'4px', borderRadius:'2px', background:'rgba(31,41,55,0.08)', overflow:'hidden' }}>
                                          <div style={{
                                            height:'100%', borderRadius:'2px', transition:'width 0.3s',
                                            width:`${pct}%`,
                                            background: isOver ? '#dc2626' : isNear ? '#d97706' : cat.color
                                          }}/>
                                        </div>
                                      </div>
                                    )}

                                    {/* Rest-only day notice */}
                                    {isRestDay ? (
                                      <div style={{ padding:'10px 12px', background:'rgba(31,41,55,0.04)', borderRadius:'8px', fontSize:'0.77rem', color:'var(--text-muted)', display:'flex', alignItems:'center', gap:'7px' }}>
                                        <Clock size={13}/>
                                        This is an all-day drive of ~{transitHrsVal}h. No sightseeing is realistic - plan for rest on arrival.
                                      </div>
                                    ) : (
                                      <>
                                        {/* Over-limit warning */}
                                        {isOver && (
                                          <div style={{ display:'flex', gap:'7px', alignItems:'flex-start', padding:'8px 12px', background:'rgba(220,38,38,0.07)', border:'1px solid rgba(220,38,38,0.2)', borderRadius:'8px', marginBottom:'10px' }}>
                                            <AlertCircle size={13} style={{ color:'#dc2626', flexShrink:0, marginTop:'1px' }}/>
                                            <p style={{ fontSize:'0.75rem', color:'#991b1b', lineHeight:1.5 }}>
                                              Too much planned for this day - {used.toFixed(1)}h of activities vs ~{capacity}h available. Remove some spots or spread them across other days.
                                            </p>
                                          </div>
                                        )}

                                        {/* Near-limit nudge */}
                                        {isNear && !isOver && (
                                          <div style={{ display:'flex', gap:'7px', alignItems:'flex-start', padding:'7px 12px', background:'rgba(245,158,11,0.07)', border:'1px solid rgba(245,158,11,0.2)', borderRadius:'8px', marginBottom:'10px' }}>
                                            <Info size={13} style={{ color:'#d97706', flexShrink:0, marginTop:'1px' }}/>
                                            <p style={{ fontSize:'0.74rem', color:'#92400e', lineHeight:1.5 }}>
                                              Day is getting full ({used.toFixed(1)}h planned). Consider moving one spot to another day for a relaxed pace.
                                            </p>
                                          </div>
                                        )}

                                        {/* Spot chips */}
                                        <div style={{ display:'flex', flexWrap:'wrap', gap:'7px' }}>
                                          {cat.sightseeing.map(spot => {
                                            const active  = day.spots.includes(spot.id);
                                            const spotHrs = durationHrs(spot.duration);
                                            // Warn if adding this spot would breach capacity
                                            const wouldOverload = !active && (used + spotHrs) > capacity;
                                            return (
                                              <button
                                                key={spot.id}
                                                onClick={() => toggleSpot(stop.id, day.id, spot.id)}
                                                title={wouldOverload ? `Adding this would exceed day capacity (${spotHrs}h needed, ~${Math.max(0, capacity - used).toFixed(1)}h left)` : ''}
                                                style={{
                                                  display:'flex', alignItems:'center', gap:'5px',
                                                  padding:'6px 12px', borderRadius:'8px', fontSize:'0.77rem',
                                                  fontWeight:600, cursor:'pointer', transition:'all 0.18s',
                                                  background: active ? cat.color : wouldOverload ? 'rgba(220,38,38,0.04)' : 'rgba(255,255,255,0.95)',
                                                  color: active ? '#fff' : wouldOverload ? '#dc2626' : 'var(--text-secondary)',
                                                  border: `1.5px solid ${active ? cat.color : wouldOverload ? 'rgba(220,38,38,0.25)' : 'rgba(31,41,55,0.1)'}`,
                                                  opacity: wouldOverload ? 0.65 : 1,
                                                  boxShadow: active ? `0 2px 8px ${cat.color}35` : 'none'
                                                }}
                                              >
                                                <span style={{ opacity: active ? 1 : 0.5 }}>{typeIcon(spot.type, 12)}</span>
                                                {spot.name}
                                                <span style={{
                                                  fontSize:'0.66rem', opacity:0.75, fontWeight:500,
                                                  borderLeft:`1px solid ${active ? 'rgba(255,255,255,0.3)' : 'rgba(31,41,55,0.15)'}`,
                                                  paddingLeft:'6px', display:'flex', alignItems:'center', gap:'3px'
                                                }}>
                                                  <Clock size={9}/>{spot.duration}
                                                </span>
                                              </button>
                                            );
                                          })}
                                        </div>
                                      </>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          );
                        })()}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Add more */}
              {timeline.length > 0 && (
                <button onClick={() => setShowCatalog(true)} style={{
                  width:'100%', padding:'13px', marginTop:'16px',
                  borderRadius:'12px', border:'2px dashed rgba(79,99,184,0.25)',
                  background:'rgba(79,99,184,0.03)', cursor:'pointer',
                  display:'flex', alignItems:'center', justifyContent:'center', gap:'7px',
                  color:'var(--secondary)', fontWeight:600, fontSize:'0.87rem',
                  transition:'all 0.18s'
                }}>
                  <Plus size={16}/> Add Another Destination
                </button>
              )}
            </div>
          </div>

          {/* ════ RIGHT SIDEBAR ════ */}
          <div style={{ position:'sticky', top:'88px', display:'flex', flexDirection:'column', gap:'14px' }}>

            {/* Summary card */}
            <div style={{ background:'rgba(255,255,255,0.9)', borderRadius:'18px', border:'1px solid rgba(255,255,255,0.9)', boxShadow:'0 8px 28px rgba(31,41,55,0.08)', overflow:'hidden' }}>

              {/* Header */}
              <div style={{ background:'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', padding:'22px 22px 18px' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'16px' }}>
                  <div style={{ background:'rgba(244,163,22,0.18)', borderRadius:'9px', padding:'7px' }}>
                    <Compass size={18} style={{ color:'#F4A316' }}/>
                  </div>
                  <div>
                    <p style={{ color:'#64748b', fontSize:'0.7rem', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.07em' }}>Your Custom Trip</p>
                    <h3 style={{ color:'#fff', fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'1.05rem' }}>Trip Summary</h3>
                  </div>
                </div>

                {/* Stats */}
                <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'8px' }}>
                  {[
                    { label:'Days',    value: totalDays },
                    { label:'Nights',  value: totalNights },
                    { label:'Stops',   value: timeline.length },
                    { label:'People',  value: totalPeople },
                  ].map((s,i) => (
                    <div key={i} style={{ background:'rgba(255,255,255,0.06)', borderRadius:'10px', padding:'10px 6px', textAlign:'center' }}>
                      <div style={{ color:'#F4A316', fontWeight:800, fontSize:'1.3rem', lineHeight:1 }}>{s.value}</div>
                      <div style={{ color:'#475569', fontSize:'0.67rem', marginTop:'3px', fontWeight:600 }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Route */}
                {timeline.length > 0 && (
                  <div style={{ marginTop:'14px', display:'flex', alignItems:'center', gap:'6px', flexWrap:'wrap' }}>
                    <span style={{ fontSize:'0.72rem', fontWeight:700, color:'#94a3b8', padding:'3px 8px', background:'rgba(255,255,255,0.07)', borderRadius:'5px' }}>
                      {PICKUP_POINTS.find(p=>p.id===pickup)?.label}
                    </span>
                    {timeline.map(s => {
                      const cat = getCatalog(s.destId);
                      return (
                        <React.Fragment key={s.id}>
                          <ChevronRight size={11} style={{ color:'#334155', flexShrink:0 }}/>
                          <span style={{ fontSize:'0.72rem', fontWeight:700, color:'#fff', padding:'3px 8px', background:`${cat?.color}55`, borderRadius:'5px', border:`1px solid ${cat?.color}40` }}>
                            {cat?.name}
                          </span>
                        </React.Fragment>
                      );
                    })}
                    <ChevronRight size={11} style={{ color:'#334155', flexShrink:0 }}/>
                    <span style={{ fontSize:'0.72rem', fontWeight:700, color:'#94a3b8', padding:'3px 8px', background:'rgba(255,255,255,0.07)', borderRadius:'5px' }}>
                      {PICKUP_POINTS.find(p=>p.id===drop)?.label}
                    </span>
                  </div>
                )}
              </div>

              {/* Itinerary list */}
              <div style={{ padding:'18px 20px' }}>
                {timeline.length === 0 ? (
                  <p style={{ color:'var(--text-muted)', fontSize:'0.84rem', textAlign:'center', padding:'16px 0' }}>No destinations added yet</p>
                ) : (
                  <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                    {timeline.map((s, idx) => {
                      const cat = getCatalog(s.destId);
                      const allSpots = s.days.flatMap(d => d.spots.map(sid => cat?.sightseeing.find(x => x.id === sid)?.name)).filter(Boolean);
                      return (
                        <div key={s.id} style={{
                          paddingBottom: idx < timeline.length - 1 ? '10px' : 0,
                          borderBottom: idx < timeline.length - 1 ? '1px solid rgba(31,41,55,0.06)' : 'none'
                        }}>
                          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:'8px' }}>
                            <div style={{ display:'flex', alignItems:'center', gap:'7px' }}>
                              <div style={{ width:'8px', height:'8px', borderRadius:'50%', background: cat?.color, flexShrink:0 }}/>
                              <span style={{ fontWeight:700, fontSize:'0.85rem', color:'var(--text-primary)' }}>{cat?.name}</span>
                            </div>
                            <span style={{ fontSize:'0.72rem', color:'var(--text-muted)', fontWeight:600 }}>{s.nights}N / {s.nights+1}D</span>
                          </div>
                          {allSpots.length > 0 && (
                            <p style={{ fontSize:'0.72rem', color:'var(--text-muted)', marginTop:'4px', paddingLeft:'15px', lineHeight:1.5 }}>
                              {allSpots.slice(0,4).join(' · ')}{allSpots.length > 4 ? ` +${allSpots.length-4} more` : ''}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                <div style={{ height:'1px', background:'rgba(31,41,55,0.07)', margin:'16px 0' }}/>

                {/* Trust note */}
                <div style={{ display:'flex', gap:'9px', alignItems:'flex-start', marginBottom:'16px', padding:'12px', background:'rgba(79,99,184,0.04)', borderRadius:'10px', border:'1px solid rgba(79,99,184,0.09)' }}>
                  <Star size={14} style={{ color:'#F4A316', flexShrink:0, marginTop:'2px' }} fill="#F4A316"/>
                  <p style={{ fontSize:'0.77rem', color:'var(--text-secondary)', lineHeight:1.6 }}>
                    Our team will review your itinerary and contact you with a personalised quote.
                  </p>
                </div>

                {/* CTA */}
                <button onClick={navigateToContact} disabled={timeline.length === 0}
                  style={{
                    width:'100%', padding:'13px', border:'none', borderRadius:'11px',
                    background: timeline.length > 0 ? 'linear-gradient(135deg,#F4A316,#e0920e)' : '#d1d5db',
                    color:'#fff', fontWeight:700, fontSize:'0.95rem', cursor: timeline.length > 0 ? 'pointer' : 'not-allowed',
                    display:'flex', alignItems:'center', justifyContent:'center', gap:'7px',
                    boxShadow: timeline.length > 0 ? '0 4px 14px rgba(244,163,22,0.3)' : 'none',
                    transition:'all 0.18s'
                  }}>
                  <Send size={16}/> Send My Plan to Travel Desk
                </button>

                <a href="tel:+918988794801" style={{
                  display:'flex', alignItems:'center', justifyContent:'center', gap:'7px',
                  marginTop:'9px', padding:'11px',
                  background:'rgba(31,41,55,0.04)', border:'1px solid rgba(31,41,55,0.1)',
                  borderRadius:'11px', color:'var(--text-secondary)', fontWeight:600, fontSize:'0.84rem',
                  transition:'all 0.18s'
                }}>
                  <Phone size={14}/> Call Helpdesk Directly
                </a>
              </div>
            </div>

            {/* Quick tips */}
            <div style={{ padding:'16px 18px', background:'rgba(255,255,255,0.7)', borderRadius:'14px', border:'1px solid rgba(255,255,255,0.9)' }}>
              <p style={{ fontWeight:700, fontSize:'0.78rem', color:'var(--text-secondary)', marginBottom:'10px', display:'flex', alignItems:'center', gap:'5px' }}>
                <Info size={13} style={{ color:'var(--secondary)' }}/> Route Tips
              </p>
              {[
                'Shimla → Manali is the classic golden circuit',
                'Allow at least 4-5 days exclusively for Spiti Valley',
                'Chandigarh pickup is shortest route to Shimla (3.5 hrs)',
                'Kasol & Jibhi pair well as offbeat additions',
                'Book 2-3 weeks ahead for peak season (May-Jun, Dec-Jan)',
              ].map((t,i) => (
                <div key={i} style={{ display:'flex', gap:'7px', alignItems:'flex-start', marginBottom:'6px' }}>
                  <ChevronRight size={12} style={{ color:'var(--primary)', flexShrink:0, marginTop:'3px' }}/>
                  <span style={{ fontSize:'0.76rem', color:'var(--text-muted)', lineHeight:1.55 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ════ DESTINATION CATALOG MODAL ════ */}
      {showCatalog && (
        <div style={{
          position:'fixed', inset:0, zIndex:1000,
          background:'rgba(10,20,40,0.72)', backdropFilter:'blur(7px)',
          display:'flex', alignItems:'flex-end', justifyContent:'center'
        }} onClick={e => { if (e.target===e.currentTarget) setShowCatalog(false); }}>
          <div style={{
            background:'#fff', borderRadius:'22px 22px 0 0',
            width:'100%', maxWidth:'700px', maxHeight:'88vh',
            display:'flex', flexDirection:'column',
            boxShadow:'0 -20px 60px rgba(0,0,0,0.22)'
          }}>
            <div style={{ padding:'22px 26px 14px', borderBottom:'1px solid rgba(31,41,55,0.08)', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
              <div>
                <h3 style={{ fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'1.15rem', color:'var(--text-primary)' }}>Add a Destination</h3>
                <p style={{ color:'var(--text-muted)', fontSize:'0.82rem', marginTop:'2px' }}>You can add the same destination multiple times</p>
              </div>
              <button onClick={() => setShowCatalog(false)} style={{ background:'rgba(31,41,55,0.06)', border:'none', borderRadius:'9px', padding:'8px', cursor:'pointer', display:'flex', color:'var(--text-secondary)' }}>
                <X size={17}/>
              </button>
            </div>

            <div style={{ overflow:'auto', padding:'18px 26px 28px', display:'flex', flexDirection:'column', gap:'10px' }}>
              {DESTINATION_CATALOG.map(dest => (
                <button key={dest.id} onClick={() => addStop(dest.id)} style={{
                  display:'flex', alignItems:'center', gap:'14px',
                  padding:'14px 18px', borderRadius:'12px', width:'100%',
                  background:'rgba(248,250,252,0.85)', textAlign:'left',
                  border:`1.5px solid rgba(31,41,55,0.08)`, cursor:'pointer', transition:'all 0.18s'
                }}
                  onMouseEnter={e => { e.currentTarget.style.background=`${dest.color}09`; e.currentTarget.style.borderColor=`${dest.color}35`; e.currentTarget.style.transform='translateX(4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background='rgba(248,250,252,0.85)'; e.currentTarget.style.borderColor='rgba(31,41,55,0.08)'; e.currentTarget.style.transform=''; }}
                >
                  {/* Color swatch */}
                  <div style={{ width:'44px', height:'44px', borderRadius:'12px', background:`${dest.color}15`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <MapPin size={20} style={{ color: dest.color }}/>
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'2px' }}>
                      <span style={{ fontWeight:700, fontSize:'0.95rem', color:'var(--text-primary)' }}>{dest.name}</span>
                      <span style={{ fontSize:'0.67rem', fontWeight:700, padding:'2px 7px', borderRadius:'5px', background:`${dest.color}15`, color:dest.color }}>{dest.tag}</span>
                    </div>
                    <span style={{ fontSize:'0.78rem', color:'var(--text-muted)' }}>{dest.desc}</span>
                    <span style={{ fontSize:'0.72rem', color:'var(--text-muted)', marginLeft:'8px', opacity:0.7 }}>- {dest.sightseeing.length} places to plan</span>
                  </div>
                  <Plus size={16} style={{ color: dest.color, flexShrink:0 }}/>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 900px) {
          .custom-trip-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .custom-trip-grid > div:last-child { position: static !important; }
        }
      `}</style>
    </div>
  );
}

/* ─── Shared sub-components ─── */
function SectionLabel({ icon, text }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'2px' }}>
      <span style={{ color:'var(--secondary)' }}>{icon}</span>
      <h3 style={{ fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'1rem', color:'var(--text-primary)' }}>{text}</h3>
    </div>
  );
}

function CounterField({ label, sublabel, value, onDec, onInc, icon }) {
  return (
    <div style={{ padding:'14px', background:'rgba(248,250,252,0.8)', borderRadius:'12px', border:'1px solid rgba(31,41,55,0.08)' }}>
      <div style={{ display:'flex', alignItems:'center', gap:'7px', marginBottom:'12px' }}>
        {icon}
        <div>
          <p style={{ fontWeight:700, fontSize:'0.85rem', color:'var(--text-primary)', lineHeight:1 }}>{label}</p>
          <p style={{ fontSize:'0.7rem', color:'var(--text-muted)', marginTop:'2px' }}>{sublabel}</p>
        </div>
      </div>
      <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
        <button onClick={onDec} style={{ width:'32px', height:'32px', borderRadius:'9px', border:'1px solid rgba(31,41,55,0.12)', background:'#fff', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, fontSize:'1.1rem', color:'var(--text-secondary)' }}>−</button>
        <span style={{ fontWeight:800, fontSize:'1.35rem', color:'var(--text-primary)', minWidth:'28px', textAlign:'center' }}>{value}</span>
        <button onClick={onInc} style={{ width:'32px', height:'32px', borderRadius:'9px', border:'1px solid rgba(31,41,55,0.12)', background:'#fff', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, fontSize:'1.1rem', color:'var(--text-secondary)' }}>+</button>
      </div>
    </div>
  );
}
