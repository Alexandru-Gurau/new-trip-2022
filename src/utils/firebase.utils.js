import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCL1WTthZryefMrj6DQ6dTsmOYAUz8gx_g',
  authDomain: 'sunsetgo-15383.firebaseapp.com',
  projectId: 'sunsetgo-15383',
  storageBucket: 'sunsetgo-15383.appspot.com',
  messagingSenderId: '365109066335',
  appId: '1:365109066335:web:4662f1c5a9c224bb2779ea',
};

const app = initializeApp(firebaseConfig);

console.log(app);

export const auth = getAuth();
