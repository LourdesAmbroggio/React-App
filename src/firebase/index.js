import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyAY0LWpgKzW4QZBrA_X_cA7UOysenDQ7j4",
  authDomain: "e-commerce-97e4f.firebaseapp.com",
  projectId: "e-commerce-97e4f",
  storageBucket: "e-commerce-97e4f.appspot.com",
  messagingSenderId: "737870735636",
  appId: "1:737870735636:web:a6bafcb50f546e2e7efa01",
  measurementId: "G-KRLHFSR300"
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}