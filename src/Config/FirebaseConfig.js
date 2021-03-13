import firebase from "firebase";
require("firebase/firestore");

const firebaseAuth = firebase.initializeApp({
  apiKey: "AIzaSyDzDqp_zba8zIoK5OSiqUb1IvuKVEsegqo",
  authDomain: "sirtec-63c98.firebaseapp.com",
  databaseURL: "https://sirtec-63c98.firebaseio.com",
  projectId: "sirtec-63c98",
  storageBucket: "sirtec-63c98.appspot.com",
  messagingSenderId: "529811018388",
  appId: "1:529811018388:web:f6cbcee9623008b0c75a81",
  measurementId: "G-MBTRE4N6H0",
});

export const firebaseDB = firebase.firestore();
export const firebaseStorage = firebase.storage();

export const firebaseCreate = firebase.initializeApp(
  {
    apiKey: "AIzaSyDzDqp_zba8zIoK5OSiqUb1IvuKVEsegqo",
    authDomain: "sirtec-63c98.firebaseapp.com",
    databaseURL: "https://sirtec-63c98.firebaseio.com",
    projectId: "sirtec-63c98",
    storageBucket: "sirtec-63c98.appspot.com",
    messagingSenderId: "529811018388",
    appId: "1:529811018388:web:f6cbcee9623008b0c75a81",
    measurementId: "G-MBTRE4N6H0",
  },
  "Create User"
);

export default firebaseAuth;
