// check if the browser supports service worker
// navigator is an object in js that represents browser and information about it
if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/sw.js') // this is a promise
		.then((reg) => console.log('service worker registered', reg)) // if it's resolved then the callback inside is triggered
		.catch((err) => console.log('service worker could not register', err)); // if it's rejected then the callback inside is triggered
}
