const CACHE_NAME = 'mahindra-v1.2';
const ASSETS = [
  './',
  './index.html', 
  './manifest.json',
  './icons/cardulatorlogoinstally.png',
  './icons/range_of_cars.png'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
