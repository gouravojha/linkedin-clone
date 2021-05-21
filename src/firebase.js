import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDYSdVnCTiRXZs8kkIOcjZpu7LAYX7NNmQ",
    authDomain: "linkedin-clone-go.firebaseapp.com",
    projectId: "linkedin-clone-go",
    storageBucket: "linkedin-clone-go.appspot.com",
    messagingSenderId: "5792458348",
    appId: "1:5792458348:web:ee0fd41f61b781bcb71a49"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();

export {db,auth};