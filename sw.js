(function () {
  const CACHE_NAME = 'beer-o-clock-clock-cache-v1';
  const urlsToCache = [
    '/',
    '/style/index.css',
    '/img/beer.png',
    '/img/favicon.ico',
    '/img/favicon-48.png',
    '/img/favicon-96.png',
    '/img/favicon-144.png',
    '/img/favicon-192.png',
    '/js/clock.js',
    '/js/error.js',
    '/js/data.js',
    '/js/index.js',
    '/js/serviceWorker.js',
    '/js/text.js',
    '/js/tools.js'
  ];

  self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function (cache) {
          return cache.addAll(urlsToCache);
        })
    );
  });

  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request)
        .then(function (response) {
            if (response) {
              return response;
            }

            return fetch(event.request);
          }
        )
    );
  });
})();
