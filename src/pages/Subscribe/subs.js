// src/App.js
import React, { useEffect } from 'react';

const publicVapidKey = "BB02Q7LhDkRNBbUX2w9kSaazwi7xqr-YOfEtQjgxWZQd2m2EjvG1rd0DvhpaiNhDHIp4Z6R2Iy1A-9k2wRuR1oo";
const privateVapidKey = "SXep1BOYlc_yalD6Z-bTR-0TXCP1DzTwT7MPxCSL53I";
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

          // Request notification permission with a custom alert
          const permission = await new Promise((resolve) => {
            const userChoice = window.confirm('Allow notifications?');
            resolve(userChoice ? 'granted' : 'denied');
          });

          console.log('Notification permission:', permission);

          if (permission === 'granted') {
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
              await fetch("http://192.168.1.4:4000/api/subscribe", {
                method: "POST",
                body: JSON.stringify({ subscription }),
                headers: {
                  "Content-Type": "application/json",
                },
              });

              console.log('Subscription sent to API');
            }
          } else {
            console.warn('Notification permission denied.');
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
