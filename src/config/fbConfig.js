import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCIVMzD1qT8JaVhNaQLhupYkK52MJeSdmY",
    authDomain: "fir-react-redux-65316.firebaseapp.com",
    databaseURL: "https://fir-react-redux-65316.firebaseio.com",
    projectId: "fir-react-redux-65316",
    storageBucket: "fir-react-redux-65316.appspot.com",
    messagingSenderId: "352406605546"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;