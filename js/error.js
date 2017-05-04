const initErrorHandling = (function () {
  function showError() {
    document.querySelector('#error').style.display = 'block';
    document.querySelector('#error').style.visibility = 'visible';
    setTimeout(() => document.querySelector('#error').style.opacity = '100', 50);
    document.querySelector('#error').innerHTML = `
      Uh oh! It seems like an error occured...
      <br>I.e. the site might look odd, or the time calculations might be off!
      <br>Worry not! I'll share a little secret with you:
      <br><br><strong>It's always beer o'clock somewhere!</strong>
    `;
  }

  return function init() {
    window.onerror = () => {
      showError();

      return true;
    };
  }
})();
