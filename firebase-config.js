import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore-lite.js';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyBMEL8K4KkYAS5JKUQF2aOgCkqfWNhfdl0",
  authDomain: "DSCourse.firebaseapp.com",
  projectId: "dscourse-7b3f4",
  storageBucket: "DSCourse.appspot.com",
  messagingSenderId: "545330585102",
  appId: "1:545330585102:web:f4c40778dc73cf8264665f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, signInWithPopup };
