'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "feed.xml": "5ef1d78594bb2cbd04f7045889bb309e",
"index.html": "7d2744111a779f50eab9881abe67bbfb",
"/": "7d2744111a779f50eab9881abe67bbfb",
"main.dart.js": "2d2c4b3cbb94603fac73717432d38d6e",
"show-notes/01.html": "e479a8420debd5e3536d154ea49c7026",
"img/icon.jpg": "a81790178d3885f9e5d89b990f6a6c9f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"audio/01-create-eng.mp3": "83d1e1f303e4b8f4cee1cadd9ad75555",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0d2ef5bf43d0a5d981e8400f48458541",
"assets/LICENSE": "fb5228dfc375215dc41cd2ed982e9737",
"assets/AssetManifest.json": "0d266ffbe90dae02458487c9d33b7373",
"assets/FontManifest.json": "f7161631e25fbd47f3180eae84053a51",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
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
