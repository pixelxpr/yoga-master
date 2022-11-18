// Modular Firebase v.9 Initialization.
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "@firebase/database";
import { getAnalytics, isSupported } from "firebase/analytics";

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const initFirebase = () => {
  if (typeof window !== undefined) {
    initializeApp(clientCredentials);
    console.log("Firebase has been init successfully");
  }
}

const app = initializeApp(clientCredentials);

const db = getFirestore();

// const realDB = getDatabase(app);
isSupported().then(yes => yes ? getAnalytics(app) : null);

// export { initFirebase, db, realDB };// Import the functions you need from the SDKs you need
export { initFirebase, db };