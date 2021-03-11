  
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDFqT7mr4rOFT9jzUcl5dL_BfSePDMWiGU",
  authDomain: "time-tracker-ce6df.firebaseapp.com",
  databaseURL:
    "https://time-tracker-ce6df-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "time-tracker-ce6df",
  storageBucket: "time-tracker-ce6df.appspot.com",
  messagingSenderId: "38080867191",
  appId: "1:38080867191:web:6bf522edc47cdd1403cf72",
};
firebase.initializeApp(firebaseConfig);
export default firebase;