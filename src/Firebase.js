import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCrBf-5hPiHm3SoyMouAiEu6ymRX2ZZFnY",
  authDomain: "clone-34391.firebaseapp.com",
  projectId: "clone-34391",
  storageBucket: "clone-34391.appspot.com",
  messagingSenderId: "237603944587",
  appId: "1:237603944587:web:efe423c9d97f2c934abc8e",
  measurementId: "G-CKJ0RM2W33"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};