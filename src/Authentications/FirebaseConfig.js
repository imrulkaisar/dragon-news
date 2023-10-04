import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaG9YlmekDtPQnF22YD_68YIQcIs6KMc8",
  authDomain: "dragon-news-43f7d.firebaseapp.com",
  projectId: "dragon-news-43f7d",
  storageBucket: "dragon-news-43f7d.appspot.com",
  messagingSenderId: "981144411135",
  appId: "1:981144411135:web:a09b1713a8a68b3b2c25ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
