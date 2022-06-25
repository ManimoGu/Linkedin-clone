import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFQk90l6KTu4zPcjDYAuFPXPlV6TTAZAo",
    authDomain: "linkedin-clone-7906e.firebaseapp.com",
    projectId: "linkedin-clone-7906e",
    storageBucket: "linkedin-clone-7906e.appspot.com",
    messagingSenderId: "915032367244",
    appId: "1:915032367244:web:9174fec218ea9923455ba9",
    measurementId: "G-292HTFY71R"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage}

  export default db;


 