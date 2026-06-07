import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import DestinationsPage from './pages/Destinations/DestinationsPage';
import ContactPage from './pages/Contact/ContactPage';
import AboutPage from './pages/About/AboutPage';
import PrivacyPage from './pages/Privacy/PrivacyPage';
import ComplaintsPage from './pages/Complaints/ComplaintsPage';
import CustomTripPage from './pages/CustomTrip/CustomTripPage';
import ThemePage from './pages/Packages/ThemePage';

// Static Package Detail Pages
import Shimla2N3DChandigarh from './pages/PackageDetail/packages/Shimla2N3DChandigarh';
import Shimla3N4DChandigarh from './pages/PackageDetail/packages/Shimla3N4DChandigarh';
import Shimla2N3DDelhi from './pages/PackageDetail/packages/Shimla2N3DDelhi';
import Shimla3N4DDelhi from './pages/PackageDetail/packages/Shimla3N4DDelhi';
import Manali2N3DChandigarh from './pages/PackageDetail/packages/Manali2N3DChandigarh';
import Manali3N4DChandigarh from './pages/PackageDetail/packages/Manali3N4DChandigarh';
import Manali4N5DChandigarh from './pages/PackageDetail/packages/Manali4N5DChandigarh';
import Manali3N4DDelhi from './pages/PackageDetail/packages/Manali3N4DDelhi';
import Manali4N5DDelhi from './pages/PackageDetail/packages/Manali4N5DDelhi';

// Combo Package Detail Pages
import ShimlaManali4N5DChandigarh from './pages/PackageDetail/packages/ShimlaManali4N5DChandigarh';
import ShimlaManali5N6DChandigarh from './pages/PackageDetail/packages/ShimlaManali5N6DChandigarh';
import ShimlaManali6N7DChandigarh from './pages/PackageDetail/packages/ShimlaManali6N7DChandigarh';
import ShimlaManali7N8DChandigarh from './pages/PackageDetail/packages/ShimlaManali7N8DChandigarh';
import ShimlaManali4N5DDelhi from './pages/PackageDetail/packages/ShimlaManali4N5DDelhi';
import ShimlaManali5N6DDelhi from './pages/PackageDetail/packages/ShimlaManali5N6DDelhi';
import ShimlaManali6N7DDelhi from './pages/PackageDetail/packages/ShimlaManali6N7DDelhi';
import ShimlaManaliChandigarh7N8DDelhi from './pages/PackageDetail/packages/ShimlaManaliChandigarh7N8DDelhi';
import Himachal6n7dChandigarh from './pages/PackageDetail/packages/Himachal6n7dChandigarh';
import Himachal7n8dChandigarh from './pages/PackageDetail/packages/Himachal7n8dChandigarh';
import Himachal8n9dChandigarh from './pages/PackageDetail/packages/Himachal8n9dChandigarh';
import ShimlaManaliDharamshalaDalhousieAmritsar8n9dChandigarh from './pages/PackageDetail/packages/ShimlaManaliDharamshalaDalhousieAmritsar8n9dChandigarh';
import Himachal6n7dDelhi from './pages/PackageDetail/packages/Himachal6n7dDelhi';
import Himachal7n8dDelhi from './pages/PackageDetail/packages/Himachal7n8dDelhi';
import ShimlaManaliDharamshalaDalhousie8n9dDelhi from './pages/PackageDetail/packages/ShimlaManaliDharamshalaDalhousie8n9dDelhi';
import ShimlaManaliDharamshalaDalhousieChandigarh8n9dDelhi from './pages/PackageDetail/packages/ShimlaManaliDharamshalaDalhousieChandigarh8n9dDelhi';
import ShimlaManaliDharamshalaDalhousieAmritsar8n9dDelhi from './pages/PackageDetail/packages/ShimlaManaliDharamshalaDalhousieAmritsar8n9dDelhi';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
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
      </main>
      <Footer />
    </Router>
  );
}

export default App;
