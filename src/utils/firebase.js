import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC6R3eEYvvmg5cm6iccwyBpY1p4rgk9GsE",
  authDomain: "meetup-app-28ecd.firebaseapp.com",
  projectId: "meetup-app-28ecd",
  storageBucket: "meetup-app-28ecd.appspot.com",
  messagingSenderId: "486989238142",
  appId: "1:486989238142:web:d3551e8d17baea1bae2d2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);