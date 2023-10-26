import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

console.log(process.env.FIREBASE_API_KEY,process.env.FIREBASE_PROJECT_ID,"Environments");
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
     await signInWithPopup(auth, GoogleProvider);
    // User is signed in with Google
  } catch (error) {
    // Handle errors
    console.error(error);
  }
};


export default app;
