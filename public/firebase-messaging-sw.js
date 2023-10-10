

/* eslint-disable */
import { initializeApp } from "firebase/app";
import { getMessaging ,onBackgroundMessage } from "firebase/messaging/sw";


const firebaseApp = initializeApp({
    apiKey: "AIzaSyB0IRVwO9dklvHm_cMG-_Qq4e6u6eK8fmw",
    authDomain: "moj-notification-system.firebaseapp.com",
    projectId: "moj-notification-system",
    storageBucket: "moj-notification-system.appspot.com",
    messagingSenderId: "64185784083",
    appId: "1:64185784083:web:049f2332110eefb294ece6",
    measurementId: "G-Q1Q6QJJPQ6"
});

const messaging = getMessaging(firebaseApp);

onBackgroundMessage(messaging, (payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });
