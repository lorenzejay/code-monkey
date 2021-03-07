import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

//this is from firebase
var firebaseConfig = {
  apiKey: "AIzaSyBYu9ujI2rg2N8qeN6bNelY1YnVRzPbHwI",
  authDomain: "code-monkey-c4466.firebaseapp.com",
  projectId: "code-monkey-c4466",
  storageBucket: "code-monkey-c4466.appspot.com",
  messagingSenderId: "549357847031",
  appId: "1:549357847031:web:17080787c7571565ba2ef2",
  measurementId: "G-1KEP9373DC",
};

//init
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const app = firebase.app();
const auth = firebase.auth();
const db = firebase.firestore();
const now = firebase.firestore.Timestamp.now();
const storage = firebase.storage();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export { auth, db, now, storage, googleProvider };
console.log(app.name ? "Firebase Mode Activated!" : "Firebase not working :(");
