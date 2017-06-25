const tools = (function () {
  return {
    isDev() {
      return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    },

    fadeIn(selector) {
      document.querySelector(selector).style.opacity = 1;
    },

    isPastBeerOClock(time) {
      const hour = time.getHours();

      return hour < 3 || hour >= 17;
    }
  }
})();
