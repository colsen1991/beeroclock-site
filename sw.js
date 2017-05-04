(function () {
  const CACHE_NAME = 'my-site-cache-v1';
  const urlsToCache = [
    '/beer-o-clock-clock/',
    '/beer-o-clock-clock/style/index.css',
    '/beer-o-clock-clock/img/beer.png',
    '/beer-o-clock-clock/img/favicon.ico',
    '/beer-o-clock-clock/img/favicon-48.png',
    '/beer-o-clock-clock/img/favicon-96.png',
    '/beer-o-clock-clock/img/favicon-144.png',
    '/beer-o-clock-clock/img/favicon-192.png',
    '/beer-o-clock-clock/js/clock.js',
    '/beer-o-clock-clock/js/error.js',
    '/beer-o-clock-clock/js/data.js',
    '/beer-o-clock-clock/js/index.js'
  ];

  self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function (cache) {
          console.log('Opened cache');
          return cache.addAll(urlsToCache);
        })
    );
  });

  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request)
        .then(function (response) {
            if (response) {
              console.log('hit, ret from cache');
              return response;
            }

            console.log('miss, fetch from server');
            return fetch(event.request);
          }
        )
    );
  });
})();
