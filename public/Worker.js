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
