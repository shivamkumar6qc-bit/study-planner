importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js");
const firebaseConfig = {
    apiKey: "AIzaSyCPtKa9Kx3sutOWggVS5GOnbOcr_b7yj-U",
  authDomain: "study-planner-notifications.firebaseapp.com",
  projectId: "study-planner-notifications",
  storageBucket: "study-planner-notifications.firebasestorage.app",
  messagingSenderId: "442677879515",
  appId: "1:442677879515:web:9ab9630a4cffe1e716a2fe"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.onBackgroundMessage(function (payload) {
    const notificationTitle =
        payload.notification?.title || "Study Planner";

    const notificationOptions = {
        body: payload.notification?.body || "Bhai, padhai ka time ho gaya!",
        icon: "./icon.png"
    };

    self.registration.showNotification(
        notificationTitle,
        notificationOptions
    );
});
