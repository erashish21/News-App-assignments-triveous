import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6A-cQQ5b9xEy86zc8dcfIrkNB3kHQnR8",
  authDomain: "news-app-fire.firebaseapp.com",
  projectId: "news-app-fire",
  storageBucket: "news-app-fire.appspot.com",
  messagingSenderId: "621866024137",
  appId: "1:621866024137:web:0e88e7f7eb402e6911a118",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

