 // PUBLIC_INTERFACE
 /**
  * artists.js
  * Export a list of artists with realistic metadata.
  * imageSrc fields can be switched to local files under /public/assets/images later.
  */
 const artists = [
   {
     id: 'aqua-lee',
     name: 'Aqua Lee',
     yearOfBirth: 1988,
     nationality: 'South Korean',
     avatarSrc:
       'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=640&auto=format&fit=crop',
     coverSrc:
       'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1600&auto=format&fit=crop',
     bio: 'Aqua explores fluid forms and color harmonies inspired by ocean currents and morning light.',
     website: 'https://example.com/aqua-lee',
     tags: ['abstract', 'ocean', 'color field'],
   },
   {
     id: 'marin-sato',
     name: 'Marin Sato',
     yearOfBirth: 1991,
     nationality: 'Japanese',
     avatarSrc:
       'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=640&auto=format&fit=crop',
     coverSrc:
       'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
     bio: 'Marin captures serene landscapes with delicate pastel palettes and refined composition.',
     website: 'https://example.com/marin-sato',
     tags: ['landscape', 'pastel', 'horizon'],
   },
   {
     id: 'sol-arias',
     name: 'Sol Arias',
     yearOfBirth: 1985,
     nationality: 'Argentinian',
     avatarSrc:
       'https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=640&auto=format&fit=crop',
     coverSrc:
       'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop',
     bio: 'Sol blends modern portraiture with subtle gradients, focusing on human presence and light.',
     website: 'https://example.com/sol-arias',
     tags: ['portrait', 'modern', 'gradient'],
   },
 ];
 
 export default artists;
