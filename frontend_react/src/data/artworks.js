 // PUBLIC_INTERFACE
 /**
  * artworks.js
  * Export a list of artworks with realistic metadata, thumbnails, and full-size images.
  * Note: imageSrc points to a higher-resolution version; thumbnailSrc is optimized for the grid.
  * To switch to local files, place images under public/assets/images and change URLs to `/assets/images/...`
  */
 const artworks = [
   {
     id: 'art-1',
     title: 'Blush Tides',
     artistId: 'aqua-lee',
     categoryIds: ['abstract', 'modern', 'seascape'],
     year: 2021,
     medium: 'Acrylic on canvas',
     dimensions: '80 x 100 cm',
     description:
       'A gentle interplay of rose and lavender hues, inspired by early morning tides.',
     imageSrc:
       'https://images.unsplash.com/photo-1495562569060-2eec283d3391?q=80&w=2000&auto=format&fit=crop',
     thumbnailSrc:
       'https://images.unsplash.com/photo-1495562569060-2eec283d3391?q=80&w=600&auto=format&fit=crop',
     alt: 'Abstract waves in rose and lavender tones blending softly',
     tags: ['ocean', 'soft gradients', 'rose'],
     credit: 'Photo via Unsplash',
   },
   {
     id: 'art-2',
     title: 'Lavender Coast',
     artistId: 'aqua-lee',
     categoryIds: ['landscape', 'seascape'],
     year: 2020,
     medium: 'Oil on panel',
     dimensions: '60 x 80 cm',
     description:
       'Pastel shoreline with a calming lavender sky meeting a tranquil sea.',
     imageSrc:
       'https://images.unsplash.com/photo-1500534312687-068f0a0244fd?q=80&w=2000&auto=format&fit=crop',
     thumbnailSrc:
       'https://images.unsplash.com/photo-1500534312687-068f0a0244fd?q=80&w=600&auto=format&fit=crop',
     alt: 'Lavender sky and calm sea forming a peaceful horizon',
     tags: ['coast', 'horizon', 'pastel'],
     credit: 'Photo via Unsplash',
   },
   {
     id: 'art-3',
     title: 'Gilded Horizon',
     artistId: 'marin-sato',
     categoryIds: ['landscape', 'modern'],
     year: 2019,
     medium: 'Mixed media',
     dimensions: '90 x 120 cm',
     description:
       'A serene horizon with warm golden undertones blending into cool oceanic blues.',
     imageSrc:
       'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=2000&auto=format&fit=crop',
     thumbnailSrc:
       'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=600&auto=format&fit=crop',
     alt: 'Warm golden light meeting cool blue sea at the horizon',
     tags: ['gold', 'blue', 'serenity'],
     credit: 'Photo via Unsplash',
   },
   {
     id: 'art-4',
     title: 'Portrait of Dawn',
     artistId: 'sol-arias',
     categoryIds: ['portrait', 'modern'],
     year: 2022,
     medium: 'Digital painting',
     dimensions: '3000 x 4000 px',
     description:
       'Soft light illuminates a modern portrait with layered gradients and delicate highlights.',
     imageSrc:
       'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop',
     thumbnailSrc:
       'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop',
     alt: 'Modern portrait with soft dawn light and gradient tones',
     tags: ['portrait', 'light', 'modern'],
     credit: 'Photo via Unsplash',
   },
   {
     id: 'art-5',
     title: 'Rosewater Echo',
     artistId: 'aqua-lee',
     categoryIds: ['abstract', 'minimal'],
     year: 2021,
     medium: 'Acrylic on wood',
     dimensions: '70 x 70 cm',
     description:
       'Minimal abstract piece with rosewater hues echoing across a gentle surface.',
     imageSrc:
       'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000&auto=format&fit=crop',
     thumbnailSrc:
       'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop',
     alt: 'Minimal abstract with blush pink tones and soft textures',
     tags: ['minimal', 'rose', 'texture'],
     credit: 'Photo via Unsplash',
   },
   {
     id: 'art-6',
     title: 'Quiet Valley',
     artistId: 'marin-sato',
     categoryIds: ['landscape'],
     year: 2018,
     medium: 'Oil on canvas',
     dimensions: '80 x 100 cm',
     description:
       'A tranquil valley scene with misty layers and a muted pastel palette.',
     imageSrc:
       'https://images.unsplash.com/photo-1500534312687-068f0a0244fd?q=80&w=2000&auto=format&fit=crop',
     thumbnailSrc:
       'https://images.unsplash.com/photo-1500534312687-068f0a0244fd?q=80&w=600&auto=format&fit=crop',
     alt: 'Pastel valley landscape with mist and layered hills',
     tags: ['valley', 'mist', 'pastel'],
     credit: 'Photo via Unsplash',
   },
 ];
 
 export default artworks;
