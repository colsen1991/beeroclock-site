const popup = (function () {
  function remove() {
    const popup = document.querySelector('.popup');

    popup.style.opacity = 0;

    setTimeout(() => popup.remove(), 500);
  }

  return {
    remove,
    show(content, type, timeout = 5000) {
      const popup = document.createElement('div');

      popup.classList = `popup trans-ease-in-out ${type} transparent`;
      popup.innerHTML = content;

      document.body.appendChild(popup);

      setTimeout(() => document.querySelector('.popup').style.opacity = 1, 50);

      setTimeout(remove, timeout);
    }
  }
})();
