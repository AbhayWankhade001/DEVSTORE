// src/App.js
import React, { useEffect } from 'react';

const publicVapidKey = "BB02Q7LhDkRNBbUX2w9kSaazwi7xqr-YOfEtQjgxWZQd2m2EjvG1rd0DvhpaiNhDHIp4Z6R2Iy1A-9k2wRuR1oo";

function Subs() {
  useEffect(() => {
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          // Register service worker
          const registration = await navigator.serviceWorker.register('/worker.js', { scope: '/' });

          // Ensure the service worker is activated
          await navigator.serviceWorker.ready;

          console.log('Service Worker activated');

          // Check if Notifications API is supported
          if ('Notification' in window) {
            // Request notification permission
            const permission = await Notification.requestPermission();
            console.log('Notification permission:', permission);

            if (permission === 'granted') {
              // Check if PushManager is supported
              if ('PushManager' in window) {
                // Check if user is already subscribed
                const existingSubscription = await registration.pushManager.getSubscription();

                if (existingSubscription) {
                  console.log('User is already subscribed:', existingSubscription);
                } else {
                  // Subscribe for the first time
                  const subscription = await registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: publicVapidKey,
                  });

                  console.log('User subscribed:', subscription);

                  // Send subscription to API
                  await fetch("http://localhost:4000/api/subscribe", {
                    method: "POST",
                    body: JSON.stringify({ subscription }),
                    headers: {
                      "Content-Type": "application/json",
                    },
                  });

                  console.log('Subscription sent to API');
                }
              } else {
                console.warn('PushManager is not supported.');
              }
            } else {
              console.warn('Notification permission denied.');
            }
          } else {
            console.warn('Notifications API is not supported.');
          }
        } catch (error) {
          console.error('Error registering service worker:', error);
        }
      }
    };

    registerServiceWorker();
  }, []);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold mb-4">Push Notification Using Web-Push</h1>
    </div>
  );
}

export default Subs;
