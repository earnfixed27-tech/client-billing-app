self.addEventListener('install', (e) => {
  console.log('Tushar Dev SW Installed');
});
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
