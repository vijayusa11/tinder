import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDPIFxzxmSmyzOxrsYLl5cS3iN4ucVraRc",
    authDomain: "tinder-5ee9b.firebaseapp.com",
    databaseURL: "https://tinder-5ee9b.firebaseio.com",
    projectId: "tinder-5ee9b",
    storageBucket: "tinder-5ee9b.appspot.com",
    messagingSenderId: "722283021632",
    appId: "1:722283021632:web:058186fa1672916f3b66a5",
    measurementId: "G-DHYSE0SFVV"
})

const database = firebaseApp.firestore();

export default database