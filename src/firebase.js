import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyig-ipp7PrhKSuMEla9cyks7TOQrrdE4",
  authDomain: "where-s-waldo-5db0b.firebaseapp.com",
  projectId: "where-s-waldo-5db0b",
  storageBucket: "where-s-waldo-5db0b.appspot.com",
  messagingSenderId: "875126258252",
  appId: "1:875126258252:web:c59a92f34c3e4a88a752e9",
  measurementId: "G-FCFYKE6Q7H",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app , analytics, auth, firestore}
