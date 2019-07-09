window.addEventListener('load', async () => {
  const registration = await navigator.serviceWorker.getRegistration();
  if (!registration || location.host === 'localhost:5000' /* Always refresh in development */) {
    const response = await fetch('https://tomashubelbauer.github.io/sw-js-to-ts-transpiler/worker.js');
    const text = await response.text();
    await navigator.serviceWorker.register('worker.js?' + btoa(text));
  }

  if (!registration) {
    // Reload the page so that the service worker transpiler comes into an effect
    location.reload();
  }
});
