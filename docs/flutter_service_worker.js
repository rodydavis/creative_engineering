'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "feed.xml": "a318fa108d2fbe54d5609ef2cc8d8bc6",
"index.html": "d2c59c90a2f07a9656340672c390f836",
"/": "d2c59c90a2f07a9656340672c390f836",
"main.dart.js": "0c5f917f2534a63b06c9804b068661ca",
"img/icon.png": "09fb907bd8ff7f87ba241a7f7438e617",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"audio/01-create-eng.mp3": "83d1e1f303e4b8f4cee1cadd9ad75555",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0d2ef5bf43d0a5d981e8400f48458541",
"assets/LICENSE": "6f822157e134ddfd10c07bbb9e5b7bd0",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
