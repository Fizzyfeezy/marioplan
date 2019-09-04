import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCnAkUh02GoGTPkZRfpusdemezl70kLyc8",
    authDomain: "marioplan-4c16a.firebaseapp.com",
    databaseURL: "https://marioplan-4c16a.firebaseio.com",
    projectId: "marioplan-4c16a",
    storageBucket: "",
    messagingSenderId: "104976630311",
    appId: "1:104976630311:web:66e637e12ae0bc87"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots : true})

  export default firebase