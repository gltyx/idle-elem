'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6423042a5b0f853a38eac2cae122b6e1",
"assets/AssetManifest.bin.json": "0efeaa3373815c5bf8d263d4466f830d",
"assets/AssetManifest.json": "3b9005120dc42f683fd5df7046227590",
"assets/assets/images/achievements-2.png": "4e30d24297eb3c09166051ef3640e452",
"assets/assets/images/achievements.png": "4e452ef200267bcada5e72f999f2d0d7",
"assets/assets/images/air.png": "98dd42266ee46b94098843ac67dfea53",
"assets/assets/images/air_l.png": "994e4131a64d7f872cec96aacfa2f19b",
"assets/assets/images/air_s.png": "994e4131a64d7f872cec96aacfa2f19b",
"assets/assets/images/bg_air.png": "4272de790b5f7c1e37af539b24dcfcd5",
"assets/assets/images/bg_earth.png": "84a899634b133d261934d47c50a8aeba",
"assets/assets/images/bg_fire.png": "00d78b06534f0ba60b5708b629fa8bec",
"assets/assets/images/bg_metal.png": "8a888e6d201fe8873f0a7530836b0fe4",
"assets/assets/images/bg_none.png": "a8c0c5a17744f41ed99d0d18b86b0e37",
"assets/assets/images/bg_water.png": "804c06597247cda6706372bdf53a2aaf",
"assets/assets/images/bg_wood.png": "f05ceb5113cc528df36a0f1fb62e0e8c",
"assets/assets/images/discord.png": "ec293657bf46f71e853650d67ad1a684",
"assets/assets/images/earth.png": "608065abd276b57223e6ba03828aa4f0",
"assets/assets/images/earth_l.png": "b64e9a6492d8ce0d763110586c9d9a28",
"assets/assets/images/earth_s.png": "b64e9a6492d8ce0d763110586c9d9a28",
"assets/assets/images/fire.png": "267c1545a0038c051d89fbe954ddbe17",
"assets/assets/images/fire_l.png": "d8eda5af5a39c891c49ab78eb25fe044",
"assets/assets/images/fire_s.png": "d8eda5af5a39c891c49ab78eb25fe044",
"assets/assets/images/hidden.png": "7c389d32b5fe93e487726beb74c859bb",
"assets/assets/images/hidden_l.png": "e59983f0587ea237c899cd510f3ecc87",
"assets/assets/images/hidden_s.png": "e59983f0587ea237c899cd510f3ecc87",
"assets/assets/images/iap.png": "2db9cfe1d02661360ce460f76703c8c3",
"assets/assets/images/metal.png": "0f313e4e7eb115fc14a5e54ba680d308",
"assets/assets/images/metal_l.png": "a73d7f0d66d88f6171a3dadce9bf0441",
"assets/assets/images/metal_s.png": "a73d7f0d66d88f6171a3dadce9bf0441",
"assets/assets/images/settings.png": "8dce8e8deb048f2964ae7db503f55a37",
"assets/assets/images/settings_l.png": "8dce8e8deb048f2964ae7db503f55a37",
"assets/assets/images/settings_s.png": "09eff91a9cf5b041c387caaa343d7700",
"assets/assets/images/stats.png": "7b46453181f269f123c5588fe962ebb7",
"assets/assets/images/title.png": "344afacefcf79f672e11172d0d669b6b",
"assets/assets/images/void.png": "8ead82820783c4e399d996bdd0b4bd3a",
"assets/assets/images/void_l.png": "c597c15cd2f3c63c7ab27051b78224a3",
"assets/assets/images/water.png": "3f70072cefea8b5ddc58fe1a6e25ef39",
"assets/assets/images/water_l.png": "923d0e2ec829e9418ebd2eac6446c1db",
"assets/assets/images/water_s.png": "923d0e2ec829e9418ebd2eac6446c1db",
"assets/assets/images/wood.png": "3de395a91ad090f7f413f8bd5441e424",
"assets/assets/images/wood_l.png": "30cd3f150e3ecfd759c4f990eee1e0bd",
"assets/assets/images/wood_s.png": "30cd3f150e3ecfd759c4f990eee1e0bd",
"assets/assets/music/Air.mp3": "150da1bd5be3acf213d93ca021494e55",
"assets/assets/music/Earth.mp3": "33ca456649b74af56afb0b238b9e36ae",
"assets/assets/music/Fire.mp3": "18836fafdf9bef843a7c5a3791242d0c",
"assets/assets/music/Metal.mp3": "b7fe0f3041c459e6638199caef8324ae",
"assets/assets/music/Water.mp3": "b2565621a865ec7251888bec6294bd52",
"assets/assets/music/Wood.mp3": "27a8844830a96f400e510b9fd490399b",
"assets/assets/music102d1ba6": "b7fe0f3041c459e6638199caef8324ae",
"assets/assets/music4c9e6026": "27a8844830a96f400e510b9fd490399b",
"assets/assets/music68fa039a": "18836fafdf9bef843a7c5a3791242d0c",
"assets/assets/music8687554f": "b2565621a865ec7251888bec6294bd52",
"assets/assets/musicae9ed9bf": "150da1bd5be3acf213d93ca021494e55",
"assets/assets/musicb80f4ea4": "33ca456649b74af56afb0b238b9e36ae",
"assets/assets/util/noise.png": "68caf87360693a7f848a9ded0998f01a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "c7a6c9daa65c1955ebe8d216e6237091",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/shaders/drop.frag": "c2bff5b66a89a7eac2651f7dc73110a4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/perlin.frag": "fa9801851b298a24d57e828764df94d3",
"assets/shaders/perlin_simple.frag": "8451c0272df4eddca3e6cb3318fbd481",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "d0be6ca9bd653a34267bd7b22b538acb",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "3bee568d0b9e784b00be8eed3c0712df",
"icons/Icon-192.png": "37808f6b9151a8afb33e883d33c88c55",
"icons/Icon-512.png": "edf6ef1ec043a384a7130355a516dda9",
"icons/Icon-maskable-192.png": "2c7beea0ada995a5a430db37ac013f6c",
"icons/Icon-maskable-512.png": "edf6ef1ec043a384a7130355a516dda9",
"index.html": "9b3eb30374f81f871bc184178ee2e402",
"/": "9b3eb30374f81f871bc184178ee2e402",
"main.dart.js": "ede5d19d466fe43550b9d6bc6dcafd95",
"manifest.json": "4dd440c998b49783fb5cd093d3f8d160",
"version.json": "bbc7c93df159b8b51616a95437657e27"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
