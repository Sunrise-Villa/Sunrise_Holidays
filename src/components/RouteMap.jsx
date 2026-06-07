import React, { useMemo } from 'react';
import { Map } from 'lucide-react';

/**
 * ──────────────────────────────────────────────────────────────────────────
 * MASTER TOGGLE - set to `false` to hide ALL route maps across the site.
 * No code deletion needed; just flip this back to `true` when ready.
 * ──────────────────────────────────────────────────────────────────────────
 */
const SHOW_ROUTE_MAPS = true;

/**
 * RouteMap - animated Leaflet route map embedded via iframe srcDoc.
 *
 * Props:
 *  routeData: {
 *    title: string,
 *    stops: Array<{ lat, lng, name, desc, type }>
 *  }
 *
 *  type: "pickup" | "drop" | "stay" | "temple" | "nature" | "mountain"
 *        | "adventure" | "market" | "springs" | "town" | "dam"
 */
export default function RouteMap({ routeData }) {
  const html = useMemo(() => buildMapHTML(routeData), [routeData]);
  if (!SHOW_ROUTE_MAPS) return null;

  return (
    <section className="route-map-section container" style={{ marginTop: '64px', marginBottom: '0' }}>
      <h2 className="detail-section-title" style={{ marginBottom: '24px' }}>
        <Map size={24} className="section-title-icon" />
        <span>Interactive Route Map</span>
      </h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '0.95rem' }}>
        Click on any landmark marker to see details. Press <strong>Play</strong> to animate the journey.
      </p>
      <div style={{
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--glass-shadow)',
        height: '520px',
      }}>
        <iframe
          srcDoc={html}
          title={`Route Map - ${routeData.title}`}
          style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
          sandbox="allow-scripts allow-same-origin"
          loading="lazy"
        />
      </div>
      <p style={{
        color: 'var(--text-secondary)',
        fontSize: '0.78rem',
        marginTop: '14px',
        fontStyle: 'italic',
        opacity: 0.75,
        lineHeight: '1.5',
      }}>
        ⚠ <strong>Disclaimer:</strong> This map is an approximate visual representation of the tour route and landmarks.
        Marker positions are indicative and may not reflect exact geographic locations.
        Actual routes, stops, and distances may vary. Please refer to the detailed itinerary above for accurate trip information.
      </p>
    </section>
  );
}

