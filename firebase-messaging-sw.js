importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js"
);
// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
importScripts(
  "https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js"
);

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  messagingSenderId: "243459482774",
  apiKey: "AIzaSyAtjnNNaxMd6Ga8k990SAFcj5vIH_aEnME",
  projectId: "dahl-985a9",
  appId: "1:243459482774:web:d24ff58d9fbdaf13314eb7",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

self.addEventListener("install", (evt) => {});
self.addEventListener("activate", (evt) => {});
