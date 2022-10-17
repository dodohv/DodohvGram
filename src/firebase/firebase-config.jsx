import * as firebase from "firebase/app";
import {getStorage} from 'firebase/storage';
import { getFirestore} from  'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAEzL1HBTCOvvGfMf2XHNfvyF4UKpbcENE",
  authDomain: "dodohvapi-59d2f.firebaseapp.com",
  databaseURL: "https://dodohvapi-59d2f-default-rtdb.firebaseio.com",
  projectId: "dodohvapi-59d2f",
  storageBucket: "dodohvapi-59d2f.appspot.com",
  messagingSenderId: "488973259999",
  appId: "1:488973259999:web:d4e8d952b0305fb5bc456a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = getStorage(firebase.initializeApp(firebaseConfig))
const projectFirestore = getFirestore(firebase.initializeApp(firebaseConfig))

export { projectStorage, projectFirestore};


/* //import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCIBHLxK4l1ChTAL_-Lj175kcnFYTuLi5c",
    authDomain: "dodohvapi.firebaseapp.com",
    databaseURL: "https://dodohvapi-default-rtdb.firebaseio.com",
    projectId: "dodohvapi",
    storageBucket: "dodohvapi.appspot.com",
    messagingSenderId: "357850792135",
    appId: "1:357850792135:web:0288f7f90be6598dc87ee2"
  };

  const app = initializeApp(firebaseConfig); */
//  export const db = getDatabase(app);
//   firebase.initializeApp(firebaseConfig);
//   const databaseRef = firebase.database().ref()
//   export const notesRef = databaseRef.child("notas")
//   export default firebase
// Import the functions you need from the SDKs you need
/* import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEzL1HBTCOvvGfMf2XHNfvyF4UKpbcENE",
  authDomain: "dodohvapi-59d2f.firebaseapp.com",
  databaseURL: "https://dodohvapi-59d2f-default-rtdb.firebaseio.com",
  projectId: "dodohvapi-59d2f",
  storageBucket: "dodohvapi-59d2f.appspot.com",
  messagingSenderId: "488973259999",
  appId: "1:488973259999:web:d4e8d952b0305fb5bc456a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); */