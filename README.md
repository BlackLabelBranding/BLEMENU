# BLEMENU

BLEMENU is a React-based digital menu experience for venue, restaurant, and hospitality brands that want a stronger mobile-first menu than a plain PDF or static image.

The current build ships a Klincher-themed pilot menu with bold branding, responsive layout, category filtering, and live search.

## Current App

This version includes:

- A branded hero section built around the Klincher pilot
- Responsive menu browsing for phone and desktop
- Category filters for fast scanning
- Live search across dishes and tags
- Structured menu content stored in a single data file

## Tech Stack

- React 18
- react-scripts 5
- CSS

## Project Structure

```text
BLEMENU/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── menuData.js
├── package.json
└── README.md
```

## Getting Started

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open the app at `http://localhost:3000`.

## Production Build

```bash
npm run build
```

This creates the production bundle in the `build/` directory.

## Content Updates

Menu content lives in `src/menuData.js`.

Update that file when you want to:

- change dish names
- update descriptions
- adjust pricing
- add or remove categories
- tune the searchable tags

## Styling Updates

Visual styling lives in `src/index.css`.

That file controls:

- the dark Klincher-inspired palette
- hero layout
- responsive spacing
- menu section styling
- filter and search presentation

## Next Product Steps

Natural next upgrades for BLEMENU:

- QR-code entry flow
- admin-managed menu editing
- Supabase-backed menu storage
- venue-level theming per client
- ordering or reservation integration

## License

Copyright © 2026 Black Label Branding. All rights reserved.
