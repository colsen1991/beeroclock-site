(function () {
  const CACHE_NAME = 'beer-o-clock-clock-cache-v2';
  const urlsToCache = [
    '/',
    '/index.html',
    '/style/base.css',
    '/style/site.css',
    '/img/beer.png',
    '/js/clock.js',
    '/js/data.js',
    '/js/error.js',
    '/js/index.js',
    '/js/popup.js',
    '/js/swreg.js',
    '/js/text.js',
    '/js/tools.js'
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
