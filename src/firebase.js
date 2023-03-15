//import firebase from 'firebase'
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  
};

// const firebaseApp = firebase.initialize(firebaseConfig)
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export {auth}
// export default db;

  // Initialize Firebase
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const auth =getAuth();
  const db = getFirestore();
  const storage = getStorage();
  
  export default app;
  export { db, storage, auth };