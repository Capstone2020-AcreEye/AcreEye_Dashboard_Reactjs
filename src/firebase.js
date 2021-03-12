import firebase from 'firebase'
require('dotenv').config()


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "acreeye.firebaseapp.com",
    databaseURL: "https://acreeye.firebaseio.com",
    projectId: "acreeye",
    storageBucket: "acreeye.appspot.com",
    messagingSenderId: "1031473176901",
    appId: "1:1031473176901:web:7dcc7cb46541ad39215e2c",
    measurementId: "G-5DFT5MZQ1D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebase.storage();
const googleProvider = new firebase.auth.GoogleAuthProvider()


export { auth, storage, googleProvider }
export default db