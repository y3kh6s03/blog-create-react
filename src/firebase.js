import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC_tihlfvjAa6mP904aAv2bvICL5r-kqtM",
  authDomain: "blog-create-react.firebaseapp.com",
  projectId: "blog-create-react",
  storageBucket: "blog-create-react.appspot.com",
  messagingSenderId: "945269420863",
  appId: "1:945269420863:web:4dc2c734624c94784e598a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth, provider, db};