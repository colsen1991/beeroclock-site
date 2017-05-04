const initCommon = (function () {
  function showError() {
    document.querySelector('#error').style.display = 'block';
  }

  return function init() {
    window.onerror = (messageOrEvent, source, lineNumber, colmnNumber, error) => {
      showError();

      return true;
    };
  }
})();
