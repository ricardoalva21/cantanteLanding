import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyCq65r5japSYMjN7DkYrSxzqLVylgU4H7k",
  authDomain: "yoyjara-landing.firebaseapp.com",
  projectId: "yoyjara-landing",
  storageBucket: "yoyjara-landing.firebasestorage.app",
  messagingSenderId: "516822987033",
  appId: "1:516822987033:web:ab3d360e6732b880441588",
  measurementId: "G-5HKKYFLRDR"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const messaging = getMessaging(app);