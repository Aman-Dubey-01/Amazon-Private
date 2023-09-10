import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCzfvN9aLBbBNb2RHrfHALaGCzfw3qIPxA",
    authDomain: "clone-e3e98.firebaseapp.com",
    projectId: "clone-e3e98",
    storageBucket: "clone-e3e98.appspot.com",
    messagingSenderId: "502847542304",
    appId: "1:502847542304:web:c8cc6107a981da6117d845",
    measurementId: "G-F6FK3RQ2NR"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };