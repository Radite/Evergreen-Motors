import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src="/text-1760673746758.png" alt="BYD Logo" className="logo-image" />
        </Link>
        <ul className="nav-menu">
          <li className="dropdown">
            <Link to="/models">Models</Link>
            <div className="dropdown-content">
              <Link to="/models">Dolfin Mini</Link>
              <Link to="/models">Atto 2</Link>
              <Link to="/models">Atto 3</Link>
              <Link to="/models">Song Pro</Link>
              <Link to="/models">Seal U</Link>
              <Link to="/models">Leopard 7</Link>
              <Link to="/models">Tang L</Link>
              <Link to="/models">Radar</Link>
              <Link to="/models">Shark</Link>
            </div>
          </li>
          <li className="dropdown">
            <Link to="/purchasing">Purchasing</Link>
            <div className="dropdown-content">
              <Link to="/test-drive">Test Drive</Link>
              <Link to="/locations">Locations</Link>
              <Link to="/cash-purchases">Cash Purchases</Link>
              <Link to="/finance-bank">Finance (Bank)</Link>
              <Link to="/lease">Lease</Link>
              <Link to="/finance-dealer">Finance (Dealer)</Link>
              <Link to="/subscriptions">Subscriptions</Link>
              <Link to="/rentals">Rentals</Link>
              <Link to="/fleet-solutions">Fleet & Business Solutions</Link>
            </div>
          </li>
          <li className="dropdown">
            <Link to="/ownership">Ownership</Link>
            <div className="dropdown-content">
              <a href="/ownership#service-maintenance">Service & Maintenance</a>
              <a href="/ownership#roadside-assistance">EM Roadside Assistance</a>
              <a href="/ownership#warranty">Warranty</a>
              <a href="/ownership#membership">EM Membership & Charge Cards</a>
              <a href="/ownership#charging-locations">Charging Locations</a>
            </div>
          </li>
          <li>
            <Link to="/technology">Technology</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;