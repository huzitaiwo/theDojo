import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBeiiRjk7XT_HNihAOn2pqseloep9W3WMw",
  authDomain: "thedojo-5b5a0.firebaseapp.com",
  projectId: "thedojo-5b5a0",
  storageBucket: "thedojo-5b5a0.appspot.com",
  messagingSenderId: "1053561104242",
  appId: "1:1053561104242:web:a4864653000f744f7e5feb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// initialize services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectAuth, projectFirestore, timestamp }