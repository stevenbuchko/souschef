import * as firebase from "firebase/app";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBD7y986gV_Ao-EXpl50GynKoeSNLm6_1M",
    authDomain: "sous-chef-bed75.firebaseapp.com",
    databaseURL: "https://sous-chef-bed75.firebaseio.com",
    projectId: "sous-chef-bed75",
    storageBucket: "sous-chef-bed75.appspot.com",
    messagingSenderId: "818297411185",
    appId: "1:818297411185:web:37df7b05d325d0fa33edd0",
    measurementId: "G-QWBL8SS8K0"
};


let app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();