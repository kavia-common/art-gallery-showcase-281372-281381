# Ocean Gallery - React Frontend

Elegant art gallery frontend built with React. Features a responsive artwork grid with category filters, a lightbox image viewer, and artist profiles. The app uses local data modules and does not require a backend.

## Features

- Responsive grid of artworks with category filters and search
- Lightbox modal with next/previous navigation and keyboard support
- Artist profile pages with bio and related artworks
- Navigation bar with routes for Home, Collections, and Artists
- Elegant "Ocean Professional" theme using soft pastels and gradients
- Subtle micro-interactions and accessible animations
- Environment variables read from `.env` but not required for functionality
- Runs on port 3000 by default (Create React App)

## Getting Started

1. Install dependencies

   npm install

2. Start the development server (port can be overridden with REACT_APP_PORT)

   REACT_APP_PORT=3000 npm start

   Open http://localhost:3000 in your browser.

3. Build for production

   npm run build

## Routes

- / — Home gallery (all artworks with filters)
- /collections/:categoryId — Filtered view (e.g., /collections/abstract)
- /artists/:artistId — Artist profile (e.g., /artists/aqua-lee)

## Environment variables

The following are read for future compatibility but not required:

- REACT_APP_API_BASE
- REACT_APP_BACKEND_URL
- REACT_APP_FRONTEND_URL
- REACT_APP_WS_URL
- REACT_APP_NODE_ENV
- REACT_APP_NEXT_TELEMETRY_DISABLED
- REACT_APP_ENABLE_SOURCE_MAPS
- REACT_APP_PORT
- REACT_APP_TRUST_PROXY
- REACT_APP_LOG_LEVEL
- REACT_APP_HEALTHCHECK_PATH
- REACT_APP_FEATURE_FLAGS
- REACT_APP_EXPERIMENTS_ENABLED

You may create a `.env` file with any of these, for example:

REACT_APP_PORT=3000

Note: Do not commit secrets. The app does not rely on a backend for data.

## Design and Theming

Theme variables are defined in src/App.css:

- primary: #F472B6
- secondary: #F59E0B
- success: #10B981
- error: #EF4444
- background: #FDF2F8
- surface: #FFFFFF
- text: #374151

The UI uses refined rounded components, soft shadows, and subtle gradients to match the Elegant Ocean Professional style.

## Animations and Accessibility

- Micro-interactions: buttons, nav links, cards, and images have hover/active states with gentle motion.
- Grid reveal: artwork cards fade/scale-in with a small stagger when loading or when filters/search change.
- Lightbox: open/close transitions use a fade + scale effect; ESC and arrow keys are supported.
- Page transitions: route changes fade in subtly.
- Reduced motion: the app honors `prefers-reduced-motion`; animations and transitions are disabled when users prefer less motion.
- Focus visibility: keyboard users see a high-contrast focus outline using the primary accent color.
- Performance: animations use opacity/transform with GPU-friendly transitions and minimal JS—no additional dependencies.

## Data and Assets

Local data lives in:
- src/data/categories.js
- src/data/artists.js
- src/data/artworks.js
- src/data/index.js (exports getData())

Artworks include optimized thumbnails for the grid and full-size images for the lightbox:
- thumbnailSrc: smaller image for the grid
- imageSrc: full-size image for the lightbox
- alt and description fields are provided for accessibility
- credit field is shown as a small caption in the lightbox

The default dataset uses license-friendly images from Unsplash via remote URLs. To replace with local files:

1. Place images in:
   public/assets/images/

2. Update image paths in data files to:
   /assets/images/<your-file>.jpg

3. Prefer providing two versions per artwork:
   - thumbnail (e.g., <name>-thumb.jpg) for the grid
   - full (e.g., <name>-full.jpg) for the lightbox

No backend is required; all data is local and static.

## Content Credits

Default images are sourced from Unsplash (https://unsplash.com) under the Unsplash License. Please review the license before production usage and replace assets if needed.

## Testing

Run tests:

npm test

## Notes

- This app uses react-router-dom v6 for routing.
- No backend is required; all data is local and static for now.
