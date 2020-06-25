const VERSION = 'v1';

self.addEventListener('install', evt => {
    evt.waitUntil(loadCache());
});


self.addEventListener('fetch', evt => {
   const request = evt.request;
   if(request.method !== 'GET') {
       return;
   }
   evt.respondWith(cachedResponse(request));
   evt.waitUntil(updateCache(request));
});

//Caches the files needed
const loadCache = async () => {
    const cache = await caches.open(VERSION);
    return cache.addAll([
        '/',
        '/index.html',
        '/assets/css/styles.css',
        '/assets/js/index.js',
        '/assets/js/MediaPlayer.js',
        '/assets/js/plugins/AutoPause.js',
        '/assets/js/plugins/AutoPlay.js'
    ]);

};

const cachedResponse = async (request) => {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
};

const updateCache = async (request) =>{
    const cache = await caches.open(VERSION);
    const response = await fetch(request)
    return cache.put(request, response);
};
