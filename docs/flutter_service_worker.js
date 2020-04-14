'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "feed.xml": "edcd064aee0f71f56a0b4a88de7a72e9",
"index.html": "7d2744111a779f50eab9881abe67bbfb",
"/": "7d2744111a779f50eab9881abe67bbfb",
"main.dart.js": "cfed3b44b4c644e0d275f46c059ff513",
"img/icon.jpg": "a81790178d3885f9e5d89b990f6a6c9f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"audio/01-create-eng.mp3": "83d1e1f303e4b8f4cee1cadd9ad75555",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0d2ef5bf43d0a5d981e8400f48458541",
"assets/LICENSE": "37fd93d47b766d539b86576b65a4efc6",
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
