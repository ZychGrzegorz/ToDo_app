import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCh04vetTp7pKL3z-4UT6L6-4DBqHuqcjo",
  authDomain: "todo-redux-fef9b.firebaseapp.com",
  databaseURL: "https://todo-redux-fef9b.firebaseio.com",
  projectId: "todo-redux-fef9b",
  storageBucket: "todo-redux-fef9b.appspot.com",
  messagingSenderId: "1055526158919",
  appId: "1:1055526158919:web:f0506683db574c03b4e762",
  measurementId: "G-8R6W4S6MH3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