function buildMapHTML({ title, stops }) {
  const stopsJSON = JSON.stringify(stops);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${title}</title>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { font-family: 'Segoe UI', sans-serif; background: #f0f4f3; height: 100vh; display: flex; flex-direction: column; }

  #map { flex: 1; z-index: 1; }

  /* Controls bar */
  #controls {
    background: #1f2937;
    color: #f3f4f6;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    z-index: 10;
    flex-shrink: 0;
  }
  #controls .label {
    font-size: 0.78rem;
    font-weight: 700;
    color: #9ca3af;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    flex-shrink: 0;
  }
  #progress-bar-wrap {
    flex: 1;
    min-width: 80px;
    height: 6px;
    background: rgba(255,255,255,0.12);
    border-radius: 99px;
    overflow: hidden;
  }
  #progress-bar {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, #F4A316, #4F63B8);
    border-radius: 99px;
    transition: width 0.1s linear;
  }
  #stop-label {
    font-size: 0.82rem;
    color: #e5e7eb;
    min-width: 120px;
    flex-shrink: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  button.map-btn {
    padding: 6px 18px;
    border-radius: 99px;
    border: none;
    font-weight: 700;
    font-size: 0.82rem;
    cursor: pointer;
    transition: all 0.2s;
    flex-shrink: 0;
  }
  #play-btn { background: #F4A316; color: #1f2937; }
  #play-btn:hover { background: #e0920e; transform: scale(1.04); }
  #play-btn.paused { background: #4F63B8; color: #fff; }
  #reset-btn { background: rgba(255,255,255,0.1); color: #f3f4f6; border: 1px solid rgba(255,255,255,0.18); }
  #reset-btn:hover { background: rgba(255,255,255,0.2); }

  /* Leaflet popup override */
  .leaflet-popup-content-wrapper {
    border-radius: 10px !important;
    box-shadow: 0 6px 20px rgba(0,0,0,0.16) !important;
    padding: 0 !important;
    overflow: hidden;
  }
  .leaflet-popup-content { margin: 0 !important; }
  .popup-card { padding: 14px 18px; min-width: 190px; max-width: 260px; }
  .popup-badge {
    display: inline-block;
    font-size: 0.62rem;
    font-weight: 700;
    padding: 2px 10px;
    border-radius: 99px;
    margin-bottom: 8px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #fff;
  }
  .popup-card h4 { font-size: 0.92rem; font-weight: 700; color: #1f2937; margin-bottom: 5px; }
  .popup-card p { font-size: 0.8rem; color: #4b5563; line-height: 1.5; margin: 0; }

  /* Marker styling */
  .stop-pin {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg);
    border: 2.5px solid #fff;
    box-shadow: 0 2px 8px rgba(0,0,0,0.35);
    line-height: 1;
  }
  .stop-pin span {
    transform: rotate(45deg);
    font-size: 14px;
    font-weight: 600;
  }

  /* Glow pulse animation for moving marker */
  @keyframes glow-pulse {
    0%,100% { box-shadow: 0 0 8px 3px rgba(244,163,22,0.7); }
    50%      { box-shadow: 0 0 18px 8px rgba(244,163,22,0.4); }
  }
  .moving-marker-icon div {
    animation: glow-pulse 1.2s ease-in-out infinite;
  }
</style>
</head>
<body>
<div id="map"></div>
<div id="controls">
  <span class="label">Journey</span>
  <div id="progress-bar-wrap"><div id="progress-bar"></div></div>
  <span id="stop-label">Press Play to start</span>
  <button class="map-btn" id="play-btn">▶ Play</button>
  <button class="map-btn" id="reset-btn">↺ Reset</button>
</div>

<script>
const STOPS = ${stopsJSON};

// Type → { bg color, symbol, label }
const TYPES = {
  pickup:    { bg:'#16a34a', sym:'▸', label:'Pickup' },
  drop:      { bg:'#dc2626', sym:'▾', label:'Drop-off' },
  stay:      { bg:'#d97706', sym:'★', label:'Stay' },
  temple:    { bg:'#9f1239', sym:'◉', label:'Temple' },
  nature:    { bg:'#059669', sym:'✿', label:'Nature' },
  mountain:  { bg:'#475569', sym:'▲', label:'Mountain' },
  adventure: { bg:'#2563eb', sym:'◆', label:'Adventure' },
  market:    { bg:'#7c3aed', sym:'●', label:'Market & Dining' },
  springs:   { bg:'#0d9488', sym:'♨', label:'Hot Springs' },
  town:      { bg:'#6b7280', sym:'◦', label:'Waypoint' },
  dam:       { bg:'#0369a1', sym:'≋', label:'Dam' },
  heritage:  { bg:'#92400e', sym:'◈', label:'Heritage' },
};
const DEFAULT_TYPE = { bg:'#4F63B8', sym:'●', label:'Stop' };

function getType(t) { return TYPES[t] || DEFAULT_TYPE; }

// ── Map init ──────────────────────────────────────────────────────────────
const map = L.map('map', { zoomControl: true, attributionControl: false });

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
  maxZoom: 18
}).addTo(map);

const allLatLngs = STOPS.map(s => [s.lat, s.lng]);
map.fitBounds(allLatLngs, { padding: [36, 36] });

// ── Ghost dashed polyline (full path) ─────────────────────────────────────
L.polyline(allLatLngs, {
  color: '#4F63B8',
  weight: 3,
  opacity: 0.22,
  dashArray: '8 10',
  lineCap: 'round',
}).addTo(map);

// ── Animated draw polyline ────────────────────────────────────────────────
const drawLine = L.polyline([], {
  color: '#F4A316',
  weight: 4,
  opacity: 0.9,
  lineCap: 'round',
  lineJoin: 'round',
}).addTo(map);

