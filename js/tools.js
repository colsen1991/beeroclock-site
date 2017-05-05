const tools = (function () {
  return {
    fadeIn(selector) {
      document.querySelector(selector).style.opacity = 100;
    },
    isPastBeerOClock(time) {
      const hour = time.getHours();

      return hour < 3 || hour >= 17;
    }
  }
})();
