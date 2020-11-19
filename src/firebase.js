import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-LpbpCA68MLiIgzHcbGqgcMIcEtCyECY",
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

export { auth, storage }
export default db