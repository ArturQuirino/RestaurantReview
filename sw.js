self.addEventListener('install', function(e){
    e.waitUntil(
        caches.open('restaurants').then(function(cache) {
            return cache.addAll([
                '/',
                '/restaurant.html?id=1'
            ])
        })
    )
});


self.addEventListener('fetch', function(event) {
    console.log(event.request.url);

    event.respondWith(
        caches.match(event.request).then(function(response) {
          return response || fetch(event.request);
        })
      );
});