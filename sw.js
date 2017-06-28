(function () {
  const CACHE_NAME = 'beeroclock-site-cache';
  const urlsToCache = [
    '/',
    '/index.html',
    '/style/base.css',
    '/style/site.css',
    '/js/clock.js',
    '/js/data.js',
    '/js/error.js',
    '/js/index.js',
    '/js/popup.js',
    '/js/swreg.js',
    '/js/text.js',
    '/js/tools.js',
    '/img/beer.png',
    '/img/apple-touch-icon.png',
    '/img/favicon.ico',
    '/img/favicon-16x16.png',
    '/img/favicon-32x32.png',
    '/img/favicon-48x48.png',
    '/img/favicon-64x64.png',
    '/img/favicon-96x96.png',
    '/img/favicon-128x128.png',
    '/img/favicon-144x144.png',
    '/img/favicon-152x152.png',
    '/img/favicon-192x192.png',
    '/img/mstile-150x150.png',
    '/img/safari-pinned-tab.svg',
  ];

  self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => {
          return cache.addAll(urlsToCache);
        })
    );
  });

  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
            if (response) {
              return response;
            }

            return fetch(event.request);
          }
        )
    );
  });
})();
