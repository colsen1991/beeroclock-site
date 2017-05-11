const initErrorHandling = (function () {
  return function init() {
    window.onerror = (...err) => {
      popup.show('Uh oh, error! Things might be off, sorry! Worry not; it\'s always beer o\'clock somewhere!', 'error', 10000);

      if (tools.isDev()) {
        console.error(err);
      }

      return true;
    };
  }
})();
