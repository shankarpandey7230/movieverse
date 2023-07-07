import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD44svBUlwy1tBY7fD711uboON1UT-uzqk",
  authDomain: "movieverse-78f1c.firebaseapp.com",
  projectId: "movieverse-78f1c",
  storageBucket: "movieverse-78f1c.appspot.com",
  messagingSenderId: "772259826746",
  appId: "1:772259826746:web:cb6c9044614e66e011b903",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");

export default app;
