import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Models from './pages/Models';
import TestDrive from './pages/TestDrive';
import Locations from './pages/Locations';
import CashPurchases from './pages/CashPurchases';
import FinanceBank from './pages/FinanceBank';
import Lease from './pages/Lease';
import FinanceDealer from './pages/FinanceDealer';
import Subscriptions from './pages/Subscriptions';
import Rentals from './pages/Rentals';
import FleetSolutions from './pages/FleetSolutions';
import ServiceMaintenance from './pages/ServiceMaintenance';
import RoadsideAssistance from './pages/RoadsideAssistance';
import Warranty from './pages/Warranty';
import Membership from './pages/Membership';
import ChargingLocations from './pages/ChargingLocations';
import Technology from './pages/Technology';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import './styles/main.css';
import Ownership from './pages/Ownership';
import Purchasing from './pages/Purchasing';

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
      <ScrollToTop />
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<Models />} />
          <Route path="/test-drive" element={<TestDrive />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/cash-purchases" element={<CashPurchases />} />
          <Route path="/finance-bank" element={<FinanceBank />} />
          <Route path="/lease" element={<Lease />} />
          <Route path="/finance-dealer" element={<FinanceDealer />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/fleet-solutions" element={<FleetSolutions />} />
          <Route path="/service-maintenance" element={<ServiceMaintenance />} />
          <Route path="/roadside-assistance" element={<RoadsideAssistance />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/charging-locations" element={<ChargingLocations />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ownership" element={<Ownership />} />
          <Route path="/purchasing" element={<Purchasing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;