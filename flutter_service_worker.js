'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "audio/03-create-eng.mp3": "1cbec909f180b796fddd52c1faeb6bd7",
"audio/02-create-eng.mp3": "ef76fb1bfdce24494f406f5a14425f6d",
"audio/01-create-eng.mp3": "83d1e1f303e4b8f4cee1cadd9ad75555",
"index.html": "2fbc18b41a51294f8b2344da56a2ddf7",
"/": "2fbc18b41a51294f8b2344da56a2ddf7",
"img/spotify.png": "0a5ef7a942cb1d9a64169f57ba1a05c3",
"img/icon.jpg": "a81790178d3885f9e5d89b990f6a6c9f",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"assets/FontManifest.json": "f7161631e25fbd47f3180eae84053a51",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/AssetManifest.json": "0d266ffbe90dae02458487c9d33b7373",
"assets/LICENSE": "d2cfd9ed186c0c40540a965cc6c04ff3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "96c0200fa87c2edde4a2db657d7c6e72",
"manifest.json": "0d2ef5bf43d0a5d981e8400f48458541",
"feed.xml": "db60621565282257d26757855fad14c0"
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
