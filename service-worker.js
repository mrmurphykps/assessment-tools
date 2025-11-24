const CACHE_NAME = 'assessment-tools-v1.0.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/educational-risk-assessment.html',
  '/concussion-recovery.html',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// Install service worker and cache resources
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Caching app shell');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('[Service Worker] Installed successfully');
        return self.skipWaiting(); // Activate immediately
      })
      .catch((error) => {
        console.error('[Service Worker] Installation failed:', error);
      })
  );
});

// Activate service worker and clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[Service Worker] Activated successfully');
      return self.clients.claim(); // Take control immediately
    })
  );
});

// Fetch strategy: Network first for HTML, cache first for assets
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    return;
  }

  // Network-first strategy for HTML files
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Clone the response before caching
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // Fallback to cache if network fails
          return caches.match(request)
            .then((response) => {
              if (response) {
                return response;
              }
              // Return a custom offline page if available
              return caches.match('/index.html');
            });
        })
    );
    return;
  }

  // Cache-first strategy for all other resources
  event.respondWith(
    caches.match(request)
      .then((response) => {
        if (response) {
          return response;
        }
        
        // If not in cache, fetch from network
        return fetch(request).then((response) => {
          // Don't cache if not a valid response
          if (!response || response.status !== 200 || response.type === 'error') {
            return response;
          }

          // Clone the response before caching
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });

          return response;
        });
      })
      .catch(() => {
        console.log('[Service Worker] Fetch failed for:', request.url);
      })
  );
});

// Listen for messages from the client
self.addEventListener('message', (event) => {
  if (event.data && event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});
