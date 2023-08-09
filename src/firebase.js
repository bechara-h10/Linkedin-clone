import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAYj1on1V76OO7jdAFduMriekB-Pvgou1c",
  authDomain: "linkedin-clone-84f71.firebaseapp.com",
  projectId: "linkedin-clone-84f71",
  storageBucket: "linkedin-clone-84f71.appspot.com",
  messagingSenderId: "652971162513",
  appId: "1:652971162513:web:4f133e378b0d71d0b03830",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
