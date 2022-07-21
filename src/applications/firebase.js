import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, setPersistence, browserLocalPersistence} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyB-1RuFCx1FcF3udx6zWNFJ6rvHUuZdwrg",
  authDomain: "rosber-17b30.firebaseapp.com",
  projectId: "rosber-17b30",
  storageBucket: "rosber-17b30.appspot.com",
  messagingSenderId: "1007280455928",
  appId: "1:1007280455928:web:693ec7caa190b1c7ed3b0d",
  measurementId: "G-EX1J58W7EE"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(firebaseApp);

setPersistence(auth, browserLocalPersistence);