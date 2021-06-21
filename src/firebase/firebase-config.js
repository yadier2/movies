import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyC-YfClg9OLZTRebYBd1k84xG2hNKXn_Ms",
  authDomain: "movies-c1491.firebaseapp.com",
  projectId: "movies-c1491",
  storageBucket: "movies-c1491.appspot.com",
  messagingSenderId: "783358727896",
  appId: "1:783358727896:web:830b1c23b89575984529ad"
  };
  

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
  export {
      db,
      googleAuthProvider,
      facebookAuthProvider,
      firebase
  }