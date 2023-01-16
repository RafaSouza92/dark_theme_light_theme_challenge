function initLightMode() {
  const toggle = document.querySelector('#toggle');

  function handleLightmode() {
    const body = document.querySelector('body');
    body.classList.toggle('light');
  }
  toggle.addEventListener('click', handleLightmode);
}
initLightMode();
