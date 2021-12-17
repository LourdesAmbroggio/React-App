import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyA-9P7TsrRmODi3NAQwKDwJpKimHZig9sY",
  authDomain: "tienda-f4336.firebaseapp.com",
  projectId: "tienda-f4336",
  storageBucket: "tienda-f4336.appspot.com",
  messagingSenderId: "61241749532",
  appId: "1:61241749532:web:67e703f14e6374e23cefd9"
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}