if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((reg) => console.log("service worker registered"))
    .catch((err) => console.log("service worker not registered", err));
  navigator.serviceWorker
    .register("./firebase-messaging-sw.js")
    .then((reg) => console.log("service worker registered"))
    .catch((err) => console.log("service worker not registered", err));
}
