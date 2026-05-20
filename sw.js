// Nome do arquivo de armazenamento de cache do MVP
const CACHE_NAME = 'ru-app-cache-v1';

// Ativa o Service Worker imediatamente
self.addEventListener('install', function(event) {
    self.skipWaiting();
});

self.addEventListener('activate', function(event) {
    event.waitUntil(clients.claim());
});

// Responde às requisições da página (obrigatório para PWA nativo)
self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request).catch(function() {
            return caches.match(event.request);
        })
    );
});
