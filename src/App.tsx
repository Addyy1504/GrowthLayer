import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 🧭 Global Navigation
import Navigation from './components/Navigation';

// 🏡 Pages
import Home from './pages/Home';

// 📂 Case Studies
import LooksSalon from './pages/LooksSalon';
import AnchorFab from './pages/AnchorFab';
import Restaurant from './pages/Restaurant'; // ✅ Added Restaurant Case Study
import RealEstate from './pages/RealEstate'; // ✅ Real Estate Case Study

// 🧰 Services
import ServiceCreatives from './pages/ServiceCreatives';
import ServiceWeb from './pages/ServiceWeb';
import ServiceLabs from './pages/ServiceLabs';

export default function App() {
  return (
    <Router>
      {/* ✅ Navbar visible on all pages */}
      <Navigation />

      {/* 🌐 Page Routes */}
      <Routes>
        {/* 🏠 Home */}
        <Route path="/" element={<Home />} />

        {/* 📂 Case Studies */}
        <Route path="/case-studies/looks-salon" element={<LooksSalon />} />
        <Route path="/case-studies/restaurant" element={<Restaurant />} /> {/* ✅ Added */}
        <Route path="/case-studies/anchor-fab" element={<AnchorFab />} />
        <Route path="/case-studies/real-estate" element={<RealEstate />} />

        {/* 🧰 Services */}
        <Route path="/services/creatives" element={<ServiceCreatives />} />
        <Route path="/services/web" element={<ServiceWeb />} />
        <Route path="/services/labs" element={<ServiceLabs />} />
      </Routes>
    </Router>
  );
}
