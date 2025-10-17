# BYD Website Clone (TypeScript/TSX)

A complete React + TypeScript clone of BYD.com with all requested menu structures and pages.

## Features

### Navigation Menu Structure

**Models:**
- Dolfin Mini
- Atto 2
- Atto 3
- Song Pro
- Seal U
- Leopard 7
- Tang L
- Radar
- Shark

**Purchasing:**
- Test Drive
- Locations
- Cash Purchases
- Finance (Bank)
- Lease
- Finance (Dealer)
- Subscriptions
- Rentals
- Fleet & Business Solutions

**Ownership:**
- Service & Maintenance
- EM Roadside Assistance
- Warranty
- EM Membership & Charge Cards
- Charging Locations

**Other Pages:**
- Technology (NEVs)
- About Us
- Contact

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser to `http://localhost:3000`

## Building for Production

To create a production build:

```bash
npm run build
```

The build files will be in the `dist` folder.

## Project Structure

```
byd-clone-tsx/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx    # Main navigation with dropdown menus
│   │   └── Footer.tsx         # Footer component
│   ├── pages/
│   │   ├── Home.tsx           # Homepage with hero and diversification
│   │   ├── Models.tsx         # All vehicle models
│   │   ├── Technology.tsx     # e-Platform 3.0 and NEVs
│   │   ├── AboutUs.tsx        # Company information
│   │   ├── Contact.tsx        # Contact page with map
│   │   ├── Locations.tsx      # Dealership locations with map
│   │   ├── TestDrive.tsx
│   │   ├── CashPurchases.tsx
│   │   ├── FinanceBank.tsx
│   │   ├── Lease.tsx
│   │   ├── FinanceDealer.tsx
│   │   ├── Subscriptions.tsx
│   │   ├── Rentals.tsx
│   │   ├── FleetSolutions.tsx
│   │   ├── ServiceMaintenance.tsx
│   │   ├── RoadsideAssistance.tsx
│   │   ├── Warranty.tsx
│   │   ├── Membership.tsx
│   │   └── ChargingLocations.tsx
│   ├── styles/
│   │   └── main.css          # All styling
│   ├── App.tsx                # Main app with routing
│   └── index.tsx              # Entry point
├── public/
├── index.html
├── package.json
├── tsconfig.json              # TypeScript configuration
├── tsconfig.node.json
└── vite.config.ts

```

## TypeScript Features

- Strict type checking enabled
- Interface definitions for data structures
- Type-safe React components
- Enhanced IDE support and autocomplete
- Better code maintainability

## Features Implemented

### Design
- Dark theme navigation with dropdown menus
- Responsive layout for all screen sizes
- Modern gradient hero sections
- Card-based content layouts
- Professional styling matching BYD aesthetic

### Functionality
- React Router for navigation
- Dropdown menus for Models, Purchasing, and Ownership
- Interactive map integration using OpenStreetMap
- Contact page with phone, email, and address
- Locations page showing multiple dealerships with map
- Fully responsive design
- **All files use .tsx extension**

### Contact Information
- Phone: +1 (234) 567-890
- Email: info@byd.com, sales@byd.com
- Locations page with interactive map
- Contact page with map showing headquarters

### Maps
- OpenStreetMap integration (no API key required)
- Embedded maps on Contact and Locations pages
- Can be easily switched to Google Maps if preferred

## Technologies Used

- React 18
- TypeScript 5.3
- React Router DOM 6
- Vite (Fast build tool)
- CSS3
- OpenStreetMap for maps

## TypeScript Configuration

The project uses strict TypeScript configuration:
- Strict mode enabled
- No unused locals
- No unused parameters
- No fallthrough cases in switch

## Customization

### Updating Contact Information
Edit `/src/pages/Contact.tsx` to update phone numbers, emails, and addresses.

### Adding/Removing Vehicle Models
Edit `/src/pages/Models.tsx` to modify the models array with proper TypeScript interfaces.

### Changing Map Provider
To use Google Maps instead of OpenStreetMap, update the iframe src in:
- `/src/pages/Contact.tsx`
- `/src/pages/Locations.tsx`
- `/src/pages/ChargingLocations.tsx`

### Styling
All styles are in `/src/styles/main.css`. Modify colors, fonts, and layouts there.

## TypeScript Benefits

- **Type Safety**: Catch errors at compile time
- **Better IDE Support**: Enhanced autocomplete and refactoring
- **Self-Documenting**: Interfaces document expected data structures
- **Maintainability**: Easier to refactor and maintain large codebases
- **Team Development**: Clear contracts between components

## Notes

- All files use .tsx extension (TypeScript + JSX)
- Maps use OpenStreetMap (free, no API key needed)
- Contact page includes phone and email without special forms
- Project is ready to deploy to any static hosting service
- Fully functional navigation with all requested menu items
- Type definitions included for all components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

The project uses Vite for fast development:
- Hot Module Replacement (HMR)
- Fast build times
- Optimized production builds
- TypeScript support out of the box

## License

This is a demo project for educational purposes.
