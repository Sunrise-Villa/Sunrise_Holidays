import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const Home = React.lazy(() => import('./pages/Home/Home'));
const DestinationsPage = React.lazy(() => import('./pages/Destinations/DestinationsPage'));
const ContactPage = React.lazy(() => import('./pages/Contact/ContactPage'));
const AboutPage = React.lazy(() => import('./pages/About/AboutPage'));
const PrivacyPage = React.lazy(() => import('./pages/Privacy/PrivacyPage'));
const ComplaintsPage = React.lazy(() => import('./pages/Complaints/ComplaintsPage'));
const CustomTripPage = React.lazy(() => import('./pages/CustomTrip/CustomTripPage'));
const ThemePage = React.lazy(() => import('./pages/Packages/ThemePage'));

// Static Package Detail Pages
const Shimla2N3DChandigarh = React.lazy(() => import('./pages/PackageDetail/packages/Shimla2N3DChandigarh'));
const Shimla3N4DChandigarh = React.lazy(() => import('./pages/PackageDetail/packages/Shimla3N4DChandigarh'));
const Shimla2N3DDelhi = React.lazy(() => import('./pages/PackageDetail/packages/Shimla2N3DDelhi'));
const Shimla3N4DDelhi = React.lazy(() => import('./pages/PackageDetail/packages/Shimla3N4DDelhi'));
const Manali2N3DChandigarh = React.lazy(() => import('./pages/PackageDetail/packages/Manali2N3DChandigarh'));
const Manali3N4DChandigarh = React.lazy(() => import('./pages/PackageDetail/packages/Manali3N4DChandigarh'));
const Manali4N5DChandigarh = React.lazy(() => import('./pages/PackageDetail/packages/Manali4N5DChandigarh'));
const Manali3N4DDelhi = React.lazy(() => import('./pages/PackageDetail/packages/Manali3N4DDelhi'));
const Manali4N5DDelhi = React.lazy(() => import('./pages/PackageDetail/packages/Manali4N5DDelhi'));

