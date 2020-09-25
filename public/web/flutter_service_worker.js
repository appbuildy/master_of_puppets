'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "c9b2050f4db76d72b45db78103ef53f2",
"/": "c9b2050f4db76d72b45db78103ef53f2",
"main.dart.js": "422783ae8bb7edd94a5bedfda3933440",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ed72cb0054270b1689d7834ea6012f36",
"assets/AssetManifest.json": "f07a02593afe789059647791e945f84a",
"assets/NOTICES": "5dd11eea1e5aa350878bbad89bc17f9e",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/icons/settings/theme.svg": "b06de4309877d2d34cadb956e14a8126",
"assets/icons/layout/shape.svg": "63305080e646f6a29c18fd5e28fb101f",
"assets/icons/layout/listTiles.svg": "6702db879ac105a588ee321dadbd500a",
"assets/icons/layout/listCompact.svg": "dc90b15c2ba79c24d3c5b9c582c90b6e",
"assets/icons/layout/list.svg": "2122dae63733024cbae0bb516af6d2ce",
"assets/icons/layout/listCards.svg": "b5ba53df16f2fa11d3994dae5771ce82",
"assets/icons/layout/listRich.svg": "97f3bfd78871070b02b9097b63de0f7e",
"assets/icons/layout/button.svg": "c03da3e80b7ae0849f02fad540c94b12",
"assets/icons/layout/text.svg": "10b8d7020288acdc458b90f277f64cf9",
"assets/icons/layout/image.svg": "586995f5f903e795ecc8fefbc67d7b3d",
"assets/icons/meta/action-undo.svg": "c1cad7273cc443c056f50b02c00deea5",
"assets/icons/meta/btn-back.svg": "428aab4aaca9801ab5f33e31961505ad",
"assets/icons/meta/btn-more.svg": "2f68ee923dbf7943594354e6b818772d",
"assets/icons/meta/expand-vertical.svg": "5051b898c48f79c01df5690ef4edb2ce",
"assets/icons/meta/btn-mode-play.svg": "1451737416e8032c4551877250371567",
"assets/icons/meta/btn-duplicate.svg": "5ea29ea4b2b8151eafd68df7fe9eb7b8",
"assets/icons/meta/btn-plus.svg": "f1ba12c3a893fb6b13b6ea54077a01a5",
"assets/icons/meta/expand-horizontal.svg": "cb94723693652f3eb03fbbf29a6a44e6",
"assets/icons/meta/logo.svg": "a7ec5631b397daa9fe56794f5e86252e",
"assets/icons/meta/status-bar.svg": "cdfe6b0c8765b754a1a7d3781b43bcb6",
"assets/icons/meta/btn-mode-select.svg": "b72456302623ca66b8f01aaccc0a448d",
"assets/icons/meta/btn-delete.svg": "22c72c8c8ec79644c5f59b0cff79d437",
"assets/icons/add.svg": "2b58c42ab6c697dc42e17ae3b3b044e4",
"assets/icons/menu/settings.svg": "2370bce208e34865476fda9de654a254",
"assets/icons/menu/layout-active.svg": "fe2a1efcb9a734c2bea1888b0a8a4f0f",
"assets/icons/menu/data-active.svg": "146f61730e0c72d9c7fef386f77796f9",
"assets/icons/menu/pages-active.svg": "b116edd098c5f19d4ce5057a29a591c6",
"assets/icons/menu/settings-active.svg": "338a2c88fcc36c629a196ff4f12973d5",
"assets/icons/menu/data.svg": "ab0c705b45c99b9cda95068c1cc2aba6",
"assets/icons/text/horizontal-center.svg": "3db41f93f0209114f95defaa9586c88a",
"assets/icons/text/horizontal-left.svg": "9c98dbb2fe8c311038447d35e620a73a",
"assets/icons/text/horizontal-right.svg": "acc51b9a2280641c6afb3f00a509b25a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/assets/icons/add.svg": "2b58c42ab6c697dc42e17ae3b3b044e4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a 'reload' param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
