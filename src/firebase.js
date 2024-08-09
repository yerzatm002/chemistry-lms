// src/firebase.js
// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDi34iP9xkZoIAfAsvM8m8n1PY9uvhW4io",
  authDomain: "chemistry-bcf93.firebaseapp.com",
  projectId: "chemistry-bcf93",
  storageBucket: "chemistry-bcf93.appspot.com",
  messagingSenderId: "805984648748",
  appId: "1:805984648748:web:e2a17752872b254b151b89"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);