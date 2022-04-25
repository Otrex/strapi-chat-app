import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCr0Hc3b-F1KgKL30s4b_X91ljaLOKrFSo",
  authDomain: "pushnotifcation-ca5e5.firebaseapp.com",
  projectId: "pushnotifcation-ca5e5",
  storageBucket: "pushnotifcation-ca5e5.appspot.com",
  messagingSenderId: "1067652254071",
  appId: "1:1067652254071:web:ce661670a644089afa7972"
};
const app = initializeApp(firebaseConfig)

export default getMessaging(app);