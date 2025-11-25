# art-gallery-showcase-281372-281381

This workspace contains the Ocean Gallery React frontend (frontend_react) showcasing an elegant art gallery with a responsive grid, lightbox, and artist profiles. Navigate to frontend_react for setup and run instructions.

## Assets

- You can place local images in `frontend_react/public/assets/images/`.
- The app ships with remote, license-friendly sample images (Unsplash) referenced from data files.
- To swap to local assets, update `src/data/*.js` to use `/assets/images/<file>` for `thumbnailSrc` and `imageSrc`.
- Keep two sizes per artwork for performance: a smaller thumbnail for the grid and a larger image for the lightbox.