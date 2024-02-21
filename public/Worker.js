// public/worker.js

// Log that the worker.js is connected

self.addEventListener('push', function (e) {
  const data = e.data.json();
  self.registration.showNotification(
    data.title,
    {
      body: data.body,
    }
  );
});


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./Worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Error registering Service Worker:', error);
      });
  });
}


// Handle notification permission in the Service Worker
self.addEventListener('notificationclick', function (e) {
  // Perform some custom action when the notification is clicked
  console.log('Notification clicked:', e.notification);

  // Close the notification after clicking
  e.notification.close();
});

self.addEventListener('notificationclose', function (e) {
  // Perform some custom action when the notification is closed
  console.log('Notification closed:', e.notification);
});

// Request notification permission when the service worker is installed
self.addEventListener('install', function (e) {
  e.waitUntil(
    self.registration.showNotification('Notification Permission', {
      body: 'Click to allow notifications.',
      actions: [
        { action: 'allow', title: 'Allow', icon: 'icon.png' },
        { action: 'deny', title: 'Deny', icon: 'icon.png' },
      ],
      data: {
        // Include any additional data if needed
        // For example, you might want to pass user preferences or settings
      },
    })
  );
});
