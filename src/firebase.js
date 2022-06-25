import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtqf8F3wg4NGF2pAGCpftgT4oOs9GoqF4",
  authDomain: "disney-clone-62e49.firebaseapp.com",
  projectId: "disney-clone-62e49",
  storageBucket: "disney-clone-62e49.appspot.com",
  messagingSenderId: "204375791534",
  appId: "1:204375791534:web:81f9de879acfefa1455a3f",
  measurementId: "G-7L7G0ET9X9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;