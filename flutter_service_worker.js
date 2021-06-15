'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d9e4c1260c9648972063a33d415dfc56",
".git/config": "02d0ab274e275a6617dacbafd6d0f12a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8994fb94f8dde8185b60f0089b805f7f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bf7cfb6f13f146e31f5c993cb8574f99",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d1f2ff2ccfadfc490c08fcc67c504980",
".git/logs/refs/heads/master": "dd21717c0d152a4f7a88c11b0bc13fb3",
".git/logs/refs/remotes/origin/main": "2a069e2897017b9f64e1dc712ce91aed",
".git/logs/refs/remotes/origin/master": "504546264645abef7e961acf2c7871e3",
".git/objects/01/8e32dfdef2ee81f9bee63e4048e7b6f8f923d2": "a0502dcf8ac34d9f8c8957bbbb8b8692",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/fe4e33102c7814f38afbeb85a0baec015663e2": "1ec2f1a85099b8d151e9312604bf1d3d",
".git/objects/09/64f46c80114618a7a343900eb8d69b176d4239": "e8c281e7fb2cbc9f75fdb4368a3be382",
".git/objects/0a/41d49a4c89ceaffad69a01f4e9ddcb0b67d261": "12ae89759e4fb1e7969430be133fbd5e",
".git/objects/10/8ae8cf29bdcad67a48fcdd0f5e31e2830dfca6": "34946d6be83facae332ee76638bd1e99",
".git/objects/11/b0cb63c5ceadd85960fcb36f935252462dacd8": "1ae66416af2364881445d2a12422f255",
".git/objects/17/ad24357d4e4f3806fabbc393dc711ef2799cb7": "cc7ccf49d507ce787e8e12d93661e952",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/c3281152ad5fd885c666547f5ff127a91cc003": "0a2c5002457457c1097f8d70068c4e0a",
".git/objects/2a/26ff92e94734dbd76496304f5267b48f215dd9": "aabf08ca3f331642141fb0abcddf0ea4",
".git/objects/30/6f399de25dc6a84d13a96492beef5cdc44fc5b": "5211269670dbd53ae35514b4a7671eaf",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/39/199e52e9fe71feb0db718834821b55a9617a0b": "c4b28dde672eb35fae03ed25b094f289",
".git/objects/41/0e1567959cdc9c1e040a9a8fbbfeabebc743ec": "da71177c7de211e779fd56a93982b4d1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/77053ab00fc12a37d6e41c72988f63f6386e51": "52191f965706c59790885f919b93f60e",
".git/objects/55/362b1330e83b908ca6a852cbd9343d464cae2d": "c156f002e45645f456a0c595bd669275",
".git/objects/5c/61aaba3cc3bd3670a7b5e160865db2ad7bd118": "1342122d127c3cb2d5cfb129e11cb366",
".git/objects/63/0f5a3ca4ffdefde10726df6cbc18fde67fd716": "68db632d35c5cc1140f017cda4be7926",
".git/objects/66/eccfb0c791d66af816673450db4577abd6ab36": "266556cfc2ff8877c6fa08fb9516ff28",
".git/objects/68/9679e70f1af58115bd64e33e79dbc1228b0608": "b85c452fcc1b4add2342c88cd3ae295d",
".git/objects/69/b8bd70051601acd20bcf1bb1a025592ce0c53b": "faf079e1a9b36a1068faa4815a6b957f",
".git/objects/6d/ef7fcefbd60f879a796d79dcb6f2b579747a5c": "0bd2b5c1eb1175276deb427a5f0f888b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/d819fc8cd803b94a90788b56157274c68d21a4": "538e640f702305b3d17e2a6b7302d128",
".git/objects/88/41a1f3d9c3d4044dd44f017d4adf8fdd53109a": "5ed299245b76c9001a9afab32cd4377e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9e/967a9088bd3567f102bf1ad9d789c5b603423a": "95160312e266faefe756716a1d07fa93",
".git/objects/9f/49d9b688ce4ad44378ac44d4641894e3ab7279": "bfe8d175ab849b5d83fd650c29a5a042",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/c9cfad731260d097ac3ba56a0287907364b5f2": "6082056809da5f902eee7e01b623283f",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/1fc477e6a8cefc85e31ef5e504984b17de8b27": "78e552fa3d42127929eae0bd0a176e62",
".git/objects/b2/2922026eb07e16c1e2ab24d39b910b9936f7e0": "c68c43d2189f73286e2cd9d1b33d656b",
".git/objects/b5/6b23bc99a94a7630fd136ad7e84540faeb51b9": "d21963b9ea5bc6bd57d5912dbbdbcff6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c4/192631f25b34d77a7f159aa0da0e3ae99c4ef4": "546c588f67767790fc70913da1a77878",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/cefd14ca8f47cf879739b70afa17b34b2a5bcf": "b47b94ee467a06dea7163689ae3fa468",
".git/objects/ee/6e62470b39c579011c6b269d9c0058a5ce03d5": "51f57180675c9999413374db8702a9ea",
".git/objects/fd/9ef2129364fbfeabb4f84cd9438abfdffb5d4b": "0662188482f6d2e8e185e3854df1284d",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "47553a30c0a452eb6a8f0603c51b52d4",
".git/refs/remotes/origin/main": "8e1bb6d8f840b7f9303e74886b8126ea",
".git/refs/remotes/origin/master": "47553a30c0a452eb6a8f0603c51b52d4",
"assets/AssetManifest.json": "1f8fc481845c656cbcce294bbcd9adfd",
"assets/FontManifest.json": "897c00db910b783414cd3879285198b2",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/lib/assets/fonts/Hind-Bold.ttf": "25ba4ea71ae01575b854681c42c1d0ef",
"assets/lib/assets/fonts/Hind-Light.ttf": "b78550d1e21c367f38af3cbf8a89625b",
"assets/lib/assets/fonts/Hind-Medium.ttf": "7b9659dca0b0095eb1e074c98accda58",
"assets/lib/assets/fonts/Hind-Regular.ttf": "dc2874ab4f42fb0a99fe02d60491c133",
"assets/lib/assets/fonts/Hind-SemiBold.ttf": "a57fb565eb5649e00ad4089e8c6879ef",
"assets/lib/assets/images/aws.png": "ef9ee9344cd279aadb8a52600bcad6f2",
"assets/lib/assets/images/dexter.jpg": "6a1018d8113807ce632d39d80ac885b4",
"assets/lib/assets/images/my_profile_image.jpeg": "212374c6886f064762e65a30be33fc83",
"assets/lib/assets/images/oracle.png": "b0ddb2f1bbb6fe93168fc5e94e80896e",
"assets/lib/assets/images/placeholder.png": "86a820b93642414f965559b24c1b9fdf",
"assets/NOTICES": "174a7930952d181151ea50a5fd07003a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f2b7290651f17683e73933b6cbe3bb3c",
"/": "f2b7290651f17683e73933b6cbe3bb3c",
"main.dart.js": "b800412aef720123f37d9642ea4865ee",
"manifest.json": "8b29f73c1529987f55b8c9f8f719b83d",
"version.json": "e843de734fa5df557dd3c16d47daf39f"
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
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
