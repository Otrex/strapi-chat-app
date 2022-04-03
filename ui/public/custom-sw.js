var self = this;
var mainPort = { x: 0 };
self.addEventListener("push", (event) => {
  console.log("port", mainPort);
  let data;
  if (event.data) {
    data = event.data.json();
  }
  const options = {
    body: data.message || "new notification",
  };

  mainPort.x && mainPort.x.postMessage({ working: true });
  event.waitUntil(
    self.registration.showNotification(JSON.stringify(mainPort), options)
  );
});

self.addEventListener("message", (event) => {
  if (event && event.data.type === "MAIN_THREAD") {
    mainPort.x = event.ports[0];
    mainPort.x.postMessage("Excfevev");

    event.waitUntil(self.registration.showNotification("connected", {}));
  }
});

// self.addEventListener("push", (event) => {
//   if (event.data) {
//     try {
//       const data = JSON.parse(event.data.json());
//       event.waitUntil(
//         self.registration.showNotification('new notification has been added', {
//           body: data.message || "new notification",
//         })
//       );
//     } catch (e) {
//       console.error('push event data parse fail');
//     }
//   }
// });
