window.addEventListener('load', async () => {
  const response = await fetch('https://tomashubelbauer.github.io/sw-js-to-ts-transpiler/worker.js');
  const text = await response.text();
  await navigator.serviceWorker.register('worker.js?' + btoa(text));
});
