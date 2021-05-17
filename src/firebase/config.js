import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore'
import 'firebase/analytics'
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCRNtXb4rAGE9pZIuVDUKsLj52zSsX9uAU",
    authDomain: "ninja-firegram-26bee.firebaseapp.com",
    projectId: "ninja-firegram-26bee",
    storageBucket: "ninja-firegram-26bee.appspot.com",
    messagingSenderId: "548863929764",
    appId: "1:548863929764:web:c5e7c68c9ed4e54cc46531",
    measurementId: "G-MFD6MP4W19"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const projectStorage = firebase.storage();
  const projectFirestore= firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  export {projectStorage,projectFirestore,timestamp};