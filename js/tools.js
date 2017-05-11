const tools = (function () {
  return {
    isDev() {
      return window.location.hostname === 'localhost';
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
