import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Models from './pages/Models';
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

// Import Model Page Template
import ModelPage from './pages/ModelPage';

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

            {/* Individual Model Routes - Electric Cars */}
            <Route path="/models/dolphin-mini" element={<ModelPage />} />
            <Route path="/models/atto-2" element={<ModelPage />} />
            <Route path="/models/atto-3" element={<ModelPage />} />
            <Route path="/models/icar-03" element={<ModelPage />} />
            <Route path="/models/seal-u" element={<ModelPage />} />
            <Route path="/models/sealion-07" element={<ModelPage />} />
            <Route path="/models/tang" element={<ModelPage />} />
            <Route path="/models/radar-king-kong" element={<ModelPage />} />

            {/* Individual Model Routes - Hybrid Cars */}
            <Route path="/models/song-pro" element={<ModelPage />} />
            <Route path="/models/leopard-ti7" element={<ModelPage />} />
            <Route path="/models/yu8" element={<ModelPage />} />
            <Route path="/models/shark" element={<ModelPage />} />


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
            
            {/* Test Drive Route */}
            <Route path="/test-drive" element={<TestDrivePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;