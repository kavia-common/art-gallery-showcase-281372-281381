 import categories from './categories';
 import artists from './artists';
 import artworks from './artworks';
 
 // PUBLIC_INTERFACE
 /**
  * getData
  * Returns a normalized bundle of local data for the app (no backend).
  */
 export function getData() {
   return { categories, artists, artworks };
 }
 
 export { categories, artists, artworks };
