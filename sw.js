const staticCacheName = 'site-static-v1';
const assets = [
	'/',
	'/index.html',
	'/js/app.js',
	'/js/ui.js',
	'/js/materialize.min.js',
	'/css/styles.css',
	'/css/materialize.min.css',
	'/img/download.png',
	'https://fonts.googleapis.com/icon?family=Material+Icons',
];

//install event
self.addEventListener('install', (evt) => {
	// console.log('service worker has been installed');
	evt.waitUntil(
		caches.open(staticCacheName).then((cache) => {
			cache.addAll(assets);
		}),
	);
});
//activate service worker
self.addEventListener('activate', (evt) => {
	// console.log('service worker has been activated');
	evt.waitUntil(
		caches.keys().then((keys) => {
			return Promise.all(
				keys
					.filter((key) => key !== staticCacheName)
					.map((key) => caches.delete()),
			);
		}),
	);
});
//fetch events (get something from server like javascript file)
self.addEventListener('fetch', (evt) => {
	// console.log('fetch', evt);
	evt.respondWith(
		caches.match(evt.request).then((cacheRes) => {
			return cacheRes || fetch(evt.request);
		}),
	);
});
