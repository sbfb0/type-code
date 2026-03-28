self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // This allows the app to work offline later if you choose
  event.respondWith(fetch(event.request));
});
