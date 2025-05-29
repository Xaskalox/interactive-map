self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Установка...');
  self.skipWaiting(); // моментальная активация после установки
});

self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Активирован');
});

self.addEventListener('fetch', (event) => {
  console.log('[ServiceWorker] Перехват запроса:', event.request.url);
});
