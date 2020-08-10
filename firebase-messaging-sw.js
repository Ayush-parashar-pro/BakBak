// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCsAauRxDw4q1pf1S3bxt7RXjqcmSouB2k",
    authDomain: "bakbak-data-base.firebaseapp.com",
    databaseURL: "https://bakbak-data-base.firebaseio.com",
    projectId: "bakbak-data-base",
    storageBucket: "bakbak-data-base.appspot.com",
    messagingSenderId: "925222235484",
    appId: "1:925222235484:web:ea52ad9083f51e06b16599",
    measurementId: "G-D9GFXY2XTT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'You have new message';
    const notificationOptions = {
        body: payload.data.message,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});



