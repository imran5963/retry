self.addEventListener('push', function(e) {
    const options = {
        body: 'This notification was generated from push!',
        icon: 'images/example.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {
                action: 'explore',
                title: 'Explore the world',
                icon: 'images/checkmark.png'
            },
            {
                action: 'close',
                title: 'Close',
                icon: 'images/xmark.png'
            }
        ]
    };
    e.waitUntil(
        self.registration.showNotification('Hello world!', options)
    );
});
