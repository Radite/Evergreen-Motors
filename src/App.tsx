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
import './styles/main.css';

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
          <Route path="/models/:modelId" element={<ModelDetail />} />

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