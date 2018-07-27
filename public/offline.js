self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
      .catch(() => caches.match('/404.html', {
        ignoreSearch: true
      }))
    );
  }
});