// Combo Package Detail Pages
const ShimlaManali4N5DChandigarh = React.lazy(() => import('./pages/PackageDetail/packages/ShimlaManali4N5DChandigarh'));
const ShimlaManali5N6DChandigarh = React.lazy(() => import('./pages/PackageDetail/packages/ShimlaManali5N6DChandigarh'));
const ShimlaManali6N7DChandigarh = React.lazy(() => import('./pages/PackageDetail/packages/ShimlaManali6N7DChandigarh'));
const ShimlaManali7N8DChandigarh = React.lazy(() => import('./pages/PackageDetail/packages/ShimlaManali7N8DChandigarh'));
const ShimlaManali4N5DDelhi = React.lazy(() => import('./pages/PackageDetail/packages/ShimlaManali4N5DDelhi'));
const ShimlaManali5N6DDelhi = React.lazy(() => import('./pages/PackageDetail/packages/ShimlaManali5N6DDelhi'));
const ShimlaManali6N7DDelhi = React.lazy(() => import('./pages/PackageDetail/packages/ShimlaManali6N7DDelhi'));
const ShimlaManaliChandigarh7N8DDelhi = React.lazy(() => import('./pages/PackageDetail/packages/ShimlaManaliChandigarh7N8DDelhi'));
const Himachal6n7dChandigarh = React.lazy(() => import('./pages/PackageDetail/packages/Himachal6n7dChandigarh'));
const Himachal7n8dChandigarh = React.lazy(() => import('./pages/PackageDetail/packages/Himachal7n8dChandigarh'));
const Himachal8n9dChandigarh = React.lazy(() => import('./pages/PackageDetail/packages/Himachal8n9dChandigarh'));
const ShimlaManaliDharamshalaDalhousieAmritsar8n9dChandigarh = React.lazy(() => import('./pages/PackageDetail/packages/ShimlaManaliDharamshalaDalhousieAmritsar8n9dChandigarh'));
const Himachal6n7dDelhi = React.lazy(() => import('./pages/PackageDetail/packages/Himachal6n7dDelhi'));
const Himachal7n8dDelhi = React.lazy(() => import('./pages/PackageDetail/packages/Himachal7n8dDelhi'));
const ShimlaManaliDharamshalaDalhousie8n9dDelhi = React.lazy(() => import('./pages/PackageDetail/packages/ShimlaManaliDharamshalaDalhousie8n9dDelhi'));
const ShimlaManaliDharamshalaDalhousieChandigarh8n9dDelhi = React.lazy(() => import('./pages/PackageDetail/packages/ShimlaManaliDharamshalaDalhousieChandigarh8n9dDelhi'));
const ShimlaManaliDharamshalaDalhousieAmritsar8n9dDelhi = React.lazy(() => import('./pages/PackageDetail/packages/ShimlaManaliDharamshalaDalhousieAmritsar8n9dDelhi'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <React.Suspense fallback={
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh', flexDirection: 'column', gap: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '3px solid rgba(79, 99, 184, 0.1)', borderTopColor: 'var(--primary)', animation: 'spin 1s linear infinite' }}></div>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500, letterSpacing: '0.5px' }}>Loading...</span>
            <style>{`
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/destinations/:category" element={<DestinationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/complaints" element={<ComplaintsPage />} />
            <Route path="/custom-trip" element={<CustomTripPage />} />
            <Route path="/packages/:theme" element={<ThemePage />} />
            
            {/* Explicit Package Itinerary Routes */}
            <Route path="/package/shimla-2n-3d-chandigarh" element={<Shimla2N3DChandigarh />} />
            <Route path="/package/shimla-3n-4d-chandigarh" element={<Shimla3N4DChandigarh />} />
            <Route path="/package/shimla-2n-3d-delhi" element={<Shimla2N3DDelhi />} />
            <Route path="/package/shimla-3n-4d-delhi" element={<Shimla3N4DDelhi />} />
            <Route path="/package/manali-2n-3d-chandigarh" element={<Manali2N3DChandigarh />} />
            <Route path="/package/manali-3n-4d-chandigarh" element={<Manali3N4DChandigarh />} />
            <Route path="/package/manali-4n-5d-chandigarh" element={<Manali4N5DChandigarh />} />
            <Route path="/package/manali-3n-4d-delhi" element={<Manali3N4DDelhi />} />
            <Route path="/package/manali-4n-5d-delhi" element={<Manali4N5DDelhi />} />
            
            {/* Explicit Combo Itinerary Routes */}
            <Route path="/package/shimla-manali-4n-5d-chandigarh" element={<ShimlaManali4N5DChandigarh />} />
            <Route path="/package/shimla-manali-5n-6d-chandigarh" element={<ShimlaManali5N6DChandigarh />} />
            <Route path="/package/shimla-manali-6n-7d-chandigarh" element={<ShimlaManali6N7DChandigarh />} />
            <Route path="/package/shimla-manali-7n-8d-chandigarh" element={<ShimlaManali7N8DChandigarh />} />
            <Route path="/package/shimla-manali-4n-5d-delhi" element={<ShimlaManali4N5DDelhi />} />
            <Route path="/package/shimla-manali-5n-6d-delhi" element={<ShimlaManali5N6DDelhi />} />
            <Route path="/package/shimla-manali-6n-7d-delhi" element={<ShimlaManali6N7DDelhi />} />
            <Route path="/package/shimla-manali-chandigarh-7n-8d-delhi" element={<ShimlaManaliChandigarh7N8DDelhi />} />
            <Route path="/package/himachal-6n-7d-chandigarh" element={<Himachal6n7dChandigarh />} />
            <Route path="/package/himachal-7n-8d-chandigarh" element={<Himachal7n8dChandigarh />} />
            <Route path="/package/himachal-8n-9d-chandigarh" element={<Himachal8n9dChandigarh />} />
            <Route path="/package/shimla-manali-dharamshala-dalhousie-amritsar-8n-9d-chandigarh" element={<ShimlaManaliDharamshalaDalhousieAmritsar8n9dChandigarh />} />
            <Route path="/package/himachal-6n-7d-delhi" element={<Himachal6n7dDelhi />} />
            <Route path="/package/himachal-7n-8d-delhi" element={<Himachal7n8dDelhi />} />
            <Route path="/package/shimla-manali-dharamshala-dalhousie-8n-9d-delhi" element={<ShimlaManaliDharamshalaDalhousie8n9dDelhi />} />
            <Route path="/package/shimla-manali-dharamshala-dalhousie-chandigarh-8n-9d-delhi" element={<ShimlaManaliDharamshalaDalhousieChandigarh8n9dDelhi />} />
            <Route path="/package/shimla-manali-dharamshala-dalhousie-amritsar-8n-9d-delhi" element={<ShimlaManaliDharamshalaDalhousieAmritsar8n9dDelhi />} />
          </Routes>
        </React.Suspense>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
