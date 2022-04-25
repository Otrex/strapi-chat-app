importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js')


// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyCr0Hc3b-F1KgKL30s4b_X91ljaLOKrFSo",
  authDomain: "pushnotifcation-ca5e5.firebaseapp.com",
  projectId: "pushnotifcation-ca5e5",
  storageBucket: "pushnotifcation-ca5e5.appspot.com",
  messagingSenderId: "1067652254071",
  appId: "1:1067652254071:web:ce661670a644089afa7972"
};
const key = "BC1mtP-qOA8vbgNMvFHe1wcvICSblPWV8IScA9DfZVTocCEFGA_kNl7zmrFG0t4VDtGnOX5PWMDGrp8Fo12XHPk"

const app = firebase.initializeApp(firebaseConfig)

app.messaging().getToken({ vapidKey: key })
.then((currentToken) => {
  if (currentToken) {
    console.log('client token', currentToken)
  } else {
    console.log('No registration token available. Request permission to generate one.');
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
})
