import React, { useMemo, useState, useEffect, useCallback, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useParams, useNavigate, useLocation } from 'react-router-dom';
import './App.css';

/**
 * PUBLIC_INTERFACE
 * App
 * Top-level component for the Art Gallery frontend. Provides routing, theme,
 * navigation, and pages for the artwork grid, collections, and artist profiles.
 * Environment variables (REACT_APP_*) are read but app does not depend on any backend.
 */
function App() {
  // Theme toggle (light only visual gradient provided)
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Read environment variables (do not rely on them)
  const env = {
    apiBase: process.env.REACT_APP_API_BASE || '',
    backendUrl: process.env.REACT_APP_BACKEND_URL || '',
    frontendUrl: process.env.REACT_APP_FRONTEND_URL || '',
    wsUrl: process.env.REACT_APP_WS_URL || '',
    nodeEnv: process.env.REACT_APP_NODE_ENV || '',
    port: process.env.REACT_APP_PORT || '3000'
  };
  // eslint-disable-next-line no-console
  console.debug('Environment (not used for data):', env);

  return (
    <Router>
      <div>
        <Navbar onToggleTheme={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')} />
        <main className="container">
          <PageFade>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/collections/:categoryId" element={<CollectionPage />} />
              <Route path="/artists/:artistId" element={<ArtistProfilePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageFade>
        </main>
      </div>
    </Router>
  );
}

/**
 * PUBLIC_INTERFACE
 * PageFade
 * Wraps routed content to provide a subtle fade/translate animation between routes.
 */
function PageFade({ children }) {
  const location = useLocation();
  return (
    <div key={location.pathname} className="page" aria-live="polite">
      {children}
    </div>
  );
}

function Navbar({ onToggleTheme }) {
  const location = useLocation();
  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="navbar-inner container">
        <div className="brand">
          <div className="brand-badge" aria-hidden="true" />
          <Link to="/" className="navlink" style={{ padding: 0, background: 'transparent', boxShadow: 'none' }}>
            <strong>Ocean Gallery</strong>
          </Link>
        </div>
        <div className="navlinks" role="menubar" aria-label="Primary">
          <NavLink to="/" end className={({ isActive }) => `navlink ${isActive ? 'active' : ''}`}>Home</NavLink>
          <NavLink to="/collections/abstract" className={({ isActive }) => `navlink ${isActive ? 'active' : ''}`}>Abstract</NavLink>
          <NavLink to="/collections/landscape" className={({ isActive }) => `navlink ${isActive ? 'active' : ''}`}>Landscape</NavLink>
          <NavLink to="/collections/portrait" className={({ isActive }) => `navlink ${isActive ? 'active' : ''}`}>Portrait</NavLink>
          <button className="filter-btn" onClick={onToggleTheme} aria-label="Toggle Theme" style={{ marginLeft: 8 }}>
            Theme
          </button>
        </div>
      </div>
      <div className="container hero" aria-live="polite">
        <h1>Fine Art Collections</h1>
        <p>Discover elegant works, curated with an Ocean Professional aesthetic.</p>
        <small style={{ color: '#6B7280' }}>Location: {location.pathname}</small>
      </div>
    </nav>
  );
}

function usePlaceholderData() {
  // Sample categories, artists, artworks
  const categories = useMemo(
    () => ([
      { id: 'abstract', name: 'Abstract' },
      { id: 'landscape', name: 'Landscape' },
      { id: 'portrait', name: 'Portrait' },
      { id: 'modern', name: 'Modern' }
    ]), []
  );

  const artists = useMemo(
    () => ([
      {
        id: 'aqua-lee',
        name: 'Aqua Lee',
        avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop',
        cover: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1600&auto=format&fit=crop',
        bio: 'Aqua explores fluid forms and color harmonies inspired by ocean currents and morning light.'
      },
      {
        id: 'marin-sato',
        name: 'Marin Sato',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
        cover: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
        bio: 'Marin captures serene landscapes with delicate pastel palettes and refined composition.'
      },
      {
        id: 'sol-arias',
        name: 'Sol Arias',
        avatar: 'https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=800&auto=format&fit=crop',
        cover: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop',
        bio: 'Sol blends modern portraiture with subtle gradients, focusing on human presence and light.'
      }
    ]), []
  );

  const artworks = useMemo(
    () => ([
      {
        id: 'art-1',
        title: 'Blush Tides',
        imageUrl: 'https://images.unsplash.com/photo-1495562569060-2eec283d3391?q=80&w=1600&auto=format&fit=crop',
        artistId: 'aqua-lee',
        categories: ['abstract', 'modern']
      },
      {
        id: 'art-2',
        title: 'Lavender Coast',
        imageUrl: 'https://images.unsplash.com/photo-1500534312687-068f0a0244fd?q=80&w=1600&auto=format&fit=crop',
        artistId: 'aqua-lee',
        categories: ['landscape']
      },
      {
        id: 'art-3',
        title: 'Gilded Horizon',
        imageUrl: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop',
        artistId: 'marin-sato',
        categories: ['landscape', 'modern']
      },
      {
        id: 'art-4',
        title: 'Portrait of Dawn',
        imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
        artistId: 'sol-arias',
        categories: ['portrait', 'modern']
      },
      {
        id: 'art-5',
        title: 'Rosewater Echo',
        imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop',
        artistId: 'aqua-lee',
        categories: ['abstract']
      },
      {
        id: 'art-6',
        title: 'Quiet Valley',
        imageUrl: 'https://images.unsplash.com/photo-1500534312687-068f0a0244fd?q=80&w=1600&auto=format&fit=crop',
        artistId: 'marin-sato',
        categories: ['landscape']
      }
    ]), []
  );

  return { categories, artists, artworks };
}

/**
 * PUBLIC_INTERFACE
 * HomePage
 * Home gallery page wrapper with page fade.
 */
function HomePage() {
  const { categories, artists, artworks } = usePlaceholderData();
  return (
    <div className="page">
      <ArtworkGrid categories={categories} artists={artists} artworks={artworks} />
    </div>
  );
}

/**
 * PUBLIC_INTERFACE
 * CollectionPage
 * Collection view wrapper with page fade and contextual header.
 */
function CollectionPage() {
  const { categoryId } = useParams();
  const { categories, artists, artworks } = usePlaceholderData();
  const filtered = artworks.filter(a => a.categories.includes(categoryId));
  const category = categories.find(c => c.id === categoryId);

  return (
    <div className="page">
      <section className="hero" style={{ paddingTop: 0 }}>
        <h1>{category ? `${category.name} Collection` : 'Collection'}</h1>
        <p>Curated pieces within the {category ? category.name.toLowerCase() : 'selected'} category.</p>
      </section>
      <ArtworkGrid
        categories={categories}
        artists={artists}
        artworks={filtered}
        activeCategory={categoryId}
      />
    </div>
  );
}

/**
 * PUBLIC_INTERFACE
 * ArtistProfilePage
 * Artist profile with related artworks.
 */
function ArtistProfilePage() {
  const { artistId } = useParams();
  const { artists, artworks, categories } = usePlaceholderData();
  const artist = artists.find(a => a.id === artistId);
  const related = artworks.filter(a => a.artistId === artistId);

  if (!artist) {
    return <NotFound message="Artist not found" />;
  }

  return (
    <div className="page">
      <section className="profile">
        <article className="profile-card" aria-labelledby="artist-name">
          <img src={artist.cover} alt={`${artist.name} cover`} className="profile-cover" />
          <div className="profile-body">
            <h2 id="artist-name" className="profile-name">{artist.name}</h2>
            <p className="profile-bio">{artist.bio}</p>
            <div className="filters" style={{ marginTop: 12 }}>
              <Link className="filter-btn" to="/">Back to Gallery</Link>
            </div>
          </div>
        </article>
        <section>
          <h3 style={{ margin: '0 0 8px 0' }}>Artworks by {artist.name}</h3>
          <ArtworkGrid noHeader categories={categories} artists={artists} artworks={related} />
        </section>
      </section>
    </div>
  );
}

function NotFound({ message = 'Page not found' }) {
  return (
    <div className="hero page" role="status" aria-live="polite">
      <h1>404</h1>
      <p>{message}</p>
      <Link to="/" className="filter-btn" style={{ display: 'inline-block', marginTop: 10 }}>Go Home</Link>
    </div>
  );
}

/**
 * PUBLIC_INTERFACE
 * ArtworkGrid
 * Displays a filterable grid of artworks. Includes lightbox controls and reveal animations.
 */
function ArtworkGrid({ categories, artists, artworks, activeCategory, noHeader }) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(activeCategory || 'all');
  const [query, setQuery] = useState('');
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [closing, setClosing] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    setSelectedCategory(activeCategory || 'all');
  }, [activeCategory]);

  // Add "reveal" animation to cards on render/filter changes
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll('.card'));
    cards.forEach((card, i) => {
      card.classList.remove('reveal');
      // force reflow for restart
      // eslint-disable-next-line no-unused-expressions
      card.offsetHeight;
      card.style.animationDelay = `${Math.min(i * 40, 240)}ms`;
      card.classList.add('reveal');
    });
    return () => {
      cards.forEach(card => {
        card.style.animationDelay = '';
      });
    };
  }, [selectedCategory, query, artworks]);

  const filtered = useMemo(() => {
    let list = artworks;
    if (selectedCategory && selectedCategory !== 'all') {
      list = list.filter(a => a.categories.includes(selectedCategory));
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(a => a.title.toLowerCase().includes(q));
    }
    return list;
  }, [artworks, selectedCategory, query]);

  const handleOpen = useCallback((index) => {
    setClosing(false);
    setLightboxIndex(index);
  }, []);
  const handleClose = useCallback(() => {
    // trigger closing animation
    setClosing(true);
    setTimeout(() => {
      setLightboxIndex(-1);
      setClosing(false);
    }, 180);
  }, []);
  const handlePrev = useCallback(() => setLightboxIndex(i => (i > 0 ? i - 1 : filtered.length - 1)), [filtered.length]);
  const handleNext = useCallback(() => setLightboxIndex(i => (i < filtered.length - 1 ? i + 1 : 0)), [filtered.length]);

  return (
    <section aria-label="Artwork Gallery">
      {!noHeader && (
        <>
          <div className="filters" role="group" aria-label="Filters">
            <button className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`} onClick={() => setSelectedCategory('all')}>All</button>
            {categories.map(c => (
              <button
                key={c.id}
                className={`filter-btn ${selectedCategory === c.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(c.id)}
              >
                {c.name}
              </button>
            ))}
            <input
              aria-label="Search artworks"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                flex: '1 1 220px',
                minWidth: 160,
                padding: '9px 12px',
                borderRadius: 12,
                border: '1px solid var(--border)',
                outline: 'none'
              }}
            />
          </div>
        </>
      )}
      <div ref={gridRef} className="grid" role="list">
        {filtered.map((art, idx) => {
          const artist = artists.find(a => a.id === art.artistId);
          return (
            <article key={art.id} className="card" role="listitem" aria-label={art.title}>
              <img
                src={art.imageUrl}
                alt={art.title}
                className="card-img"
                onClick={() => handleOpen(idx)}
              />
              <div className="card-body">
                <h4 className="card-title">{art.title}</h4>
                <div className="card-meta">
                  {artist ? (
                    <button
                      className="filter-btn"
                      onClick={() => navigate(`/artists/${artist.id}`)}
                      aria-label={`View profile of ${artist.name}`}
                    >
                      {artist.name}
                    </button>
                  ) : null}
                  {art.categories.map(cat => (
                    <button
                      key={cat}
                      className="filter-btn"
                      onClick={() => navigate(`/collections/${cat}`)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {lightboxIndex >= 0 && filtered[lightboxIndex] && (
        <Lightbox
          items={filtered}
          index={lightboxIndex}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
          closing={closing}
        />
      )}
    </section>
  );
}

/**
 * PUBLIC_INTERFACE
 * Lightbox
 * Modal image viewer with keyboard navigation and fade/scale transitions.
 */
function Lightbox({ items, index, onClose, onPrev, onNext, closing }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onPrev, onNext]);

  const item = items[index];
  if (!item) return null;

  return (
    <div
      className="lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} viewer`}
      onClick={onClose}
    >
      <div className={`lightbox ${closing ? 'closing' : ''}`} onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-btn close-btn" onClick={onClose} aria-label="Close">✕</button>
        <div className="lightbox-controls" aria-hidden="false">
          <button className="lightbox-btn" onClick={onPrev} aria-label="Previous">‹</button>
          <button className="lightbox-btn" onClick={onNext} aria-label="Next">›</button>
        </div>
        <img src={item.imageUrl} alt={item.title} />
        <div className="lightbox-info">
          <strong>{item.title}</strong>
          <span style={{ color: '#9CA3AF' }}>{(index + 1)} / {items.length}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
