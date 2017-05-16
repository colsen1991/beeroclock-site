const initServiceWorker = (function () {
  return function init() {
    if (tools.isDev()) {
      return;
    }

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.getRegistrations()
          .then(registrations => {
            if (!registrations[ 0 ]) {
              setTimeout(() => popup.show('<p>Website ready for offline use.<br>Also try "Menu" > "Add to home screen"</p>', 'message', 5000), 2000);
            }
          })
          .then(() => navigator.serviceWorker.register('sw.js'))
      });
    }
  };
})();
