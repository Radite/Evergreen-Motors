import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Models from './pages/Models';
import ModelDetail from './pages/ModelDetail';
import Technology from './pages/Technology';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Ownership from './pages/Ownership';
import Purchasing from './pages/Purchasing';
import TestDrivePage from './pages/TestDrivePage/TestDriveOriginal';
import './styles/main.css';
import AssistancePage from './pages/Assistance';
import ServiceMaintenancePage from './pages/ServiceMaintenance';
import BYDShellPage from './pages/ChargeCards';
import WarrantyPolicyPage from './pages/Warranty';
import ChargingLocationsPage from './pages/ChargingLocations';

// Import BYD Model Pages
import ATTO2Page from './pages/Models/ATTO2Page';
import ATTO3Page from './pages/Models/ATTO3Page';
import DolphinMiniPage from './pages/Models/DolphinMiniPage';
import SEALUPage from './pages/Models/SEALUPage';
import TANGPage from './pages/Models/TANGPage';
import Shark6Page from './pages/Models/Shark6Page';
import SONGPROPage from './pages/Models/SONGPROPage';

// Import Purchasing Pages
import Locations from './pages/Purchasing/Locations';
import CashPurchases from './pages/Purchasing/CashPurchases';
import FinanceBank from './pages/Purchasing/FinanceBank';
import Lease from './pages/Purchasing/Lease';
import FinanceDealer from './pages/Purchasing/FinanceDealer';
import Subscriptions from './pages/Purchasing/Subscriptions';
import Rentals from './pages/Purchasing/Rentals';
import FleetBusinessSolutions from './pages/Purchasing/FleetBusinessSolutions';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's a hash, scroll to that element
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // No hash, scroll to top instantly
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <ScrollToTop />
        <main className="main-content">
          <Routes>
            {/* Home & General Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/models" element={<Models />} />
            <Route path="/models/:id" element={<ModelDetail />} />

            {/* Individual Car Model Routes */}
            <Route path="/models/atto-2" element={<ATTO2Page />} />
            <Route path="/models/atto-3" element={<ATTO3Page />} />
            <Route path="/models/dolphin-mini" element={<DolphinMiniPage />} />
            <Route path="/models/seal-u" element={<SEALUPage />} />
            <Route path="/models/tang" element={<TANGPage />} />
            <Route path="/models/shark-6" element={<Shark6Page />} />
            <Route path="/models/song-pro" element={<SONGPROPage />} />

            {/* Other Routes */}
            <Route path="/technology" element={<Technology />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />

            {/* Ownership Routes */}
            <Route path="/ownership" element={<Ownership />} />
            <Route path="/ownership/assistance" element={<AssistancePage />} />
            <Route path="/ownership/service-maintenance" element={<ServiceMaintenancePage />} />
            <Route path="/ownership/charge-cards" element={<BYDShellPage />} />
            <Route path="/ownership/warranty" element={<WarrantyPolicyPage />} />
            <Route path="/ownership/charging-locations" element={<ChargingLocationsPage />} />

            {/* Purchasing Routes */}
            <Route path="/purchasing" element={<Purchasing />} />
            <Route path="/purchasing/locations" element={<Locations />} />
            <Route path="/purchasing/cash-purchase" element={<CashPurchases />} />
            <Route path="/purchasing/finance-bank" element={<FinanceBank />} />
            <Route path="/purchasing/lease" element={<Lease />} />
            <Route path="/purchasing/finance-dealer" element={<FinanceDealer />} />
            <Route path="/purchasing/subscriptions" element={<Subscriptions />} />
            <Route path="/purchasing/rentals" element={<Rentals />} />
            <Route path="/purchasing/fleet-solutions" element={<FleetBusinessSolutions />} />
            
            {/* Legacy test drive route (if you want to keep the original) */}
            <Route path="/test-drive" element={<TestDrivePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