// ── Category-based pin markers ────────────────────────────────────────────
STOPS.forEach((stop, idx) => {
  const t = getType(stop.type);

  const pinIcon = L.divIcon({
    className: '',
    html: \`<div class="stop-pin" style="background:\${t.bg}"><span>\${t.sym}</span></div>\`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });

  const marker = L.marker([stop.lat, stop.lng], { icon: pinIcon }).addTo(map);
  marker.bindPopup(
    \`<div class="popup-card">
      <span class="popup-badge" style="background:\${t.bg}">\${t.label}</span>
      <h4>\${stop.name}</h4>
      <p>\${stop.desc}</p>
    </div>\`,
    { maxWidth: 280 }
  );
});

// ── Moving animated marker ────────────────────────────────────────────────
const movingIcon = L.divIcon({
  className: 'moving-marker-icon',
  html: \`<div style="
    width:18px;height:18px;border-radius:50%;
    background:#F4A316;border:3px solid #fff;
  "></div>\`,
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});
const movingMarker = L.marker(allLatLngs[0], { icon: movingIcon, zIndexOffset: 1000 }).addTo(map);

// ── Animation engine ──────────────────────────────────────────────────────
const STEP_MS = 22;
const STEPS_PER_SEG = 120;

let playing = false;
let segIdx = 0;
let stepIdx = 0;
let drawnLatLngs = [allLatLngs[0]];

const progressBar = document.getElementById('progress-bar');
const stopLabel   = document.getElementById('stop-label');
const playBtn     = document.getElementById('play-btn');
const resetBtn    = document.getElementById('reset-btn');

let timer = null;

function totalSteps() { return (STOPS.length - 1) * STEPS_PER_SEG; }
function lerp(a, b, t) { return a + (b - a) * t; }

function tick() {
  if (!playing) return;

  if (segIdx >= STOPS.length - 1) {
    stopLabel.textContent = 'Journey complete';
    progressBar.style.width = '100%';
    playBtn.textContent = '▶ Play';
    playBtn.classList.remove('paused');
    playing = false;
    return;
  }

  const from = STOPS[segIdx];
  const to   = STOPS[segIdx + 1];
  const t    = stepIdx / STEPS_PER_SEG;

  const lat = lerp(from.lat, to.lat, t);
  const lng = lerp(from.lng, to.lng, t);

  movingMarker.setLatLng([lat, lng]);
  drawnLatLngs.push([lat, lng]);
  drawLine.setLatLngs(drawnLatLngs);

  const done = segIdx * STEPS_PER_SEG + stepIdx;
  progressBar.style.width = (done / totalSteps() * 100).toFixed(1) + '%';
  stopLabel.textContent = 'Next: ' + to.name;

  stepIdx++;
  if (stepIdx > STEPS_PER_SEG) {
    segIdx++;
    stepIdx = 0;
  }

  timer = setTimeout(tick, STEP_MS);
}

playBtn.addEventListener('click', () => {
  if (playing) {
    playing = false;
    clearTimeout(timer);
    playBtn.textContent = '▶ Resume';
    playBtn.classList.remove('paused');
  } else {
    if (segIdx >= STOPS.length - 1 && stepIdx > STEPS_PER_SEG) {
      resetAnimation();
    }
    playing = true;
    playBtn.textContent = '⏸ Pause';
    playBtn.classList.add('paused');
    tick();
  }
});

resetBtn.addEventListener('click', resetAnimation);

function resetAnimation() {
  playing = false;
  clearTimeout(timer);
  segIdx = 0;
  stepIdx = 0;
  drawnLatLngs = [allLatLngs[0]];
  drawLine.setLatLngs(drawnLatLngs);
  movingMarker.setLatLng(allLatLngs[0]);
  progressBar.style.width = '0%';
  stopLabel.textContent = 'Press Play to start';
  playBtn.textContent = '▶ Play';
  playBtn.classList.remove('paused');
}
</script>
</body>
</html>`;
}
