import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyD_OBXdRcJ2j9AxXCrO5keR4yA9qvgjyxk",
    authDomain: "tabtimize.firebaseapp.com",
    databaseURL: "https://tabtimize-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "tabtimize",
    storageBucket: "tabtimize.appspot.com",
    messagingSenderId: "275081256152",
    appId: "1:275081256152:web:0f3dafe3c3191f7b958bad",
    measurementId: "G-4Y37QM8G7F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();


  // utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')

// export utils/refs
export {
  db,
  auth,
  usersCollection
}